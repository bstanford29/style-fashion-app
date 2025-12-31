'use client'

/**
 * New Top Clothing SVG Components
 * ViewBox: 300x800
 * Shoulders: y=170, Torso: y=170-360
 */

interface TopProps {
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

export function Sundress({ color = '#FFD700', className = '' }: TopProps) {
  const darkerColor = adjustColor(color, -30)
  const lighterColor = adjustColor(color, 25)

  return (
    <g className={className}>
      {/* Spaghetti straps */}
      <path d="M 125 170 Q 122 155, 120 140 L 128 138 Q 130 152, 132 168 Z" fill={color} />
      <path d="M 175 170 Q 178 155, 180 140 L 172 138 Q 170 152, 168 168 Z" fill={color} />

      {/* Fitted bodice with sweetheart neckline */}
      <path d="M 110 170 Q 105 185, 105 210 Q 105 260, 108 300 Q 110 320, 115 320 L 185 320 Q 190 320, 192 300 Q 195 260, 195 210 Q 195 185, 190 170 Q 175 160, 150 158 Q 125 160, 110 170 Z" fill={color} />

      {/* Sweetheart neckline detail */}
      <path d="M 125 170 Q 130 180, 140 185 Q 150 188, 160 185 Q 170 180, 175 170 Q 168 175, 150 178 Q 132 175, 125 170 Z" fill={darkerColor} opacity="0.5" />

      {/* Bodice center seam */}
      <line x1="150" y1="185" x2="150" y2="320" stroke={darkerColor} strokeWidth="1" opacity="0.3" />

      {/* Waist gathering */}
      <path d="M 115 318 Q 130 325, 150 326 Q 170 325, 185 318" stroke={darkerColor} strokeWidth="2" fill="none" opacity="0.4" />

      {/* A-line flared skirt */}
      <path d="M 115 320 Q 100 380, 85 440 Q 75 490, 72 530 Q 72 545, 80 550 L 220 550 Q 228 545, 228 530 Q 225 490, 215 440 Q 200 380, 185 320 Z" fill={color} />

      {/* Skirt folds */}
      <path d="M 120 330 Q 110 420, 95 530" fill="none" stroke={darkerColor} strokeWidth="2" opacity="0.25" />
      <path d="M 150 326 Q 150 420, 150 545" fill="none" stroke={darkerColor} strokeWidth="2" opacity="0.2" />
      <path d="M 180 330 Q 190 420, 205 530" fill="none" stroke={darkerColor} strokeWidth="2" opacity="0.25" />

      {/* Skirt hem */}
      <path d="M 80 550 Q 150 560, 220 550" stroke={darkerColor} strokeWidth="2" fill="none" opacity="0.4" />

      {/* Highlights */}
      <ellipse cx="130" cy="250" rx="10" ry="25" fill={lighterColor} opacity="0.2" />
    </g>
  )
}

export function Cardigan({ color = '#9B59B6', className = '' }: TopProps) {
  const darkerColor = adjustColor(color, -25)
  const lighterColor = adjustColor(color, 20)

  return (
    <g className={className}>
      {/* Tank top underneath */}
      <path d="M 125 165 Q 120 175, 118 195 Q 115 240, 118 290 Q 120 330, 125 345 L 175 345 Q 180 330, 182 290 Q 185 240, 182 195 Q 180 175, 175 165 Q 165 160, 150 158 Q 135 160, 125 165 Z" fill="#FFFFFF" />
      <path d="M 130 165 Q 140 175, 150 178 Q 160 175, 170 165" stroke="#E8E8E8" strokeWidth="1.5" fill="none" />

      {/* Cardigan sides */}
      <path d="M 100 170 Q 90 200, 92 260 Q 95 320, 100 360 L 110 360 Q 108 320, 108 260 Q 108 200, 115 175 Z" fill={color} />
      <path d="M 200 170 Q 210 200, 208 260 Q 205 320, 200 360 L 190 360 Q 192 320, 192 260 Q 192 200, 185 175 Z" fill={color} />

      {/* Left front panel */}
      <path d="M 100 170 Q 95 175, 95 185 Q 92 220, 95 270 Q 98 320, 102 360 L 130 360 Q 125 320, 122 270 Q 120 220, 122 185 Q 125 175, 130 170 Z" fill={color} />

      {/* Right front panel */}
      <path d="M 200 170 Q 205 175, 205 185 Q 208 220, 205 270 Q 202 320, 198 360 L 170 360 Q 175 320, 178 270 Q 180 220, 178 185 Q 175 175, 170 170 Z" fill={color} />

      {/* V-neckline edge detail */}
      <path d="M 130 170 Q 135 175, 135 185" stroke={darkerColor} strokeWidth="3" fill="none" opacity="0.5" />
      <path d="M 170 170 Q 165 175, 165 185" stroke={darkerColor} strokeWidth="3" fill="none" opacity="0.5" />

      {/* Left sleeve */}
      <path d="M 100 170 Q 80 180, 65 210 Q 52 250, 50 300 Q 48 350, 50 380 L 72 378 Q 70 350, 72 300 Q 76 250, 88 210 Q 98 180, 108 172 Z" fill={color} />

      {/* Right sleeve */}
      <path d="M 200 170 Q 220 180, 235 210 Q 248 250, 250 300 Q 252 350, 250 380 L 228 378 Q 230 350, 228 300 Q 224 250, 212 210 Q 202 180, 192 172 Z" fill={color} />

      {/* Sleeve cuffs */}
      <rect x="45" y="375" width="30" height="12" rx="3" fill={darkerColor} />
      <rect x="225" y="375" width="30" height="12" rx="3" fill={darkerColor} />

      {/* Ribbed hem */}
      <path d="M 100 360 Q 105 365, 102 370 L 130 370 Q 127 365, 130 360 Z" fill={darkerColor} opacity="0.6" />
      <path d="M 170 360 Q 173 365, 170 370 L 198 370 Q 195 365, 200 360 Z" fill={darkerColor} opacity="0.6" />

      {/* Buttons */}
      <circle cx="128" cy="200" r="3" fill={lighterColor} opacity="0.6" />
      <circle cx="128" cy="240" r="3" fill={lighterColor} opacity="0.6" />
      <circle cx="128" cy="280" r="3" fill={lighterColor} opacity="0.6" />
    </g>
  )
}

export function DenimJacket({ color = '#4682B4', className = '' }: TopProps) {
  const darkerColor = adjustColor(color, -30)
  const lighterColor = adjustColor(color, 25)
  const stitchColor = '#E8D4A8'

  return (
    <g className={className}>
      {/* Main body */}
      <path d="M 95 170 Q 88 200, 90 250 Q 92 300, 95 340 Q 125 355, 150 355 Q 175 355, 205 340 Q 208 300, 210 250 Q 212 200, 205 170 Q 180 160, 150 158 Q 120 160, 95 170 Z" fill={color} />

      {/* Left collar */}
      <path d="M 120 165 Q 110 155, 100 152 Q 92 155, 88 165 Q 95 175, 108 178 Q 118 175, 125 170 Z" fill={color} />
      <path d="M 100 155 Q 105 162, 115 168" stroke={darkerColor} strokeWidth="2" fill="none" />

      {/* Right collar */}
      <path d="M 180 165 Q 190 155, 200 152 Q 208 155, 212 165 Q 205 175, 192 178 Q 182 175, 175 170 Z" fill={color} />
      <path d="M 200 155 Q 195 162, 185 168" stroke={darkerColor} strokeWidth="2" fill="none" />

      {/* Button placket */}
      <rect x="145" y="175" width="10" height="160" fill={darkerColor} opacity="0.3" />

      {/* Buttons */}
      <circle cx="150" cy="195" r="5" fill={darkerColor} />
      <circle cx="150" cy="230" r="5" fill={darkerColor} />
      <circle cx="150" cy="265" r="5" fill={darkerColor} />
      <circle cx="150" cy="300" r="5" fill={darkerColor} />

      {/* Left chest pocket */}
      <path d="M 105 200 Q 103 205, 105 235 L 135 235 Q 137 205, 135 200 Z" fill={darkerColor} opacity="0.25" />
      <path d="M 103 195 Q 102 200, 105 205 L 137 205 Q 140 200, 138 195 Q 125 192, 103 195 Z" fill={color} />
      <circle cx="120" cy="200" r="3" fill={darkerColor} />

      {/* Right chest pocket */}
      <path d="M 165 200 Q 163 205, 165 235 L 195 235 Q 197 205, 195 200 Z" fill={darkerColor} opacity="0.25" />
      <path d="M 163 195 Q 162 200, 165 205 L 197 205 Q 200 200, 198 195 Q 185 192, 163 195 Z" fill={color} />
      <circle cx="180" cy="200" r="3" fill={darkerColor} />

      {/* Left sleeve */}
      <path d="M 95 170 Q 75 180, 62 210 Q 52 250, 52 300 Q 52 330, 55 350 L 78 350 Q 76 330, 76 300 Q 78 250, 88 210 Q 96 185, 105 175 Z" fill={color} />

      {/* Right sleeve */}
      <path d="M 205 170 Q 225 180, 238 210 Q 248 250, 248 300 Q 248 330, 245 350 L 222 350 Q 224 330, 224 300 Q 222 250, 212 210 Q 204 185, 195 175 Z" fill={color} />

      {/* Sleeve cuffs */}
      <rect x="52" y="345" width="28" height="12" rx="2" fill={darkerColor} opacity="0.4" />
      <rect x="220" y="345" width="28" height="12" rx="2" fill={darkerColor} opacity="0.4" />
      <circle cx="73" cy="351" r="3" fill={darkerColor} />
      <circle cx="227" cy="351" r="3" fill={darkerColor} />

      {/* Decorative stitching */}
      <path d="M 100 158 Q 108 165, 118 168" stroke={stitchColor} strokeWidth="1" strokeDasharray="3,2" fill="none" opacity="0.6" />
      <path d="M 200 158 Q 192 165, 182 168" stroke={stitchColor} strokeWidth="1" strokeDasharray="3,2" fill="none" opacity="0.6" />
      <path d="M 95 200 L 95 335" stroke={stitchColor} strokeWidth="1" strokeDasharray="4,3" opacity="0.5" />
      <path d="M 205 200 L 205 335" stroke={stitchColor} strokeWidth="1" strokeDasharray="4,3" opacity="0.5" />

      {/* Hem band */}
      <path d="M 95 340 Q 125 355, 150 357 Q 175 355, 205 340 L 205 350 Q 175 365, 150 367 Q 125 365, 95 350 Z" fill={darkerColor} opacity="0.4" />

      {/* Highlights */}
      <ellipse cx="115" cy="280" rx="8" ry="20" fill={lighterColor} opacity="0.15" />
      <ellipse cx="185" cy="280" rx="8" ry="20" fill={lighterColor} opacity="0.15" />
    </g>
  )
}

// Thumbnails
export function SundressThumbnail({ color = '#FFD700' }: { color?: string }) {
  const darkerColor = adjustColor(color, -30)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <line x1="18" y1="5" x2="20" y2="12" stroke={color} strokeWidth="2" />
      <line x1="32" y1="5" x2="30" y2="12" stroke={color} strokeWidth="2" />
      <path d="M 17 12 Q 15 18, 16 24 L 34 24 Q 35 18, 33 12 Q 28 10, 25 10 Q 22 10, 17 12 Z" fill={color} />
      <path d="M 19 12 Q 22 15, 25 16 Q 28 15, 31 12" stroke={darkerColor} strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M 16 24 Q 10 35, 8 45 L 42 45 Q 40 35, 34 24 Z" fill={color} />
      <path d="M 18 26 Q 14 35, 12 44" stroke={darkerColor} strokeWidth="1" opacity="0.3" fill="none" />
      <path d="M 32 26 Q 36 35, 38 44" stroke={darkerColor} strokeWidth="1" opacity="0.3" fill="none" />
    </svg>
  )
}

