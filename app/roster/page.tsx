import RosterClient from './RosterClient'
import { ARTISTS } from '../../lib/artists'

export const metadata = {
  title: 'Roster',
  description: 'The Good People Only artist roster: Jeremie Albino, Good Kid, Benjamin Dakota Rogers, Trevor Daniel, Iluka, Glitter Party, Starbomb, Ninja Sex Party, Sister Ray, and Benja.',
}

export default function RosterPage() {
  return <RosterClient artists={ARTISTS} />
}
