import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from '@/lib/supabase/middleware';

export function middleware(request: NextRequest) {
  const hostHeader = request.headers.get('host') || '';
  const hostname = hostHeader.toLowerCase().split(':')[0];

  // Enforce canonical host.
  // NOTE: This only takes effect when the request reaches this Next.js deployment.
  if (hostname === 'ontriq.com') {
    const url = request.nextUrl.clone();
    url.hostname = 'www.ontriq.com';
    return NextResponse.redirect(url, 308);
  }

  const response = updateSession(request);

  const pathname = request.nextUrl.pathname;

  // Public admin login page.
  if (pathname === '/admin/login') {
    return response;
  }

  // Everything under /admin requires auth.
  if (pathname.startsWith('/admin')) {
    const hasAccessToken = request.cookies.get('sb-access-token');
    const hasAuthHelpersToken = request.cookies
      .getAll()
      .some((c) => c.name.startsWith('sb-') && c.name.includes('auth-token'));

    if (!hasAccessToken && !hasAuthHelpersToken) {
      const url = request.nextUrl.clone();
      url.pathname = '/admin/login';
      url.searchParams.set('next', pathname);
      return NextResponse.redirect(url);
    }
  }

  return response;
}

export const config = {
  matcher: [
    // Run on all routes except Next.js internals and static assets.
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.json|.*\\.(?:png|jpg|jpeg|gif|webp|avif|svg|ico|css|js|map|txt|xml)$).*)',
  ],
};
