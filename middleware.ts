import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Stealth-mode middleware.
 *
 * While we're pre-launch, the only live surface is the homepage ("/") and
 * the waitlist API route ("/api/waitlist"). Everything else (old marketing
 * pages, blog posts, app routes, legal pages, etc.) gets redirected back
 * to "/" so nothing leaks publicly.
 *
 * The matcher below already excludes Next.js internals (`_next/*`), static
 * assets, and common file extensions (favicon, images, robots, sitemap),
 * so this runs only on real page/route requests.
 */

const ALLOWED_PATHS = new Set<string>(['/', '/api/waitlist']);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (ALLOWED_PATHS.has(pathname)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = '/';
  url.search = '';
  return NextResponse.redirect(url, 307);
}

export const config = {
  matcher: [
    // Run on everything except Next.js internals and static assets.
    '/((?!_next/static|_next/image|favicon\\.ico|robots\\.txt|sitemap\\.xml|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|txt|xml|woff|woff2|ttf|otf|map)).*)',
  ],
};
