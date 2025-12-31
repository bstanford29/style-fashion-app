'use client'

/**
 * Bottom Clothing SVG Components
 * All positioned to fit the 300x800 character viewBox
 *
 * NEW CHARACTER PROPORTIONS:
 * - Waist/hips: y=350-400
 * - Legs: y=400-740 (Left: x=110-130, Right: x=170-190)
 * - Knee level: ~y=580
 * - Feet start at y=740
 */

interface BottomProps {
  color?: string
  className?: string
}

// ============================================================================
// 1. Jeans
// ============================================================================
export function Jeans({ color = '#2C3E50', className = '' }: BottomProps) {
  const darkerColor = adjustColor(color, -20)
  const lighterColor = adjustColor(color, 20)

  return (
    <g className={className} data-item="jeans">
      {/* Waistband - starts at y=340 to overlap with tops */}
      <path
        d="M 102 340
           Q 95 348, 95 365
           L 205 365
           Q 205 348, 198 340
           Q 175 330, 150 330
           Q 125 330, 102 340
           Z"
        fill={darkerColor}
      />

      {/* Belt loops */}
      <rect x="108" y="338" width="6" height="26" fill={darkerColor} />
      <rect x="140" y="338" width="6" height="26" fill={darkerColor} />
      <rect x="154" y="338" width="6" height="26" fill={darkerColor} />
      <rect x="186" y="338" width="6" height="26" fill={darkerColor} />

      {/* Hip/crotch area to cover underwear at y=350-410 */}
      <path
        d="M 95 365
           Q 92 395, 100 420
           L 130 420
           L 150 410
           L 170 420
           L 200 420
           Q 208 395, 205 365
           Z"
        fill={color}
      />

      {/* Left leg - matches body: x=110-130, y=400-745 with overlap */}
      <path
        d="M 100 420
           Q 100 480, 102 550
           Q 104 620, 106 690
           Q 105 720, 100 750
           L 140 750
           Q 138 720, 138 690
           Q 136 620, 136 550
           Q 136 480, 130 420
           Z"
        fill={color}
      />

      {/* Right leg - matches body: x=170-190, y=400-745 with overlap */}
      <path
        d="M 170 420
           Q 164 480, 164 550
           Q 164 620, 162 690
           Q 162 720, 160 750
           L 200 750
           Q 198 720, 196 690
           Q 196 620, 198 550
           Q 200 480, 200 420
           Z"
        fill={color}
      />

      {/* Center seam/fly */}
      <path
        d="M 130 420 Q 150 435, 170 420"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
      />
      <line x1="150" y1="365" x2="150" y2="435" stroke={darkerColor} strokeWidth="2" />

      {/* Front pockets */}
      <path
        d="M 98 370 Q 115 385, 118 415 L 105 418 Q 100 392, 98 370 Z"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
      />
      <path
        d="M 202 370 Q 185 385, 182 415 L 195 418 Q 200 392, 202 370 Z"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
      />

      {/* Knee wear highlights */}
      <ellipse cx="118" cy="590" rx="12" ry="22" fill={lighterColor} opacity="0.2" />
      <ellipse cx="182" cy="590" rx="12" ry="22" fill={lighterColor} opacity="0.2" />

      {/* Inner leg seams */}
      <line x1="138" y1="430" x2="138" y2="750" stroke={darkerColor} strokeWidth="1" opacity="0.5" />
      <line x1="162" y1="430" x2="162" y2="750" stroke={darkerColor} strokeWidth="1" opacity="0.5" />

      {/* Hem details */}
      <line x1="100" y1="745" x2="140" y2="745" stroke={darkerColor} strokeWidth="3" />
      <line x1="160" y1="745" x2="200" y2="745" stroke={darkerColor} strokeWidth="3" />
    </g>
  )
}

