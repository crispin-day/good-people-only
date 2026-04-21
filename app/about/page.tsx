import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata = {
  title: 'About | Good People Only',
  description: 'Boutique artist management founded by Crispin Day in Toronto. We build artists.',
}

const GOOD_SPACES = [
  { title: 'Palace Sound', url: '#' },
  { title: 'Revolution Recording', url: '#' },
  { title: 'FACTOR Canada', url: '#' },
  { title: 'Ontario Arts Council', url: '#' },
]

export default function AboutPage() {
  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: 'var(--color-void)',
        animation: 'fadein 0.4s ease-in forwards',
        paddingTop: '120px',
        paddingBottom: '120px',
      }}
    >
      <Nav />

      <div className="max-w-[1280px] mx-auto px-5 md:px-[60px]">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          {/* Left column — Good Spaces */}
          <div className="md:w-1/3 shrink-0">
            <div
              className="mb-6"
              style={{
                borderTop: '1px solid rgba(232,228,223,0.2)',
                borderBottom: '1px solid rgba(232,228,223,0.2)',
                padding: '12px 0',
              }}
            >
              <p
                className="font-normal uppercase"
                style={{
                  color: 'var(--color-bone)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                }}
              >
                Good Spaces
              </p>
            </div>
            <ul className="flex flex-col gap-3">
              {GOOD_SPACES.map((space) => (
                <li key={space.title}>
                  <a
                    href={space.url}
                    className="font-normal hover-bone"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                    }}
                  >
                    {space.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — About content */}
          <div className="md:w-2/3">
            <h1
              className="font-medium uppercase mb-10"
              style={{
                color: 'var(--color-bone)',
                fontFamily: 'var(--font-heading)',
                fontSize: '35px',
                letterSpacing: '-0.02em',
                lineHeight: '1.1',
              }}
            >
              We don&apos;t chase trends.<br />We build artists.
            </h1>

            <p
              className="mb-[26px]"
              style={{
                color: 'var(--color-bone)',
                fontFamily: 'var(--font-body)',
                fontSize: '18px',
                lineHeight: '1.6',
                maxWidth: '600px',
              }}
            >
              Good People Only is a boutique artist management company founded by Crispin Day in Toronto. We are not an agency. We are not a service provider. We are a collective of artists, producers, and creative operators who share a single belief: put the music first, surround yourself with good people, and the rest follows.
            </p>

            <p
              className="mb-[26px]"
              style={{
                color: 'var(--color-bone)',
                fontFamily: 'var(--font-body)',
                fontSize: '18px',
                lineHeight: '1.6',
                maxWidth: '600px',
              }}
            >
              Crispin spent a decade as a producer and engineer before moving into management. That background shapes everything: how we talk to labels, how we approach recording budgets, how we read a contract. We know what it costs to make a record because we&apos;ve made them.
            </p>

            <p
              style={{
                color: 'var(--color-bone)',
                fontFamily: 'var(--font-body)',
                fontSize: '18px',
                lineHeight: '1.6',
                maxWidth: '600px',
              }}
            >
              The roster is small by design. Every artist here is a deliberate choice — not a volume play. Genre-agnostic, spanning indie rock, folk, comedy rock, and electronic. What they share is craft, intention, and a willingness to do the work.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
