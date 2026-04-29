import { MetadataRoute } from 'next'
import { ARTISTS } from '../lib/artists'

const SITE_URL = 'https://goodpeopleonly.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: SITE_URL, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${SITE_URL}/roster`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${SITE_URL}/about`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${SITE_URL}/services`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${SITE_URL}/contact`, priority: 0.6, changeFrequency: 'monthly' as const },
  ]

  const artistPages = ARTISTS.map((artist) => ({
    url: `${SITE_URL}/roster/${artist.slug}`,
    priority: artist.featured ? 0.9 : 0.8,
    changeFrequency: 'monthly' as const,
  }))

  return [...staticPages, ...artistPages]
}
