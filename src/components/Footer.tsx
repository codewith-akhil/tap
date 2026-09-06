import type { ReactNode } from 'react'

const COLUMNS = [
  { title: 'Who we are', links: ['About us', 'Careers', 'Upcoming Features'] },
  { title: 'Legal', links: ['Terms and Conditions', 'Privacy Policy', 'Pricing Policy'] },
  { title: 'Need Help ?', links: ['Contact us', 'Report', 'Help Center'] },
]

function SocialIcon({ children }: { children: ReactNode }) {
  return (
    <a
      href="#"
      className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center text-white hover:border-trigger-green hover:text-trigger-green transition-colors"
    >
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-trigger-greendeep text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="w-14 h-14 rounded-2xl bg-trigger-green flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white">
              <path d="M4 5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-5l-4 4v-4H6a2 2 0 0 1-2-2Z" />
            </svg>
          </div>
          <div className="font-extrabold text-xl tracking-tight">TRIGGER</div>
          <div className="text-sm text-white/50">Live · Chat · Call</div>
          <a
            href="#download"
            className="inline-flex items-center gap-2 border border-trigger-green rounded-xl px-4 py-2.5 mt-5 text-sm font-semibold"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M3 3.5a1 1 0 0 1 1.5-.87l14 9.37-14 9.37A1 1 0 0 1 3 20.5v-17Z" />
            </svg>
            <span className="leading-tight text-left">
              <span className="block text-[10px] font-normal opacity-70">GET IT ON</span>
              Google Play
            </span>
          </a>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <div className="font-bold mb-4">{col.title}</div>
            <ul className="space-y-3 text-sm text-white/60">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-trigger-green transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/50 text-center sm:text-left">
          © 2026 All rights reserved by Trigger App
          <br />
          Powered by Metric Flux Solutions
        </p>
        <div className="flex items-center gap-3">
          <SocialIcon>
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
            </svg>
          </SocialIcon>
          <SocialIcon>
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M13.5 21v-7.5H16l.4-3H13.5V8.4c0-.9.3-1.4 1.6-1.4H16V4.3C15.7 4.3 14.7 4 13.6 4c-2.3 0-3.8 1.4-3.8 3.9v2.6H7.5v3H9.8V21h3.7Z" />
            </svg>
          </SocialIcon>
          <SocialIcon>
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M17.5 3h2.9l-6.4 7.3L21.5 21h-5.9l-4.6-6-5.3 6H2.8l6.9-7.8L2.5 3h6l4.1 5.5L17.5 3Zm-1 16.2h1.6L7.6 4.7H5.9l10.6 14.5Z" />
            </svg>
          </SocialIcon>
          <SocialIcon>
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <circle cx="12" cy="12" r="8" />
              <circle cx="12" cy="9" r="2.6" />
              <path d="M8.5 17c.5-2.5 2-3.6 3.5-3.6s3 1.1 3.5 3.6" />
            </svg>
          </SocialIcon>
          <span className="text-xs text-white/50 ml-2">English ▾</span>
        </div>
      </div>
    </footer>
  )
}
