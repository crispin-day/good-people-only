'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import styles from './artist.module.css'

interface ArtistNavProps {
  prevSlug: string | null
  prevName: string | null
  nextSlug: string | null
  nextName: string | null
}

export default function ArtistNav({ prevSlug, prevName, nextSlug, nextName }: ArtistNavProps) {
  const router = useRouter()
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current === null) return
      const dx = e.changedTouches[0].clientX - touchStartX.current
      if (Math.abs(dx) < 60) return // min swipe distance
      if (dx < 0 && nextSlug) router.push(`/roster/${nextSlug}`)
      if (dx > 0 && prevSlug) router.push(`/roster/${prevSlug}`)
      touchStartX.current = null
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && prevSlug) router.push(`/roster/${prevSlug}`)
      if (e.key === 'ArrowRight' && nextSlug) router.push(`/roster/${nextSlug}`)
    }

    document.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('touchend', handleTouchEnd, { passive: true })
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchend', handleTouchEnd)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [prevSlug, nextSlug, router])

  return (
    <div className={styles.artistNav}>
      {prevSlug ? (
        <Link href={`/roster/${prevSlug}`} className={styles.artistNavBtn} aria-label={`Previous: ${prevName}`}>
          ← <span className={styles.artistNavName}>{prevName}</span>
        </Link>
      ) : (
        <span className={styles.artistNavBtnDisabled} />
      )}
      {nextSlug ? (
        <Link href={`/roster/${nextSlug}`} className={styles.artistNavBtn} aria-label={`Next: ${nextName}`}>
          <span className={styles.artistNavName}>{nextName}</span> →
        </Link>
      ) : (
        <span className={styles.artistNavBtnDisabled} />
      )}
    </div>
  )
}
