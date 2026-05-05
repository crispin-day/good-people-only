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
  context?: string
}

const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline points="13,4 7,10 13,16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline points="7,4 13,10 7,16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function ArtistNav({ prevSlug, nextSlug, context }: ArtistNavProps) {
  const router = useRouter()
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const x = e.touches[0].clientX
      // Ignore edge swipes (iOS back/forward gesture zone)
      if (x < 30 || x > window.innerWidth - 30) {
        touchStartX.current = null
        return
      }
      touchStartX.current = x
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current === null) return
      const dx = e.changedTouches[0].clientX - touchStartX.current
      if (Math.abs(dx) < 60) { touchStartX.current = null; return }
      if (dx < 0 && nextSlug) router.push(context ? `/roster/${nextSlug}?from=${context}` : `/roster/${nextSlug}`)
      if (dx > 0 && prevSlug) router.push(context ? `/roster/${prevSlug}?from=${context}` : `/roster/${prevSlug}`)
      touchStartX.current = null
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && prevSlug) router.push(context ? `/roster/${prevSlug}?from=${context}` : `/roster/${prevSlug}`)
      if (e.key === 'ArrowRight' && nextSlug) router.push(context ? `/roster/${nextSlug}?from=${context}` : `/roster/${nextSlug}`)
    }

    document.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('touchend', handleTouchEnd, { passive: true })
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchend', handleTouchEnd)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [prevSlug, nextSlug, router, context])

  return (
    <>
      {prevSlug && (
        <Link href={context ? `/roster/${prevSlug}?from=${context}` : `/roster/${prevSlug}`} className={`${styles.navArrow} ${styles.navArrowLeft}`} aria-label="Previous artist">
          <ChevronLeft />
        </Link>
      )}
      {nextSlug && (
        <Link href={context ? `/roster/${nextSlug}?from=${context}` : `/roster/${nextSlug}`} className={`${styles.navArrow} ${styles.navArrowRight}`} aria-label="Next artist">
          <ChevronRight />
        </Link>
      )}
    </>
  )
}
