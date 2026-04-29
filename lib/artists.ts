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
  imgPosition?: string
  spotifyUrl?: string
  instagramUrl?: string
  youtubeUrl?: string
  websiteUrl?: string
  tourUrl?: string
  keywords?: string[]
}

export const ARTISTS: Artist[] = [
  {
    name: 'Jeremie Albino',
    slug: 'jeremie-albino',
    imgSrc: '/artists/jeremie-albino.jpg',
    shortBio: `Easy Eye Sound has just announced the label debut of Jeremie Albino, a singular voice hailed for emotionally-nuanced storytelling and electrifying, livewire and passionate performances. The culmination of a remarkable journey - from busking on the streets of Toronto, to sharing stages with artists like Orville Peck and Sierra Ferrell - Albino embarks on his next chapter with Our Time In The Sun, released in November 2025. The twelve song collection finds him joining forces with Dan Auerbach - lead singer of The Black Keys, founder of Easy Eye Sound, and GRAMMY®-winning producer - after a chance encounter with Albino's music that left Auerbach mesmerized. "The first time I saw Jeremie it was just him and his acoustic. His voice was amazing. I instantly loved his style and charisma — I didn't know it could just be so real," he remembers of first hearing Albino. "When we brought him in the studio, it was a dream session. He's so talented, comfortable with who he is — he's able to put everyone in the room at ease and bring people together with his music."

Our Time In the Sun consists of sharp, observant, and deeply-felt originals defined by clever turns of phrase - tapping into Southern psychedelia and the blues-rock of the 60s to tell tales of love gone sour, struggling with the bottle, and a life defined by work.`,
    genre: 'Folk / Soul',
    division: 'Management',
    featured: true,
    sortOrder: 1,
    placeholderColor: '#1e1a0e',
    spotifyUrl: 'https://open.spotify.com/artist/69fOAbSc6FEOFmvvMzlNgY',
    instagramUrl: 'https://instagram.com/jeremiealbino',
    websiteUrl: 'https://jeremiealbino.com/',
    tourUrl: 'https://jeremiealbino.com/tour',
    keywords: ['Jeremie Albino', 'folk soul singer', 'Easy Eye Sound', 'Dan Auerbach', 'Our Time In The Sun', 'Canadian folk artist', 'Northern Ontario musician', 'Good People Only'],
  },
  {
    name: 'Good Kid',
    slug: 'good-kid',
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
    websiteUrl: 'https://goodkidofficial.com/',
    keywords: ['Good Kid', 'Good Kid band', 'Toronto indie pop', 'cinematic pop', 'Canadian indie band', 'Good People Only'],
  },
  {
    name: 'Benjamin Dakota Rogers',
    slug: 'benjamin-dakota-rogers',
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
    websiteUrl: 'https://www.benjamindakotarogers.com/',
    keywords: ['Benjamin Dakota Rogers', 'country singer', 'Americana', 'Canadian country', 'songwriter', 'Good People Only'],
  },
  {
    name: 'Trevor Daniel',
    slug: 'trevor-daniel',
    imgSrc: '/artists/trevor-daniel.jpg',
    shortBio: 'Pop singer-songwriter known for Falling. Viral, earnest, impossible to skip.',
    genre: 'Pop / R&B',
    division: 'Management',
    featured: false,
    sortOrder: 4,
    placeholderColor: '#1a1520',
    instagramUrl: 'https://instagram.com/iamtrevordaniel',
    spotifyUrl: 'https://open.spotify.com/artist/7uaIm6Pw7xplS8Dy06V6pT',
    websiteUrl: 'https://trevordanielofficial.com/',
    keywords: ['Trevor Daniel', 'Falling Trevor Daniel', 'pop R&B singer', 'viral pop', 'Good People Only'],
  },
  {
    name: 'Iluka',
    slug: 'iluka',
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
    keywords: ['Iluka', 'Iluka music', 'indie pop soul', 'Australian singer', 'cinematic pop', 'Good People Only'],
  },
  {
    name: 'Glitter Party',
    slug: 'glitter-party',
    imgSrc: '/artists/glitter-party.jpg',
    shortBio: 'Pure pop energy. The kind of songs you play loud and sing louder.',
    genre: 'Bedroom Pop',
    division: 'Label',
    featured: false,
    sortOrder: 6,
    placeholderColor: '#1a0e1a',
    spotifyUrl: 'https://open.spotify.com/artist/0aap0g0NB08EJrS6FMDrdB',
    instagramUrl: 'https://www.instagram.com/glitterpartyyy/',
    websiteUrl: 'https://www.glitterparty.ca/',
    keywords: ['Glitter Party', 'bedroom pop', 'Canadian pop', 'indie pop', 'Good People Only'],
  },
  {
    name: 'Starbomb',
    slug: 'starbomb',
    imgSrc: '/artists/starbomb.jpg',
    shortBio: 'Video game parody supergroup. Yes, it is exactly as good as it sounds.',
    genre: 'Comedy / Nerdcore',
    division: 'Label',
    featured: false,
    sortOrder: 7,
    placeholderColor: '#0a1a0a',
    spotifyUrl: 'https://open.spotify.com/artist/1DLBs2535MM32RYqirYYY4',
    youtubeUrl: 'https://www.youtube.com/@egoraptor',
    websiteUrl: 'https://www.starbomb.com/',
    keywords: ['Starbomb', 'video game parody music', 'nerdcore', 'Egoraptor', 'comedy rap', 'Good People Only'],
  },
  {
    name: 'Ninja Sex Party',
    slug: 'ninja-sex-party',
    imgSrc: '/artists/ninja-sex-party.jpg',
    shortBio: 'Comedy rock that somehow absolutely slaps.',
    genre: 'Comedy Rock',
    division: 'Label',
    featured: false,
    sortOrder: 8,
    placeholderColor: '#0e0e1a',
    spotifyUrl: 'https://open.spotify.com/artist/3jsyANBBy6gOZUSQhiGclx',
    youtubeUrl: 'https://youtube.com/ninjasexparty',
    websiteUrl: 'https://www.ninjasexparty.com/',
    keywords: ['Ninja Sex Party', 'NSP', 'comedy rock', 'YouTube music', 'Good People Only'],
  },
  {
    name: 'Sister Ray',
    slug: 'sister-ray',
    imgSrc: '/artists/sister-ray.jpg',
    shortBio: 'Indie rock with teeth. Built for stages, not playlists.',
    genre: 'Indie Rock',
    division: 'Label',
    featured: false,
    sortOrder: 9,
    placeholderColor: '#1a0e0e',
    spotifyUrl: 'https://open.spotify.com/artist/40rYcgQG8MPbjZDOfDMzyC',
    instagramUrl: 'https://www.instagram.com/sisterray780/',
    websiteUrl: 'https://www.sisterraymusic.com/',
    keywords: ['Sister Ray', 'indie rock', 'Canadian indie', 'Good People Only'],
  },
  {
    name: 'Benja',
    slug: 'benja',
    imgSrc: '/artists/benja.jpg',
    imgPosition: '50% 35%',
    shortBio: 'A prismatic tour, a lo-fi mist, an open experiment: Benja blends bedroom-infused indiepop with the soulful production of R&B.',
    genre: 'Indie Pop / R&B',
    division: 'Label',
    featured: false,
    sortOrder: 10,
    placeholderColor: '#141414',
    spotifyUrl: 'https://open.spotify.com/artist/36Bs5vvvt4AfdIvApt1Rid',
    instagramUrl: 'https://www.instagram.com/benjabenja___/',
    websiteUrl: 'https://www.benjabenjabenja.com/',
    keywords: ['Benja', 'indie pop', 'R&B', 'bedroom pop', 'lo-fi', 'Good People Only'],
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
