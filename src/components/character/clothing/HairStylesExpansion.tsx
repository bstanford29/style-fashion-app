'use client'

/**
 * Hair Style Expansion - Princess & Party Theme
 * ViewBox: 300x800
 *
 * CHARACTER PROPORTIONS:
 * - Head: ellipse cx=150, cy=90, rx=50, ry=55
 * - Head top: ~y=35
 * - Head center: y=90
 * - Head bottom: ~y=145
 * - Ears: x=100/200, y=95
 * - Head sides: x=100 to x=200
 * - Face area: x=95 to x=205 (hair stays outside)
 * - Bangs stop at: y=58 maximum
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

// ============================================================================
// 1. Elegant Updo - Formal twisted bun with loose tendrils
// ============================================================================
export function ElegantUpdo({ color = '#2C1810', className = '' }: HairProps) {
  const darkerColor = adjustColor(color, -30)
  const lighterColor = adjustColor(color, 25)

  return (
    <g className={className} data-item="elegant-updo">
      {/* Top of head base */}
      <ellipse cx="150" cy="50" rx="52" ry="25" fill={color} />

      {/* Hair swept back and up toward bun */}
      <path
        d="M 98 55
           Q 90 45, 95 35
           Q 110 20, 150 15
           Q 190 20, 205 35
           Q 210 45, 202 55
           Q 195 50, 150 48
           Q 105 50, 98 55
           Z"
        fill={color}
      />

      {/* Main bun at back of head */}
      <ellipse cx="150" cy="30" rx="35" ry="25" fill={color} />
      <ellipse cx="150" cy="28" rx="28" ry="20" fill={darkerColor} opacity="0.3" />

      {/* Twisted bun texture */}
      <path
        d="M 125 25 Q 135 15, 150 18 Q 165 15, 175 25"
        stroke={darkerColor}
        strokeWidth="2"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 130 35 Q 145 28, 170 35"
        stroke={darkerColor}
        strokeWidth="2"
        fill="none"
        opacity="0.35"
      />
      <ellipse cx="150" cy="22" rx="10" ry="6" fill={lighterColor} opacity="0.2" />

      {/* Side hair framing face - swept back elegantly */}
      <path
        d="M 95 55
           Q 88 65, 90 85
           Q 92 105, 96 120
           L 102 118
           Q 100 100, 100 85
           Q 100 70, 105 58
           Z"
        fill={color}
      />
      <path
        d="M 205 55
           Q 212 65, 210 85
           Q 208 105, 204 120
           L 198 118
           Q 200 100, 200 85
           Q 200 70, 195 58
           Z"
        fill={color}
      />

      {/* Loose tendril - left */}
      <path
        d="M 92 120
           Q 85 135, 88 160
           Q 90 180, 85 200
           L 90 202
           Q 96 182, 94 160
           Q 92 140, 98 125
           Z"
        fill={color}
      />
      <path
        d="M 87 160 Q 84 175, 87 190"
        stroke={darkerColor}
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />

      {/* Loose tendril - right */}
      <path
        d="M 208 120
           Q 215 135, 212 160
           Q 210 180, 215 200
           L 210 202
           Q 204 182, 206 160
           Q 208 140, 202 125
           Z"
        fill={color}
      />
      <path
        d="M 213 160 Q 216 175, 213 190"
        stroke={darkerColor}
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />

      {/* Soft wispy bangs - subtle and elegant */}
      <path
        d="M 125 48
           Q 138 42, 150 44
           Q 162 42, 175 48
           Q 172 54, 168 58
           Q 158 55, 150 56
           Q 142 55, 132 58
           Q 128 54, 125 48
           Z"
        fill={color}
      />

      {/* Highlight on top */}
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
// 2. Long Curls - Flowing princess curls Rapunzel-style
// ============================================================================
export function LongCurls({ color = '#FFD700', className = '' }: HairProps) {
  const darkerColor = adjustColor(color, -35)
  const lighterColor = adjustColor(color, 30)

  return (
    <g className={className} data-item="long-curls">
      {/* Back flowing hair - very long, goes past the torso */}
      <path
        d="M 100 55
           Q 85 120, 82 200
           Q 78 300, 85 400
           Q 90 480, 100 550
           L 115 548
           Q 108 480, 105 400
           Q 100 300, 105 200
           Q 108 120, 115 60
           Z"
        fill={darkerColor}
        opacity="0.85"
      />
      <path
        d="M 200 55
           Q 215 120, 218 200
           Q 222 300, 215 400
           Q 210 480, 200 550
           L 185 548
           Q 192 480, 195 400
           Q 200 300, 195 200
           Q 192 120, 185 60
           Z"
        fill={darkerColor}
        opacity="0.85"
      />

      {/* Top of head - voluminous */}
      <ellipse cx="150" cy="48" rx="55" ry="28" fill={color} />

      {/* Main curl cascades - left side */}
      <path
        d="M 95 55
           Q 75 80, 72 120
           Q 68 180, 75 250
           Q 70 320, 78 380
           Q 72 440, 80 500
           L 95 498
           Q 88 440, 94 380
           Q 88 320, 92 250
           Q 88 180, 92 120
           Q 95 80, 105 58
           Z"
        fill={color}
      />

      {/* Main curl cascades - right side */}
      <path
        d="M 205 55
           Q 225 80, 228 120
           Q 232 180, 225 250
           Q 230 320, 222 380
           Q 228 440, 220 500
           L 205 498
           Q 212 440, 206 380
           Q 212 320, 208 250
           Q 212 180, 208 120
           Q 205 80, 195 58
           Z"
        fill={color}
      />

      {/* Curl texture - left */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const y = 100 + i * 65
        const cx = 78 + (i % 2 === 0 ? 0 : 8)
        return (
          <ellipse
            key={`curl-l-${i}`}
            cx={cx}
            cy={y}
            rx="18"
            ry="28"
            fill={color}
          />
        )
      })}

      {/* Curl texture - right */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const y = 100 + i * 65
        const cx = 222 - (i % 2 === 0 ? 0 : 8)
        return (
          <ellipse
            key={`curl-r-${i}`}
            cx={cx}
            cy={y}
            rx="18"
            ry="28"
            fill={color}
          />
        )
      })}

      {/* Curl definition lines */}
      <path d="M 75 130 Q 82 150, 75 170" stroke={darkerColor} strokeWidth="2" fill="none" opacity="0.3" />
      <path d="M 85 200 Q 78 220, 85 240" stroke={darkerColor} strokeWidth="2" fill="none" opacity="0.3" />
      <path d="M 75 280 Q 82 300, 75 320" stroke={darkerColor} strokeWidth="2" fill="none" opacity="0.3" />
      <path d="M 225 130 Q 218 150, 225 170" stroke={darkerColor} strokeWidth="2" fill="none" opacity="0.3" />
      <path d="M 215 200 Q 222 220, 215 240" stroke={darkerColor} strokeWidth="2" fill="none" opacity="0.3" />
      <path d="M 225 280 Q 218 300, 225 320" stroke={darkerColor} strokeWidth="2" fill="none" opacity="0.3" />

      {/* Bangs - soft and voluminous */}
      <path
        d="M 118 45
           Q 135 35, 150 38
           Q 165 35, 182 45
           Q 178 52, 174 58
           Q 162 53, 150 55
           Q 138 53, 126 58
           Q 122 52, 118 45
           Z"
        fill={color}
      />

      {/* Highlights */}
      <path
        d="M 130 42 Q 150 32, 170 42"
        fill="none"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <ellipse cx="82" cy="150" rx="5" ry="12" fill={lighterColor} opacity="0.25" />
      <ellipse cx="218" cy="150" rx="5" ry="12" fill={lighterColor} opacity="0.25" />
    </g>
  )
}

