import { familySet } from '../data/menu.js'

export default function FamilySet() {
  return (
    <section className="relative overflow-hidden bg-forest-900 px-6 py-32 md:py-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(70% 60% at 85% 0%, rgba(200,73,43,0.12) 0%, rgba(8,26,21,0) 60%)',
        }}
      />
      <div className="relative mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <span className="mb-6 inline-block font-sans text-[0.7rem] font-medium uppercase tracking-[0.4em] text-clay">
            Bring everyone
          </span>
          <h2 className="font-display text-balance font-light text-cream"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: 1.0 }}>
            One table, <span className="italic">four ways</span>
          </h2>
          <p className="mt-6 max-w-md text-pretty font-sans leading-relaxed text-bone/75">
            {familySet.note} Each set lays the whole table — rice, salad,
            nachos, a main or two, and pasta.
          </p>
          <div className="mt-8 flex items-center gap-5">
            <span className="font-display text-5xl text-cream">PHP {familySet.price.toLocaleString('en-PH')}</span>
            <a
              href="#visit"
              className="rounded-full border border-cream/30 px-6 py-3 font-sans text-xs font-bold uppercase tracking-[0.16em] text-cream transition-colors duration-300 hover:bg-cream hover:text-forest"
            >
              Reserve a table
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl">
            <img
              src="/img/food/spread-green.jpg"
              alt="A full Filipino spread of sisig, Caesar salad, nachos, kare-kare and pasta"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {familySet.sets.map((s) => (
              <div
                key={s.name}
                className="rounded-xl border border-cream/12 bg-forest-950/40 p-5"
              >
                <p className="mb-3 font-display text-xl text-cream">{s.name}</p>
                <ul className="space-y-1.5">
                  {s.items.map((i) => (
                    <li key={i} className="font-sans text-xs leading-relaxed text-bone/70">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
