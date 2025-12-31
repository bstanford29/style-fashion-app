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
      {/* Waistband */}
      <path
        d="M 105 350
           Q 100 355, 100 370
           L 200 370
           Q 200 355, 195 350
           Q 172 342, 150 342
           Q 128 342, 105 350
           Z"
        fill={darkerColor}
      />

      {/* Belt loops */}
      <rect x="112" y="348" width="6" height="22" fill={darkerColor} />
      <rect x="142" y="348" width="6" height="22" fill={darkerColor} />
      <rect x="152" y="348" width="6" height="22" fill={darkerColor} />
      <rect x="182" y="348" width="6" height="22" fill={darkerColor} />

      {/* Left leg - matches body: x=110-130, y=400-740 */}
      <path
        d="M 100 370
           Q 102 400, 105 480
           Q 108 560, 108 620
           Q 108 680, 105 740
           L 135 740
           Q 132 680, 132 620
           Q 132 560, 132 480
           Q 135 400, 140 370
           Z"
        fill={color}
      />

      {/* Right leg - matches body: x=170-190, y=400-740 */}
      <path
        d="M 160 370
           Q 165 400, 168 480
           Q 168 560, 168 620
           Q 168 680, 165 740
           L 195 740
           Q 198 680, 198 620
           Q 198 560, 195 480
           Q 198 400, 200 370
           Z"
        fill={color}
      />

      {/* Center seam/fly */}
      <path
        d="M 140 370
           Q 150 385, 160 370"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
      />
      <line x1="150" y1="370" x2="150" y2="430" stroke={darkerColor} strokeWidth="2" />

      {/* Front pockets */}
      <path
        d="M 102 375 Q 115 385, 118 405 L 108 408 Q 105 388, 102 375 Z"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
      />
      <path
        d="M 198 375 Q 185 385, 182 405 L 192 408 Q 195 388, 198 375 Z"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
      />

      {/* Knee wear highlights */}
      <ellipse cx="120" cy="580" rx="10" ry="18" fill={lighterColor} opacity="0.2" />
      <ellipse cx="180" cy="580" rx="10" ry="18" fill={lighterColor} opacity="0.2" />

      {/* Inner leg seams */}
      <line x1="135" y1="410" x2="133" y2="740" stroke={darkerColor} strokeWidth="1" opacity="0.5" />
      <line x1="165" y1="410" x2="167" y2="740" stroke={darkerColor} strokeWidth="1" opacity="0.5" />

      {/* Hem details */}
      <line x1="105" y1="735" x2="135" y2="735" stroke={darkerColor} strokeWidth="2" />
      <line x1="165" y1="735" x2="195" y2="735" stroke={darkerColor} strokeWidth="2" />
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
        d="M 108 350
           Q 102 355, 102 370
           L 198 370
           Q 198 355, 192 350
           Q 172 342, 150 342
           Q 128 342, 108 350
           Z"
        fill={darkerColor}
      />

      {/* Main skirt body - A-line flare */}
      <path
        d="M 102 370
           Q 90 420, 82 500
           Q 80 540, 85 560
           L 215 560
           Q 220 540, 218 500
           Q 210 420, 198 370
           Z"
        fill={color}
      />

      {/* Hem detail */}
      <path
        d="M 85 560
           Q 95 568, 120 564
           Q 150 560, 180 564
           Q 205 568, 215 560"
        fill="none"
        stroke={darkerColor}
        strokeWidth="3"
      />

      {/* Folds/pleats suggestion */}
      <path
        d="M 120 380 Q 115 450, 100 540"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.4"
      />
      <path
        d="M 150 370 Q 150 450, 150 550"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.3"
      />
      <path
        d="M 180 380 Q 185 450, 200 540"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.4"
      />

      {/* Decorative bow at waist */}
      <circle cx="150" cy="360" r="7" fill={darkerColor} />
      <path
        d="M 143 360 Q 132 355, 136 360 Q 132 365, 143 360"
        fill={darkerColor}
      />
      <path
        d="M 157 360 Q 168 355, 164 360 Q 168 365, 157 360"
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
        d="M 105 350
           Q 100 355, 100 372
           L 200 372
           Q 200 355, 195 350
           Q 172 342, 150 342
           Q 128 342, 105 350
           Z"
        fill={darkerColor}
      />

      {/* Left leg */}
      <path
        d="M 100 372
           Q 98 400, 95 440
           Q 92 475, 95 500
           L 142 500
           Q 140 475, 142 440
           Q 145 400, 145 372
           Z"
        fill={color}
      />

      {/* Right leg */}
      <path
        d="M 155 372
           Q 155 400, 158 440
           Q 160 475, 158 500
           L 205 500
           Q 208 475, 205 440
           Q 202 400, 200 372
           Z"
        fill={color}
      />

      {/* Center seam */}
      <path
        d="M 145 372 Q 150 390, 155 372"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
      />
      <line x1="150" y1="372" x2="150" y2="430" stroke={darkerColor} strokeWidth="2" />

      {/* Pockets */}
      <path
        d="M 102 378 Q 112 388, 115 410"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
      />
      <path
        d="M 198 378 Q 188 388, 185 410"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
      />

      {/* Hem cuffs */}
      <path
        d="M 95 490 L 142 490 L 142 500 L 95 500 Z"
        fill={darkerColor}
        opacity="0.5"
      />
      <path
        d="M 158 490 L 205 490 L 205 500 L 158 500 Z"
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
      {/* High waistband */}
      <path
        d="M 110 340
           Q 102 348, 100 362
           Q 98 378, 102 395
           L 198 395
           Q 202 378, 200 362
           Q 198 348, 190 340
           Q 172 332, 150 332
           Q 128 332, 110 340
           Z"
        fill={lighterColor}
      />

      {/* Waistband fold detail */}
      <path
        d="M 105 375 Q 150 380, 195 375"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1"
        opacity="0.3"
      />

      {/* Hip/crotch area */}
      <path
        d="M 102 395
           Q 100 410, 105 420
           L 130 420
           L 150 405
           L 170 420
           L 195 420
           Q 200 410, 198 395
           Z"
        fill={color}
      />

      {/* Left leg - follows new body: x=110-130, y=400-740 */}
      <path
        d="M 105 420
           Q 105 460, 107 520
           Q 108 580, 108 640
           Q 108 700, 107 740
           L 133 740
           Q 132 700, 132 640
           Q 132 580, 132 520
           Q 132 460, 130 420
           Z"
        fill={color}
      />

      {/* Right leg - follows new body: x=170-190, y=400-740 */}
      <path
        d="M 170 420
           Q 168 460, 168 520
           Q 168 580, 168 640
           Q 168 700, 167 740
           L 193 740
           Q 192 700, 192 640
           Q 192 580, 193 520
           Q 195 460, 195 420
           Z"
        fill={color}
      />

      {/* Center seam */}
      <path
        d="M 130 420 Q 150 438, 170 420"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.4"
      />
      <line x1="150" y1="405" x2="150" y2="438" stroke={darkerColor} strokeWidth="1" opacity="0.3" />

      {/* Inner leg seams */}
      <path
        d="M 130 440 Q 132 580, 132 740"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1"
        opacity="0.25"
      />
      <path
        d="M 170 440 Q 168 580, 168 740"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1"
        opacity="0.25"
      />

      {/* Subtle shine/highlight on thighs */}
      <path
        d="M 112 450 Q 114 530, 114 600"
        fill="none"
        stroke={lighterColor}
        strokeWidth="8"
        opacity="0.12"
        strokeLinecap="round"
      />
      <path
        d="M 188 450 Q 186 530, 186 600"
        fill="none"
        stroke={lighterColor}
        strokeWidth="8"
        opacity="0.12"
        strokeLinecap="round"
      />

      {/* Ankle cuffs */}
      <path
        d="M 107 735 L 133 735 L 133 742 L 107 742 Z"
        fill={darkerColor}
        opacity="0.4"
      />
      <path
        d="M 167 735 L 193 735 L 193 742 L 167 742 Z"
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
        d="M 108 350
           Q 102 355, 102 372
           L 198 372
           Q 198 355, 192 350
           Q 172 342, 150 342
           Q 128 342, 108 350
           Z"
        fill={darkerColor}
      />

      {/* Solid backing to prevent see-through */}
      <path
        d="M 80 372 L 80 520 L 220 520 L 220 372 Z"
        fill={color}
      />

      {/* Pleated body - alternating light/dark pleats */}
      {[...Array(12)].map((_, i) => {
        const x = 82 + i * 11.5
        const isLight = i % 2 === 0
        return (
          <path
            key={i}
            d={`M ${x + 5.75} 372 L ${x - 2} 520 L ${x + 13.5} 520 Z`}
            fill={isLight ? lighterColor : color}
          />
        )
      })}

      {/* Overlay to smooth the top */}
      <rect x="100" y="370" width="100" height="10" fill={color} />

      {/* Hem line */}
      <path
        d="M 80 515 L 220 515"
        fill="none"
        stroke={darkerColor}
        strokeWidth="3"
      />

      {/* Pleat fold lines */}
      {[...Array(11)].map((_, i) => (
        <line
          key={i}
          x1={93.5 + i * 11.5}
          y1="380"
          x2={90 + i * 11.5}
          y2="515"
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
