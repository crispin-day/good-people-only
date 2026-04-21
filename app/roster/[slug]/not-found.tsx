import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      className="bg-[#000000] min-h-screen flex items-center justify-center"
      style={{ animation: 'fadein 3s' }}
    >
      <div className="text-center px-5">
        <h1 className="text-[#D8D8D8] text-[35px] font-normal mb-[43px]">
          ARTIST NOT FOUND
        </h1>
        <Link
          href="/roster"
          className="text-[#D8D8D8] text-[13px] font-normal uppercase tracking-[0.15em] hover:opacity-70 transition-opacity duration-300"
        >
          ← Back to Roster
        </Link>
      </div>
    </div>
  )
}
