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
        <div className={`${styles.tagline} gpo-fadeup`}>
          <span className={styles.line}>GOOD</span>
          <span className={styles.line}>PEOPLE</span>
          <span className={styles.line}>ONLY<span className={styles.period}>.</span></span>
        </div>
      </div>
      <Footer />
    </div>
  )
}
