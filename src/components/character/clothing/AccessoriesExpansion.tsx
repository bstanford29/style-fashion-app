'use client'

/**
 * Accessories Expansion - Princess & Party Themed
 * ViewBox: 300x800
 *
 * Character Reference Points:
 * - Head top: y=35
 * - Eyes: y=82, left x=128, right x=172
 * - Ears: x=100/200, y=95-107
 * - Neck: y=140-170
 * - Shoulders: y=175
 * - Left hand palm: (58, 400), Right hand palm: (242, 400)
 */

interface AccessoryProps {
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

// ============================================================================
// 1. Diamond Tiara - Sparkly princess crown
// ============================================================================
export function DiamondTiara({ color = '#C0C0C0', className = '' }: AccessoryProps) {
  const darkerColor = adjustColor(color, -40)
  const lighterColor = adjustColor(color, 60)

  return (
    <g className={className} data-item="diamond-tiara">
      <defs>
        <linearGradient id="diamondTiaraGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={lighterColor} />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
      </defs>

      {/* Base band - sits on forehead y=38-50 */}
      <path
        d="M 108 50 Q 120 42, 150 40 Q 180 42, 192 50 Q 188 54, 150 52 Q 112 54, 108 50 Z"
        fill="url(#diamondTiaraGradient)"
      />
      <path
        d="M 108 50 Q 120 42, 150 40 Q 180 42, 192 50"
        fill="none"
        stroke={lighterColor}
        strokeWidth="1"
        opacity="0.7"
      />

      {/* Center diamond peak (tallest) */}
      <path d="M 145 40 L 150 8 L 155 40 Z" fill="url(#diamondTiaraGradient)" />
      <path d="M 148 38 L 150 14 L 152 38" fill={lighterColor} opacity="0.5" />
      {/* Center large diamond */}
      <path
        d="M 150 18 L 145 26 L 150 34 L 155 26 Z"
        fill="#FFFFFF"
        opacity="0.9"
      />
      <path
        d="M 150 18 L 147 24 L 150 26 L 153 24 Z"
        fill="#E0E8FF"
        opacity="0.8"
      />
      {/* Diamond sparkle */}
      <circle cx="148" cy="22" r="1.5" fill="white" opacity="0.9" />
      <circle cx="153" cy="28" r="1" fill="white" opacity="0.7" />

      {/* Left inner peak */}
      <path d="M 128 43 L 132 18 L 136 43 Z" fill="url(#diamondTiaraGradient)" />
      <path d="M 130 41 L 132 24 L 134 41" fill={lighterColor} opacity="0.4" />
      {/* Diamond */}
      <path d="M 132 26 L 129 32 L 132 38 L 135 32 Z" fill="#FFFFFF" opacity="0.85" />
      <circle cx="131" cy="30" r="1" fill="white" opacity="0.8" />

      {/* Right inner peak */}
      <path d="M 164 43 L 168 18 L 172 43 Z" fill="url(#diamondTiaraGradient)" />
      <path d="M 166 41 L 168 24 L 170 41" fill={lighterColor} opacity="0.4" />
      {/* Diamond */}
      <path d="M 168 26 L 165 32 L 168 38 L 171 32 Z" fill="#FFFFFF" opacity="0.85" />
      <circle cx="167" cy="30" r="1" fill="white" opacity="0.8" />

      {/* Left outer peak (shorter) */}
      <path d="M 114 47 L 117 30 L 120 47 Z" fill="url(#diamondTiaraGradient)" />
      <path d="M 117 34 L 115 38 L 117 42 L 119 38 Z" fill="#FFFFFF" opacity="0.8" />
      <circle cx="116" cy="36" r="0.8" fill="white" opacity="0.7" />

      {/* Right outer peak (shorter) */}
      <path d="M 180 47 L 183 30 L 186 47 Z" fill="url(#diamondTiaraGradient)" />
      <path d="M 183 34 L 181 38 L 183 42 L 185 38 Z" fill="#FFFFFF" opacity="0.8" />
      <circle cx="182" cy="36" r="0.8" fill="white" opacity="0.7" />

      {/* Small diamonds along band */}
      <path d="M 122 45 L 120 47.5 L 122 50 L 124 47.5 Z" fill="#FFFFFF" opacity="0.75" />
      <path d="M 140 43 L 138 45.5 L 140 48 L 142 45.5 Z" fill="#FFFFFF" opacity="0.75" />
      <path d="M 160 43 L 158 45.5 L 160 48 L 162 45.5 Z" fill="#FFFFFF" opacity="0.75" />
      <path d="M 178 45 L 176 47.5 L 178 50 L 180 47.5 Z" fill="#FFFFFF" opacity="0.75" />

      {/* Sparkle effects */}
      <circle cx="150" cy="12" r="1.5" fill="white" opacity="0.6" />
      <circle cx="145" cy="15" r="0.8" fill="white" opacity="0.5" />
      <circle cx="155" cy="14" r="0.8" fill="white" opacity="0.5" />
      <circle cx="132" cy="20" r="0.8" fill="white" opacity="0.4" />
      <circle cx="168" cy="20" r="0.8" fill="white" opacity="0.4" />
    </g>
  )
}

// ============================================================================
// 2. Pearl Necklace - Elegant strand of pearls
// ============================================================================
export function PearlNecklace({ color = '#FFFAF0', className = '' }: AccessoryProps) {
  const shadowColor = adjustColor(color, -30)
  const highlightColor = '#FFFFFF'

  // Pearl positions following neckline curve y=155-200
  const pearls = [
    { x: 125, y: 158, r: 5 },
    { x: 130, y: 168, r: 5.5 },
    { x: 136, y: 177, r: 6 },
    { x: 143, y: 184, r: 6 },
    { x: 150, y: 188, r: 6.5 },
    { x: 157, y: 184, r: 6 },
    { x: 164, y: 177, r: 6 },
    { x: 170, y: 168, r: 5.5 },
    { x: 175, y: 158, r: 5 },
  ]

  return (
    <g className={className} data-item="pearl-necklace">
      <defs>
        <radialGradient id="pearlGradient" cx="35%" cy="30%" r="60%" fx="35%" fy="30%">
          <stop offset="0%" stopColor={highlightColor} />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={shadowColor} />
        </radialGradient>
      </defs>

      {/* Thin string/chain between pearls */}
      <path
        d="M 125 158 Q 127 163, 130 168 Q 133 173, 136 177 Q 140 181, 143 184 Q 147 186, 150 188 Q 153 186, 157 184 Q 160 181, 164 177 Q 167 173, 170 168 Q 173 163, 175 158"
        fill="none"
        stroke={shadowColor}
        strokeWidth="1"
        opacity="0.5"
      />

      {/* Pearls */}
      {pearls.map((pearl, i) => (
        <g key={i}>
          <circle
            cx={pearl.x}
            cy={pearl.y}
            r={pearl.r}
            fill="url(#pearlGradient)"
          />
          {/* Pearl highlight */}
          <circle
            cx={pearl.x - pearl.r * 0.3}
            cy={pearl.y - pearl.r * 0.3}
            r={pearl.r * 0.35}
            fill={highlightColor}
            opacity="0.7"
          />
          {/* Secondary highlight */}
          <circle
            cx={pearl.x + pearl.r * 0.2}
            cy={pearl.y + pearl.r * 0.25}
            r={pearl.r * 0.15}
            fill={highlightColor}
            opacity="0.3"
          />
        </g>
      ))}

      {/* Center pendant pearl (larger) */}
      <circle cx="150" cy="198" r="8" fill="url(#pearlGradient)" />
      <circle cx="147" cy="194" r="3" fill={highlightColor} opacity="0.7" />
      <circle cx="153" cy="200" r="1.5" fill={highlightColor} opacity="0.4" />

      {/* Clasp hint at back of neck (barely visible) */}
      <circle cx="125" cy="155" r="2" fill={shadowColor} opacity="0.4" />
      <circle cx="175" cy="155" r="2" fill={shadowColor} opacity="0.4" />
    </g>
  )
}

// ============================================================================
// 3. Chandelier Earrings - Dangling fancy earrings
// ============================================================================
export function ChandelierEarrings({ color = '#FFD700', className = '' }: AccessoryProps) {
  const darkerColor = adjustColor(color, -40)
  const lighterColor = adjustColor(color, 50)
  const crystalColor = '#E8E8FF'

  return (
    <g className={className} data-item="chandelier-earrings">
      <defs>
        <linearGradient id="chandelierGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={lighterColor} />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
      </defs>

      {/* Left Earring - at ear x=100, y=102-130 */}
      <g>
        {/* Top stud */}
        <circle cx="100" cy="102" r="4" fill="url(#chandelierGold)" />
        <circle cx="98" cy="100" r="1.5" fill={lighterColor} opacity="0.6" />

        {/* Main body frame */}
        <path
          d="M 100 106 L 94 115 L 100 118 L 106 115 Z"
          fill="url(#chandelierGold)"
        />
        <path d="M 97 110 L 100 106 L 103 110" fill={lighterColor} opacity="0.3" />

        {/* Center crystal drop */}
        <line x1="100" y1="118" x2="100" y2="124" stroke={color} strokeWidth="1" />
        <path d="M 100 124 L 96 130 L 100 138 L 104 130 Z" fill={crystalColor} opacity="0.9" />
        <path d="M 98 128 L 100 126 L 102 128" fill="white" opacity="0.5" />

        {/* Left crystal drop */}
        <line x1="94" y1="115" x2="92" y2="120" stroke={color} strokeWidth="0.8" />
        <path d="M 92 120 L 90 125 L 92 130 L 94 125 Z" fill={crystalColor} opacity="0.85" />
        <circle cx="91" cy="123" r="0.8" fill="white" opacity="0.5" />

        {/* Right crystal drop */}
        <line x1="106" y1="115" x2="108" y2="120" stroke={color} strokeWidth="0.8" />
        <path d="M 108 120 L 106 125 L 108 130 L 110 125 Z" fill={crystalColor} opacity="0.85" />
        <circle cx="107" cy="123" r="0.8" fill="white" opacity="0.5" />

        {/* Small dangling beads */}
        <circle cx="96" cy="122" r="1.5" fill={color} />
        <circle cx="104" cy="122" r="1.5" fill={color} />
      </g>

      {/* Right Earring - at ear x=200, y=102-130 */}
      <g>
        {/* Top stud */}
        <circle cx="200" cy="102" r="4" fill="url(#chandelierGold)" />
        <circle cx="198" cy="100" r="1.5" fill={lighterColor} opacity="0.6" />

        {/* Main body frame */}
        <path
          d="M 200 106 L 194 115 L 200 118 L 206 115 Z"
          fill="url(#chandelierGold)"
        />
        <path d="M 197 110 L 200 106 L 203 110" fill={lighterColor} opacity="0.3" />

        {/* Center crystal drop */}
        <line x1="200" y1="118" x2="200" y2="124" stroke={color} strokeWidth="1" />
        <path d="M 200 124 L 196 130 L 200 138 L 204 130 Z" fill={crystalColor} opacity="0.9" />
        <path d="M 198 128 L 200 126 L 202 128" fill="white" opacity="0.5" />

        {/* Left crystal drop */}
        <line x1="194" y1="115" x2="192" y2="120" stroke={color} strokeWidth="0.8" />
        <path d="M 192 120 L 190 125 L 192 130 L 194 125 Z" fill={crystalColor} opacity="0.85" />
        <circle cx="191" cy="123" r="0.8" fill="white" opacity="0.5" />

        {/* Right crystal drop */}
        <line x1="206" y1="115" x2="208" y2="120" stroke={color} strokeWidth="0.8" />
        <path d="M 208 120 L 206 125 L 208 130 L 210 125 Z" fill={crystalColor} opacity="0.85" />
        <circle cx="207" cy="123" r="0.8" fill="white" opacity="0.5" />

        {/* Small dangling beads */}
        <circle cx="196" cy="122" r="1.5" fill={color} />
        <circle cx="204" cy="122" r="1.5" fill={color} />
      </g>
    </g>
  )
}

// ============================================================================
// 4. Satin Gloves - Long elbow-length gloves
// ============================================================================
export function SatinGloves({ color = '#FFFFFF', className = '' }: AccessoryProps) {
  const shadowColor = adjustColor(color, -30)
  const highlightColor = adjustColor(color, 40)

  return (
    <g className={className} data-item="satin-gloves">
      <defs>
        <linearGradient id="satinGloveLeft" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={shadowColor} />
          <stop offset="30%" stopColor={color} />
          <stop offset="60%" stopColor={highlightColor} />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
        <linearGradient id="satinGloveRight" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={shadowColor} />
          <stop offset="30%" stopColor={color} />
          <stop offset="60%" stopColor={highlightColor} />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
      </defs>

      {/* Left Glove - covering arm from y=300 to hand */}
      <g>
        {/* Upper arm portion (elbow length) */}
        <path
          d="M 58 300
             Q 52 320, 54 345
             Q 56 365, 55 385
             L 72 390
             Q 76 370, 74 345
             Q 72 320, 78 300
             Z"
          fill="url(#satinGloveLeft)"
        />

        {/* Glove cuff/ruffle at elbow */}
        <path
          d="M 56 300 Q 52 295, 58 292 Q 64 295, 60 300
             Q 64 295, 68 292 Q 74 295, 70 300
             Q 76 295, 80 298"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M 58 294 Q 66 290, 74 294"
          fill="none"
          stroke={highlightColor}
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* Hand coverage */}
        <ellipse cx="58" cy="400" rx="14" ry="16" fill="url(#satinGloveLeft)" />

        {/* Gloved fingers */}
        <path d="M 45 395 Q 40 392, 38 398 Q 36 405, 40 408 Q 44 410, 48 405" fill={color} />
        <path d="M 50 412 Q 48 420, 46 428 Q 45 432, 48 433 Q 51 433, 52 428 Q 54 420, 54 414" fill={color} />
        <path d="M 56 413 Q 55 422, 54 432 Q 53 437, 56 438 Q 59 438, 60 432 Q 61 422, 60 414" fill={color} />
        <path d="M 63 413 Q 63 421, 62 429 Q 61 433, 64 434 Q 67 434, 68 429 Q 68 421, 67 414" fill={color} />
        <path d="M 70 412 Q 71 418, 70 424 Q 69 427, 72 428 Q 75 428, 75 424 Q 75 418, 74 413" fill={color} />

        {/* Satin sheen */}
        <path d="M 60 320 Q 62 340, 60 360" fill="none" stroke={highlightColor} strokeWidth="2" opacity="0.4" />
      </g>

      {/* Right Glove */}
      <g>
        {/* Upper arm portion (elbow length) */}
        <path
          d="M 242 300
             Q 248 320, 246 345
             Q 244 365, 245 385
             L 228 390
             Q 224 370, 226 345
             Q 228 320, 222 300
             Z"
          fill="url(#satinGloveRight)"
        />

        {/* Glove cuff/ruffle at elbow */}
        <path
          d="M 244 300 Q 248 295, 242 292 Q 236 295, 240 300
             Q 236 295, 232 292 Q 226 295, 230 300
             Q 224 295, 220 298"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M 242 294 Q 234 290, 226 294"
          fill="none"
          stroke={highlightColor}
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* Hand coverage */}
        <ellipse cx="242" cy="400" rx="14" ry="16" fill="url(#satinGloveRight)" />

