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
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <h1
          className="text-[#E8E4DF] font-bold uppercase tracking-[-0.03em] leading-none mb-6"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          Roster
        </h1>
        <div className="h-0.5 w-12 bg-[#D4603A] mb-10" />

        {/* Filter tabs */}
        <div className="flex items-center gap-1">
          {(['All', 'Management', 'Label'] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-xs font-medium tracking-[0.15em] uppercase px-5 py-2.5 border transition-all duration-200 ${
                activeFilter === f
                  ? 'border-[#D4603A] text-[#D4603A] bg-[#D4603A]/10'
                  : 'border-white/10 text-[#9A9590] hover:text-[#E8E4DF] hover:border-white/30'
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
                  className="w-full h-full transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ backgroundColor: artist.placeholderColor }}
                />
                {/* Name overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-6 opacity-0 group-hover:opacity-100">
                  <span className="text-[#E8E4DF] text-xs font-medium tracking-[0.2em] uppercase">
                    View Artist
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 bg-[#0A0A0A] group-hover:bg-[#141414] transition-colors duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-[#E8E4DF] font-semibold text-lg tracking-[-0.01em] group-hover:text-white transition-colors duration-200">
                      {artist.name}
                    </h2>
                    <p className="text-[#9A9590] text-sm mt-1">{artist.genre}</p>
                  </div>
                  <span className={`shrink-0 text-[10px] font-medium tracking-[0.15em] uppercase border px-2 py-1 ${
                    artist.division === 'Management'
                      ? 'border-[#5B7A8A]/40 text-[#5B7A8A]'
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
