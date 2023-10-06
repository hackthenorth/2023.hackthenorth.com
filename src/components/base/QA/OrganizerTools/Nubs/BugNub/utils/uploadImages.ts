import axios from "axios";

const ENDPOINT = "https://staging-api.hackthenorth.com/v3/proxy";
const GITHUB_BASE_URL = "https://api.github.com/repos/hackathon/bugnub-images";

const SUCCESS_CODE = 201;

const toBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>
      // remove the header
      resolve((reader.result as string).split(",")[1]);
    reader.onerror = (error) => reject(error);
  });

const uploadImage = async (issueTitle: string, image: File) => {
  const timestamp = Date.now(); // prepend timestamp to ensure unique filename
  const API_ENDPOINT = `${ENDPOINT}?url=${GITHUB_BASE_URL}/contents/${timestamp}_${image.name}`;

  return axios.put(
    API_ENDPOINT,
    {
      message: `[AUTOMATED] Upload image for issue "${issueTitle}"`,
      committer: {
        name: "Hack the North Bot",
        email: "platform+bot@hackthenorth.com",
      },
      content: (await toBase64(image)) || {},
    },
    {
      headers: {
        Authorization: `Basic [[GITHUB_CREDS]]`,
      },
    }
  );
};

export const uploadImages = async (issueTitle: string, images: File[]) => {
  // i am too lazy to get github‘s response return interface
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const results: any[] = [];
  let success = true;
  try {
    for (const image of images) {
      const res = await uploadImage(issueTitle, image);

      results.push(res);
      if (res.status !== SUCCESS_CODE) {
        success = false;
      }
    }
  } catch (e) {
    success = false;
    // eslint-disable-next-line no-console
    console.error(e);
  }

  return {
    success: success,
    images: results.map((r) => ({
      url: r.data.content.html_url + "?raw=true",
    })),
  };
};
