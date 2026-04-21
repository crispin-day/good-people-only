import { getArtistsByDivision } from '../../lib/artists'
import RosterClient from '../roster/RosterClient'

export const metadata = {
  title: 'Label | Good People Only',
  description: 'Good People Record Co. Toronto.',
}

export default function LabelPage() {
  const artists = getArtistsByDivision('Label')
  return (
    <RosterClient
      artists={artists}
      pageTitle="THE LABEL"
      kicker="— GOOD PEOPLE RECORD CO."
    />
  )
}
