'use client'

import { useState } from 'react'
import styles from './artist.module.css'

interface BioExpanderProps {
  shortBio: string
  longBio: string
}

export default function BioExpander({ shortBio, longBio }: BioExpanderProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={styles.bioWrap}>
      <p className={styles.bio}>{shortBio}</p>
      {/*
        Long bio is always in the DOM so search engines index the full text.
        It is visually hidden via overflow/max-height until the user expands.
      */}
      <p className={`${styles.bio} ${expanded ? styles.bioExpanded : styles.bioHidden}`}>
        {longBio}
      </p>
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
