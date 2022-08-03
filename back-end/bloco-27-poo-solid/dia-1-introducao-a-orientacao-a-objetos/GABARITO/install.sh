#!/bin/sh
set -e
cd "$(dirname "$0")"

npm init -y
npm i typescript ts-node

npx tsc --init

echo "node_modules" >> .gitignore
