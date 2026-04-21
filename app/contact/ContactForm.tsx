'use client'

import { useState, FormEvent } from 'react'

const inputStyle: React.CSSProperties = {
  display: 'block',
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--color-smoke)',
  color: 'var(--color-bone)',
  fontFamily: 'var(--font-body)',
  fontSize: '16px',
  padding: '10px 0',
  outline: 'none',
  marginBottom: '32px',
  transition: 'border-color 150ms ease',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  color: 'var(--color-smoke)',
  fontFamily: 'var(--font-heading)',
  fontSize: '11px',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  marginBottom: '8px',
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        const json = await res.json().catch(() => ({}))
        setErrorMsg(json.error || 'Something went wrong. Try emailing us directly.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error. Try emailing us directly.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p
        style={{
          color: 'var(--color-bone)',
          fontFamily: 'var(--font-body)',
          fontSize: '16px',
          lineHeight: '1.6',
        }}
      >
        Message sent. We&apos;ll be in touch.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label style={labelStyle} htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        required
        style={inputStyle}
        onFocus={(e) => { e.currentTarget.style.borderBottomColor = 'var(--color-ember)' }}
        onBlur={(e) => { e.currentTarget.style.borderBottomColor = 'var(--color-smoke)' }}
      />

      <label style={labelStyle} htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        required
        style={inputStyle}
        onFocus={(e) => { e.currentTarget.style.borderBottomColor = 'var(--color-ember)' }}
        onBlur={(e) => { e.currentTarget.style.borderBottomColor = 'var(--color-smoke)' }}
      />

      <label style={labelStyle} htmlFor="subject">Subject</label>
      <input
        id="subject"
        name="subject"
        type="text"
        required
        style={inputStyle}
        onFocus={(e) => { e.currentTarget.style.borderBottomColor = 'var(--color-ember)' }}
        onBlur={(e) => { e.currentTarget.style.borderBottomColor = 'var(--color-smoke)' }}
      />

      <label style={labelStyle} htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        required
        rows={5}
        style={{ ...inputStyle, resize: 'vertical' }}
        onFocus={(e) => { e.currentTarget.style.borderBottomColor = 'var(--color-ember)' }}
        onBlur={(e) => { e.currentTarget.style.borderBottomColor = 'var(--color-smoke)' }}
      />

      {status === 'error' && (
        <p
          style={{
            color: 'var(--color-error)',
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            marginBottom: '16px',
          }}
        >
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        style={{
          backgroundColor: 'var(--color-ember)',
          color: 'var(--color-bone)',
          fontFamily: 'var(--font-heading)',
          fontSize: '0.875rem',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          padding: '0.75rem 2rem',
          borderRadius: '4px',
          border: 'none',
          cursor: status === 'sending' ? 'not-allowed' : 'pointer',
          opacity: status === 'sending' ? 0.7 : 1,
          transition: 'opacity 150ms ease',
        }}
      >
        {status === 'sending' ? 'Sending…' : 'Send'}
      </button>
    </form>
  )
}
