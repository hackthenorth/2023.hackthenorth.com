#!/bin/bash
set -e
export CI=false
git checkout master
git pull

npm version $BUILDKITE_BRANCH --git-tag-version=false
npm run build

git commit -am "Bump version to $BUILDKITE_BRANCH [ci skip]"
git push origin master
git push -f origin master:release