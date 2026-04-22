import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  let body: { name?: string; email?: string; subject?: string; message?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const { name, email, subject, message } = body
  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log('[contact] No RESEND_API_KEY set. Form submission:', { name, email, subject })
    return NextResponse.json({ ok: true })
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'GPO Website <noreply@goodpeopleonly.com>',
        to: 'contact@goodpeopleonly.com',
        reply_to: email,
        subject: `[GPO Contact] ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    })

    if (!res.ok) {
      const text = await res.text()
      console.error('[contact] Resend error:', text)
      return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] Resend fetch error:', err)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}