        {/* Gloved fingers */}
        <path d="M 255 395 Q 260 392, 262 398 Q 264 405, 260 408 Q 256 410, 252 405" fill={color} />
        <path d="M 250 412 Q 252 420, 254 428 Q 255 432, 252 433 Q 249 433, 248 428 Q 246 420, 246 414" fill={color} />
        <path d="M 244 413 Q 245 422, 246 432 Q 247 437, 244 438 Q 241 438, 240 432 Q 239 422, 240 414" fill={color} />
        <path d="M 237 413 Q 237 421, 238 429 Q 239 433, 236 434 Q 233 434, 232 429 Q 232 421, 233 414" fill={color} />
        <path d="M 230 412 Q 229 418, 230 424 Q 231 427, 228 428 Q 225 428, 225 424 Q 225 418, 226 413" fill={color} />

        {/* Satin sheen */}
        <path d="M 240 320 Q 238 340, 240 360" fill="none" stroke={highlightColor} strokeWidth="2" opacity="0.4" />
      </g>
    </g>
  )
}

// ============================================================================
// 5. Feather Boa - Fluffy party accessory
// ============================================================================
export function FeatherBoa({ color = '#FF69B4', className = '' }: AccessoryProps) {
  const darkerColor = adjustColor(color, -30)
  const lighterColor = adjustColor(color, 40)

  // Generate fluffy feather puffs along the drape
  const createFeatherPuff = (cx: number, cy: number, scale: number = 1) => (
    <g key={`${cx}-${cy}`}>
      {/* Base fluffy shape */}
      <ellipse cx={cx} cy={cy} rx={12 * scale} ry={8 * scale} fill={color} opacity="0.9" />
      {/* Feather wisps */}
      <path
        d={`M ${cx - 10 * scale} ${cy} Q ${cx - 15 * scale} ${cy - 5 * scale}, ${cx - 12 * scale} ${cy - 8 * scale}`}
        fill="none"
        stroke={lighterColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d={`M ${cx + 10 * scale} ${cy} Q ${cx + 15 * scale} ${cy - 5 * scale}, ${cx + 12 * scale} ${cy - 8 * scale}`}
        fill="none"
        stroke={lighterColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d={`M ${cx} ${cy - 6 * scale} Q ${cx + 3 * scale} ${cy - 12 * scale}, ${cx} ${cy - 14 * scale}`}
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Highlight puff */}
      <ellipse cx={cx - 3 * scale} cy={cy - 2 * scale} rx={4 * scale} ry={3 * scale} fill={lighterColor} opacity="0.4" />
    </g>
  )

  return (
    <g className={className} data-item="feather-boa">
      {/* Main boa drape from shoulder to shoulder, y=170-220 */}

      {/* Left shoulder drape going down */}
      {createFeatherPuff(95, 175, 0.9)}
      {createFeatherPuff(85, 190, 1)}
      {createFeatherPuff(78, 208, 1.1)}
      {createFeatherPuff(75, 228, 1)}

      {/* Across upper back/chest */}
      {createFeatherPuff(110, 185, 1)}
      {createFeatherPuff(130, 182, 1.1)}
      {createFeatherPuff(150, 180, 1.2)}
      {createFeatherPuff(170, 182, 1.1)}
      {createFeatherPuff(190, 185, 1)}

      {/* Right shoulder drape going down */}
      {createFeatherPuff(205, 175, 0.9)}
      {createFeatherPuff(215, 190, 1)}
      {createFeatherPuff(222, 208, 1.1)}
      {createFeatherPuff(225, 228, 1)}

      {/* Additional wispy feathers for fullness */}
      <path
        d="M 78 210 Q 65 220, 60 235"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M 222 210 Q 235 220, 240 235"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Sparkle effects */}
      <circle cx="150" cy="178" r="1.5" fill="white" opacity="0.5" />
      <circle cx="130" cy="185" r="1" fill="white" opacity="0.4" />
      <circle cx="170" cy="185" r="1" fill="white" opacity="0.4" />
    </g>
  )
}

// ============================================================================
// 6. Clutch Purse - Small fancy handbag
// ============================================================================
export function ClutchPurse({ color = '#C0C0C0', className = '' }: AccessoryProps) {
  const darkerColor = adjustColor(color, -40)
  const lighterColor = adjustColor(color, 50)

  return (
    <g className={className} data-item="clutch-purse">
      <defs>
        <linearGradient id="clutchGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={lighterColor} />
          <stop offset="30%" stopColor={color} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
      </defs>

      {/* Clutch held in left hand, x=55-80, y=400-430 */}
      <g transform="translate(58, 400)">
        {/* Main body - rectangular with rounded edges */}
        <rect
          x="-25"
          y="5"
          width="40"
          height="25"
          rx="3"
          ry="3"
          fill="url(#clutchGradient)"
        />

        {/* Flap */}
        <path
          d="M -25 10 L -25 5 Q -25 2, -22 2 L 12 2 Q 15 2, 15 5 L 15 15 Q 10 18, -5 18 Q -20 18, -25 15 Z"
          fill={color}
        />
        <path
          d="M -22 4 L 12 4"
          fill="none"
          stroke={lighterColor}
          strokeWidth="1"
          opacity="0.6"
        />

        {/* Clasp - decorative diamond/gem */}
        <path
          d="M -5 15 L -9 18 L -5 22 L -1 18 Z"
          fill="#FFFFFF"
          opacity="0.9"
        />
        <path
          d="M -5 15 L -7 17 L -5 18 L -3 17 Z"
          fill="#E0E8FF"
          opacity="0.8"
        />
        <circle cx="-6" cy="17" r="0.8" fill="white" opacity="0.7" />

        {/* Quilted pattern texture */}
        <path
          d="M -20 10 L -10 20 M -10 10 L 0 20 M 0 10 L 10 20"
          fill="none"
          stroke={darkerColor}
          strokeWidth="0.5"
          opacity="0.2"
        />
        <path
          d="M -20 20 L -10 10 M -10 20 L 0 10 M 0 20 L 10 10"
          fill="none"
          stroke={darkerColor}
          strokeWidth="0.5"
          opacity="0.2"
        />

        {/* Shine */}
        <ellipse cx="5" cy="18" rx="6" ry="4" fill={lighterColor} opacity="0.2" />
      </g>
    </g>
  )
}

// ============================================================================
// 7. Crown - Royal king/queen crown
// ============================================================================
export function Crown({ color = '#FFD700', className = '' }: AccessoryProps) {
  const darkerColor = adjustColor(color, -40)
  const lighterColor = adjustColor(color, 50)

  return (
    <g className={className} data-item="crown">
      <defs>
        <linearGradient id="crownGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={lighterColor} />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
      </defs>

      {/* Crown base band on head y=40-55 */}
      <path
        d="M 105 55 Q 115 48, 150 46 Q 185 48, 195 55 Q 190 60, 150 58 Q 110 60, 105 55 Z"
        fill="url(#crownGradient)"
      />
      <path
        d="M 107 53 Q 150 48, 193 53"
        fill="none"
        stroke={lighterColor}
        strokeWidth="2"
        opacity="0.5"
      />

      {/* Crown body with 5 points */}
      <path
        d="M 105 55
           L 100 25
           L 115 42
           L 125 15
           L 140 42
           L 150 5
           L 160 42
           L 175 15
           L 185 42
           L 200 25
           L 195 55
           Z"
        fill="url(#crownGradient)"
      />

      {/* Point highlights */}
      <path d="M 148 10 L 150 5 L 152 10" fill={lighterColor} opacity="0.5" />
      <path d="M 123 20 L 125 15 L 127 20" fill={lighterColor} opacity="0.4" />
      <path d="M 173 20 L 175 15 L 177 20" fill={lighterColor} opacity="0.4" />
      <path d="M 98 30 L 100 25 L 102 30" fill={lighterColor} opacity="0.3" />
      <path d="M 198 30 L 200 25 L 202 30" fill={lighterColor} opacity="0.3" />

      {/* Crown jewels */}
      {/* Center large ruby */}
      <ellipse cx="150" cy="20" rx="5" ry="6" fill="#DC143C" />
      <ellipse cx="148" cy="18" rx="2" ry="2.5" fill="white" opacity="0.5" />

      {/* Side sapphires */}
      <ellipse cx="125" cy="30" rx="4" ry="5" fill="#0047AB" />
      <ellipse cx="123.5" cy="28.5" rx="1.5" ry="2" fill="white" opacity="0.5" />
      <ellipse cx="175" cy="30" rx="4" ry="5" fill="#0047AB" />
      <ellipse cx="173.5" cy="28.5" rx="1.5" ry="2" fill="white" opacity="0.5" />

      {/* Outer emeralds */}
      <circle cx="105" cy="40" r="3" fill="#50C878" />
      <circle cx="103.5" cy="38.5" r="1" fill="white" opacity="0.5" />
      <circle cx="195" cy="40" r="3" fill="#50C878" />
      <circle cx="193.5" cy="38.5" r="1" fill="white" opacity="0.5" />

      {/* Band jewels */}
      <circle cx="130" cy="52" r="2.5" fill="#DC143C" />
      <circle cx="150" cy="50" r="3" fill="#50C878" />
      <circle cx="170" cy="52" r="2.5" fill="#DC143C" />

      {/* Gold bead details on band */}
      <circle cx="115" cy="53" r="1.5" fill={lighterColor} />
      <circle cx="140" cy="51" r="1.5" fill={lighterColor} />
      <circle cx="160" cy="51" r="1.5" fill={lighterColor} />
      <circle cx="185" cy="53" r="1.5" fill={lighterColor} />

      {/* Sparkle effects */}
      <circle cx="150" cy="8" r="1.5" fill="white" opacity="0.6" />
      <circle cx="125" cy="18" r="1" fill="white" opacity="0.4" />
      <circle cx="175" cy="18" r="1" fill="white" opacity="0.4" />
    </g>
  )
}

// ============================================================================
// 8. Masquerade Mask - Fancy party mask
// ============================================================================
export function MasqueradeMask({ color = '#800020', className = '' }: AccessoryProps) {
  const darkerColor = adjustColor(color, -30)
  const lighterColor = adjustColor(color, 40)
  const goldAccent = '#FFD700'

  return (
    <g className={className} data-item="masquerade-mask">
      <defs>
        <linearGradient id="maskGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={lighterColor} />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
      </defs>

      {/* Main mask shape - over eyes y=70-95 */}
      <path
        d="M 100 82
           Q 100 68, 115 65
           Q 130 62, 150 70
           Q 170 62, 185 65
           Q 200 68, 200 82
           Q 200 95, 185 100
           Q 170 105, 150 100
           Q 130 105, 115 100
           Q 100 95, 100 82
           Z"
        fill="url(#maskGradient)"
      />

      {/* Left eye hole */}
      <ellipse cx="128" cy="82" rx="12" ry="9" fill="black" />
      <ellipse cx="128" cy="82" rx="13" ry="10" fill="none" stroke={goldAccent} strokeWidth="1.5" />

      {/* Right eye hole */}
      <ellipse cx="172" cy="82" rx="12" ry="9" fill="black" />
      <ellipse cx="172" cy="82" rx="13" ry="10" fill="none" stroke={goldAccent} strokeWidth="1.5" />

      {/* Decorative gold filigree */}
      <path
        d="M 115 68 Q 125 65, 128 70"
        fill="none"
        stroke={goldAccent}
        strokeWidth="1"
        opacity="0.8"
      />
      <path
        d="M 128 70 Q 140 67, 150 72"
        fill="none"
        stroke={goldAccent}
        strokeWidth="1"
        opacity="0.8"
      />
      <path
        d="M 150 72 Q 160 67, 172 70"
        fill="none"
        stroke={goldAccent}
        strokeWidth="1"
        opacity="0.8"
      />
      <path
        d="M 172 70 Q 175 65, 185 68"
        fill="none"
        stroke={goldAccent}
        strokeWidth="1"
        opacity="0.8"
      />

      {/* Lower filigree */}
      <path
        d="M 120 95 Q 135 100, 150 96"
        fill="none"
        stroke={goldAccent}
        strokeWidth="1"
        opacity="0.8"
      />
      <path
        d="M 150 96 Q 165 100, 180 95"
        fill="none"
        stroke={goldAccent}
        strokeWidth="1"
        opacity="0.8"
      />

      {/* Decorative swirls at temples */}
      <path
        d="M 100 80 Q 95 75, 92 80 Q 90 85, 95 88 Q 92 92, 88 90"
        fill="none"
        stroke={goldAccent}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M 200 80 Q 205 75, 208 80 Q 210 85, 205 88 Q 208 92, 212 90"
        fill="none"
        stroke={goldAccent}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Small gems on mask */}
      <circle cx="150" cy="68" r="3" fill={goldAccent} />
      <circle cx="149" cy="67" r="1" fill="white" opacity="0.6" />

      <circle cx="110" cy="82" r="2" fill={goldAccent} />
      <circle cx="190" cy="82" r="2" fill={goldAccent} />

      {/* Feather decoration on right side */}
      <g transform="translate(195, 70) rotate(-30)">
        <path
          d="M 0 0 Q 15 -20, 25 -45"
          fill="none"
          stroke={color}
          strokeWidth="2"
        />
        {/* Feather barbs */}
        <path d="M 5 -8 Q 12 -12, 8 -5" fill={color} opacity="0.8" />
        <path d="M 10 -18 Q 18 -22, 13 -15" fill={color} opacity="0.8" />
        <path d="M 15 -28 Q 24 -32, 18 -25" fill={color} opacity="0.8" />
        <path d="M 20 -38 Q 30 -42, 23 -35" fill={lighterColor} opacity="0.7" />
        <path d="M 5 -8 Q -2 -12, 2 -5" fill={color} opacity="0.8" />
        <path d="M 10 -18 Q 2 -22, 7 -15" fill={color} opacity="0.8" />
        <path d="M 15 -28 Q 6 -32, 12 -25" fill={color} opacity="0.8" />
        <path d="M 20 -38 Q 10 -42, 17 -35" fill={lighterColor} opacity="0.7" />
      </g>

      {/* Ribbon ties (behind head, just visible at edges) */}
      <path
        d="M 100 82 Q 95 80, 90 82 Q 85 84, 80 82"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M 200 82 Q 205 80, 210 82 Q 215 84, 220 82"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>
  )
}

