import Wordmark from './Wordmark.jsx'
import { SERVICE_NOTE } from '../data/menu.js'

const links = [
  { label: 'Menu', href: '#menu' },
  { label: 'Family Set', href: '#visit' },
  { label: 'The Setting', href: '#ambience' },
  { label: 'Visit', href: '#visit' },
]

export default function Footer() {
  return (
    <footer className="relative grain overflow-hidden border-t border-cream/10 bg-forest-950 px-6 pb-12 pt-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-center gap-10 text-center">
          <Wordmark size="lg" />
          <p className="max-w-md text-pretty font-sans text-sm leading-relaxed text-bone/65">
            Filipino comfort, plated with intent — in the shade of a fire tree.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-sans text-sm uppercase tracking-[0.15em] text-bone/70 transition-colors hover:text-cream"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 sm:flex-row">
          <p className="font-sans text-xs text-bone/50">{SERVICE_NOTE}</p>
          <p className="font-sans text-xs text-bone/50">
            &copy; {new Date().getFullYear()} PUNO Kitchen &amp; Cafe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
