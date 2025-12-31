'use client'

/**
 * Accessories SVG Components
 * Positioned to fit the 300x800 character viewBox
 * Head area: y=0-110, center x=150
 * Neck area: y=100-140
 * Face center: x=150, y=60
 */

interface AccessoryProps {
  color?: string
  className?: string
}

// ============================================================================
// 1. Bow Headband
// ============================================================================
export function BowHeadband({ color = '#FF69B4', className = '' }: AccessoryProps) {
  const darkerColor = adjustColor(color, -30)

  // Head is ellipse at cy=90, ry=55, so top of head is at y=35
  // Headband should sit on top of head around y=35-50
  return (
    <g className={className} data-item="bow-headband">
      {/* Headband arc - sits on top of head */}
      <path
        d="M 108 65
           Q 105 50, 115 42
           Q 135 35, 150 35
           Q 165 35, 185 42
           Q 195 50, 192 65"
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Bow center - at top of headband */}
      <ellipse cx="150" cy="35" rx="8" ry="6" fill={color} />

      {/* Left bow loop */}
      <path
        d="M 142 35
           Q 125 22, 120 35
           Q 125 48, 142 35
           Z"
        fill={color}
      />
      <path
        d="M 130 30 Q 128 35, 132 40"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
      />

      {/* Right bow loop */}
      <path
        d="M 158 35
           Q 175 22, 180 35
           Q 175 48, 158 35
           Z"
        fill={color}
      />
      <path
        d="M 170 30 Q 172 35, 168 40"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
      />

      {/* Bow tails */}
      <path
        d="M 145 40 Q 140 52, 135 60"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M 155 40 Q 160 52, 165 60"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </g>
  )
}

// ============================================================================
// 2. Necklace
// ============================================================================
export function Necklace({ color = '#FFD700', className = '' }: AccessoryProps) {
  const chainColor = adjustColor(color, -20)

  // Neck is at y=140-170, necklace should drape around neck/upper chest
  return (
    <g className={className} data-item="necklace">
      {/* Chain around neck - starts at base of neck y=165 */}
      <path
        d="M 128 155
           Q 125 165, 130 180
           Q 140 195, 150 200
           Q 160 195, 170 180
           Q 175 165, 172 155"
        fill="none"
        stroke={chainColor}
        strokeWidth="2"
      />

      {/* Chain detail - small links */}
      {[...Array(8)].map((_, i) => {
        const t = i / 7
        const x = 128 + t * 44
        const y = 155 + Math.sin(t * Math.PI) * 45
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="2"
            fill={color}
          />
        )
      })}

      {/* Pendant - at bottom of chain y=200 */}
      <g transform="translate(150, 200)">
        {/* Heart shape pendant */}
        <path
          d="M 0 5
             Q -8 -5, -8 -10
             Q -8 -18, 0 -12
             Q 8 -18, 8 -10
             Q 8 -5, 0 5
             Z"
          fill={color}
        />
        {/* Shine */}
        <ellipse cx="-3" cy="-10" rx="2" ry="3" fill="white" opacity="0.4" />
      </g>
    </g>
  )
}

// ============================================================================
// 3. Sunglasses
// ============================================================================
export function Sunglasses({ color = '#1C1C1C', className = '' }: AccessoryProps) {
  const frameColor = color
  const lensColor = '#2C2C2C'

  // Eyes are at y=82-83, so sunglasses should be centered around y=82
  return (
    <g className={className} data-item="sunglasses">
      {/* Left lens - centered on left eye (x=128, y=82) */}
      <ellipse
        cx="128"
        cy="82"
        rx="16"
        ry="12"
        fill={lensColor}
        stroke={frameColor}
        strokeWidth="3"
      />

      {/* Right lens - centered on right eye (x=172, y=82) */}
      <ellipse
        cx="172"
        cy="82"
        rx="16"
        ry="12"
        fill={lensColor}
        stroke={frameColor}
        strokeWidth="3"
      />

      {/* Bridge */}
      <path
        d="M 144 82 Q 150 78, 156 82"
        fill="none"
        stroke={frameColor}
        strokeWidth="3"
      />

      {/* Left temple (arm) - goes to left ear at x=100, y=95 */}
      <path
        d="M 112 80 Q 106 82, 102 88 Q 100 92, 100 98"
        fill="none"
        stroke={frameColor}
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Right temple (arm) - goes to right ear at x=200, y=95 */}
      <path
        d="M 188 80 Q 194 82, 198 88 Q 200 92, 200 98"
        fill="none"
        stroke={frameColor}
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Lens shine */}
      <ellipse cx="123" cy="78" rx="4" ry="3" fill="white" opacity="0.2" />
      <ellipse cx="167" cy="78" rx="4" ry="3" fill="white" opacity="0.2" />
    </g>
  )
}

