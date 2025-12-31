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
      {/* Main body - extended to cover from shoulders (y=170) to below waist (y=380) for overlap with bottoms */}
      <path
        d="M 88 175
           Q 82 210, 85 260
           Q 88 320, 92 380
           Q 125 395, 150 395
           Q 175 395, 208 380
           Q 212 320, 215 260
           Q 218 210, 212 175
           Q 185 165, 150 165
           Q 115 165, 88 175
           Z"
        fill={color}
      />

      {/* Neckline */}
      <path
        d="M 118 170
           Q 135 185, 150 188
           Q 165 185, 182 170
           Q 165 182, 150 185
           Q 135 182, 118 170
           Z"
        fill={darkerColor}
      />

      {/* Left sleeve - extended to cover arm from shoulder */}
      <path
        d="M 88 175
           Q 68 188, 52 215
           Q 42 245, 48 280
           L 68 275
           Q 62 248, 70 222
           Q 80 198, 95 185
           Z"
        fill={color}
      />

      {/* Right sleeve - extended to cover arm from shoulder */}
      <path
        d="M 212 175
           Q 232 188, 248 215
           Q 258 245, 252 280
           L 232 275
           Q 238 248, 230 222
           Q 220 198, 205 185
           Z"
        fill={color}
      />

      {/* Sleeve shadows */}
      <path
        d="M 48 280 Q 56 270, 68 275"
        fill="none"
        stroke={darkerColor}
        strokeWidth="3"
      />
      <path
        d="M 252 280 Q 244 270, 232 275"
        fill="none"
        stroke={darkerColor}
        strokeWidth="3"
      />

      {/* Side seams */}
      <line x1="92" y1="210" x2="95" y2="380" stroke={darkerColor} strokeWidth="1" opacity="0.5" />
      <line x1="208" y1="210" x2="205" y2="380" stroke={darkerColor} strokeWidth="1" opacity="0.5" />
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
      {/* Main body - extended to overlap with bottoms at y=380 */}
      <path
        d="M 100 175
           Q 95 210, 95 260
           Q 95 320, 100 380
           Q 130 395, 150 395
           Q 170 395, 200 380
           Q 205 320, 205 260
           Q 205 210, 200 175
           Q 175 168, 150 168
           Q 125 168, 100 175
           Z"
        fill={color}
      />

      {/* V-neckline */}
      <path
        d="M 118 175
           Q 135 205, 150 215
           Q 165 205, 182 175
           L 172 170
           Q 160 198, 150 205
           Q 140 198, 128 170
           Z"
        fill={darkerColor}
      />

      {/* Straps - extended higher to y=145 */}
      <path
        d="M 118 175
           Q 115 160, 118 145
           L 130 145
           Q 128 160, 126 175
           Z"
        fill={color}
      />
      <path
        d="M 182 175
           Q 185 160, 182 145
           L 170 145
           Q 172 160, 174 175
           Z"
        fill={color}
      />

      {/* Armhole curves */}
      <path
        d="M 100 180 Q 90 210, 93 260"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.5"
      />
      <path
        d="M 200 180 Q 210 210, 207 260"
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
      {/* Main body - extended from y=170 to y=385 for full coverage and overlap with bottoms */}
      <path
        d="M 88 175
           Q 82 210, 82 260
           Q 82 320, 88 370
           Q 98 390, 115 395
           L 185 395
           Q 202 390, 212 370
           Q 218 320, 218 260
           Q 218 210, 212 175
           Q 180 165, 150 165
           Q 120 165, 88 175
           Z"
        fill={color}
      />

      {/* Waist darts - left */}
      <path
        d="M 95 220 Q 90 290, 95 370"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.4"
      />
      {/* Waist darts - right */}
      <path
        d="M 205 220 Q 210 290, 205 370"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.4"
      />

      {/* Center front seam */}
      <line x1="150" y1="190" x2="150" y2="390" stroke={darkerColor} strokeWidth="1" opacity="0.2" />

      {/* Crew neckline with ribbed collar */}
      <path
        d="M 118 172
           Q 128 164, 150 162
           Q 172 164, 182 172
           Q 170 180, 150 182
           Q 130 180, 118 172
           Z"
        fill={darkerColor}
      />

      {/* Left sleeve - follows arm contour, covers full arm to wrist */}
      <path
        d="M 88 175
           Q 68 195, 56 245
           Q 48 300, 48 360
           Q 48 385, 45 405
           L 68 410
           Q 70 390, 70 365
           Q 72 305, 80 250
           Q 88 205, 98 185
           Z"
        fill={color}
      />

      {/* Left sleeve inner shadow */}
      <path
        d="M 62 235 Q 55 310, 52 385"
        fill="none"
        stroke={darkerColor}
        strokeWidth="6"
        opacity="0.15"
        strokeLinecap="round"
      />

      {/* Right sleeve - follows arm contour, covers full arm to wrist */}
      <path
        d="M 212 175
           Q 232 195, 244 245
           Q 252 300, 252 360
           Q 252 385, 255 405
           L 232 410
           Q 230 390, 230 365
           Q 228 305, 220 250
           Q 212 205, 202 185
           Z"
        fill={color}
      />

      {/* Right sleeve inner shadow */}
      <path
        d="M 238 235 Q 245 310, 248 385"
        fill="none"
        stroke={darkerColor}
        strokeWidth="6"
        opacity="0.15"
        strokeLinecap="round"
      />

      {/* Left cuff */}
      <path
        d="M 42 402
           Q 40 410, 42 418
           L 70 418
           Q 72 410, 70 402
           Z"
        fill={darkerColor}
      />
      {/* Left cuff ribbing */}
      <line x1="48" y1="405" x2="48" y2="415" stroke={lighterColor} strokeWidth="0.5" opacity="0.3" />
      <line x1="52" y1="405" x2="52" y2="415" stroke={lighterColor} strokeWidth="0.5" opacity="0.3" />
      <line x1="56" y1="405" x2="56" y2="415" stroke={lighterColor} strokeWidth="0.5" opacity="0.3" />
      <line x1="60" y1="405" x2="60" y2="415" stroke={lighterColor} strokeWidth="0.5" opacity="0.3" />
      <line x1="64" y1="405" x2="64" y2="415" stroke={lighterColor} strokeWidth="0.5" opacity="0.3" />

      {/* Right cuff */}
      <path
        d="M 230 402
           Q 228 410, 230 418
           L 258 418
           Q 260 410, 258 402
           Z"
        fill={darkerColor}
      />
      {/* Right cuff ribbing */}
      <line x1="236" y1="405" x2="236" y2="415" stroke={lighterColor} strokeWidth="0.5" opacity="0.3" />
      <line x1="240" y1="405" x2="240" y2="415" stroke={lighterColor} strokeWidth="0.5" opacity="0.3" />
      <line x1="244" y1="405" x2="244" y2="415" stroke={lighterColor} strokeWidth="0.5" opacity="0.3" />
      <line x1="248" y1="405" x2="248" y2="415" stroke={lighterColor} strokeWidth="0.5" opacity="0.3" />
      <line x1="252" y1="405" x2="252" y2="415" stroke={lighterColor} strokeWidth="0.5" opacity="0.3" />

      {/* Shoulder seams */}
      <path
        d="M 118 172 Q 102 185, 90 198"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.3"
      />
      <path
        d="M 182 172 Q 198 185, 210 198"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.3"
      />

      {/* Hem band */}
      <path
        d="M 100 385
           Q 125 398, 150 400
           Q 175 398, 200 385
           L 200 395
           Q 175 408, 150 410
           Q 125 408, 100 395
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
      {/* Main cropped body - covers from shoulders y=170 to y=330 (above high-waisted bottoms) */}
      <path
        d="M 92 175
           Q 85 200, 86 245
           Q 88 285, 95 320
           Q 125 340, 150 340
           Q 175 340, 205 320
           Q 212 285, 214 245
           Q 215 200, 208 175
           Q 180 165, 150 165
           Q 120 165, 92 175
           Z"
        fill={color}
      />

      {/* Scoop neckline */}
      <path
        d="M 112 175
           Q 132 195, 150 200
           Q 168 195, 188 175
           Q 172 190, 150 195
           Q 128 190, 112 175
           Z"
        fill={darkerColor}
      />

      {/* Cap sleeves - extended to cover arm attachment */}
      <path
        d="M 92 175
           Q 72 188, 60 212
           Q 55 230, 62 250
           L 82 245
           Q 78 228, 82 212
           Q 88 195, 100 182
           Z"
        fill={color}
      />
      <path
        d="M 208 175
           Q 228 188, 240 212
           Q 245 230, 238 250
           L 218 245
           Q 222 228, 218 212
           Q 212 195, 200 182
           Z"
        fill={color}
      />

      {/* Hem band */}
      <path
        d="M 95 320
           Q 125 340, 150 345
           Q 175 340, 205 320
           L 205 332
           Q 175 352, 150 357
           Q 125 352, 95 332
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
        d="M 92 115
           Q 75 128, 70 155
           Q 68 178, 78 195
           L 222 195
           Q 232 178, 230 155
           Q 225 128, 208 115
           Q 180 105, 150 105
           Q 120 105, 92 115
           Z"
        fill={darkerColor}
      />

      {/* Main body - extended from y=175 to y=400 for full torso and overlap with bottoms */}
      <path
        d="M 78 175
           Q 72 220, 76 280
           Q 80 340, 88 395
           Q 125 415, 150 415
           Q 175 415, 212 395
           Q 220 340, 224 280
           Q 228 220, 222 175
           Q 185 162, 150 162
           Q 115 162, 78 175
           Z"
        fill={color}
      />

      {/* Hood opening detail */}
      <path
        d="M 105 172
           Q 122 155, 150 152
           Q 178 155, 195 172
           Q 178 162, 150 160
           Q 122 162, 105 172
           Z"
        fill={darkerColor}
      />

      {/* Left sleeve - extended to cover full arm to wrist */}
      <path
        d="M 78 175
           Q 55 200, 42 255
           Q 35 320, 40 380
           Q 42 405, 40 420
           L 68 425
           Q 70 408, 68 385
           Q 65 325, 72 265
           Q 80 205, 92 185
           Z"
        fill={color}
      />

      {/* Right sleeve - extended to cover full arm to wrist */}
      <path
        d="M 222 175
           Q 245 200, 258 255
           Q 265 320, 260 380
           Q 258 405, 260 420
           L 232 425
           Q 230 408, 232 385
           Q 235 325, 228 265
           Q 220 205, 208 185
           Z"
        fill={color}
      />

      {/* Cuffs */}
      <rect x="36" y="418" width="36" height="16" rx="5" fill={darkerColor} />
      <rect x="228" y="418" width="36" height="16" rx="5" fill={darkerColor} />

      {/* Kangaroo pocket */}
      <path
        d="M 112 300
           Q 105 325, 112 365
           L 188 365
           Q 195 325, 188 300
           Q 170 292, 150 292
           Q 130 292, 112 300
           Z"
        fill={darkerColor}
      />

      {/* Pocket opening */}
      <line x1="150" y1="302" x2="150" y2="360" stroke={lighterColor} strokeWidth="2" opacity="0.5" />

      {/* Hood strings */}
      <line x1="135" y1="172" x2="135" y2="270" stroke={lighterColor} strokeWidth="3" />
      <line x1="165" y1="172" x2="165" y2="270" stroke={lighterColor} strokeWidth="3" />
      <circle cx="135" cy="270" r="5" fill={lighterColor} />
      <circle cx="165" cy="270" r="5" fill={lighterColor} />

      {/* Hem band */}
      <path
        d="M 88 395
           Q 125 415, 150 418
           Q 175 415, 212 395
           L 212 408
           Q 175 428, 150 432
           Q 125 428, 88 408
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
