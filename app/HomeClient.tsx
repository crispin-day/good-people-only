'use client'

import Link from 'next/link'
import { ARTISTS, Artist } from '../lib/artists'

const managementArtists = ARTISTS
  .filter((a) => a.division === 'Management')
  .sort((a, b) => a.sortOrder - b.sortOrder)

const labelArtists = ARTISTS
  .filter((a) => a.division === 'Label')
  .sort((a, b) => a.sortOrder - b.sortOrder)

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
  return (
    <main
      className="bg-[#000000]"
      style={{ animation: 'fadein 3s' }}
    >
      {/* HERO */}
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

      {/* MANAGEMENT */}
      <section className="py-[120px]">
        <div className="max-w-[1024px] mx-auto px-5">
          <h2 className="text-[#D8D8D8] text-[35px] font-normal mb-[43px]">
            MANAGEMENT
          </h2>
          <ArtistGrid artists={managementArtists} />
        </div>
      </section>

      {/* LABEL */}
      <section className="py-[120px]">
        <div className="max-w-[1024px] mx-auto px-5">
          <h2 className="text-[#D8D8D8] text-[35px] font-normal mb-[43px]">
            LABEL
          </h2>
          <ArtistGrid artists={labelArtists} />
        </div>
      </section>
    </main>
  )
}
