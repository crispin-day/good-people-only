import { getArtistsByDivision } from '../../lib/artists'
import RosterClient from '../roster/RosterClient'

export const metadata = {
  title: 'Label | Good People Only',
  description: 'Good People Record Co. — artists signed to the Good People Only label.',
  alternates: { canonical: 'https://goodpeopleonly.com/label' },
}

export default function LabelPage() {
  const artists = getArtistsByDivision('Label')

  return (
    <RosterClient
      artists={artists}
      pageTitle="THE LABEL"
      kicker="GOOD PEOPLE RECORD CO."
      slugBase="/label"
    />
  )
}
