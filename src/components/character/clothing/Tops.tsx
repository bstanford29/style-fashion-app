'use client'

/**
 * Top Clothing SVG Components
 * All positioned to fit the 300x800 character viewBox
 *
 * NEW CHARACTER PROPORTIONS:
 * - Shoulders: x=85-215, y=170-185
 * - Torso: x=85-215, y=170-360
 * - Arms: Left x=55-100, Right x=200-245, y=185-400
 * - Waist/hips: y=350-400
 */

interface TopProps {
  color?: string
  className?: string
}

// ============================================================================
// 1. Basic T-Shirt
// ============================================================================
export function BasicTShirt({ color = '#FF6B6B', className = '' }: TopProps) {
  const darkerColor = adjustColor(color, -20)

  return (
    <g className={className} data-item="basic-tshirt">
      {/* Main body */}
      <path
        d="M 90 185
           Q 85 220, 88 260
           Q 90 310, 95 355
           Q 125 365, 150 365
           Q 175 365, 205 355
           Q 210 310, 212 260
           Q 215 220, 210 185
           Q 185 175, 150 175
           Q 115 175, 90 185
           Z"
        fill={color}
      />

      {/* Neckline */}
      <path
        d="M 120 178
           Q 135 192, 150 195
           Q 165 192, 180 178
           Q 165 188, 150 190
           Q 135 188, 120 178
           Z"
        fill={darkerColor}
      />

      {/* Left sleeve */}
      <path
        d="M 90 185
           Q 72 195, 58 220
           Q 50 245, 55 270
           L 72 265
           Q 68 245, 75 225
           Q 82 205, 95 195
           Z"
        fill={color}
      />

      {/* Right sleeve */}
      <path
        d="M 210 185
           Q 228 195, 242 220
           Q 250 245, 245 270
           L 228 265
           Q 232 245, 225 225
           Q 218 205, 205 195
           Z"
        fill={color}
      />

      {/* Sleeve shadows */}
      <path
        d="M 55 270 Q 62 262, 72 265"
        fill="none"
        stroke={darkerColor}
        strokeWidth="3"
      />
      <path
        d="M 245 270 Q 238 262, 228 265"
        fill="none"
        stroke={darkerColor}
        strokeWidth="3"
      />

      {/* Side seams */}
      <line x1="95" y1="220" x2="100" y2="355" stroke={darkerColor} strokeWidth="1" opacity="0.5" />
      <line x1="205" y1="220" x2="200" y2="355" stroke={darkerColor} strokeWidth="1" opacity="0.5" />
    </g>
  )
}

// ============================================================================
// 2. Tank Top
// ============================================================================
export function TankTop({ color = '#98D8C8', className = '' }: TopProps) {
  const darkerColor = adjustColor(color, -20)

  return (
    <g className={className} data-item="tank-top">
      {/* Main body */}
      <path
        d="M 105 185
           Q 100 210, 100 250
           Q 100 300, 105 355
           Q 130 365, 150 365
           Q 170 365, 195 355
           Q 200 300, 200 250
           Q 200 210, 195 185
           Q 175 180, 150 180
           Q 125 180, 105 185
           Z"
        fill={color}
      />

      {/* V-neckline */}
      <path
        d="M 120 183
           Q 135 210, 150 220
           Q 165 210, 180 183
           L 172 180
           Q 160 205, 150 212
           Q 140 205, 128 180
           Z"
        fill={darkerColor}
      />

      {/* Straps */}
      <path
        d="M 120 183
           Q 118 170, 122 155
           L 132 155
           Q 130 170, 128 183
           Z"
        fill={color}
      />
      <path
        d="M 180 183
           Q 182 170, 178 155
           L 168 155
           Q 170 170, 172 183
           Z"
        fill={color}
      />

      {/* Armhole curves */}
      <path
        d="M 105 190 Q 95 215, 98 250"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.5"
      />
      <path
        d="M 195 190 Q 205 215, 202 250"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.5"
      />
    </g>
  )
}

