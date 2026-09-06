import Avatar from './Avatar'
import PhoneFrame, { StatusBar } from './PhoneFrame'
import {
  ShieldCheckIcon,
  LockIcon,
  BoltIcon,
  EyeOffIcon,
  VideoIcon,
  MicIcon,
  MapPinIcon,
  SearchIcon,
  BellIcon,
  PhoneIcon,
  SendIcon,
  PlayIcon,
} from './Icons'

const FEATURES = [
  {
    icon: EyeOffIcon,
    title: 'Secure Photo & Video Sharing',
    body: 'Share photos and videos with secure viewing. Media is protected and cannot be easily saved or forwarded.',
    tags: ['Secure View', 'Screenshot Prevention', 'Auto Expire'],
  },
  {
    icon: LockIcon,
    title: 'Screenshot Prevention',
    body: 'Advanced protection to prevent screenshots and screen recording, keeping your conversations and media safe.',
    tags: ['Block Screenshots', 'Block Screen Recording', 'Your Privacy Matters'],
  },
  {
    icon: ShieldCheckIcon,
    title: 'Clear Messages Both Ends',
    body: 'Delete messages for everyone anytime. Keep your conversations in your control with full privacy.',
    tags: ['Delete for Everyone', 'No Traces', 'Chat with Confidence'],
  },
  {
    icon: VideoIcon,
    title: 'Audio & Video Calls',
    body: 'Enjoy high-quality 1-on-1 audio and video calls with crystal-clear sound and smooth performance.',
    tags: ['HD Quality', 'Low Latency', 'Private & Secure'],
  },
  {
    icon: MicIcon,
    title: 'Voice Messages',
    body: 'Express more with voice messages. Share your thoughts instantly, anytime.',
    tags: ['High Quality Audio', 'Fast & Reliable', 'Real Conversations'],
  },
  {
    icon: MapPinIcon,
    title: 'Location Sharing',
    body: 'Share your live location or current location with trusted contacts when needed.',
    tags: ['Live Location', 'Current Location', 'Share with Control'],
  },
]

