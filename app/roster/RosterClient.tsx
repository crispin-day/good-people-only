'use client'

import Link from 'next/link'
import Nav from '../components/Nav'
import SideLabel from '../components/SideLabel'
import { Artist } from '../../lib/artists'

interface RosterClientProps {
  artists: Artist[]
}

export default function RosterClient({ artists }: RosterClientProps) {
  const management = artists
    .filter((a) => a.division === 'Management')
    .sort((a, b) => a.sortOrder - b.sortOrder)

  const label = artists
    .filter((a) => a.division === 'Label')
    .sort((a, b) => a.sortOrder - b.sortOrder)

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: 'var(--color-void)',
        animation: 'fadein 0.4s ease-in forwards',
        paddingTop: '120px',
        paddingBottom: '120px',
      }}
    >
      <Nav />
      <SideLabel text="GOOD PEOPLE ARTISTS" />

      <div className="max-w-[450px] mx-auto px-5">
        {/* MANAGEMENT section */}
        <p
          className="font-normal uppercase mb-5"
          style={{
            color: 'var(--color-smoke)',
            fontFamily: 'var(--font-heading)',
            fontSize: '12px',
            letterSpacing: '0.2em',
          }}
        >
          Management
        </p>

        {management.map((artist) => (
          <Link
            key={artist.slug}
            href={`/roster/${artist.slug}`}
            className="block mb-5 transition-all duration-300"
            style={{ display: 'block' }}
          >
            <div
              className="w-full aspect-square transition-transform duration-300 ease-out"
              style={{
                backgroundColor: artist.placeholderColor,
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.transform = 'scale(1.02)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.transform = 'scale(1)'
              }}
            />
            <p
              className="font-normal uppercase text-center"
              style={{
                color: 'var(--color-bone)',
                fontFamily: 'var(--font-heading)',
                fontSize: '18px',
                letterSpacing: '0.1em',
                marginTop: '12px',
              }}
            >
              {artist.name}
            </p>
          </Link>
        ))}

        {/* LABEL section */}
        <p
          className="font-normal uppercase mt-10 mb-5"
          style={{
            color: 'var(--color-smoke)',
            fontFamily: 'var(--font-heading)',
            fontSize: '12px',
            letterSpacing: '0.2em',
          }}
        >
          Label
        </p>

        {label.map((artist) => (
          <Link
            key={artist.slug}
            href={`/roster/${artist.slug}`}
            className="block mb-5 transition-all duration-300"
            style={{ display: 'block' }}
          >
            <div
              className="w-full aspect-square transition-transform duration-300 ease-out"
              style={{
                backgroundColor: artist.placeholderColor,
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.transform = 'scale(1.02)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.transform = 'scale(1)'
              }}
            />
            <p
              className="font-normal uppercase text-center"
              style={{
                color: 'var(--color-bone)',
                fontFamily: 'var(--font-heading)',
                fontSize: '18px',
                letterSpacing: '0.1em',
                marginTop: '12px',
              }}
            >
              {artist.name}
            </p>
          </Link>
        ))}
      </div>
    </main>
  )
}
