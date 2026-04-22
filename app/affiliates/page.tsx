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
    blurb: 'A residential recording studio in Toronto. Live room, isolation booth, vintage chain.',
    url: 'https://www.instagram.com/thecabinrecording/',
  },
  {
    name: 'Stay Level Records',
    kind: 'Record label',
    city: 'Toronto, ON',
    blurb: 'An imprint partner. Releases from inside and outside the GPO roster.',
    url: 'https://www.staylevelrecords.com/',
  },
  {
    name: 'Stay Level Distribution',
    kind: 'Distribution',
    city: 'Toronto, ON',
    blurb: 'Global distribution for digitally savvy teams and artists.',
    url: 'https://www.stayleveldistribution.com/',
  },
  {
    name: 'Good Merch Only',
    kind: 'Merchandise',
    city: 'Toronto, ON',
    blurb: 'Full service global merchandising and product development.',
    url: 'https://goodmerchonly.com/',
  },
]

export default function AffiliatesPage() {
  return (
    <div className="gpo-page-layout">
      <Nav />
      <Marquee />
      <main>
        <div className={styles.pageHeader}>
          <p className={styles.kicker}>AFFILIATES</p>
          <h1 className={styles.title}>WHO WE WORK WITH.</h1>
          <p className={styles.subtitle}>
            Sister studios, labels, and distribution partners in the GOOD PEOPLE ONLY orbit. Separate companies, shared standards.
          </p>
        </div>

        <div className={styles.list}>
          {AFFILIATES.map((affiliate, i) => (
            affiliate.url ? (
              <a key={affiliate.name} href={affiliate.url} target="_blank" rel="noopener noreferrer" className={styles.row} style={{ textDecoration: 'none', background: 'transparent', color: 'inherit' }}>
                <span className={styles.rowIndex}>{String(i + 1).padStart(2, '0')}</span>
                <div className={styles.rowMain}>
                  <span className={styles.rowName}>{affiliate.name}</span>
                  <p className={styles.rowBlurb}>{affiliate.blurb}</p>
                </div>
                <span className={styles.rowMeta}>{affiliate.kind}</span>
                <span className={styles.rowArrow}>↗</span>
              </a>
            ) : (
              <div key={affiliate.name} className={styles.row}>
                <span className={styles.rowIndex}>{String(i + 1).padStart(2, '0')}</span>
                <div className={styles.rowMain}>
                  <span className={styles.rowName}>{affiliate.name}</span>
                  <p className={styles.rowBlurb}>{affiliate.blurb}</p>
                </div>
                <span className={styles.rowMeta}>{affiliate.kind}</span>
                <span className={styles.rowArrow}>↗</span>
              </div>
            )
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
