import { ARTISTS } from '../../lib/artists'
import RosterClient from '../roster/RosterClient'

export const metadata = {
  title: 'Management | Good People Only',
  description: 'Artist management division. Toronto.',
}

export default function ManagementPage() {
  // Management tab shows all artists
  const artists = [...ARTISTS].sort((a, b) => a.sortOrder - b.sortOrder)
  return (
    <RosterClient
      artists={artists}
      pageTitle="MANAGEMENT"
      kicker="— GOOD PEOPLE ARTIST MANAGEMENT"
    />
  )
}