// ============================================================================
// 2. Skirt (A-Line)
// ============================================================================
export function Skirt({ color = '#E74C3C', className = '' }: BottomProps) {
  const darkerColor = adjustColor(color, -20)

  return (
    <g className={className} data-item="skirt">
      {/* Waistband - starts at y=340 to overlap with tops */}
      <path
        d="M 105 340
           Q 98 350, 98 368
           L 202 368
           Q 202 350, 195 340
           Q 175 330, 150 330
           Q 125 330, 105 340
           Z"
        fill={darkerColor}
      />

      {/* Hip area to cover underwear */}
      <path
        d="M 98 368
           Q 95 395, 92 420
           L 208 420
           Q 205 395, 202 368
           Z"
        fill={color}
      />

      {/* Main skirt body - A-line flare to knee level y=600 */}
      <path
        d="M 92 420
           Q 78 490, 72 560
           Q 70 595, 75 610
           L 225 610
           Q 230 595, 228 560
           Q 222 490, 208 420
           Z"
        fill={color}
      />

      {/* Hem detail */}
      <path
        d="M 75 610
           Q 90 622, 125 616
           Q 150 612, 175 616
           Q 210 622, 225 610"
        fill="none"
        stroke={darkerColor}
        strokeWidth="3"
      />

      {/* Folds/pleats suggestion */}
      <path
        d="M 118 380 Q 105 480, 88 580"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.4"
      />
      <path
        d="M 150 368 Q 150 480, 150 600"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.3"
      />
      <path
        d="M 182 380 Q 195 480, 212 580"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.4"
      />

      {/* Decorative bow at waist */}
      <circle cx="150" cy="355" r="8" fill={darkerColor} />
      <path
        d="M 142 355 Q 128 348, 134 355 Q 128 362, 142 355"
        fill={darkerColor}
      />
      <path
        d="M 158 355 Q 172 348, 166 355 Q 172 362, 158 355"
        fill={darkerColor}
      />
    </g>
  )
}

// ============================================================================
// 3. Shorts
// ============================================================================
export function Shorts({ color = '#1ABC9C', className = '' }: BottomProps) {
  const darkerColor = adjustColor(color, -20)

  return (
    <g className={className} data-item="shorts">
      {/* Waistband - starts at y=340 to overlap with tops */}
      <path
        d="M 102 340
           Q 95 350, 95 368
           L 205 368
           Q 205 350, 198 340
           Q 175 330, 150 330
           Q 125 330, 102 340
           Z"
        fill={darkerColor}
      />

      {/* Hip/crotch area to cover underwear */}
      <path
        d="M 95 368
           Q 92 400, 98 430
           L 130 430
           L 150 418
           L 170 430
           L 202 430
           Q 208 400, 205 368
           Z"
        fill={color}
      />

      {/* Left leg - mid-thigh length */}
      <path
        d="M 98 430
           Q 92 470, 90 520
           L 148 520
           Q 145 470, 130 430
           Z"
        fill={color}
      />

      {/* Right leg - mid-thigh length */}
      <path
        d="M 170 430
           Q 155 470, 152 520
           L 210 520
           Q 208 470, 202 430
           Z"
        fill={color}
      />

      {/* Center seam */}
      <path
        d="M 130 430 Q 150 445, 170 430"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
      />
      <line x1="150" y1="368" x2="150" y2="445" stroke={darkerColor} strokeWidth="2" />

      {/* Pockets */}
      <path
        d="M 98 375 Q 112 395, 118 425"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
      />
      <path
        d="M 202 375 Q 188 395, 182 425"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
      />

      {/* Hem cuffs */}
      <path
        d="M 90 510 L 148 510 L 148 522 L 90 522 Z"
        fill={darkerColor}
        opacity="0.5"
      />
      <path
        d="M 152 510 L 210 510 L 210 522 L 152 522 Z"
        fill={darkerColor}
        opacity="0.5"
      />
    </g>
  )
}