// ============================================================================
// 3. Half Up Crown - Half up with braided crown detail
// ============================================================================
export function HalfUpCrown({ color = '#8B4513', className = '' }: HairProps) {
  const darkerColor = adjustColor(color, -30)
  const lighterColor = adjustColor(color, 20)

  return (
    <g className={className} data-item="half-up-crown">
      {/* Back flowing hair */}
      <path
        d="M 100 55
           Q 88 100, 85 180
           Q 82 280, 90 380
           L 105 378
           Q 98 280, 102 180
           Q 105 100, 115 60
           Z"
        fill={darkerColor}
        opacity="0.85"
      />
      <path
        d="M 200 55
           Q 212 100, 215 180
           Q 218 280, 210 380
           L 195 378
           Q 202 280, 198 180
           Q 195 100, 185 60
           Z"
        fill={darkerColor}
        opacity="0.85"
      />

      {/* Top of head base */}
      <ellipse cx="150" cy="50" rx="52" ry="25" fill={color} />

      {/* Side hair flowing down */}
      <path
        d="M 95 55
           Q 82 80, 80 120
           Q 78 180, 85 250
           Q 88 320, 95 380
           L 108 378
           Q 102 320, 100 250
           Q 95 180, 98 120
           Q 100 80, 108 58
           Z"
        fill={color}
      />
      <path
        d="M 205 55
           Q 218 80, 220 120
           Q 222 180, 215 250
           Q 212 320, 205 380
           L 192 378
           Q 198 320, 200 250
           Q 205 180, 202 120
           Q 200 80, 192 58
           Z"
        fill={color}
      />

      {/* Braided crown - wraps around the head */}
      <path
        d="M 95 50
           Q 85 42, 90 32
           Q 105 22, 150 18
           Q 195 22, 210 32
           Q 215 42, 205 50"
        stroke={color}
        strokeWidth="14"
        fill="none"
        strokeLinecap="round"
      />

      {/* Braid texture on crown */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
        const angle = -30 + i * 20
        const rad = (angle * Math.PI) / 180
        const cx = 150 + Math.cos(rad) * 62
        const cy = 36 + Math.sin(rad) * 18
        const offset = i % 2 === 0 ? 2 : -2
        return (
          <ellipse
            key={`crown-${i}`}
            cx={cx}
            cy={cy + offset}
            rx="8"
            ry="6"
            fill={i % 2 === 0 ? darkerColor : lighterColor}
            opacity="0.4"
          />
        )
      })}

      {/* Crown braid outline */}
      <path
        d="M 95 50
           Q 85 42, 90 32
           Q 105 22, 150 18
           Q 195 22, 210 32
           Q 215 42, 205 50"
        stroke={darkerColor}
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />

      {/* Bangs peeking under crown */}
      <path
        d="M 122 48
           Q 135 42, 150 44
           Q 165 42, 178 48
           Q 175 54, 172 58
           Q 162 54, 150 56
           Q 138 54, 128 58
           Q 125 54, 122 48
           Z"
        fill={color}
      />

      {/* Hair strand details */}
      <path d="M 88 150 L 92 250" stroke={darkerColor} strokeWidth="1.5" fill="none" opacity="0.25" />
      <path d="M 212 150 L 208 250" stroke={darkerColor} strokeWidth="1.5" fill="none" opacity="0.25" />

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
// 4. Sleek Low Bun - Sophisticated ballerina bun
// ============================================================================
export function SleekLowBun({ color = '#1C1C1C', className = '' }: HairProps) {
  const darkerColor = adjustColor(color, -20)
  const lighterColor = adjustColor(color, 35)

  return (
    <g className={className} data-item="sleek-low-bun">
      {/* Top of head - very smooth and sleek */}
      <ellipse cx="150" cy="50" rx="52" ry="25" fill={color} />

      {/* Sleek hair swept back */}
      <path
        d="M 98 55
           Q 92 48, 98 40
           Q 115 28, 150 25
           Q 185 28, 202 40
           Q 208 48, 202 55
           Q 190 52, 150 50
           Q 110 52, 98 55
           Z"
        fill={color}
      />

      {/* Hair sweeping down to bun */}
      <path
        d="M 98 55
           Q 95 80, 100 110
           Q 108 140, 130 160
           L 170 160
           Q 192 140, 200 110
           Q 205 80, 202 55
           Q 180 60, 150 58
           Q 120 60, 98 55
           Z"
        fill={color}
      />

      {/* Low bun at nape of neck */}
      <ellipse cx="150" cy="170" rx="30" ry="22" fill={color} />
      <ellipse cx="150" cy="168" rx="22" ry="16" fill={darkerColor} opacity="0.3" />

      {/* Bun swirl detail */}
      <path
        d="M 135 168 Q 150 158, 165 168 Q 158 175, 150 172 Q 142 175, 135 168"
        stroke={darkerColor}
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <ellipse cx="150" cy="165" rx="8" ry="5" fill={lighterColor} opacity="0.15" />

      {/* Side hair - very sleek, hugging the head */}
      <path
        d="M 95 55
           Q 88 70, 90 95
           L 98 94
           Q 96 72, 102 58
           Z"
        fill={color}
      />
      <path
        d="M 205 55
           Q 212 70, 210 95
           L 202 94
           Q 204 72, 198 58
           Z"
        fill={color}
      />

      {/* Center part line */}
      <path
        d="M 150 28 L 150 55"
        stroke={darkerColor}
        strokeWidth="1"
        opacity="0.35"
      />

      {/* Sleek hair texture lines */}
      <path d="M 115 40 Q 130 35, 145 42" stroke={darkerColor} strokeWidth="0.8" fill="none" opacity="0.2" />
      <path d="M 155 42 Q 170 35, 185 40" stroke={darkerColor} strokeWidth="0.8" fill="none" opacity="0.2" />

      {/* No bangs for the sleek look - just a tiny bit at temples */}
      <path
        d="M 100 55
           Q 102 52, 108 50
           L 112 55
           Q 108 56, 105 58
           Z"
        fill={color}
      />
      <path
        d="M 200 55
           Q 198 52, 192 50
           L 188 55
           Q 192 56, 195 58
           Z"
        fill={color}
      />

      {/* Highlight on crown */}
      <path
        d="M 130 38 Q 150 30, 170 38"
        fill="none"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </g>
  )
}

