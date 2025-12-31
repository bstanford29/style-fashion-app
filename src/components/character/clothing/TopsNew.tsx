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

export function Sundress({ color = '#FFB6C1', className = '' }: TopProps) {
  const darkerColor = adjustColor(color, -30)
  const lighterColor = adjustColor(color, 25)

  return (
    <g className={className}>
      {/* Spaghetti straps - extended to cover neck area from y=130 */}
      <path d="M 122 165 Q 118 148, 115 130 L 128 128 Q 130 145, 132 162 Z" fill={color} />
      <path d="M 178 165 Q 182 148, 185 130 L 172 128 Q 170 145, 168 162 Z" fill={color} />

      {/* Fitted bodice with sweetheart neckline - starts at y=160 to cover shoulders */}
      <path d="M 105 165 Q 98 185, 98 215 Q 98 270, 102 320 Q 105 345, 112 345 L 188 345 Q 195 345, 198 320 Q 202 270, 202 215 Q 202 185, 195 165 Q 178 152, 150 150 Q 122 152, 105 165 Z" fill={color} />

      {/* Sweetheart neckline detail */}
      <path d="M 122 165 Q 128 178, 140 185 Q 150 188, 160 185 Q 172 178, 178 165 Q 170 175, 150 180 Q 130 175, 122 165 Z" fill={darkerColor} opacity="0.5" />

      {/* Bodice center seam */}
      <line x1="150" y1="185" x2="150" y2="345" stroke={darkerColor} strokeWidth="1" opacity="0.3" />

      {/* Waist gathering */}
      <path d="M 112 340 Q 130 350, 150 352 Q 170 350, 188 340" stroke={darkerColor} strokeWidth="2" fill="none" opacity="0.4" />

      {/* A-line flared skirt - extended to y=745 to cover legs completely */}
      <path d="M 112 345 Q 92 420, 72 520 Q 58 620, 55 700 Q 55 730, 65 745 L 235 745 Q 245 730, 245 700 Q 242 620, 228 520 Q 208 420, 188 345 Z" fill={color} />

      {/* Skirt folds */}
      <path d="M 118 360 Q 100 500, 78 700" fill="none" stroke={darkerColor} strokeWidth="2" opacity="0.25" />
      <path d="M 150 352 Q 150 520, 150 735" fill="none" stroke={darkerColor} strokeWidth="2" opacity="0.2" />
      <path d="M 182 360 Q 200 500, 222 700" fill="none" stroke={darkerColor} strokeWidth="2" opacity="0.25" />

      {/* Skirt hem */}
      <path d="M 65 745 Q 150 760, 235 745" stroke={darkerColor} strokeWidth="3" fill="none" opacity="0.4" />

      {/* Highlights */}
      <ellipse cx="128" cy="260" rx="12" ry="30" fill={lighterColor} opacity="0.2" />
    </g>
  )
}

