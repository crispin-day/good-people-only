import Link from 'next/link'
import { notFound } from 'next/navigation'
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

  return (
    <div
      className="bg-[#000000] min-h-screen"
      style={{ animation: 'fadein 3s' }}
    >
      {/* Hero */}
      <div
        className="w-full h-screen flex items-center justify-center"
        style={{ backgroundColor: artist.placeholderColor }}
      >
        <h1
          className="text-[#D8D8D8] font-normal text-center px-5"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
        >
          {artist.name}
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-[1024px] mx-auto px-[120px] max-md:px-5 mt-[80px] pb-[120px]">
        <div className="flex flex-col md:flex-row gap-[60px]">
          {/* Bio */}
          <div className="md:w-[60%]">
            <p className="text-[#D8D8D8] font-medium leading-[1.6] text-[18px]">
              {artist.shortBio}
            </p>
          </div>

          {/* Metadata */}
          <div className="md:w-[40%]">
            <div className="mb-8">
              <p className="text-[#D8D8D8] text-[11px] font-normal uppercase tracking-[0.15em] border-b border-[#D8D8D8] pb-2">
                Division
              </p>
              <p className="text-[#D8D8D8] text-[18px] font-medium mt-3">
                {artist.division}
              </p>
            </div>

            <div className="mb-8">
              <p className="text-[#D8D8D8] text-[11px] font-normal uppercase tracking-[0.15em] border-b border-[#D8D8D8] pb-2">
                Genre
              </p>
              <p className="text-[#D8D8D8] text-[18px] font-medium mt-3">
                {artist.genre}
              </p>
            </div>

            {socials.length > 0 && (
              <div>
                <p className="text-[#D8D8D8] text-[11px] font-normal uppercase tracking-[0.15em] border-b border-[#D8D8D8] pb-2">
                  Links
                </p>
                <div className="flex flex-col gap-3 mt-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D8D8D8] text-[14px] font-normal underline hover:opacity-70 transition-opacity duration-300"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Back link */}
        <div className="mt-[80px]">
          <Link
            href="/roster"
            className="text-[#D8D8D8] text-[13px] font-normal uppercase tracking-[0.15em] hover:opacity-70 transition-opacity duration-300"
          >
            ← Back to Roster
          </Link>
        </div>
      </div>
    </div>
  )
}