// ============================================================================
// 5. Voluminous Waves - Big glamorous waves
// ============================================================================
export function VoluminousWaves({ color = '#D4A574', className = '' }: HairProps) {
  const darkerColor = adjustColor(color, -30)
  const lighterColor = adjustColor(color, 25)

  return (
    <g className={className} data-item="voluminous-waves">
      {/* Back hair layer */}
      <path
        d="M 95 55
           Q 75 100, 70 180
           Q 65 280, 75 380
           Q 80 420, 90 450
           L 105 448
           Q 95 420, 92 380
           Q 85 280, 92 180
           Q 98 100, 110 60
           Z"
        fill={darkerColor}
        opacity="0.8"
      />
      <path
        d="M 205 55
           Q 225 100, 230 180
           Q 235 280, 225 380
           Q 220 420, 210 450
           L 195 448
           Q 205 420, 208 380
           Q 215 280, 208 180
           Q 202 100, 190 60
           Z"
        fill={darkerColor}
        opacity="0.8"
      />

      {/* Top of head - extra voluminous */}
      <ellipse cx="150" cy="48" rx="58" ry="30" fill={color} />

      {/* Big wave sections - left */}
      <path
        d="M 92 55
           Q 68 90, 65 140
           Q 60 200, 72 260
           Q 65 320, 75 380
           Q 70 430, 85 480
           L 102 478
           Q 88 430, 95 380
           Q 85 320, 95 260
           Q 82 200, 88 140
           Q 90 90, 108 58
           Z"
        fill={color}
      />

      {/* Big wave sections - right */}
      <path
        d="M 208 55
           Q 232 90, 235 140
           Q 240 200, 228 260
           Q 235 320, 225 380
           Q 230 430, 215 480
           L 198 478
           Q 212 430, 205 380
           Q 215 320, 205 260
           Q 218 200, 212 140
           Q 210 90, 192 58
           Z"
        fill={color}
      />

      {/* Wave texture - large S-curves */}
      <path
        d="M 75 120 Q 85 150, 72 180 Q 60 210, 75 240"
        stroke={darkerColor}
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M 80 280 Q 70 310, 82 340 Q 90 370, 78 400"
        stroke={darkerColor}
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M 225 120 Q 215 150, 228 180 Q 240 210, 225 240"
        stroke={darkerColor}
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M 220 280 Q 230 310, 218 340 Q 210 370, 222 400"
        stroke={darkerColor}
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      />

      {/* Volume highlights */}
      <ellipse cx="78" cy="160" rx="8" ry="20" fill={lighterColor} opacity="0.2" />
      <ellipse cx="222" cy="160" rx="8" ry="20" fill={lighterColor} opacity="0.2" />
      <ellipse cx="75" cy="320" rx="7" ry="18" fill={lighterColor} opacity="0.18" />
      <ellipse cx="225" cy="320" rx="7" ry="18" fill={lighterColor} opacity="0.18" />

      {/* Side-swept voluminous bangs */}
      <path
        d="M 115 42
           Q 135 32, 155 36
           Q 172 34, 185 45
           Q 180 52, 175 58
           Q 162 52, 150 54
           Q 135 52, 122 58
           Q 118 52, 115 42
           Z"
        fill={color}
      />

      {/* Big highlight on top */}
      <path
        d="M 125 38 Q 150 25, 175 38"
        fill="none"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </g>
  )
}

