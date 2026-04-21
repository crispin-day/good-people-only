'use client'

import { useState } from 'react'
import Link from 'next/link'

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

const NAV_LINKS = ['Management', 'Label', 'About', 'Contact']

export default function HomeClient() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* HAMBURGER BUTTON */}
      <button
        onClick={() => setMenuOpen(true)}
        className="fixed z-50 flex flex-col gap-[6px]"
        style={{ top: '36px', left: '32px' }}
        aria-label="Open menu"
      >
        <span className="block w-6 h-px bg-[#D8D8D8]" />
        <span className="block w-6 h-px bg-[#D8D8D8]" />
        <span className="block w-6 h-px bg-[#D8D8D8]" />
      </button>

      {/* GPO WORDMARK */}
      <Link
        href="/"
        className="fixed z-50 text-[#D8D8D8] text-[13px] font-normal uppercase tracking-[0.25em] hover:opacity-70 transition-opacity duration-300"
        style={{ top: '43px', right: '80px' }}
      >
        GPO
      </Link>

      {/* NAV OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#000000]">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute text-[#D8D8D8] text-2xl hover:opacity-70 transition-opacity duration-300"
            style={{ top: '36px', left: '32px' }}
            aria-label="Close menu"
          >
            ✕
          </button>
          <nav className="flex flex-col justify-center h-full pl-20">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`/${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-[#D8D8D8] text-[clamp(2rem,8vw,75px)] font-normal uppercase tracking-[8px] leading-tight hover:opacity-70 transition-opacity duration-300 ease-in-out"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* MAIN */}
      <main
        className="bg-[#000000] min-h-screen"
        style={{ animation: 'fadein 3s' }}
      >
        {/* HERO */}
        <section className="relative h-screen w-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex items-center justify-center h-full text-center px-5">
            <div>
              <h1 className="text-[#D8D8D8] text-[clamp(2rem,8vw,5rem)] font-normal leading-none mb-10">
                GOOD PEOPLE ONLY
              </h1>
              <a
                href="/roster"
                className="inline-block border border-[#D8D8D8] text-[#D8D8D8] text-[11px] font-normal uppercase tracking-[0.2em] px-8 py-3 hover:opacity-70 transition-opacity duration-300 ease-in-out"
              >
                VIEW ROSTER
              </a>
            </div>
          </div>
        </section>

        {/* ARTISTS */}
        <section className="py-[120px]">
          <div className="max-w-[1024px] mx-auto px-[120px] max-md:px-5">
            <h2 className="text-[#D8D8D8] text-[35px] font-normal mb-[43px]">
              OUR ROSTER
            </h2>
            <div className="flex flex-wrap gap-[10px] justify-center xl:justify-start">
              {ARTISTS.map((artist) => (
                <a
                  key={artist.name}
                  href="/roster"
                  className="w-full xl:w-[calc(50%_-_5px)] max-w-[450px] p-[20px] hover:opacity-70 transition-opacity duration-300 ease-in-out"
                >
                  <div className="w-full aspect-square bg-[#1a1a1a]" />
                  <p className="text-[#D8D8D8] text-[28px] font-normal text-center mt-4">
                    {artist.name}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-[120px]">
          <div className="max-w-[1024px] mx-auto px-[120px] max-md:px-5">
            <h2 className="text-[#D8D8D8] text-[35px] font-normal mb-[43px]">
              WHAT WE DO
            </h2>
            <div>
              {SERVICES.map((service) => (
                <div
                  key={service.title}
                  className="border-t border-[#D8D8D8] py-10 last:border-b last:border-[#D8D8D8]"
                >
                  <h3 className="text-[#D8D8D8] text-lg font-medium uppercase mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[#D8D8D8] text-lg font-medium leading-[1.6]">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-[120px] text-center">
          <div className="max-w-[1024px] mx-auto px-[120px] max-md:px-5">
            <h2 className="text-[#D8D8D8] text-[35px] font-normal mb-[43px]">
              WORK WITH US
            </h2>
            <p className="text-[#D8D8D8] text-lg font-medium leading-[1.6] mb-10 mx-auto max-w-md">
              Working with artists who are in it for the long game.
            </p>
            <a
              href="/contact"
              className="inline-block border border-[#D8D8D8] text-[#D8D8D8] text-[13px] font-normal uppercase tracking-[0.2em] px-10 py-4 hover:opacity-70 transition-opacity duration-300 ease-in-out"
            >
              GET IN TOUCH
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-[#D8D8D8] py-10">
          <div className="max-w-[1024px] mx-auto px-[120px] max-md:px-5 flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-[#D8D8D8] text-[13px] font-normal uppercase tracking-[0.25em]">
              Good People Only
            </span>
            <nav className="flex items-center gap-8">
              {['Roster', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-[#D8D8D8] text-[11px] font-normal uppercase tracking-[0.15em] hover:opacity-70 transition-opacity duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>
            <span className="text-[#D8D8D8] text-[11px] font-normal">
              © 2026 Good People Only
            </span>
          </div>
        </footer>
      </main>
    </>
  )
}
