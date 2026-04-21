'use client'

import { useState } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Management', href: '/management' },
  { label: 'Label', href: '/label' },
  { label: 'About', href: '/about' },
  { label: 'Store', href: '/store' },
  { label: 'Consulting', href: '/consulting' },
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

      {/* GPO circular logo */}
      <Link
        href="/"
        className="fixed z-50 w-10 h-10 rounded-full border border-[#D8D8D8] flex items-center justify-center hover:opacity-70 transition-opacity duration-300"
        style={{ top: '43px', right: '80px' }}
        aria-label="Good People Only — Home"
      >
        <span
          className="text-[#D8D8D8] font-normal text-center leading-none"
          style={{ fontSize: '7px', letterSpacing: '0.05em' }}
        >
          GO<br />OD
        </span>
      </Link>

      {/* Full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#000000] flex flex-col items-center justify-center transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
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

        <nav className="flex flex-col items-center gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#D8D8D8] font-normal uppercase hover:opacity-70 transition-opacity duration-300 ease-in-out"
              style={{ fontSize: '4rem', letterSpacing: '0.3em' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
