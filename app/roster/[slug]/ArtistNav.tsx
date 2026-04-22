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
  position: 'left' | 'right'
}

export default function ArtistNav({ prevSlug, nextSlug, position }: ArtistNavProps) {
  const router = useRouter()
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    if (position !== 'left') return // register listeners once

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current === null) return
      const dx = e.changedTouches[0].clientX - touchStartX.current
      if (Math.abs(dx) < 60) return
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
  }, [prevSlug, nextSlug, router, position])

  const slug = position === 'left' ? prevSlug : nextSlug
  const arrow = position === 'left' ? '←' : '→'

  if (!slug) {
    return <span className={styles.navArrowGhost} aria-hidden="true" />
  }

  return (
    <Link
      href={`/roster/${slug}`}
      className={styles.navArrow}
      aria-label={position === 'left' ? 'Previous artist' : 'Next artist'}
    >
      {arrow}
    </Link>
  )
}
