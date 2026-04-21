'use client'

import { useState, FormEvent } from 'react'

const baseInput: React.CSSProperties = {
  display: 'block',
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--border-2)',
  color: 'var(--ink)',
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--text-base)',
  padding: '10px 0',
  outline: 'none',
  marginBottom: '32px',
  transition: 'border-color var(--dur-fast) ease',
  borderRadius: 0,
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--text-xs)',
  letterSpacing: 'var(--tr-widest)',
  textTransform: 'uppercase',
  color: 'var(--fg-3)',
  marginBottom: '8px',
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function focusStyle(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    e.currentTarget.style.borderBottomColor = 'var(--ink)'
    e.currentTarget.style.borderBottomWidth = '2px'
  }

  function blurStyle(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    e.currentTarget.style.borderBottomColor = 'var(--border-2)'
    e.currentTarget.style.borderBottomWidth = '1px'
  }

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
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-base)',
          lineHeight: '1.6',
          color: 'var(--fg-2)',
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
        style={baseInput}
        onFocus={focusStyle}
        onBlur={blurStyle}
      />

      <label style={labelStyle} htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        required
        style={baseInput}
        onFocus={focusStyle}
        onBlur={blurStyle}
      />

      <label style={labelStyle} htmlFor="subject">About</label>
      <input
        id="subject"
        name="subject"
        type="text"
        required
        style={baseInput}
        onFocus={focusStyle}
        onBlur={blurStyle}
      />

      <label style={labelStyle} htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        required
        rows={5}
        style={{ ...baseInput, resize: 'vertical' }}
        onFocus={focusStyle}
        onBlur={blurStyle}
      />

      {status === 'error' && (
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-sm)',
            color: '#B54A4A',
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
          backgroundColor: 'var(--ink)',
          color: 'var(--paper)',
          fontFamily: 'var(--font-sans)',
          fontWeight: 600,
          fontSize: '13px',
          letterSpacing: 'var(--tr-wider)',
          textTransform: 'uppercase',
          padding: '14px 32px',
          border: 'none',
          cursor: status === 'sending' ? 'not-allowed' : 'pointer',
          opacity: status === 'sending' ? 0.6 : 1,
          transition: 'opacity var(--dur-fast) ease',
        }}
      >
        {status === 'sending' ? 'Sending…' : 'Send'}
      </button>
    </form>
  )
}
