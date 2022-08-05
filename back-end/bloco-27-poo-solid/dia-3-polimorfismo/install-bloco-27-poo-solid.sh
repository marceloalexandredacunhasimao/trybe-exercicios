#!/bin/sh
set -e
cd "$(dirname "$0")"

npm init -y
npm i typescript ts-node

npx tsc --init
sed -i 's|    // "outDir": "./",|    "outDir": "./dist",|g' tsconfig.json || :

echo "node_modules" >> .gitignore
