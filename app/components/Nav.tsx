'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import styles from './Nav.module.css'

const NAV_LINKS = [
  { label: 'Management', href: '/roster' },
  { label: 'Label', href: '/roster' },
  { label: 'Affiliates', href: '/affiliates' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo-circle-black.png" width={32} height={32} alt="Good People Only" />
            <span className={styles.logoText}>Good People Only</span>
          </Link>

          <nav aria-label="Primary">
            <ul className={styles.navLinks}>
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href === '/roster' && pathname.startsWith('/roster')) ||
                  (link.href === '/affiliates' && pathname.startsWith('/affiliates'))
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <button
          className={styles.overlayClose}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        <nav className={styles.overlayNav} aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={styles.overlayLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
