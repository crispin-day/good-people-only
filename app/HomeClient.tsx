'use client'

import Nav from './components/Nav'

export default function HomeClient() {
  return (
    <main
      className="bg-[#000000] min-h-screen flex items-center justify-center"
      style={{ animation: 'fadein 0.4s ease-in forwards' }}
    >
      <Nav />
      <div className="text-center px-5">
        <h1
          className="text-[#D8D8D8] font-normal uppercase"
          style={{ fontSize: '5rem', letterSpacing: '0.4em' }}
        >
          GOOD PEOPLE ONLY
        </h1>
        <p
          className="text-[#D8D8D8] font-normal uppercase mt-4"
          style={{ fontSize: '1rem', letterSpacing: '0.3em' }}
        >
          TORONTO
        </p>
      </div>
    </main>
  )
}
