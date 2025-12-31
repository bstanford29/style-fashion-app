'use client'

/**
 * New Accessory SVG Components
 * ViewBox: 300x800
 * Head: y=40-140, center x=150
 * Back: y=170-360 (for backpack)
 */

interface AccessoryProps {
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

export function Tiara({ color = '#FFD700', className = '' }: AccessoryProps) {
  const darkerColor = adjustColor(color, -30)
  const lighterColor = adjustColor(color, 50)

  return (
    <g className={className}>
      {/* Base band */}
      <path
        d="M 105 55 Q 115 50, 150 48 Q 185 50, 195 55 Q 190 60, 150 58 Q 110 60, 105 55 Z"
        fill={color}
      />
      <path
        d="M 105 55 Q 115 50, 150 48 Q 185 50, 195 55"
        fill="none"
        stroke={lighterColor}
        strokeWidth="1.5"
        opacity="0.6"
      />

      {/* Center spire (tallest) */}
      <path
        d="M 145 48 L 150 20 L 155 48 Z"
        fill={color}
      />
      <path d="M 148 45 L 150 25 L 152 45" fill={lighterColor} opacity="0.4" />
      {/* Center jewel */}
      <circle cx="150" cy="35" r="4" fill="#E0115F" />
      <circle cx="149" cy="34" r="1.5" fill="white" opacity="0.6" />

      {/* Left inner spire */}
      <path d="M 128 50 L 132 30 L 136 50 Z" fill={color} />
      <path d="M 130 48 L 132 35 L 134 48" fill={lighterColor} opacity="0.4" />
      <circle cx="132" cy="40" r="2.5" fill="#00CED1" />
      <circle cx="131" cy="39" r="1" fill="white" opacity="0.5" />

      {/* Right inner spire */}
      <path d="M 164 50 L 168 30 L 172 50 Z" fill={color} />
      <path d="M 166 48 L 168 35 L 170 48" fill={lighterColor} opacity="0.4" />
      <circle cx="168" cy="40" r="2.5" fill="#00CED1" />
      <circle cx="167" cy="39" r="1" fill="white" opacity="0.5" />

      {/* Left outer spire (shorter) */}
      <path d="M 112 52 L 115 38 L 118 52 Z" fill={color} />
      <circle cx="115" cy="44" r="2" fill="#9370DB" />
      <circle cx="114" cy="43" r="0.8" fill="white" opacity="0.5" />

      {/* Right outer spire (shorter) */}
      <path d="M 182 52 L 185 38 L 188 52 Z" fill={color} />
      <circle cx="185" cy="44" r="2" fill="#9370DB" />
      <circle cx="184" cy="43" r="0.8" fill="white" opacity="0.5" />

      {/* Small decorative dots along band */}
      <circle cx="122" cy="52" r="1.5" fill={lighterColor} />
      <circle cx="140" cy="50" r="1.5" fill={lighterColor} />
      <circle cx="160" cy="50" r="1.5" fill={lighterColor} />
      <circle cx="178" cy="52" r="1.5" fill={lighterColor} />

      {/* Band shadow */}
      <path
        d="M 108 58 Q 150 62, 192 58"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1"
        opacity="0.3"
      />
    </g>
  )
}

export function Backpack({ color = '#FF6B6B', className = '' }: AccessoryProps) {
  const darkerColor = adjustColor(color, -40)
  const lighterColor = adjustColor(color, 30)

  return (
    <g className={className}>
      {/* Straps going over shoulders - behind character but visible at edges */}
      {/* Left strap */}
      <path
        d="M 125 180 Q 115 200, 110 240 Q 108 280, 115 320"
        fill="none"
        stroke={darkerColor}
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M 125 180 Q 115 200, 110 240 Q 108 280, 115 320"
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Right strap */}
      <path
        d="M 175 180 Q 185 200, 190 240 Q 192 280, 185 320"
        fill="none"
        stroke={darkerColor}
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M 175 180 Q 185 200, 190 240 Q 192 280, 185 320"
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Main bag body - behind the character */}
      <path
        d="M 115 200 Q 100 210, 95 260 Q 92 320, 100 370 Q 110 390, 150 395 Q 190 390, 200 370 Q 208 320, 205 260 Q 200 210, 185 200 Z"
        fill={color}
        opacity="0.85"
      />

      {/* Bag shadow/depth */}
      <path
        d="M 105 220 Q 100 270, 105 350"
        fill="none"
        stroke={darkerColor}
        strokeWidth="3"
        opacity="0.3"
        strokeLinecap="round"
      />

      {/* Front pocket */}
      <path
        d="M 125 280 Q 120 290, 122 330 Q 125 355, 150 358 Q 175 355, 178 330 Q 180 290, 175 280 Q 165 275, 150 275 Q 135 275, 125 280 Z"
        fill={darkerColor}
        opacity="0.6"
      />

      {/* Pocket zipper line */}
      <path
        d="M 130 285 Q 150 282, 170 285"
        fill="none"
        stroke={lighterColor}
        strokeWidth="2"
        opacity="0.5"
      />

      {/* Zipper pull */}
      <rect x="148" y="280" width="4" height="8" rx="1" fill={lighterColor} opacity="0.7" />

      {/* Top flap hint */}
      <path
        d="M 120 205 Q 150 195, 180 205"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.4"
      />

      {/* Highlight */}
      <ellipse cx="170" cy="250" rx="15" ry="25" fill={lighterColor} opacity="0.15" />
    </g>
  )
}

