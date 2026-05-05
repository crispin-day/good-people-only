import Image from 'next/image'
import Link from 'next/link'
import Nav from './Nav'
import Marquee from './Marquee'
import Footer from './Footer'
import ArtistNav from './ArtistNav'
import BioExpander from '../roster/[slug]/BioExpander'
import { Artist } from '../../lib/artists'
import styles from '../roster/[slug]/artist.module.css'

interface ArtistProfileProps {
  artist: Artist
  prevSlug: string | null
  nextSlug: string | null
  /** The section base path, e.g. '/label' or '/management' */
  base: string
  /** Back link label, e.g. '← LABEL' */
  backLabel: string
}

export default function ArtistProfile({ artist, prevSlug, nextSlug, base, backLabel }: ArtistProfileProps) {
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
        <Link href={base} className={styles.backLink}>
          {backLabel}
        </Link>

        <div className={styles.imageWrap}>
          <ArtistNav prevSlug={prevSlug} nextSlug={nextSlug} base={base} />
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
        <p className={styles.genre}>{artist.genre}</p>

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
