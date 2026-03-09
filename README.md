# Portfolio — Vunnam Sai Nivas

**Java Full Stack Developer** · [nivasvunnam.github.io](https://nivasvunnam.github.io)

Static portfolio site with light/dark theme, resume-aligned content, and Formspree contact form.

## Run locally

```bash
# Option 1: Python
python3 -m http.server 3456

# Option 2: Node (if you have npx)
npx serve -p 3456
```

Then open **http://localhost:3456**

## Push to Git

**Quick:** See **[PUSH_TO_GIT.md](PUSH_TO_GIT.md)** for step-by-step instructions.

**Or run the script (from project folder):**
```bash
chmod +x push-to-git.sh
./push-to-git.sh
```
To use a different repo URL: `GIT_REMOTE=https://github.com/USER/REPO.git ./push-to-git.sh`

**Or run manually:**
```bash
git init
git add .
git commit -m "Portfolio: full site with light/dark theme"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```
Replace `YOUR_USERNAME` and `YOUR_REPO` with your GitHub username and repo name.

## Deploy to GitHub Pages

1. Push this repo to GitHub (e.g. `nivasvunnam/nivasvunnam.github.io` for a user site).
2. In repo **Settings → Pages**, set source to **main** (or your branch) and **/ (root)**.
3. Save; the site will be at `https://nivasvunnam.github.io`.

## Theme

- **Light:** Navy & gold (resume-style).
- **Dark:** Slate, teal, and amber — toggle via the 🌙/☀️ button in the nav.

## Structure

- `index.html` — Single-page layout
- `style.css` — Layout + light/dark theme variables
- `*.js` — Data (skills, projects, timeline, certs, achievements) and render/theme/animations
