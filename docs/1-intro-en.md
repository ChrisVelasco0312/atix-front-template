# ATIX Frontend Template

A comprehensive starter template for new projects at Atix Digital. This document outlines our project configuration standards and development guidelines.

## Core Technologies

### Next.js Configuration

The template comes preconfigured with:

- TypeScript for type-safe development
- ESLint for code quality
- Tailwind CSS for styling
- Next.js App Router
- Import alias configuration (`@/*`)

### Development Environment

For optimal performance, we recommend using different package managers based on your operating system:

- Linux: Use [`bun`](https://bun.sh/docs/installation) for faster execution
- Windows: Use pnpm for better compatibility

### Quality Assurance Tools

#### Git Hooks with Husky

Husky enforces code quality by running pre-commit checks for:

- TypeScript compilation errors
- Code formatting
- Linting rules
- Unit tests

All checks must pass before allowing commits to proceed.

#### Testing Framework

We utilize Vitest and React Testing Library for unit testing:

- Run coverage reports with `pnpm coverage` or `bun run coverage`
- Maintain a minimum of 90% test coverage (green indicators)
- Yellow or red coverage indicators require additional tests

#### Visual Testing

We use [Ladle](https://ladle.dev/) as our lightweight alternative to Storybook for:

- Visual component testing
- Component documentation
- Storybook-compatible workflows

## Development Standards

### Project Structure

We follow the [Bulletproof React](https://github.com/alan2207/bulletproof-react) architecture guidelines in addition to Next.js default structure.

### Version Control

#### Commit Messages

All commits must follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

#### Branching Strategy

We implement the [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) for branch management.

### Testing Standards

Our testing practices align with the [JavaScript Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices) guide.
