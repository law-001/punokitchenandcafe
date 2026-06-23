// Typographic recreation of the PUNO wordmark so it sits cleanly on any
// background (the raster logo carries its own green block).
export default function Wordmark({ className = '', size = 'md', tone = 'cream' }) {
  const scale = {
    sm: { p: 'text-2xl', s: 'text-[0.55rem]' },
    md: { p: 'text-4xl', s: 'text-[0.7rem]' },
    lg: { p: 'text-6xl', s: 'text-[0.85rem]' },
  }[size]
  const color = tone === 'cream' ? 'text-cream' : 'text-forest'

  return (
    <div className={`flex flex-col items-center leading-none ${color} ${className}`}>
      <span
        className={`font-display font-light tracking-[0.18em] ${scale.p}`}
        style={{ paddingLeft: '0.18em' }}
      >
        PUNO
      </span>
      <span className={`mt-1.5 font-sans font-medium tracking-[0.5em] ${scale.s} opacity-80`}>
        KITCHEN &amp; CAFE
      </span>
    </div>
  )
}