// ============================================================================
// 9. Flower Crown - Delicate floral headpiece
// ============================================================================
export function FlowerCrown({ color = '#FFB6C1', className = '' }: AccessoryProps) {
  const lighterColor = adjustColor(color, 40)
  const leafGreen = '#228B22'
  const leafDark = '#1A6B1A'

  // Create a flower at given position
  const createFlower = (cx: number, cy: number, petalColor: string, size: number = 1) => {
    const pc = petalColor
    const lc = adjustColor(petalColor, 35)
    return (
      <g key={`flower-${cx}-${cy}`}>
        {/* Petals */}
        <ellipse cx={cx} cy={cy - 5 * size} rx={4 * size} ry={6 * size} fill={pc} />
        <ellipse cx={cx - 5 * size} cy={cy - 2 * size} rx={4 * size} ry={6 * size} fill={pc} transform={`rotate(-30 ${cx - 5 * size} ${cy - 2 * size})`} />
        <ellipse cx={cx + 5 * size} cy={cy - 2 * size} rx={4 * size} ry={6 * size} fill={pc} transform={`rotate(30 ${cx + 5 * size} ${cy - 2 * size})`} />
        <ellipse cx={cx - 4 * size} cy={cy + 3 * size} rx={4 * size} ry={6 * size} fill={pc} transform={`rotate(-60 ${cx - 4 * size} ${cy + 3 * size})`} />
        <ellipse cx={cx + 4 * size} cy={cy + 3 * size} rx={4 * size} ry={6 * size} fill={pc} transform={`rotate(60 ${cx + 4 * size} ${cy + 3 * size})`} />
        {/* Petal highlights */}
        <ellipse cx={cx - 1 * size} cy={cy - 6 * size} rx={1.5 * size} ry={2 * size} fill={lc} opacity="0.5" />
        {/* Center */}
        <circle cx={cx} cy={cy} r={3 * size} fill="#FFD700" />
        <circle cx={cx - 0.5 * size} cy={cy - 0.5 * size} r={1 * size} fill="#FFF8DC" opacity="0.7" />
      </g>
    )
  }

  return (
    <g className={className} data-item="flower-crown">
      {/* Vine/branch base on head y=35-55 */}
      <path
        d="M 108 50 Q 120 40, 150 38 Q 180 40, 192 50"
        fill="none"
        stroke={leafDark}
        strokeWidth="3"
      />
      <path
        d="M 108 50 Q 120 40, 150 38 Q 180 40, 192 50"
        fill="none"
        stroke={leafGreen}
        strokeWidth="2"
      />

      {/* Small leaves along the vine */}
      <ellipse cx="115" cy="47" rx="6" ry="3" fill={leafGreen} transform="rotate(-20 115 47)" />
      <ellipse cx="130" cy="42" rx="5" ry="2.5" fill={leafGreen} transform="rotate(-10 130 42)" />
      <ellipse cx="145" cy="40" rx="5" ry="2.5" fill={leafGreen} transform="rotate(5 145 40)" />
      <ellipse cx="155" cy="40" rx="5" ry="2.5" fill={leafGreen} transform="rotate(-5 155 40)" />
      <ellipse cx="170" cy="42" rx="5" ry="2.5" fill={leafGreen} transform="rotate(10 170 42)" />
      <ellipse cx="185" cy="47" rx="6" ry="3" fill={leafGreen} transform="rotate(20 185 47)" />

      {/* Leaf vein details */}
      <path d="M 112 47 L 118 47" fill="none" stroke={leafDark} strokeWidth="0.5" opacity="0.5" />
      <path d="M 127 42 L 133 42" fill="none" stroke={leafDark} strokeWidth="0.5" opacity="0.5" />
      <path d="M 182 47 L 188 47" fill="none" stroke={leafDark} strokeWidth="0.5" opacity="0.5" />

      {/* Flowers - main color and accent colors */}
      {createFlower(120, 42, color, 0.9)}
      {createFlower(150, 35, '#FFFFFF', 1.1)}
      {createFlower(180, 42, color, 0.9)}

      {/* Smaller accent flowers */}
      {createFlower(108, 52, lighterColor, 0.6)}
      {createFlower(135, 40, '#E6E6FA', 0.7)}
      {createFlower(165, 40, '#E6E6FA', 0.7)}
      {createFlower(192, 52, lighterColor, 0.6)}

      {/* Baby's breath dots */}
      <circle cx="125" cy="48" r="1.5" fill="white" />
      <circle cx="142" cy="42" r="1.5" fill="white" />
      <circle cx="158" cy="42" r="1.5" fill="white" />
      <circle cx="175" cy="48" r="1.5" fill="white" />
      <circle cx="112" cy="55" r="1" fill="white" />
      <circle cx="188" cy="55" r="1" fill="white" />
    </g>
  )
}

