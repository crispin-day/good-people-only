'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Artist } from '../../lib/artists'

type Filter = 'All' | 'Management' | 'Label'

interface RosterClientProps {
  artists: Artist[]
}

export default function RosterClient({ artists }: RosterClientProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')

  const filtered = activeFilter === 'All'
    ? artists
    : artists.filter((a) => a.division === activeFilter)

  const sorted = [...filtered].sort((a, b) => a.sortOrder - b.sortOrder)

  return (
    <main className="bg-[#0A0A0A] min-h-screen pt-28 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <p className="text-[#D4603A] text-[11px] font-medium tracking-[0.25em] uppercase mb-6">Good People Only</p>
        <h1
          className="font-display italic font-light text-[#E8E4DF] leading-none mb-12"
          style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', textWrap: 'balance' }}
        >
          Roster
        </h1>

        {/* Filter tabs */}
        <div className="flex items-center gap-2">
          {(['All', 'Management', 'Label'] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-[11px] font-medium tracking-[0.18em] uppercase px-6 py-3 border transition-all duration-200 ${
                activeFilter === f
                  ? 'border-[#D4603A] text-[#D4603A] bg-[#D4603A]/8'
                  : 'border-white/10 text-[#9A9590] hover:text-[#E8E4DF] hover:border-white/25'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {sorted.map((artist) => (
            <Link
              key={artist.slug}
              href={`/roster/${artist.slug}`}
              className="group bg-[#0A0A0A] block"
            >
              {/* Image area */}
              <div className="w-full aspect-square overflow-hidden relative">
                <div
                  className="w-full h-full transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{ backgroundColor: artist.placeholderColor }}
                />
                {/* Name overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-400 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <span className="text-[#E8E4DF] text-[11px] font-medium tracking-[0.22em] uppercase">
                    View Artist
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 pb-6 bg-[#0A0A0A] group-hover:bg-[#111111] transition-colors duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-[#E8E4DF] font-semibold text-xl tracking-[-0.02em] group-hover:text-white transition-colors duration-200">
                      {artist.name}
                    </h2>
                    <p className="text-[#9A9590] text-[13px] mt-1 tracking-[0.01em]">{artist.genre}</p>
                  </div>
                  <span className={`shrink-0 text-[10px] font-medium tracking-[0.15em] uppercase border px-2 py-1 mt-0.5 ${
                    artist.division === 'Management'
                      ? 'border-[#E8E4DF]/20 text-[#E8E4DF]/50'
                      : 'border-[#D4603A]/40 text-[#D4603A]'
                  }`}>
                    {artist.division}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