// ============================================================================
// 6. Double Dutch Braids - Two neat braids
// ============================================================================
export function DoubleDutchBraids({ color = '#4A3728', className = '' }: HairProps) {
  const darkerColor = adjustColor(color, -30)
  const lighterColor = adjustColor(color, 20)

  const braidSegment = (baseX: number, startY: number, side: 'left' | 'right') => {
    const segments = []
    for (let i = 0; i < 12; i++) {
      const y = startY + i * 28
      const offset = i % 2 === 0 ? 4 : -4
      const x = side === 'left' ? baseX + offset : baseX - offset
      segments.push(
        <g key={`${side}-seg-${i}`}>
          <ellipse cx={x} cy={y} rx="12" ry="15" fill={color} />
          <path
            d={`M ${x - 8} ${y - 5} Q ${x} ${y - 10}, ${x + 8} ${y - 5}`}
            stroke={darkerColor}
            strokeWidth="1.5"
            fill="none"
            opacity="0.35"
          />
        </g>
      )
    }
    return segments
  }

  return (
    <g className={className} data-item="double-dutch-braids">
      {/* Top of head */}
      <ellipse cx="150" cy="50" rx="52" ry="25" fill={color} />

      {/* Center part */}
      <path d="M 150 30 L 150 60" stroke={darkerColor} strokeWidth="1.5" opacity="0.4" />

      {/* Hair flowing into braids - left */}
      <path
        d="M 98 55
           Q 90 70, 95 95
           Q 100 120, 110 145
           L 125 142
           Q 115 118, 112 95
           Q 108 72, 112 58
           Z"
        fill={color}
      />

      {/* Hair flowing into braids - right */}
      <path
        d="M 202 55
           Q 210 70, 205 95
           Q 200 120, 190 145
           L 175 142
           Q 185 118, 188 95
           Q 192 72, 188 58
           Z"
        fill={color}
      />

      {/* Left braid */}
      <g>{braidSegment(115, 155, 'left')}</g>

      {/* Right braid */}
      <g>{braidSegment(185, 155, 'right')}</g>

      {/* Hair ties at bottom of braids */}
      <ellipse cx="115" cy="495" rx="10" ry="6" fill="#FF69B4" />
      <ellipse cx="113" cy="493" rx="3" ry="2" fill="rgba(255,255,255,0.4)" />
      <ellipse cx="185" cy="495" rx="10" ry="6" fill="#FF69B4" />
      <ellipse cx="183" cy="493" rx="3" ry="2" fill="rgba(255,255,255,0.4)" />

      {/* Braid tails */}
      <path
        d="M 108 500 Q 105 515, 110 530 L 120 528 Q 116 515, 122 500 Z"
        fill={color}
      />
      <path
        d="M 192 500 Q 195 515, 190 530 L 180 528 Q 184 515, 178 500 Z"
        fill={color}
      />

      {/* Soft bangs */}
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
        d="M 135 45 Q 150 38, 165 45"
        fill="none"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <ellipse cx="112" cy="200" rx="4" ry="8" fill={lighterColor} opacity="0.2" />
      <ellipse cx="188" cy="200" rx="4" ry="8" fill={lighterColor} opacity="0.2" />
    </g>
  )
}

