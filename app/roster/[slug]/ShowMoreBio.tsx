'use client'
import { useState } from 'react'
import styles from './artist.module.css'

interface ShowMoreBioProps {
  bio: string
}

export default function ShowMoreBio({ bio }: ShowMoreBioProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={styles.bioWrap}>
      {/* All text always in DOM — search engines index everything. */}
      <div className={expanded ? styles.bioFull : styles.bioClamped}>
        {bio.split('\n\n').filter(Boolean).map((para, i) => (
          <p key={i} className={styles.bio}>{para}</p>
        ))}
      </div>
      <button
        className={styles.showMoreBtn}
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        {expanded ? 'Show less ↑' : 'Show more ↓'}
      </button>
    </div>
  )
}
