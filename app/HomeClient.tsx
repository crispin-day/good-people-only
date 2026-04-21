'use client'

import { useEffect, useRef, useState } from 'react'

const ARTISTS = [
  { name: 'Good Kid', genre: 'Indie Pop', division: 'Management' },
  { name: 'Jeremie Albino', genre: 'Folk / Soul', division: 'Management' },
  { name: 'Rare Americans', genre: 'Alternative', division: 'Management' },
  { name: 'Glitter Party', genre: 'Pop', division: 'Label' },
  { name: 'BDR', genre: 'Hip-Hop', division: 'Label' },
  { name: 'NSP', genre: 'Comedy Rock', division: 'Label' },
  { name: 'Starbomb', genre: 'Comedy', division: 'Label' },
]

const SERVICES = [
  {
    title: 'Management',
    description: 'Artist-first management for the long game. We build careers, not just release cycles.',
  },
  {
    title: 'Record Label',
    description: 'Good People Record Co. Independent. Intentional. Music that means something.',
  },
  {
    title: 'Label Services',
    description: 'Strategic support for independent artists who want to stay independent.',
  },
]

export default function HomeClient() {
  const navRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="bg-[#0A0A0A] min-h-screen">

      {/* NAV */}
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <span className="text-[#E8E4DF] text-[13px] font-semibold tracking-[0.28em] uppercase">
            Good People Only
          </span>
          <div className="hidden md:flex items-center gap-10">
            {['Roster', 'About', 'Services', 'Contact'].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-[#9A9A9A] hover:text-[#E8E4DF] text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1
            className="font-display italic font-light text-[#E8E4DF] leading-[0.92] mb-8"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)', textWrap: 'balance' }}
          >
            Good People Only
          </h1>
          <p className="text-[#E8E4DF] text-lg md:text-xl font-light tracking-[0.04em] mb-12 max-w-md mx-auto opacity-80">
            We don&apos;t chase trends. We build artists.
          </p>
          <a
            href="/roster"
            className="inline-block border border-[#E8E4DF]/40 text-[#E8E4DF]/80 hover:text-[#E8E4DF] hover:border-[#E8E4DF]/70 text-[11px] font-medium tracking-[0.2em] uppercase px-8 py-3 transition-all duration-300"
          >
            View Roster
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[#9A9A9A] text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#9A9A9A] to-transparent" />
        </div>
      </section>

      {/* ARTISTS */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="text-[#D4603A] text-[11px] font-medium tracking-[0.25em] uppercase mb-4">Artists</p>
            <h2 className="text-[#E8E4DF] font-bold uppercase tracking-[-0.02em]" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', textWrap: 'balance' }}>
              Our Roster
            </h2>
          </div>
          <a href="/roster" className="text-[#9A9A9A] hover:text-[#E8E4DF] text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-200 hidden md:block">
            View All →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {ARTISTS.map((artist) => (
            <div
              key={artist.name}
              className="group bg-[#0A0A0A] p-8 cursor-pointer transition-all duration-300 hover:bg-[#141414]"
            >
              {/* Placeholder image area */}
              <div className="w-full aspect-[3/4] bg-zinc-800 mb-6 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900 group-hover:scale-[1.02] transition-transform duration-500" />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-[#E8E4DF] font-semibold text-lg tracking-[-0.01em]">
                    {artist.name}
                  </h3>
                  <p className="text-[#9A9A9A] text-sm mt-1">{artist.genre}</p>
                </div>
                <span className="text-[#D4603A] text-[10px] font-medium tracking-[0.15em] uppercase border border-[#D4603A]/30 px-2 py-1">
                  {artist.division}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 px-6 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#D4603A] text-[11px] font-medium tracking-[0.25em] uppercase mb-16">What We Do</p>

          <div className="divide-y divide-white/[0.06]">
            {SERVICES.map((service, i) => (
              <div key={service.title} className="flex flex-col md:flex-row gap-4 md:gap-0 py-12 md:py-14 group">
                <span className="text-[#D4603A] text-[11px] font-medium tracking-[0.15em] md:w-24 shrink-0 mt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-[#E8E4DF] text-sm font-semibold uppercase tracking-[0.14em] md:w-64 shrink-0 mt-1">
                  {service.title}
                </h3>
                <p className="text-[#9A9A9A] text-base leading-relaxed max-w-lg">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-36 px-6 text-center border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#D4603A] text-[11px] font-medium tracking-[0.25em] uppercase mb-8">Toronto, Canada</p>
          <h2
            className="font-display italic font-light text-[#E8E4DF] leading-[0.95] mb-8"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', textWrap: 'balance' }}
          >
            Work With Us
          </h2>
          <p className="text-[#9A9A9A] mb-12 leading-relaxed text-base max-w-sm mx-auto">
            Working with artists who are in it for the long game.
          </p>
          <a
            href="/contact"
            className="inline-block border border-[#D4603A] text-[#D4603A] hover:bg-[#D4603A] hover:text-[#0A0A0A] text-[11px] font-semibold tracking-[0.2em] uppercase px-12 py-4 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-[#E8E4DF] text-[12px] font-semibold tracking-[0.28em] uppercase">
            Good People Only
          </span>
          <nav className="flex items-center gap-8">
            {['Roster', 'About', 'Services', 'Contact'].map((item) => (
              <a key={item} href={`/${item.toLowerCase()}`} className="text-[#9A9A9A] hover:text-[#E8E4DF] text-[11px] font-medium tracking-[0.15em] uppercase transition-colors duration-200">
                {item}
              </a>
            ))}
          </nav>
          <span className="text-[#9A9A9A] text-[11px] tracking-[0.05em]">
            © 2026 Good People Only
          </span>
        </div>
      </footer>
    </main>
  )
}
