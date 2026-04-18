import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

/**
 * POST /api/waitlist
 *
 * Dual-writes an email signup to:
 *   1. Kit (ConvertKit) v3 API — /v3/forms/{KIT_FORM_ID}/subscribe
 *   2. Supabase `waitlist` table
 *
 * Per spec: errors on either write are swallowed. The client always shows
 * the success state, so this route always returns 200 as long as the input
 * is well-formed. We still log failures server-side so we can triage later.
 */

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface WaitlistPayload {
  email?: unknown;
  source?: unknown;
}

export async function POST(request: Request) {
  let body: WaitlistPayload;
  try {
    body = (await request.json()) as WaitlistPayload;
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  const source =
    typeof body.source === 'string' && body.source.length > 0 ? body.source : 'homepage';

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });
  }

  // Dual-write in parallel. Both are best-effort; the client is already
  // being shown a success state regardless of outcome.
  const [kitResult, supabaseResult] = await Promise.allSettled([
    subscribeToKit(email),
    insertIntoSupabase(email, source),
  ]);

  if (kitResult.status === 'rejected') {
    console.error('[waitlist] Kit subscribe failed:', kitResult.reason);
  }
  if (supabaseResult.status === 'rejected') {
    console.error('[waitlist] Supabase insert failed:', supabaseResult.reason);
  }

  return NextResponse.json({ ok: true });
}

async function subscribeToKit(email: string): Promise<void> {
  const apiKey = process.env.KIT_API_KEY;
  const formId = process.env.KIT_FORM_ID;

  if (!apiKey || !formId) {
    throw new Error('Missing KIT_API_KEY or KIT_FORM_ID');
  }

  const res = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ api_key: apiKey, email }),
    // Kit can be slow occasionally — don't let it hang the response indefinitely.
    signal: AbortSignal.timeout(8000),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Kit responded ${res.status}: ${text}`);
  }
}

async function insertIntoSupabase(email: string, source: string): Promise<void> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  }

  const supabase = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { error } = await supabase.from('waitlist').insert({
    email,
    source,
    created_at: new Date().toISOString(),
  });

  if (error) {
    // Unique-constraint violations on email are expected and not errors worth
    // surfacing — treat as a quiet no-op.
    if (error.code === '23505') return;
    throw new Error(`Supabase: ${error.message}`);
  }
}
