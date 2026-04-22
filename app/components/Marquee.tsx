import Link from 'next/link'
import styles from './Marquee.module.css'

const ITEMS = [
  { name: 'JEREMIE ALBINO', spotify: 'https://open.spotify.com/artist/69fOAbSc6FEOFmvvMzlNgY' },
  { name: 'GOOD KID', spotify: 'https://open.spotify.com/artist/38SKxCyfrmNWqWunb9wGHP' },
  { name: 'BENJAMIN DAKOTA ROGERS', spotify: 'https://open.spotify.com/artist/255w1O3tp19jnUZPI6cMVL' },
  { name: 'TREVOR DANIEL', spotify: 'https://open.spotify.com/artist/7uaIm6Pw7xplS8Dy06V6pT' },
  { name: 'ILUKA', spotify: 'https://open.spotify.com/artist/1QiAR2OBtc5ZsYQ5bPnpdO' },
  { name: 'GLITTER PARTY', spotify: 'https://open.spotify.com/artist/0aap0g0NB08EJrS6FMDrdB' },
  { name: 'STARBOMB', spotify: 'https://open.spotify.com/artist/1DLBs2535MM32RYqirYYY4' },
  { name: 'NINJA SEX PARTY', spotify: 'https://open.spotify.com/artist/3jsyANBBy6gOZUSQhiGclx' },
  { name: 'SISTER RAY', spotify: 'https://open.spotify.com/artist/40rYcgQG8MPbjZDOfDMzyC' },
  { name: 'BENJA', spotify: 'https://open.spotify.com/artist/36Bs5vvvt4AfdIvApt1Rid' },
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className={styles.marquee} aria-hidden="true" role="presentation">
      <div className={styles.track} role="presentation">
        {doubled.map((item, i) => (
          <a
            key={i}
            href={item.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.item}
            aria-hidden="true"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            {item.name}
            <span className={styles.dot} />
          </a>
        ))}
      </div>
    </div>
  )
}
