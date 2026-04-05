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
          <span className="text-[#E8E4DF] text-sm font-semibold tracking-[0.2em] uppercase">
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
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1
            className="text-[#E8E4DF] font-bold uppercase tracking-[-0.03em] leading-none mb-6"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)' }}
          >
            Good People Only
          </h1>
          <p className="text-[#E8E4DF]/70 text-lg md:text-xl font-light tracking-wide mb-10 max-w-xl mx-auto">
            We don&apos;t chase trends. We build artists.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {['Management', 'Record Label', 'Label Services'].map((pill) => (
              <span
                key={pill}
                className="border border-[#E8E4DF]/30 text-[#E8E4DF]/80 text-xs font-medium tracking-[0.15em] uppercase px-5 py-2"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[#9A9A9A] text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#9A9A9A] to-transparent" />
        </div>
      </section>

      {/* ARTISTS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-14">
          <h2 className="text-[#E8E4DF] text-3xl md:text-4xl font-bold uppercase tracking-[-0.02em] inline-block">
            Our Artists
            <div className="h-0.5 w-12 bg-[#D4603A] mt-3" />
          </h2>
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
      <section className="py-24 px-6 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <h2 className="text-[#E8E4DF] text-3xl md:text-4xl font-bold uppercase tracking-[-0.02em] inline-block">
              What We Do
              <div className="h-0.5 w-12 bg-[#D4603A] mt-3" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {SERVICES.map((service) => (
              <div key={service.title} className="bg-[#141414] p-10">
                <div className="h-0.5 w-8 bg-[#D4603A] mb-8" />
                <h3 className="text-[#E8E4DF] text-xl font-bold uppercase tracking-[0.05em] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#9A9A9A] text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-[#E8E4DF] font-bold uppercase tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Work With Us
          </h2>
          <p className="text-[#9A9A9A] mb-10 leading-relaxed">
            Based in Toronto. Working with artists who are in it for the long game.
          </p>
          <a
            href="/contact"
            className="inline-block border border-[#D4603A] text-[#D4603A] hover:bg-[#D4603A] hover:text-[#0A0A0A] text-sm font-medium tracking-[0.15em] uppercase px-10 py-4 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[#E8E4DF] text-sm font-semibold tracking-[0.2em] uppercase">
            Good People Only
          </span>
          <span className="text-[#9A9A9A] text-xs">
            Toronto · goodpeopleonly.com
          </span>
          <span className="text-[#9A9A9A] text-xs">
            © 2026 Good People Only
          </span>
        </div>
      </footer>
    </main>
  )
}
