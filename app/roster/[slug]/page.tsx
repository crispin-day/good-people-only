import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '../../components/Nav'
import SideLabel from '../../components/SideLabel'
import { getArtistBySlug, ARTISTS } from '../../../lib/artists'

export function generateStaticParams() {
  return ARTISTS.map((artist) => ({ slug: artist.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const artist = getArtistBySlug(slug)
  if (!artist) return { title: 'Not Found | Good People Only' }
  return {
    title: `${artist.name} | Good People Only`,
    description: artist.shortBio,
  }
}

export default async function ArtistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const artist = getArtistBySlug(slug)

  if (!artist) notFound()

  const socials = [
    artist.spotifyUrl ? { label: 'Spotify', url: artist.spotifyUrl } : null,
    artist.instagramUrl ? { label: 'Instagram', url: artist.instagramUrl } : null,
    artist.youtubeUrl ? { label: 'YouTube', url: artist.youtubeUrl } : null,
    artist.websiteUrl ? { label: 'Website', url: artist.websiteUrl } : null,
  ].filter((s): s is { label: string; url: string } => s !== null)

  const sideLabelText =
    artist.division === 'Management'
      ? 'GOOD PEOPLE ARTISTS MANAGEMENT'
      : 'GOOD PEOPLE RECORD CO.'

  return (
    <main
      className="bg-[#000000] min-h-screen"
      style={{ animation: 'fadein 0.4s ease-in forwards', paddingTop: '120px', paddingBottom: '120px' }}
    >
      <Nav />
      <SideLabel text={sideLabelText} />

      <div className="max-w-[600px] mx-auto px-5">
        {/* Back link */}
        <Link
          href="/roster"
          className="text-[#D8D8D8] font-normal uppercase hover:opacity-70 transition-opacity duration-300 block mb-10"
          style={{ fontSize: '12px', letterSpacing: '0.15em' }}
        >
          ← ROSTER
        </Link>

        {/* Square placeholder */}
        <div
          className="w-full aspect-square"
          style={{ backgroundColor: artist.placeholderColor, maxWidth: '600px' }}
        />

        {/* Artist name */}
        <h1
          className="text-[#D8D8D8] font-normal uppercase text-center mt-6"
          style={{ fontSize: '2rem', letterSpacing: '0.2em' }}
        >
          {artist.name}
        </h1>

        {/* Short bio */}
        <p
          className="text-[#D8D8D8] font-normal text-center mx-auto mt-4"
          style={{ fontSize: '16px', maxWidth: '450px', lineHeight: '1.6' }}
        >
          {artist.shortBio}
        </p>

        {/* Social links */}
        {socials.length > 0 && (
          <div className="flex items-center justify-center gap-6 mt-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D8D8D8] font-normal uppercase hover:opacity-70 transition-opacity duration-300"
                style={{ fontSize: '12px', letterSpacing: '0.15em' }}
              >
                {social.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
