'use client'

/**
 * Hair Style SVG Components
 * All positioned to fit the 300x800 character viewBox
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

// ============================================================================
// 1. Long Straight Hair
// ============================================================================
export function LongStraightHair({ color = '#4A3728', className = '' }: HairProps) {
  return (
    <g className={className} data-item="long-straight-hair">
      {/* Back hair (behind head) - flows down the back */}
      <path
        d="M 100 55
           Q 90 80, 85 140
           Q 80 220, 85 300
           Q 88 340, 95 380
           L 105 380
           Q 100 340, 98 300
           Q 95 220, 100 140
           Q 105 80, 110 55
           Z"
        fill={color}
      />
      <path
        d="M 200 55
           Q 210 80, 215 140
           Q 220 220, 215 300
           Q 212 340, 205 380
           L 195 380
           Q 200 340, 202 300
           Q 205 220, 200 140
           Q 195 80, 190 55
           Z"
        fill={color}
      />

      {/* Top of head hair */}
      <ellipse cx="150" cy="45" rx="55" ry="22" fill={color} />

      {/* Side hair framing face - starts at ear level (y=95), stays OUTSIDE face */}
      <path
        d="M 95 50
           Q 82 75, 85 110
           Q 87 140, 92 170
           L 100 168
           Q 96 140, 96 110
           Q 96 75, 105 52
           Z"
        fill={color}
      />
      <path
        d="M 205 50
           Q 218 75, 215 110
           Q 213 140, 208 170
           L 200 168
           Q 204 140, 204 110
           Q 204 75, 195 52
           Z"
        fill={color}
      />

      {/* Bangs - STOP AT y=58 MAX (well above eyebrows at y=64) */}
      <path
        d="M 118 40
           Q 130 48, 150 46
           Q 170 48, 182 40
           Q 178 52, 175 58
           Q 165 54, 150 56
           Q 135 54, 125 58
           Q 122 52, 118 40
           Z"
        fill={color}
      />

      {/* Highlight */}
      <path
        d="M 128 44 Q 142 50, 150 48"
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
      {/* Main bob shape - left side (outside face x<100) */}
      <path
        d="M 95 42
           Q 78 60, 78 100
           Q 78 135, 88 155
           Q 98 172, 105 178
           L 108 150
           Q 98 145, 92 125
           Q 88 105, 90 82
           Q 94 62, 105 48
           Z"
        fill={color}
      />
      {/* Main bob shape - right side (outside face x>200) */}
      <path
        d="M 205 42
           Q 222 60, 222 100
           Q 222 135, 212 155
           Q 202 172, 195 178
           L 192 150
           Q 202 145, 208 125
           Q 212 105, 210 82
           Q 206 62, 195 48
           Z"
        fill={color}
      />

      {/* Top of head */}
      <ellipse cx="150" cy="45" rx="55" ry="25" fill={color} />

      {/* Bangs with side sweep - STOP AT y=58 MAX */}
      <path
        d="M 115 38
           Q 130 30, 150 32
           Q 170 30, 185 38
           Q 180 50, 178 58
           L 172 55
           Q 162 50, 150 52
           Q 138 50, 128 55
           L 122 58
           Q 120 50, 115 38
           Z"
        fill={color}
      />

      {/* Highlight */}
      <path
        d="M 130 40 Q 150 34, 165 42"
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
      <path
        d="M 135 55
           Q 130 75, 128 120
           Q 125 180, 130 240
           Q 135 300, 145 360
           Q 148 380, 150 390
           Q 152 380, 155 360
           Q 165 300, 170 240
           Q 175 180, 172 120
           Q 170 75, 165 55
           Z"
        fill={darkerColor}
        opacity="0.85"
      />
      {/* Ponytail strands for texture - behind body */}
      <path
        d="M 140 120 Q 138 190, 142 260 Q 145 320, 148 370"
        fill="none"
        stroke={color}
        strokeWidth="3"
        opacity="0.5"
      />
      <path
        d="M 160 120 Q 162 190, 158 260 Q 155 320, 152 370"
        fill="none"
        stroke={color}
        strokeWidth="3"
        opacity="0.5"
      />

      {/* Top of head - pulled back look */}
      <ellipse cx="150" cy="52" rx="52" ry="22" fill={color} />

      {/* Hair volume at crown - slightly raised for ponytail gathering */}
      <path
        d="M 108 58
           Q 118 32, 150 32
           Q 182 32, 192 58
           Q 175 48, 150 45
           Q 125 48, 108 58
           Z"
        fill={color}
      />

      {/* Side strands framing face - stays OUTSIDE face (x<100 and x>200) */}
      <path
        d="M 95 52
           Q 85 70, 88 100
           Q 90 130, 95 160
           L 102 158
           Q 98 130, 98 100
           Q 98 72, 105 55
           Z"
        fill={color}
      />
      <path
        d="M 205 52
           Q 215 70, 212 100
           Q 210 130, 205 160
           L 198 158
           Q 202 130, 202 100
           Q 202 72, 195 55
           Z"
        fill={color}
      />

      {/* Hair tie at back of head - positioned at top-back */}
      <ellipse cx="150" cy="40" rx="18" ry="8" fill={darkerColor} />
      <ellipse cx="150" cy="40" rx="10" ry="5" fill="#FF69B4" />
      {/* Hair tie shine */}
      <ellipse cx="147" cy="38" rx="3" ry="2" fill="rgba(255,255,255,0.3)" />

      {/* Wispy baby hairs at temples - STOP AT y=58 */}
      <path
        d="M 102 52 Q 98 55, 100 58"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M 198 52 Q 202 55, 200 58"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* Subtle side-swept bangs - STOP AT y=56 MAX */}
      <path
        d="M 118 45
           Q 130 40, 142 42
           Q 138 52, 132 56
           Q 128 52, 118 45
           Z"
        fill={color}
      />

      {/* Highlight on top of head */}
      <path
        d="M 125 45 Q 145 38, 165 45"
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
      {/* Voluminous curly mass - sits on TOP of head only */}
      <ellipse cx="150" cy="40" rx="62" ry="32" fill={color} />

      {/* Curly sides - left (OUTSIDE face at x<95) */}
      <path
        d="M 75 52
           Q 62 75, 65 105
           Q 62 135, 70 165
           Q 65 195, 78 225
           L 92 220
           Q 82 192, 86 165
           Q 80 138, 88 110
           Q 82 85, 90 58
           Z"
        fill={color}
      />

      {/* Curly sides - right (OUTSIDE face at x>205) */}
      <path
        d="M 225 52
           Q 238 75, 235 105
           Q 238 135, 230 165
           Q 235 195, 222 225
           L 208 220
           Q 218 192, 214 165
           Q 220 138, 212 110
           Q 218 85, 210 58
           Z"
        fill={color}
      />

      {/* Top curls - add volume on TOP, not over face */}
      <circle cx="95" cy="35" r="14" fill={color} />
      <circle cx="125" cy="22" r="15" fill={color} />
      <circle cx="155" cy="20" r="15" fill={color} />
      <circle cx="185" cy="25" r="14" fill={color} />
      <circle cx="210" cy="38" r="12" fill={color} />

      {/* Front curly bangs - STOP AT y=55 MAX (well above eyebrows at y=64) */}
      <path
        d="M 120 42
           Q 115 48, 120 53
           Q 130 48, 140 53
           Q 148 48, 155 52
           Q 165 48, 175 53
           Q 182 48, 178 42
           Q 165 35, 150 36
           Q 135 35, 120 42
           Z"
        fill={color}
      />

      {/* Highlights */}
      <circle cx="130" cy="38" r="5" fill="rgba(255,255,255,0.1)" />
      <circle cx="170" cy="35" r="6" fill="rgba(255,255,255,0.1)" />
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
      <ellipse cx="150" cy="50" rx="55" ry="28" fill={color} />

      {/* Side parts leading to braids */}
      <path
        d="M 105 52
           Q 96 70, 100 95
           Q 104 115, 112 135
           L 120 132
           Q 115 115, 115 95
           Q 115 72, 118 55
           Z"
        fill={color}
      />
      <path
        d="M 195 52
           Q 204 70, 200 95
           Q 196 115, 188 135
           L 180 132
           Q 185 115, 185 95
           Q 185 72, 182 55
           Z"
        fill={color}
      />

      {/* Left braid */}
      <g transform="translate(-10, 0)">
        {braidPattern(125, 145)}
      </g>

      {/* Right braid */}
      <g transform="translate(10, 0)">
        {braidPattern(175, 145)}
      </g>

      {/* Braid ties */}
      <ellipse cx="115" cy="380" rx="8" ry="6" fill="#FF69B4" />
      <ellipse cx="185" cy="380" rx="8" ry="6" fill="#FF69B4" />

      {/* Bangs - STOP AT y=58 MAX (above eyebrows at y=64) */}
      <path
        d="M 118 42
           Q 135 35, 150 36
           Q 165 35, 182 42
           Q 178 50, 175 58
           Q 162 54, 150 56
           Q 138 54, 125 58
           Q 122 50, 118 42
           Z"
        fill={color}
      />

      {/* Highlights */}
      <path
        d="M 130 42 Q 150 34, 168 42"
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