// ============================================================================
// 10. Wand - Sparkly fairy/princess wand
// ============================================================================
export function Wand({ color = '#E6E6FA', className = '' }: AccessoryProps) {
  const lighterColor = adjustColor(color, 40)
  const starColor = '#FFD700'
  const starLight = '#FFF8DC'

  return (
    <g className={className} data-item="wand">
      {/* Wand held in right hand, x=230-260, y=380-450 */}
      <g transform="translate(245, 395) rotate(-25)">
        {/* Wand handle/stick */}
        <rect
          x="-4"
          y="0"
          width="8"
          height="70"
          rx="3"
          ry="3"
          fill={color}
        />
        {/* Handle gradient shine */}
        <rect
          x="-2"
          y="5"
          width="3"
          height="60"
          rx="1"
          fill={lighterColor}
          opacity="0.5"
        />

        {/* Handle decorative rings */}
        <rect x="-5" y="55" width="10" height="4" rx="1" fill={starColor} />
        <rect x="-5" y="62" width="10" height="3" rx="1" fill={starColor} />
        <rect x="-4.5" y="56" width="2" height="2" fill={starLight} opacity="0.6" />

        {/* Ribbon wrap */}
        <path
          d="M -4 25 Q 0 22, 4 25 Q 0 28, -4 31 Q 0 34, 4 31 Q 0 38, -4 37 Q 0 40, 4 43"
          fill="none"
          stroke="#FF69B4"
          strokeWidth="2"
          opacity="0.7"
        />

        {/* Star on top */}
        <g transform="translate(0, -8)">
          {/* Star glow */}
          <circle cx="0" cy="0" r="18" fill={starColor} opacity="0.2" />
          <circle cx="0" cy="0" r="12" fill={starColor} opacity="0.3" />

          {/* Main star */}
          <path
            d="M 0 -18
               L 4 -6
               L 16 -6
               L 7 3
               L 10 15
               L 0 8
               L -10 15
               L -7 3
               L -16 -6
               L -4 -6
               Z"
            fill={starColor}
          />

          {/* Star inner detail */}
          <path
            d="M 0 -12
               L 2 -5
               L 9 -5
               L 4 1
               L 6 8
               L 0 4
               L -6 8
               L -4 1
               L -9 -5
               L -2 -5
               Z"
            fill={starLight}
            opacity="0.5"
          />

          {/* Star highlight */}
          <path
            d="M -2 -14 L 0 -18 L 2 -14"
            fill="white"
            opacity="0.7"
          />

          {/* Center gem */}
          <circle cx="0" cy="0" r="4" fill="#FF69B4" />
          <circle cx="-1" cy="-1" r="1.5" fill="white" opacity="0.7" />
        </g>

        {/* Sparkle trail effects */}
        <circle cx="-15" cy="-15" r="2" fill="white" opacity="0.6" />
        <circle cx="12" cy="-20" r="1.5" fill="white" opacity="0.5" />
        <circle cx="-10" cy="-28" r="1.5" fill="white" opacity="0.5" />
        <circle cx="8" cy="-32" r="1" fill="white" opacity="0.4" />
        <circle cx="-18" cy="-5" r="1" fill={starColor} opacity="0.5" />
        <circle cx="18" cy="-10" r="1" fill={starColor} opacity="0.5" />

        {/* Magic dust particles */}
        <circle cx="-8" cy="-35" r="0.8" fill={starLight} opacity="0.7" />
        <circle cx="5" cy="-38" r="0.8" fill={starLight} opacity="0.6" />
        <circle cx="-3" cy="-42" r="0.6" fill={starLight} opacity="0.5" />
        <circle cx="10" cy="-8" r="0.8" fill="#FF69B4" opacity="0.5" />
        <circle cx="-12" cy="-12" r="0.8" fill="#FF69B4" opacity="0.4" />
      </g>
    </g>
  )
}