// ============================================================================
// 7. High Ponytail Glam - Sleek high pony with volume
// ============================================================================
export function HighPonytailGlam({ color = '#2C1810', className = '' }: HairProps) {
  const darkerColor = adjustColor(color, -30)
  const lighterColor = adjustColor(color, 25)

  return (
    <g className={className} data-item="high-ponytail-glam">
      {/* Ponytail flowing from top of head - voluminous */}
      <path
        d="M 130 25
           Q 120 60, 115 120
           Q 110 200, 120 300
           Q 128 380, 140 450
           Q 145 490, 150 520
           Q 155 490, 160 450
           Q 172 380, 180 300
           Q 190 200, 185 120
           Q 180 60, 170 25
           Z"
        fill={darkerColor}
        opacity="0.85"
      />

      {/* Ponytail texture strands */}
      <path d="M 135 100 Q 132 200, 138 320 Q 142 400, 148 480" stroke={color} strokeWidth="3" fill="none" opacity="0.5" />
      <path d="M 150 80 Q 150 200, 152 320 Q 152 400, 150 480" stroke={color} strokeWidth="3" fill="none" opacity="0.4" />
      <path d="M 165 100 Q 168 200, 162 320 Q 158 400, 152 480" stroke={color} strokeWidth="3" fill="none" opacity="0.5" />

      {/* Top of head - sleek and pulled back */}
      <ellipse cx="150" cy="50" rx="52" ry="25" fill={color} />

      {/* Hair swept up to high pony */}
      <path
        d="M 98 55
           Q 92 45, 100 35
           Q 120 18, 150 12
           Q 180 18, 200 35
           Q 208 45, 202 55
           Q 185 48, 150 45
           Q 115 48, 98 55
           Z"
        fill={color}
      />

      {/* Sleek side sections */}
      <path
        d="M 95 55
           Q 88 72, 90 95
           Q 92 115, 98 130
           L 105 128
           Q 100 112, 100 95
           Q 98 75, 105 58
           Z"
        fill={color}
      />
      <path
        d="M 205 55
           Q 212 72, 210 95
           Q 208 115, 202 130
           L 195 128
           Q 200 112, 200 95
           Q 202 75, 195 58
           Z"
        fill={color}
      />

      {/* Hair tie - glam style */}
      <ellipse cx="150" cy="18" rx="20" ry="10" fill={darkerColor} />
      <ellipse cx="150" cy="16" rx="12" ry="6" fill="#FFD700" />
      <ellipse cx="147" cy="14" rx="4" ry="2.5" fill="rgba(255,255,255,0.5)" />

      {/* Volume bump at crown */}
      <ellipse cx="150" cy="32" rx="30" ry="15" fill={color} />
      <ellipse cx="150" cy="30" rx="18" ry="8" fill={lighterColor} opacity="0.15" />

      {/* Face-framing pieces */}
      <path
        d="M 100 58
           Q 96 68, 98 85
           Q 100 100, 105 115
           L 110 112
           Q 106 98, 105 85
           Q 104 70, 108 62
           Z"
        fill={color}
      />
      <path
        d="M 200 58
           Q 204 68, 202 85
           Q 200 100, 195 115
           L 190 112
           Q 194 98, 195 85
           Q 196 70, 192 62
           Z"
        fill={color}
      />

      {/* Subtle baby hairs / soft edge at hairline */}
      <path
        d="M 120 52 Q 135 46, 150 48 Q 165 46, 180 52"
        stroke={color}
        strokeWidth="3"
        fill="none"
        opacity="0.7"
      />

      {/* Highlights */}
      <path
        d="M 130 35 Q 150 25, 170 35"
        fill="none"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <ellipse cx="140" cy="200" rx="5" ry="15" fill={lighterColor} opacity="0.18" />
      <ellipse cx="160" cy="200" rx="5" ry="15" fill={lighterColor} opacity="0.18" />
    </g>
  )
}

