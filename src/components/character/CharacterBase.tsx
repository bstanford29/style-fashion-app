'use client'

/**
 * CharacterBase - Semi-realistic fashion doll SVG character
 * Style: "Fashion illustration meets children's book art" (like American Girl dolls)
 * ViewBox: 300x800
 *
 * Proportions (head:body = 1:5.7):
 * - Head: y=40-140 (100 units)
 * - Neck: y=140-170 (30 units)
 * - Torso: y=170-360 (190 units)
 * - Legs: y=400-740 (340 units, ~42% of height)
 * - Feet: y=740-780 (40 units)
 */

export interface CharacterBaseProps {
  /** Skin tone ID - skin01 through skin10 */
  skinTone: string
  /** Optional className for the SVG */
  className?: string
}

/** Skin tone configurations with base, shadow, highlight, and blush variants */
const SKIN_TONES: Record<string, { base: string; shadow: string; highlight: string; blush: string }> = {
  skin01: { base: '#FFE4C4', shadow: '#E6C9A8', highlight: '#FFF5E6', blush: '#FFB6C1' },
  skin02: { base: '#DEB887', shadow: '#C4A070', highlight: '#F5D4A8', blush: '#E8A090' },
  skin03: { base: '#D2691E', shadow: '#B85A18', highlight: '#E8854A', blush: '#C4604A' },
  skin04: { base: '#8B4513', shadow: '#6B350F', highlight: '#A85A28', blush: '#7A4030' },
  skin05: { base: '#4A2C2A', shadow: '#3A2220', highlight: '#5E3A38', blush: '#4A3035' },
  skin06: { base: '#C68642', shadow: '#A66B2E', highlight: '#D9A066', blush: '#B8734A' }, // Warm Caramel
  skin07: { base: '#A0522D', shadow: '#804020', highlight: '#C06A3D', blush: '#8B4A35' }, // Golden Brown
  skin08: { base: '#6F4E37', shadow: '#553D2A', highlight: '#8B6347', blush: '#5F4535' }, // Rich Mahogany
  skin09: { base: '#5D3A1A', shadow: '#462C14', highlight: '#7A4D28', blush: '#4D3020' }, // Deep Cocoa
  skin10: { base: '#3B2219', shadow: '#2A1810', highlight: '#4D3025', blush: '#352018' }, // Espresso
}

