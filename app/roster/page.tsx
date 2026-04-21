import RosterClient from './RosterClient'
import { ARTISTS } from '../../lib/artists'

export const metadata = {
  title: 'Roster | Good People Only',
  description: 'Artists managed and represented by Good People Only. Based in Toronto.',
}

export default function RosterPage() {
  return <RosterClient artists={ARTISTS} />
}