export function Glasses({ color = '#1a1a1a', className = '' }: AccessoryProps) {
  const lighterColor = adjustColor(color, 60)

  return (
    <g className={className}>
      {/* Left lens frame */}
      <ellipse
        cx="128"
        cy="95"
        rx="20"
        ry="16"
        fill="none"
        stroke={color}
        strokeWidth="3"
      />
      {/* Left lens */}
      <ellipse
        cx="128"
        cy="95"
        rx="17"
        ry="13"
        fill="rgba(200, 220, 255, 0.15)"
      />
      {/* Left lens reflection */}
      <path
        d="M 118 88 Q 122 85, 128 86"
        fill="none"
        stroke="white"
        strokeWidth="2"
        opacity="0.4"
        strokeLinecap="round"
      />

      {/* Right lens frame */}
      <ellipse
        cx="172"
        cy="95"
        rx="20"
        ry="16"
        fill="none"
        stroke={color}
        strokeWidth="3"
      />
      {/* Right lens */}
      <ellipse
        cx="172"
        cy="95"
        rx="17"
        ry="13"
        fill="rgba(200, 220, 255, 0.15)"
      />
      {/* Right lens reflection */}
      <path
        d="M 162 88 Q 166 85, 172 86"
        fill="none"
        stroke="white"
        strokeWidth="2"
        opacity="0.4"
        strokeLinecap="round"
      />

      {/* Bridge */}
      <path
        d="M 148 95 Q 150 90, 152 95"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Left temple arm */}
      <path
        d="M 108 92 Q 100 92, 95 95 Q 88 100, 85 105"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Left temple tip */}
      <path
        d="M 85 105 Q 82 112, 85 118"
        fill="none"
        stroke={lighterColor}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Right temple arm */}
      <path
        d="M 192 92 Q 200 92, 205 95 Q 212 100, 215 105"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Right temple tip */}
      <path
        d="M 215 105 Q 218 112, 215 118"
        fill="none"
        stroke={lighterColor}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Nose pads (subtle) */}
      <ellipse cx="142" cy="100" rx="2" ry="3" fill={lighterColor} opacity="0.4" />
      <ellipse cx="158" cy="100" rx="2" ry="3" fill={lighterColor} opacity="0.4" />
    </g>
  )
}

// Thumbnails
export function TiaraThumbnail({ color = '#FFD700' }: { color?: string }) {
  const lighterColor = adjustColor(color, 50)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      {/* Band */}
      <path d="M 8 35 Q 25 30, 42 35 Q 38 40, 25 38 Q 12 40, 8 35 Z" fill={color} />
      {/* Center spire */}
      <path d="M 23 32 L 25 10 L 27 32 Z" fill={color} />
      <circle cx="25" cy="20" r="3" fill="#E0115F" />
      {/* Side spires */}
      <path d="M 14 34 L 16 20 L 18 34 Z" fill={color} />
      <circle cx="16" cy="26" r="2" fill="#00CED1" />
      <path d="M 32 34 L 34 20 L 36 34 Z" fill={color} />
      <circle cx="34" cy="26" r="2" fill="#00CED1" />
      {/* Decorations */}
      <circle cx="21" cy="33" r="1" fill={lighterColor} />
      <circle cx="29" cy="33" r="1" fill={lighterColor} />
    </svg>
  )
}

export function BackpackThumbnail({ color = '#FF6B6B' }: { color?: string }) {
  const darkerColor = adjustColor(color, -40)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      {/* Straps */}
      <path d="M 18 8 Q 12 15, 10 25" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M 32 8 Q 38 15, 40 25" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
      {/* Main body */}
      <path d="M 10 15 Q 5 20, 5 30 Q 5 42, 15 46 Q 25 48, 35 46 Q 45 42, 45 30 Q 45 20, 40 15 Z" fill={color} />
      {/* Pocket */}
      <path d="M 15 28 Q 13 32, 15 40 Q 25 42, 35 40 Q 37 32, 35 28 Q 28 26, 15 28 Z" fill={darkerColor} opacity="0.6" />
      {/* Zipper */}
      <path d="M 18 30 Q 25 28, 32 30" fill="none" stroke="white" strokeWidth="1" opacity="0.5" />
    </svg>
  )
}

export function GlassesThumbnail({ color = '#1a1a1a' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      {/* Left lens */}
      <ellipse cx="15" cy="25" rx="10" ry="8" fill="none" stroke={color} strokeWidth="2" />
      <ellipse cx="15" cy="25" rx="8" ry="6" fill="rgba(200, 220, 255, 0.2)" />
      {/* Right lens */}
      <ellipse cx="35" cy="25" rx="10" ry="8" fill="none" stroke={color} strokeWidth="2" />
      <ellipse cx="35" cy="25" rx="8" ry="6" fill="rgba(200, 220, 255, 0.2)" />
      {/* Bridge */}
      <path d="M 25 25 Q 25 22, 25 25" fill="none" stroke={color} strokeWidth="2" />
      {/* Temple arms */}
      <path d="M 5 24 L 2 28" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M 45 24 L 48 28" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Reflections */}
      <path d="M 10 22 Q 13 20, 16 21" fill="none" stroke="white" strokeWidth="1.5" opacity="0.4" />
      <path d="M 30 22 Q 33 20, 36 21" fill="none" stroke="white" strokeWidth="1.5" opacity="0.4" />
    </svg>
  )
}

export default { Tiara, Backpack, Glasses }