// ============================================================================
// Thumbnail Versions (50x50 viewBox)
// ============================================================================

export function DiamondTiaraThumbnail({ color = '#C0C0C0' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      {/* Band */}
      <path d="M 8 35 Q 25 28, 42 35 Q 38 40, 25 38 Q 12 40, 8 35 Z" fill={color} />
      {/* Center peak */}
      <path d="M 23 32 L 25 8 L 27 32 Z" fill={color} />
      <path d="M 25 12 L 22 20 L 25 28 L 28 20 Z" fill="white" opacity="0.9" />
      {/* Side peaks */}
      <path d="M 14 35 L 16 18 L 18 35 Z" fill={color} />
      <path d="M 16 22 L 14 26 L 16 30 L 18 26 Z" fill="white" opacity="0.8" />
      <path d="M 32 35 L 34 18 L 36 35 Z" fill={color} />
      <path d="M 34 22 L 32 26 L 34 30 L 36 26 Z" fill="white" opacity="0.8" />
      {/* Sparkles */}
      <circle cx="25" cy="10" r="1.5" fill="white" opacity="0.7" />
      <circle cx="16" cy="20" r="1" fill="white" opacity="0.5" />
      <circle cx="34" cy="20" r="1" fill="white" opacity="0.5" />
    </svg>
  )
}

