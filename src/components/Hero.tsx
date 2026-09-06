import Avatar from './Avatar'
import PhoneFrame, { StatusBar } from './PhoneFrame'
import { SearchIcon, BellIcon, MicIcon, PhoneIcon, VideoIcon, CameraLockIcon } from './Icons'

const CHATS = [
  { name: 'Ananya', preview: 'Hey! are you online?', time: '12:24 PM', badge: '2' },
  { name: 'Riya', preview: 'Sent a photo', time: '11:50 AM', badge: '1' },
  { name: 'Sneha', preview: 'Voice message', time: '10:12 AM' },
  { name: 'Arjun', preview: "Let's catch up later", time: 'Yesterday' },
  { name: 'Live Updates', preview: 'New streams are live now!', time: '11:30 AM', live: true },
  { name: 'Meera', preview: 'Missed video call', time: 'Yesterday' },
]

const LIVE = [
  { name: 'Ananya', tag: 'Music & Chill', viewers: '1.2K' },
  { name: 'Riya', tag: 'Just Chatting', viewers: '892' },
  { name: 'Meera', tag: 'Dance Vibes', viewers: '1.6K' },
  { name: 'Tanya', tag: 'Late Night Talk', viewers: '748' },
]

function ChatsPhone() {
  return (
    <PhoneFrame>
      <StatusBar dark />
      <div className="bg-trigger-greendeep text-white flex items-center gap-2 px-4 py-3">
        <div className="w-7 h-7 rounded-lg bg-trigger-green flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
            <path d="M4 5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-5l-4 4v-4H6a2 2 0 0 1-2-2Z" />
          </svg>
        </div>
        <span className="font-bold text-sm tracking-wide flex-1">TRIGGER</span>
        <SearchIcon className="w-4 h-4" />
        <BellIcon className="w-4 h-4" />
      </div>
      <div className="flex text-sm font-semibold text-trigger-slate border-b border-black/5">
        {['Chats', 'Calls', 'Live', 'People'].map((t, i) => (
          <div
            key={t}
            className={`flex-1 text-center py-2.5 ${i === 0 ? 'text-trigger-green border-b-2 border-trigger-green' : ''}`}
          >
            {t}
          </div>
        ))}
      </div>
      <div className="flex-1 overflow-hidden">
        {CHATS.map((c) => (
          <div key={c.name} className="flex items-center gap-3 px-4 py-2.5">
            {c.live ? (
              <div className="w-10 h-10 rounded-full bg-trigger-green flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
                  <path d="M4 5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-5l-4 4v-4H6a2 2 0 0 1-2-2Z" />
                </svg>
              </div>
            ) : (
              <Avatar name={c.name} size={40} />
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-[13px] text-trigger-ink truncate">{c.name}</span>
                {c.live && (
                  <span className="text-[9px] font-bold bg-trigger-green text-white px-1.5 py-0.5 rounded">LIVE</span>
                )}
              </div>
              <span className="text-[12px] text-trigger-slate truncate block">{c.preview}</span>
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0">
              <span className="text-[11px] text-trigger-slate">{c.time}</span>
              {c.badge && (
                <span className="w-4 h-4 rounded-full bg-trigger-green text-white text-[9px] flex items-center justify-center">
                  {c.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-around border-t border-black/5 py-2.5 text-[10px] text-trigger-slate font-medium">
        <div className="flex flex-col items-center gap-1 text-trigger-green">
          <MicIcon className="w-4 h-4 rotate-90" />
          Chats
        </div>
        <div className="flex flex-col items-center gap-1">
          <PhoneIcon className="w-4 h-4" />
          Calls
        </div>
        <div className="w-9 h-9 rounded-full bg-trigger-green flex items-center justify-center text-white text-lg -mt-4">
          +
        </div>
        <div className="flex flex-col items-center gap-1">
          <VideoIcon className="w-4 h-4" />
          Live
        </div>
        <div className="flex flex-col items-center gap-1">
          <CameraLockIcon className="w-4 h-4" />
          Profile
        </div>
      </div>
    </PhoneFrame>
  )
}

function LivePhone() {
  return (
    <PhoneFrame className="hidden sm:block -ml-16 mt-10">
      <StatusBar dark />
      <div className="bg-trigger-greendeep text-white flex items-center gap-2 px-4 py-3">
        <div className="w-7 h-7 rounded-lg bg-trigger-green flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
            <path d="M4 5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-5l-4 4v-4H6a2 2 0 0 1-2-2Z" />
          </svg>
        </div>
        <span className="font-bold text-sm tracking-wide flex-1">TRIGGER</span>
        <SearchIcon className="w-4 h-4" />
        <BellIcon className="w-4 h-4" />
      </div>
      <div className="flex text-sm font-semibold text-trigger-slate border-b border-black/5">
        {['Chats', 'Calls', 'Live', 'People'].map((t) => (
          <div
            key={t}
            className={`flex-1 text-center py-2.5 ${t === 'Live' ? 'text-trigger-green border-b-2 border-trigger-green' : ''}`}
          >
            {t}
          </div>
        ))}
      </div>
      <div className="flex gap-2 px-3 py-2 text-[11px] font-semibold">
        {['For You', 'Following', 'Popular', 'Nearby'].map((t, i) => (
          <span
            key={t}
            className={`px-2.5 py-1 rounded-full ${i === 0 ? 'bg-trigger-green text-white' : 'text-trigger-slate'}`}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 px-3 flex-1">
        {LIVE.map((l) => (
          <div key={l.name} className="relative rounded-xl overflow-hidden bg-trigger-ink h-32">
            <div className="absolute inset-0 flex items-center justify-center">
              <Avatar name={l.name} size={44} />
            </div>
            <span className="absolute top-1.5 left-1.5 text-[9px] font-bold bg-red-600 text-white px-1.5 py-0.5 rounded">
              LIVE
            </span>
            <span className="absolute top-1.5 right-1.5 text-[9px] text-white bg-black/40 px-1.5 py-0.5 rounded flex items-center gap-0.5">
              👁 {l.viewers}
            </span>
            <div className="absolute bottom-1.5 left-1.5 text-white text-[11px] font-semibold leading-tight">
              {l.name}
              <div className="text-[9px] font-normal opacity-90">{l.tag}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-around border-t border-black/5 py-2.5 text-[10px] text-trigger-slate font-medium mt-2">
        <span>Chats</span>
        <span>Calls</span>
        <div className="w-9 h-9 rounded-full bg-trigger-green flex items-center justify-center text-white text-lg -mt-4">
          +
        </div>
        <span className="text-trigger-green">Live</span>
        <span>Profile</span>
      </div>
    </PhoneFrame>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-trigger-tint to-white -z-10" />
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-trigger-green font-bold text-sm tracking-widest mb-4">
            CONNECT · STREAM · CHAT · BELONG
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.08] text-trigger-ink">
            Real-time communication, <span className="text-trigger-green">live streaming</span> and social
            interaction.
          </h1>
          <p className="mt-6 text-trigger-slate text-lg leading-relaxed max-w-xl">
            Chat, voice and video calls, high-quality live streams, interactive communities and more — all in
            one place. Trigger is a global 18+ platform for real people to connect, express and earn, powered
            by Metric Flux Solutions Pvt Ltd.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#download"
              className="inline-flex items-center gap-2 bg-trigger-green text-white font-semibold px-6 py-3.5 rounded-full hover:bg-trigger-greendark transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              Get Trigger for Android
            </a>
            <a
              href="#live-streaming"
              className="inline-flex items-center gap-2 bg-white border border-black/10 text-trigger-ink font-semibold px-6 py-3.5 rounded-full hover:border-trigger-green transition-colors"
            >
              <VideoIcon className="w-4 h-4" />
              Explore Live Streaming
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 max-w-lg">
            {[
              ['4.8 / 5.0', 'User Rating'],
              ['50,000+', 'Android Installs'],
              ['18+', 'Global Community'],
              ['Secure & Private', 'Your Safety Matters'],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-extrabold text-trigger-ink">{n}</div>
                <div className="text-xs text-trigger-slate mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end items-start">
          <p className="font-script text-2xl text-trigger-green absolute -top-6 right-4 leading-tight hidden lg:block rotate-2">
            Go Live.
            <br />
            Be Real.
            <br />
            Be You.
          </p>
          <ChatsPhone />
          <LivePhone />
        </div>
      </div>
    </section>
  )
}