// ============================================================================
// 8. Afro Puffs - Two cute rounded puffs
// ============================================================================
export function AfroPuffs({ color = '#1C1C1C', className = '' }: HairProps) {
  const darkerColor = adjustColor(color, -20)
  const lighterColor = adjustColor(color, 40)

  return (
    <g className={className} data-item="afro-puffs">
      {/* Top of head base */}
      <ellipse cx="150" cy="52" rx="52" ry="24" fill={color} />

      {/* Left puff - big and round */}
      <circle cx="80" cy="50" r="45" fill={color} />
      <circle cx="80" cy="48" r="38" fill={color} />

      {/* Left puff texture - small circles for natural texture */}
      <circle cx="60" cy="35" r="8" fill={darkerColor} opacity="0.25" />
      <circle cx="75" cy="25" r="7" fill={darkerColor} opacity="0.25" />
      <circle cx="95" cy="30" r="8" fill={darkerColor} opacity="0.25" />
      <circle cx="105" cy="48" r="7" fill={darkerColor} opacity="0.25" />
      <circle cx="55" cy="55" r="7" fill={darkerColor} opacity="0.25" />
      <circle cx="70" cy="70" r="6" fill={darkerColor} opacity="0.25" />
      <circle cx="90" cy="68" r="7" fill={darkerColor} opacity="0.25" />

      {/* Left puff highlight */}
      <ellipse cx="70" cy="38" rx="12" ry="10" fill={lighterColor} opacity="0.12" />

      {/* Right puff - big and round */}
      <circle cx="220" cy="50" r="45" fill={color} />
      <circle cx="220" cy="48" r="38" fill={color} />

      {/* Right puff texture */}
      <circle cx="240" cy="35" r="8" fill={darkerColor} opacity="0.25" />
      <circle cx="225" cy="25" r="7" fill={darkerColor} opacity="0.25" />
      <circle cx="205" cy="30" r="8" fill={darkerColor} opacity="0.25" />
      <circle cx="195" cy="48" r="7" fill={darkerColor} opacity="0.25" />
      <circle cx="245" cy="55" r="7" fill={darkerColor} opacity="0.25" />
      <circle cx="230" cy="70" r="6" fill={darkerColor} opacity="0.25" />
      <circle cx="210" cy="68" r="7" fill={darkerColor} opacity="0.25" />

      {/* Right puff highlight */}
      <ellipse cx="230" cy="38" rx="12" ry="10" fill={lighterColor} opacity="0.12" />

      {/* Hair connecting puffs to head */}
      <path
        d="M 105 52
           Q 95 55, 88 65
           L 95 72
           Q 100 62, 110 58
           Z"
        fill={color}
      />
      <path
        d="M 195 52
           Q 205 55, 212 65
           L 205 72
           Q 200 62, 190 58
           Z"
        fill={color}
      />

      {/* Hair ties / scrunchies */}
      <ellipse cx="100" cy="68" rx="12" ry="8" fill="#FF69B4" />
      <ellipse cx="98" cy="66" rx="4" ry="3" fill="rgba(255,255,255,0.35)" />
      <ellipse cx="200" cy="68" rx="12" ry="8" fill="#FF69B4" />
      <ellipse cx="198" cy="66" rx="4" ry="3" fill="rgba(255,255,255,0.35)" />

      {/* Center part */}
      <path d="M 150 35 L 150 58" stroke={darkerColor} strokeWidth="1.5" opacity="0.35" />

      {/* Side hair - short and textured */}
      <path
        d="M 95 58
           Q 88 72, 90 95
           Q 92 115, 98 130
           L 105 128
           Q 100 112, 100 95
           Q 98 78, 105 62
           Z"
        fill={color}
      />
      <path
        d="M 205 58
           Q 212 72, 210 95
           Q 208 115, 202 130
           L 195 128
           Q 200 112, 200 95
           Q 202 78, 195 62
           Z"
        fill={color}
      />

      {/* Baby hairs / edges */}
      <path
        d="M 115 52
           Q 120 48, 128 50
           Q 135 47, 142 50"
        stroke={color}
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M 158 50
           Q 165 47, 172 50
           Q 180 48, 185 52"
        stroke={color}
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
    </g>
  )
}

