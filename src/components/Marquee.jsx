// Infinite typographic marquee. Pure CSS transform loop, duplicated track.
const DEFAULT = [
  'Crispy Sisig',
  'Pork Belly Kare-Kare',
  'Sinigang',
  'Dinakdakan',
  'Salted Egg Wings',
  'Pasta Negra',
  'Grilled Liempo',
  'Bagnet',
  'Leche Flan',
]

export default function Marquee({ items = DEFAULT, tone = 'forest' }) {
  const track = [...items, ...items]
  const isDark = tone === 'forest'

  return (
    <div
      className={`relative flex overflow-hidden border-y py-6 ${
        isDark ? 'border-cream/10 bg-forest-950' : 'border-forest/10 bg-cream'
      }`}
    >
      <div className="flex shrink-0 animate-[marquee_38s_linear_infinite] items-center gap-10 pr-10 will-change-transform">
        {track.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span
              className={`font-display text-3xl font-light italic md:text-5xl ${
                isDark ? 'text-cream' : 'text-forest'
              }`}
            >
              {t}
            </span>
            <span
              className={`text-2xl ${isDark ? 'text-ember' : 'text-clay'}`}
              aria-hidden
            >
              &#9670;
            </span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[marquee_38s_linear_infinite\\] { animation: none; }
        }
      `}</style>
    </div>
  )
}
