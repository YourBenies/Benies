import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${process.env.KIT_FORM_ID}/subscribe`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: process.env.KIT_API_KEY,
          email,
        }),
      }
    );
    const data = await response.json();
    console.log('Kit response:', data);
  } catch (e) {
    console.error('Kit write failed:', e);
  }

  return NextResponse.json({ success: true });
}