// ============================================================================
// 9. Loose Fishtail - Elegant side fishtail braid
// ============================================================================
export function LooseFishtail({ color = '#C68642', className = '' }: HairProps) {
  const darkerColor = adjustColor(color, -30)
  const lighterColor = adjustColor(color, 20)

  return (
    <g className={className} data-item="loose-fishtail">
      {/* Top of head */}
      <ellipse cx="150" cy="50" rx="52" ry="25" fill={color} />

      {/* Hair flowing to the right side */}
      <path
        d="M 98 55
           Q 92 70, 95 100
           Q 98 130, 110 155
           L 118 152
           Q 108 128, 105 100
           Q 102 75, 108 58
           Z"
        fill={color}
      />

      {/* Right side - hair flowing into braid */}
      <path
        d="M 202 55
           Q 215 75, 220 110
           Q 225 155, 215 200
           L 225 205
           Q 235 155, 232 110
           Q 228 70, 212 52
           Z"
        fill={color}
      />

      {/* Main fishtail braid flowing over right shoulder */}
      <path
        d="M 200 150
           Q 220 180, 225 220
           Q 235 280, 230 350
           Q 228 420, 235 480
           L 215 485
           Q 210 420, 215 350
           Q 220 280, 212 220
           Q 208 180, 195 155
           Z"
        fill={color}
      />

      {/* Fishtail texture - alternating diagonal segments */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
        const y = 200 + i * 28
        const isEven = i % 2 === 0
        return (
          <g key={`fishtail-${i}`}>
            <path
              d={isEven
                ? `M 212 ${y} Q 220 ${y + 10}, 225 ${y + 5} L 228 ${y + 15} Q 222 ${y + 20}, 215 ${y + 15} Z`
                : `M 228 ${y} Q 222 ${y + 10}, 218 ${y + 5} L 215 ${y + 15} Q 220 ${y + 20}, 228 ${y + 15} Z`
              }
              fill={isEven ? darkerColor : lighterColor}
              opacity="0.3"
            />
          </g>
        )
      })}

      {/* Loose strands at top of braid */}
      <path
        d="M 195 160 Q 200 175, 195 195"
        stroke={color}
        strokeWidth="3"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M 230 170 Q 235 185, 232 205"
        stroke={color}
        strokeWidth="3"
        fill="none"
        opacity="0.6"
      />

      {/* Hair tie */}
      <ellipse cx="225" cy="490" rx="12" ry="7" fill="#FF69B4" />
      <ellipse cx="222" cy="488" rx="4" ry="2.5" fill="rgba(255,255,255,0.4)" />

      {/* Braid tail */}
      <path
        d="M 218 495 Q 215 515, 222 535 Q 228 555, 225 570
           L 235 568 Q 238 552, 232 535 Q 225 515, 232 495 Z"
        fill={color}
      />

      {/* Wispy bangs and face framing */}
      <path
        d="M 120 45
           Q 138 36, 155 40
           Q 170 38, 182 48
           Q 178 54, 174 58
           Q 162 52, 150 54
           Q 138 52, 128 58
           Q 124 52, 120 45
           Z"
        fill={color}
      />

      {/* Loose tendril on left side */}
      <path
        d="M 92 120
           Q 85 145, 88 175
           Q 90 200, 85 225
           L 92 227
           Q 98 202, 96 175
           Q 94 148, 100 125
           Z"
        fill={color}
      />

      {/* Highlights */}
      <path
        d="M 135 42 Q 150 35, 165 42"
        fill="none"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <ellipse cx="220" cy="280" rx="5" ry="15" fill={lighterColor} opacity="0.18" />
    </g>
  )
}

// ============================================================================
// THUMBNAILS (50x50 viewBox)
// ============================================================================

export function ElegantUpdoThumbnail({ color = '#2C1810' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <ellipse cx="25" cy="22" rx="14" ry="10" fill={color} />
      <ellipse cx="25" cy="10" rx="12" ry="8" fill={color} />
      <path d="M 13 28 Q 10 32, 12 38 L 15 37 Q 14 33, 16 30 Z" fill={color} />
      <path d="M 37 28 Q 40 32, 38 38 L 35 37 Q 36 33, 34 30 Z" fill={color} />
    </svg>
  )
}

export function LongCurlsThumbnail({ color = '#FFD700' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <ellipse cx="25" cy="15" rx="15" ry="10" fill={color} />
      <ellipse cx="12" cy="22" r="6" fill={color} />
      <ellipse cx="10" cy="32" r="5" fill={color} />
      <ellipse cx="12" cy="42" r="5" fill={color} />
      <ellipse cx="38" cy="22" r="6" fill={color} />
      <ellipse cx="40" cy="32" r="5" fill={color} />
      <ellipse cx="38" cy="42" r="5" fill={color} />
    </svg>
  )
}

