'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '../components/Nav'
import Marquee from '../components/Marquee'
import Footer from '../components/Footer'
import { Artist } from '../../lib/artists'
import styles from './Roster.module.css'

type View = 'list' | 'tiles'

interface RosterClientProps {
  artists: Artist[]
  pageTitle?: string
  kicker?: string
}

export default function RosterClient({ artists, pageTitle = 'THE ROSTER', kicker = '— GOOD PEOPLE ARTIST MANAGEMENT' }: RosterClientProps) {
  const [view, setView] = useState<View>('list')

  const sorted = [...artists].sort((a, b) => a.sortOrder - b.sortOrder)

  return (
    <div className="gpo-page-layout">
      <Nav />
      <Marquee />
      <main>
        <div className={styles.pageHeader}>
          <p className={styles.kicker}>{kicker}</p>
          <h1 className={styles.title}>{pageTitle}</h1>
          <p className={styles.subtitle}>
            A deliberately small group of artists. Genre-agnostic, Toronto-rooted, built for the long game.
          </p>
          <div className={styles.viewToggle}>
            <button
              className={`${styles.toggleBtn} ${view === 'list' ? styles.active : ''}`}
              onClick={() => setView('list')}
            >
              LIST
            </button>
            <button
              className={`${styles.toggleBtn} ${view === 'tiles' ? styles.active : ''}`}
              onClick={() => setView('tiles')}
            >
              TILES
            </button>
          </div>
        </div>

        <div className={styles.rosterContent}>
          {view === 'list' ? (
            <div className={styles.rosterList}>
              {sorted.map((artist, i) => (
                <Link
                  key={artist.slug}
                  href={`/roster/${artist.slug}`}
                  className={styles.rosterRow}
                >
                  <span className={styles.rowIndex}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.rowName}>{artist.name}</span>
                  <span className={styles.rowMeta}>{artist.genre}</span>
                  <span className={styles.rowArrow}>→</span>
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.tilesGrid}>
              {sorted.map((artist) => (
                <Link
                  key={artist.slug}
                  href={`/roster/${artist.slug}`}
                  className={styles.tile}
                >
                  {artist.imgSrc ? (
                    <Image
                      src={artist.imgSrc}
                      alt={artist.name}
                      fill
                      className={styles.tileImg}
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                      style={artist.imgPosition ? { objectPosition: artist.imgPosition } : undefined}
                    />
                  ) : (
                    <div
                      className={styles.tilePlaceholder}
                      style={{ backgroundColor: artist.placeholderColor }}
                    />
                  )}
                  <div className={styles.tileLabel}>
                    <span className={styles.tileName}>{artist.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
