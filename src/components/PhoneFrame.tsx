import type { ReactNode } from 'react'
import { WifiIcon, SignalIcon, BatteryIcon } from './Icons'

type StatusBarProps = { time?: string; dark?: boolean }

export function StatusBar({ time = '9:30', dark = false }: StatusBarProps) {
  const color = dark ? 'text-white' : 'text-trigger-ink'
  return (
    <div className={`flex items-center justify-between px-5 pt-3 pb-1 text-[13px] font-semibold ${color}`}>
      <span>{time}</span>
      <div className="flex items-center gap-1.5">
        <WifiIcon className="w-3.5 h-3.5" />
        <SignalIcon className="w-3.5 h-3.5" />
        <BatteryIcon className="w-4 h-4" />
      </div>
    </div>
  )
}

type PhoneFrameProps = {
  children: ReactNode
  className?: string
}

export default function PhoneFrame({ children, className = '' }: PhoneFrameProps) {
  return (
    <div
      className={`relative w-[280px] h-[572px] rounded-[42px] bg-black p-[10px] shadow-phone shrink-0 ${className}`}
    >
      <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-white flex flex-col">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl z-20" />
        {children}
      </div>
    </div>
  )
}
