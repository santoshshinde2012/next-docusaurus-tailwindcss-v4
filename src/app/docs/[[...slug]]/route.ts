// src/app/docs/[[...slug]]/route.ts
import { type NextRequest } from 'next/server';
import { join } from 'path';
import { existsSync } from 'fs';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug?: string[] } }
): Promise<Response> {
  // Await the params to fix the error
  const slugParams = await Promise.resolve(params.slug);
  const slug = slugParams || ['index.html'];

  try {
    // Handle special case for root docs path
    if (slug.length === 0) {
      return Response.redirect(new URL('/docs/index.html', request.url));
    }

    const filePath = join(process.cwd(), 'public', 'docs', ...slug);

    // If the file doesn't exist, redirect to docs 404 page
    if (!existsSync(filePath)) {
      return Response.redirect(new URL('/docs/404.html', request.url));
    }

    // Let Next.js handle static file serving
    return new Response(null, {
      headers: {
        'x-next-rewrite': `/docs/${slug.join('/')}`,
      },
    });
  } catch (error) {
    console.error('Error handling docs route:', error);
    return Response.redirect(new URL('/docs/404.html', request.url));
  }
}

// Optional: Add metadata export
export const dynamic = 'force-static';
export const dynamicParams = false;

// Generate static paths at build time if needed
export function generateStaticParams() {
  return [];
}
