import { motion } from 'framer-motion'
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

// The arch geometry, shared by the clip-path reveal and the gold outline so
// they trace the exact same dome: rounded top, square bottom corners.
const ARCH_ROUND = '46% 46% 0% 0%'
const archClosed = `inset(0% 50% 0% 50% round ${ARCH_ROUND})`
const archOpen = `inset(0% 0% 0% 0% round ${ARCH_ROUND})`
const ease = [0.16, 1, 0.3, 1]

const container = {
  hidden: {},
  show: { transition: { delayChildren: 0.55, staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
}

export default function Hero() {
  return (
    <section className="relative grain min-h-[100dvh] w-full overflow-hidden bg-forest-950">
      {/* Full-screen arched portal that opens on load */}
      <motion.div
        initial={{ clipPath: archClosed }}
        animate={{ clipPath: archOpen }}
        transition={{ duration: 1.5, ease }}
        className="absolute inset-0 z-0"
      >
        <motion.img
          src="/img/ambience/pavilion.jpg"
          alt="The PUNO garden pavilion set for dinner at dusk"
          initial={{ scale: 1.18 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.9, ease }}
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

      {/* Gold line-work: double arch outline tracing the dome */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.9, ease }}
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10"
      >
        <div
          className="absolute inset-4 border border-gold/45 sm:inset-7"
          style={{ borderRadius: ARCH_ROUND }}
        />
        <div
          className="absolute inset-7 border border-gold/20 sm:inset-11"
          style={{ borderRadius: ARCH_ROUND }}
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

      {/* Wordmark */}
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease }}
        className="relative z-20 flex justify-center pt-10"
      >
        <Wordmark size="sm" />
      </motion.header>

      {/* Centered hero content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
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