// ============================================================================
// 3. Long Sleeve Shirt (Tailored/Fitted)
// ============================================================================
export function LongSleeveShirt({ color = '#9B59B6', className = '' }: TopProps) {
  const darkerColor = adjustColor(color, -20)
  const lighterColor = adjustColor(color, 15)

  return (
    <g className={className} data-item="long-sleeve-shirt">
      {/* Main body - tailored with waist definition */}
      <path
        d="M 92 185
           Q 86 210, 85 250
           Q 85 300, 92 340
           Q 100 360, 115 365
           L 185 365
           Q 200 360, 208 340
           Q 215 300, 215 250
           Q 214 210, 208 185
           Q 180 175, 150 175
           Q 120 175, 92 185
           Z"
        fill={color}
      />

      {/* Waist darts - left */}
      <path
        d="M 100 220 Q 95 280, 100 340"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.4"
      />
      {/* Waist darts - right */}
      <path
        d="M 200 220 Q 205 280, 200 340"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.4"
      />

      {/* Center front seam */}
      <line x1="150" y1="195" x2="150" y2="360" stroke={darkerColor} strokeWidth="1" opacity="0.2" />

      {/* Crew neckline with ribbed collar */}
      <path
        d="M 122 180
           Q 130 172, 150 170
           Q 170 172, 178 180
           Q 168 186, 150 188
           Q 132 186, 122 180
           Z"
        fill={darkerColor}
      />

      {/* Left sleeve - follows arm contour */}
      <path
        d="M 92 185
           Q 75 200, 65 240
           Q 58 290, 55 340
           Q 54 370, 52 390
           L 70 395
           Q 72 375, 74 345
           Q 78 295, 85 245
           Q 90 210, 98 195
           Z"
        fill={color}
      />

      {/* Left sleeve inner shadow */}
      <path
        d="M 68 230 Q 62 300, 58 370"
        fill="none"
        stroke={darkerColor}
        strokeWidth="6"
        opacity="0.15"
        strokeLinecap="round"
      />

      {/* Right sleeve - follows arm contour */}
      <path
        d="M 208 185
           Q 225 200, 235 240
           Q 242 290, 245 340
           Q 246 370, 248 390
           L 230 395
           Q 228 375, 226 345
           Q 222 295, 215 245
           Q 210 210, 202 195
           Z"
        fill={color}
      />

      {/* Right sleeve inner shadow */}
      <path
        d="M 232 230 Q 238 300, 242 370"
        fill="none"
        stroke={darkerColor}
        strokeWidth="6"
        opacity="0.15"
        strokeLinecap="round"
      />

      {/* Left cuff */}
      <path
        d="M 50 388
           Q 48 395, 50 402
           L 72 402
           Q 74 395, 72 388
           Z"
        fill={darkerColor}
      />
      {/* Left cuff ribbing */}
      <line x1="54" y1="390" x2="54" y2="400" stroke={lighterColor} strokeWidth="0.5" opacity="0.3" />
      <line x1="58" y1="390" x2="58" y2="400" stroke={lighterColor} strokeWidth="0.5" opacity="0.3" />
      <line x1="62" y1="390" x2="62" y2="400" stroke={lighterColor} strokeWidth="0.5" opacity="0.3" />
      <line x1="66" y1="390" x2="66" y2="400" stroke={lighterColor} strokeWidth="0.5" opacity="0.3" />

      {/* Right cuff */}
      <path
        d="M 228 388
           Q 226 395, 228 402
           L 250 402
           Q 252 395, 250 388
           Z"
        fill={darkerColor}
      />
      {/* Right cuff ribbing */}
      <line x1="232" y1="390" x2="232" y2="400" stroke={lighterColor} strokeWidth="0.5" opacity="0.3" />
      <line x1="236" y1="390" x2="236" y2="400" stroke={lighterColor} strokeWidth="0.5" opacity="0.3" />
      <line x1="240" y1="390" x2="240" y2="400" stroke={lighterColor} strokeWidth="0.5" opacity="0.3" />
      <line x1="244" y1="390" x2="244" y2="400" stroke={lighterColor} strokeWidth="0.5" opacity="0.3" />

      {/* Shoulder seams */}
      <path
        d="M 122 180 Q 108 190, 95 200"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.3"
      />
      <path
        d="M 178 180 Q 192 190, 205 200"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.3"
      />

      {/* Hem band */}
      <path
        d="M 100 355
           Q 125 368, 150 370
           Q 175 368, 200 355
           L 200 365
           Q 175 378, 150 380
           Q 125 378, 100 365
           Z"
        fill={darkerColor}
        opacity="0.6"
      />
    </g>
  )
}