export function PearlNecklaceThumbnail({ color = '#FFFAF0' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      {/* Pearl strand */}
      <circle cx="12" cy="18" r="4" fill={color} />
      <circle cx="10.5" cy="16.5" r="1.5" fill="white" opacity="0.7" />
      <circle cx="18" cy="26" r="4.5" fill={color} />
      <circle cx="16.5" cy="24.5" r="1.5" fill="white" opacity="0.7" />
      <circle cx="25" cy="32" r="5" fill={color} />
      <circle cx="23" cy="30" r="1.8" fill="white" opacity="0.7" />
      <circle cx="32" cy="26" r="4.5" fill={color} />
      <circle cx="30.5" cy="24.5" r="1.5" fill="white" opacity="0.7" />
      <circle cx="38" cy="18" r="4" fill={color} />
      <circle cx="36.5" cy="16.5" r="1.5" fill="white" opacity="0.7" />
      {/* Center pendant */}
      <circle cx="25" cy="42" r="5" fill={color} />
      <circle cx="23" cy="40" r="2" fill="white" opacity="0.7" />
    </svg>
  )
}

export function ChandelierEarringsThumbnail({ color = '#FFD700' }: { color?: string }) {
  const crystalColor = '#E8E8FF'
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      {/* Left earring */}
      <circle cx="15" cy="8" r="3" fill={color} />
      <path d="M 15 11 L 10 18 L 15 20 L 20 18 Z" fill={color} />
      <path d="M 15 20 L 15 25 L 12 32 L 15 40 L 18 32 Z" fill={crystalColor} opacity="0.9" />
      <path d="M 10 18 L 8 24 L 10 30 L 12 24 Z" fill={crystalColor} opacity="0.8" />
      <path d="M 20 18 L 18 24 L 20 30 L 22 24 Z" fill={crystalColor} opacity="0.8" />
      {/* Right earring */}
      <circle cx="35" cy="8" r="3" fill={color} />
      <path d="M 35 11 L 30 18 L 35 20 L 40 18 Z" fill={color} />
      <path d="M 35 20 L 35 25 L 32 32 L 35 40 L 38 32 Z" fill={crystalColor} opacity="0.9" />
      <path d="M 30 18 L 28 24 L 30 30 L 32 24 Z" fill={crystalColor} opacity="0.8" />
      <path d="M 40 18 L 38 24 L 40 30 L 42 24 Z" fill={crystalColor} opacity="0.8" />
    </svg>
  )
}

