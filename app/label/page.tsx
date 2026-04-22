import { ARTISTS } from '../../lib/artists'
import RosterClient from '../roster/RosterClient'

export const metadata = {
  title: 'Label | Good People Only',
  description: 'Good People Record Co. Toronto.',
}

const LABEL_SLUGS = ['jeremie-albino', 'good-kid', 'benjamin-dakota-rogers', 'glitter-party', 'benja']

export default function LabelPage() {
  const filtered = ARTISTS
    .filter(a => LABEL_SLUGS.includes(a.slug))
    .sort((a, b) => a.sortOrder - b.sortOrder)

  return (
    <RosterClient
      artists={filtered}
      pageTitle="THE LABEL"
      kicker="GOOD PEOPLE RECORD CO."
    />
  )
}
