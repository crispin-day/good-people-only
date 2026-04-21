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
      className="bg-[#000000] min-h-screen"
      style={{ animation: 'fadein 0.4s ease-in forwards', paddingTop: '120px', paddingBottom: '120px' }}
    >
      <Nav />
      <SideLabel text="GOOD PEOPLE ARTISTS" />

      <div className="max-w-[450px] mx-auto px-5">
        {/* MANAGEMENT section */}
        <p
          className="text-[#D8D8D8] font-normal uppercase mb-5"
          style={{ fontSize: '12px', letterSpacing: '0.2em', opacity: 0.6 }}
        >
          Management
        </p>

        {management.map((artist) => (
          <Link
            key={artist.slug}
            href={`/roster/${artist.slug}`}
            className="block mb-5 hover:opacity-70 transition-all duration-300"
          >
            <div
              className="w-full aspect-square"
              style={{ backgroundColor: artist.placeholderColor }}
            />
            <p
              className="text-[#D8D8D8] font-normal uppercase text-center"
              style={{ fontSize: '18px', letterSpacing: '0.1em', marginTop: '12px' }}
            >
              {artist.name}
            </p>
          </Link>
        ))}

        {/* LABEL section */}
        <p
          className="text-[#D8D8D8] font-normal uppercase mt-10 mb-5"
          style={{ fontSize: '12px', letterSpacing: '0.2em', opacity: 0.6 }}
        >
          Label
        </p>

        {label.map((artist) => (
          <Link
            key={artist.slug}
            href={`/roster/${artist.slug}`}
            className="block mb-5 hover:opacity-70 transition-all duration-300"
          >
            <div
              className="w-full aspect-square"
              style={{ backgroundColor: artist.placeholderColor }}
            />
            <p
              className="text-[#D8D8D8] font-normal uppercase text-center"
              style={{ fontSize: '18px', letterSpacing: '0.1em', marginTop: '12px' }}
            >
              {artist.name}
            </p>
          </Link>
        ))}
      </div>
    </main>
  )
}
