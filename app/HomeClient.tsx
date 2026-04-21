'use client'

import Nav from './components/Nav'
import Marquee from './components/Marquee'
import Footer from './components/Footer'
import styles from './Home.module.css'

export default function HomeClient() {
  return (
    <div className={styles.page}>
      <Nav />
      <Marquee />
      <div className={styles.heroWrap}>
        <section
          className={styles.hero}
          data-hero-layout="stacked"
          data-hero-theme="paper"
        >
          <div className={`${styles.tagline} gpo-fadeup`}>
            <div>
              GOOD PEOPLE ONLY<span className={styles.period}>.</span>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
