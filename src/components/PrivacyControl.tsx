import Avatar from './Avatar'
import PhoneFrame, { StatusBar } from './PhoneFrame'
import { UserOffIcon, AtIcon, EyeOffIcon, ShieldCheckIcon, LockIcon, TrashIcon, CheckShieldIcon, ClockIcon, DocumentIcon } from './Icons'

const CONTROL_CARDS = [
  { icon: UserOffIcon, title: 'Hide Personal Details', body: 'Keep your real name, phone number, email and other personal information private.' },
  { icon: AtIcon, title: 'Share Username', body: 'Connect with others using your unique username instead of personal details.' },
  { icon: EyeOffIcon, title: 'Control Your Visibility', body: 'Choose what others can see on your profile and when to show it.' },
  { icon: ShieldCheckIcon, title: 'Stay Anonymous', body: 'Chat, stream and connect with confidence, on your own terms.' },
]

const VAULT_ITEMS = [
  { icon: LockIcon, title: 'PIN Authentication', body: 'Access your vault with a secure PIN.' },
  { icon: EyeOffIcon, title: 'Hidden from Gallery', body: 'Files are stored in a private space, not visible in your device gallery.' },
  { icon: EyeOffIcon, title: 'Photos & Videos', body: 'Store your intimate and personal media safely.' },
  { icon: ShieldCheckIcon, title: 'Full Privacy', body: 'Only you can access, share or delete your files.' },
]

const DELETE_ITEMS = [
  { icon: TrashIcon, title: 'One-Click Request', body: 'Easily request account deletion from app or website.' },
  { icon: CheckShieldIcon, title: 'Your Data, Your Control', body: 'Your profile, chats, media and personal information will be removed.' },
  { icon: ClockIcon, title: 'Processed Securely', body: 'Deletion requests are processed securely in accordance with our Privacy Policy.' },
  { icon: DocumentIcon, title: 'Clear Information', body: 'We provide clear details about what data is deleted and what may be retained as required by law.' },
]

