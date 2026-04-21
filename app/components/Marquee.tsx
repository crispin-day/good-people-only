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
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.dot} style={{ display: 'inline-block', margin: '0 0 1px 24px', verticalAlign: 'middle' }} />
          </span>
        ))}
      </div>
    </div>
  )
}
