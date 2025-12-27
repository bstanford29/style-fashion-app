'use client'

/**
 * CharacterBase - Fashion doll SVG character with realistic proportions
 * ViewBox: 300x800 (tall fashion illustration proportions)
 *
 * Proportions:
 * - Head: ~80 units (1/10 of height)
 * - Neck: ~40 units
 * - Torso: ~200 units
 * - Legs: ~400 units (half of total height)
 */

export interface CharacterBaseProps {
  /** Skin tone ID - skin01 through skin05 */
  skinTone: string
  /** Optional className for the SVG */
  className?: string
}

/** Skin tone color mapping */
const SKIN_TONES: Record<string, string> = {
  skin01: '#FFE4C4', // Light
  skin02: '#DEB887', // Medium Light
  skin03: '#D2691E', // Medium
  skin04: '#8B4513', // Medium Dark
  skin05: '#4A2C2A', // Dark
}

/** Darker shade for shadows/details */
function getShadowTone(baseColor: string): string {
  const shadows: Record<string, string> = {
    '#FFE4C4': '#E5CDB0',
    '#DEB887': '#C9A070',
    '#D2691E': '#A85218',
    '#8B4513': '#6E370F',
    '#4A2C2A': '#3A2220',
  }
  return shadows[baseColor] || baseColor
}

