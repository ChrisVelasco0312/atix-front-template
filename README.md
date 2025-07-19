# Atix Front Template

A modern React application built with Vite, TypeScript, and Tailwind CSS.

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Fast build tool and dev server
- ⚛️ [React 19](https://react.dev/) - Latest React with concurrent features
- 🔷 [TypeScript](https://www.typescriptlang.org/) - Type safety
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- 🧪 [Vitest](https://vitest.dev/) - Fast unit testing
- 🧪 [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Testing utilities
- 📝 [ESLint](https://eslint.org/) - Code linting
- 💅 [Prettier](https://prettier.io/) - Code formatting
- 🐕 [Husky](https://typicode.github.io/husky/) - Git hooks
- 📚 [Ladle](https://ladle.dev/) - Storybook alternative

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended package manager)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

### Testing

```bash
# Run tests
pnpm test

# Run tests with coverage
pnpm coverage

# Run tests in watch mode
pnpm test --watch
```

### Linting and Formatting

```bash
# Lint code
pnpm lint

# Format code
pnpm format

# Check formatting
pnpm check

# Type checking
pnpm validate
```

### Storybook (Ladle)

```bash
pnpm ladle
```

## Project Structure

```
src/
├── components/     # Reusable components
├── test/          # Test setup files
├── App.tsx        # Main app component
├── App.css        # App-specific styles
├── main.tsx       # App entry point
└── index.css      # Global styles with Tailwind
```

## Available Scripts

- `dev` - Start development server
- `build` - Build for production
- `preview` - Preview production build
- `test` - Run tests
- `coverage` - Run tests with coverage
- `lint` - Lint code
- `format` - Format code
- `check` - Check code formatting
- `validate` - Type checking
- `ladle` - Start Ladle storybook

## Git Hooks

Husky is configured with pre-commit hooks that run:

- Code formatting
- Type checking
- Tests

## Migration from Next.js

This project was migrated from Next.js to Vite React. The following configurations were preserved:

- ESLint and Prettier configuration
- Tailwind CSS setup
- Vitest and React Testing Library
- Husky git hooks
- pnpm package manager
- TypeScript configuration (updated for Vite)