// ============================================================================
// 4. Crop Top
// ============================================================================
export function CropTop({ color = '#F39C12', className = '' }: TopProps) {
  const darkerColor = adjustColor(color, -20)

  return (
    <g className={className} data-item="crop-top">
      {/* Main cropped body */}
      <path
        d="M 95 185
           Q 88 210, 90 250
           Q 92 280, 98 300
           Q 125 315, 150 315
           Q 175 315, 202 300
           Q 208 280, 210 250
           Q 212 210, 205 185
           Q 180 175, 150 175
           Q 120 175, 95 185
           Z"
        fill={color}
      />

      {/* Scoop neckline */}
      <path
        d="M 115 183
           Q 135 200, 150 205
           Q 165 200, 185 183
           Q 170 195, 150 200
           Q 130 195, 115 183
           Z"
        fill={darkerColor}
      />

      {/* Cap sleeves */}
      <path
        d="M 95 185
           Q 78 195, 68 215
           Q 65 228, 70 240
           L 85 235
           Q 82 225, 85 212
           Q 90 200, 100 192
           Z"
        fill={color}
      />
      <path
        d="M 205 185
           Q 222 195, 232 215
           Q 235 228, 230 240
           L 215 235
           Q 218 225, 215 212
           Q 210 200, 200 192
           Z"
        fill={color}
      />

      {/* Hem band */}
      <path
        d="M 98 300
           Q 125 315, 150 318
           Q 175 315, 202 300
           L 202 310
           Q 175 325, 150 328
           Q 125 325, 98 310
           Z"
        fill={darkerColor}
      />
    </g>
  )
}

