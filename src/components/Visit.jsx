// NOTE: Address, hours, and contact details below are placeholders.
// Replace the values in `info` with PUNO's real details before going live.
const info = {
  address: ['PUNO Kitchen & Cafe', '123 Garden Road, Your City, Province'],
  hours: [
    { d: 'Monday – Thursday', h: '11:00 AM – 10:00 PM' },
    { d: 'Friday – Sunday', h: '10:00 AM – 11:00 PM' },
  ],
  phone: '+63 900 000 0000',
  phoneHref: 'tel:+639000000000',
  messenger: 'm.me/puno.kitchencafe',
  messengerHref: 'https://m.me/puno.kitchencafe',
  instagram: '@puno.kitchencafe',
  instagramHref: 'https://instagram.com/puno.kitchencafe',
  email: 'hello@punokitchen.cafe',
  mapsQuery: 'Puno Kitchen and Cafe',
}

export default function Visit() {
  return (
    <section id="visit" className="relative bg-forest-950 px-6 py-32 md:py-48">
      <div className="mx-auto w-full max-w-6xl">
        {/* Action: big high-contrast CTA */}
        <div className="mb-16 text-center">
          <h2 className="font-display text-balance font-light text-cream"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', lineHeight: 0.98 }}>
            Come sit at our table
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-pretty font-sans leading-relaxed text-bone/75">
            We keep reservations simple — message or call us and we will hold
            your table or plan your event.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={info.messengerHref}
              className="rounded-full bg-cream px-8 py-4 font-sans text-sm font-bold uppercase tracking-[0.16em] text-forest transition-transform duration-300 hover:scale-[1.03]"
            >
              Message us to reserve
            </a>
            <a
              href={info.phoneHref}
              className="rounded-full border border-cream/30 px-8 py-4 font-sans text-sm font-bold uppercase tracking-[0.16em] text-cream transition-colors duration-300 hover:bg-cream/10"
            >
              {info.phone}
            </a>
          </div>
        </div>

        <div className="grid gap-3 lg:grid-cols-[1fr_1fr]">
          {/* Details */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-cream/10 bg-forest-900 p-7">
              <h3 className="mb-4 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-clay">
                Find us
              </h3>
              {info.address.map((l, i) => (
                <p
                  key={i}
                  className={i === 0 ? 'font-display text-xl text-cream' : 'font-sans text-sm text-bone/75'}
                >
                  {l}
                </p>
              ))}
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(info.mapsQuery)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block font-sans text-sm font-semibold text-ember underline-offset-4 hover:underline"
              >
                Get directions &rarr;
              </a>
            </div>

            <div className="rounded-2xl border border-cream/10 bg-forest-900 p-7">
              <h3 className="mb-4 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-clay">
                Hours
              </h3>
              <ul className="space-y-3">
                {info.hours.map((row) => (
                  <li key={row.d}>
                    <p className="font-sans text-sm font-semibold text-cream">{row.d}</p>
                    <p className="font-sans text-sm text-bone/70">{row.h}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-cream/10 bg-forest-900 p-7 sm:col-span-2">
              <h3 className="mb-4 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-clay">
                Reach us
              </h3>
              <div className="flex flex-wrap gap-x-10 gap-y-3">
                <a href={info.messengerHref} className="font-sans text-sm text-cream hover:text-ember">
                  Messenger — {info.messenger}
                </a>
                <a href={info.instagramHref} className="font-sans text-sm text-cream hover:text-ember">
                  Instagram — {info.instagram}
                </a>
                <a href={`mailto:${info.email}`} className="font-sans text-sm text-cream hover:text-ember">
                  {info.email}
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="min-h-[320px] overflow-hidden rounded-2xl border border-cream/10">
            <iframe
              title="Map to PUNO Kitchen & Cafe"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(info.mapsQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              className="h-full min-h-[320px] w-full grayscale-[0.3]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
