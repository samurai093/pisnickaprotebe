---
description: How to deploy the application to Netlify
---

1. Ensure all changes are committed and pushed to GitHub.
   ```powershell
   git add .
   git commit -m "Deploy update"
   git push origin main
   ```
2. Log in to [Netlify](https://app.netlify.com/).
3. Click "Add new site" -> "Import an existing project".
4. Select "GitHub" and authorize Netlify.
5. Select the repository `samurai093/pisnickaprotebe`.
6. Netlify should automatically detect the settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
7. Click "Deploy site".
8. Once deployed, if you have a custom domain, go to "Domain settings" in Netlify to configure `pisnickaprotebe.cz`.
