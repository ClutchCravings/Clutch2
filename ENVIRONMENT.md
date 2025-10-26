# Environment Variables

This document describes the environment variables required for the Twitch Multi-Stream Viewer application.

## Required Variables

### Twitch API Configuration

```bash
# Twitch OAuth Application Credentials
VITE_TWITCH_CLIENT_ID=your_twitch_client_id_here
VITE_TWITCH_REDIRECT_URI=http://localhost:5173/auth/callback

# Optional: Twitch API Base URL (defaults to https://api.twitch.tv/helix)
VITE_TWITCH_API_URL=https://api.twitch.tv/helix
```

### Application Configuration

```bash
# Application Environment
NODE_ENV=development

# Optional: Custom API endpoints
VITE_API_BASE_URL=https://your-api-domain.com
```

## Setup Instructions

### Development

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in your Twitch application credentials:
   - Go to [Twitch Developer Console](https://dev.twitch.tv/console)
   - Create a new application
   - Copy the Client ID
   - Set the OAuth Redirect URL to match your local development URL

### Production

Set the following environment variables in your deployment platform:

- **Vercel**: Add variables in the Vercel dashboard under Settings > Environment Variables
- **Netlify**: Add variables in Site Settings > Environment Variables
- **Railway/Render**: Add variables in the service settings

## Security Notes

- Never commit `.env` files to version control
- Use different Twitch applications for development and production
- Ensure redirect URIs match your deployment URLs exactly
- All client-side variables must be prefixed with `VITE_`

## Twitch Application Setup

1. Visit [Twitch Developer Console](https://dev.twitch.tv/console)
2. Click "Register Your Application"
3. Fill in the application details:
   - **Name**: Your application name
   - **OAuth Redirect URLs**: 
     - Development: `http://localhost:5173/auth/callback`
     - Production: `https://yourdomain.com/auth/callback`
   - **Category**: Website Integration
4. Copy the generated Client ID
5. Add the Client ID to your environment variables

## Troubleshooting

### Common Issues

- **Invalid redirect URI**: Ensure the redirect URI in your Twitch app matches exactly
- **Client ID not found**: Verify the environment variable name includes the `VITE_` prefix
- **CORS errors**: Check that your domain is properly configured in the Twitch application

### Testing Environment Variables

You can verify your environment variables are loaded correctly by checking the browser console in development mode.