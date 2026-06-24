const STORY =
  'Puno means tree. We planted ours beside a fire tree that blooms red over the garden, and built a kitchen in its shade. Everything here grows from that: Filipino food made with care, cooked slow, and set down to be shared under something living.'

export default function Story() {
  return (
    <section className="relative bg-forest-950 px-6 py-32 md:py-48">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-[1fr_0.85fr]">
        <div>
          <span className="mb-8 inline-block font-sans text-[0.7rem] font-medium uppercase tracking-[0.4em] text-clay">
            Rooted in the Filipino table
          </span>
          <p className="font-display text-pretty font-light text-cream"
             style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', lineHeight: 1.32 }}>
            {STORY}
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <img
              src="/img/ambience/cheers.jpg"
              alt="Cold cups raised beneath the trees out in the green"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 font-display text-lg italic text-cream/90">
              Out in the green
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
