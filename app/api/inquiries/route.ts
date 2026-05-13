import { NextResponse } from 'next/server';
import { z } from 'zod';
import { requireSupabaseEnv } from '@/lib/supabase/env';
import { createClient } from '@supabase/supabase-js';
import { rateLimit } from '@/lib/rate-limit';

const inquirySchema = z.object({
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  email: z.string().email().max(255),
  phone: z.string().max(50).optional().nullable(),
  message: z.string().min(1).max(5000),
  sourceUrl: z.string().max(2000).optional().nullable(),
});

// Rate limiter: 3 inquiry submissions per minute per IP.
const limiter = rateLimit({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 500,
});

export async function POST(request: Request) {
  try {
    // Rate limiting — prevent spam.
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    try {
      await limiter.check(3, ip);
    } catch {
      return NextResponse.json(
        { ok: false, error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      );
    }
    const json = await request.json();
    const data = inquirySchema.parse(json);

    const { url, anonKey } = requireSupabaseEnv();
    const supabase = createClient(url, anonKey, {
      auth: { persistSession: false },
    });

    const { error } = await supabase.from('inquiries').insert({
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: data.phone ?? null,
      message: data.message,
      source_url: data.sourceUrl ?? null,
    });

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 400 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }
}
