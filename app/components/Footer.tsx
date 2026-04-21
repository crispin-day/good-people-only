import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'

const SITE_LINKS = [
  { label: 'Management', href: '/management' },
  { label: 'Label', href: '/label' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Store ↗', href: '/store', external: true },
]

const SOCIAL_LINKS = [
  { label: 'Instagram ↗', href: 'https://www.instagram.com/goodpeopleonly' },
  { label: 'Spotify ↗', href: 'https://open.spotify.com/user/goodpeopleonly' },
  { label: 'YouTube ↗', href: 'https://www.youtube.com/@goodpeopleonly' },
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
          <ul className={styles.links}>
            {SOCIAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.bottomText}>© 2026 Good People Only</span>
        <span className={styles.bottomText}>Made in Toronto</span>
      </div>
    </footer>
  )
}
