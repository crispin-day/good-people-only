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
  longBio?: string
  keywords?: string[]
}

export const ARTISTS: Artist[] = [
  {
    name: 'Jeremie Albino',
    slug: 'jeremie-albino',
    imgSrc: '/artists/jeremie-albino.jpg',
    shortBio: 'Easy Eye Sound recording artist Jeremie Albino is a folk/soul singer-songwriter from Northern Ontario, hailed for emotionally-nuanced storytelling and electrifying live performances. His debut album Our Time In The Sun (2025), produced by Dan Auerbach of The Black Keys, blends Southern psychedelia and blues-rock — the culmination of a journey from busking the streets of Toronto to sharing stages with Orville Peck and Sierra Ferrell.',
    longBio: `Easy Eye Sound has just announced the label debut of Jeremie Albino, a singular voice hailed for emotionally-nuanced storytelling and electrifying, livewire and passionate performances. The culmination of a remarkable journey - from busking on the streets of Toronto, to sharing stages with artists like Orville Peck and Sierra Ferrell - Albino embarks on his next chapter with Our Time In The Sun, released in November 2025. The twelve song collection finds him joining forces with Dan Auerbach - lead singer of The Black Keys, founder of Easy Eye Sound, and GRAMMY®-winning producer - after a chance encounter with Albino's music that left Auerbach mesmerized. "The first time I saw Jeremie it was just him and his acoustic. His voice was amazing. I instantly loved his style and charisma — I didn't know it could just be so real," he remembers of first hearing Albino. "When we brought him in the studio, it was a dream session. He's so talented, comfortable with who he is — he's able to put everyone in the room at ease and bring people together with his music."

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
    longBio: `Blending the punchy riffs of J-rock, the immediacy of indie rock, and the raw edge of pop-punk, Good Kid have spent the last few years quietly building something larger than a typical band trajectory. Entirely independent, they've amassed hundreds of millions of streams across their catalogue, a fiercely participatory fan community, and a reputation as one of the most creator-friendly projects in modern guitar music. They've made their entire discography Content ID-free and DMCA-free, empowering creators across Twitch, YouTube, and more to use their songs without fear of takedowns. Their songs now soundtrack everything from community-made animations to major gaming broadcasts, becoming part of the internet's shared vocabulary.

Recorded in Los Angeles with Grammy-winning producer John Congleton (St. Vincent, Wallows, Lana Del Rey), the band's debut album Can We Hang Out Sometime? delivers the high-energy hooks and inventive riffs that have become a hallmark of their sound, while boldly pushing into new territory. Longtime fans will find the signature Good Kid bangers they've come to love, but also hear the band exploring fresh textures, rhythms, and sonic twists, in their grittiest offering yet.`,
    genre: 'Indie Pop',
    division: 'Management',
    featured: true,
    sortOrder: 2,
    placeholderColor: '#1a1a2e',
    spotifyUrl: 'https://open.spotify.com/artist/38SKxCyfrmNWqWunb9wGHP',
    instagramUrl: 'https://instagram.com/goodkidband',
    websiteUrl: 'https://goodkidofficial.com/',
    tourUrl: 'https://goodkidofficial.com/tour',
    keywords: ['Good Kid', 'Good Kid band', 'Toronto indie pop', 'cinematic pop', 'Canadian indie band', 'Good People Only'],
  },
  {
    name: 'Benjamin Dakota Rogers',
    slug: 'benjamin-dakota-rogers',
    imgSrc: '/artists/benjamin-dakota-rogers.jpg',
    imgPosition: '50% 0%',
    shortBio: 'Country-rooted songwriter with a voice that fills rooms and sticks in your chest.',
    longBio: `Benjamin Dakota Rogers returns with This Ol' Way, his third full-length album; a raw, soul-twisting dive into the grit and grace of Americana-bluegrass. Rooted in folk tradition and evocative storytelling, these songs explore love, longing, and the bittersweet lessons found in every choice we make. Written and self-produced entirely by Rogers, the album blends fresh cuts penned over the last year with long-held tracks finally brought to life. Mixing by Mike Darolfi and mastering by Kristian Montano give the album its refined edge, enhancing its raw energy without sacrificing its adventurous spirit. A must-spin for fans of Tyler Childers, Colter Wall, and the outlaw spirit of country past. Gritty, haunting, and undeniably authentic, this album is Benjamin Dakota Rogers at his finest.`,
    genre: 'Country / Americana',
    division: 'Management',
    featured: true,
    sortOrder: 3,
    placeholderColor: '#1a120e',
    spotifyUrl: 'https://open.spotify.com/artist/255w1O3tp19jnUZPI6cMVL',
    instagramUrl: 'https://instagram.com/benjamindakotarogers',
    websiteUrl: 'https://www.benjamindakotarogers.com/',
    tourUrl: 'https://www.benjamindakotarogers.com/tour',
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
    longBio: `ILUKA is an Australian-born, now American-based singer/songwriter who is known for her soulful vocals and her Dolly meets Stevie visual style. As fans have noted, there's the pop sensibility of Adele; the growl of Joplin; the lyrical alchemy of Stevie Nicks. It's impossible not to be drawn in.

Having grown up with a Dad who was a songwriter and guitar-maker, ILUKA was taught the basics of songwriting from her earliest years, spending hours on the balcony of her Blue Mountains home honing the craft. At 7 years old, she began recording her songs on a 12-track recording desk with her Dad and by 15 she had albums worth of recorded material. This early education, the passing-down of emotion and storytelling from one generation to another, gave ILUKA's music its spark, the seed that's still growing to this day. Having left Australia, she's now armed with her White Falcon Gretsch guitar and readier than ever to embark on her most authentic and exciting musical chapter.`,
    genre: 'Indie Pop / Soul',
    division: 'Management',
    featured: false,
    sortOrder: 5,
    placeholderColor: '#180e20',
    spotifyUrl: 'https://open.spotify.com/artist/1QiAR2OBtc5ZsYQ5bPnpdO',
    instagramUrl: 'https://instagram.com/ilukamusic',
    websiteUrl: 'https://ilukamusic.com',
    tourUrl: 'https://www.ilukamusic.com/tour',
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
    longBio: `Starbomb is a space-based (yes, really) synthpop/hip-hop supergroup consisting of Arin "Egoraptor" Hanson of Game Grumps, and Dan "Danny Sexbang" Avidan and Brian "Ninja Brian" Wecht of Ninja Sex Party. Starbomb's focus is to write humorous raps about pop culture, mostly video games. Also their focus is to make good music. Mostly the second one. But the first one's important too. So maybe both equally.`,
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
    longBio: `From humble beginnings in New York's improv circuit, to their current regimen of rocking international stages, Ninja Sex Party (NSP) has become a force to be reckoned with in the comedy music landscape. Founded in 2009 by Dan Avidan (Danny Sexbang) and theoretical physicist-turned-musician Brian Wecht (Ninja Brian), the duo seamlessly blends humor with rock and synth pop, delivering side-splitting tales of romance, mythical quests, and of course, the occasional (very, very, very tasteful) joke of an intimate nature.

What sets NSP apart? Perhaps it's Danny's hypersexual yet hopelessly romantic persona as he tries to serenade women, or maybe it's Ninja Brian's silent, lethal demeanor coupled with an unexpected tenderness. Their journey, which began with small gigs and blossomed into worldwide tours, has seen them release nine studio albums, collaborate with a universe of talented artists, and accumulate a YouTube following exceeding 1.3 million subscribers.

2018's Cool Patrol, the band's fourth original album, was a shining example of NSP's growth, where epic rock anthems like "Danny Don't You Know" not only sat alongside their extensive catalog of both covers and originals, but also outshone them, paving the way for a new batch of classic comedy songs. In 2024, NSP released These Nuts, their first original album since 2020, with a fresh batch of their signature comedic anthems. Whether they're pondering existential questions like "Who invented space?" (answer: Albert Einstein), courting oblivious mermaids, or navigating heretofore unexplored innuendos, NSP ensures their fans are both laughing and rocking out.

NSP's diverse skill set has seen them build monumental success throughout their over 15 year career, collaborating with YouTube personalities, actors, legendary 80's bands, and even a few spots on Conan O'Brien. Over the course of their history, NSP has defied the odds - breaking into the billboard Top 10 multiple times as an independent artist, and topping the Comedy album charts time and time again. When most bands would hang up the cape and mask, NSP has kept their spandex on, soaring higher with every new release. The band has played sold out shows all over North America, Europe, Australia, and New Zealand. They were Billboard's #1 selling comedy act in 2018, and have amassed over 400 million views on Youtube.

Beyond the stage and studio, NSP is also two thirds of Starbomb, a comedy hip-hop group that merges video game culture with a signature comedic flair. But at the core of all their endeavors - Starbomb, NSP, and beyond - is a genuine love for music, humor, and their ever-supportive fan base.

Today, Ninja Sex Party stands as a celebration of comedy, rock, and the belief that a Jewish superhero and his ninja sidekick can take over the world, one hilarious song at a time.`,
    genre: 'Comedy Rock',
    division: 'Label',
    featured: false,
    sortOrder: 8,
    placeholderColor: '#0e0e1a',
    spotifyUrl: 'https://open.spotify.com/artist/3jsyANBBy6gOZUSQhiGclx',
    youtubeUrl: 'https://youtube.com/ninjasexparty',
    websiteUrl: 'https://www.ninjasexparty.com/',
    tourUrl: 'https://www.ninjasexparty.com/tour',
    keywords: ['Ninja Sex Party', 'NSP', 'comedy rock', 'YouTube music', 'Good People Only'],
  },
  {
    name: 'Sister Ray',
    slug: 'sister-ray',
    imgSrc: '/artists/sister-ray.jpg',
    shortBio: 'Indie rock with teeth. Built for stages, not playlists.',
    longBio: `At some point you confront the fact that you've evolved into the person you'll be forever. On Believer, the sophomore effort by Sister Ray, the expansive folk project led by Toronto-based singer-songwriter Ella Coyes, they evaluate what it means to hold your center while continually reappraising how to make sense of the world. Conjuring the barbed alternative folk and sweeping Americana of Tom Waits, Smog, and Lucinda Williams, the album unfurls and claws towards a greater emotional precision. Patient, heaving guitar lines defer generous space to shimmering keys and steady percussion, all held together by Coyes' unmistakable voice.

Recorded in Brooklyn, New York, Coyes worked with frequent collaborator and producer Jon Nellen (Big Thief, Nick Hakim), as well as Marc Ribot (Tom Waits), Paul Spring (Holy Hive, Fleet Foxes, El Michaels Affair), and Isaiah Barr (Dev Hynes, David Byrne) to experiment with a new process: pushing themselves to cut a song a day with minimal revisions to let the seams show. What emerged was a collection of tracks, both luminous and lived-in — imbued with a stirring confidence designed to stare down a private form of truth. "Magic" is a resolute and joyous Valentine to the self, adorned with victorious horns; "Believer" cranks the tension on a golden-toned yearning for salvation in the face of skepticism; "Wings" captures the playful contradiction of longing to fly and also remain tethered. From learning how to extend grace to family and map the terrains of relational unravelings, to reshaping the body into a refuge, Believer is a striking testament to the countless ways we can redefine how to stick the landing.

Born and raised in the Alberta prairies of Sturgeon County, and now based in Toronto, the 25-year-old artist earned widespread attention with their acclaimed debut effort, Communion and follow up EP, Teeth. Backed by ginla's Joe Manzoli and Jon Nellen, both of whom previously played with Adrianne Lenker and Lorely Rodriguez (Empress Of), the record was an unvarnished portrait of heartbreak, and the mundane realizations of how the experiences that comprise your past instruct how you move through the world. The album was longlisted for the 2022 Polaris Prize, and across both releases they have been featured in Pitchfork, Audiotree, Paste, NPR, The Guardian, Line of Best Fit and more, along with tours supporting Hurray For The Riff Raff, and appearances at Pitchfork Festival in Paris and London, Primavera Weekender. If the tracks on Communion were fueled with an intentional sense of urgency, for their songwriting to serve as a vehicle for excavating revelations in motion, Believer yearns in a different direction. It rings with the certainty that self-assurance is cultivated through the cracks of discomfort.`,
    genre: 'Indie Rock',
    division: 'Label',
    featured: false,
    sortOrder: 9,
    placeholderColor: '#1a0e0e',
    spotifyUrl: 'https://open.spotify.com/artist/40rYcgQG8MPbjZDOfDMzyC',
    instagramUrl: 'https://www.instagram.com/sisterray780/',
    websiteUrl: 'https://www.sisterraymusic.com/',
    tourUrl: 'https://www.sisterraymusic.com/home/#tour',
    keywords: ['Sister Ray', 'Ella Coyes', 'folk', 'Americana', 'indie rock', 'Canadian indie', 'Good People Only'],
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
