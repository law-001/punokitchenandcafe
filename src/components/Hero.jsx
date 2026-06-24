import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useReducedMotion,
  animate,
} from 'framer-motion'
import Wordmark from './Wordmark.jsx'

// Small rotated-square diamond used as a gold accent (no emojis/icons).
function Diamond({ className = '' }) {
  return (
    <span
      aria-hidden
      className={`inline-block size-1.5 rotate-45 bg-gold ${className}`}
    />
  )
}

const ease = [0.16, 1, 0.3, 1]

// The arch geometry, shared by the clip-path reveal and the gold outline so
// they trace the exact same dome: rounded top, square bottom corners. The
// horizontal radius / vertical radius are split so the peak height can be
// tuned per breakpoint. On tall, narrow phones a full 46% vertical radius
// makes the dome tower up awkwardly, so the small-screen arch is kept shallow.
const ARCH_ROUND_LG = '46% 46% 0 0 / 46% 46% 0 0'
const ARCH_ROUND_SM = '50% 50% 0 0 / 15% 15% 0 0'

// Resolve the active arch radius from the viewport width and keep it in sync
// on resize / orientation change.
function useArchRound() {
  const [round, setRound] = useState(ARCH_ROUND_LG)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)')
    const update = () => setRound(mq.matches ? ARCH_ROUND_SM : ARCH_ROUND_LG)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return round
}

