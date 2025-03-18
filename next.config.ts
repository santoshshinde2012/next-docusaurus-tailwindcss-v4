import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Ensure Next.js doesn't process the /docs path and lets the static files be served
  async rewrites() {
    return [
      {
        source: '/docs/:path*',
        destination: '/docs/:path*',
      },
    ];
  },
  // Add types for TypeScript
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;