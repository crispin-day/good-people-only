'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import styles from './Nav.module.css'

const NAV_LINKS = [
  { label: 'Management', href: '/management' },
  { label: 'Label', href: '/label' },
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
            {/* Wordmark removed per Crispin — logo circle only */}
          </Link>

          <nav aria-label="Primary">
            <ul className={styles.navLinks}>
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== '/' && pathname.startsWith(link.href + '/'))
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
        // @ts-expect-error - inert is valid HTML but not yet in TS types
        inert={!menuOpen ? '' : undefined}
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
