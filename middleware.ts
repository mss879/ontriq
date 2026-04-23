import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from '@/lib/supabase/middleware';

// Allowed origins for CSRF validation (production + local dev).
const ALLOWED_ORIGINS = new Set([
  'https://www.ontriq.com',
  'https://ontriq.com',
  'http://localhost:3000',
  'http://localhost:8888',
]);

/** Attach security headers to every response (defense-in-depth). */
function applySecurityHeaders(response: NextResponse) {
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  );
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  );
  return response;
}

/** Validate Origin/Referer for state-changing requests (CSRF). */
function isValidOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin');
  if (origin) return ALLOWED_ORIGINS.has(origin);

  // Fallback: check Referer when Origin is absent (some browsers).
  const referer = request.headers.get('referer');
  if (referer) {
    try {
      return ALLOWED_ORIGINS.has(new URL(referer).origin);
    } catch {
      return false;
    }
  }

  // Server-side / same-origin fetch may omit both headers; allow those.
  return true;
}

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

  const pathname = request.nextUrl.pathname;
  const method = request.method;

  // CSRF: block state-changing requests to /api/* from foreign origins.
  if (
    pathname.startsWith('/api/') &&
    !['GET', 'HEAD', 'OPTIONS'].includes(method) &&
    !isValidOrigin(request)
  ) {
    return applySecurityHeaders(
      new NextResponse(JSON.stringify({ error: 'Forbidden' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      })
    );
  }

  const response = updateSession(request);

  // Public admin login page.
  if (pathname === '/admin/login') {
    return applySecurityHeaders(response);
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

  return applySecurityHeaders(response);
}

export const config = {
  matcher: [
    // Run on all routes except Next.js internals and static assets.
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.json|.*\\.(?:png|jpg|jpeg|gif|webp|avif|svg|ico|css|js|map|txt|xml)$).*)',
  ],
};

