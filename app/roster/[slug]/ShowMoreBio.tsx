'use client'
import { useState } from 'react'
import styles from './artist.module.css'

interface ShowMoreBioProps {
  shortBio: string
  longBio: string
}

export default function ShowMoreBio({ shortBio, longBio }: ShowMoreBioProps) {
  const [expanded, setExpanded] = useState(false)

  const paragraphs = longBio.split('\n\n').filter(Boolean)

  return (
    <div>
      {/* Short bio always visible */}
      <p className={styles.bio}>{shortBio}</p>

      {/* Long bio: always in DOM for SEO, visually hidden until expanded */}
      <div className={expanded ? styles.longBioExpanded : styles.longBioCollapsed} aria-hidden={!expanded}>
        {paragraphs.map((para, i) => (
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