// ============================================================================
// 4. Leggings (High-Waisted, Full Coverage)
// ============================================================================
export function Leggings({ color = '#2C2C2C', className = '' }: BottomProps) {
  const lighterColor = adjustColor(color, 30)
  const darkerColor = adjustColor(color, -15)

  return (
    <g className={className} data-item="leggings">
      {/* High waistband - starts at y=325 for overlap with crop tops */}
      <path
        d="M 108 325
           Q 98 338, 95 358
           Q 92 380, 98 405
           L 202 405
           Q 208 380, 205 358
           Q 202 338, 192 325
           Q 175 315, 150 315
           Q 125 315, 108 325
           Z"
        fill={lighterColor}
      />

      {/* Waistband fold detail */}
      <path
        d="M 100 380 Q 150 388, 200 380"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1"
        opacity="0.3"
      />

      {/* Hip/crotch area to cover underwear */}
      <path
        d="M 98 405
           Q 95 425, 100 445
           L 132 445
           L 150 430
           L 168 445
           L 200 445
           Q 205 425, 202 405
           Z"
        fill={color}
      />

      {/* Left leg - extended to y=750 to cover ankles */}
      <path
        d="M 100 445
           Q 98 510, 100 580
           Q 102 660, 102 720
           Q 100 740, 96 755
           L 142 755
           Q 140 740, 140 720
           Q 138 660, 138 580
           Q 138 510, 132 445
           Z"
        fill={color}
      />

      {/* Right leg - extended to y=750 to cover ankles */}
      <path
        d="M 168 445
           Q 162 510, 162 580
           Q 162 660, 160 720
           Q 158 740, 158 755
           L 204 755
           Q 202 740, 200 720
           Q 198 660, 200 580
           Q 202 510, 200 445
           Z"
        fill={color}
      />

      {/* Center seam */}
      <path
        d="M 132 445 Q 150 465, 168 445"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.4"
      />
      <line x1="150" y1="430" x2="150" y2="465" stroke={darkerColor} strokeWidth="1" opacity="0.3" />

      {/* Inner leg seams */}
      <path
        d="M 138 460 Q 140 620, 140 750"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1"
        opacity="0.25"
      />
      <path
        d="M 162 460 Q 160 620, 160 750"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1"
        opacity="0.25"
      />

      {/* Subtle shine/highlight on thighs */}
      <path
        d="M 108 480 Q 110 580, 110 660"
        fill="none"
        stroke={lighterColor}
        strokeWidth="10"
        opacity="0.12"
        strokeLinecap="round"
      />
      <path
        d="M 192 480 Q 190 580, 190 660"
        fill="none"
        stroke={lighterColor}
        strokeWidth="10"
        opacity="0.12"
        strokeLinecap="round"
      />

      {/* Ankle cuffs */}
      <path
        d="M 96 748 L 142 748 L 142 758 L 96 758 Z"
        fill={darkerColor}
        opacity="0.4"
      />
      <path
        d="M 158 748 L 204 748 L 204 758 L 158 758 Z"
        fill={darkerColor}
        opacity="0.4"
      />
    </g>
  )
}