export function Cardigan({ color = '#DEB887', className = '' }: TopProps) {
  const darkerColor = adjustColor(color, -25)
  const lighterColor = adjustColor(color, 20)

  return (
    <g className={className}>
      {/* Tank top underneath - extended for full coverage y=155 to y=380 */}
      <path d="M 120 158 Q 112 175, 110 200 Q 105 260, 110 330 Q 115 370, 122 385 L 178 385 Q 185 370, 190 330 Q 195 260, 190 200 Q 188 175, 180 158 Q 168 150, 150 148 Q 132 150, 120 158 Z" fill="#FFFFFF" />
      <path d="M 128 158 Q 140 172, 150 175 Q 160 172, 172 158" stroke="#E8E8E8" strokeWidth="1.5" fill="none" />

      {/* Cardigan sides - extended y=165 to y=395 */}
      <path d="M 95 168 Q 82 205, 85 280 Q 88 350, 95 395 L 108 395 Q 105 350, 105 280 Q 105 205, 112 172 Z" fill={color} />
      <path d="M 205 168 Q 218 205, 215 280 Q 212 350, 205 395 L 192 395 Q 195 350, 195 280 Q 195 205, 188 172 Z" fill={color} />

      {/* Left front panel - extended coverage */}
      <path d="M 95 168 Q 88 178, 88 195 Q 84 245, 88 310 Q 92 365, 98 395 L 132 395 Q 126 365, 122 310 Q 118 245, 120 195 Q 122 178, 128 168 Z" fill={color} />

      {/* Right front panel - extended coverage */}
      <path d="M 205 168 Q 212 178, 212 195 Q 216 245, 212 310 Q 208 365, 202 395 L 168 395 Q 174 365, 178 310 Q 182 245, 180 195 Q 178 178, 172 168 Z" fill={color} />

      {/* V-neckline edge detail */}
      <path d="M 128 168 Q 135 178, 135 192" stroke={darkerColor} strokeWidth="3" fill="none" opacity="0.5" />
      <path d="M 172 168 Q 165 178, 165 192" stroke={darkerColor} strokeWidth="3" fill="none" opacity="0.5" />

      {/* Left sleeve - extended to cover full arm to wrist y=420 */}
      <path d="M 95 168 Q 72 185, 55 225 Q 40 280, 40 345 Q 38 395, 42 420 L 70 418 Q 68 395, 68 345 Q 70 280, 85 225 Q 98 185, 110 170 Z" fill={color} />

      {/* Right sleeve - extended to cover full arm to wrist y=420 */}
      <path d="M 205 168 Q 228 185, 245 225 Q 260 280, 260 345 Q 262 395, 258 420 L 230 418 Q 232 395, 232 345 Q 230 280, 215 225 Q 202 185, 190 170 Z" fill={color} />

      {/* Sleeve cuffs */}
      <rect x="38" y="415" width="35" height="14" rx="4" fill={darkerColor} />
      <rect x="227" y="415" width="35" height="14" rx="4" fill={darkerColor} />

      {/* Ribbed hem */}
      <path d="M 98 395 Q 105 402, 100 410 L 132 410 Q 127 402, 132 395 Z" fill={darkerColor} opacity="0.6" />
      <path d="M 168 395 Q 173 402, 168 410 L 202 410 Q 197 402, 202 395 Z" fill={darkerColor} opacity="0.6" />

      {/* Buttons */}
      <circle cx="128" cy="210" r="4" fill={lighterColor} opacity="0.6" />
      <circle cx="128" cy="260" r="4" fill={lighterColor} opacity="0.6" />
      <circle cx="128" cy="310" r="4" fill={lighterColor} opacity="0.6" />
      <circle cx="128" cy="360" r="4" fill={lighterColor} opacity="0.6" />
    </g>
  )
}

