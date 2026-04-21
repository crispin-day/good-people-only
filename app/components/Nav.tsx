'use client'

import { useState } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Roster', href: '/roster' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Hamburger — hidden when overlay open */}
      <button
        onClick={() => setMenuOpen(true)}
        className={`fixed z-50 flex flex-col gap-[6px] transition-opacity duration-300 ${menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        style={{ top: '36px', left: '32px' }}
        aria-label="Open menu"
      >
        <span className="block w-6 h-px bg-[#D8D8D8]" />
        <span className="block w-6 h-px bg-[#D8D8D8]" />
        <span className="block w-6 h-px bg-[#D8D8D8]" />
      </button>

      {/* GPO wordmark — always visible */}
      <Link
        href="/"
        className="fixed z-50 text-[#D8D8D8] text-[13px] font-normal uppercase tracking-[0.25em] hover:opacity-70 transition-opacity duration-300"
        style={{ top: '43px', right: '80px' }}
      >
        GPO
      </Link>

      {/* Full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#000000] transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setMenuOpen(false)
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute text-[#D8D8D8] text-2xl hover:opacity-70 transition-opacity duration-300"
          style={{ top: '36px', left: '32px' }}
          aria-label="Close menu"
        >
          ✕
        </button>

        <nav className="flex flex-col justify-center h-full pl-20 max-md:pl-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#D8D8D8] font-normal uppercase leading-tight hover:opacity-70 transition-opacity duration-300 ease-in-out"
              style={{ fontSize: 'clamp(2rem, 8vw, 75px)', letterSpacing: '8px' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
