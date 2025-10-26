# Twitch Multi-Stream Viewer

A modern React application that allows users to watch up to 6 Twitch streams simultaneously with integrated chat functionality, arranged in a clean 2×3 grid layout.

## Features

- **Multi-Stream Viewing**: Watch 6 Twitch streams simultaneously in a responsive grid layout
- **Integrated Chat**: Each stream includes its respective chat panel positioned to the right
- **Twitch Authentication**: Secure login with Twitch OAuth to access personalized features
- **Followed Streamers**: Horizontal scrollable list of your followed streamers for quick access
- **Global Controls**: Mute all streams or turn off all streams with one click
- **Stream Management**: Individual stream controls for volume, chat toggle, and positioning
- **Responsive Design**: Clean, modern interface that adapts to different screen sizes

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Authentication**: Twitch OAuth
- **State Management**: React Context API
- **Routing**: React Router v6
- **UI Components**: Radix UI primitives with custom styling

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Twitch Developer Account for API access

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd twitch-multi-stream-viewer
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Create a Twitch application at [dev.twitch.tv](https://dev.twitch.tv/console)
   - Configure your environment variables in your deployment platform

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Main navigation header
│   ├── LoginScreen.tsx # Authentication interface
│   ├── MultiStreamViewer.tsx # Main application container
│   ├── StreamGrid.tsx  # 2×3 grid layout manager
│   ├── StreamPlayer.tsx # Individual stream component
│   └── FollowedStreamers.tsx # Horizontal streamer list
├── contexts/           # React context providers
│   └── AuthContext.tsx # Authentication state management
├── types/             # TypeScript type definitions
│   ├── twitch.ts      # Twitch API types
│   └── supabase.ts    # Database types
├── stories/           # Storybook stories for UI components
└── lib/              # Utility functions
```

## Usage

1. **Authentication**: Click the login button to authenticate with your Twitch account
2. **Select Streams**: Browse your followed streamers in the horizontal list at the top
3. **Add to Grid**: Click on a streamer to assign them to an available grid position
4. **Manage Streams**: Use individual controls to adjust volume, toggle chat, or close streams
5. **Global Controls**: Use the header controls to mute all or turn off all streams at once

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Component Development

This project uses Storybook for component development and documentation. Stories are located in the `src/stories/` directory.

### Styling

The project uses Tailwind CSS with a custom design system. UI components are built with shadcn/ui and Radix UI primitives.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Twitch API](https://dev.twitch.tv/docs/api/) for stream data
- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vite](https://vitejs.dev/) for the build tool