const container = {
  hidden: {},
  show: { transition: { delayChildren: 0.55, staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
}

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const round = useArchRound()
  const sectionRef = useRef(null)

  // Scroll progress across the hero: 0 at rest, 1 once it has fully scrolled
  // up past the top of the viewport (i.e. as the next section arrives).
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Smooth every scroll-driven value through a spring so motion glides instead
  // of tracking the raw (steppy) scroll position frame-for-frame.
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.35,
    restDelta: 0.0005,
  })

  // (2) The arched portal opens once on load, then closes again — like curtains
  // drawing shut — as the hero is scrolled away toward the next section. The
  // close starts early so it reads as a deliberate transition, not a snap.
  const reveal = useMotionValue(reduceMotion ? 1 : 0)
  useEffect(() => {
    if (reduceMotion) return
    const controls = animate(reveal, 1, { duration: 1.5, ease })
    return () => controls.stop()
  }, [reduceMotion, reveal])

  const closeProgress = useTransform(
    progress,
    [0.15, 0.72],
    reduceMotion ? [0, 0] : [0, 1],
  )

  const clipPath = useTransform([reveal, closeProgress], ([open, close]) => {
    const inset = (1 - open) * 50 + close * 50
    return `inset(0% ${inset}% 0% ${inset}% round ${round})`
  })

  // The gold line-work contracts in step with the arch, sharing the same
  // closing inset so the frame draws shut together with the portal.
  const chromeClip = useTransform(
    closeProgress,
    (close) => `inset(0% ${close * 50}% 0% ${close * 50}% round ${round})`,
  )

  // (3) The picture settles from a slight overscale on load, then zooms in as
  // the hero scrolls down for a cinematic parallax push.
  const imgReveal = useMotionValue(reduceMotion ? 1 : 0)
  useEffect(() => {
    if (reduceMotion) return
    const controls = animate(imgReveal, 1, { duration: 1.9, ease })
    return () => controls.stop()
  }, [reduceMotion, imgReveal])

  const scrollZoom = useTransform(
    progress,
    [0, 1],
    [0, reduceMotion ? 0 : 0.28],
  )
  const imgScale = useTransform(
    [imgReveal, scrollZoom],
    ([open, zoom]) => 1.18 - open * 0.18 + zoom,
  )

  // The gold line-work and centered copy fade out as the arch closes so they
  // don't hang over the narrowing portal.
  const chromeOpacity = useTransform(
    closeProgress,
    [0, 0.85],
    reduceMotion ? [1, 1] : [1, 0],
  )
  const chromeY = useTransform(
    closeProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, -40],
  )

  return (
    <section
      ref={sectionRef}
      className="relative grain min-h-[100dvh] w-full overflow-hidden bg-forest-950"
    >
      {/* Full-screen arched portal: opens on load, closes on scroll-away */}
      <motion.div style={{ clipPath }} className="absolute inset-0 z-0">
        <motion.img
          src="/img/ambience/pavilion.jpg"
          alt="The PUNO garden pavilion set for dinner at dusk"
          style={{ scale: imgScale }}
          className="h-full w-full object-cover"
        />
        {/* Legibility scrim, darkest at top and bottom */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(70% 55% at 50% 50%, rgba(8,26,21,0.62) 0%, rgba(8,26,21,0) 70%), linear-gradient(to bottom, rgba(8,26,21,0.72) 0%, rgba(8,26,21,0.20) 34%, rgba(8,26,21,0.30) 64%, rgba(8,26,21,0.88) 100%)',
          }}
        />
      </motion.div>

      {/* Gold line-work: double arch outline that contracts with the portal */}
      <motion.div
        style={{ opacity: chromeOpacity, clipPath: chromeClip }}
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.9, ease }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-4 border border-gold/45 sm:inset-7"
            style={{ borderRadius: round }}
          />
          <div
            className="absolute inset-7 border border-gold/20 sm:inset-11"
            style={{ borderRadius: round }}
          />
          {/* Bottom-corner brackets, echoing the two square corners */}
          <span className="absolute bottom-4 left-4 h-12 w-12 border-b border-l border-gold/60 sm:bottom-7 sm:left-7" />
          <span className="absolute bottom-4 right-4 h-12 w-12 border-b border-r border-gold/60 sm:bottom-7 sm:right-7" />
          {/* Slim vertical flourishes on wide screens */}
          <div className="absolute left-12 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
            <Diamond />
            <span className="h-24 w-px bg-gradient-to-b from-gold/0 via-gold/45 to-gold/0" />
            <Diamond />
          </div>
          <div className="absolute right-12 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
            <Diamond />
            <span className="h-24 w-px bg-gradient-to-b from-gold/0 via-gold/45 to-gold/0" />
            <Diamond />
          </div>
        </motion.div>
      </motion.div>

      {/* Wordmark */}
      <motion.div style={{ opacity: chromeOpacity }} className="relative z-20">
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease }}
          className="flex justify-center pt-10"
        >
          <Wordmark size="sm" />
        </motion.header>
      </motion.div>

      {/* Centered hero content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ opacity: chromeOpacity, y: chromeY }}
        className="relative z-20 mx-auto flex min-h-[calc(100dvh-7rem)] w-full max-w-4xl flex-col items-center justify-center px-6 text-center"
      >
        <motion.div variants={item} className="mb-8 flex items-center gap-4 text-gold">
          <span className="h-px w-10 bg-gradient-to-r from-gold/0 to-gold/70" />
          <Diamond />
          <span className="font-sans text-[0.7rem] font-medium uppercase tracking-[0.42em] text-bone/85">
            A garden kitchen &amp; cafe
          </span>
          <Diamond />
          <span className="h-px w-10 bg-gradient-to-l from-gold/0 to-gold/70" />
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display font-light text-cream [line-height:0.95]"
          style={{ fontSize: 'clamp(3.25rem, 10vw, 8rem)' }}
        >
          Filipino <span className="italic font-normal text-bone">Comfort</span>
        </motion.h1>

        {/* Gold rule with center diamond */}
        <motion.div variants={item} className="mt-8 flex items-center gap-3">
          <span className="h-px w-16 bg-gradient-to-r from-gold/0 to-gold/60 sm:w-24" />
          <Diamond />
          <span className="h-px w-16 bg-gradient-to-l from-gold/0 to-gold/60 sm:w-24" />
        </motion.div>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-pretty font-sans text-base leading-relaxed text-bone/85 sm:text-lg"
        >
          Sizzling sisig, slow-cooked kare-kare, and the warmth of the Filipino
          table — plated with intent and meant for the middle of the table.
        </motion.p>

        <motion.div variants={item} className="mt-11">
          <a
            href="#menu"
            className="group relative inline-flex items-center gap-3 rounded-full bg-cream px-9 py-4 font-sans text-sm font-bold uppercase tracking-[0.16em] text-forest transition-transform duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]"
          >
            View the Menu
            <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
