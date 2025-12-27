'use client'

/**
 * Hair Style SVG Components
 * All positioned to fit the 300x800 character viewBox
 * Head center: x=150, y=60
 * Head size: ~84 units wide, ~100 units tall
 */

interface HairProps {
  color?: string
  className?: string
}

// ============================================================================
// 1. Long Straight Hair
// ============================================================================
export function LongStraightHair({ color = '#4A3728', className = '' }: HairProps) {
  return (
    <g className={className} data-item="long-straight-hair">
      {/* Back hair (behind head) */}
      <path
        d="M 100 30
           Q 90 50, 85 100
           Q 80 200, 85 280
           Q 88 320, 95 350
           L 105 350
           Q 100 320, 98 280
           Q 95 200, 100 100
           Q 105 50, 110 30
           Z"
        fill={color}
      />
      <path
        d="M 200 30
           Q 210 50, 215 100
           Q 220 200, 215 280
           Q 212 320, 205 350
           L 195 350
           Q 200 320, 202 280
           Q 205 200, 200 100
           Q 195 50, 190 30
           Z"
        fill={color}
      />

      {/* Top of head hair */}
      <ellipse cx="150" cy="25" rx="50" ry="22" fill={color} />

      {/* Side hair framing face */}
      <path
        d="M 108 25
           Q 95 40, 100 70
           Q 102 90, 108 110
           L 115 110
           Q 112 90, 112 70
           Q 112 40, 118 25
           Z"
        fill={color}
      />
      <path
        d="M 192 25
           Q 205 40, 200 70
           Q 198 90, 192 110
           L 185 110
           Q 188 90, 188 70
           Q 188 40, 182 25
           Z"
        fill={color}
      />

      {/* Bangs */}
      <path
        d="M 120 18
           Q 135 28, 150 25
           Q 165 28, 180 18
           Q 175 35, 170 42
           Q 160 38, 150 40
           Q 140 38, 130 42
           Q 125 35, 120 18
           Z"
        fill={color}
      />

      {/* Highlight */}
      <path
        d="M 125 20 Q 140 25, 145 22"
        fill="none"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>
  )
}

// ============================================================================
// 2. Short Bob Hair
// ============================================================================
export function ShortBobHair({ color = '#2C1810', className = '' }: HairProps) {
  return (
    <g className={className} data-item="short-bob-hair">
      {/* Main bob shape */}
      <path
        d="M 100 15
           Q 85 25, 85 60
           Q 85 100, 95 120
           Q 105 135, 120 140
           L 120 110
           Q 110 105, 105 90
           Q 100 70, 102 50
           Q 105 30, 115 20
           Z"
        fill={color}
      />
      <path
        d="M 200 15
           Q 215 25, 215 60
           Q 215 100, 205 120
           Q 195 135, 180 140
           L 180 110
           Q 190 105, 195 90
           Q 200 70, 198 50
           Q 195 30, 185 20
           Z"
        fill={color}
      />

      {/* Top of head */}
      <ellipse cx="150" cy="20" rx="52" ry="25" fill={color} />

      {/* Bangs with side sweep */}
      <path
        d="M 115 15
           Q 130 8, 150 10
           Q 170 8, 185 15
           Q 180 30, 175 40
           L 170 38
           Q 160 32, 150 35
           Q 140 32, 130 38
           L 125 40
           Q 120 30, 115 15
           Z"
        fill={color}
      />

      {/* Highlight */}
      <path
        d="M 130 15 Q 150 10, 160 18"
        fill="none"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </g>
  )
}

