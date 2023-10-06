/* eslint-disable @typescript-eslint/no-var-requires */
const imagemin = require("imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");
const imageminSvgo = require("imagemin-svgo");
const util = require("util");
const fs = require("fs");
const glob = require("glob");
const copyFile = util.promisify(fs.copyFile);
const unlink = util.promisify(fs.unlink);
const { exec } = require("child_process");
const { join, basename } = require("path");

const minimizeFile = async (from, to) => {
  await imagemin([from], to, {
    plugins: [
      imageminMozjpeg({
        quality: 70,
      }),
      imageminPngquant({
        speed: 1, // slowest speed, but better quality/compression
        strip: true, // removes metadata
        quality: [0.4, 0.7], // try to optimize with minimum amount to reach higher index. if the final image is worse quality than lower index, abort
      }),
      imageminSvgo(),
    ],
  });
};

/* eslint-disable no-console */
const optimizeImages = async (files) =>
  files.forEach(async (file) => {
    const tempFolder = join(__dirname, "image-minimizer-temp");
    const tempFile = join(tempFolder, basename(file));

    // minimize the image
    try {
      await minimizeFile(file, tempFolder);
    } catch (err) {
      console.error(`⚠️ Failed to minimize ${file}!`);
      console.error(err);
    }

    // copy the optimized image from the temp folder to its original location
    try {
      await copyFile(tempFile, file);
      await unlink(tempFile);
      console.log(`✅  Successfully optimized ${file}!`);
    } catch (err) {
      console.error(`⚠️  Failed to overwrite ${file}!`);
      console.error(err);
    }
  });

const findAndOptimizeRecentImages = async () =>
  exec(
    // lists paths for all image files that were changed since the last time the bot committed to this branch
    "git diff --name-only $(git log --grep='🤖 Optimize image assets [ci skip]' --format='%H' -n 1) HEAD | egrep '.png$|.jpg$|.jpeg$|.svg$'",
    async (err, stdout) => {
      if (err) {
        console.error("❗️  Failed to list changed files or no files changed.");
        console.error(err);
        return;
      }

      let files = stdout.split(/\r?\n/); // split output into individual files by newline
      files.pop(); // always has newline at end of file, so remove last empty filename in array

      optimizeImages(files);
    }
  );

const findAndOptimizeAllImages = async () =>
  glob("{src,public}/**/*.{jpg,jpeg,svg,png}", async (err, files) => {
    if (err) {
      console.error("❗️  Failed to find files to optimize.");
    } else {
      optimizeImages(files);
    }
  });

/**
 * **start script**
 * */
const args = process.argv.slice(2);
const shouldOptimizeAll = args.some((arg) => arg === "-a" || arg === "--all");

if (shouldOptimizeAll) {
  findAndOptimizeAllImages();
} else {
  findAndOptimizeRecentImages();
}
