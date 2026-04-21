import Nav from '../components/Nav'
import Marquee from '../components/Marquee'
import Footer from '../components/Footer'

export const metadata = {
  title: 'About | Good People Only',
  description: 'Boutique artist management founded by Crispin Day in Toronto.',
}

export default function AboutPage() {
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
            — ABOUT
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
            WHO WE ARE
          </h1>

          {/* Two-column grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'clamp(160px, 20vw, 260px) 1fr',
              gap: 'clamp(32px, 6vw, 64px)',
              alignItems: 'start',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  letterSpacing: 'var(--tr-widest)',
                  textTransform: 'uppercase',
                  color: 'var(--fg-3)',
                }}
              >
                — STATEMENT
              </p>
            </div>

            <div>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--text-md)',
                  fontWeight: 500,
                  lineHeight: '1.55',
                  color: 'var(--fg-1)',
                  marginBottom: '24px',
                }}
              >
                Good People Only is a Toronto-based artist management company, record label, recording
                studio, and consulting firm. Founded in 2016 by Crispin Day, we work with artists we
                believe in — and build everything around them.
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--text-base)',
                  lineHeight: '1.65',
                  color: 'var(--fg-2)',
                  marginBottom: '24px',
                }}
              >
                We started with one idea: good music deserves a home that treats it right. Over the
                years, that idea has grown into a full-service operation for artists at every stage —
                from the first songwriting session to a touring career, from an independent single to a
                long-running label relationship.
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--text-base)',
                  lineHeight: '1.65',
                  color: 'var(--fg-2)',
                  marginBottom: '24px',
                }}
              >
                Crispin spent a decade as a producer and engineer before moving into management. That
                background shapes everything: how we talk to labels, how we approach recording budgets,
                how we read a contract. We know what it costs to make a record because we&apos;ve made them.
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--text-base)',
                  lineHeight: '1.65',
                  color: 'var(--fg-2)',
                  marginBottom: '48px',
                }}
              >
                The roster is small by design. Every artist here is a deliberate choice — not a volume
                play. What they share is craft, intention, and a willingness to do the work.
              </p>

              <blockquote
                style={{
                  borderLeft: '2px solid var(--ink)',
                  paddingLeft: '24px',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'var(--text-xl)',
                  letterSpacing: '-0.01em',
                  color: 'var(--ink)',
                  textTransform: 'uppercase',
                }}
              >
                &ldquo;One note is enough.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
