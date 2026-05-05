import { getArtistsByDivision } from '../../lib/artists'
import RosterClient from '../roster/RosterClient'

export const metadata = {
  title: 'Management | Good People Only',
  description: 'Good People Only Management — boutique artist management based in Toronto.',
  alternates: { canonical: 'https://goodpeopleonly.com/management' },
}

export default function ManagementPage() {
  const artists = getArtistsByDivision('Management')

  return (
    <RosterClient
      artists={artists}
      pageTitle="MANAGEMENT"
      kicker="GOOD PEOPLE ARTIST MANAGEMENT"
      slugBase="/management"
    />
  )
}