// ============================================================================
// 3. Ponytail Hair
// ============================================================================
export function PonytailHair({ color = '#8B4513', className = '' }: HairProps) {
  // Slightly darker shade for depth
  const darkerColor = adjustColorHair(color, -25)

  return (
    <g className={className} data-item="ponytail-hair">
      {/* Ponytail flowing down the BACK - rendered first so it's behind everything */}
      {/* This is positioned behind the body, peeking out on the sides */}
      <path
        d="M 135 25
           Q 130 40, 128 80
           Q 125 140, 130 200
           Q 135 260, 145 320
           Q 148 340, 150 350
           Q 152 340, 155 320
           Q 165 260, 170 200
           Q 175 140, 172 80
           Q 170 40, 165 25
           Z"
        fill={darkerColor}
        opacity="0.85"
      />
      {/* Ponytail strands for texture - behind body */}
      <path
        d="M 140 80 Q 138 150, 142 220 Q 145 280, 148 330"
        fill="none"
        stroke={color}
        strokeWidth="3"
        opacity="0.5"
      />
      <path
        d="M 160 80 Q 162 150, 158 220 Q 155 280, 152 330"
        fill="none"
        stroke={color}
        strokeWidth="3"
        opacity="0.5"
      />

      {/* Top of head - pulled back look */}
      <ellipse cx="150" cy="25" rx="48" ry="20" fill={color} />

      {/* Hair volume at crown - slightly raised for ponytail gathering */}
      <path
        d="M 110 30
           Q 120 5, 150 5
           Q 180 5, 190 30
           Q 175 20, 150 18
           Q 125 20, 110 30
           Z"
        fill={color}
      />

      {/* Side strands framing face - NOT covering it */}
      <path
        d="M 108 28
           Q 102 35, 104 50
           Q 106 60, 110 70
           L 116 68
           Q 114 58, 114 50
           Q 114 38, 116 30
           Z"
        fill={color}
      />
      <path
        d="M 192 28
           Q 198 35, 196 50
           Q 194 60, 190 70
           L 184 68
           Q 186 58, 186 50
           Q 186 38, 184 30
           Z"
        fill={color}
      />

      {/* Hair tie at back of head - positioned at top-back */}
      <ellipse cx="150" cy="15" rx="18" ry="8" fill={darkerColor} />
      <ellipse cx="150" cy="15" rx="10" ry="5" fill="#FF69B4" />
      {/* Hair tie shine */}
      <ellipse cx="147" cy="13" rx="3" ry="2" fill="rgba(255,255,255,0.3)" />

      {/* Wispy baby hairs at temples */}
      <path
        d="M 112 35 Q 108 38, 110 42"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M 188 35 Q 192 38, 190 42"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* Subtle side-swept bangs - minimal, not covering face */}
      <path
        d="M 118 20
           Q 130 15, 140 18
           Q 135 28, 130 32
           Q 125 28, 118 20
           Z"
        fill={color}
      />

      {/* Highlight on top of head */}
      <path
        d="M 125 18 Q 145 10, 165 18"
        fill="none"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </g>
  )
}

// Helper function for hair color adjustment
function adjustColorHair(hex: string, amount: number): string {
  const num = parseInt(hex.replace('#', ''), 16)
  const r = Math.min(255, Math.max(0, (num >> 16) + amount))
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amount))
  const b = Math.min(255, Math.max(0, (num & 0x0000FF) + amount))
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
}

// ============================================================================
// 4. Curly/Wavy Hair
// ============================================================================
export function CurlyWavyHair({ color = '#1C1C1C', className = '' }: HairProps) {
  return (
    <g className={className} data-item="curly-wavy-hair">
      {/* Voluminous curly mass */}
      <ellipse cx="150" cy="30" rx="65" ry="40" fill={color} />

      {/* Curly sides - left */}
      <path
        d="M 90 40
           Q 80 50, 82 70
           Q 78 85, 85 100
           Q 80 115, 88 130
           Q 82 145, 92 160
           Q 88 175, 100 185
           L 110 180
           Q 102 168, 105 155
           Q 100 140, 108 125
           Q 102 110, 110 95
           Q 105 80, 108 65
           Q 100 50, 105 35
           Z"
        fill={color}
      />

      {/* Curly sides - right */}
      <path
        d="M 210 40
           Q 220 50, 218 70
           Q 222 85, 215 100
           Q 220 115, 212 130
           Q 218 145, 208 160
           Q 212 175, 200 185
           L 190 180
           Q 198 168, 195 155
           Q 200 140, 192 125
           Q 198 110, 190 95
           Q 195 80, 192 65
           Q 200 50, 195 35
           Z"
        fill={color}
      />

      {/* Top curls */}
      <circle cx="115" cy="18" r="12" fill={color} />
      <circle cx="140" cy="10" r="14" fill={color} />
      <circle cx="165" cy="12" r="13" fill={color} />
      <circle cx="188" cy="20" r="11" fill={color} />

      {/* Front curly bangs */}
      <path
        d="M 115 25
           Q 108 35, 115 45
           Q 122 38, 128 45
           Q 135 38, 142 45
           Q 150 38, 158 45
           Q 165 38, 172 45
           Q 178 38, 185 45
           Q 192 35, 185 25
           Q 165 15, 150 18
           Q 135 15, 115 25
           Z"
        fill={color}
      />

      {/* Highlights */}
      <circle cx="125" cy="25" r="4" fill="rgba(255,255,255,0.1)" />
      <circle cx="170" cy="20" r="5" fill="rgba(255,255,255,0.1)" />
    </g>
  )
}

