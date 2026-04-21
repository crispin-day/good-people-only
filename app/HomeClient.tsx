'use client'

import Nav from './components/Nav'
import Marquee from './components/Marquee'
import Footer from './components/Footer'
import styles from './Home.module.css'

export default function HomeClient() {
  return (
    <>
      <Nav />
      <Marquee />
      <div className={styles.heroWrap}>
        <section className={styles.hero}>
          <div className={`${styles.tagline} gpo-fadeup`}>
            <div>SURROUND YOURSELF WITH</div>
            <div>
              GOOD PEOPLE ONLY<span className={styles.period}>.</span>
            </div>
          </div>
          <div className={`${styles.meta} gpo-fadeup d1`}>
            <span>EST. TORONTO</span>
            <span className={styles.metaDot} />
            <span>MANAGEMENT · LABEL · CONSULTING</span>
          </div>
          <div className={`${styles.goodSpaces} gpo-fadeup d2`}>
            <span className={styles.goodSpacesLabel}>— GOOD SPACES</span>
            <div className={styles.goodSpacesLinks}>
              <a
                href="https://thecabinrecording.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.goodSpacesLink}
              >
                THE CABIN RECORDING ↗
              </a>
              <a
                href="https://goodpeoplestudio.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.goodSpacesLink}
              >
                GOOD PEOPLE STUDIO ↗
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
