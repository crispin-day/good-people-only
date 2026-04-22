import { ARTISTS, Artist } from '../../lib/artists'
import RosterClient from '../roster/RosterClient'
import { getSpotifyArtistImageUrl } from '../../lib/spotify'

export const metadata = {
  title: 'Management | Good People Only',
  description: 'Artist management division. Toronto.',
}

export default async function ManagementPage() {
  const all = [...ARTISTS].sort((a, b) => a.sortOrder - b.sortOrder)

  const artistsWithImages: Artist[] = await Promise.all(
    all.map(async (artist) => {
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
      pageTitle="MANAGEMENT"
      kicker="— GOOD PEOPLE ARTIST MANAGEMENT"
    />
  )
}
