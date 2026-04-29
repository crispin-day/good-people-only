import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '../../components/Nav'
import Marquee from '../../components/Marquee'
import Footer from '../../components/Footer'
import { getArtistBySlug, ARTISTS } from '../../../lib/artists'
import BioExpander from './BioExpander'
import styles from './artist.module.css'

export function generateStaticParams() {
  return ARTISTS.map((artist) => ({ slug: artist.slug }))
}

const SITE_URL = 'https://goodpeopleonly.com'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const artist = getArtistBySlug(slug)
  if (!artist) return { title: 'Not Found | Good People Only' }

  const description = artist.seoDescription || artist.shortBio
  const pageUrl = `${SITE_URL}/roster/${artist.slug}`
  const imageUrl = artist.imgSrc ? `${SITE_URL}${artist.imgSrc}` : `${SITE_URL}/og-default.jpg`

  return {
    title: `${artist.name} | Good People Only`,
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${artist.name} | Good People Only`,
      description,
      url: pageUrl,
      siteName: 'Good People Only',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: artist.name }],
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${artist.name} | Good People Only`,
      description,
      images: [imageUrl],
    },
  }
}

export default async function ArtistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const artist = getArtistBySlug(slug)

  if (!artist) notFound()

  const socials = [
    artist.spotifyUrl ? { label: 'Spotify ↗', url: artist.spotifyUrl } : null,
    artist.instagramUrl ? { label: 'Instagram ↗', url: artist.instagramUrl } : null,
    artist.youtubeUrl ? { label: 'YouTube ↗', url: artist.youtubeUrl } : null,
    artist.websiteUrl ? { label: 'Website ↗', url: artist.websiteUrl } : null,
  ].filter((s): s is { label: string; url: string } => s !== null)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: artist.name,
    description: artist.seoDescription || artist.shortBio,
    url: `${SITE_URL}/roster/${artist.slug}`,
    ...(artist.imgSrc ? { image: `${SITE_URL}${artist.imgSrc}` } : {}),
    ...(artist.spotifyUrl ? { sameAs: [
      artist.spotifyUrl,
      ...(artist.instagramUrl ? [artist.instagramUrl] : []),
      ...(artist.websiteUrl ? [artist.websiteUrl] : []),
      ...(artist.youtubeUrl ? [artist.youtubeUrl] : []),
    ]} : {}),
    genre: artist.genre,
  }

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <Marquee />
      <div className={styles.inner}>
        <Link href="/roster" className={styles.backLink}>
          ← ROSTER
        </Link>

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

        <h1 className={styles.name}>{artist.name}</h1>
        <p className={styles.genre}>{artist.genre} — {artist.division}</p>

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
            {artist.tourUrl && (
              <a
                href={artist.tourUrl}
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tour Dates ↗
              </a>
            )}
          </div>
        )}

        {artist.longBio ? (
          <BioExpander shortBio={artist.shortBio} longBio={artist.longBio} />
        ) : (
          <p className={styles.bio}>{artist.shortBio}</p>
        )}
      </div>
      <Footer />
    </div>
  )
}
