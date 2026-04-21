'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { label: 'Roster', href: '/roster' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Hamburger — hidden when overlay open */}
      <button
        onClick={() => setMenuOpen(true)}
        className={`fixed z-50 flex flex-col gap-[6px] transition-opacity duration-300 ${menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        style={{ top: '36px', left: '32px' }}
        aria-label="Open menu"
      >
        <span className="block w-6 h-px" style={{ backgroundColor: 'var(--color-bone)' }} />
        <span className="block w-6 h-px" style={{ backgroundColor: 'var(--color-bone)' }} />
        <span className="block w-6 h-px" style={{ backgroundColor: 'var(--color-bone)' }} />
      </button>

      {/* GPO circular logo */}
      <Link
        href="/"
        className="fixed z-50 w-10 h-10 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity duration-300"
        style={{
          top: '43px',
          right: '80px',
          border: '1px solid var(--color-bone)',
        }}
        aria-label="Good People Only — Home"
      >
        <span
          className="font-normal text-center leading-none"
          style={{
            color: 'var(--color-bone)',
            fontFamily: 'var(--font-heading)',
            fontSize: '7px',
            letterSpacing: '0.05em',
          }}
        >
          GO<br />OD
        </span>
      </Link>

      {/* Scroll-aware background strip (when not in overlay) */}
      {!menuOpen && scrolled && (
        <div
          className="fixed top-0 left-0 right-0 z-30 transition-all duration-200"
          style={{
            height: '80px',
            backgroundColor: 'rgba(10,10,10,0.8)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        />
      )}

      {/* Full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ backgroundColor: 'var(--color-void)' }}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute text-2xl hover:opacity-70 transition-opacity duration-300"
          style={{ top: '36px', left: '32px', color: 'var(--color-bone)' }}
          aria-label="Close menu"
        >
          ✕
        </button>

        <nav className="flex flex-col items-center gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-normal uppercase hover:opacity-70 transition-opacity duration-300 ease-in-out relative"
                style={{
                  color: 'var(--color-bone)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '4rem',
                  letterSpacing: '0.3em',
                  borderBottom: isActive ? '2px solid var(--color-ember)' : 'none',
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}
