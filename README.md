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

2. Install dependencies for the Next.js application:

```bash
npm install
```

3. Install dependencies for the Docusaurus project:

```bash
cd docusaurus
npm install
cd ..
```

## Development

### Running Next.js Only

To run only the Next.js application in development mode:

```bash
npm run dev
```

This will start the Next.js development server at http://localhost:3000.

### Running Docusaurus Only

To run only the Docusaurus site in development mode:

```bash
npm run dev:docs
```

This will start the Docusaurus development server at http://localhost:3000.

### Running Both Together

To run both the Next.js application and Docusaurus site simultaneously:

```bash
npm run dev:all
```

This will start:
- Next.js development server at http://localhost:3000
- Docusaurus development server at http://localhost:3000

**Note**: When running both servers simultaneously, you'll need to access them at their respective URLs. The Docusaurus site will be available at its own development server, not under the `/docs` path of the Next.js application during development.

## Building for Production

To build both the Docusaurus site and Next.js application for production:

```bash
npm run build
```

This will:
1. Build the Docusaurus site
2. Copy the built Docusaurus site to `/public/docs`
3. Build the Next.js application

## Running in Production

To run the production build:

```bash
npm run start
```

This will start the Next.js production server. The Docusaurus site will be available at the `/docs` path of your application.

## How the Integration Works

1. **Development**: During development, the Docusaurus site and Next.js application run as separate servers.

2. **Production**: For production:
   - The Docusaurus site is built and its output is copied to `/public/docs`
   - Next.js serves these static files when users access the `/docs` path
   - The `baseUrl` in the Docusaurus configuration is set to `/docs/` to ensure all internal links work correctly

3. **Navigation**: The Next.js application includes links to the Docusaurus documentation, providing a seamless experience for users.

## Customization

### Docusaurus Configuration

The Docusaurus configuration is in `/docusaurus/docusaurus.config.ts`. Key settings for the integration:

```typescript
const config: Config = {
  // ...
  baseUrl: '/docs/',
  // ...
};
```

### Next.js Configuration

The Next.js configuration is in `/next.config.ts`. The rewrites configuration ensures that requests to `/docs/*` are handled correctly:

```typescript
const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/docs/:path*',
        destination: '/docs/:path*',
      },
    ];
  },
  // ...
};
```

## Troubleshooting

### Missing Dependencies

If you encounter errors about missing dependencies, ensure you've run `npm install` in both the root directory and the `/docusaurus` directory.

### Path Issues

If links within the Docusaurus site don't work correctly in production, check that:
- The `baseUrl` in `docusaurus.config.ts` is set to `/docs/`
- Internal links in your Docusaurus content use relative paths or start with `/docs/`

### Build Errors

If you encounter errors during the build process:
1. Try building the Docusaurus site separately: `cd docusaurus && npm run build`
2. Check the console output for specific error messages
3. Ensure all required dependencies are installed