export function CharacterBase({ skinTone, className = '' }: CharacterBaseProps) {
  const colors = SKIN_TONES[skinTone] || SKIN_TONES.skin01
  const underwearColor = '#F5E6D3'
  const underwearShadow = '#E8D4C0'

  return (
    <svg
      viewBox="0 0 300 800"
      className={className}
      style={{ width: '100%', height: '100%' }}
      aria-label="Fashion doll character"
    >
      <defs>
        {/* Soft shadow filter */}
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
          <feOffset in="blur" dx="2" dy="4" result="offsetBlur" />
          <feComposite in="SourceGraphic" in2="offsetBlur" operator="over" />
        </filter>

        {/* Face radial gradient */}
        <radialGradient id="faceGradient" cx="50%" cy="40%" r="60%" fx="45%" fy="35%">
          <stop offset="0%" stopColor={colors.highlight} />
          <stop offset="70%" stopColor={colors.base} />
          <stop offset="100%" stopColor={colors.shadow} />
        </radialGradient>

        {/* Body radial gradient */}
        <radialGradient id="bodyGradient" cx="50%" cy="30%" r="70%" fx="45%" fy="25%">
          <stop offset="0%" stopColor={colors.highlight} />
          <stop offset="60%" stopColor={colors.base} />
          <stop offset="100%" stopColor={colors.shadow} />
        </radialGradient>

        {/* Limb linear gradients (cylindrical effect) */}
        <linearGradient id="armGradientLeft" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={colors.shadow} />
          <stop offset="30%" stopColor={colors.base} />
          <stop offset="70%" stopColor={colors.highlight} />
          <stop offset="100%" stopColor={colors.base} />
        </linearGradient>

        <linearGradient id="armGradientRight" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={colors.shadow} />
          <stop offset="30%" stopColor={colors.base} />
          <stop offset="70%" stopColor={colors.highlight} />
          <stop offset="100%" stopColor={colors.base} />
        </linearGradient>

        <linearGradient id="legGradientLeft" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={colors.shadow} />
          <stop offset="40%" stopColor={colors.base} />
          <stop offset="60%" stopColor={colors.highlight} />
          <stop offset="100%" stopColor={colors.base} />
        </linearGradient>

        <linearGradient id="legGradientRight" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={colors.shadow} />
          <stop offset="40%" stopColor={colors.base} />
          <stop offset="60%" stopColor={colors.highlight} />
          <stop offset="100%" stopColor={colors.base} />
        </linearGradient>

        {/* Underwear/tank top gradients */}
        <linearGradient id="underwearGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={underwearColor} />
          <stop offset="100%" stopColor={underwearShadow} />
        </linearGradient>

        <linearGradient id="tankTopGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={underwearColor} />
          <stop offset="100%" stopColor={underwearShadow} />
        </linearGradient>
      </defs>

      {/* ===== BACK LAYER: Legs (y: 400-740) ===== */}
      <g id="legs">
        {/* Left leg */}
        <path
          d="M110 400
             Q105 450, 108 520
             Q110 590, 112 660
             Q113 700, 110 740
             L130 740
             Q132 700, 130 660
             Q128 590, 126 520
             Q124 450, 130 400
             Z"
          fill="url(#legGradientLeft)"
        />

        {/* Right leg */}
        <path
          d="M170 400
             Q175 450, 172 520
             Q170 590, 168 660
             Q167 700, 170 740
             L190 740
             Q192 700, 190 660
             Q188 590, 186 520
             Q184 450, 180 400
             Z"
          fill="url(#legGradientRight)"
        />

        {/* Inner thigh ambient occlusion */}
        <ellipse cx="135" cy="410" rx="8" ry="20" fill={colors.shadow} opacity="0.25" />
        <ellipse cx="165" cy="410" rx="8" ry="20" fill={colors.shadow} opacity="0.25" />

        {/* Knee caps (anatomical hint) */}
        <ellipse cx="120" cy="580" rx="12" ry="15" fill={colors.highlight} opacity="0.2" />
        <ellipse cx="180" cy="580" rx="12" ry="15" fill={colors.highlight} opacity="0.2" />

        {/* Knee creases */}
        <path d="M112 595 Q120 598, 128 595" stroke={colors.shadow} strokeWidth="1" fill="none" opacity="0.3" />
        <path d="M172 595 Q180 598, 188 595" stroke={colors.shadow} strokeWidth="1" fill="none" opacity="0.3" />

        {/* Ankle bones (anatomical hint) */}
        <ellipse cx="106" cy="725" rx="4" ry="6" fill={colors.highlight} opacity="0.25" />
        <ellipse cx="134" cy="725" rx="4" ry="6" fill={colors.highlight} opacity="0.25" />
        <ellipse cx="166" cy="725" rx="4" ry="6" fill={colors.highlight} opacity="0.25" />
        <ellipse cx="194" cy="725" rx="4" ry="6" fill={colors.highlight} opacity="0.25" />
      </g>

      {/* ===== Feet (y: 740-780) ===== */}
      <g id="feet">
        {/* Left foot */}
        <path
          d="M100 740
             Q95 755, 100 770
             Q110 780, 130 778
             Q140 775, 140 765
             Q138 750, 130 740
             Z"
          fill={colors.base}
        />
        <ellipse cx="115" cy="760" rx="15" ry="8" fill={colors.highlight} opacity="0.15" />

        {/* Right foot */}
        <path
          d="M160 740
             Q155 755, 160 770
             Q170 780, 190 778
             Q200 775, 200 765
             Q198 750, 190 740
             Z"
          fill={colors.base}
        />
        <ellipse cx="175" cy="760" rx="15" ry="8" fill={colors.highlight} opacity="0.15" />
      </g>

      {/* ===== Underwear ===== */}
      <g id="underwear">
        <path
          d="M105 355
             Q100 370, 105 395
             Q110 410, 120 400
             L130 400
             Q140 395, 150 395
             Q160 395, 170 400
             L180 400
             Q190 410, 195 395
             Q200 370, 195 355
             Q175 350, 150 350
             Q125 350, 105 355
             Z"
          fill="url(#underwearGradient)"
        />
        {/* Underwear waistband */}
        <path
          d="M105 355 Q125 350, 150 350 Q175 350, 195 355"
          stroke={underwearShadow}
          strokeWidth="2"
          fill="none"
        />
      </g>

      {/* ===== Torso (y: 170-360) ===== */}
      <g id="torso">
        <path
          d="M100 170
             Q85 200, 85 240
             Q85 280, 95 320
             Q105 360, 115 360
             L185 360
             Q195 360, 205 320
             Q215 280, 215 240
             Q215 200, 200 170
             Z"
          fill="url(#bodyGradient)"
        />

        {/* Collarbone (anatomical hint) */}
        <path
          d="M110 185 Q130 180, 150 182 Q170 180, 190 185"
          stroke={colors.shadow}
          strokeWidth="1.5"
          fill="none"
          opacity="0.25"
        />

        {/* Shoulder caps */}
        <ellipse cx="90" cy="185" rx="10" ry="8" fill={colors.highlight} opacity="0.2" />
        <ellipse cx="210" cy="185" rx="10" ry="8" fill={colors.highlight} opacity="0.2" />

        {/* Armpit ambient occlusion */}
        <ellipse cx="95" cy="210" rx="6" ry="15" fill={colors.shadow} opacity="0.3" />
        <ellipse cx="205" cy="210" rx="6" ry="15" fill={colors.shadow} opacity="0.3" />
      </g>

      {/* ===== Tank Top ===== */}
      <g id="tankTop">
        <path
          d="M105 180
             Q100 185, 100 195
             Q95 220, 95 250
             Q95 290, 100 320
             Q105 350, 115 350
             L185 350
             Q195 350, 200 320
             Q205 290, 205 250
             Q205 220, 200 195
             Q200 185, 195 180
             Q180 175, 150 175
             Q120 175, 105 180
             Z"
          fill="url(#tankTopGradient)"
        />
        {/* Tank top straps */}
        <path
          d="M115 175 Q120 165, 125 155"
          stroke={underwearColor}
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M185 175 Q180 165, 175 155"
          stroke={underwearColor}
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Tank top neckline shadow */}
        <path
          d="M115 180 Q135 190, 150 192 Q165 190, 185 180"
          stroke={underwearShadow}
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
      </g>

      {/* ===== Arms ===== */}
      <g id="arms">
        {/* Left arm */}
        <path
          d="M85 185
             Q70 200, 60 250
             Q55 300, 58 350
             Q60 370, 55 385
             L72 390
             Q78 375, 76 350
             Q73 300, 80 250
             Q88 210, 100 195
             Z"
          fill="url(#armGradientLeft)"
        />

        {/* Right arm */}
        <path
          d="M215 185
             Q230 200, 240 250
             Q245 300, 242 350
             Q240 370, 245 385
             L228 390
             Q222 375, 224 350
             Q227 300, 220 250
             Q212 210, 200 195
             Z"
          fill="url(#armGradientRight)"
        />

        {/* Elbow creases */}
        <path d="M62 310 Q68 315, 74 310" stroke={colors.shadow} strokeWidth="1" fill="none" opacity="0.3" />
        <path d="M226 310 Q232 315, 238 310" stroke={colors.shadow} strokeWidth="1" fill="none" opacity="0.3" />

        {/* Wrist creases */}
        <path d="M56 375 Q62 377, 68 375" stroke={colors.shadow} strokeWidth="0.8" fill="none" opacity="0.25" />
        <path d="M232 375 Q238 377, 244 375" stroke={colors.shadow} strokeWidth="0.8" fill="none" opacity="0.25" />
      </g>

      {/* ===== Hands with 5 Fingers ===== */}
      <g id="hands">
        {/* Left hand */}
        <g id="leftHand">
          {/* Palm */}
          <ellipse cx="58" cy="400" rx="12" ry="14" fill={colors.base} />
          {/* Thumb */}
          <path d="M45 395 Q40 392, 38 398 Q36 405, 40 408 Q44 410, 48 405" fill={colors.base} />
          {/* Index finger */}
          <path d="M50 412 Q48 420, 46 428 Q45 432, 48 433 Q51 433, 52 428 Q54 420, 54 414" fill={colors.base} />
          {/* Middle finger */}
          <path d="M56 413 Q55 422, 54 432 Q53 437, 56 438 Q59 438, 60 432 Q61 422, 60 414" fill={colors.base} />
          {/* Ring finger */}
          <path d="M63 413 Q63 421, 62 429 Q61 433, 64 434 Q67 434, 68 429 Q68 421, 67 414" fill={colors.base} />
          {/* Pinky */}
          <path d="M70 412 Q71 418, 70 424 Q69 427, 72 428 Q75 428, 75 424 Q75 418, 74 413" fill={colors.base} />
          {/* Knuckle shadows */}
          <ellipse cx="52" cy="413" rx="2" ry="1.5" fill={colors.shadow} opacity="0.2" />
          <ellipse cx="58" cy="414" rx="2" ry="1.5" fill={colors.shadow} opacity="0.2" />
          <ellipse cx="64" cy="414" rx="2" ry="1.5" fill={colors.shadow} opacity="0.2" />
          <ellipse cx="70" cy="413" rx="1.5" ry="1.2" fill={colors.shadow} opacity="0.2" />
        </g>

        {/* Right hand */}
        <g id="rightHand">
          {/* Palm */}
          <ellipse cx="242" cy="400" rx="12" ry="14" fill={colors.base} />
          {/* Thumb */}
          <path d="M255 395 Q260 392, 262 398 Q264 405, 260 408 Q256 410, 252 405" fill={colors.base} />
          {/* Index finger */}
          <path d="M250 412 Q252 420, 254 428 Q255 432, 252 433 Q249 433, 248 428 Q246 420, 246 414" fill={colors.base} />
          {/* Middle finger */}
          <path d="M244 413 Q245 422, 246 432 Q247 437, 244 438 Q241 438, 240 432 Q239 422, 240 414" fill={colors.base} />
          {/* Ring finger */}
          <path d="M237 413 Q237 421, 238 429 Q239 433, 236 434 Q233 434, 232 429 Q232 421, 233 414" fill={colors.base} />
          {/* Pinky */}
          <path d="M230 412 Q229 418, 230 424 Q231 427, 228 428 Q225 428, 225 424 Q225 418, 226 413" fill={colors.base} />
          {/* Knuckle shadows */}
          <ellipse cx="248" cy="413" rx="2" ry="1.5" fill={colors.shadow} opacity="0.2" />
          <ellipse cx="242" cy="414" rx="2" ry="1.5" fill={colors.shadow} opacity="0.2" />
          <ellipse cx="236" cy="414" rx="2" ry="1.5" fill={colors.shadow} opacity="0.2" />
          <ellipse cx="230" cy="413" rx="1.5" ry="1.2" fill={colors.shadow} opacity="0.2" />
        </g>
      </g>

      {/* ===== Neck (y: 140-170) ===== */}
      <g id="neck">
        <path
          d="M125 140
             Q120 155, 125 170
             L175 170
             Q180 155, 175 140
             Z"
          fill={colors.base}
        />
        {/* Neck shadow (ambient occlusion) */}
        <ellipse cx="150" cy="165" rx="25" ry="8" fill={colors.shadow} opacity="0.3" />
      </g>

      {/* ===== Head (y: 40-140) ===== */}
      <g id="head" filter="url(#softShadow)">
        {/* Head shape */}
        <ellipse cx="150" cy="90" rx="50" ry="55" fill="url(#faceGradient)" />

        {/* Ears */}
        <ellipse cx="100" cy="95" rx="8" ry="12" fill={colors.base} />
        <ellipse cx="100" cy="95" rx="4" ry="6" fill={colors.shadow} opacity="0.3" />
        <ellipse cx="200" cy="95" rx="8" ry="12" fill={colors.base} />
        <ellipse cx="200" cy="95" rx="4" ry="6" fill={colors.shadow} opacity="0.3" />

        {/* Eyebrows */}
        <path d="M120 68 Q128 64, 138 67" stroke={colors.shadow} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
        <path d="M162 67 Q172 64, 180 68" stroke={colors.shadow} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />

        {/* Left Eye - almond shaped, semi-realistic */}
        <g id="leftEye">
          <ellipse cx="128" cy="82" rx="10" ry="7" fill="white" />
          <ellipse cx="128" cy="83" rx="5" ry="5.5" fill="#5D4037" />
          <circle cx="128" cy="83" r="2.5" fill="#1A1A1A" />
          <circle cx="130" cy="81" r="1.5" fill="white" />
          <path d="M118 79 Q128 74, 138 79" stroke={colors.shadow} strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M120 78 Q118 75, 116 74" stroke={colors.shadow} strokeWidth="0.8" fill="none" opacity="0.3" />
          <path d="M136 78 Q138 75, 140 74" stroke={colors.shadow} strokeWidth="0.8" fill="none" opacity="0.3" />
        </g>

        {/* Right Eye */}
        <g id="rightEye">
          <ellipse cx="172" cy="82" rx="10" ry="7" fill="white" />
          <ellipse cx="172" cy="83" rx="5" ry="5.5" fill="#5D4037" />
          <circle cx="172" cy="83" r="2.5" fill="#1A1A1A" />
          <circle cx="174" cy="81" r="1.5" fill="white" />
          <path d="M162 79 Q172 74, 182 79" stroke={colors.shadow} strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M164 78 Q162 75, 160 74" stroke={colors.shadow} strokeWidth="0.8" fill="none" opacity="0.3" />
          <path d="M180 78 Q182 75, 184 74" stroke={colors.shadow} strokeWidth="0.8" fill="none" opacity="0.3" />
        </g>

        {/* Nose - subtle with soft shadow */}
        <path
          d="M150 85 Q148 95, 145 102 Q148 105, 150 105 Q152 105, 155 102 Q152 95, 150 85"
          fill={colors.shadow}
          opacity="0.15"
        />
        <ellipse cx="150" cy="102" rx="3" ry="2" fill={colors.highlight} opacity="0.25" />

        {/* Lips - natural with cupid's bow */}
        <g id="lips">
          <path
            d="M140 115 Q145 112, 150 114 Q155 112, 160 115 Q155 117, 150 116 Q145 117, 140 115 Z"
            fill="#D4A5A5"
            opacity="0.7"
          />
          <path
            d="M142 117 Q150 124, 158 117 Q155 118, 150 118 Q145 118, 142 117 Z"
            fill="#D4A5A5"
            opacity="0.6"
          />
          <path d="M140 116 Q150 118, 160 116" stroke="#C49090" strokeWidth="0.5" fill="none" opacity="0.5" />
        </g>

        {/* Blush - very subtle */}
        <ellipse cx="118" cy="98" rx="12" ry="6" fill={colors.blush} opacity="0.15" />
        <ellipse cx="182" cy="98" rx="12" ry="6" fill={colors.blush} opacity="0.15" />

        {/* Chin highlight */}
        <ellipse cx="150" cy="130" rx="8" ry="5" fill={colors.highlight} opacity="0.2" />
      </g>
    </svg>
  )
}

export default CharacterBase