export function SatinGlovesThumbnail({ color = '#FFFFFF' }: { color?: string }) {
  const shadowColor = adjustColor(color, -30)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      {/* Left glove */}
      <path d="M 8 5 Q 5 15, 7 25 Q 8 32, 6 38 L 14 40 Q 16 32, 14 25 Q 12 15, 16 5 Z" fill={color} />
      <path d="M 7 5 Q 5 3, 8 2 Q 12 3, 10 5 Q 14 3, 16 5" fill="none" stroke={color} strokeWidth="2" />
      {/* Left hand */}
      <ellipse cx="10" cy="42" rx="6" ry="5" fill={color} />
      <path d="M 6 45 L 5 48" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M 8 46 L 7 50" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M 10 46 L 10 51" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M 12 46 L 13 50" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Right glove */}
      <path d="M 42 5 Q 45 15, 43 25 Q 42 32, 44 38 L 36 40 Q 34 32, 36 25 Q 38 15, 34 5 Z" fill={color} />
      <path d="M 43 5 Q 45 3, 42 2 Q 38 3, 40 5 Q 36 3, 34 5" fill="none" stroke={color} strokeWidth="2" />
      {/* Right hand */}
      <ellipse cx="40" cy="42" rx="6" ry="5" fill={color} />
      <path d="M 44 45 L 45 48" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M 42 46 L 43 50" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M 40 46 L 40 51" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M 38 46 L 37 50" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Shine lines */}
      <path d="M 10 12 L 10 22" stroke={shadowColor} strokeWidth="1" opacity="0.3" />
      <path d="M 40 12 L 40 22" stroke={shadowColor} strokeWidth="1" opacity="0.3" />
    </svg>
  )
}

export function FeatherBoaThumbnail({ color = '#FF69B4' }: { color?: string }) {
  const lighterColor = adjustColor(color, 40)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      {/* Fluffy puffs */}
      <ellipse cx="8" cy="25" rx="8" ry="6" fill={color} />
      <ellipse cx="18" cy="22" rx="9" ry="7" fill={color} />
      <ellipse cx="30" cy="20" rx="10" ry="8" fill={color} />
      <ellipse cx="42" cy="25" rx="8" ry="6" fill={color} />
      {/* Wisps */}
      <path d="M 5 22 Q 2 18, 5 15" fill="none" stroke={lighterColor} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 18 18 Q 18 12, 22 10" fill="none" stroke={lighterColor} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 30 15 Q 32 10, 35 8" fill="none" stroke={lighterColor} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 45 22 Q 48 18, 45 15" fill="none" stroke={lighterColor} strokeWidth="1.5" strokeLinecap="round" />
      {/* Drape down */}
      <ellipse cx="5" cy="35" rx="6" ry="5" fill={color} opacity="0.8" />
      <ellipse cx="45" cy="35" rx="6" ry="5" fill={color} opacity="0.8" />
      {/* Highlights */}
      <ellipse cx="16" cy="20" rx="3" ry="2" fill={lighterColor} opacity="0.5" />
      <ellipse cx="28" cy="18" rx="4" ry="2" fill={lighterColor} opacity="0.5" />
    </svg>
  )
}

export function ClutchPurseThumbnail({ color = '#C0C0C0' }: { color?: string }) {
  const darkerColor = adjustColor(color, -40)
  const lighterColor = adjustColor(color, 50)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      {/* Main body */}
      <rect x="8" y="18" width="34" height="22" rx="3" fill={color} />
      {/* Flap */}
      <path d="M 8 22 L 8 18 Q 8 15, 11 15 L 39 15 Q 42 15, 42 18 L 42 28 Q 35 32, 25 32 Q 15 32, 8 28 Z" fill={lighterColor} />
      {/* Clasp */}
      <path d="M 25 30 L 21 34 L 25 38 L 29 34 Z" fill="white" opacity="0.9" />
      {/* Quilted pattern */}
      <path d="M 12 22 L 20 30 M 20 22 L 28 30 M 28 22 L 36 30" fill="none" stroke={darkerColor} strokeWidth="0.5" opacity="0.3" />
      <path d="M 12 30 L 20 22 M 20 30 L 28 22 M 28 30 L 36 22" fill="none" stroke={darkerColor} strokeWidth="0.5" opacity="0.3" />
      {/* Shine */}
      <ellipse cx="32" cy="28" rx="5" ry="4" fill="white" opacity="0.2" />
    </svg>
  )
}

