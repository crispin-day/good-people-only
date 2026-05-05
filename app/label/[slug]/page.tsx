import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '../../components/Nav'
import Marquee from '../../components/Marquee'
import Footer from '../../components/Footer'
import { getArtistBySlug, getArtistsByDivision } from '../../../lib/artists'
import ArtistNav from '../../roster/[slug]/ArtistNav'
import ShowMoreBio from '../../roster/[slug]/ShowMoreBio'
import styles from '../../roster/[slug]/artist.module.css'

const LABEL_ARTISTS = getArtistsByDivision('Label')

export function generateStaticParams() {
  return LABEL_ARTISTS.map((artist) => ({ slug: artist.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const artist = getArtistBySlug(slug)
  if (!artist) return { title: 'Not Found' }
  const metaDesc = `${artist.shortBio.split('\n\n')[0].slice(0, 155)} — Represented by Good People Only.`
  return {
    title: artist.name,
    description: metaDesc,
    keywords: artist.keywords ?? [artist.name, artist.genre, 'Good People Only'],
    alternates: { canonical: `https://www.goodpeopleonly.com/label/${artist.slug}` },
    openGraph: {
      type: 'profile',
      title: `${artist.name} | Good People Only`,
      description: metaDesc,
      url: `https://www.goodpeopleonly.com/label/${artist.slug}`,
      images: artist.imgSrc ? [{ url: `https://www.goodpeopleonly.com${artist.imgSrc}`, width: 800, height: 800, alt: artist.name }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${artist.name} | Good People Only`,
      description: metaDesc,
      images: artist.imgSrc ? [`https://www.goodpeopleonly.com${artist.imgSrc}`] : [],
    },
  }
}

export default async function LabelArtistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const artist = getArtistBySlug(slug)
  if (!artist || !LABEL_ARTISTS.find(a => a.slug === slug)) notFound()

  const idx = LABEL_ARTISTS.findIndex((a) => a.slug === slug)
  const prevArtist = idx > 0 ? LABEL_ARTISTS[idx - 1] : null
  const nextArtist = idx < LABEL_ARTISTS.length - 1 ? LABEL_ARTISTS[idx + 1] : null

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
        <Link href="/label" className={styles.backLink}>← LABEL</Link>

        <div className={styles.imageRow}>
          <ArtistNav
            prevSlug={prevArtist?.slug ?? null}
            prevName={prevArtist?.name ?? null}
            nextSlug={nextArtist?.slug ?? null}
            nextName={nextArtist?.name ?? null}
            base="/label"
          />
          <div className={styles.imageWrap}>
            {artist.imgSrc ? (
              <Image
                src={artist.imgSrc}
                alt={artist.name}
                fill
                style={{ objectFit: 'cover', objectPosition: artist.imgPosition || 'center' }}
                sizes="(max-width: 768px) 100vw, 560px"
                priority
              />
            ) : (
              <div className={styles.placeholder} style={{ backgroundColor: artist.placeholderColor }} />
            )}
          </div>
        </div>

        <h1 className={styles.name}>{artist.name}</h1>
        <p className={styles.genre}>{artist.genre}</p>

        {socials.length > 0 && (
          <div className={styles.socials}>
            {socials.map((social) => (
              <a key={social.label} href={social.url} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                {social.label}
              </a>
            ))}
            {artist.tourUrl && (
              <a href={artist.tourUrl} className={styles.socialLink} target="_blank" rel="noopener noreferrer">Tour Dates ↗</a>
            )}
            {artist.extraLinks?.map((link) => (
              <a key={link.label} href={link.url} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        )}

        <ShowMoreBio bio={artist.longBio ?? artist.shortBio} />
      </div>
      <Footer />
    </div>
  )
}
