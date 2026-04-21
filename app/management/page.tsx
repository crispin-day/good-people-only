import { getArtistsByDivision } from '../../lib/artists'
import RosterClient from '../roster/RosterClient'

export const metadata = {
  title: 'Management | Good People Only',
  description: 'Artist management division. Toronto.',
}

export default function ManagementPage() {
  const artists = getArtistsByDivision('Management')
  return (
    <RosterClient
      artists={artists}
      pageTitle="MANAGEMENT"
      kicker="— GOOD PEOPLE ARTIST MANAGEMENT"
    />
  )
}
