# GitHub Pages Deployment Guide

This guide explains how to deploy your Twitch Multi-Stream Viewer to GitHub Pages.

## Prerequisites

- GitHub repository for your project
- `gh-pages` package installed (already done)
- Project built and tested locally

## Deployment Steps

### 1. Update Repository Settings

1. Go to your GitHub repository
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose **gh-pages** branch and **/ (root)** folder
5. Click **Save**

### 2. Update Configuration

The project is already configured for GitHub Pages deployment:

- `vite.config.ts` - Sets the correct base path for production
- `package.json` - Includes deployment scripts (you'll need to add these manually)

### 3. Manual Package.json Updates Needed

Add these scripts to your `package.json`:

```json
{
  "name": "twitch-multi-stream-viewer",
  "homepage": "https://yourusername.github.io/twitch-multi-stream-viewer",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Replace `yourusername` with your actual GitHub username.

### 4. Deploy to GitHub Pages

Run the deployment command:

```bash
npm run deploy
```

This will:
1. Build the project (`npm run build`)
2. Deploy the `dist` folder to the `gh-pages` branch
3. GitHub Pages will automatically serve your site

### 5. Access Your Site

Your site will be available at:
`https://yourusername.github.io/twitch-multi-stream-viewer`

## Environment Variables for Production

For GitHub Pages deployment, you'll need to set up environment variables:

1. Go to your repository **Settings** > **Secrets and variables** > **Actions**
2. Add your Twitch API credentials as repository secrets
3. Update your build process to use these secrets

## Troubleshooting

### Common Issues

1. **404 Error**: Check that the base path in `vite.config.ts` matches your repository name
2. **Blank Page**: Ensure all assets are loading with the correct base path
3. **Routing Issues**: GitHub Pages doesn't support client-side routing by default

### Client-Side Routing Fix

For React Router to work on GitHub Pages, add a `404.html` file to your `public` folder:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Twitch Multi-Stream Viewer</title>
    <script type="text/javascript">
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>
```

## Automatic Deployment with GitHub Actions

For automatic deployment on every push, create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
      env:
        VITE_TWITCH_CLIENT_ID: ${{ secrets.VITE_TWITCH_CLIENT_ID }}
        VITE_TWITCH_REDIRECT_URI: ${{ secrets.VITE_TWITCH_REDIRECT_URI }}
    
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Next Steps

1. Update `package.json` with the deployment scripts
2. Push your code to GitHub
3. Run `npm run deploy` to deploy
4. Configure your Twitch app redirect URI to match your GitHub Pages URL
5. Test your deployed application

Your Twitch Multi-Stream Viewer is now ready for GitHub Pages! 🚀