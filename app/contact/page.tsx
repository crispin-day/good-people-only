import Nav from '../components/Nav'
import Marquee from '../components/Marquee'
import Footer from '../components/Footer'
import ContactForm from './ContactForm'
import ObfuscatedEmail from './ObfuscatedEmail'

export const metadata = {
  title: 'Contact | Good People Only',
  description: 'Get in touch with Good People Only.',
}

export default function ContactPage() {
  return (
    <div className="gpo-page-layout">
      <Nav />
      <Marquee />
      <main
        style={{
          color: 'var(--ink)',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--max-w)',
            margin: '0 auto',
            padding: 'clamp(48px, 8vw, 96px) var(--page-pad-x)',
          }}
        >
          {/* Kicker */}
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: 'var(--tr-widest)',
              textTransform: 'uppercase',
              color: 'var(--fg-3)',
              marginBottom: '16px',
            }}
          >
            CONTACT
          </p>

          {/* Title */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(40px, 8vw, 96px)',
              letterSpacing: '-0.025em',
              textTransform: 'uppercase',
              lineHeight: '0.95',
              color: 'var(--ink)',
              marginBottom: 'clamp(48px, 6vw, 80px)',
            }}
          >
            GET IN TOUCH
          </h1>

          {/* Two-column grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'var(--contact-cols, 1fr 1fr)',
              gap: 'clamp(40px, 6vw, 96px)',
              alignItems: 'start',
            }}
          >
            <style>{`@media (max-width: 680px) { :root { --contact-cols: 1fr; } }`}</style>
            {/* Left: contact info */}
            <div>
              <ObfuscatedEmail
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  fontSize: 'var(--text-md)',
                  color: 'var(--fg-2)',
                }}
              />
            </div>

            {/* Right: form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