export function HalfUpCrownThumbnail({ color = '#8B4513' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <ellipse cx="25" cy="18" rx="14" ry="10" fill={color} />
      <path d="M 12 16 Q 8 12, 15 8 Q 25 5, 35 8 Q 42 12, 38 16" stroke={color} strokeWidth="5" fill="none" />
      <path d="M 10 22 Q 8 30, 12 42 L 16 40 Q 14 32, 14 25 Z" fill={color} />
      <path d="M 40 22 Q 42 30, 38 42 L 34 40 Q 36 32, 36 25 Z" fill={color} />
    </svg>
  )
}

export function SleekLowBunThumbnail({ color = '#1C1C1C' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <ellipse cx="25" cy="18" rx="14" ry="10" fill={color} />
      <path d="M 14 16 Q 25 10, 36 16 L 34 22 Q 25 18, 16 22 Z" fill={color} />
      <ellipse cx="25" cy="38" rx="10" ry="7" fill={color} />
      <path d="M 25 12 L 25 22" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
    </svg>
  )
}

export function VoluminousWavesThumbnail({ color = '#D4A574' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <ellipse cx="25" cy="14" rx="16" ry="11" fill={color} />
      <path d="M 8 18 Q 5 28, 10 38 Q 6 44, 12 48 L 16 46 Q 12 42, 15 36 Q 10 28, 14 20 Z" fill={color} />
      <path d="M 42 18 Q 45 28, 40 38 Q 44 44, 38 48 L 34 46 Q 38 42, 35 36 Q 40 28, 36 20 Z" fill={color} />
    </svg>
  )
}

export function DoubleDutchBraidsThumbnail({ color = '#4A3728' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <ellipse cx="25" cy="15" rx="14" ry="10" fill={color} />
      <path d="M 25 8 L 25 20" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
      <ellipse cx="15" cy="26" rx="4" ry="5" fill={color} />
      <ellipse cx="15" cy="35" rx="4" ry="5" fill={color} />
      <ellipse cx="15" cy="44" rx="4" ry="5" fill={color} />
      <ellipse cx="35" cy="26" rx="4" ry="5" fill={color} />
      <ellipse cx="35" cy="35" rx="4" ry="5" fill={color} />
      <ellipse cx="35" cy="44" rx="4" ry="5" fill={color} />
      <circle cx="15" cy="49" r="2" fill="#FF69B4" />
      <circle cx="35" cy="49" r="2" fill="#FF69B4" />
    </svg>
  )
}

export function HighPonytailGlamThumbnail({ color = '#2C1810' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <ellipse cx="25" cy="18" rx="14" ry="10" fill={color} />
      <ellipse cx="25" cy="8" rx="8" ry="5" fill="#FFD700" />
      <path d="M 20 8 Q 22 3, 25 2 Q 28 3, 30 8 Q 32 18, 30 32 Q 28 42, 25 48 Q 22 42, 20 32 Q 18 18, 20 8 Z" fill={color} />
    </svg>
  )
}

export function AfroPuffsThumbnail({ color = '#1C1C1C' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <ellipse cx="25" cy="22" rx="12" ry="8" fill={color} />
      <circle cx="10" cy="18" r="12" fill={color} />
      <circle cx="40" cy="18" r="12" fill={color} />
      <ellipse cx="18" cy="25" rx="4" ry="3" fill="#FF69B4" />
      <ellipse cx="32" cy="25" rx="4" ry="3" fill="#FF69B4" />
    </svg>
  )
}

export function LooseFishtailThumbnail({ color = '#C68642' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <ellipse cx="25" cy="15" rx="14" ry="10" fill={color} />
      <path d="M 32 18 Q 38 22, 40 30 Q 42 38, 40 46 L 36 45 Q 38 38, 36 30 Q 34 24, 30 20 Z" fill={color} />
      <path d="M 38 28 L 40 32 L 36 34 L 38 30 Z" fill={adjustColor(color, -20)} opacity="0.4" />
      <path d="M 36 36 L 40 38 L 38 42 L 36 40 Z" fill={adjustColor(color, -20)} opacity="0.4" />
      <circle cx="40" cy="48" r="2" fill="#FF69B4" />
      <path d="M 12 22 Q 10 28, 12 36 L 15 35 Q 14 28, 15 24 Z" fill={color} />
    </svg>
  )
}

// ============================================================================
// DEFAULT EXPORT
// ============================================================================
const HairStylesExpansion = {
  ElegantUpdo,
  LongCurls,
  HalfUpCrown,
  SleekLowBun,
  VoluminousWaves,
  DoubleDutchBraids,
  HighPonytailGlam,
  AfroPuffs,
  LooseFishtail,
}

export default HairStylesExpansion
