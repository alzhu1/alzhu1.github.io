#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# copy 404.html file to dist
cp 404.html ./dist/

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'Deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:alzhu1/alzhu1.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -
