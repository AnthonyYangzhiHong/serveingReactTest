#!/bin/zsh

rm -rf build1
rm -rf build2

cd test && npm run build
mv build .. && mv ../build ../build1

cd ../test2 && npm run build
mv build .. && mv ../build ../build2

