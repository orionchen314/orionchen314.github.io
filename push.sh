#!/bin/bash

set -e

if [ -z "$1" ]; then
  echo "用法: ./push.sh \"commit message\""
  exit 1
fi

echo "Running prettier..."
npx prettier . --write

#echo "Checking git status..."
#git status

echo "Adding files..."
git add .

echo "Committing..."
git commit -m "$1"

if ! git push; then
  echo "Push failed. Trying git pull --rebase..."
  git pull --rebase
  git push
fi

echo "Done."