import Nav from '../components/Nav'
import Marquee from '../components/Marquee'
import Footer from '../components/Footer'
import styles from './Affiliates.module.css'

export const metadata = {
  title: 'Affiliates | Good People Only',
  description: 'Sister studios, labels, and distribution partners in the Good People Only orbit.',
}

const AFFILIATES = [
  {
    name: 'The Cabin Recording',
    kind: 'Recording studio',
    city: 'Toronto, ON',
    blurb: 'A residential recording studio in Toronto. Live room, isolation booths, vintage chain.',
  },
  {
    name: 'Stay Level Records',
    kind: 'Record label',
    city: 'Toronto, ON',
    blurb: 'An imprint partner. Releases from inside and outside the GPO roster.',
  },
  {
    name: 'Stay Level Distribution',
    kind: 'Distribution',
    city: 'Toronto, ON',
    blurb: 'Global digital + physical distribution for independent artists.',
  },
  {
    name: 'Good Merch Only',
    kind: 'Merchandise',
    city: 'Toronto, ON',
    blurb: 'The official GPO merch operation. Quality goods, no filler.',
  },
]

export default function AffiliatesPage() {
  return (
    <div className="gpo-page-layout">
      <Nav />
      <Marquee />
      <main>
        <div className={styles.pageHeader}>
          <p className={styles.kicker}>— AFFILIATES</p>
          <h1 className={styles.title}>WHO WE WORK WITH.</h1>
          <p className={styles.subtitle}>
            Sister studios, labels, and distribution partners in the GOOD PEOPLE ONLY orbit. Separate companies, shared standards.
          </p>
        </div>

        <div className={styles.list}>
          {AFFILIATES.map((affiliate, i) => (
            <div key={affiliate.name} className={styles.row}>
              <span className={styles.rowIndex}>{String(i + 1).padStart(2, '0')}</span>
              <div className={styles.rowMain}>
                <span className={styles.rowName}>{affiliate.name}</span>
                <p className={styles.rowBlurb}>{affiliate.blurb}</p>
              </div>
              <span className={styles.rowMeta}>{affiliate.kind} · {affiliate.city}</span>
              <span className={styles.rowArrow}>↗</span>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
