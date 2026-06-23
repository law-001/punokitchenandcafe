import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const STORY =
  'Puno means tree. We planted ours beside a fire tree that blooms red over the garden, and built a kitchen in its shade. Everything here grows from that: Filipino food made with care, cooked slow, and set down to be shared under something living.'

export default function Story() {
  const root = useRef(null)
  const words = STORY.split(' ')

  useGSAP(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const targets = gsap.utils.toArray('.story-word')
      if (reduce) {
        gsap.set(targets, { opacity: 1 })
        return
      }
      gsap.set(targets, { opacity: 0.14 })
      gsap.to(targets, {
        opacity: 1,
        ease: 'none',
        stagger: 0.5,
        scrollTrigger: {
          trigger: '.story-copy',
          start: 'top 75%',
          end: 'bottom 55%',
          scrub: true,
        },
      })
    },
    { scope: root },
  )

  return (
    <section ref={root} className="relative bg-forest-950 px-6 py-32 md:py-48">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-[1fr_0.85fr]">
        <div>
          <span className="mb-8 inline-block font-sans text-[0.7rem] font-medium uppercase tracking-[0.4em] text-clay">
            Rooted in the Filipino table
          </span>
          <p className="story-copy font-display text-pretty font-light text-cream"
             style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', lineHeight: 1.32 }}>
            {words.map((w, i) => (
              <span key={i} className="story-word">
                {w}{' '}
              </span>
            ))}
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <img
              src="/img/ambience/firetree.jpg"
              alt="The fire tree, a delonix regia in red bloom over the garden"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 font-display text-lg italic text-cream/90">
              The fire tree
              <span className="ml-2 font-sans text-xs not-italic tracking-wide text-bone/70">
                delonix regia
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