// ============================================================================
// 5. Hoodie
// ============================================================================
export function Hoodie({ color = '#3498DB', className = '' }: TopProps) {
  const darkerColor = adjustColor(color, -25)
  const lighterColor = adjustColor(color, 15)

  return (
    <g className={className} data-item="hoodie">
      {/* Hood (behind head area) */}
      <path
        d="M 95 120
           Q 80 130, 75 155
           Q 73 175, 82 190
           L 218 190
           Q 227 175, 225 155
           Q 220 130, 205 120
           Q 180 112, 150 112
           Q 120 112, 95 120
           Z"
        fill={darkerColor}
      />

      {/* Main body */}
      <path
        d="M 82 185
           Q 78 220, 82 270
           Q 85 320, 90 365
           Q 125 380, 150 380
           Q 175 380, 210 365
           Q 215 320, 218 270
           Q 222 220, 218 185
           Q 185 175, 150 175
           Q 115 175, 82 185
           Z"
        fill={color}
      />

      {/* Hood opening detail */}
      <path
        d="M 110 180
           Q 125 165, 150 162
           Q 175 165, 190 180
           Q 175 172, 150 170
           Q 125 172, 110 180
           Z"
        fill={darkerColor}
      />

      {/* Left sleeve */}
      <path
        d="M 82 185
           Q 62 205, 50 250
           Q 45 310, 48 360
           Q 50 380, 48 395
           L 70 400
           Q 72 385, 70 365
           Q 68 315, 72 255
           Q 78 210, 90 195
           Z"
        fill={color}
      />

      {/* Right sleeve */}
      <path
        d="M 218 185
           Q 238 205, 250 250
           Q 255 310, 252 360
           Q 250 380, 252 395
           L 230 400
           Q 228 385, 230 365
           Q 232 315, 228 255
           Q 222 210, 210 195
           Z"
        fill={color}
      />

      {/* Cuffs */}
      <rect x="45" y="392" width="28" height="14" rx="4" fill={darkerColor} />
      <rect x="227" y="392" width="28" height="14" rx="4" fill={darkerColor} />

      {/* Kangaroo pocket */}
      <path
        d="M 115 290
           Q 110 310, 115 340
           L 185 340
           Q 190 310, 185 290
           Q 170 285, 150 285
           Q 130 285, 115 290
           Z"
        fill={darkerColor}
      />

      {/* Pocket opening */}
      <line x1="150" y1="290" x2="150" y2="335" stroke={lighterColor} strokeWidth="2" opacity="0.5" />

      {/* Hood strings */}
      <line x1="135" y1="180" x2="135" y2="260" stroke={lighterColor} strokeWidth="3" />
      <line x1="165" y1="180" x2="165" y2="260" stroke={lighterColor} strokeWidth="3" />
      <circle cx="135" cy="260" r="5" fill={lighterColor} />
      <circle cx="165" cy="260" r="5" fill={lighterColor} />

      {/* Hem band */}
      <path
        d="M 90 365
           Q 125 380, 150 382
           Q 175 380, 210 365
           L 210 375
           Q 175 390, 150 392
           Q 125 390, 90 375
           Z"
        fill={darkerColor}
      />
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

export function BasicTShirtThumbnail({ color = '#FF6B6B' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <path
        d="M 15 12 Q 10 15, 8 22 L 12 24 Q 14 18, 18 15 L 18 40 L 32 40 L 32 15 Q 36 18, 38 24 L 42 22 Q 40 15, 35 12 Q 28 8, 25 8 Q 22 8, 15 12 Z"
        fill={color}
      />
      <path d="M 20 10 Q 25 14, 30 10" fill="none" stroke={adjustColor(color, -20)} strokeWidth="2" />
    </svg>
  )
}

export function TankTopThumbnail({ color = '#98D8C8' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <path
        d="M 18 8 L 20 18 L 17 40 L 33 40 L 30 18 L 32 8 L 28 8 Q 25 12, 22 8 Z"
        fill={color}
      />
      <path d="M 22 18 Q 25 22, 28 18" fill="none" stroke={adjustColor(color, -20)} strokeWidth="1.5" />
    </svg>
  )
}

export function LongSleeveShirtThumbnail({ color = '#9B59B6' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <path
        d="M 15 12 Q 10 15, 5 25 L 5 42 L 10 42 L 10 25 Q 12 18, 18 15 L 18 40 L 32 40 L 32 15 Q 38 18, 40 25 L 40 42 L 45 42 L 45 25 Q 40 15, 35 12 Q 28 8, 25 8 Q 22 8, 15 12 Z"
        fill={color}
      />
      <ellipse cx="25" cy="12" rx="6" ry="3" fill={adjustColor(color, -20)} />
    </svg>
  )
}

export function CropTopThumbnail({ color = '#F39C12' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <path
        d="M 16 14 Q 12 16, 10 22 L 14 24 Q 16 20, 18 17 L 18 32 L 32 32 L 32 17 Q 34 20, 36 24 L 40 22 Q 38 16, 34 14 Q 28 10, 25 10 Q 22 10, 16 14 Z"
        fill={color}
      />
      <path d="M 20 12 Q 25 16, 30 12" fill="none" stroke={adjustColor(color, -20)} strokeWidth="1.5" />
    </svg>
  )
}

export function HoodieThumbnail({ color = '#3498DB' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      {/* Hood */}
      <path d="M 15 8 Q 10 10, 10 16 L 40 16 Q 40 10, 35 8 Q 28 5, 25 5 Q 22 5, 15 8 Z" fill={adjustColor(color, -25)} />
      {/* Body */}
      <path
        d="M 12 16 Q 10 20, 5 28 L 5 45 L 12 45 L 12 28 L 15 18 L 15 42 L 35 42 L 35 18 L 38 28 L 38 45 L 45 45 L 45 28 Q 40 20, 38 16 Z"
        fill={color}
      />
      {/* Pocket */}
      <path d="M 18 30 Q 17 34, 18 38 L 32 38 Q 33 34, 32 30 Z" fill={adjustColor(color, -25)} />
    </svg>
  )
}

const Tops = {
  BasicTShirt,
  TankTop,
  LongSleeveShirt,
  CropTop,
  Hoodie,
}

export default Tops
