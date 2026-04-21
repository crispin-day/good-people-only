import Link from 'next/link'
import Nav from './components/Nav'

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: 'var(--color-void)' }}
    >
      <Nav />

      <div className="text-center px-5">
        <p
          className="font-medium"
          style={{
            color: 'var(--color-ember)',
            fontFamily: 'var(--font-heading)',
            fontSize: '8rem',
            lineHeight: '1',
            letterSpacing: '-0.03em',
          }}
        >
          404
        </p>
        <p
          className="font-medium uppercase mt-4 mb-8"
          style={{
            color: 'var(--color-bone)',
            fontFamily: 'var(--font-heading)',
            fontSize: '14px',
            letterSpacing: '0.2em',
          }}
        >
          Page Not Found
        </p>
        <Link
          href="/"
          className="font-medium uppercase"
          style={{
            color: 'var(--color-smoke)',
            fontFamily: 'var(--font-heading)',
            fontSize: '12px',
            letterSpacing: '0.15em',
            transition: 'color 150ms ease',
          }}
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}