// ============================================================================
// 4. Earrings
// ============================================================================
export function Earrings({ color = '#C0C0C0', className = '' }: AccessoryProps) {
  const gemColor = '#FF69B4'

  // Ears are at x=100/200, y=95 with radius 12
  // Earrings should hang from bottom of ears (y~100-105)
  return (
    <g className={className} data-item="earrings">
      {/* Left earring - positioned at left ear (x=100, y=95) */}
      <g>
        {/* Stud at ear lobe */}
        <circle cx="100" cy="102" r="4" fill={color} />
        {/* Drop chain */}
        <line x1="100" y1="106" x2="100" y2="120" stroke={color} strokeWidth="1.5" />
        {/* Gem */}
        <path
          d="M 100 120 L 95 127 L 100 133 L 105 127 Z"
          fill={gemColor}
        />
        <path
          d="M 97 124 L 100 127 L 103 124"
          fill="none"
          stroke="white"
          strokeWidth="1"
          opacity="0.5"
        />
      </g>

      {/* Right earring - positioned at right ear (x=200, y=95) */}
      <g>
        {/* Stud at ear lobe */}
        <circle cx="200" cy="102" r="4" fill={color} />
        {/* Drop chain */}
        <line x1="200" y1="106" x2="200" y2="120" stroke={color} strokeWidth="1.5" />
        {/* Gem */}
        <path
          d="M 200 120 L 195 127 L 200 133 L 205 127 Z"
          fill={gemColor}
        />
        <path
          d="M 197 124 L 200 127 L 203 124"
          fill="none"
          stroke="white"
          strokeWidth="1"
          opacity="0.5"
        />
      </g>
    </g>
  )
}

