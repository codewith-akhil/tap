type IconProps = { className?: string }

const base = 'w-5 h-5'

export const BoltIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  </svg>
)

export const ShieldCheckIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3 4 6v6c0 4.4 3.2 8.2 8 9 4.8-.8 8-4.6 8-9V6l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

export const ChartIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20V10M12 20V4M20 20v-7" />
  </svg>
)

export const CalendarIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
)

export const CoinsIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="9" cy="7" rx="6" ry="3" />
    <path d="M3 7v5c0 1.7 2.7 3 6 3s6-1.3 6-3V7" />
    <path d="M9 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
    <ellipse cx="15" cy="12" rx="6" ry="3" />
  </svg>
)

export const LockIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
)

export const EyeOffIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3l18 18" />
    <path d="M10.6 5.1A10.9 10.9 0 0 1 12 5c5 0 9 4 10 7-.4 1.2-1.2 2.6-2.4 3.8M6.3 6.3C4.1 7.8 2.6 9.9 2 12c1 3 5 7 10 7 1.5 0 2.9-.3 4.2-.9" />
    <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
  </svg>
)

export const AtIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-4 7.5" />
  </svg>
)

export const UserOffIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
    <path d="M2 2l20 20" />
  </svg>
)

export const CameraLockIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <circle cx="12" cy="13.5" r="3.2" />
    <path d="M8 7l1.5-3h5L16 7" />
  </svg>
)

export const TrashIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 7h16" />
    <path d="M9 7V4h6v3" />
    <path d="M6 7l1 13h10l1-13" />
  </svg>
)

export const CheckShieldIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3 4 6v6c0 4.4 3.2 8.2 8 9 4.8-.8 8-4.6 8-9V6l-8-3Z" />
  </svg>
)

export const ClockIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
)

export const DocumentIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 3h7l5 5v13H7z" />
    <path d="M14 3v5h5M9 13h6M9 17h6" />
  </svg>
)

export const VideoIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="14" height="12" rx="2" />
    <path d="m16 10 6-4v12l-6-4" />
  </svg>
)

export const MicIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="2" width="6" height="12" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0M12 18v4" />
  </svg>
)

export const MapPinIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12Z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
)

export const CrownIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 8 4 3 5-7 5 7 4-3-2 10H5L3 8Z" />
  </svg>
)

export const ArrowRightIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const HeartIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 21s-7.5-4.6-10-9.3C.4 8.1 2.3 4.5 6 4c2.1-.3 4 .8 6 3 2-2.2 3.9-3.3 6-3 3.7.5 5.6 4.1 4 7.7C19.5 16.4 12 21 12 21Z" />
  </svg>
)

export const PhoneIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 4h4l1.5 5-2.5 2a13 13 0 0 0 6 6l2-2.5 5 1.5v4c0 1-1 1.6-2 1.4C10 20.6 3.4 14 2.6 5c-.1-1 .5-1.9 1.4-2Z" />
  </svg>
)

export const SendIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M3 11.5 21 3l-6.5 18-3.6-7.4L3 11.5Z" />
  </svg>
)

export const PlayIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M7 4.5v15l13-7.5-13-7.5Z" />
  </svg>
)

export const BellIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" />
    <path d="M10 20a2 2 0 0 0 4 0" />
  </svg>
)

export const SearchIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
)

export const WifiIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 18.5a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2Zm-4.6-4a6.5 6.5 0 0 1 9.2 0l-1.4 1.4a4.5 4.5 0 0 0-6.4 0Zm-3-3.6a11 11 0 0 1 15.2 0l-1.4 1.4a9 9 0 0 0-12.4 0Z" />
  </svg>
)

export const SignalIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <rect x="3" y="14" width="3" height="6" rx="0.5" />
    <rect x="8" y="10" width="3" height="10" rx="0.5" />
    <rect x="13" y="6" width="3" height="14" rx="0.5" />
    <rect x="18" y="3" width="3" height="17" rx="0.5" />
  </svg>
)

export const BatteryIcon = ({ className = base }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={1.6}>
    <rect x="2" y="8" width="18" height="8" rx="2" />
    <rect x="4" y="10" width="12" height="4" fill="currentColor" stroke="none" />
    <path d="M22 10v4" strokeLinecap="round" />
  </svg>
)
