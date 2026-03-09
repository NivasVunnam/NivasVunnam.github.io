# Push This Project to Git

Follow these steps from the **project folder** (where `index.html` and `style.css` are).

---

## If the repo is NOT yet on GitHub (new repo)

### 1. Create a new repository on GitHub

- Go to [github.com/new](https://github.com/new)
- Repository name: `nivasvunnam.github.io` (for GitHub Pages) or any name you like
- Leave it **empty** (no README, no .gitignore)
- Click **Create repository**

### 2. Run these commands in the project folder

```bash
# Go to project folder (adjust path if needed)
cd /Users/saisarathvunnam/Downloads/NivasVunnam.github.io-main

# Start git (only if not already a git repo)
git init

# Add all files (respects .gitignore)
git add .

# First commit
git commit -m "Portfolio: full site with light/dark theme, resume icon, git-ready"

# Use main branch
git branch -M main

# Add your GitHub repo (replace with your repo URL)
git remote add origin https://github.com/nivasvunnam/nivasvunnam.github.io.git

# Push
git push -u origin main
```

Replace `nivasvunnam/nivasvunnam.github.io` with **your** username and repo name if different.

---

## If the repo is ALREADY on GitHub (existing repo)

```bash
cd /Users/saisarathvunnam/Downloads/NivasVunnam.github.io-main

git add .
git commit -m "Portfolio: full site with light/dark theme, resume icon, git-ready"
git push origin main
```

(Use your actual branch name if it’s not `main`.)

---

## What gets pushed (and what doesn’t)

- **Pushed:** `index.html`, `style.css`, all `.js` files, `README.md`, `.gitignore`, `package.json`, `package-lock.json`, `server.js`, `PUSH_TO_GIT.md`
- **Ignored (not pushed):** `node_modules/`, `.DS_Store`, `.env`, `.idea/`, `.vscode/`, logs, etc. (see `.gitignore`)

---

## After pushing – enable GitHub Pages

1. Open your repo on GitHub.
2. **Settings** → **Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. Branch: **main**, folder: **/ (root)**.
5. Save. Your site will be at `https://nivasvunnam.github.io` (or `https://USERNAME.github.io/REPO_NAME` for other repo names).
