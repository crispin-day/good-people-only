export default function SideLabel({ text }: { text: string }) {
  return (
    <div
      className="hidden md:flex fixed z-10 pointer-events-none select-none"
      style={{ top: 0, bottom: 0, left: '20px', alignItems: 'center' }}
    >
      <span
        className="text-[#D8D8D8] text-[16px] font-normal uppercase tracking-[0.1em] whitespace-nowrap"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        {text}
      </span>
    </div>
  )
}
