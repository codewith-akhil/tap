import { PhoneIcon } from './Icons'

const LINKS = ['Home', 'About', 'Features', 'Live Streaming', 'Pricing', 'Support', 'Contact']

export default function NavBar() {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-black/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-trigger-green flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
              <path d="M4 5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-5l-4 4v-4H6a2 2 0 0 1-2-2Z" />
            </svg>
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-lg tracking-tight text-trigger-ink">TRIGGER</div>
            <div className="text-[11px] text-trigger-slate -mt-0.5">Live · Chat · Call</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-trigger-ink/80">
          {LINKS.map((l, i) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
              className={i === 0 ? 'text-trigger-green font-semibold' : 'hover:text-trigger-green transition-colors'}
            >
              {l}
            </a>
          ))}
        </nav>

        <a
          href="#download"
          className="inline-flex items-center gap-2 bg-trigger-green text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-trigger-greendark transition-colors"
        >
          <PhoneIcon className="w-4 h-4" />
          Get Trigger
        </a>
      </div>
    </header>
  )
}
