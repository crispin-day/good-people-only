export type Division = 'Management' | 'Label'

export interface Artist {
  name: string
  slug: string
  shortBio: string
  seoDescription?: string
  genre: string
  division: Division
  featured: boolean
  sortOrder: number
  placeholderColor: string
  imgSrc?: string
  imgPosition?: string
  spotifyUrl?: string
  instagramUrl?: string
  youtubeUrl?: string
  websiteUrl?: string
  tourUrl?: string
}

export const ARTISTS: Artist[] = [
  {
    name: 'Jeremie Albino',
    slug: 'jeremie-albino',
    imgSrc: '/artists/jeremie-albino.jpg',
    shortBio: 'Easy Eye Sound recording artist Jeremie Albino is a folk/soul singer-songwriter from Northern Ontario, hailed for emotionally-nuanced storytelling and electrifying live performances. His debut album Our Time In The Sun (2025), produced by Dan Auerbach of The Black Keys, blends Southern psychedelia and blues-rock to tell tales of love, struggle, and a life defined by work — the culmination of a journey from busking the streets of Toronto to sharing stages with Orville Peck and Sierra Ferrell.',
    genre: 'Folk / Soul',
    division: 'Management',
    featured: true,
    sortOrder: 1,
    placeholderColor: '#1e1a0e',
    spotifyUrl: 'https://open.spotify.com/artist/69fOAbSc6FEOFmvvMzlNgY',
    instagramUrl: 'https://instagram.com/jeremiealbino',
    websiteUrl: 'https://jeremiealbino.com',
    tourUrl: 'https://jeremiealbino.com/tour',
    seoDescription: 'Jeremie Albino is a folk and soul singer-songwriter from Northern Ontario, Canada. His debut album Our Time In The Sun (2025), produced by Dan Auerbach of The Black Keys for Easy Eye Sound, blends Southern psychedelia and blues-rock storytelling. Represented by Good People Only Management.',
  },
  {
    name: 'Good Kid',
    slug: 'good-kid',
    seoDescription: 'Good Kid is a Toronto indie pop band known for their cinematic sound and sharp songwriting. Represented by Good People Only Management.',
    imgSrc: '/artists/good-kid.jpg',
    imgPosition: '50% 35%',
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
    seoDescription: 'Benjamin Dakota Rogers is a Canadian country and Americana singer-songwriter with a powerful voice rooted in folk tradition. Represented by Good People Only Management.',
    imgSrc: '/artists/benjamin-dakota-rogers.jpg',
    imgPosition: '50% 0%',
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
    seoDescription: 'Trevor Daniel is a pop and R&B singer-songwriter best known for his viral hit Falling. Represented by Good People Only Management.',
    imgSrc: '/artists/trevor-daniel.jpg',
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
    seoDescription: 'Iluka is an Australian-born indie pop and soul singer-songwriter known for her soulful, cinematic sound. Represented by Good People Only Management.',
    imgSrc: '/artists/iluka.jpg',
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
    seoDescription: 'Glitter Party is a bedroom pop artist signed to Good People Only Label, known for energetic, hook-driven pop songs.',
    imgSrc: '/artists/glitter-party.jpg',
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
    seoDescription: 'Starbomb is a comedy and nerdcore music supergroup signed to Good People Only Label, known for video game parody songs.',
    imgSrc: '/artists/starbomb.jpg',
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
    seoDescription: 'Ninja Sex Party is a comedy rock duo signed to Good People Only Label, known for humorous and irreverent songs.',
    imgSrc: '/artists/ninja-sex-party.jpg',
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
    seoDescription: 'Sister Ray is an indie rock band signed to Good People Only Label, built for live performance with a raw and powerful sound.',
    imgSrc: '/artists/sister-ray.jpg',
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
    seoDescription: 'Benja is an indie rock artist signed to Good People Only Label.',
    imgSrc: '/artists/benja.jpg',
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
