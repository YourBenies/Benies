import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const apiKey = process.env.KIT_API_KEY
    const formId = 'b018e66bab'

    const response = await fetch(
      `https://api.kit.com/v4/forms/${formId}/subscribers`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Kit-Api-Key': apiKey || '',
        },
        body: JSON.stringify({
          email_address: email,
          ...(name ? { fields: { first_name: name } } : {}),
        }),
      }
    )

    if (!response.ok) {
      const err = await response.text()
      console.error('Kit API error:', err)
      return NextResponse.json({ success: true, kitError: err })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Subscribe error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

