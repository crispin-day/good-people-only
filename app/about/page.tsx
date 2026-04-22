import Nav from '../components/Nav'
import Marquee from '../components/Marquee'
import Footer from '../components/Footer'

export const metadata = {
  title: 'About | Good People Only',
  description: 'Boutique artist management and label services company.',
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
            ABOUT
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
          <style>{`@media (max-width: 680px) { :root { --about-cols: 1fr; } }`}</style>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'var(--about-cols, clamp(160px, 20vw, 260px) 1fr)',
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
                STATEMENT
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
                  marginBottom: '28px',
                }}
              >
                Good People Only is a boutique artist management and label services company.
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
                Since 2016, three things have been built under one roof: artist management, record label, and a full label services engine. In practice that means day-to-day artist management sitting next to the people running DSP strategy, digital ads, playlist campaigns, and international market development, alongside in-house recording, release coordination, and distribution partnerships. Not a referral network. One operation.
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
                The roster is small by design. Artists here aren&apos;t volume; they&apos;re choices. What they share is craft and a willingness to do the work. GPO has moved artists from first sessions to headline touring, independent singles to long-running label relationships, niche online audiences to real rooms in real cities across North America, the UK, Europe, LATAM and Southeast Asia.
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--text-base)',
                  lineHeight: '1.65',
                  color: 'var(--fg-2)',
                }}
              >
                The model works because the teams that would normally be siloed - management, marketing, label - are in the same conversations from day one.
              </p>
            </div>
          </div>
        </div>
        {/* Partner logos */}
        <div
          style={{
            maxWidth: 'var(--max-w)',
            margin: '0 auto',
            padding: 'clamp(40px, 6vw, 80px) var(--page-pad-x)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: 'var(--tr-widest)',
              textTransform: 'uppercase',
              color: 'var(--fg-3)',
              marginBottom: '32px',
            }}
          >
            SUPPORTED BY
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(32px, 5vw, 64px)',
              flexWrap: 'wrap',
            }}
          >
            <a href="https://www.factor.ca/" target="_blank" rel="noopener noreferrer">
              <img
                src="/partners/factor-combined.png"
                alt="FACTOR - The Foundation Assisting Canadian Talent on Recordings"
                style={{ height: '60px', width: 'auto' }}
              />
            </a>
            <a href="https://www.canada.ca/" target="_blank" rel="noopener noreferrer">
              <img
                src="/partners/canada-combined.png"
                alt="Government of Canada / Gouvernement du Canada"
                style={{ height: '60px', width: 'auto' }}
              />
            </a>
            <a href="https://www.ontariocreates.ca/" target="_blank" rel="noopener noreferrer">
              <img
                src="/partners/ontario-creates-official.png"
                alt="Ontario Creates"
                style={{ height: '60px', width: 'auto' }}
              />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
