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
  const lighterColor = adjustColor(color, 15)

  return (
    <g className={className}>
      {/* Main top volume */}
      <ellipse cx="150" cy="55" rx="58" ry="30" fill={color} />

      {/* Textured top */}
      <path d="M 98 60 Q 105 38, 122 32 Q 132 30, 142 35 L 138 60 Z" fill={color} />
      <path d="M 132 32 Q 148 26, 162 30 Q 172 32, 178 38 L 168 60 Z" fill={color} />
      <path d="M 168 35 Q 185 30, 200 42 Q 206 50, 204 62 L 185 65 Z" fill={color} />

      {/* Side-swept bangs - STOP AT y=58 MAX */}
      <path d="M 95 52 Q 85 62, 88 85 Q 90 105, 95 120 L 102 118 Q 98 102, 98 85 Q 98 65, 105 55 Z" fill={color} />
      <path d="M 112 45 Q 125 50, 140 54 Q 158 58, 175 58 Q 185 56, 188 52 Q 172 55, 152 55 Q 132 52, 118 45 Z" fill={color} />

      {/* Short sides - stays OUTSIDE face */}
      <path d="M 95 68 Q 88 80, 90 100 Q 92 115, 98 125 L 105 122 Q 100 112, 98 100 Q 96 85, 100 72 Z" fill={color} />
      <path d="M 205 68 Q 212 80, 210 100 Q 208 115, 202 125 L 195 122 Q 200 112, 202 100 Q 204 85, 200 72 Z" fill={color} />

      {/* Texture lines */}
      <path d="M 110 55 L 115 72" stroke={darkerColor} strokeWidth="1.5" opacity="0.3" />
      <path d="M 130 50 L 135 68" stroke={darkerColor} strokeWidth="1.5" opacity="0.3" />
      <path d="M 158 48 L 162 65" stroke={darkerColor} strokeWidth="1.5" opacity="0.3" />

      {/* Highlights */}
      <path d="M 120 42 Q 145 34, 172 42" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="106" cy="88" rx="4" ry="8" fill={lighterColor} opacity="0.15" />
    </g>
  )
}

export function SideBraid({ color = '#8B4513', className = '' }: HairProps) {
  const darkerColor = adjustColor(color, -30)
  const lighterColor = adjustColor(color, 20)

  return (
    <g className={className}>
      {/* Main hair mass covering top of head */}
      <ellipse cx="148" cy="58" rx="56" ry="32" fill={color} />

      {/* Crown volume - fuller coverage */}
      <path d="M 95 55 Q 110 32, 150 30 Q 190 32, 205 55 Q 185 45, 150 42 Q 115 45, 95 55 Z" fill={color} />

      {/* Hair wrapping around sides of head */}
      <path
        d="M 95 52
           Q 88 68, 92 88
           Q 95 72, 100 58
           Z"
        fill={color}
      />
      <path
        d="M 205 52
           Q 212 68, 208 88
           Q 205 72, 200 58
           Z"
        fill={color}
      />

      {/* Hair flowing to left side into braid */}
      <path d="M 92 55 Q 78 75, 75 110 Q 72 145, 80 165 L 105 160 Q 100 145, 102 115 Q 105 82, 110 60 Z" fill={color} />

      {/* Right side tucked behind ear */}
      <path d="M 200 58 Q 212 78, 208 108 Q 206 130, 200 145 L 188 140 Q 192 125, 194 108 Q 198 82, 192 62 Z" fill={color} />

      {/* Braid segments */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const y = 168 + i * 20
        const offset = i % 2 === 0 ? -4 : 4
        return (
          <g key={i}>
            <ellipse cx={90 + offset} cy={y} rx="14" ry="12" fill={color} />
            <path d={`M ${83 + offset} ${y - 6} Q ${90 + offset} ${y}, ${97 + offset} ${y - 6}`} fill="none" stroke={darkerColor} strokeWidth="1.5" opacity="0.4" />
          </g>
        )
      })}

      {/* Hair tie */}
      <ellipse cx="90" cy="332" rx="10" ry="6" fill="#FF69B4" />
      <ellipse cx="88" cy="330" rx="3" ry="2" fill="rgba(255,255,255,0.4)" />

      {/* Braid tail */}
      <path d="M 83 338 Q 80 348, 86 358 Q 92 368, 88 378 L 96 378 Q 100 368, 96 358 Q 92 348, 98 338 Z" fill={color} />

      {/* Bangs - STOP AT y=58 MAX (side swept style) */}
      <path d="M 115 45 Q 135 38, 158 40 Q 172 42, 185 50 Q 180 55, 175 58 Q 160 54, 145 56 Q 130 54, 120 58 Q 118 52, 115 45 Z" fill={color} />

      {/* Highlights */}
      <path d="M 115 42 Q 148 32, 180 45" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="84" cy="185" rx="4" ry="6" fill={lighterColor} opacity="0.2" />
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