export function CardiganThumbnail({ color = '#9B59B6' }: { color?: string }) {
  const darkerColor = adjustColor(color, -25)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <path d="M 20 12 Q 18 20, 20 35 L 30 35 Q 32 20, 30 12 Q 27 10, 25 10 Q 23 10, 20 12 Z" fill="#FFFFFF" />
      <path d="M 15 12 Q 12 20, 14 35 L 22 35 Q 20 20, 22 12 Z" fill={color} />
      <path d="M 35 12 Q 38 20, 36 35 L 28 35 Q 30 20, 28 12 Z" fill={color} />
      <path d="M 15 12 Q 8 16, 5 30 L 10 30 Q 12 20, 17 14 Z" fill={color} />
      <path d="M 35 12 Q 42 16, 45 30 L 40 30 Q 38 20, 33 14 Z" fill={color} />
      <rect x="4" y="28" width="7" height="4" rx="1" fill={darkerColor} />
      <rect x="39" y="28" width="7" height="4" rx="1" fill={darkerColor} />
    </svg>
  )
}

export function DenimJacketThumbnail({ color = '#4682B4' }: { color?: string }) {
  const darkerColor = adjustColor(color, -30)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <path d="M 14 12 Q 12 20, 14 35 L 36 35 Q 38 20, 36 12 Q 30 8, 25 8 Q 20 8, 14 12 Z" fill={color} />
      <path d="M 18 10 Q 14 8, 12 12 Q 16 15, 20 14 Z" fill={color} />
      <path d="M 32 10 Q 36 8, 38 12 Q 34 15, 30 14 Z" fill={color} />
      <rect x="23" y="14" width="4" height="18" fill={darkerColor} opacity="0.3" />
      <circle cx="25" cy="18" r="1.5" fill={darkerColor} />
      <circle cx="25" cy="25" r="1.5" fill={darkerColor} />
      <rect x="15" y="16" width="6" height="5" fill={darkerColor} opacity="0.2" />
      <rect x="29" y="16" width="6" height="5" fill={darkerColor} opacity="0.2" />
      <path d="M 14 12 Q 6 16, 5 28 L 10 28 Q 10 20, 16 14 Z" fill={color} />
      <path d="M 36 12 Q 44 16, 45 28 L 40 28 Q 40 20, 34 14 Z" fill={color} />
    </svg>
  )
}

export default { Sundress, Cardigan, DenimJacket }
