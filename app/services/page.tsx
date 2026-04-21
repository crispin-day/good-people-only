import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Services | Good People Only',
  description: 'Artist management, record label, and label services from Good People Only.',
}

const SERVICES = [
  {
    heading: 'Management',
    body: 'Day-to-day artist management for a select group of artists. We handle strategy, deal negotiation, team building, and long-term career development. We work with artists who are ready to treat their craft as a business without letting the business compromise the craft.',
  },
  {
    heading: 'Record Label',
    body: 'Good People Record Co. is a boutique independent label releasing music that matters to us. We handle recording, distribution, sync licensing, and press. No formulas. No chasing algorithms. We put the music in front of people who will actually care.',
  },
  {
    heading: 'Label Services',
    body: 'For independent artists and small labels who want professional infrastructure without signing away creative control. Distribution, marketing strategy, sync representation, and creative consulting. You stay independent. We help you compete.',
  },
]

export default function ServicesPage() {
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

      <div
        className="mx-auto px-5"
        style={{ maxWidth: '800px' }}
      >
        <h1
          className="font-medium uppercase mb-16"
          style={{
            color: 'var(--color-bone)',
            fontFamily: 'var(--font-heading)',
            fontSize: '12px',
            letterSpacing: '0.2em',
          }}
        >
          What We Do
        </h1>

        <div className="flex flex-col gap-16">
          {SERVICES.map((service, i) => (
            <div key={service.heading}>
              {/* Ember divider */}
              <div
                style={{
                  width: '40px',
                  height: '1px',
                  backgroundColor: 'var(--color-ember)',
                  marginBottom: '24px',
                }}
              />
              <h2
                className="font-medium uppercase mb-4"
                style={{
                  color: 'var(--color-bone)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.563rem',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.3',
                }}
              >
                {service.heading}
              </h2>
              <p
                style={{
                  color: 'var(--color-smoke)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: '1.6',
                }}
              >
                {service.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
