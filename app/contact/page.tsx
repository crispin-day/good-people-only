import Nav from '../components/Nav'
import Marquee from '../components/Marquee'
import Footer from '../components/Footer'
import ContactForm from './ContactForm'

export const metadata = {
  title: 'Contact | Good People Only',
  description: 'Get in touch with Good People Only.',
}

export default function ContactPage() {
  return (
    <>
      <Nav />
      <Marquee />
      <main
        style={{
          minHeight: '100vh',
          background: 'var(--paper)',
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
            — CONTACT
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
              gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(40px, 6vw, 96px)',
              alignItems: 'start',
            }}
          >
            {/* Left: contact info */}
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.05',
                  color: 'var(--ink)',
                  marginBottom: '48px',
                  textTransform: 'uppercase',
                }}
              >
                One note is enough.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-xs)',
                      letterSpacing: 'var(--tr-widest)',
                      textTransform: 'uppercase',
                      color: 'var(--fg-3)',
                      marginBottom: '8px',
                    }}
                  >
                    General
                  </p>
                  <a
                    href="mailto:info@goodpeopleonly.com"
                    className="gpo-link"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 500,
                      fontSize: 'var(--text-base)',
                      color: 'var(--fg-2)',
                    }}
                  >
                    info@goodpeopleonly.com
                  </a>
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-xs)',
                      letterSpacing: 'var(--tr-widest)',
                      textTransform: 'uppercase',
                      color: 'var(--fg-3)',
                      marginBottom: '8px',
                    }}
                  >
                    Bookings
                  </p>
                  <a
                    href="mailto:bookings@goodpeopleonly.com"
                    className="gpo-link"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 500,
                      fontSize: 'var(--text-base)',
                      color: 'var(--fg-2)',
                    }}
                  >
                    bookings@goodpeopleonly.com
                  </a>
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-xs)',
                      letterSpacing: 'var(--tr-widest)',
                      textTransform: 'uppercase',
                      color: 'var(--fg-3)',
                      marginBottom: '8px',
                    }}
                  >
                    Studio
                  </p>
                  <a
                    href="mailto:studio@goodpeopleonly.com"
                    className="gpo-link"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 500,
                      fontSize: 'var(--text-base)',
                      color: 'var(--fg-2)',
                    }}
                  >
                    studio@goodpeopleonly.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
