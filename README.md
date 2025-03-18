# Next.js with Docusaurus Integration

This project integrates a Docusaurus documentation site with a Next.js application. The Docusaurus site is served under the `/docs` path of the Next.js application, providing a seamless experience for users.

## Project Structure

- **`/`** - Root directory containing the Next.js application
- **`/docusaurus`** - Docusaurus project directory
- **`/public/docs`** - Built Docusaurus site (generated during build)
- **`/src`** - Next.js application source code
- **`/scripts`** - Build scripts for the integration

## Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-name>
```

2. Install dependencies:

```bash
# Install Next.js dependencies
npm install

# Install Docusaurus dependencies
cd docusaurus
npm install
cd ..
```

## Quick Start (Automated Setup)

We provide several options to set up and run the project with a single command:

### Option 1: Using the TypeScript setup script

```bash
# Full setup: install dependencies, build both projects, and start the server
npm run setup:full

# Setup without rebuilding (if you've already built the project)
npm run setup
```

### Option 2: Using the shell script

```bash
# Make the script executable
chmod +x scripts/setup.sh

# Run the setup script
./scripts/setup.sh
```

### Option 3: Using npm scripts

```bash
# Build both projects and start the server
npm run run:all
```

After running any of these commands, your application will be available at http://localhost:3000 with the documentation accessible at http://localhost:3000/docs.

## Manual Development

If you prefer to run the components separately:

### Next.js Application

```bash
# Start the Next.js development server
npm run dev
```

### Docusaurus Documentation

```bash
# Start the Docusaurus development server
npm run dev:docs
```

### Run Both Simultaneously

```bash
# Run both Next.js and Docusaurus in development mode
npm run dev:all
```

## Building for Production

### Build Everything

```bash
# Build both Docusaurus and Next.js
npm run build:all
```

### Build Individual Components

```bash
# Build only Docusaurus
npm run build:docs

# Build only Next.js (includes Docusaurus if already built)
npm run build
```

## Serving the Production Build

After building the project, you can serve it with:

```bash
npm run start
```

## Project Structure Details

- **Next.js Application**: The main application that serves as the primary entry point.
- **Docusaurus Documentation**: Integrated documentation system served under the `/docs` route.
- **Integration**: The build process automatically builds the Docusaurus site and places it in the Next.js public folder, allowing Next.js to serve it statically.

## Troubleshooting

### Documentation Not Loading

If the documentation is not loading at the `/docs` route:

1. Make sure you've built the project using one of the build commands
2. Check that the Docusaurus build files were properly copied to the `public/docs` directory
3. Verify that there are no errors in the browser console

### Build Errors

If you encounter build errors:

1. Make sure all dependencies are installed for both projects
2. Clear the `.next` and `docusaurus/build` directories and try building again
3. Check the console output for specific error messages

## License

[MIT](LICENSE)
