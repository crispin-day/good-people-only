'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ARTISTS, Artist } from '../lib/artists'

const managementArtists = ARTISTS
  .filter((a) => a.division === 'Management')
  .sort((a, b) => a.sortOrder - b.sortOrder)

const labelArtists = ARTISTS
  .filter((a) => a.division === 'Label')
  .sort((a, b) => a.sortOrder - b.sortOrder)

const NAV_LINKS = ['MANAGEMENT', 'LABEL', 'ABOUT', 'CONTACT']

function ArtistGrid({ artists }: { artists: Artist[] }) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-[10px]">
      {artists.map((artist) => (
        <Link
          key={artist.slug}
          href={`/roster/${artist.slug}`}
          className="p-[20px] max-w-[450px] w-full mx-auto xl:mx-0 hover:opacity-70 transition-opacity duration-300 ease-in-out"
        >
          <div
            className="w-full aspect-square"
            style={{ backgroundColor: artist.placeholderColor }}
          />
          <p className="text-[#D8D8D8] text-[28px] font-normal text-center mt-4">
            {artist.name}
          </p>
        </Link>
      ))}
    </div>
  )
}

export default function HomeClient() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* HAMBURGER — top-left, 36px/32px per design spec */}
      <button
        onClick={() => setMenuOpen(true)}
        className="fixed z-50 flex flex-col gap-[6px]"
        style={{ top: '36px', left: '32px' }}
        aria-label="Open menu"
      >
        <span className="block w-6 h-px bg-[#D8D8D8]" />
        <span className="block w-6 h-px bg-[#D8D8D8]" />
        <span className="block w-6 h-px bg-[#D8D8D8]" />
      </button>

      {/* GPO WORDMARK — top-right, 43px/80px per design spec */}
      <Link
        href="/"
        className="fixed z-50 text-[#D8D8D8] text-[13px] font-normal uppercase tracking-[0.25em] hover:opacity-70 transition-opacity duration-300"
        style={{ top: '43px', right: '80px' }}
      >
        GPO
      </Link>

      {/* FULL-SCREEN NAV OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#000000] flex flex-col justify-center px-[80px]">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute text-[#D8D8D8] text-2xl hover:opacity-70 transition-opacity duration-300"
            style={{ top: '36px', left: '32px' }}
            aria-label="Close menu"
          >
            ✕
          </button>
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-[#D8D8D8] text-[4rem] font-normal uppercase tracking-[0.3em] leading-tight hover:opacity-70 transition-opacity duration-300 ease-in-out"
              >
                {link}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* MAIN */}
      <main
        className="bg-[#000000]"
        style={{ animation: 'fadein 0.4s ease-in forwards' }}
      >
        {/* HERO — full viewport, pure black, centered wordmark + city */}
        <section className="h-screen w-full flex flex-col items-center justify-center">
          <h1
            className="text-[#D8D8D8] font-normal text-center leading-none"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)', letterSpacing: '0.3em' }}
          >
            GOOD PEOPLE ONLY
          </h1>
          <p
            className="text-[#D8D8D8] font-normal text-center mt-8"
            style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)', letterSpacing: '0.3em' }}
          >
            Toronto
          </p>
        </section>

        {/* MANAGEMENT artist grid */}
        <section className="py-[120px]">
          <div className="max-w-[1024px] mx-auto px-5">
            <h2 className="text-[#D8D8D8] text-[35px] font-normal mb-[43px]">
              MANAGEMENT
            </h2>
            <ArtistGrid artists={managementArtists} />
          </div>
        </section>

        {/* LABEL artist grid */}
        <section className="py-[120px]">
          <div className="max-w-[1024px] mx-auto px-5">
            <h2 className="text-[#D8D8D8] text-[35px] font-normal mb-[43px]">
              LABEL
            </h2>
            <ArtistGrid artists={labelArtists} />
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-[#D8D8D8] py-10 text-center">
          <span className="text-[#D8D8D8] text-[13px] font-normal">
            © 2026 Good People Only
          </span>
        </footer>
      </main>
    </>
  )
}
