'use client'

/**
 * New Bottom Clothing SVG Components
 * ViewBox: 300x800
 * Hips: y=350-400, Legs: y=400-740
 */

interface BottomProps {
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

export function Overalls({ color = '#4A90D9', className = '' }: BottomProps) {
  const darkerColor = adjustColor(color, -25)
  const lighterColor = adjustColor(color, 20)

  return (
    <g className={className}>
      {/* Straps over shoulders - extended to y=155 for neck coverage */}
      <path d="M 112 155 Q 105 165, 108 195 L 116 195 L 118 340 L 132 340 L 130 195 L 138 195 Q 142 165, 135 155 Z" fill={darkerColor} />
      <path d="M 165 155 Q 158 165, 162 195 L 170 195 L 168 340 L 182 340 L 184 195 L 192 195 Q 195 165, 188 155 Z" fill={darkerColor} />
      <line x1="123" y1="170" x2="125" y2="330" stroke={lighterColor} strokeWidth="1.5" opacity="0.4" />
      <line x1="175" y1="170" x2="175" y2="330" stroke={lighterColor} strokeWidth="1.5" opacity="0.4" />

      {/* Bib front - extended coverage y=190 to y=340 */}
      <path d="M 112 195 Q 105 220, 108 290 Q 112 330, 118 340 L 182 340 Q 188 330, 192 290 Q 195 220, 188 195 Q 168 188, 150 188 Q 132 188, 112 195 Z" fill={color} />

      {/* Bib pocket */}
      <path d="M 128 245 L 128 290 L 172 290 L 172 245 Q 165 238, 150 238 Q 135 238, 128 245 Z" fill={darkerColor} opacity="0.3" />
      <path d="M 128 245 Q 150 238, 172 245" stroke={darkerColor} strokeWidth="2" fill="none" />
      <line x1="150" y1="250" x2="150" y2="285" stroke={darkerColor} strokeWidth="1" opacity="0.3" />

      {/* Side buttons */}
      <circle cx="118" cy="340" r="6" fill="#C0C0C0" />
      <circle cx="118" cy="340" r="4" fill="#A0A0A0" />
      <circle cx="182" cy="340" r="6" fill="#C0C0C0" />
      <circle cx="182" cy="340" r="4" fill="#A0A0A0" />

      {/* Hip/crotch area to cover underwear */}
      <path d="M 92 340 Q 88 380, 95 420 L 130 420 L 150 405 L 170 420 L 205 420 Q 212 380, 208 340 Z" fill={color} />

      {/* Left leg - extended to y=750 for full ankle coverage */}
      <path d="M 95 420 Q 88 500, 92 590 Q 96 680, 98 740 L 145 740 Q 142 680, 140 590 Q 138 500, 130 420 Z" fill={color} />

      {/* Right leg - extended to y=750 for full ankle coverage */}
      <path d="M 170 420 Q 162 500, 160 590 Q 158 680, 155 740 L 202 740 Q 204 680, 208 590 Q 212 500, 205 420 Z" fill={color} />

      {/* Center seam */}
      <path d="M 130 420 Q 150 438, 170 420" fill="none" stroke={darkerColor} strokeWidth="2" />
      <line x1="150" y1="340" x2="150" y2="438" stroke={darkerColor} strokeWidth="2" />

      {/* Side pockets */}
      <path d="M 95 355 Q 108 375, 110 410" stroke={darkerColor} strokeWidth="2.5" fill="none" />
      <path d="M 205 355 Q 192 375, 190 410" stroke={darkerColor} strokeWidth="2.5" fill="none" />

      {/* Knee highlights */}
      <ellipse cx="118" cy="600" rx="20" ry="30" fill={lighterColor} opacity="0.15" />
      <ellipse cx="182" cy="600" rx="20" ry="30" fill={lighterColor} opacity="0.15" />

      {/* Inner leg seams */}
      <line x1="142" y1="430" x2="144" y2="740" stroke={darkerColor} strokeWidth="1.5" opacity="0.4" />
      <line x1="158" y1="430" x2="156" y2="740" stroke={darkerColor} strokeWidth="1.5" opacity="0.4" />

      {/* Hem cuffs */}
      <rect x="98" y="732" width="47" height="12" fill={darkerColor} opacity="0.5" rx="3" />
      <rect x="155" y="732" width="47" height="12" fill={darkerColor} opacity="0.5" rx="3" />
    </g>
  )
}

export function Tutu({ color = '#FFB6C1', className = '' }: BottomProps) {
  const darkerColor = adjustColor(color, -30)
  const lighterColor = adjustColor(color, 25)

  return (
    <g className={className}>
      {/* Waistband - starts at y=340 for overlap with tops */}
      <path d="M 98 340 Q 92 350, 92 362 Q 92 372, 98 378 L 202 378 Q 208 372, 208 362 Q 208 350, 202 340 Q 175 330, 150 330 Q 125 330, 98 340 Z" fill={darkerColor} />

      {/* Hip area to cover underwear */}
      <path d="M 92 378 Q 88 400, 92 420 L 208 420 Q 212 400, 208 378 Z" fill={darkerColor} opacity="0.6" />

      {/* Bottom tulle layer - extended to y=520 */}
      <path d="M 45 420 Q 38 450, 35 480 Q 32 510, 42 540 Q 32 548, 50 555 Q 40 565, 68 568 Q 55 578, 90 578 Q 78 590, 120 585 Q 108 598, 150 595 Q 142 608, 185 585 Q 172 598, 210 578 Q 195 590, 232 568 Q 218 578, 250 555 Q 238 565, 258 540 Q 268 510, 265 480 Q 262 450, 255 420 Q 205 415, 150 415 Q 95 415, 45 420 Z" fill={darkerColor} opacity="0.35" />

      {/* Middle tulle layer - extended to y=505 */}
      <path d="M 52 420 Q 45 448, 42 475 Q 40 502, 48 525 Q 38 532, 58 538 Q 48 548, 78 550 Q 65 560, 105 558 Q 92 572, 140 568 Q 128 582, 150 578 Q 135 585, 175 568 Q 162 582, 200 558 Q 185 572, 222 550 Q 208 560, 242 538 Q 230 548, 252 525 Q 260 502, 258 475 Q 255 448, 248 420 Q 200 415, 150 415 Q 100 415, 52 420 Z" fill={color} opacity="0.5" />

      {/* Top tulle layer - extended to y=488 */}
      <path d="M 58 420 Q 52 445, 50 470 Q 48 495, 55 515 Q 45 522, 65 528 Q 55 538, 88 540 Q 75 552, 118 548 Q 105 562, 150 558 Q 138 568, 182 548 Q 168 562, 212 540 Q 195 552, 235 528 Q 222 538, 245 515 Q 252 495, 250 470 Q 248 445, 242 420 Q 198 415, 150 415 Q 102 415, 58 420 Z" fill={lighterColor} opacity="0.6" />

      {/* Waistband decorative line */}
      <path d="M 98 360 Q 125 356, 150 360 Q 175 356, 202 360" stroke={color} strokeWidth="1.5" fill="none" opacity="0.4" />

      {/* Center bow */}
      <ellipse cx="150" cy="355" rx="10" ry="6" fill={darkerColor} />
      <ellipse cx="138" cy="355" rx="12" ry="7" fill={color} />
      <ellipse cx="162" cy="355" rx="12" ry="7" fill={color} />
      <circle cx="150" cy="355" r="5" fill={darkerColor} />

      {/* Sparkles */}
      <circle cx="72" cy="490" r="2" fill="white" opacity="0.7" />
      <circle cx="228" cy="480" r="2" fill="white" opacity="0.7" />
      <circle cx="150" cy="520" r="2.5" fill="white" opacity="0.6" />
      <circle cx="105" cy="535" r="1.5" fill="white" opacity="0.5" />
      <circle cx="195" cy="540" r="1.5" fill="white" opacity="0.5" />
    </g>
  )
}

export function Joggers({ color = '#2C3E50', className = '' }: BottomProps) {
  const darkerColor = adjustColor(color, -20)
  const lighterColor = adjustColor(color, 25)
  const stripeColor = '#FFFFFF'

  return (
    <g className={className}>
      {/* Elastic waistband - starts at y=340 for overlap with tops */}
      <path d="M 95 340 Q 88 350, 88 362 Q 88 375, 95 385 L 205 385 Q 212 375, 212 362 Q 212 350, 205 340 Q 175 328, 150 328 Q 125 328, 95 340 Z" fill={lighterColor} />

      {/* Waistband ribbing */}
      <path d="M 98 345 Q 150 340, 202 345" stroke={darkerColor} strokeWidth="1" opacity="0.3" />
      <path d="M 95 355 Q 150 350, 205 355" stroke={darkerColor} strokeWidth="1" opacity="0.3" />
      <path d="M 92 365 Q 150 360, 208 365" stroke={darkerColor} strokeWidth="1" opacity="0.3" />
      <path d="M 95 375 Q 150 370, 205 375" stroke={darkerColor} strokeWidth="1" opacity="0.3" />

      {/* Drawstring */}
      <path d="M 128 352 Q 140 356, 150 352 Q 160 356, 172 352" stroke="#888888" strokeWidth="2" fill="none" />
      <circle cx="132" cy="358" r="4" fill="#666666" />
      <circle cx="168" cy="358" r="4" fill="#666666" />

      {/* Hip/crotch area to cover underwear */}
      <path d="M 88 385 Q 85 415, 92 445 L 132 445 L 150 430 L 168 445 L 208 445 Q 215 415, 212 385 Z" fill={color} />

      {/* Left leg - extended to y=750 for full ankle coverage */}
      <path d="M 92 445 Q 85 520, 88 600 Q 92 680, 96 735 Q 100 748, 110 750 L 145 750 Q 152 748, 155 735 Q 150 680, 148 600 Q 145 520, 132 445 Z" fill={color} />

      {/* Right leg - extended to y=750 for full ankle coverage */}
      <path d="M 168 445 Q 155 520, 152 600 Q 150 680, 145 735 Q 148 748, 155 750 L 190 750 Q 200 748, 204 735 Q 208 680, 212 600 Q 215 520, 208 445 Z" fill={color} />

      {/* Left side stripe */}
      <path d="M 88 385 Q 82 450, 85 540 Q 88 640, 95 730" stroke={stripeColor} strokeWidth="7" fill="none" opacity="0.85" />

      {/* Right side stripe */}
      <path d="M 212 385 Q 218 450, 215 540 Q 212 640, 205 730" stroke={stripeColor} strokeWidth="7" fill="none" opacity="0.85" />

      {/* Center seam */}
      <path d="M 132 445 Q 150 465, 168 445" fill="none" stroke={darkerColor} strokeWidth="1.5" opacity="0.4" />
      <line x1="150" y1="385" x2="150" y2="465" stroke={darkerColor} strokeWidth="1.5" opacity="0.4" />

      {/* Inner leg seams */}
      <path d="M 148 460 Q 150 620, 152 740" stroke={darkerColor} strokeWidth="1" opacity="0.3" />
      <path d="M 152 460 Q 150 620, 148 740" stroke={darkerColor} strokeWidth="1" opacity="0.3" />

      {/* Knee bunching */}
      <path d="M 95 590 Q 125 598, 145 590" stroke={darkerColor} strokeWidth="1" opacity="0.3" />
      <path d="M 92 608 Q 120 618, 148 608" stroke={darkerColor} strokeWidth="1" opacity="0.3" />
      <path d="M 155 590 Q 175 598, 205 590" stroke={darkerColor} strokeWidth="1" opacity="0.3" />
      <path d="M 152 608 Q 180 618, 208 608" stroke={darkerColor} strokeWidth="1" opacity="0.3" />

      {/* Ankle cuffs */}
      <path d="M 100 738 Q 95 745, 100 752 Q 110 758, 130 758 Q 150 758, 155 752 Q 158 745, 155 738 Z" fill={darkerColor} opacity="0.6" />
      <path d="M 145 738 Q 142 745, 145 752 Q 155 758, 175 758 Q 195 758, 200 752 Q 205 745, 200 738 Z" fill={darkerColor} opacity="0.6" />

      {/* Cuff ribbing */}
      <path d="M 105 744 Q 130 740, 150 744" stroke={color} strokeWidth="1" opacity="0.5" />
      <path d="M 105 750 Q 130 746, 150 750" stroke={color} strokeWidth="1" opacity="0.5" />
      <path d="M 150 744 Q 175 740, 195 744" stroke={color} strokeWidth="1" opacity="0.5" />
      <path d="M 150 750 Q 175 746, 195 750" stroke={color} strokeWidth="1" opacity="0.5" />

      {/* Side pockets */}
      <path d="M 92 395 Q 108 415, 110 455" stroke={darkerColor} strokeWidth="2" fill="none" />
      <path d="M 208 395 Q 192 415, 190 455" stroke={darkerColor} strokeWidth="2" fill="none" />
    </g>
  )
}

// Thumbnails
export function OverallsThumbnail({ color = '#4A90D9' }: { color?: string }) {
  const dark = adjustColor(color, -25)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <path d="M 16 5 L 18 20 L 22 20 L 20 5 Z" fill={dark} />
      <path d="M 30 5 L 28 20 L 32 20 L 34 5 Z" fill={dark} />
      <rect x="15" y="10" width="20" height="12" rx="2" fill={color} />
      <circle cx="17" cy="20" r="2" fill="#C0C0C0" />
      <circle cx="33" cy="20" r="2" fill="#C0C0C0" />
      <path d="M 12 22 L 10 45 L 22 45 L 24 22 Z" fill={color} />
      <path d="M 26 22 L 28 45 L 40 45 L 38 22 Z" fill={color} />
      <rect x="19" y="12" width="12" height="6" rx="1" fill={dark} opacity="0.3" />
    </svg>
  )
}

