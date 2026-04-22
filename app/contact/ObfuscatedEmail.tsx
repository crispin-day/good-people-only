'use client'

// Email is assembled client-side so crawlers can't scrape it from raw HTML
const parts = ['contact', '@', 'goodpeopleonly', '.com']

export default function ObfuscatedEmail({ style }: { style?: React.CSSProperties }) {
  const email = parts.join('')
  return (
    <a
      href={`mailto:${email}`}
      className="gpo-link"
      style={style}
    >
      {email}
    </a>
  )
}
