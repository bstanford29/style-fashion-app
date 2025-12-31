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

      {/* Top of head hair - matching Space Buns positioning */}
      <ellipse cx="150" cy="50" rx="52" ry="25" fill={color} />

      {/* Side hair framing face - stays OUTSIDE face (x<95, x>205) */}
      <path
        d="M 95 55
           Q 82 80, 85 120
           Q 87 160, 92 200
           L 100 198
           Q 96 160, 96 120
           Q 96 80, 105 58
           Z"
        fill={color}
      />
      <path
        d="M 205 55
           Q 218 80, 215 120
           Q 213 160, 208 200
           L 200 198
           Q 204 160, 204 120
           Q 204 80, 195 58
           Z"
        fill={color}
      />

      {/* Bangs - matching Space Buns: y=45 to y=58 */}
      <path
        d="M 122 45
           Q 135 38, 150 40
           Q 165 38, 178 45
           Q 175 52, 172 58
           Q 162 54, 150 56
           Q 138 54, 128 58
           Q 125 52, 122 45
           Z"
        fill={color}
      />

      {/* Highlight */}
      <path
        d="M 135 45 Q 150 38, 165 45"
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
      {/* Main bob shape - left side (outside face x<95) */}
      <path
        d="M 95 55
           Q 78 75, 78 110
           Q 78 145, 88 165
           Q 95 178, 100 182
           L 102 155
           Q 95 150, 90 130
           Q 88 110, 90 90
           Q 94 72, 102 58
           Z"
        fill={color}
      />
      {/* Main bob shape - right side (outside face x>205) */}
      <path
        d="M 205 55
           Q 222 75, 222 110
           Q 222 145, 212 165
           Q 205 178, 200 182
           L 198 155
           Q 205 150, 210 130
           Q 212 110, 210 90
           Q 206 72, 198 58
           Z"
        fill={color}
      />

      {/* Top of head - matching Space Buns positioning */}
      <ellipse cx="150" cy="50" rx="52" ry="25" fill={color} />

      {/* Bangs - matching Space Buns: y=45 to y=58 */}
      <path
        d="M 122 45
           Q 135 38, 150 40
           Q 165 38, 178 45
           Q 175 52, 172 58
           Q 162 54, 150 56
           Q 138 54, 128 58
           Q 125 52, 122 45
           Z"
        fill={color}
      />

      {/* Highlight */}
      <path
        d="M 135 45 Q 150 38, 165 45"
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
      {/* Ponytail strands for texture */}
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

      {/* Top of head - matching Space Buns positioning */}
      <ellipse cx="150" cy="50" rx="52" ry="25" fill={color} />

      {/* Side hair framing face - stays OUTSIDE face (x<95, x>205) */}
      <path
        d="M 95 55
           Q 85 72, 88 100
           Q 90 130, 95 155
           L 102 152
           Q 98 125, 98 100
           Q 98 75, 105 58
           Z"
        fill={color}
      />
      <path
        d="M 205 55
           Q 215 72, 212 100
           Q 210 130, 205 155
           L 198 152
           Q 202 125, 202 100
           Q 202 75, 195 58
           Z"
        fill={color}
      />

      {/* Hair tie at back of head */}
      <ellipse cx="150" cy="38" rx="15" ry="6" fill={darkerColor} />
      <ellipse cx="150" cy="38" rx="8" ry="4" fill="#FF69B4" />
      <ellipse cx="148" cy="36" rx="2" ry="1.5" fill="rgba(255,255,255,0.3)" />

      {/* Bangs - matching Space Buns: y=45 to y=58 */}
      <path
        d="M 122 45
           Q 135 38, 150 40
           Q 165 38, 178 45
           Q 175 52, 172 58
           Q 162 54, 150 56
           Q 138 54, 128 58
           Q 125 52, 122 45
           Z"
        fill={color}
      />

      {/* Highlight */}
      <path
        d="M 135 45 Q 150 38, 165 45"
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
      {/* Top of head - matching Space Buns positioning */}
      <ellipse cx="150" cy="50" rx="52" ry="25" fill={color} />

      {/* Curly sides - left (OUTSIDE face at x<95) */}
      <path
        d="M 95 55
           Q 75 80, 78 120
           Q 75 160, 82 200
           Q 78 235, 88 265
           L 100 260
           Q 92 232, 95 200
           Q 88 165, 95 125
           Q 88 90, 100 58
           Z"
        fill={color}
      />

      {/* Curly sides - right (OUTSIDE face at x>205) */}
      <path
        d="M 205 55
           Q 225 80, 222 120
           Q 225 160, 218 200
           Q 222 235, 212 265
           L 200 260
           Q 208 232, 205 200
           Q 212 165, 205 125
           Q 212 90, 200 58
           Z"
        fill={color}
      />

      {/* Top curls - voluminous */}
      <circle cx="88" cy="55" r="14" fill={color} />
      <circle cx="110" cy="42" r="15" fill={color} />
      <circle cx="150" cy="35" r="16" fill={color} />
      <circle cx="190" cy="42" r="15" fill={color} />
      <circle cx="212" cy="55" r="14" fill={color} />

      {/* Bangs - matching Space Buns: y=45 to y=58 */}
      <path
        d="M 122 45
           Q 135 38, 150 40
           Q 165 38, 178 45
           Q 175 52, 172 58
           Q 162 54, 150 56
           Q 138 54, 128 58
           Q 125 52, 122 45
           Z"
        fill={color}
      />

      {/* Highlight */}
      <path
        d="M 135 45 Q 150 38, 165 45"
        fill="none"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="3"
        strokeLinecap="round"
      />
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
      {/* Top of head - matching Space Buns positioning */}
      <ellipse cx="150" cy="50" rx="52" ry="25" fill={color} />

      {/* Side hair leading to braids - stays OUTSIDE face (x<95, x>205) */}
      <path
        d="M 95 55
           Q 88 75, 92 100
           Q 95 125, 105 145
           L 112 142
           Q 105 122, 102 100
           Q 100 78, 105 58
           Z"
        fill={color}
      />
      <path
        d="M 205 55
           Q 212 75, 208 100
           Q 205 125, 195 145
           L 188 142
           Q 195 122, 198 100
           Q 200 78, 195 58
           Z"
        fill={color}
      />

      {/* Left braid */}
      <g transform="translate(-10, 0)">
        {braidPattern(125, 150)}
      </g>

      {/* Right braid */}
      <g transform="translate(10, 0)">
        {braidPattern(175, 150)}
      </g>

      {/* Braid ties */}
      <ellipse cx="115" cy="385" rx="8" ry="6" fill="#FF69B4" />
      <ellipse cx="185" cy="385" rx="8" ry="6" fill="#FF69B4" />

      {/* Bangs - matching Space Buns: y=45 to y=58 */}
      <path
        d="M 122 45
           Q 135 38, 150 40
           Q 165 38, 178 45
           Q 175 52, 172 58
           Q 162 54, 150 56
           Q 138 54, 128 58
           Q 125 52, 122 45
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
