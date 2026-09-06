import { CrownIcon, CalendarIcon, ArrowRightIcon, CheckShieldIcon, ChartIcon, CoinsIcon, VideoIcon, LockIcon } from './Icons'
import Avatar from './Avatar'

const FREE_PERKS = [
  'No payment required',
  'Unlimited live streaming',
  'Real-time chat with viewers',
  'Gifts and support',
  'Perfect for casual and community streams',
]

const PAID_PERKS = [
  'Set your own price',
  'Earn from your content',
  'Exclusive access for viewers',
  'Real-time chat and reactions',
  'Build a loyal audience',
  'Transparent earnings',
]

const SCHEDULE_PERKS = [
  'Schedule date & time',
  'Notify your followers',
  'Perfect for events, Q&A, special sessions',
  'Supports free or paid streams',
  'Auto reminders for viewers',
]

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 mt-5">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-trigger-ink/90">
          <span className="mt-0.5 text-trigger-green shrink-0">✓</span>
          {i}
        </li>
      ))}
    </ul>
  )
}

function StreamPreviewCard({ tone }: { tone: 'free' | 'paid' | 'schedule' }) {
  if (tone === 'schedule') {
    return (
      <div className="w-full h-64 rounded-2xl bg-trigger-ink text-white p-4 flex flex-col">
        <div className="flex items-center gap-2 text-xs font-semibold mb-3">
          <span>← Schedule Live</span>
        </div>
        <div className="flex-1 rounded-xl bg-white/5 flex items-center justify-center mb-3">
          <Avatar name="Scheduled Host" size={40} />
        </div>
        <div className="space-y-2 text-[11px]">
          <div className="bg-white/10 rounded-lg px-3 py-2">Let's Talk ❤️</div>
          <div className="bg-white/10 rounded-lg px-3 py-2 text-white/60">
            Join me for a live session. Q&amp;A, chill and more…
          </div>
          <div className="flex gap-2">
            <span className="flex-1 text-center bg-white/10 rounded-lg py-1.5">Free</span>
            <span className="flex-1 text-center bg-trigger-green rounded-lg py-1.5">Paid</span>
          </div>
          <div className="flex justify-between text-white/70">
            <span>5 Sep 2026</span>
            <span>08:00 PM</span>
          </div>
          <div className="bg-trigger-green text-center rounded-lg py-2 font-semibold">Schedule Stream</div>
        </div>
      </div>
    )
  }
  return (
    <div className="relative w-full h-64 rounded-2xl bg-trigger-ink overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Avatar name={tone === 'paid' ? 'Premium Host' : 'Live Host'} size={56} />
      </div>
      <span
        className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1 ${
          tone === 'paid' ? 'bg-red-600' : 'bg-red-500'
        } text-white`}
      >
        {tone === 'paid' ? <LockIcon className="w-2.5 h-2.5" /> : null}
        {tone === 'paid' ? 'PAID' : 'LIVE'}
      </span>
      <span className="absolute top-3 right-3 text-[10px] text-white bg-black/40 px-2 py-1 rounded">
        👁 {tone === 'paid' ? '892' : '1.2K'}
      </span>
      {tone === 'free' && (
        <div className="absolute bottom-9 left-2 space-y-1 text-[10px] text-white/90">
          <div>Arjun: Amazing! ❤️</div>
          <div>Neha: Love this! 😍</div>
          <div>Rohan: Keep going! 🔥</div>
        </div>
      )}
      {tone === 'paid' && (
        <div className="absolute inset-x-3 bottom-3 bg-black/70 rounded-xl p-3 text-white">
          <div className="text-[11px] text-white/70">Unlock this live stream</div>
          <div className="font-bold text-lg">₹100</div>
          <div className="bg-white text-trigger-ink text-center rounded-lg text-xs font-semibold py-1.5 mt-1">
            Pay &amp; Join
          </div>
        </div>
      )}
      {tone === 'free' && (
        <div className="absolute bottom-3 left-3 right-3 bg-black/40 rounded-lg text-[10px] text-white/80 px-2 py-1.5">
          Say something…
        </div>
      )}
    </div>
  )
}

export default function LiveStreaming() {
  return (
    <section id="live-streaming" className="bg-trigger-tint/40 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-trigger-green font-bold text-sm tracking-widest mb-4">LIVE STREAMING</p>
            <h2 className="text-4xl font-extrabold text-trigger-ink leading-tight max-w-xl">
              Stream Your Way <span className="text-trigger-green">Free, Paid or Scheduled.</span>
            </h2>
            <p className="mt-4 text-trigger-slate max-w-lg">
              Go live instantly, monetize your content, or plan ahead. Trigger gives you the flexibility to
              connect with your audience the way you want.
            </p>
          </div>
          <p className="font-script text-2xl text-trigger-green leading-tight whitespace-nowrap">
            Create Connect Grow
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-black/5">
            <span className="text-[11px] font-bold text-trigger-green bg-trigger-tint px-2.5 py-1 rounded-full">
              FREE
            </span>
            <h3 className="text-xl font-bold text-trigger-ink mt-4">Free Live Stream</h3>
            <p className="text-sm text-trigger-slate mt-1.5">
              Go live instantly and connect with anyone, anytime. Share your moments, interact with your
              audience and grow your community.
            </p>
            <div className="mt-5">
              <StreamPreviewCard tone="free" />
            </div>
            <CheckList items={FREE_PERKS} />
            <a
              href="#download"
              className="mt-6 inline-flex items-center gap-2 justify-center w-full bg-trigger-green text-white font-semibold py-3 rounded-full hover:bg-trigger-greendark transition-colors"
            >
              Start Free Stream <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-black/5">
            <span className="text-[11px] font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-full inline-flex items-center gap-1">
              <CrownIcon className="w-3 h-3" /> PAID
            </span>
            <h3 className="text-xl font-bold text-trigger-ink mt-4">Paid Live Stream</h3>
            <p className="text-sm text-trigger-slate mt-1.5">
              Monetize your content with exclusive live streams. Set your price and give your audience a
              premium experience.
            </p>
            <div className="mt-5">
              <StreamPreviewCard tone="paid" />
            </div>
            <CheckList items={PAID_PERKS} />
            <a
              href="#download"
              className="mt-6 inline-flex items-center gap-2 justify-center w-full bg-red-500 text-white font-semibold py-3 rounded-full hover:bg-red-600 transition-colors"
            >
              Create Paid Stream <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-black/5">
            <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full inline-flex items-center gap-1">
              <CalendarIcon className="w-3 h-3" /> SCHEDULE
            </span>
            <h3 className="text-xl font-bold text-trigger-ink mt-4">Schedule Live Stream</h3>
            <p className="text-sm text-trigger-slate mt-1.5">
              Plan your live streams in advance and let your audience know. Build excitement, get notifications
              and reach more viewers.
            </p>
            <div className="mt-5">
              <StreamPreviewCard tone="schedule" />
            </div>
            <CheckList items={SCHEDULE_PERKS} />
            <a
              href="#download"
              className="mt-6 inline-flex items-center gap-2 justify-center w-full bg-blue-600 text-white font-semibold py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              Schedule Stream <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-14 bg-trigger-ink rounded-3xl p-10 grid lg:grid-cols-[1.3fr,1fr] gap-10 items-center text-white">
          <div>
            <p className="text-trigger-green font-bold text-xs tracking-widest mb-3">FOR CREATORS</p>
            <h3 className="text-3xl font-extrabold">More Control. More Possibilities.</h3>
            <p className="text-white/70 mt-4 max-w-xl">
              Whether it's a spontaneous chat, an exclusive paid session, or a well-planned event — Trigger
              gives creators the tools to engage, grow and earn.
            </p>
            <a
              href="#download"
              className="mt-6 inline-flex items-center gap-2 bg-trigger-green text-white font-semibold px-6 py-3 rounded-full hover:bg-trigger-greendark transition-colors"
            >
              <VideoIcon className="w-4 h-4" />
              Start Streaming Today
            </a>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              [ChartIcon, 'Engage Your Audience', 'Chat, interact and build a loyal community.'],
              [CoinsIcon, 'Earn From Your Content', 'Monetize with paid live streams and gifts.'],
              [CalendarIcon, 'Plan For Bigger Moments', 'Schedule streams and reach more viewers.'],
            ].map(([Icon, title, body]: any) => (
              <div key={title} className="bg-white/5 rounded-2xl p-4">
                <div className="w-9 h-9 rounded-lg bg-trigger-green flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div className="font-semibold text-sm">{title}</div>
                <p className="text-xs text-white/60 mt-1">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-trigger-slate italic mt-14">
          "Real people. Real conversations. Real connections."
        </p>
      </div>
    </section>
  )
}
