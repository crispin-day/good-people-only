import { ARTISTS, Artist } from '../../lib/artists'
import RosterClient from '../roster/RosterClient'
import { getSpotifyArtistImageUrl } from '../../lib/spotify'

export const metadata = {
  title: 'Label | Good People Only',
  description: 'Good People Record Co. Toronto.',
}

const LABEL_SLUGS = ['jeremie-albino', 'good-kid', 'benjamin-dakota-rogers', 'glitter-party', 'benja']

export default async function LabelPage() {
  const filtered = ARTISTS
    .filter(a => LABEL_SLUGS.includes(a.slug))
    .sort((a, b) => a.sortOrder - b.sortOrder)

  const artistsWithImages: Artist[] = await Promise.all(
    filtered.map(async (artist) => {
      if (artist.imgSrc) return artist
      if (!artist.spotifyUrl) return artist
      const match = artist.spotifyUrl.match(/artist\/([a-zA-Z0-9]+)/)
      if (!match) return artist
      const imgUrl = await getSpotifyArtistImageUrl(match[1])
      return imgUrl ? { ...artist, imgSrc: imgUrl } : artist
    })
  )

  return (
    <RosterClient
      artists={artistsWithImages}
      pageTitle="THE LABEL"
      kicker="— GOOD PEOPLE RECORD CO."
    />
  )
}
