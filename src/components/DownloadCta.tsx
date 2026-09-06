import PhoneFrame, { StatusBar } from './PhoneFrame'
import Avatar from './Avatar'
import { BoltIcon, ShieldCheckIcon, ChartIcon, DocumentIcon } from './Icons'

function BrandPhone() {
  return (
    <PhoneFrame>
      <StatusBar dark />
      <div className="flex-1 bg-trigger-green flex flex-col items-center justify-center text-white gap-4 px-8">
        <div className="w-20 h-20 rounded-3xl bg-white/15 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-10 h-10" fill="white">
            <path d="M4 5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-5l-4 4v-4H6a2 2 0 0 1-2-2Z" />
          </svg>
        </div>
        <div className="text-center">
          <div className="font-extrabold text-xl">TRIGGER</div>
          <div className="text-sm text-white/80 mt-0.5">Live · Chat · Call</div>
        </div>
        <p className="font-script text-2xl text-center leading-tight">
          Real
          <br />
          Connections
          <br />
          Always
        </p>
      </div>
    </PhoneFrame>
  )
}

function ChatsMiniPhone() {
  const chats = [
    ['Ananya', 'Hey! are you online?', '12:24 PM'],
    ['Riya', 'Sent a photo', '11:50 AM'],
    ['Sneha', 'Voice message', '10:12 AM'],
    ['Arjun', "Let's catch up later", 'Yesterday'],
    ['Meera', 'Missed video call', 'Yesterday'],
    ['Team Trigger', 'Welcome to Trigger!', 'Yesterday'],
    ['Priya', 'Shared a location', '2d ago'],
  ] as const
  return (
    <PhoneFrame className="hidden sm:block -ml-16 mt-10">
      <StatusBar dark />
      <div className="bg-trigger-greendeep text-white flex items-center gap-2 px-4 py-3">
        <div className="w-7 h-7 rounded-lg bg-trigger-green flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
            <path d="M4 5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-5l-4 4v-4H6a2 2 0 0 1-2-2Z" />
          </svg>
        </div>
        <span className="font-bold text-sm flex-1">TRIGGER</span>
      </div>
      <div className="flex text-sm font-semibold text-trigger-slate border-b border-black/5">
        {['Chats', 'Calls', 'Live', 'People'].map((t, i) => (
          <div key={t} className={`flex-1 text-center py-2.5 ${i === 0 ? 'text-trigger-green border-b-2 border-trigger-green' : ''}`}>
            {t}
          </div>
        ))}
      </div>
      <div className="flex-1 overflow-hidden">
        {chats.map(([name, preview, time]) => (
          <div key={name} className="flex items-center gap-3 px-4 py-2.5">
            <Avatar name={name} size={38} />
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-[13px] text-trigger-ink truncate">{name}</div>
              <div className="text-[12px] text-trigger-slate truncate">{preview}</div>
            </div>
            <span className="text-[11px] text-trigger-slate shrink-0">{time}</span>
          </div>
        ))}
      </div>
    </PhoneFrame>
  )
}

export default function DownloadCta() {
  return (
    <section id="download" className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-trigger-green font-bold text-sm tracking-widest mb-4">READY TO CONNECT?</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-trigger-ink leading-tight">
            Download Trigger
            <br />
            <span className="text-trigger-green">on Google Play</span>
          </h2>
          <p className="mt-5 text-trigger-slate leading-relaxed max-w-md">
            Join a global 18+ community. Chat, call, stream and be part of something real. Real people. Real
            conversations. Real connections.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 max-w-lg">
            {[
              [BoltIcon, 'Fast & Secure', 'Smooth and reliable experience'],
              [ShieldCheckIcon, '100% Private', 'Your safety matters'],
              [ChartIcon, 'Global Community', 'Meet real people worldwide'],
              [DocumentIcon, 'Regular Updates', 'New features and improvements'],
            ].map(([Icon, title, sub]: any) => (
              <div key={title}>
                <div className="w-11 h-11 rounded-full bg-trigger-tint text-trigger-green flex items-center justify-center mb-3">
                  <Icon />
                </div>
                <div className="font-semibold text-sm text-trigger-ink">{title}</div>
                <div className="text-xs text-trigger-slate mt-1">{sub}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-5 mt-10">
            <a
              href="https://play.google.com/store"
              className="inline-flex items-center gap-3 bg-trigger-green text-white font-semibold px-6 py-4 rounded-xl hover:bg-trigger-greendark transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="M3 3.5a1 1 0 0 1 1.5-.87l14 9.37-14 9.37A1 1 0 0 1 3 20.5v-17Z" />
              </svg>
              <span className="text-left leading-tight">
                <span className="block text-[11px] font-normal">Get it on</span>
                Google Play
              </span>
            </a>
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-lg border border-black/10 grid grid-cols-4 grid-rows-4 gap-[1px] p-1.5 bg-white">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className={`${[0, 3, 5, 6, 9, 10, 12, 15].includes(i) ? 'bg-trigger-ink' : ''}`} />
                ))}
              </div>
              <div className="text-xs text-trigger-slate">
                Scan QR Code
                <br />
                to download Trigger app
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <p className="font-script text-2xl text-trigger-green absolute -top-6 right-2 hidden lg:block rotate-2">
            Same App
            <br />
            Different Stories
          </p>
          <BrandPhone />
          <ChatsMiniPhone />
        </div>
      </div>
    </section>
  )
}