export function DenimJacket({ color = '#4682B4', className = '' }: TopProps) {
  const darkerColor = adjustColor(color, -30)
  const lighterColor = adjustColor(color, 25)
  const stitchColor = '#E8D4A8'

  return (
    <g className={className}>
      {/* Main body - extended from y=162 to y=395 for full coverage and overlap with bottoms */}
      <path d="M 90 165 Q 82 205, 85 265 Q 88 330, 92 380 Q 125 400, 150 400 Q 175 400, 208 380 Q 212 330, 215 265 Q 218 205, 210 165 Q 180 152, 150 150 Q 120 152, 90 165 Z" fill={color} />

      {/* Left collar */}
      <path d="M 118 162 Q 105 150, 95 145 Q 85 148, 80 162 Q 88 175, 105 180 Q 116 176, 125 168 Z" fill={color} />
      <path d="M 95 150 Q 102 160, 115 168" stroke={darkerColor} strokeWidth="2" fill="none" />

      {/* Right collar */}
      <path d="M 182 162 Q 195 150, 205 145 Q 215 148, 220 162 Q 212 175, 195 180 Q 184 176, 175 168 Z" fill={color} />
      <path d="M 205 150 Q 198 160, 185 168" stroke={darkerColor} strokeWidth="2" fill="none" />

      {/* Button placket */}
      <rect x="145" y="175" width="10" height="200" fill={darkerColor} opacity="0.3" />

      {/* Buttons */}
      <circle cx="150" cy="200" r="5" fill={darkerColor} />
      <circle cx="150" cy="245" r="5" fill={darkerColor} />
      <circle cx="150" cy="290" r="5" fill={darkerColor} />
      <circle cx="150" cy="335" r="5" fill={darkerColor} />

      {/* Left chest pocket */}
      <path d="M 102 210 Q 100 218, 102 255 L 138 255 Q 140 218, 138 210 Z" fill={darkerColor} opacity="0.25" />
      <path d="M 100 202 Q 98 210, 102 218 L 140 218 Q 144 210, 142 202 Q 125 198, 100 202 Z" fill={color} />
      <circle cx="120" cy="210" r="3" fill={darkerColor} />

      {/* Right chest pocket */}
      <path d="M 162 210 Q 160 218, 162 255 L 198 255 Q 200 218, 198 210 Z" fill={darkerColor} opacity="0.25" />
      <path d="M 160 202 Q 158 210, 162 218 L 200 218 Q 204 210, 202 202 Q 185 198, 160 202 Z" fill={color} />
      <circle cx="180" cy="210" r="3" fill={darkerColor} />

      {/* Left sleeve - extended to cover full arm to wrist y=400 */}
      <path d="M 90 165 Q 68 182, 52 225 Q 40 280, 42 350 Q 44 385, 48 405 L 75 402 Q 72 385, 72 350 Q 74 280, 86 225 Q 98 182, 110 170 Z" fill={color} />

      {/* Right sleeve - extended to cover full arm to wrist y=400 */}
      <path d="M 210 165 Q 232 182, 248 225 Q 260 280, 258 350 Q 256 385, 252 405 L 225 402 Q 228 385, 228 350 Q 226 280, 214 225 Q 202 182, 190 170 Z" fill={color} />

      {/* Sleeve cuffs */}
      <rect x="45" y="398" width="32" height="14" rx="3" fill={darkerColor} opacity="0.5" />
      <rect x="223" y="398" width="32" height="14" rx="3" fill={darkerColor} opacity="0.5" />
      <circle cx="70" cy="405" r="3" fill={darkerColor} />
      <circle cx="230" cy="405" r="3" fill={darkerColor} />

      {/* Decorative stitching */}
      <path d="M 95 152 Q 105 162, 118 168" stroke={stitchColor} strokeWidth="1" strokeDasharray="3,2" fill="none" opacity="0.6" />
      <path d="M 205 152 Q 195 162, 182 168" stroke={stitchColor} strokeWidth="1" strokeDasharray="3,2" fill="none" opacity="0.6" />
      <path d="M 92 210 L 92 375" stroke={stitchColor} strokeWidth="1" strokeDasharray="4,3" opacity="0.5" />
      <path d="M 208 210 L 208 375" stroke={stitchColor} strokeWidth="1" strokeDasharray="4,3" opacity="0.5" />

      {/* Hem band */}
      <path d="M 92 380 Q 125 400, 150 405 Q 175 400, 208 380 L 208 395 Q 175 415, 150 420 Q 125 415, 92 395 Z" fill={darkerColor} opacity="0.4" />

      {/* Highlights */}
      <ellipse cx="112" cy="300" rx="10" ry="25" fill={lighterColor} opacity="0.15" />
      <ellipse cx="188" cy="300" rx="10" ry="25" fill={lighterColor} opacity="0.15" />
    </g>
  )
}

// Thumbnails
export function SundressThumbnail({ color = '#FFB6C1' }: { color?: string }) {
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

export function CardiganThumbnail({ color = '#DEB887' }: { color?: string }) {
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
