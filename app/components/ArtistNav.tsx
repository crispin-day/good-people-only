'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'

interface ArtistNavProps {
  prevSlug: string | null
  nextSlug: string | null
  base: string
}

/** Keyboard + swipe navigation only — renders nothing. */
export default function ArtistNav({ prevSlug, nextSlug, base }: ArtistNavProps) {
  const router = useRouter()
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const x = e.touches[0].clientX
      if (x < 30 || x > window.innerWidth - 30) { touchStartX.current = null; return }
      touchStartX.current = x
    }
    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current === null) return
      const dx = e.changedTouches[0].clientX - touchStartX.current
      if (Math.abs(dx) < 60) { touchStartX.current = null; return }
      if (dx < 0 && nextSlug) router.push(`${base}/${nextSlug}`)
      if (dx > 0 && prevSlug) router.push(`${base}/${prevSlug}`)
      touchStartX.current = null
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && prevSlug) router.push(`${base}/${prevSlug}`)
      if (e.key === 'ArrowRight' && nextSlug) router.push(`${base}/${nextSlug}`)
    }
    document.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('touchend', handleTouchEnd, { passive: true })
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchend', handleTouchEnd)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [prevSlug, nextSlug, base, router])

  return null
}
