const PALETTE = ['#0E7C3D', '#18A651', '#2E9E6B', '#0B5F32', '#3AB57C', '#0F6B3A']

function hueFor(name: string) {
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash)
  return PALETTE[Math.abs(hash) % PALETTE.length]
}

type AvatarProps = {
  name: string
  size?: number
  ring?: boolean
}

export default function Avatar({ name, size = 40, ring = false }: AvatarProps) {
  const initials = name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
  const bg = hueFor(name)
  return (
    <div
      className={`flex items-center justify-center rounded-full text-white font-semibold shrink-0 ${ring ? 'ring-2 ring-white' : ''}`}
      style={{ width: size, height: size, background: bg, fontSize: size * 0.38 }}
      aria-label={name}
    >
      {initials}
    </div>
  )
}
