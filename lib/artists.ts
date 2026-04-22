export type Division = 'Management' | 'Label'

export interface Artist {
  name: string
  slug: string
  shortBio: string
  genre: string
  division: Division
  featured: boolean
  sortOrder: number
  placeholderColor: string
  imgSrc?: string
  spotifyUrl?: string
  instagramUrl?: string
  youtubeUrl?: string
  websiteUrl?: string
}

export const ARTISTS: Artist[] = [
  {
    name: 'Jeremie Albino',
    slug: 'jeremie-albino',
    shortBio: 'Northern Ontario singer-songwriter. Folk, soul, and something harder to name.',
    genre: 'Folk / Soul',
    division: 'Management',
    featured: true,
    sortOrder: 1,
    placeholderColor: '#1e1a0e',

    spotifyUrl: 'https://open.spotify.com/artist/69fOAbSc6FEOFmvvMzlNgY',
    instagramUrl: 'https://instagram.com/jeremiealbino',
  },
  {
    name: 'Good Kid',
    slug: 'good-kid',
    shortBio: 'Toronto indie pop band with a cinematic sound and sharp songwriting.',
    genre: 'Indie Pop',
    division: 'Management',
    featured: true,
    sortOrder: 2,
    placeholderColor: '#1a1a2e',

    spotifyUrl: 'https://open.spotify.com/artist/38SKxCyfrmNWqWunb9wGHP',
    instagramUrl: 'https://instagram.com/goodkidband',
  },
  {
    name: 'Benjamin Dakota Rogers',
    slug: 'benjamin-dakota-rogers',
    shortBio: 'Country-rooted songwriter with a voice that fills rooms and sticks in your chest.',
    genre: 'Country / Americana',
    division: 'Management',
    featured: true,
    sortOrder: 3,
    placeholderColor: '#1a120e',

    spotifyUrl: 'https://open.spotify.com/artist/255w1O3tp19jnUZPI6cMVL',
    instagramUrl: 'https://instagram.com/benjamindakotarogers',
  },
  {
    name: 'Trevor Daniel',
    slug: 'trevor-daniel',
    shortBio: 'Pop singer-songwriter known for Falling. Viral, earnest, impossible to skip.',
    genre: 'Pop / R&B',
    division: 'Management',
    featured: false,
    sortOrder: 4,
    placeholderColor: '#1a1520',
    instagramUrl: 'https://instagram.com/iamtrevordaniel',
    spotifyUrl: 'https://open.spotify.com/artist/7uaIm6Pw7xplS8Dy06V6pT',
  },
  {
    name: 'Iluka',
    slug: 'iluka',
    shortBio: 'Australian-born singer-songwriter. Soulful, cinematic, and entirely her own.',
    genre: 'Indie Pop / Soul',
    division: 'Management',
    featured: false,
    sortOrder: 5,
    placeholderColor: '#180e20',
    spotifyUrl: 'https://open.spotify.com/artist/1QiAR2OBtc5ZsYQ5bPnpdO',
    instagramUrl: 'https://instagram.com/ilukamusic',
    websiteUrl: 'https://ilukamusic.com',
  },
  {
    name: 'Glitter Party',
    slug: 'glitter-party',
    shortBio: 'Pure pop energy. The kind of songs you play loud and sing louder.',
    genre: 'Bedroom Pop',
    division: 'Label',
    featured: false,
    sortOrder: 6,
    placeholderColor: '#1a0e1a',
    spotifyUrl: 'https://open.spotify.com/artist/0aap0g0NB08EJrS6FMDrdB',
    instagramUrl: 'https://instagram.com/glitterparty',
  },
  {
    name: 'Starbomb',
    slug: 'starbomb',
    shortBio: 'Video game parody supergroup. Yes, it is exactly as good as it sounds.',
    genre: 'Comedy / Nerdcore',
    division: 'Label',
    featured: false,
    sortOrder: 7,
    placeholderColor: '#0a1a0a',
    spotifyUrl: 'https://open.spotify.com/artist/1DLBs2535MM32RYqirYYY4',
    youtubeUrl: 'https://youtube.com/starbomb',
  },
  {
    name: 'Ninja Sex Party',
    slug: 'ninja-sex-party',
    shortBio: 'Comedy rock that somehow absolutely slaps.',
    genre: 'Comedy Rock',
    division: 'Label',
    featured: false,
    sortOrder: 8,
    placeholderColor: '#0e0e1a',
    spotifyUrl: 'https://open.spotify.com/artist/3jsyANBBy6gOZUSQhiGclx',
    youtubeUrl: 'https://youtube.com/ninjasexparty',
  },
  {
    name: 'Sister Ray',
    slug: 'sister-ray',
    shortBio: 'Indie rock with teeth. Built for stages, not playlists.',
    genre: 'Indie Rock',
    division: 'Label',
    featured: false,
    sortOrder: 9,
    placeholderColor: '#1a0e0e',
    spotifyUrl: 'https://open.spotify.com/artist/40rYcgQG8MPbjZDOfDMzyC',
    instagramUrl: 'https://instagram.com/sisterray',
  },
  {
    name: 'Benja',
    slug: 'benja',
    shortBio: 'Artist. Details incoming.',
    genre: 'Indie Rock',
    division: 'Label',
    featured: false,
    sortOrder: 10,
    placeholderColor: '#141414',
    spotifyUrl: 'https://open.spotify.com/artist/36Bs5vvvt4AfdIvApt1Rid',
  },
]

export function getArtistBySlug(slug: string): Artist | undefined {
  return ARTISTS.find((a) => a.slug === slug)
}

export function getArtistsByDivision(division: Division): Artist[] {
  return ARTISTS.filter((a) => a.division === division).sort((a, b) => a.sortOrder - b.sortOrder)
}

export function getFeaturedArtists(): Artist[] {
  return ARTISTS.filter((a) => a.featured).sort((a, b) => a.sortOrder - b.sortOrder)
}
