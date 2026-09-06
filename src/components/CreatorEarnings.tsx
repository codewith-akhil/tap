import Avatar from './Avatar'
import PhoneFrame, { StatusBar } from './PhoneFrame'
import { BoltIcon, ShieldCheckIcon, ChartIcon, CalendarIcon, CoinsIcon, CheckShieldIcon, ArrowRightIcon } from './Icons'

const EARNINGS = [
  { name: 'Live Stream Gift', time: '4 Sep 2026, 10:24 PM', amount: '+ ₹1,200' },
  { name: 'Paid Stream', time: '4 Sep 2026, 08:15 PM', amount: '+ ₹800' },
  { name: 'Tips', time: '4 Sep 2026, 07:10 PM', amount: '+ ₹350' },
]

const STEPS = [
  ['Go Live & Earn', 'Receive gifts, tips and paid stream earnings.'],
  ['Earnings in Wallet', 'Your earnings are added to your Trigger wallet.'],
  ['Automatic Payout', 'Payouts are processed every day at 6:00 PM IST.'],
  ['Receive in Bank', 'Amount is sent to your registered bank account.'],
]

function WalletPhone() {
  return (
    <PhoneFrame>
      <StatusBar dark />
      <div className="bg-trigger-greendeep text-white flex items-center gap-3 px-4 py-3">
        <span>←</span>
        <span className="font-semibold text-sm flex-1 text-center -ml-4">Wallet</span>
        <span>⋮</span>
      </div>
      <div className="p-4 space-y-4 flex-1 overflow-hidden">
        <div className="bg-trigger-green rounded-2xl p-4 text-white">
          <div className="text-xs text-white/80">Total Balance</div>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-extrabold">₹12,580</div>
            <span>›</span>
          </div>
          <div className="flex gap-2 mt-3">
            <div className="flex-1 bg-white text-trigger-green text-xs font-semibold rounded-lg py-2 text-center">
              Withdraw
            </div>
            <div className="flex-1 bg-white/15 text-white text-xs font-semibold rounded-lg py-2 text-center">
              Transaction
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-xs font-semibold text-trigger-ink">
            <span>Earnings Overview</span>
            <span className="text-trigger-slate">This Week ▾</span>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-3 text-center">
            <div>
              <div className="font-bold text-sm text-trigger-ink">₹18,450</div>
              <div className="text-[10px] text-trigger-slate">Total Earnings</div>
            </div>
            <div>
              <div className="font-bold text-sm text-trigger-ink">₹5,870</div>
              <div className="text-[10px] text-trigger-slate">Withdrawn</div>
            </div>
            <div>
              <div className="font-bold text-sm text-trigger-ink">₹12,580</div>
              <div className="text-[10px] text-trigger-slate">Available</div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-xs font-semibold text-trigger-ink mb-2">
            <span>Recent Earnings</span>
            <span className="text-trigger-green">See all</span>
          </div>
          <div className="space-y-3">
            {EARNINGS.map((e) => (
              <div key={e.name} className="flex items-center gap-2.5">
                <Avatar name={e.name} size={30} />
                <div className="flex-1 min-w-0">
                  <div className="text-[12px] font-semibold text-trigger-ink truncate">{e.name}</div>
                  <div className="text-[10px] text-trigger-slate">{e.time}</div>
                </div>
                <span className="text-[12px] font-semibold text-trigger-green shrink-0">{e.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around border-t border-black/5 py-2.5 text-[10px] text-trigger-slate font-medium">
        <span>Home</span>
        <span>Live</span>
        <div className="w-9 h-9 rounded-full bg-trigger-green flex items-center justify-center text-white text-lg -mt-4">
          +
        </div>
        <span className="text-trigger-green font-semibold">Wallet</span>
        <span>Profile</span>
      </div>
    </PhoneFrame>
  )
}

export default function CreatorEarnings() {
  return (
    <section id="pricing" className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-trigger-green font-bold text-sm tracking-widest mb-4">CREATOR EARNINGS</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-trigger-ink leading-[1.1]">
            Same Day Payments,
            <br />
            <span className="text-trigger-green">Every Day at 6 PM</span>
          </h2>
          <p className="mt-5 text-trigger-slate leading-relaxed max-w-lg">
            Your talent deserves instant rewards. Earn from live streams, receive payments in your wallet, and
            get payouts to your bank account every day at 6:00 PM IST. Simple, transparent and creator-friendly.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-8 max-w-md">
            {[
              [BoltIcon, 'Fast Payouts', 'Processed daily at 6:00 PM IST'],
              [ShieldCheckIcon, 'Secure Transfers', 'Safe and reliable payments'],
              [ChartIcon, 'Transparent Earnings', 'Track every transaction'],
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
        </div>
        <div className="flex justify-center relative">
          <p className="font-script text-2xl text-trigger-green absolute -top-8 left-2 hidden lg:block">
            Your Passion Pays
          </p>
          <p className="font-script text-2xl text-trigger-green absolute -top-8 right-0 hidden lg:block rotate-3">
            Create Connect Earn
          </p>
          <WalletPhone />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 grid sm:grid-cols-3 gap-6">
        {[
          [CalendarIcon, 'Payout Schedule', 'Every Day at 6:00 PM IST', 'Eligible earnings are processed and sent to your registered bank account every day at 6:00 PM IST.'],
          [CoinsIcon, 'Low Platform Charge', '9%', 'Only 9% platform charge on withdrawals. You keep more of what you earn.'],
          [ShieldCheckIcon, 'Safe & Compliant', '', 'Secure payments through trusted banking partners. All transactions are monitored for your safety.'],
        ].map(([Icon, title, big, body]: any) => (
          <div key={title} className="bg-trigger-tint rounded-2xl p-6">
            <div className="w-11 h-11 rounded-full bg-white text-trigger-green flex items-center justify-center mb-4">
              <Icon />
            </div>
            <div className="font-semibold text-sm text-trigger-ink">{title}</div>
            {big && <div className="text-2xl font-extrabold text-trigger-green mt-1">{big}</div>}
            <p className="text-sm text-trigger-slate mt-2 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16">
        <p className="text-trigger-green font-bold text-xs tracking-widest mb-6">HOW IT WORKS</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map(([title, body], i) => (
            <div key={title} className="flex gap-4">
              <div className="w-9 h-9 rounded-full bg-trigger-tint text-trigger-green font-bold flex items-center justify-center shrink-0">
                {i + 1}
              </div>
              <div>
                <div className="font-semibold text-sm text-trigger-ink">{title}</div>
                <p className="text-xs text-trigger-slate mt-1 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-trigger-slate text-center mt-12">
          Payout times may be affected by bank processing, verification, weekends, holidays or regulatory
          requirements.
        </p>
      </div>
    </section>
  )
}
