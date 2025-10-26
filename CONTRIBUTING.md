# Contributing to Twitch Multi-Stream Viewer

Thank you for your interest in contributing to the Twitch Multi-Stream Viewer! This document provides guidelines and information for contributors.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please be respectful and constructive in all interactions.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in the [Issues](https://github.com/yourusername/twitch-multi-stream-viewer/issues)
2. If not, create a new issue with:
   - Clear description of the bug
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Environment details (browser, OS, etc.)

### Suggesting Features

1. Check existing [Issues](https://github.com/yourusername/twitch-multi-stream-viewer/issues) for similar suggestions
2. Create a new issue with:
   - Clear description of the feature
   - Use case and benefits
   - Possible implementation approach

### Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/yourusername/twitch-multi-stream-viewer.git
   cd twitch-multi-stream-viewer
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Making Changes

1. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes following our coding standards
3. Test your changes thoroughly
4. Commit with a clear message:
   ```bash
   git commit -m "feat: add new stream layout option"
   ```

### Coding Standards

- Use TypeScript for all new code
- Follow the existing code style and formatting
- Use meaningful variable and function names
- Add comments for complex logic
- Ensure components are responsive and accessible
- Use Tailwind CSS for styling
- Follow React best practices and hooks patterns

### Component Guidelines

- Create reusable components when possible
- Use proper TypeScript interfaces for props
- Include default props where appropriate
- Ensure components work in isolation
- Add stories for new UI components

### Testing

- Test your changes in different browsers
- Verify responsive design on various screen sizes
- Test with different Twitch streams and scenarios
- Ensure authentication flows work correctly

### Pull Request Process

1. Update documentation if needed
2. Ensure your code follows the project's coding standards
3. Create a pull request with:
   - Clear title and description
   - Reference any related issues
   - Screenshots for UI changes
   - List of changes made

4. Wait for review and address any feedback
5. Once approved, your PR will be merged

### Commit Message Format

Use conventional commits format:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks

Example: `feat: add volume control for individual streams`

## Development Guidelines

### File Structure

- Components go in `src/components/`
- UI components go in `src/components/ui/`
- Context providers go in `src/contexts/`
- Type definitions go in `src/types/`
- Stories go in `src/stories/`

### Naming Conventions

- Use PascalCase for component names
- Use camelCase for functions and variables
- Use kebab-case for file names (except components)
- Use descriptive names that explain purpose

### Performance Considerations

- Optimize stream loading and rendering
- Minimize re-renders with proper memoization
- Handle multiple concurrent streams efficiently
- Consider bandwidth usage for multiple streams

## Questions?

If you have questions about contributing, feel free to:
- Open an issue for discussion
- Reach out to the maintainers
- Check existing documentation and issues

Thank you for contributing to make this project better!