export function CharacterBase({ skinTone, className = '' }: CharacterBaseProps) {
  const skin = SKIN_TONES[skinTone] || SKIN_TONES.skin01
  const shadowSkin = getShadowTone(skin)

  // Base underwear colors
  const underwearColor = '#F5E6D3'
  const underwearStroke = '#E5D6C3'

  return (
    <svg
      viewBox="0 0 300 800"
      className={className}
      style={{ width: '100%', height: '100%' }}
      aria-label="Fashion doll character"
    >
      {/* Background gradient for depth */}
      <defs>
        <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={shadowSkin} />
          <stop offset="30%" stopColor={skin} />
          <stop offset="70%" stopColor={skin} />
          <stop offset="100%" stopColor={shadowSkin} />
        </linearGradient>
        <linearGradient id="legGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={shadowSkin} />
          <stop offset="50%" stopColor={skin} />
          <stop offset="100%" stopColor={shadowSkin} />
        </linearGradient>
      </defs>

      {/* === LEGS (y: 400-780) === */}
      {/* Left leg */}
      <path
        d="M 110 400
           Q 100 420, 105 500
           Q 108 600, 112 700
           Q 115 750, 120 780
           L 140 780
           Q 138 750, 135 700
           Q 132 600, 130 500
           Q 128 420, 135 400
           Z"
        fill="url(#legGradient)"
      />
      {/* Right leg */}
      <path
        d="M 165 400
           Q 172 420, 170 500
           Q 168 600, 165 700
           Q 162 750, 160 780
           L 180 780
           Q 185 750, 188 700
           Q 192 600, 195 500
           Q 200 420, 190 400
           Z"
        fill="url(#legGradient)"
      />

      {/* === BASE UNDERWEAR/SHORTS === */}
      <path
        d="M 105 340
           Q 100 360, 105 400
           L 130 400
           L 150 380
           L 170 400
           L 195 400
           Q 200 360, 195 340
           Q 175 350, 150 350
           Q 125 350, 105 340
           Z"
        fill={underwearColor}
        stroke={underwearStroke}
        strokeWidth="1"
      />

      {/* === TORSO (y: 140-340) === */}
      <path
        d="M 110 145
           Q 100 180, 105 220
           Q 108 280, 110 340
           Q 130 355, 150 355
           Q 170 355, 190 340
           Q 192 280, 195 220
           Q 200 180, 190 145
           Z"
        fill="url(#bodyGradient)"
      />

      {/* Belly button hint */}
      <ellipse cx="150" cy="300" rx="3" ry="4" fill={shadowSkin} opacity="0.5" />

      {/* === BASE TANK TOP === */}
      <path
        d="M 115 150
           Q 110 180, 112 220
           Q 114 250, 115 280
           L 115 285
           Q 130 295, 150 295
           Q 170 295, 185 285
           L 185 280
           Q 186 250, 188 220
           Q 190 180, 185 150
           Q 170 145, 150 145
           Q 130 145, 115 150
           Z"
        fill={underwearColor}
        stroke={underwearStroke}
        strokeWidth="1"
      />

      {/* Tank top straps */}
      <path
        d="M 125 100 Q 120 120, 118 150"
        fill="none"
        stroke={underwearStroke}
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M 175 100 Q 180 120, 182 150"
        fill="none"
        stroke={underwearStroke}
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* === ARMS (slightly away from body) === */}
      {/* Left arm */}
      <path
        d="M 105 150
           Q 85 160, 70 200
           Q 60 260, 55 320
           Q 52 360, 50 400
           Q 48 420, 52 430
           L 60 430
           Q 65 420, 68 400
           Q 72 360, 75 320
           Q 80 260, 88 200
           Q 95 170, 110 158
           Z"
        fill="url(#bodyGradient)"
      />
      {/* Left hand */}
      <ellipse cx="55" cy="435" rx="12" ry="15" fill={skin} />

      {/* Right arm */}
      <path
        d="M 195 150
           Q 215 160, 230 200
           Q 240 260, 245 320
           Q 248 360, 250 400
           Q 252 420, 248 430
           L 240 430
           Q 235 420, 232 400
           Q 228 360, 225 320
           Q 220 260, 212 200
           Q 205 170, 190 158
           Z"
        fill="url(#bodyGradient)"
      />
      {/* Right hand */}
      <ellipse cx="245" cy="435" rx="12" ry="15" fill={skin} />

      {/* === NECK (y: 100-140) === */}
      <path
        d="M 130 100
           Q 125 110, 125 130
           Q 128 140, 135 145
           L 165 145
           Q 172 140, 175 130
           Q 175 110, 170 100
           Z"
        fill={skin}
      />

      {/* === HEAD (y: 20-100) === */}
      <ellipse
        cx="150"
        cy="60"
        rx="42"
        ry="50"
        fill={skin}
      />

      {/* Ears */}
      <ellipse cx="108" cy="65" rx="8" ry="12" fill={skin} />
      <ellipse cx="192" cy="65" rx="8" ry="12" fill={skin} />
      <ellipse cx="108" cy="65" rx="4" ry="7" fill={shadowSkin} opacity="0.4" />
      <ellipse cx="192" cy="65" rx="4" ry="7" fill={shadowSkin} opacity="0.4" />

      {/* === FACE === */}
      {/* Eyes */}
      <ellipse cx="132" cy="55" rx="10" ry="12" fill="white" />
      <ellipse cx="168" cy="55" rx="10" ry="12" fill="white" />

      {/* Irises */}
      <ellipse cx="134" cy="57" rx="6" ry="7" fill="#4A3728" />
      <ellipse cx="170" cy="57" rx="6" ry="7" fill="#4A3728" />

      {/* Pupils */}
      <ellipse cx="135" cy="57" rx="3" ry="4" fill="#1a1a1a" />
      <ellipse cx="171" cy="57" rx="3" ry="4" fill="#1a1a1a" />

      {/* Eye highlights */}
      <ellipse cx="137" cy="54" rx="2" ry="2" fill="white" />
      <ellipse cx="173" cy="54" rx="2" ry="2" fill="white" />

      {/* Eyebrows */}
      <path
        d="M 120 42 Q 132 38, 142 42"
        fill="none"
        stroke="#4A3728"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 158 42 Q 168 38, 180 42"
        fill="none"
        stroke="#4A3728"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Eyelashes */}
      <path
        d="M 122 50 Q 132 46, 142 50"
        fill="none"
        stroke="#2C1810"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M 158 50 Q 168 46, 178 50"
        fill="none"
        stroke="#2C1810"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Nose */}
      <path
        d="M 150 62 Q 148 70, 150 75 Q 152 70, 150 62"
        fill="none"
        stroke={shadowSkin}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Smile */}
      <path
        d="M 138 85 Q 150 95, 162 85"
        fill="none"
        stroke="#D4788A"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Blush */}
      <ellipse cx="125" cy="75" rx="8" ry="5" fill="#FFB6C1" opacity="0.4" />
      <ellipse cx="175" cy="75" rx="8" ry="5" fill="#FFB6C1" opacity="0.4" />

      {/* === FEET === */}
      {/* Gradient definitions for feet */}
      <defs>
        <linearGradient id="footGradientLeft" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={shadowSkin} />
          <stop offset="40%" stopColor={skin} />
          <stop offset="100%" stopColor={shadowSkin} />
        </linearGradient>
        <linearGradient id="footGradientRight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={shadowSkin} />
          <stop offset="60%" stopColor={skin} />
          <stop offset="100%" stopColor={shadowSkin} />
        </linearGradient>
        <linearGradient id="footTopGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={skin} />
          <stop offset="100%" stopColor={shadowSkin} />
        </linearGradient>
      </defs>

      {/* Left foot */}
      <g>
        {/* Ankle transition */}
        <path
          d="M 118 780
             Q 115 782, 113 785
             L 113 788
             Q 115 790, 120 790
             L 140 790
             Q 145 790, 147 788
             L 147 785
             Q 145 782, 142 780
             Z"
          fill={skin}
        />
        {/* Main foot shape - top view with arch */}
        <path
          d="M 108 790
             Q 100 792, 98 796
             Q 97 800, 102 803
             L 148 803
             Q 153 800, 152 796
             Q 150 792, 147 790
             Z"
          fill="url(#footGradientLeft)"
        />
        {/* Heel bump visible from front */}
        <ellipse cx="145" cy="796" rx="6" ry="5" fill={shadowSkin} opacity="0.3" />
        {/* Ball of foot area */}
        <ellipse cx="115" cy="798" rx="12" ry="4" fill={skin} opacity="0.5" />
        {/* Toe bumps */}
        <ellipse cx="100" cy="800" rx="4" ry="3" fill="url(#footTopGradient)" />
        <ellipse cx="107" cy="799" rx="3.5" ry="3" fill="url(#footTopGradient)" />
        <ellipse cx="113" cy="798" rx="3.5" ry="2.8" fill="url(#footTopGradient)" />
        <ellipse cx="119" cy="799" rx="3" ry="2.5" fill="url(#footTopGradient)" />
        <ellipse cx="124" cy="800" rx="2.5" ry="2.2" fill="url(#footTopGradient)" />
        {/* Toe separation lines */}
        <path d="M 104 798 L 104 802" stroke={shadowSkin} strokeWidth="0.5" opacity="0.4" />
        <path d="M 110 797 L 110 801" stroke={shadowSkin} strokeWidth="0.5" opacity="0.4" />
        <path d="M 116 797 L 116 801" stroke={shadowSkin} strokeWidth="0.5" opacity="0.4" />
        <path d="M 121 798 L 121 802" stroke={shadowSkin} strokeWidth="0.5" opacity="0.4" />
      </g>

      {/* Right foot */}
      <g>
        {/* Ankle transition */}
        <path
          d="M 158 780
             Q 155 782, 153 785
             L 153 788
             Q 155 790, 160 790
             L 180 790
             Q 185 790, 187 788
             L 187 785
             Q 185 782, 182 780
             Z"
          fill={skin}
        />
        {/* Main foot shape - top view with arch */}
        <path
          d="M 153 790
             Q 150 792, 148 796
             Q 147 800, 152 803
             L 198 803
             Q 203 800, 202 796
             Q 200 792, 192 790
             Z"
          fill="url(#footGradientRight)"
        />
        {/* Heel bump visible from front */}
        <ellipse cx="155" cy="796" rx="6" ry="5" fill={shadowSkin} opacity="0.3" />
        {/* Ball of foot area */}
        <ellipse cx="185" cy="798" rx="12" ry="4" fill={skin} opacity="0.5" />
        {/* Toe bumps */}
        <ellipse cx="176" cy="800" rx="2.5" ry="2.2" fill="url(#footTopGradient)" />
        <ellipse cx="181" cy="799" rx="3" ry="2.5" fill="url(#footTopGradient)" />
        <ellipse cx="187" cy="798" rx="3.5" ry="2.8" fill="url(#footTopGradient)" />
        <ellipse cx="193" cy="799" rx="3.5" ry="3" fill="url(#footTopGradient)" />
        <ellipse cx="200" cy="800" rx="4" ry="3" fill="url(#footTopGradient)" />
        {/* Toe separation lines */}
        <path d="M 179 798 L 179 802" stroke={shadowSkin} strokeWidth="0.5" opacity="0.4" />
        <path d="M 184 797 L 184 801" stroke={shadowSkin} strokeWidth="0.5" opacity="0.4" />
        <path d="M 190 797 L 190 801" stroke={shadowSkin} strokeWidth="0.5" opacity="0.4" />
        <path d="M 196 798 L 196 802" stroke={shadowSkin} strokeWidth="0.5" opacity="0.4" />
      </g>
    </svg>
  )
}

export default CharacterBase