export function TutuThumbnail({ color = '#FFB6C1' }: { color?: string }) {
  const dark = adjustColor(color, -30)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <rect x="15" y="10" width="20" height="6" rx="3" fill={dark} />
      <path d="M 5 16 Q 3 25, 8 35 Q 15 40, 25 42 Q 35 40, 42 35 Q 47 25, 45 16 Q 35 14, 25 14 Q 15 14, 5 16 Z" fill={color} opacity="0.6" />
      <path d="M 8 16 Q 6 24, 10 32 Q 18 38, 25 39 Q 32 38, 40 32 Q 44 24, 42 16" fill={color} opacity="0.5" />
      <ellipse cx="22" cy="13" rx="5" ry="3" fill={color} />
      <ellipse cx="28" cy="13" rx="5" ry="3" fill={color} />
      <circle cx="25" cy="13" r="2" fill={dark} />
      <circle cx="15" cy="28" r="1" fill="white" opacity="0.7" />
      <circle cx="35" cy="25" r="1" fill="white" opacity="0.7" />
    </svg>
  )
}

export function JoggersThumbnail({ color = '#2C3E50' }: { color?: string }) {
  const dark = adjustColor(color, -20)
  const light = adjustColor(color, 25)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <rect x="12" y="5" width="26" height="8" rx="3" fill={light} />
      <path d="M 14 7 Q 25 5, 36 7" stroke={dark} strokeWidth="0.5" opacity="0.3" />
      <path d="M 14 10 Q 25 8, 36 10" stroke={dark} strokeWidth="0.5" opacity="0.3" />
      <circle cx="22" cy="9" r="1.5" fill="#666" />
      <circle cx="28" cy="9" r="1.5" fill="#666" />
      <path d="M 12 13 L 10 42 L 20 42 L 22 13 Z" fill={color} />
      <path d="M 28 13 L 30 42 L 40 42 L 38 13 Z" fill={color} />
      <path d="M 11 13 L 9 42" stroke="white" strokeWidth="2.5" opacity="0.85" />
      <path d="M 39 13 L 41 42" stroke="white" strokeWidth="2.5" opacity="0.85" />
      <rect x="10" y="40" width="10" height="4" rx="2" fill={dark} opacity="0.6" />
      <rect x="30" y="40" width="10" height="4" rx="2" fill={dark} opacity="0.6" />
    </svg>
  )
}

export default { Overalls, Tutu, Joggers }
