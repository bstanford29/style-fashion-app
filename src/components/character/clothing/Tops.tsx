'use client'

/**
 * Top Clothing SVG Components
 * All positioned to fit the 300x800 character viewBox
 * Shoulders: y=140, x=70-230
 * Torso: y=140 to y=340
 * Waist: y=280-340
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
        d="M 95 145
           Q 90 180, 95 220
           Q 98 280, 100 330
           Q 130 345, 150 345
           Q 170 345, 200 330
           Q 202 280, 205 220
           Q 210 180, 205 145
           Q 180 135, 150 135
           Q 120 135, 95 145
           Z"
        fill={color}
      />

      {/* Neckline */}
      <path
        d="M 125 140
           Q 135 155, 150 158
           Q 165 155, 175 140
           Q 165 148, 150 150
           Q 135 148, 125 140
           Z"
        fill={darkerColor}
      />

      {/* Left sleeve */}
      <path
        d="M 95 145
           Q 75 155, 60 175
           Q 50 195, 55 210
           L 70 215
           Q 68 200, 75 185
           Q 85 165, 100 158
           Z"
        fill={color}
      />

      {/* Right sleeve */}
      <path
        d="M 205 145
           Q 225 155, 240 175
           Q 250 195, 245 210
           L 230 215
           Q 232 200, 225 185
           Q 215 165, 200 158
           Z"
        fill={color}
      />

      {/* Sleeve shadows */}
      <path
        d="M 55 210 Q 62 205, 70 215"
        fill="none"
        stroke={darkerColor}
        strokeWidth="3"
      />
      <path
        d="M 245 210 Q 238 205, 230 215"
        fill="none"
        stroke={darkerColor}
        strokeWidth="3"
      />

      {/* Side seams */}
      <line x1="100" y1="200" x2="100" y2="330" stroke={darkerColor} strokeWidth="1" opacity="0.5" />
      <line x1="200" y1="200" x2="200" y2="330" stroke={darkerColor} strokeWidth="1" opacity="0.5" />
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
        d="M 110 150
           Q 105 180, 108 220
           Q 110 280, 112 330
           Q 130 345, 150 345
           Q 170 345, 188 330
           Q 190 280, 192 220
           Q 195 180, 190 150
           Q 175 145, 150 145
           Q 125 145, 110 150
           Z"
        fill={color}
      />

      {/* V-neckline */}
      <path
        d="M 125 148
           Q 138 180, 150 190
           Q 162 180, 175 148
           L 168 145
           Q 158 170, 150 178
           Q 142 170, 132 145
           Z"
        fill={darkerColor}
      />

      {/* Straps */}
      <path
        d="M 125 148
           Q 120 130, 125 105
           L 135 105
           Q 132 130, 132 148
           Z"
        fill={color}
      />
      <path
        d="M 175 148
           Q 180 130, 175 105
           L 165 105
           Q 168 130, 168 148
           Z"
        fill={color}
      />

      {/* Armhole curves */}
      <path
        d="M 110 155 Q 100 180, 105 210"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.5"
      />
      <path
        d="M 190 155 Q 200 180, 195 210"
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
        d="M 108 148
           Q 102 170, 100 200
           Q 98 240, 102 270
           Q 108 300, 108 340
           Q 128 355, 150 355
           Q 172 355, 192 340
           Q 192 300, 198 270
           Q 202 240, 200 200
           Q 198 170, 192 148
           Q 172 140, 150 140
           Q 128 140, 108 148
           Z"
        fill={color}
      />

      {/* Waist darts - left */}
      <path
        d="M 115 200 Q 112 250, 115 300"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.4"
      />
      {/* Waist darts - right */}
      <path
        d="M 185 200 Q 188 250, 185 300"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.4"
      />

      {/* Center front seam */}
      <line x1="150" y1="165" x2="150" y2="340" stroke={darkerColor} strokeWidth="1" opacity="0.2" />

      {/* Crew neckline with ribbed collar */}
      <path
        d="M 128 145
           Q 130 138, 150 135
           Q 170 138, 172 145
           Q 165 150, 150 152
           Q 135 150, 128 145
           Z"
        fill={darkerColor}
      />
      <path
        d="M 132 143
           Q 140 138, 150 137
           Q 160 138, 168 143
           Q 162 147, 150 148
           Q 138 147, 132 143
           Z"
        fill={darkerColor}
        opacity="0.6"
      />

      {/* Left sleeve - follows arm contour exactly */}
      {/* Arm path: starts x=105 y=150, curves to x=55 y=430 (hand) */}
      <path
        d="M 108 148
           Q 95 155, 82 175
           Q 70 200, 62 250
           Q 56 300, 52 350
           Q 50 390, 50 415
           L 68 418
           Q 70 395, 72 355
           Q 76 305, 82 255
           Q 88 210, 98 180
           Q 105 160, 112 152
           Z"
        fill={color}
      />

      {/* Left sleeve inner shadow */}
      <path
        d="M 70 200 Q 65 280, 58 360"
        fill="none"
        stroke={darkerColor}
        strokeWidth="6"
        opacity="0.15"
        strokeLinecap="round"
      />

      {/* Right sleeve - follows arm contour exactly */}
      {/* Arm path: starts x=195 y=150, curves to x=245 y=430 (hand) */}
      <path
        d="M 192 148
           Q 205 155, 218 175
           Q 230 200, 238 250
           Q 244 300, 248 350
           Q 250 390, 250 415
           L 232 418
           Q 230 395, 228 355
           Q 224 305, 218 255
           Q 212 210, 202 180
           Q 195 160, 188 152
           Z"
        fill={color}
      />

      {/* Right sleeve inner shadow */}
      <path
        d="M 230 200 Q 235 280, 242 360"
        fill="none"
        stroke={darkerColor}
        strokeWidth="6"
        opacity="0.15"
        strokeLinecap="round"
      />

      {/* Left cuff - fitted, at wrist level just above hand (y=418-430) */}
      <path
        d="M 48 415
           Q 46 420, 48 428
           L 70 428
           Q 72 420, 70 415
           Z"
        fill={darkerColor}
      />
      {/* Left cuff ribbing detail */}
      <line x1="52" y1="418" x2="52" y2="426" stroke={lighterColor} strokeWidth="0.5" opacity="0.3" />
      <line x1="56" y1="418" x2="56" y2="426" stroke={lighterColor} strokeWidth="0.5" opacity="0.3" />
      <line x1="60" y1="418" x2="60" y2="426" stroke={lighterColor} strokeWidth="0.5" opacity="0.3" />
      <line x1="64" y1="418" x2="64" y2="426" stroke={lighterColor} strokeWidth="0.5" opacity="0.3" />

      {/* Right cuff - fitted, at wrist level just above hand */}
      <path
        d="M 230 415
           Q 228 420, 230 428
           L 252 428
           Q 254 420, 252 415
           Z"
        fill={darkerColor}
      />
      {/* Right cuff ribbing detail */}
      <line x1="234" y1="418" x2="234" y2="426" stroke={lighterColor} strokeWidth="0.5" opacity="0.3" />
      <line x1="238" y1="418" x2="238" y2="426" stroke={lighterColor} strokeWidth="0.5" opacity="0.3" />
      <line x1="242" y1="418" x2="242" y2="426" stroke={lighterColor} strokeWidth="0.5" opacity="0.3" />
      <line x1="246" y1="418" x2="246" y2="426" stroke={lighterColor} strokeWidth="0.5" opacity="0.3" />

      {/* Shoulder seams */}
      <path
        d="M 128 145 Q 115 155, 108 165"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.3"
      />
      <path
        d="M 172 145 Q 185 155, 192 165"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.3"
      />

      {/* Hem band */}
      <path
        d="M 108 340
           Q 128 355, 150 358
           Q 172 355, 192 340
           L 192 348
           Q 172 363, 150 366
           Q 128 363, 108 348
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
        d="M 105 150
           Q 100 170, 102 200
           Q 104 230, 108 260
           Q 130 275, 150 275
           Q 170 275, 192 260
           Q 196 230, 198 200
           Q 200 170, 195 150
           Q 175 140, 150 140
           Q 125 140, 105 150
           Z"
        fill={color}
      />

      {/* Scoop neckline */}
      <path
        d="M 120 148
           Q 135 165, 150 170
           Q 165 165, 180 148
           Q 170 158, 150 162
           Q 130 158, 120 148
           Z"
        fill={darkerColor}
      />

      {/* Cap sleeves */}
      <path
        d="M 105 150
           Q 88 158, 78 175
           Q 75 185, 80 195
           L 95 190
           Q 92 182, 95 172
           Q 100 162, 108 158
           Z"
        fill={color}
      />
      <path
        d="M 195 150
           Q 212 158, 222 175
           Q 225 185, 220 195
           L 205 190
           Q 208 182, 205 172
           Q 200 162, 192 158
           Z"
        fill={color}
      />

      {/* Hem band */}
      <path
        d="M 108 260
           Q 130 275, 150 278
           Q 170 275, 192 260
           L 192 268
           Q 170 283, 150 286
           Q 130 283, 108 268
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
        d="M 100 95
           Q 85 100, 80 120
           Q 78 140, 85 155
           L 215 155
           Q 222 140, 220 120
           Q 215 100, 200 95
           Q 175 88, 150 88
           Q 125 88, 100 95
           Z"
        fill={darkerColor}
      />

      {/* Main body */}
      <path
        d="M 88 150
           Q 82 190, 88 240
           Q 92 300, 95 345
           Q 130 360, 150 360
           Q 170 360, 205 345
           Q 208 300, 212 240
           Q 218 190, 212 150
           Q 185 140, 150 140
           Q 115 140, 88 150
           Z"
        fill={color}
      />

      {/* Hood opening detail */}
      <path
        d="M 115 145
           Q 125 130, 150 125
           Q 175 130, 185 145
           Q 175 138, 150 135
           Q 125 138, 115 145
           Z"
        fill={darkerColor}
      />

      {/* Left sleeve */}
      <path
        d="M 88 150
           Q 65 165, 52 200
           Q 42 250, 45 320
           Q 45 380, 50 420
           L 75 415
           Q 72 380, 72 320
           Q 75 250, 82 200
           Q 88 170, 95 158
           Z"
        fill={color}
      />

      {/* Right sleeve */}
      <path
        d="M 212 150
           Q 235 165, 248 200
           Q 258 250, 255 320
           Q 255 380, 250 420
           L 225 415
           Q 228 380, 228 320
           Q 225 250, 218 200
           Q 212 170, 205 158
           Z"
        fill={color}
      />

      {/* Cuffs */}
      <rect x="45" y="410" width="30" height="15" rx="4" fill={darkerColor} />
      <rect x="225" y="410" width="30" height="15" rx="4" fill={darkerColor} />

      {/* Kangaroo pocket */}
      <path
        d="M 115 280
           Q 110 295, 115 320
           L 185 320
           Q 190 295, 185 280
           Q 170 275, 150 275
           Q 130 275, 115 280
           Z"
        fill={darkerColor}
      />

      {/* Pocket opening */}
      <line x1="150" y1="280" x2="150" y2="315" stroke={lighterColor} strokeWidth="2" opacity="0.5" />

      {/* Hood strings */}
      <line x1="135" y1="145" x2="135" y2="220" stroke={lighterColor} strokeWidth="3" />
      <line x1="165" y1="145" x2="165" y2="220" stroke={lighterColor} strokeWidth="3" />
      <circle cx="135" cy="220" r="5" fill={lighterColor} />
      <circle cx="165" cy="220" r="5" fill={lighterColor} />

      {/* Hem band */}
      <path
        d="M 95 345
           Q 130 360, 150 362
           Q 170 360, 205 345
           L 205 355
           Q 170 370, 150 372
           Q 130 370, 95 355
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