// ============================================================================
// 5. Braids Hair
// ============================================================================
export function BraidsHair({ color = '#FFD700', className = '' }: HairProps) {
  const braidPattern = (x: number, startY: number) => {
    const segments = []
    for (let i = 0; i < 10; i++) {
      const y = startY + i * 25
      const offset = i % 2 === 0 ? 5 : -5
      segments.push(
        <ellipse
          key={i}
          cx={x + offset}
          cy={y}
          rx="12"
          ry="14"
          fill={color}
        />
      )
    }
    return segments
  }

  return (
    <g className={className} data-item="braids-hair">
      {/* Top of head */}
      <ellipse cx="150" cy="22" rx="50" ry="25" fill={color} />

      {/* Side parts leading to braids */}
      <path
        d="M 108 25
           Q 100 40, 105 60
           Q 108 80, 115 100
           L 122 100
           Q 118 80, 118 60
           Q 118 40, 120 25
           Z"
        fill={color}
      />
      <path
        d="M 192 25
           Q 200 40, 195 60
           Q 192 80, 185 100
           L 178 100
           Q 182 80, 182 60
           Q 182 40, 180 25
           Z"
        fill={color}
      />

      {/* Left braid */}
      <g transform="translate(-10, 0)">
        {braidPattern(125, 110)}
      </g>

      {/* Right braid */}
      <g transform="translate(10, 0)">
        {braidPattern(175, 110)}
      </g>

      {/* Braid ties */}
      <ellipse cx="115" cy="340" rx="8" ry="6" fill="#FF69B4" />
      <ellipse cx="185" cy="340" rx="8" ry="6" fill="#FF69B4" />

      {/* Bangs */}
      <path
        d="M 120 18
           Q 135 10, 150 12
           Q 165 10, 180 18
           Q 175 32, 168 40
           Q 155 35, 150 38
           Q 145 35, 132 40
           Q 125 32, 120 18
           Z"
        fill={color}
      />

      {/* Highlights */}
      <path
        d="M 130 15 Q 150 8, 165 15"
        fill="none"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </g>
  )
}

// ============================================================================
// Thumbnail Versions (50x50 viewBox, centered)
// ============================================================================

export function LongStraightHairThumbnail({ color = '#4A3728' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <ellipse cx="25" cy="15" rx="12" ry="8" fill={color} />
      <path d="M 15 12 Q 12 25, 14 40 L 18 40 Q 17 25, 18 15 Z" fill={color} />
      <path d="M 35 12 Q 38 25, 36 40 L 32 40 Q 33 25, 32 15 Z" fill={color} />
      <path d="M 18 12 Q 25 8, 32 12 Q 30 18, 25 20 Q 20 18, 18 12 Z" fill={color} />
    </svg>
  )
}

export function ShortBobHairThumbnail({ color = '#2C1810' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <ellipse cx="25" cy="18" rx="16" ry="12" fill={color} />
      <path d="M 12 15 Q 10 25, 14 35 L 20 32 Q 18 25, 18 18 Z" fill={color} />
      <path d="M 38 15 Q 40 25, 36 35 L 30 32 Q 32 25, 32 18 Z" fill={color} />
    </svg>
  )
}

export function PonytailHairThumbnail({ color = '#8B4513' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <ellipse cx="25" cy="18" rx="14" ry="10" fill={color} />
      <ellipse cx="25" cy="10" rx="5" ry="3" fill="#FF69B4" />
      <path d="M 22 10 Q 25 5, 28 10 Q 30 20, 28 35 Q 25 40, 22 35 Q 20 20, 22 10 Z" fill={color} />
    </svg>
  )
}

export function CurlyWavyHairThumbnail({ color = '#1C1C1C' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <ellipse cx="25" cy="22" rx="18" ry="14" fill={color} />
      <circle cx="15" cy="15" r="6" fill={color} />
      <circle cx="35" cy="15" r="6" fill={color} />
      <circle cx="25" cy="12" r="7" fill={color} />
      <circle cx="12" cy="30" r="5" fill={color} />
      <circle cx="38" cy="30" r="5" fill={color} />
    </svg>
  )
}

export function BraidsHairThumbnail({ color = '#FFD700' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <ellipse cx="25" cy="15" rx="14" ry="10" fill={color} />
      <ellipse cx="15" cy="25" rx="5" ry="6" fill={color} />
      <ellipse cx="15" cy="35" rx="5" ry="6" fill={color} />
      <ellipse cx="35" cy="25" rx="5" ry="6" fill={color} />
      <ellipse cx="35" cy="35" rx="5" ry="6" fill={color} />
      <circle cx="15" cy="43" r="3" fill="#FF69B4" />
      <circle cx="35" cy="43" r="3" fill="#FF69B4" />
    </svg>
  )
}

const HairStyles = {
  LongStraightHair,
  ShortBobHair,
  PonytailHair,
  CurlyWavyHair,
  BraidsHair,
}

export default HairStyles