function PrivacySettingsPhones() {
  const rows = [
    ['Show Real Name', 'Only you can see this', false],
    ['Show Phone Number', 'Only you can see this', false],
    ['Show Email Address', 'Only you can see this', false],
    ['Show My Location', 'Nobody', null],
    ['Profile Visibility', 'Only username and profile photo', null],
    ['Allow Direct Messages', 'Everyone', null],
    ['Show Online Status', 'Only people you follow', true],
  ] as const

  return (
    <div className="flex">
      <PhoneFrame>
        <StatusBar dark />
        <div className="bg-trigger-greendeep text-white flex items-center gap-3 px-4 py-3">
          <span>←</span>
          <span className="font-semibold text-sm">Profile</span>
        </div>
        <div className="flex flex-col items-center pt-5 pb-3 border-b border-black/5">
          <Avatar name="Ananya" size={64} />
          <div className="font-bold text-sm text-trigger-ink mt-2">Ananya</div>
          <div className="text-xs text-trigger-slate">@ananya_official</div>
          <div className="flex gap-6 mt-3 text-center">
            <div>
              <div className="font-bold text-sm text-trigger-ink">124</div>
              <div className="text-[10px] text-trigger-slate">Following</div>
            </div>
            <div>
              <div className="font-bold text-sm text-trigger-ink">1.2K</div>
              <div className="text-[10px] text-trigger-slate">Followers</div>
            </div>
            <div>
              <div className="font-bold text-sm text-trigger-ink">56</div>
              <div className="text-[10px] text-trigger-slate">Live Streams</div>
            </div>
          </div>
        </div>
        <div className="flex-1 text-[13px] text-trigger-ink">
          {['Edit Profile', 'Privacy Settings', 'Hide Personal Details', 'Share Username', 'Blocked Users', 'Account Settings'].map(
            (t) => (
              <div key={t} className="px-4 py-3 border-b border-black/5">
                {t}
              </div>
            ),
          )}
        </div>
      </PhoneFrame>

      <PhoneFrame className="hidden sm:block -ml-16 mt-10">
        <StatusBar dark />
        <div className="bg-trigger-greendeep text-white flex items-center gap-3 px-4 py-3">
          <span>←</span>
          <span className="font-semibold text-sm">Privacy Settings</span>
        </div>
        <div className="flex-1 overflow-hidden text-[11px]">
          {rows.map(([title, sub, toggle]) => (
            <div key={title} className="flex items-center justify-between px-4 py-2.5 border-b border-black/5">
              <div>
                <div className="font-semibold text-trigger-ink text-[12px]">{title}</div>
                <div className="text-trigger-slate text-[10px]">{sub}</div>
              </div>
              {toggle !== null && (
                <div className={`w-8 h-[18px] rounded-full flex items-center px-0.5 ${toggle ? 'bg-trigger-green justify-end' : 'bg-black/10 justify-start'}`}>
                  <div className="w-3.5 h-3.5 rounded-full bg-white" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="p-3">
          <div className="bg-trigger-green rounded-xl px-3 py-2.5 flex items-center gap-2 text-white text-[11px]">
            <LockIcon className="w-3.5 h-3.5" />
            <div className="flex-1">
              <div className="font-semibold">Your privacy matters</div>
              <div className="opacity-80">You are in control of what you share.</div>
            </div>
            <span>›</span>
          </div>
        </div>
      </PhoneFrame>
    </div>
  )
}

function VaultPhone() {
  return (
    <PhoneFrame>
      <StatusBar dark />
      <div className="flex-1 bg-trigger-greendeep text-white flex flex-col items-center justify-center gap-6 px-6">
        <div className="w-14 h-14 rounded-full bg-trigger-green flex items-center justify-center">
          <LockIcon className="w-6 h-6" />
        </div>
        <div className="text-center">
          <div className="font-bold">Enter Your PIN</div>
          <div className="text-xs text-white/60 mt-1">Access your private vault</div>
        </div>
        <div className="flex gap-3">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`w-2.5 h-2.5 rounded-full ${i < 3 ? 'bg-trigger-green' : 'border border-white/40'}`} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫'].map((n, i) => (
            <div key={i} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-sm">
              {n}
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  )
}

function DeletePhone() {
  return (
    <PhoneFrame>
      <StatusBar />
      <div className="flex items-center gap-3 px-4 py-3">
        <span>←</span>
      </div>
      <div className="flex-1 flex flex-col items-center px-6 pt-2">
        <div className="w-16 h-16 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-4">
          <TrashIcon className="w-7 h-7" />
        </div>
        <div className="font-bold text-trigger-ink">Delete Account</div>
        <p className="text-xs text-trigger-slate text-center mt-1">
          This will permanently delete your Trigger account and remove your data from our systems.
        </p>
        <div className="bg-red-50 rounded-xl p-3 mt-4 w-full">
          <div className="text-[11px] font-semibold text-red-600 mb-1.5">This includes:</div>
          <ul className="text-[11px] text-red-500 space-y-1 list-disc list-inside">
            <li>Your profile information</li>
            <li>Photos and videos</li>
            <li>Chats and messages</li>
            <li>Followers and following</li>
            <li>Wallet and earnings data</li>
            <li>Live stream history</li>
          </ul>
        </div>
        <div className="flex-1" />
        <div className="w-full bg-red-600 text-white text-center rounded-full py-3 font-semibold text-sm mb-4">
          Delete My Account
        </div>
      </div>
    </PhoneFrame>
  )
}

export default function PrivacyControl() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-trigger-green font-bold text-sm tracking-widest mb-4">YOUR PRIVACY, YOUR CHOICE</p>
          <h2 className="text-4xl font-extrabold text-trigger-ink leading-tight">
            Stay in Control <span className="text-trigger-green">Share What You Want.</span>
          </h2>
          <p className="mt-5 text-trigger-slate leading-relaxed max-w-lg">
            Trigger gives you the freedom to connect without revealing personal details. Keep your identity
            private, share only your username, and control your visibility.
          </p>
          <div className="grid grid-cols-2 gap-5 mt-8 max-w-lg">
            {CONTROL_CARDS.map(({ icon: Icon, title, body }) => (
              <div key={title}>
                <div className="w-11 h-11 rounded-full bg-trigger-tint text-trigger-green flex items-center justify-center mb-3">
                  <Icon />
                </div>
                <div className="font-semibold text-sm text-trigger-ink">{title}</div>
                <p className="text-xs text-trigger-slate mt-1 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <PrivacySettingsPhones />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 grid lg:grid-cols-2 gap-6">
        <div className="bg-trigger-tint/50 rounded-3xl p-8 grid sm:grid-cols-[1fr,auto] gap-8 items-center">
          <div>
            <p className="text-trigger-green font-bold text-xs tracking-widest mb-3">PRIVATE VAULT</p>
            <h3 className="text-2xl font-extrabold text-trigger-ink">Keep Your Photos &amp; Videos Safe</h3>
            <p className="text-sm text-trigger-slate mt-3 leading-relaxed">
              Hide your personal photos and videos in a secure private vault. Access them anytime with your
              PIN. Your memories stay private, protected and only visible to you.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-5">
              {VAULT_ITEMS.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-white text-trigger-green flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-trigger-ink">{title}</div>
                    <div className="text-[11px] text-trigger-slate mt-0.5">{body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <VaultPhone />
        </div>

        <div className="bg-trigger-tint/50 rounded-3xl p-8 grid sm:grid-cols-[1fr,auto] gap-8 items-center">
          <div>
            <p className="text-trigger-green font-bold text-xs tracking-widest mb-3">YOUR ACCOUNT</p>
            <h3 className="text-2xl font-extrabold text-trigger-ink">Secure Account Deletion</h3>
            <p className="text-sm text-trigger-slate mt-3 leading-relaxed">
              You can permanently delete your Trigger account anytime. Your data will be removed from our
              active systems as per our data retention policy.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-5">
              {DELETE_ITEMS.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-white text-trigger-green flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-trigger-ink">{title}</div>
                    <div className="text-[11px] text-trigger-slate mt-0.5">{body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <DeletePhone />
        </div>
      </div>
    </section>
  )
}
