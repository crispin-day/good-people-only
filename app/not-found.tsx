import Link from 'next/link'
import Nav from './components/Nav'
import Footer from './components/Footer'

export default function NotFound() {
  return (
    <div className="gpo-page-layout">
      <Nav />
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'var(--page-pad-x)',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(80px, 20vw, 200px)',
            letterSpacing: '-0.04em',
            lineHeight: '0.9',
            color: 'var(--ink)',
          }}
        >
          404
        </p>

        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            letterSpacing: 'var(--tr-widest)',
            textTransform: 'uppercase',
            color: 'var(--fg-3)',
            marginTop: '24px',
            marginBottom: '32px',
          }}
        >
          Page Not Found
        </p>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-base)',
            lineHeight: '1.55',
            color: 'var(--fg-2)',
            maxWidth: '320px',
            marginBottom: '40px',
          }}
        >
          Nothing here. Head back and find something good.
        </p>

        <Link
          href="/"
          className="gpo-link"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            letterSpacing: 'var(--tr-widest)',
            textTransform: 'uppercase',
            color: 'var(--fg-2)',
          }}
        >
          ← Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  )
}
