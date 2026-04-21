'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Artist } from '../../lib/artists'

type Filter = 'All' | 'Management' | 'Label'

interface RosterClientProps {
  artists: Artist[]
}

const NAV_LINKS = ['MANAGEMENT', 'LABEL', 'ABOUT', 'CONTACT']

export default function RosterClient({ artists }: RosterClientProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState<Filter>('All')

  const sorted = [...artists]
    .filter((a) => activeFilter === 'All' || a.division === activeFilter)
    .sort((a, b) => a.sortOrder - b.sortOrder)

  return (
    <>
      {/* HAMBURGER */}
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

      {/* GPO WORDMARK */}
      <Link
        href="/"
        className="fixed z-50 text-[#D8D8D8] text-[13px] font-normal uppercase tracking-[0.25em] hover:opacity-70 transition-opacity duration-300"
        style={{ top: '43px', right: '80px' }}
      >
        GPO
      </Link>

      {/* NAV OVERLAY */}
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
        className="bg-[#000000] min-h-screen pb-[120px]"
        style={{ animation: 'fadein 0.4s ease-in forwards', paddingTop: '120px' }}
      >
        <div className="max-w-[1024px] mx-auto px-5">
          <h1 className="text-[#D8D8D8] text-[35px] font-normal mb-[43px]">
            ROSTER
          </h1>

          {/* Filter tabs */}
          <div className="flex items-center gap-3 mb-[43px]">
            {(['All', 'Management', 'Label'] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`text-[11px] font-normal uppercase tracking-[0.15em] px-4 py-2 border border-[#D8D8D8] transition-opacity duration-200 ${
                  activeFilter === f
                    ? 'text-[#D8D8D8]'
                    : 'text-[#D8D8D8]/50 hover:opacity-70'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-[10px]">
            {sorted.map((artist) => (
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
        </div>
      </main>
    </>
  )
}
