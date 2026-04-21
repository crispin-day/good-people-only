import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'

const SITE_LINKS = [
  { label: 'Management', href: '/management' },
  { label: 'Label', href: '/label' },
  { label: 'Affiliates', href: '/affiliates' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Store ↗', href: '/store', external: true },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <div className={styles.logoWrap}>
            <Image src="/logo-circle-white.png" width={32} height={32} alt="Good People Only" />
          </div>
          <span className={styles.brandName}>Good People Only</span>
          <p className={styles.brandDesc}>
            Artist management, record label, studios and consulting. Toronto, Canada.
          </p>
        </div>

        <div>
          <span className={styles.colHeading}>Site</span>
          <ul className={styles.links}>
            {SITE_LINKS.map((link) => (
              <li key={link.label}>
                {link.external ? (
                  <a
                    href={link.href}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className={styles.colHeading}>Elsewhere</span>
          <div className={styles.iconRow}>
            <a
              href="https://instagram.com/goodpeople.only"
              className={styles.iconLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="mailto:contact@goodpeopleonly.com"
              className={styles.iconLink}
              aria-label="Email"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="1" />
                <path d="M3.5 6 L12 13 L20.5 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.bottomText}>© 2026 Good People Only</span>
        <span className={styles.bottomText}>Made in Toronto</span>
      </div>
    </footer>
  )
}
