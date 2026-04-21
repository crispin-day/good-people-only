export default function SideLabel({ text }: { text: string }) {
  return (
    <div
      className="hidden md:flex fixed z-10 pointer-events-none select-none"
      style={{ top: 0, bottom: 0, left: '20px', alignItems: 'center' }}
    >
      <span
        className="text-[11px] font-normal uppercase whitespace-nowrap"
        style={{
          color: 'var(--color-smoke)',
          fontFamily: 'var(--font-heading)',
          letterSpacing: '0.1em',
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
        }}
      >
        {text}
      </span>
    </div>
  )
}
