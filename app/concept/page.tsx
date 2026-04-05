import HomeClient from '../HomeClient'

export const metadata = {
  title: 'GPO — Concept Preview',
  robots: 'noindex',
}

export default function ConceptPage() {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          background: '#D4603A',
          color: '#0A0A0A',
          textAlign: 'center',
          padding: '6px 12px',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}
      >
        Concept Preview — Not Live
      </div>
      <div style={{ paddingTop: '28px' }}>
        <HomeClient />
      </div>
    </>
  )
}