// ============================================================================
// 5. Hat (Baseball Cap style)
// ============================================================================
export function Hat({ color = '#4169E1', className = '' }: AccessoryProps) {
  const darkerColor = adjustColor(color, -35)
  const lighterColor = adjustColor(color, 25)
  const billColor = adjustColor(color, -15)
  const billDarkColor = adjustColor(color, -45)

  // Head is ellipse at cy=90, ry=55, so top of head is at y=35
  // Hat should sit on top of head
  return (
    <g className={className} data-item="hat" transform="translate(0, 8)">
      {/* Define gradient for 3D crown effect */}
      <defs>
        <linearGradient id="capCrownGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={lighterColor} />
          <stop offset="40%" stopColor={color} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
        <linearGradient id="capBillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={billColor} />
          <stop offset="100%" stopColor={billDarkColor} />
        </linearGradient>
      </defs>

      {/* Cap crown - more rounded/domed shape */}
      <path
        d="M 98 52
           Q 92 40, 100 25
           Q 110 8, 130 2
           Q 150 -2, 170 2
           Q 190 8, 200 25
           Q 208 40, 202 52
           Q 180 58, 150 58
           Q 120 58, 98 52
           Z"
        fill="url(#capCrownGradient)"
      />

      {/* Crown highlight for 3D effect */}
      <path
        d="M 120 15
           Q 140 5, 160 8
           Q 175 12, 185 22"
        fill="none"
        stroke={lighterColor}
        strokeWidth="8"
        strokeLinecap="round"
        opacity="0.3"
      />

      {/* Panel seams - 6-panel cap style */}
      <path
        d="M 150 2 Q 148 28, 150 55"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.3"
      />
      <path
        d="M 150 2 Q 122 15, 102 48"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.3"
      />
      <path
        d="M 150 2 Q 178 15, 198 48"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.3"
      />

      {/* Stitching detail on crown edge */}
      <path
        d="M 100 50 Q 125 56, 150 56 Q 175 56, 200 50"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1"
        strokeDasharray="3,2"
        opacity="0.4"
      />

      {/* Cap bill - curved naturally */}
      <path
        d="M 98 52
           Q 80 54, 65 62
           Q 55 70, 60 78
           Q 72 82, 90 78
           Q 110 72, 125 62
           Q 115 56, 98 52
           Z"
        fill="url(#capBillGradient)"
      />

      {/* Bill curve detail - top edge */}
      <path
        d="M 98 52
           Q 85 55, 72 62
           Q 62 68, 65 74"
        fill="none"
        stroke={lighterColor}
        strokeWidth="2"
        opacity="0.25"
      />

      {/* Bill underside shadow */}
      <path
        d="M 100 54
           Q 88 58, 78 66
           Q 70 72, 75 77
           Q 90 72, 105 62
           Q 102 57, 100 54
           Z"
        fill={billDarkColor}
        opacity="0.4"
      />

      {/* Stitching on bill edge */}
      <path
        d="M 68 64 Q 62 72, 67 78 Q 80 80, 95 76"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1"
        strokeDasharray="2,2"
        opacity="0.5"
      />

      {/* Cap button on top - more detailed */}
      <circle cx="150" cy="4" r="6" fill={darkerColor} />
      <circle cx="150" cy="4" r="4" fill={color} />
      <circle cx="148" cy="2" r="1.5" fill={lighterColor} opacity="0.5" />

      {/* Eyelets (ventilation holes) */}
      <circle cx="125" cy="20" r="2" fill={darkerColor} opacity="0.4" />
      <circle cx="175" cy="20" r="2" fill={darkerColor} opacity="0.4" />

      {/* Logo - embroidered star look */}
      <circle cx="150" cy="35" r="14" fill="white" opacity="0.95" />
      <circle cx="150" cy="35" r="13" fill="none" stroke={darkerColor} strokeWidth="0.5" opacity="0.3" />
      {/* Star shape */}
      <path
        d="M 150 24
           L 152.5 31 L 160 31.5 L 154 36.5 L 156 44 L 150 40 L 144 44 L 146 36.5 L 140 31.5 L 147.5 31 Z"
        fill={color}
      />
      {/* Star highlight */}
      <path
        d="M 150 26 L 151.5 31 L 147 31"
        fill={lighterColor}
        opacity="0.4"
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

export function BowHeadbandThumbnail({ color = '#FF69B4' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      {/* Headband arc */}
      <path d="M 10 35 Q 10 15, 25 10 Q 40 15, 40 35" fill="none" stroke={color} strokeWidth="4" />
      {/* Bow */}
      <ellipse cx="25" cy="10" rx="5" ry="4" fill={color} />
      <path d="M 20 10 Q 12 5, 15 10 Q 12 15, 20 10 Z" fill={color} />
      <path d="M 30 10 Q 38 5, 35 10 Q 38 15, 30 10 Z" fill={color} />
    </svg>
  )
}

export function NecklaceThumbnail({ color = '#FFD700' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <path d="M 10 15 Q 10 30, 25 38 Q 40 30, 40 15" fill="none" stroke={adjustColor(color, -20)} strokeWidth="2" />
      {/* Heart pendant */}
      <path d="M 25 38 Q 20 32, 20 28 Q 20 24, 25 28 Q 30 24, 30 28 Q 30 32, 25 38 Z" fill={color} />
    </svg>
  )
}

export function SunglassesThumbnail({ color = '#1C1C1C' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <ellipse cx="15" cy="25" rx="12" ry="10" fill="#2C2C2C" stroke={color} strokeWidth="2" />
      <ellipse cx="35" cy="25" rx="12" ry="10" fill="#2C2C2C" stroke={color} strokeWidth="2" />
      <path d="M 27 25 Q 25 23, 23 25" fill="none" stroke={color} strokeWidth="2" />
      <ellipse cx="12" cy="22" rx="3" ry="2" fill="white" opacity="0.2" />
      <ellipse cx="32" cy="22" rx="3" ry="2" fill="white" opacity="0.2" />
    </svg>
  )
}

export function EarringsThumbnail({ color = '#C0C0C0' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      {/* Left earring */}
      <circle cx="15" cy="12" r="4" fill={color} />
      <line x1="15" y1="16" x2="15" y2="28" stroke={color} strokeWidth="1.5" />
      <path d="M 15 28 L 10 35 L 15 42 L 20 35 Z" fill="#FF69B4" />
      {/* Right earring */}
      <circle cx="35" cy="12" r="4" fill={color} />
      <line x1="35" y1="16" x2="35" y2="28" stroke={color} strokeWidth="1.5" />
      <path d="M 35 28 L 30 35 L 35 42 L 40 35 Z" fill="#FF69B4" />
    </svg>
  )
}

export function HatThumbnail({ color = '#4169E1' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      {/* Crown */}
      <path d="M 10 30 Q 8 20, 15 12 Q 25 5, 35 12 Q 42 20, 40 30 Q 30 33, 25 33 Q 15 33, 10 30 Z" fill={color} />
      {/* Bill */}
      <path d="M 10 30 Q 2 32, 0 38 Q 5 40, 15 36 Q 12 32, 10 30 Z" fill={adjustColor(color, -20)} />
      {/* Button */}
      <circle cx="25" cy="8" r="3" fill={adjustColor(color, -30)} />
      {/* Logo */}
      <circle cx="25" cy="22" r="6" fill="white" opacity="0.9" />
    </svg>
  )
}

const Accessories = {
  BowHeadband,
  Necklace,
  Sunglasses,
  Earrings,
  Hat,
}

export default Accessories
