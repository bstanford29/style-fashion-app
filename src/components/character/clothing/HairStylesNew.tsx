'use client'

/**
 * New Hair Style SVG Components
 * ViewBox: 300x800
 *
 * NEW CHARACTER PROPORTIONS:
 * - Head: ellipse cx=150, cy=90, rx=50, ry=55
 * - Head top: ~y=35
 * - Head center: y=90
 * - Head bottom: ~y=145
 * - Ears: y=95
 * - Head sides: x=100 to x=200
 */

interface HairProps {
  color?: string
  className?: string
}

function adjustColor(hex: string, amount: number): string {
  const num = parseInt(hex.replace('#', ''), 16)
  const r = Math.min(255, Math.max(0, (num >> 16) + amount))
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amount))
  const b = Math.min(255, Math.max(0, (num & 0x0000ff) + amount))
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
}

export function SpaceBuns({ color = '#4A3728', className = '' }: HairProps) {
  const darkerColor = adjustColor(color, -30)
  const lighterColor = adjustColor(color, 20)

  return (
    <g className={className}>
      {/* Top of head base */}
      <ellipse cx="150" cy="50" rx="52" ry="25" fill={color} />

      {/* Left space bun */}
      <circle cx="85" cy="62" r="32" fill={color} />
      <path d="M 75 52 Q 80 47, 90 49 Q 95 52, 92 62 Q 88 67, 78 65 Q 72 59, 75 52" fill="none" stroke={darkerColor} strokeWidth="2" opacity="0.4" />
      <ellipse cx="78" cy="55" rx="8" ry="6" fill={lighterColor} opacity="0.25" />

      {/* Right space bun */}
      <circle cx="215" cy="62" r="32" fill={color} />
      <path d="M 225 52 Q 220 47, 210 49 Q 205 52, 208 62 Q 212 67, 222 65 Q 228 59, 225 52" fill="none" stroke={darkerColor} strokeWidth="2" opacity="0.4" />
      <ellipse cx="222" cy="55" rx="8" ry="6" fill={lighterColor} opacity="0.25" />

      {/* Hair connecting buns to head */}
      <path d="M 105 55 Q 95 60, 90 72 L 96 78 Q 102 68, 112 62 Z" fill={color} />
      <path d="M 195 55 Q 205 60, 210 72 L 204 78 Q 198 68, 188 62 Z" fill={color} />

      {/* Center parting */}
      <path d="M 150 30 L 150 60" stroke={darkerColor} strokeWidth="1.5" opacity="0.3" />

      {/* Side hair framing face - stays OUTSIDE face (x<100, x>200) */}
      <path d="M 95 55 Q 85 72, 88 100 Q 90 130, 95 155 L 102 152 Q 98 125, 98 100 Q 98 75, 105 58 Z" fill={color} />
      <path d="M 205 55 Q 215 72, 212 100 Q 210 130, 205 155 L 198 152 Q 202 125, 202 100 Q 202 75, 195 58 Z" fill={color} />

      {/* Soft bangs - STOP AT y=58 MAX */}
      <path d="M 122 45 Q 135 38, 150 40 Q 165 38, 178 45 Q 175 52, 172 58 Q 162 54, 150 56 Q 138 54, 128 58 Q 125 52, 122 45 Z" fill={color} />

      {/* Top highlight */}
      <path d="M 135 45 Q 150 38, 165 45" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" strokeLinecap="round" />
    </g>
  )
}

export function PixieCut({ color = '#2C1810', className = '' }: HairProps) {
  const darkerColor = adjustColor(color, -25)

  return (
    <g className={className}>
      {/* Top of head - matching Space Buns positioning */}
      <ellipse cx="150" cy="50" rx="52" ry="25" fill={color} />

      {/* Textured top volume */}
      <path d="M 100 55 Q 108 38, 125 32 Q 140 28, 155 32 L 150 55 Z" fill={color} />
      <path d="M 145 32 Q 165 28, 180 35 Q 195 42, 200 55 L 175 55 Z" fill={color} />

      {/* Side hair - stays OUTSIDE face (x<95, x>205) */}
      <path d="M 95 55 Q 85 72, 88 95 Q 90 115, 95 130 L 102 128 Q 98 112, 98 95 Q 98 75, 105 58 Z" fill={color} />
      <path d="M 205 55 Q 215 72, 212 95 Q 210 115, 205 130 L 198 128 Q 202 112, 202 95 Q 202 75, 195 58 Z" fill={color} />

      {/* Bangs - matching Space Buns: y=45 to y=58 */}
      <path d="M 122 45 Q 135 38, 150 40 Q 165 38, 178 45 Q 175 52, 172 58 Q 162 54, 150 56 Q 138 54, 128 58 Q 125 52, 122 45 Z" fill={color} />

      {/* Texture lines */}
      <path d="M 115 50 L 118 65" stroke={darkerColor} strokeWidth="1.5" opacity="0.3" />
      <path d="M 140 45 L 142 60" stroke={darkerColor} strokeWidth="1.5" opacity="0.3" />
      <path d="M 165 48 L 168 62" stroke={darkerColor} strokeWidth="1.5" opacity="0.3" />

      {/* Highlight */}
      <path d="M 135 45 Q 150 38, 165 45" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="4" strokeLinecap="round" />
    </g>
  )
}

