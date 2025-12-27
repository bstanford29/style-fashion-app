'use client'

/**
 * Bottom Clothing SVG Components
 * All positioned to fit the 300x800 character viewBox
 * Waist/hips: y=320-400
 * Legs: y=400-780
 * Knee level: ~y=580
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
      {/* Waistband */}
      <path
        d="M 100 320
           Q 95 325, 95 340
           L 205 340
           Q 205 325, 200 320
           Q 175 310, 150 310
           Q 125 310, 100 320
           Z"
        fill={darkerColor}
      />

      {/* Belt loops */}
      <rect x="110" y="318" width="8" height="25" fill={darkerColor} />
      <rect x="140" y="318" width="8" height="25" fill={darkerColor} />
      <rect x="152" y="318" width="8" height="25" fill={darkerColor} />
      <rect x="182" y="318" width="8" height="25" fill={darkerColor} />

      {/* Left leg */}
      <path
        d="M 95 340
           Q 92 400, 95 480
           Q 98 560, 102 650
           Q 105 720, 110 780
           L 145 780
           Q 142 720, 140 650
           Q 138 560, 140 480
           Q 142 400, 145 340
           Z"
        fill={color}
      />

      {/* Right leg */}
      <path
        d="M 155 340
           Q 158 400, 160 480
           Q 162 560, 160 650
           Q 158 720, 155 780
           L 190 780
           Q 195 720, 198 650
           Q 202 560, 205 480
           Q 208 400, 205 340
           Z"
        fill={color}
      />

      {/* Center seam/fly */}
      <path
        d="M 145 340
           Q 150 360, 155 340"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
      />
      <line x1="150" y1="340" x2="150" y2="420" stroke={darkerColor} strokeWidth="2" />

      {/* Front pockets */}
      <path
        d="M 100 345 Q 115 355, 118 380 L 105 385 Q 100 360, 100 345 Z"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
      />
      <path
        d="M 200 345 Q 185 355, 182 380 L 195 385 Q 200 360, 200 345 Z"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
      />

      {/* Knee wear highlights */}
      <ellipse cx="125" cy="580" rx="15" ry="20" fill={lighterColor} opacity="0.2" />
      <ellipse cx="175" cy="580" rx="15" ry="20" fill={lighterColor} opacity="0.2" />

      {/* Inner leg seams */}
      <line x1="140" y1="400" x2="142" y2="780" stroke={darkerColor} strokeWidth="1" opacity="0.5" />
      <line x1="160" y1="400" x2="158" y2="780" stroke={darkerColor} strokeWidth="1" opacity="0.5" />

      {/* Hem details */}
      <line x1="110" y1="775" x2="145" y2="775" stroke={darkerColor} strokeWidth="2" />
      <line x1="155" y1="775" x2="190" y2="775" stroke={darkerColor} strokeWidth="2" />
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
      {/* Waistband */}
      <path
        d="M 105 320
           Q 100 325, 100 340
           L 200 340
           Q 200 325, 195 320
           Q 175 310, 150 310
           Q 125 310, 105 320
           Z"
        fill={darkerColor}
      />

      {/* Main skirt body - A-line flare */}
      <path
        d="M 100 340
           Q 85 400, 80 480
           Q 78 530, 85 560
           L 215 560
           Q 222 530, 220 480
           Q 215 400, 200 340
           Z"
        fill={color}
      />

      {/* Hem detail */}
      <path
        d="M 85 560
           Q 90 565, 100 562
           Q 125 558, 150 560
           Q 175 558, 200 562
           Q 210 565, 215 560"
        fill="none"
        stroke={darkerColor}
        strokeWidth="3"
      />

      {/* Folds/pleats suggestion */}
      <path
        d="M 120 350 Q 118 420, 105 520"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.4"
      />
      <path
        d="M 150 340 Q 150 420, 150 540"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.3"
      />
      <path
        d="M 180 350 Q 182 420, 195 520"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.4"
      />

      {/* Decorative bow at waist */}
      <circle cx="150" cy="330" r="8" fill={darkerColor} />
      <path
        d="M 142 330 Q 130 325, 135 330 Q 130 335, 142 330"
        fill={darkerColor}
      />
      <path
        d="M 158 330 Q 170 325, 165 330 Q 170 335, 158 330"
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
      {/* Waistband */}
      <path
        d="M 100 320
           Q 95 325, 95 345
           L 205 345
           Q 205 325, 200 320
           Q 175 310, 150 310
           Q 125 310, 100 320
           Z"
        fill={darkerColor}
      />

      {/* Left leg */}
      <path
        d="M 95 345
           Q 90 380, 88 420
           Q 86 460, 90 490
           L 145 490
           Q 142 460, 145 420
           Q 148 380, 150 345
           Z"
        fill={color}
      />

      {/* Right leg */}
      <path
        d="M 150 345
           Q 152 380, 155 420
           Q 158 460, 155 490
           L 210 490
           Q 214 460, 212 420
           Q 210 380, 205 345
           Z"
        fill={color}
      />

      {/* Center seam */}
      <path
        d="M 145 345 Q 150 360, 155 345"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
      />
      <line x1="150" y1="345" x2="150" y2="410" stroke={darkerColor} strokeWidth="2" />

      {/* Pockets */}
      <path
        d="M 100 350 Q 110 360, 112 390"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
      />
      <path
        d="M 200 350 Q 190 360, 188 390"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
      />

      {/* Hem cuffs */}
      <path
        d="M 90 480 L 145 480 L 145 490 L 90 490 Z"
        fill={darkerColor}
        opacity="0.5"
      />
      <path
        d="M 155 480 L 210 480 L 210 490 L 155 490 Z"
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
      {/* High waistband - sits at natural waist, covers midsection */}
      <path
        d="M 108 310
           Q 100 318, 98 335
           Q 96 350, 100 365
           L 200 365
           Q 204 350, 202 335
           Q 200 318, 192 310
           Q 172 300, 150 300
           Q 128 300, 108 310
           Z"
        fill={lighterColor}
      />

      {/* Waistband fold detail */}
      <path
        d="M 102 345 Q 150 350, 198 345"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1"
        opacity="0.3"
      />

      {/* Hip/crotch area - covers the underwear completely */}
      <path
        d="M 100 365
           Q 98 385, 102 400
           L 130 400
           L 150 385
           L 170 400
           L 198 400
           Q 202 385, 200 365
           Z"
        fill={color}
      />

      {/* Left leg - skin tight, follows body contour exactly */}
      {/* Body leg reference: x=105-140 at hips, curves to x=120-140 at ankle y=780 */}
      <path
        d="M 102 400
           Q 98 420, 102 480
           Q 105 550, 110 620
           Q 113 680, 116 730
           Q 118 760, 120 780
           L 140 780
           Q 138 760, 136 730
           Q 134 680, 132 620
           Q 130 550, 130 480
           Q 130 420, 130 400
           Z"
        fill={color}
      />

      {/* Right leg - skin tight, follows body contour exactly */}
      {/* Body leg reference: x=165-190 at hips, curves to x=160-180 at ankle y=780 */}
      <path
        d="M 170 400
           Q 170 420, 170 480
           Q 168 550, 166 620
           Q 164 680, 162 730
           Q 160 760, 160 780
           L 180 780
           Q 182 760, 185 730
           Q 188 680, 192 620
           Q 196 550, 198 480
           Q 202 420, 198 400
           Z"
        fill={color}
      />

      {/* Center seam */}
      <path
        d="M 130 400 Q 150 420, 170 400"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.4"
      />
      <line x1="150" y1="385" x2="150" y2="420" stroke={darkerColor} strokeWidth="1" opacity="0.3" />

      {/* Inner leg seams */}
      <path
        d="M 130 420 Q 132 550, 135 700 Q 137 750, 138 780"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1"
        opacity="0.25"
      />
      <path
        d="M 170 420 Q 168 550, 165 700 Q 163 750, 162 780"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1"
        opacity="0.25"
      />

      {/* Subtle shine/highlight on thighs - athletic look */}
      <path
        d="M 112 420 Q 116 500, 118 580"
        fill="none"
        stroke={lighterColor}
        strokeWidth="10"
        opacity="0.12"
        strokeLinecap="round"
      />
      <path
        d="M 188 420 Q 184 500, 182 580"
        fill="none"
        stroke={lighterColor}
        strokeWidth="10"
        opacity="0.12"
        strokeLinecap="round"
      />

      {/* Calf muscle definition */}
      <path
        d="M 115 620 Q 118 660, 118 700"
        fill="none"
        stroke={lighterColor}
        strokeWidth="6"
        opacity="0.08"
        strokeLinecap="round"
      />
      <path
        d="M 185 620 Q 182 660, 182 700"
        fill="none"
        stroke={lighterColor}
        strokeWidth="6"
        opacity="0.08"
        strokeLinecap="round"
      />

      {/* Ankle cuffs */}
      <path
        d="M 118 775 L 142 775 L 142 782 L 118 782 Z"
        fill={darkerColor}
        opacity="0.4"
      />
      <path
        d="M 158 775 L 182 775 L 182 782 L 158 782 Z"
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
      {/* Waistband */}
      <path
        d="M 105 320
           Q 100 325, 100 342
           L 200 342
           Q 200 325, 195 320
           Q 175 310, 150 310
           Q 125 310, 105 320
           Z"
        fill={darkerColor}
      />

      {/* Solid backing to prevent see-through */}
      <path
        d="M 78 342 L 78 500 L 224 500 L 224 342 Z"
        fill={color}
      />

      {/* Pleated body - alternating light/dark pleats */}
      {/* Each pleat is a triangle shape */}
      {[...Array(12)].map((_, i) => {
        const x = 80 + i * 12
        const isLight = i % 2 === 0
        return (
          <path
            key={i}
            d={`M ${x + 6} 342 L ${x - 2} 500 L ${x + 14} 500 Z`}
            fill={isLight ? lighterColor : color}
          />
        )
      })}

      {/* Overlay to smooth the top */}
      <rect x="95" y="340" width="110" height="10" fill={color} />

      {/* Hem line */}
      <path
        d="M 78 495 L 224 495"
        fill="none"
        stroke={darkerColor}
        strokeWidth="3"
      />

      {/* Pleat fold lines */}
      {[...Array(11)].map((_, i) => (
        <line
          key={i}
          x1={92 + i * 12}
          y1="350"
          x2={88 + i * 12}
          y2="495"
          stroke={darkerColor}
          strokeWidth="1"
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
