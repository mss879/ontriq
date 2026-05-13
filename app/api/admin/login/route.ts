import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createSupabaseRouteClient } from '@/lib/supabase/route';
import { rateLimit } from '@/lib/rate-limit';

const loginSchema = z.object({
  email: z.string().email().max(255),
  password: z.string().min(6).max(200),
});

// Rate limiter: 5 login attempts per minute per IP (brute-force protection).
const limiter = rateLimit({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 500,
});

export async function POST(request: Request) {
  try {
    // Rate limiting — prevent brute-force.
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    try {
      await limiter.check(5, ip);
    } catch {
      return NextResponse.json(
        { ok: false, error: 'Too many login attempts. Please try again later.' },
        { status: 429 }
      );
    }

    const body = loginSchema.parse(await request.json());

    const supabase = createSupabaseRouteClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: body.email,
      password: body.password,
    });

    if (error || !data.session) {
      return NextResponse.json(
        { ok: false, error: error?.message || 'Login failed' },
        { status: 401 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }
}
