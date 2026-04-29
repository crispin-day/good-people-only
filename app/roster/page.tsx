import RosterClient from './RosterClient'
import { ARTISTS } from '../../lib/artists'

export const metadata = {
  title: 'Roster',
  description: 'Artists managed and represented by Good People Only, a boutique artist management and record label company based in Toronto, Canada.',
  alternates: { canonical: 'https://goodpeopleonly.com/roster' },
  openGraph: {
    title: 'Roster | Good People Only',
    description: 'Artists managed and represented by Good People Only.',
    url: 'https://goodpeopleonly.com/roster',
  },
}

export default function RosterPage() {
  return <RosterClient artists={ARTISTS} />
}
