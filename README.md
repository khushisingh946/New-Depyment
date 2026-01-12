# Nexus AI-Powered Workspace

Nexus is a high-performance personal dashboard featuring task management, data visualization, and a built-in AI assistant powered by Google Gemini 3 Flash.

## 🚀 Deployment Guide

### 1. GitHub Pages (Free for Public Repos)
If GitHub is asking you to "upgrade," it is because your repository is currently **Private**.
- **The Fix**: Go to **Settings** > **General** > Scroll to **Danger Zone** > **Change visibility** > **Make public**.
- Once public, go to **Settings** > **Pages** and enable it for the `main` branch.

### 2. Custom Domain Setup
1.  **Update CNAME File**: I have added a `CNAME` file to your project. **Open it and change the text inside to match your custom domain exactly** (e.g., `www.example.com`).
2.  **DNS Records**: Ensure your domain registrar has the A records (185.199.108.153, etc.) and the CNAME record pointing to `username.github.io`.

## 🛠️ Troubleshooting "404 - Site Not Found"

1.  **Check the Actions Tab**: In your GitHub repository, click on the **Actions** tab. Look for a workflow named "pages-build-deployment". 
    - If it's **Red**: Click it to see the error. Usually, it's a missing file or a syntax error.
    - If it's **Yellow**: It is still building. Wait 2–3 minutes.
    - If it's **Green**: The site is live!
2.  **Enforce HTTPS**: In Settings > Pages, make sure "Enforce HTTPS" is checked. It might be disabled for a few minutes while GitHub issues your SSL certificate.
3.  **Clear Browser Cache**: Sometimes your browser remembers the 404 page. Try opening your domain in an Incognito/Private window.

## 💻 Local Development

This project uses modern ES modules via `esm.sh`, so no complex build tools (like Webpack or Vite) are strictly required for local viewing.

1. Clone the repo: `git clone <your-link>`
2. Install a simple server: `npm install -g serve`
3. Run: `serve .`

## 🔑 AI Configuration
The app uses `process.env.API_KEY`. When deploying to Vercel or Netlify, add your Gemini API Key in the "Environment Variables" section of their dashboard settings.

## 📄 License
MIT License - see the [LICENSE](LICENSE) file for details.
