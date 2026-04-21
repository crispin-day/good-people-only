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
    <main
      className="bg-[#000000] min-h-screen pb-[120px]"
      style={{ animation: 'fadein 3s', paddingTop: '120px' }}
    >
      {/* Header */}
      <div className="max-w-[1024px] mx-auto px-[120px] max-md:px-5 mb-[43px]">
        <h1 className="text-[#D8D8D8] text-[35px] font-normal mb-[43px]">
          ROSTER
        </h1>

        {/* Filter tabs */}
        <div className="flex items-center gap-3">
          {(['All', 'Management', 'Label'] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-[11px] font-normal uppercase tracking-[0.15em] px-4 py-2 border transition-opacity duration-200 ${
                activeFilter === f
                  ? 'border-[#D8D8D8] text-[#D8D8D8]'
                  : 'border-[#D8D8D8]/30 text-[#D8D8D8]/50 hover:opacity-70'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-[1024px] mx-auto px-[120px] max-md:px-5">
        <div className="flex flex-wrap gap-[10px] justify-center xl:justify-start">
          {sorted.map((artist) => (
            <Link
              key={artist.slug}
              href={`/roster/${artist.slug}`}
              className="w-full xl:w-[calc(50%_-_5px)] max-w-[450px] p-[20px] hover:opacity-70 transition-opacity duration-300 ease-in-out"
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
  )
}
