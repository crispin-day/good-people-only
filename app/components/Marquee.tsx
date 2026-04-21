import styles from './Marquee.module.css'

const ITEMS = [
  'GOOD KID',
  'JEREMIE ALBINO',
  'BENJAMIN DAKOTA ROGERS',
  'TORONTO',
  'EST. 2016',
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
