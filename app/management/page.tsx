import { ARTISTS } from '../../lib/artists'
import RosterClient from '../roster/RosterClient'

export const metadata = {
  title: 'Management | Good People Only',
  description: 'Artist management division.',
}

export default function ManagementPage() {
  const mgmtArtists = ARTISTS
    .filter(a => a.division === 'Management')
    .sort((a, b) => a.sortOrder - b.sortOrder)

  return (
    <RosterClient
      artists={mgmtArtists}
      pageTitle="MANAGEMENT"
      kicker="GOOD PEOPLE ARTIST MANAGEMENT"
      slugBase="/management"
    />
  )
}
