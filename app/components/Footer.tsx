export default function Footer() {
  return (
    <footer
      className="py-10 px-[120px] max-md:px-5 max-md:py-5"
      style={{
        backgroundColor: 'var(--color-void)',
        borderTop: '1px solid #1A1A1A',
      }}
    >
      <div className="flex items-center justify-between max-md:flex-col max-md:gap-4">
        <span
          className="text-[11px] font-normal uppercase"
          style={{ color: 'var(--color-bone)', fontFamily: 'var(--font-heading)', letterSpacing: '0.25em' }}
        >
          GOOD PEOPLE ONLY
        </span>

        <a
          href="https://www.instagram.com/goodpeopleonly"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-normal uppercase transition-opacity duration-150 hover:opacity-70"
          style={{ color: 'var(--color-bone)', fontFamily: 'var(--font-heading)', letterSpacing: '0.15em' }}
        >
          Instagram
        </a>

        <span
          className="text-[11px] font-normal"
          style={{ color: 'var(--color-bone)', fontFamily: 'var(--font-heading)' }}
        >
          © 2026
        </span>
      </div>
    </footer>
  )
}
