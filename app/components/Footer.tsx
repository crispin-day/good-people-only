import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.taglineArea}>
        <p className={styles.footerTagline}>SURROUND YOURSELF WITH GOOD PEOPLE ONLY.</p>
      </div>
      <div className={styles.bottomBar}>
        <span className={styles.bottomText}>© 2026 GOOD PEOPLE ONLY</span>
        <span className={styles.bottomText}>TORONTO</span>
      </div>
    </footer>
  )
}
