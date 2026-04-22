import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '../../components/Nav'
import Marquee from '../../components/Marquee'
import Footer from '../../components/Footer'
import { getArtistBySlug, ARTISTS } from '../../../lib/artists'
import ArtistNav from './ArtistNav'
import styles from './artist.module.css'

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

  const idx = ARTISTS.findIndex((a) => a.slug === slug)
  const prevArtist = idx > 0 ? ARTISTS[idx - 1] : null
  const nextArtist = idx < ARTISTS.length - 1 ? ARTISTS[idx + 1] : null

  const socials = [
    artist.spotifyUrl ? { label: 'Spotify ↗', url: artist.spotifyUrl } : null,
    artist.instagramUrl ? { label: 'Instagram ↗', url: artist.instagramUrl } : null,
    artist.youtubeUrl ? { label: 'YouTube ↗', url: artist.youtubeUrl } : null,
    artist.websiteUrl ? { label: 'Website ↗', url: artist.websiteUrl } : null,
  ].filter((s): s is { label: string; url: string } => s !== null)

  return (
    <div className={styles.page}>
      <Nav />
      <Marquee />
      <div className={styles.inner}>
        <Link href="/roster" className={styles.backLink}>
          ← ROSTER
        </Link>

        <div className={styles.imageRow}>
          <ArtistNav
            prevSlug={prevArtist?.slug ?? null}
            prevName={prevArtist?.name ?? null}
            nextSlug={nextArtist?.slug ?? null}
            nextName={nextArtist?.name ?? null}
            position="left"
          />
          <div className={styles.imageWrap}>
            {artist.imgSrc ? (
              <Image
                src={artist.imgSrc}
                alt={artist.name}
                fill
                style={{ objectFit: 'cover', objectPosition: artist.imgPosition || 'center' }}
                sizes="(max-width: 768px) 100vw, 680px"
                priority
              />
            ) : (
              <div
                className={styles.placeholder}
                style={{ backgroundColor: artist.placeholderColor }}
              />
            )}
          </div>
          <ArtistNav
            prevSlug={prevArtist?.slug ?? null}
            prevName={prevArtist?.name ?? null}
            nextSlug={nextArtist?.slug ?? null}
            nextName={nextArtist?.name ?? null}
            position="right"
          />
        </div>

        <h1 className={styles.name}>{artist.name}</h1>
        <p className={styles.genre}>{artist.genre} — {artist.division}</p>
        <p className={styles.bio}>{artist.shortBio}</p>

        {socials.length > 0 && (
          <div className={styles.socials}>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.label}
              </a>
            ))}
          </div>
        )}

      </div>
      <Footer />
    </div>
  )
}