export function SideBraid({ color = '#8B4513', className = '' }: HairProps) {
  const darkerColor = adjustColor(color, -30)
  const lighterColor = adjustColor(color, 20)

  return (
    <g className={className}>
      {/* Top of head - matching Space Buns positioning */}
      <ellipse cx="150" cy="50" rx="52" ry="25" fill={color} />

      {/* Hair flowing to left side into braid - starts OUTSIDE face (x<95) */}
      <path d="M 95 55 Q 78 80, 75 120 Q 72 160, 82 185 L 105 180 Q 98 158, 100 125 Q 102 90, 108 60 Z" fill={color} />

      {/* Right side hair - stays OUTSIDE face (x>205) */}
      <path d="M 205 55 Q 215 72, 212 100 Q 210 130, 205 155 L 198 152 Q 202 125, 202 100 Q 202 75, 195 58 Z" fill={color} />

      {/* Braid segments */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const y = 188 + i * 20
        const offset = i % 2 === 0 ? -4 : 4
        return (
          <g key={i}>
            <ellipse cx={88 + offset} cy={y} rx="14" ry="12" fill={color} />
            <path d={`M ${81 + offset} ${y - 6} Q ${88 + offset} ${y}, ${95 + offset} ${y - 6}`} fill="none" stroke={darkerColor} strokeWidth="1.5" opacity="0.4" />
          </g>
        )
      })}

      {/* Hair tie */}
      <ellipse cx="88" cy="352" rx="10" ry="6" fill="#FF69B4" />
      <ellipse cx="86" cy="350" rx="3" ry="2" fill="rgba(255,255,255,0.4)" />

      {/* Braid tail */}
      <path d="M 81 358 Q 78 368, 84 378 Q 90 388, 86 398 L 94 398 Q 98 388, 94 378 Q 90 368, 96 358 Z" fill={color} />

      {/* Bangs - matching Space Buns: y=45 to y=58 */}
      <path d="M 122 45 Q 135 38, 150 40 Q 165 38, 178 45 Q 175 52, 172 58 Q 162 54, 150 56 Q 138 54, 128 58 Q 125 52, 122 45 Z" fill={color} />

      {/* Highlight */}
      <path d="M 135 45 Q 150 38, 165 45" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="82" cy="205" rx="4" ry="6" fill={lighterColor} opacity="0.2" />
    </g>
  )
}

// Thumbnails
export function SpaceBunsThumbnail({ color = '#4A3728' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <ellipse cx="25" cy="22" rx="12" ry="8" fill={color} />
      <circle cx="10" cy="15" r="8" fill={color} />
      <circle cx="40" cy="15" r="8" fill={color} />
      <path d="M 20 18 Q 25 15, 30 18" fill={color} />
    </svg>
  )
}

export function PixieCutThumbnail({ color = '#2C1810' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <ellipse cx="25" cy="20" rx="16" ry="12" fill={color} />
      <path d="M 12 22 Q 8 28, 12 38 L 18 35 Q 16 28, 18 22 Z" fill={color} />
      <path d="M 15 18 Q 20 25, 35 28 L 38 22 Q 25 20, 18 15 Z" fill={color} />
    </svg>
  )
}

export function SideBraidThumbnail({ color = '#8B4513' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <ellipse cx="25" cy="15" rx="14" ry="10" fill={color} />
      <path d="M 12 15 Q 8 20, 10 28 L 15 26 Q 14 22, 16 18 Z" fill={color} />
      <ellipse cx="12" cy="32" rx="4" ry="3" fill={color} />
      <ellipse cx="10" cy="38" rx="4" ry="3" fill={color} />
      <ellipse cx="12" cy="44" rx="4" ry="3" fill={color} />
      <circle cx="11" cy="48" r="2" fill="#FF69B4" />
    </svg>
  )
}

export default { SpaceBuns, PixieCut, SideBraid }
