# Nexus AI-Powered Workspace

Nexus is a high-performance personal dashboard featuring task management, data visualization, and a built-in AI assistant powered by Google Gemini 3 Flash.

## 🚀 Deployment Guide

### 1. GitHub Pages (Free for Public Repos)
If GitHub is asking you to "upgrade," it is because your repository is currently **Private**.
- **The Fix**: Go to **Settings** > **General** > Scroll to **Danger Zone** > **Change visibility** > **Make public**.
- Once public, go to **Settings** > **Pages** and enable it for the `main` branch.

### 2. Vercel / Netlify (Free for Private Repos)
If you want to keep your code private but still host the app for free:
1. Connect your GitHub account to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
2. Select this repository.
3. It will automatically detect the settings and deploy your `index.html`.

## 💻 Local Development

This project uses modern ES modules via `esm.sh`, so no complex build tools (like Webpack or Vite) are strictly required for local viewing.

1. Clone the repo: `git clone <your-link>`
2. Install a simple server: `npm install -g serve`
3. Run: `serve .`

## 🔑 AI Configuration
The app uses `process.env.API_KEY`. When deploying to Vercel or Netlify, add your Gemini API Key in the "Environment Variables" section of their dashboard settings.

## 📄 License
MIT License - see the [LICENSE](LICENSE) file for details.
