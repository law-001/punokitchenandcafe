import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { menu, familySet, SERVICE_NOTE } from '../data/menu.js'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const PREVIEW_CATS = 3 // categories shown before expanding
const PREVIEW_ITEMS = 5 // items per category before expanding

function peso(n) {
  return n.toLocaleString('en-PH')
}

export default function Menu() {
  const root = useRef(null)
  const [active, setActive] = useState(menu[0].id)
  const [showAll, setShowAll] = useState(false)

  const visibleCats = showAll ? menu : menu.slice(0, PREVIEW_CATS)
  const hiddenCount = menu.length - PREVIEW_CATS

  useGSAP(
    () => {
      // Re-runs when showAll flips, so triggers cover whatever is mounted.
      const triggers = visibleCats.map((cat) =>
        ScrollTrigger.create({
          trigger: `#cat-${cat.id}`,
          start: 'top 45%',
          end: 'bottom 45%',
          onToggle: (self) => self.isActive && setActive(cat.id),
        }),
      )
      ScrollTrigger.refresh()
      return () => triggers.forEach((t) => t.kill())
    },
    { scope: root, dependencies: [showAll] },
  )

  const scrollToCat = (id) => {
    const el = document.getElementById(`cat-${id}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const go = (id) => {
    const isVisible = visibleCats.some((c) => c.id === id)
    if (!isVisible) {
      setShowAll(true)
      // Let the section mount before scrolling to it.
      requestAnimationFrame(() => setTimeout(() => scrollToCat(id), 80))
    } else {
      scrollToCat(id)
    }
  }

  const collapse = () => {
    setShowAll(false)
    scrollToCat(menu[0].id)
  }

  return (
    <section id="menu" ref={root} className="relative bg-cream text-ink">
      <div className="mx-auto w-full max-w-6xl px-6 pt-28 md:pt-40">
        <div className="flex flex-col gap-6 border-b border-forest/15 pb-12 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-balance font-light text-forest"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 0.98 }}>
            The Menu
          </h2>
          <p className="max-w-sm text-pretty font-sans text-sm leading-relaxed text-ink/65">
            Filipino plates to share, mains for one, pasta, sweets and a cafe.
            {' '}
            {SERVICE_NOTE}
          </p>
        </div>
      </div>

      {/* Mobile category chips (sticky) */}
      <div className="sticky top-0 z-30 -mb-px border-b border-forest/10 bg-cream/95 backdrop-blur md:hidden">
        <div className="no-scrollbar flex gap-2 overflow-x-auto px-6 py-4">
          {menu.map((c) => (
            <button
              key={c.id}
              onClick={() => go(c.id)}
              className={`shrink-0 rounded-full px-4 py-2 font-sans text-xs font-semibold uppercase tracking-wide transition-colors ${
                active === c.id ? 'bg-forest text-cream' : 'bg-forest/8 text-forest'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 pb-28 pt-14 md:grid-cols-[230px_1fr] md:gap-16 md:pb-40">
        {/* Pinned rail (desktop) */}
        <aside className="hidden md:block">
          <nav className="sticky top-28 self-start">
            <p className="mb-6 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-clay">
              Browse
            </p>
            <ul className="space-y-1.5">
              {menu.map((c) => {
                const muted = !showAll && !visibleCats.some((v) => v.id === c.id)
                return (
                  <li key={c.id}>
                    <button
                      onClick={() => go(c.id)}
                      className="group flex w-full items-center gap-3 py-1.5 text-left"
                    >
                      <span
                        className={`h-px transition-all duration-300 ${
                          active === c.id ? 'w-8 bg-ember' : 'w-3 bg-forest/30'
                        }`}
                      />
                      <span
                        className={`font-display text-lg transition-colors duration-300 ${
                          active === c.id
                            ? 'text-forest'
                            : muted
                              ? 'text-ink/30 group-hover:text-ink/60'
                              : 'text-ink/45 group-hover:text-ink/80'
                        }`}
                      >
                        {c.label}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>

            <div className="mt-10 rounded-xl border border-forest/15 p-5">
              <p className="font-display text-base text-forest">{familySet.title}</p>
              <p className="mt-1 font-sans text-2xl font-bold text-forest">
                PHP {peso(familySet.price)}
              </p>
              <p className="mt-2 font-sans text-xs leading-relaxed text-ink/60">
                {familySet.note}
              </p>
            </div>
          </nav>
        </aside>

        {/* Scrolling dishes */}
        <div className="min-w-0">
          {visibleCats.map((cat, idx) => {
            const items = showAll ? cat.items : cat.items.slice(0, PREVIEW_ITEMS)
            const trimmed = !showAll && cat.items.length > PREVIEW_ITEMS
            return (
              <div
                key={cat.id}
                id={`cat-${cat.id}`}
                className={`scroll-mt-24 pb-20 last:pb-0 ${idx >= PREVIEW_CATS ? 'reveal-rise' : ''}`}
              >
                <div className="mb-8 flex items-baseline gap-4">
                  <h3 className="font-display text-3xl font-normal text-forest md:text-4xl">
                    {cat.label}
                  </h3>
                  <span className="h-px flex-1 bg-forest/15" />
                </div>
                <p className="mb-8 font-sans text-sm italic text-ink/55">{cat.kicker}</p>

                <ul className="space-y-7">
                  {items.map((it) => (
                    <li key={it.name} className="group">
                      <div className="flex items-baseline gap-3">
                        <h4 className="font-sans text-base font-semibold text-ink">
                          {it.name}
                        </h4>
                        {it.tag && (
                          <span className="rounded-full bg-ember/12 px-2 py-0.5 font-sans text-[0.6rem] font-bold uppercase tracking-wide text-ember">
                            {it.tag}
                          </span>
                        )}
                        <span className="mx-2 hidden h-px flex-1 translate-y-[-2px] border-b border-dotted border-ink/25 sm:block" />
                        <span className="ml-auto shrink-0 font-sans text-base font-semibold tabular-nums text-forest sm:ml-0">
                          {peso(it.price)}
                        </span>
                      </div>
                      {it.desc && (
                        <p className="mt-1.5 max-w-xl text-pretty font-sans text-sm leading-relaxed text-ink/60">
                          {it.desc}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>

                {trimmed && (
                  <p className="mt-6 font-sans text-xs italic text-ink/40">
                    + {cat.items.length - PREVIEW_ITEMS} more in {cat.label.toLowerCase()}
                  </p>
                )}
              </div>
            )
          })}

          {/* Expand / collapse control */}
          <div className="flex flex-col items-center gap-4 border-t border-forest/15 pt-12">
            {!showAll ? (
              <>
                <p className="font-sans text-sm text-ink/55">
                  Showing a taste — {hiddenCount} more sections on the full menu.
                </p>
                <button
                  onClick={() => setShowAll(true)}
                  className="group inline-flex items-center gap-3 rounded-full bg-forest px-9 py-4 font-sans text-sm font-bold uppercase tracking-[0.16em] text-cream transition-transform duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]"
                >
                  View the full menu
                  <span className="transition-transform duration-300 ease-out group-hover:translate-y-0.5">
                    &darr;
                  </span>
                </button>
              </>
            ) : (
              <button
                onClick={collapse}
                className="inline-flex items-center gap-3 rounded-full border border-forest/30 px-8 py-3.5 font-sans text-sm font-bold uppercase tracking-[0.16em] text-forest transition-colors duration-300 hover:bg-forest/5 active:scale-[0.98]"
              >
                Show less
                <span>&uarr;</span>
              </button>
            )}
          </div>

          {/* Family set callout (mobile) */}
          <div className="mt-10 rounded-2xl bg-forest p-8 text-cream md:hidden">
            <p className="font-display text-2xl">{familySet.title}</p>
            <p className="mt-1 font-sans text-3xl font-bold">PHP {peso(familySet.price)}</p>
            <p className="mt-2 font-sans text-sm text-bone/80">{familySet.note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
