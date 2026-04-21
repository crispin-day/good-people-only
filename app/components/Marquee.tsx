import styles from './Marquee.module.css'

const ITEMS = [
  'JEREMIE ALBINO',
  'GOOD KID',
  'BENJAMIN DAKOTA ROGERS',
  'TREVOR DANIEL',
  'ILUKA',
  'GLITTER PARTY',
  'STARBOMB',
  'NINJA SEX PARTY',
  'SISTER RAY',
  'BENJA',
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className={styles.marquee} aria-hidden="true" role="presentation">
      <div className={styles.track} role="presentation">
        {doubled.map((item, i) => (
          <span key={i} className={styles.item} aria-hidden="true">
            {item}
            <span className={styles.dot} />
          </span>
        ))}
      </div>
    </div>
  )
}