// ============================================================================
// 5. Pleated Skirt
// ============================================================================
export function PleatedSkirt({ color = '#34495E', className = '' }: BottomProps) {
  const darkerColor = adjustColor(color, -25)
  const lighterColor = adjustColor(color, 15)

  return (
    <g className={className} data-item="pleated-skirt">
      {/* Waistband - starts at y=340 for overlap with tops */}
      <path
        d="M 105 340
           Q 98 350, 98 370
           L 202 370
           Q 202 350, 195 340
           Q 175 330, 150 330
           Q 125 330, 105 340
           Z"
        fill={darkerColor}
      />

      {/* Hip area to cover underwear */}
      <path
        d="M 98 370
           Q 95 395, 92 420
           L 208 420
           Q 205 395, 202 370
           Z"
        fill={color}
      />

      {/* Solid backing to prevent see-through - extended to y=580 (below knee) */}
      <path
        d="M 70 420 L 70 580 L 230 580 L 230 420 Z"
        fill={color}
      />

      {/* Pleated body - alternating light/dark pleats, extended to y=580 */}
      {[...Array(12)].map((_, i) => {
        const x = 72 + i * 13.2
        const isLight = i % 2 === 0
        return (
          <path
            key={i}
            d={`M ${x + 6.6} 420 L ${x - 3} 580 L ${x + 16.2} 580 Z`}
            fill={isLight ? lighterColor : color}
          />
        )
      })}

      {/* Overlay to smooth the top */}
      <rect x="92" y="415" width="116" height="12" fill={color} />

      {/* Hem line */}
      <path
        d="M 68 575 L 232 575"
        fill="none"
        stroke={darkerColor}
        strokeWidth="4"
      />

      {/* Pleat fold lines */}
      {[...Array(11)].map((_, i) => (
        <line
          key={i}
          x1={85.2 + i * 13.2}
          y1="430"
          x2={80 + i * 13.2}
          y2="575"
          stroke={darkerColor}
          strokeWidth="1.2"
          opacity="0.6"
        />
      ))}
    </g>
  )
}

// ============================================================================
// Helper function to adjust color brightness
// ============================================================================
function adjustColor(hex: string, amount: number): string {
  const num = parseInt(hex.replace('#', ''), 16)
  const r = Math.min(255, Math.max(0, (num >> 16) + amount))
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amount))
  const b = Math.min(255, Math.max(0, (num & 0x0000FF) + amount))
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
}

// ============================================================================
// Thumbnail Versions (50x50 viewBox)
// ============================================================================

export function JeansThumbnail({ color = '#2C3E50' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <rect x="12" y="5" width="26" height="6" rx="2" fill={adjustColor(color, -20)} />
      <path d="M 15 11 L 12 45 L 22 45 L 24 11 Z" fill={color} />
      <path d="M 26 11 L 28 45 L 38 45 L 35 11 Z" fill={color} />
      <line x1="25" y1="11" x2="25" y2="25" stroke={adjustColor(color, -20)} strokeWidth="1.5" />
    </svg>
  )
}

export function SkirtThumbnail({ color = '#E74C3C' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <rect x="15" y="5" width="20" height="6" rx="2" fill={adjustColor(color, -20)} />
      <path d="M 15 11 Q 10 25, 8 42 L 42 42 Q 40 25, 35 11 Z" fill={color} />
      <circle cx="25" cy="8" r="3" fill={adjustColor(color, -20)} />
    </svg>
  )
}

export function ShortsThumbnail({ color = '#1ABC9C' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <rect x="12" y="8" width="26" height="6" rx="2" fill={adjustColor(color, -20)} />
      <path d="M 14 14 L 10 38 L 23 38 L 24 14 Z" fill={color} />
      <path d="M 26 14 L 27 38 L 40 38 L 36 14 Z" fill={color} />
    </svg>
  )
}

export function LeggingsThumbnail({ color = '#2C2C2C' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <rect x="15" y="5" width="20" height="5" rx="2" fill={adjustColor(color, 30)} />
      <path d="M 17 10 L 15 45 L 22 45 L 23 10 Z" fill={color} />
      <path d="M 27 10 L 28 45 L 35 45 L 33 10 Z" fill={color} />
    </svg>
  )
}

export function PleatedSkirtThumbnail({ color = '#34495E' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <rect x="12" y="5" width="26" height="6" rx="2" fill={adjustColor(color, -25)} />
      {[...Array(7)].map((_, i) => (
        <path
          key={i}
          d={`M ${10 + i * 5} 11 L ${8 + i * 5} 40 L ${15 + i * 5} 40 Z`}
          fill={i % 2 === 0 ? adjustColor(color, 15) : color}
        />
      ))}
    </svg>
  )
}

const Bottoms = {
  Jeans,
  Skirt,
  Shorts,
  Leggings,
  PleatedSkirt,
}

export default Bottoms