export function CrownThumbnail({ color = '#FFD700' }: { color?: string }) {
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      {/* Crown base */}
      <path d="M 5 38 Q 25 35, 45 38 Q 42 42, 25 40 Q 8 42, 5 38 Z" fill={color} />
      {/* Crown body with points */}
      <path d="M 5 38 L 2 18 L 12 30 L 18 10 L 25 28 L 32 10 L 38 30 L 48 18 L 45 38 Z" fill={color} />
      {/* Jewels */}
      <ellipse cx="25" cy="18" rx="4" ry="5" fill="#DC143C" />
      <circle cx="24" cy="16.5" r="1.5" fill="white" opacity="0.5" />
      <ellipse cx="12" cy="24" rx="3" ry="4" fill="#0047AB" />
      <ellipse cx="38" cy="24" rx="3" ry="4" fill="#0047AB" />
      <circle cx="6" cy="30" r="2" fill="#50C878" />
      <circle cx="44" cy="30" r="2" fill="#50C878" />
      {/* Band jewels */}
      <circle cx="18" cy="37" r="2" fill="#DC143C" />
      <circle cx="25" cy="36" r="2.5" fill="#50C878" />
      <circle cx="32" cy="37" r="2" fill="#DC143C" />
    </svg>
  )
}

export function MasqueradeMaskThumbnail({ color = '#800020' }: { color?: string }) {
  const goldAccent = '#FFD700'
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      {/* Mask shape */}
      <path d="M 5 25 Q 5 15, 15 12 Q 25 10, 35 12 Q 45 15, 45 25 Q 45 35, 35 38 Q 25 40, 15 38 Q 5 35, 5 25 Z" fill={color} />
      {/* Eye holes */}
      <ellipse cx="17" cy="25" rx="6" ry="5" fill="black" />
      <ellipse cx="17" cy="25" rx="7" ry="6" fill="none" stroke={goldAccent} strokeWidth="1" />
      <ellipse cx="33" cy="25" rx="6" ry="5" fill="black" />
      <ellipse cx="33" cy="25" rx="7" ry="6" fill="none" stroke={goldAccent} strokeWidth="1" />
      {/* Center gem */}
      <circle cx="25" cy="15" r="2.5" fill={goldAccent} />
      {/* Filigree */}
      <path d="M 12 18 Q 20 14, 25 17 Q 30 14, 38 18" fill="none" stroke={goldAccent} strokeWidth="0.8" opacity="0.8" />
      {/* Feather */}
      <path d="M 42 18 Q 48 8, 50 2" fill="none" stroke={color} strokeWidth="2" />
      <path d="M 45 12 Q 48 10, 47 14" fill={color} opacity="0.8" />
      <path d="M 47 8 Q 50 6, 49 10" fill={color} opacity="0.8" />
    </svg>
  )
}

export function FlowerCrownThumbnail({ color = '#FFB6C1' }: { color?: string }) {
  const leafGreen = '#228B22'
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      {/* Vine */}
      <path d="M 5 30 Q 25 22, 45 30" fill="none" stroke={leafGreen} strokeWidth="2" />
      {/* Leaves */}
      <ellipse cx="12" cy="28" rx="5" ry="2" fill={leafGreen} transform="rotate(-15 12 28)" />
      <ellipse cx="25" cy="24" rx="4" ry="2" fill={leafGreen} />
      <ellipse cx="38" cy="28" rx="5" ry="2" fill={leafGreen} transform="rotate(15 38 28)" />
      {/* Flowers */}
      <g transform="translate(15, 24)">
        <circle cx="0" cy="-4" r="3" fill={color} />
        <circle cx="-3" cy="-1" r="3" fill={color} />
        <circle cx="3" cy="-1" r="3" fill={color} />
        <circle cx="-2" cy="2" r="3" fill={color} />
        <circle cx="2" cy="2" r="3" fill={color} />
        <circle cx="0" cy="0" r="2" fill="#FFD700" />
      </g>
      <g transform="translate(25, 20)">
        <circle cx="0" cy="-5" r="4" fill="white" />
        <circle cx="-4" cy="-1" r="4" fill="white" />
        <circle cx="4" cy="-1" r="4" fill="white" />
        <circle cx="-3" cy="3" r="4" fill="white" />
        <circle cx="3" cy="3" r="4" fill="white" />
        <circle cx="0" cy="0" r="2.5" fill="#FFD700" />
      </g>
      <g transform="translate(35, 24)">
        <circle cx="0" cy="-4" r="3" fill={color} />
        <circle cx="-3" cy="-1" r="3" fill={color} />
        <circle cx="3" cy="-1" r="3" fill={color} />
        <circle cx="-2" cy="2" r="3" fill={color} />
        <circle cx="2" cy="2" r="3" fill={color} />
        <circle cx="0" cy="0" r="2" fill="#FFD700" />
      </g>
      {/* Baby's breath */}
      <circle cx="8" cy="32" r="1" fill="white" />
      <circle cx="20" cy="25" r="1" fill="white" />
      <circle cx="30" cy="25" r="1" fill="white" />
      <circle cx="42" cy="32" r="1" fill="white" />
    </svg>
  )
}

export function WandThumbnail({ color = '#E6E6FA' }: { color?: string }) {
  const starColor = '#FFD700'
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      {/* Wand handle */}
      <rect x="20" y="25" width="6" height="25" rx="2" fill={color} transform="rotate(-15 23 37)" />
      {/* Handle rings */}
      <rect x="19" y="42" width="8" height="3" rx="1" fill={starColor} transform="rotate(-15 23 43)" />
      {/* Ribbon */}
      <path d="M 21 32 Q 24 30, 27 32 Q 24 34, 21 36" fill="none" stroke="#FF69B4" strokeWidth="1.5" opacity="0.7" transform="rotate(-15 24 33)" />
      {/* Star */}
      <g transform="translate(25, 15)">
        {/* Star glow */}
        <circle cx="0" cy="0" r="10" fill={starColor} opacity="0.2" />
        <circle cx="0" cy="0" r="6" fill={starColor} opacity="0.3" />
        {/* Star shape */}
        <path d="M 0 -10 L 2 -4 L 8 -3 L 4 2 L 5 8 L 0 5 L -5 8 L -4 2 L -8 -3 L -2 -4 Z" fill={starColor} />
        {/* Center gem */}
        <circle cx="0" cy="0" r="2.5" fill="#FF69B4" />
        <circle cx="-0.5" cy="-0.5" r="1" fill="white" opacity="0.7" />
      </g>
      {/* Sparkles */}
      <circle cx="15" cy="10" r="1.5" fill="white" opacity="0.6" />
      <circle cx="35" cy="8" r="1" fill="white" opacity="0.5" />
      <circle cx="18" cy="5" r="1" fill="white" opacity="0.4" />
      <circle cx="32" cy="18" r="1" fill={starColor} opacity="0.5" />
    </svg>
  )
}

// ============================================================================
// Default Export
// ============================================================================

const AccessoriesExpansion = {
  DiamondTiara,
  PearlNecklace,
  ChandelierEarrings,
  SatinGloves,
  FeatherBoa,
  ClutchPurse,
  Crown,
  MasqueradeMask,
  FlowerCrown,
  Wand,
}

export default AccessoriesExpansion
