// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only handle /docs routes
  if (request.nextUrl.pathname.startsWith('/docs')) {
    const pathname = request.nextUrl.pathname;
    
    // Handle root docs path
    if (pathname === '/docs' || pathname === '/docs/') {
      return NextResponse.rewrite(new URL('/docs/index.html', request.url));
    }

    // Let Next.js handle static file serving from public/docs
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/docs/:path*',
};