function ChatListPhone() {
  const chats = [
    { name: 'Ananya', preview: 'Typing…', time: '12:24 PM', badge: '2' },
    { name: 'Riya', preview: 'Photo', time: '11:50 AM', badge: '1' },
    { name: 'Sneha', preview: 'Voice message', time: '10:12 AM' },
    { name: 'Arjun', preview: "Let's catch up later", time: 'Yesterday' },
    { name: 'Meera', preview: 'Missed video call', time: 'Yesterday' },
    { name: 'Team Trigger', preview: 'Welcome to Trigger!', time: 'Yesterday', official: true },
    { name: 'Priya', preview: 'Shared a location', time: '2d ago' },
  ]
  return (
    <PhoneFrame>
      <StatusBar dark />
      <div className="bg-trigger-greendeep text-white flex items-center gap-2 px-4 py-3">
        <div className="w-7 h-7 rounded-lg bg-trigger-green flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
            <path d="M4 5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-5l-4 4v-4H6a2 2 0 0 1-2-2Z" />
          </svg>
        </div>
        <span className="font-bold text-sm flex-1">TRIGGER</span>
        <SearchIcon className="w-4 h-4" />
        <BellIcon className="w-4 h-4" />
      </div>
      <div className="flex-1 overflow-hidden">
        {chats.map((c) => (
          <div key={c.name} className="flex items-center gap-3 px-4 py-2.5">
            {c.official ? (
              <div className="w-10 h-10 rounded-full bg-trigger-green flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
                  <path d="M4 5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-5l-4 4v-4H6a2 2 0 0 1-2-2Z" />
                </svg>
              </div>
            ) : (
              <Avatar name={c.name} size={40} />
            )}
            <div className="flex-1 min-w-0">
              <span className="font-semibold text-[13px] text-trigger-ink block truncate">{c.name}</span>
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
    </PhoneFrame>
  )
}

function ConversationPhone() {
  return (
    <PhoneFrame className="hidden sm:block -ml-16 mt-10">
      <StatusBar dark />
      <div className="bg-trigger-greendeep text-white flex items-center gap-2 px-4 py-3">
        <Avatar name="Ananya" size={30} ring />
        <div className="flex-1">
          <div className="text-sm font-semibold">Ananya</div>
          <div className="text-[10px] text-white/60">Online</div>
        </div>
        <PhoneIcon className="w-4 h-4" />
        <VideoIcon className="w-4 h-4" />
      </div>
      <div className="flex-1 bg-trigger-tint/40 px-3 py-3 space-y-2 overflow-hidden">
        <div className="flex justify-start">
          <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 text-[12px] shadow-sm max-w-[75%]">
            Hey! Are you free tonight?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-trigger-green text-white rounded-2xl rounded-tr-sm px-3 py-2 text-[12px] max-w-[70%]">
            Yes! 😊
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-trigger-ink text-white rounded-2xl rounded-tr-sm p-1.5 max-w-[65%]">
            <div className="w-full h-24 rounded-xl bg-trigger-greendark/60 flex items-center justify-center">
              <Avatar name="Ananya Photo" size={36} />
            </div>
            <div className="text-[10px] px-1 pt-1 flex items-center gap-1 opacity-80">
              <LockIcon className="w-3 h-3" /> Photo · Secure View
            </div>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 text-[12px] shadow-sm max-w-[75%]">
            This looks amazing! 😍
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-trigger-green text-white rounded-2xl rounded-tr-sm px-3 py-2 text-[12px] flex items-center gap-2 max-w-[75%]">
            <PlayIcon className="w-4 h-4" />
            <div className="h-1 flex-1 bg-white/40 rounded-full" />
            0:12
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-white rounded-2xl rounded-tr-sm p-1.5 max-w-[65%] shadow-sm">
            <div className="w-full h-16 rounded-xl bg-trigger-tint flex items-center justify-center">
              <MapPinIcon className="w-6 h-6 text-red-500" />
            </div>
            <div className="text-[10px] px-1 pt-1 text-trigger-slate">Shared Location</div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 px-3 py-2 border-t border-black/5">
        <div className="flex-1 bg-trigger-tint rounded-full px-3 py-2 text-[11px] text-trigger-slate">
          Type a message…
        </div>
        <div className="w-8 h-8 rounded-full bg-trigger-green flex items-center justify-center">
          <SendIcon className="w-3.5 h-3.5 text-white" />
        </div>
      </div>
    </PhoneFrame>
  )
}

export default function PrivateMessaging() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <p className="text-trigger-green font-bold text-sm tracking-widest mb-4">PRIVATE MESSAGING</p>
          <h2 className="text-4xl font-extrabold text-trigger-ink leading-tight">
            Chat Freely, <span className="text-trigger-green">Share Securely.</span>
          </h2>
          <p className="mt-5 text-trigger-slate leading-relaxed max-w-lg">
            Stay connected with real people through instant and secure messaging. Share photos, videos, voice
            messages, make audio and video calls, share your location and more — all with advanced privacy
            features designed for your safety.
          </p>
          <div className="flex gap-8 mt-8">
            {[
              [ShieldCheckIcon, 'Secure Conversations', 'Your privacy first'],
              [LockIcon, 'Screenshot Protection', 'Extra safety layer'],
              [BoltIcon, 'Clear Messages Both Ends', 'Messages are cleared for everyone'],
            ].map(([Icon, title, sub]: any) => (
              <div key={title} className="max-w-[140px]">
                <div className="w-11 h-11 rounded-full bg-trigger-tint text-trigger-green flex items-center justify-center mb-3">
                  <Icon />
                </div>
                <div className="font-semibold text-sm text-trigger-ink">{title}</div>
                <div className="text-xs text-trigger-slate mt-1">{sub}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative flex">
            <ChatListPhone />
            <ConversationPhone />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {FEATURES.map(({ icon: Icon, title, body, tags }) => (
          <div key={title} className="border border-black/5 rounded-2xl p-6 bg-white">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-trigger-tint text-trigger-green flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-trigger-ink">{title}</h3>
                <p className="text-sm text-trigger-slate mt-1.5 leading-relaxed">{body}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {tags.map((t) => (
                    <span key={t} className="text-[11px] font-medium text-trigger-green bg-trigger-tint px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-trigger-tint rounded-2xl p-8">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-white text-trigger-green flex items-center justify-center shrink-0">
              <ShieldCheckIcon />
            </div>
            <div>
              <div className="font-semibold text-trigger-ink">Your Privacy, Our Priority</div>
              <p className="text-sm text-trigger-slate mt-1">
                We use advanced security measures to keep your chats, media and personal information safe. Chat,
                share and connect with confidence on Trigger.
              </p>
            </div>
          </div>
          <a
            href="#download"
            className="inline-flex items-center gap-2 bg-trigger-green text-white font-semibold px-6 py-3 rounded-full whitespace-nowrap hover:bg-trigger-greendark transition-colors"
          >
            <VideoIcon className="w-4 h-4" />
            Start Chatting Now
          </a>
        </div>
      </div>
    </section>
  )
}
