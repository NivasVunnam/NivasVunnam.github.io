#!/bin/bash
# Run this from the project folder to push to GitHub.
# Usage: ./push-to-git.sh
# Or: bash push-to-git.sh

set -e

# Replace with your GitHub repo URL (e.g. https://github.com/nivasvunnam/nivasvunnam.github.io.git)
REMOTE="${GIT_REMOTE:-https://github.com/nivasvunnam/nivasvunnam.github.io.git}"

if [ ! -d .git ]; then
  echo ">>> Initializing git..."
  git init
  git branch -M main
fi

echo ">>> Adding all files..."
git add .

echo ">>> Committing..."
git commit -m "Portfolio: full site with light/dark theme, resume icon, git-ready" || true

echo ">>> Pushing to origin main..."
git branch -M main 2>/dev/null || true
git remote add origin "$REMOTE" 2>/dev/null || git remote set-url origin "$REMOTE"
git push -u origin main

echo ">>> Done. Check your repo on GitHub."
