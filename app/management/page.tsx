import { ARTISTS } from '../../lib/artists'
import RosterClient from '../roster/RosterClient'

export const metadata = {
  title: 'Management | Good People Only',
  description: 'Artist management division.',
}

export default function ManagementPage() {
  const all = [...ARTISTS].sort((a, b) => a.sortOrder - b.sortOrder)

  return (
    <RosterClient
      artists={all}
      pageTitle="MANAGEMENT"
      kicker="GOOD PEOPLE ARTIST MANAGEMENT"
    />
  )
}
