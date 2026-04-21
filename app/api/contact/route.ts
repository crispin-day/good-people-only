import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('[contact] RESEND_API_KEY is not set')
    return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 })
  }

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

  const resend = new Resend(apiKey)

  try {
    await resend.emails.send({
      from: 'GPO Website <noreply@goodpeopleonly.com>',
      to: 'info@goodpeopleonly.com',
      replyTo: email,
      subject: `[GPO Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] Resend error:', err)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}
