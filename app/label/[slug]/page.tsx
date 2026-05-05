import { notFound } from 'next/navigation'
import { getArtistBySlug, ARTISTS } from '../../../lib/artists'
import ArtistProfile from '../../components/ArtistProfile'

const SITE_URL = 'https://goodpeopleonly.com'
const LABEL_ARTISTS = ARTISTS.filter(a => a.division === 'Label').sort((a, b) => a.sortOrder - b.sortOrder)

export function generateStaticParams() {
  return LABEL_ARTISTS.map((artist) => ({ slug: artist.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const artist = getArtistBySlug(slug)
  if (!artist || artist.division !== 'Label') return { title: 'Not Found | Good People Only' }

  const description = artist.seoDescription || artist.shortBio
  const pageUrl = `${SITE_URL}/label/${artist.slug}`
  const imageUrl = artist.imgSrc ? `${SITE_URL}${artist.imgSrc}` : `${SITE_URL}/og-default.jpg`

  return {
    title: `${artist.name} | Good People Only`,
    description,
    alternates: { canonical: pageUrl },
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

export default async function LabelArtistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const artist = getArtistBySlug(slug)

  if (!artist || artist.division !== 'Label') notFound()

  const idx = LABEL_ARTISTS.findIndex(a => a.slug === slug)
  const prevArtist = idx > 0 ? LABEL_ARTISTS[idx - 1] : null
  const nextArtist = idx < LABEL_ARTISTS.length - 1 ? LABEL_ARTISTS[idx + 1] : null

  return (
    <ArtistProfile
      artist={artist}
      prevSlug={prevArtist?.slug ?? null}
      nextSlug={nextArtist?.slug ?? null}
      base="/label"
      backLabel="← LABEL"
    />
  )
}
