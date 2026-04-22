import RosterClient from './RosterClient'
import { ARTISTS, Artist } from '../../lib/artists'
import { getSpotifyArtistImageUrl } from '../../lib/spotify'

export const metadata = {
  title: 'Roster | Good People Only',
  description: 'Artists managed and represented by Good People Only. Based in Toronto.',
}

export default async function RosterPage() {
  // Fetch Spotify images at build time for artists that have a Spotify URL
  const artistsWithImages: Artist[] = await Promise.all(
    ARTISTS.map(async (artist) => {
      if (artist.imgSrc) return artist // already has a local image
      if (!artist.spotifyUrl) return artist

      // Extract artist ID from Spotify URL
      const match = artist.spotifyUrl.match(/artist\/([a-zA-Z0-9]+)/)
      if (!match) return artist

      const imgUrl = await getSpotifyArtistImageUrl(match[1])
      return imgUrl ? { ...artist, imgSrc: imgUrl } : artist
    })
  )

  return <RosterClient artists={artistsWithImages} />
}
