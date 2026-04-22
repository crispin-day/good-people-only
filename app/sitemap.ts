import { MetadataRoute } from 'next'
import { ARTISTS } from '../lib/artists'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.goodpeopleonly.com'
  const now = new Date()

  const staticPages = [
    { url: base, lastModified: now, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/roster`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/affiliates`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.6 },
  ]

  const artistPages = ARTISTS.map((artist) => ({
    url: `${base}/roster/${artist.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...artistPages]
}
