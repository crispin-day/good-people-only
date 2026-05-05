import { ARTISTS } from '../../lib/artists'
import RosterClient from '../roster/RosterClient'

export const metadata = {
  title: 'Label | Good People Only',
  description: 'Good People Record Co.',
}

export default function LabelPage() {
  const filtered = ARTISTS
    .filter(a => a.division === 'Label')
    .sort((a, b) => a.sortOrder - b.sortOrder)

  return (
    <RosterClient
      artists={filtered}
      pageTitle="THE LABEL"
      kicker="GOOD PEOPLE RECORD CO."
      slugBase="/label"
    />
  )
}
