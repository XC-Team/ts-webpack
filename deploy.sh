#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m $1

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:zenquan/ts-webpack-template.git master:gh-pages

cd ../../../
git init
git add -A
git commit -m $2
git push origin master

cd -