import { venue } from '../data/menu.js'

// Horizontal accordion: vertical slices that expand on hover (desktop),
// stacked cards on mobile.
const slices = [
  {
    img: '/img/ambience/pavilion.jpg',
    title: 'The garden pavilion',
    text: 'Open-air dining under timber and hanging green, lit warm at dusk.',
  },
  {
    img: '/img/ambience/hall-neon.jpg',
    title: 'The neon hall',
    text: 'Long tables beneath the glowing PUNO sign — made for a crowd.',
  },
  {
    img: '/img/ambience/tablesetting.jpg',
    title: 'Green glass & rattan',
    text: 'Leaf-pressed goblets, woven chairs, eucalyptus down the runner.',
  },
  {
    img: '/img/ambience/placemat.jpg',
    title: 'Golden hour',
    text: 'Late light across the table setting and a quiet cup of coffee.',
  },
  {
    img: '/img/ambience/cheers.jpg',
    title: 'Out in the green',
    text: 'Cold cups raised beneath the trees, the easy part of the day.',
  },
]

export default function Ambience() {
  return (
    <section id="ambience" className="relative bg-cream px-6 py-32 text-ink md:py-48">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <span className="mb-6 inline-block font-sans text-[0.7rem] font-medium uppercase tracking-[0.4em] text-clay">
            The setting
          </span>
          <h2 className="font-display text-balance font-light text-forest"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: 1.0 }}>
            A garden you can sit inside
          </h2>
        </div>

        {/* Desktop: horizontal accordion */}
        <div className="hidden h-[460px] gap-2 md:flex">
          {slices.map((s, i) => (
            <div
              key={i}
              className="group relative h-full flex-[1] cursor-pointer overflow-hidden rounded-2xl transition-[flex-grow] duration-700 ease-out hover:flex-[4]"
            >
              <img
                src={s.img}
                alt={s.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-xl text-cream md:text-2xl">{s.title}</h3>
                <p className="mt-2 max-w-xs text-pretty font-sans text-sm leading-relaxed text-bone/80 opacity-0 transition-opacity delay-100 duration-500 group-hover:opacity-100">
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: stacked cards */}
        <div className="grid gap-3 md:hidden">
          {slices.map((s, i) => (
            <div key={i} className="relative h-56 overflow-hidden rounded-2xl">
              <img src={s.img} alt={s.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-xl text-cream">{s.title}</h3>
                <p className="mt-1 font-sans text-xs text-bone/80">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Events: the Glass Hall */}
        <div className="mt-16 grid gap-8 overflow-hidden rounded-2xl bg-forest text-cream md:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col justify-center p-9 md:p-12">
            <span className="mb-5 inline-block font-sans text-[0.7rem] font-medium uppercase tracking-[0.4em] text-clay">
              Private events
            </span>
            <h3 className="font-display text-3xl font-light md:text-4xl">{venue.name}</h3>
            <p className="mt-4 max-w-md text-pretty font-sans leading-relaxed text-bone/80">
              Book the garden hall for birthdays, debuts, and gatherings — an
              exclusive room with a buffet laid the way you like it.
            </p>
            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              {venue.specs.map((s) => (
                <div key={s.k}>
                  <dt className="font-sans text-[0.65rem] uppercase tracking-[0.25em] text-bone/55">
                    {s.k}
                  </dt>
                  <dd className="mt-1 font-display text-lg text-cream">{s.v}</dd>
                </div>
              ))}
            </dl>
            <a
              href="#visit"
              className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-cream px-7 py-3 font-sans text-xs font-bold uppercase tracking-[0.16em] text-forest transition-transform duration-300 hover:scale-[1.03]"
            >
              Enquire about events
            </a>
          </div>
          <div className="relative min-h-[280px]">
            <img
              src="/img/ambience/glasshall.jpg"
              alt="The Glass Hall set for a private event with long tables"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
