'use client'

/**
 * Princess & Party Tops/Dresses Expansion
 * ViewBox: 300x800
 *
 * Character Anatomy Reference:
 * - Neck: y=140-170
 * - Shoulders: y=175, x=85-215
 * - Torso: y=170-360
 * - Waist: y=340-360
 * - Hips: y=360-400
 * - Full dresses extend to y=600-760
 */

interface TopProps {
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
// 1. Ball Gown - Full princess dress with puffy skirt
// ============================================================================
export function BallGown({ color = '#FFB6C1', className = '' }: TopProps) {
  const darkerColor = adjustColor(color, -30)
  const lighterColor = adjustColor(color, 35)
  const sparkleColor = '#FFFFFF'

  return (
    <g className={className} data-item="ball-gown">
      {/* Fitted bodice - sweetheart neckline from y=165 */}
      <path
        d="M 102 168
           Q 95 190, 95 220
           Q 95 280, 100 340
           Q 120 355, 150 358
           Q 180 355, 200 340
           Q 205 280, 205 220
           Q 205 190, 198 168
           Q 175 155, 150 153
           Q 125 155, 102 168
           Z"
        fill={color}
      />

      {/* Sweetheart neckline curve */}
      <path
        d="M 115 168
           Q 125 180, 135 188
           Q 145 192, 150 193
           Q 155 192, 165 188
           Q 175 180, 185 168
           Q 170 178, 150 182
           Q 130 178, 115 168
           Z"
        fill={darkerColor}
        opacity="0.6"
      />

      {/* Bodice center seam with ribbon detail */}
      <path
        d="M 150 195 L 150 355"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.3"
      />

      {/* Corset lacing hints */}
      <path d="M 145 210 L 155 210" stroke={darkerColor} strokeWidth="1.5" opacity="0.4" />
      <path d="M 145 235 L 155 235" stroke={darkerColor} strokeWidth="1.5" opacity="0.4" />
      <path d="M 145 260 L 155 260" stroke={darkerColor} strokeWidth="1.5" opacity="0.4" />
      <path d="M 145 285 L 155 285" stroke={darkerColor} strokeWidth="1.5" opacity="0.4" />
      <path d="M 145 310 L 155 310" stroke={darkerColor} strokeWidth="1.5" opacity="0.4" />

      {/* Waist ribbon/sash */}
      <path
        d="M 95 335
           Q 120 345, 150 348
           Q 180 345, 205 335
           L 205 355
           Q 180 365, 150 368
           Q 120 365, 95 355
           Z"
        fill={darkerColor}
        opacity="0.5"
      />

      {/* Ribbon bow center */}
      <ellipse cx="150" cy="360" rx="12" ry="8" fill={darkerColor} opacity="0.7" />

      {/* Massive puffy ball gown skirt */}
      <path
        d="M 95 355
           Q 40 400, 25 500
           Q 15 600, 25 680
           Q 35 720, 60 740
           L 240 740
           Q 265 720, 275 680
           Q 285 600, 275 500
           Q 260 400, 205 355
           Z"
        fill={color}
      />

      {/* Skirt volume layers - back layer */}
      <path
        d="M 85 370
           Q 55 420, 40 500
           Q 30 580, 45 680
           Q 55 715, 75 735"
        fill="none"
        stroke={darkerColor}
        strokeWidth="3"
        opacity="0.2"
      />
      <path
        d="M 215 370
           Q 245 420, 260 500
           Q 270 580, 255 680
           Q 245 715, 225 735"
        fill="none"
        stroke={darkerColor}
        strokeWidth="3"
        opacity="0.2"
      />

      {/* Center front drape */}
      <path
        d="M 150 368 Q 150 500, 150 730"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.15"
      />

      {/* Puffy gathered fabric folds */}
      <path
        d="M 110 380 Q 80 480, 60 600 Q 50 680, 70 730"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.25"
      />
      <path
        d="M 190 380 Q 220 480, 240 600 Q 250 680, 230 730"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.25"
      />

      {/* Inner fold shadows for volume */}
      <path
        d="M 130 385 Q 100 500, 85 650"
        fill="none"
        stroke={darkerColor}
        strokeWidth="4"
        opacity="0.12"
      />
      <path
        d="M 170 385 Q 200 500, 215 650"
        fill="none"
        stroke={darkerColor}
        strokeWidth="4"
        opacity="0.12"
      />

      {/* Fabric highlights */}
      <ellipse cx="90" cy="550" rx="20" ry="60" fill={lighterColor} opacity="0.15" />
      <ellipse cx="210" cy="550" rx="20" ry="60" fill={lighterColor} opacity="0.15" />

      {/* Sparkle accents on bodice */}
      <circle cx="125" cy="200" r="2" fill={sparkleColor} opacity="0.8" />
      <circle cx="175" cy="200" r="2" fill={sparkleColor} opacity="0.8" />
      <circle cx="130" cy="240" r="1.5" fill={sparkleColor} opacity="0.7" />
      <circle cx="170" cy="240" r="1.5" fill={sparkleColor} opacity="0.7" />
      <circle cx="135" cy="280" r="1.5" fill={sparkleColor} opacity="0.6" />
      <circle cx="165" cy="280" r="1.5" fill={sparkleColor} opacity="0.6" />

      {/* Sparkles on skirt */}
      <circle cx="80" cy="450" r="2" fill={sparkleColor} opacity="0.5" />
      <circle cx="220" cy="480" r="2" fill={sparkleColor} opacity="0.5" />
      <circle cx="100" cy="580" r="1.5" fill={sparkleColor} opacity="0.4" />
      <circle cx="200" cy="600" r="1.5" fill={sparkleColor} opacity="0.4" />
      <circle cx="150" cy="520" r="2" fill={sparkleColor} opacity="0.5" />

      {/* Hem detail */}
      <path
        d="M 60 740 Q 150 755, 240 740"
        stroke={darkerColor}
        strokeWidth="4"
        fill="none"
        opacity="0.3"
      />
    </g>
  )
}

// ============================================================================
// 2. Mermaid Dress - Fitted sparkly dress with flared bottom
// ============================================================================
export function MermaidDress({ color = '#40E0D0', className = '' }: TopProps) {
  const darkerColor = adjustColor(color, -35)
  const lighterColor = adjustColor(color, 40)
  const sparkleColor = '#FFFFFF'

  return (
    <g className={className} data-item="mermaid-dress">
      {/* Fitted strapless bodice */}
      <path
        d="M 108 168
           Q 100 190, 98 230
           Q 96 280, 98 340
           L 202 340
           Q 204 280, 202 230
           Q 200 190, 192 168
           Q 170 158, 150 156
           Q 130 158, 108 168
           Z"
        fill={color}
      />

      {/* Sweetheart neckline */}
      <path
        d="M 115 168
           Q 130 185, 150 190
           Q 170 185, 185 168
           Q 168 180, 150 185
           Q 132 180, 115 168
           Z"
        fill={darkerColor}
        opacity="0.5"
      />

      {/* Fitted body section */}
      <path
        d="M 98 340
           Q 95 390, 95 450
           Q 95 520, 98 580
           Q 100 600, 105 620
           L 195 620
           Q 200 600, 202 580
           Q 205 520, 205 450
           Q 205 390, 202 340
           Z"
        fill={color}
      />

      {/* Body contour lines */}
      <path
        d="M 105 200 Q 98 320, 98 450 Q 98 550, 108 610"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.2"
      />
      <path
        d="M 195 200 Q 202 320, 202 450 Q 202 550, 192 610"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.2"
      />

      {/* Mermaid flare starting at knee */}
      <path
        d="M 105 620
           Q 75 650, 55 690
           Q 45 720, 50 740
           L 250 740
           Q 255 720, 245 690
           Q 225 650, 195 620
           Z"
        fill={color}
      />

      {/* Flare ruffles */}
      <path
        d="M 55 690 Q 80 710, 70 740"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.3"
      />
      <path
        d="M 85 660 Q 100 700, 95 740"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.3"
      />
      <path
        d="M 150 625 Q 150 680, 150 740"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.2"
      />
      <path
        d="M 215 660 Q 200 700, 205 740"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.3"
      />
      <path
        d="M 245 690 Q 220 710, 230 740"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.3"
      />

      {/* Scale/sequin pattern across dress */}
      {/* Row 1 */}
      <ellipse cx="120" cy="200" rx="8" ry="5" fill={lighterColor} opacity="0.25" />
      <ellipse cx="150" cy="200" rx="8" ry="5" fill={lighterColor} opacity="0.25" />
      <ellipse cx="180" cy="200" rx="8" ry="5" fill={lighterColor} opacity="0.25" />
      {/* Row 2 */}
      <ellipse cx="110" cy="240" rx="8" ry="5" fill={lighterColor} opacity="0.2" />
      <ellipse cx="135" cy="240" rx="8" ry="5" fill={lighterColor} opacity="0.2" />
      <ellipse cx="165" cy="240" rx="8" ry="5" fill={lighterColor} opacity="0.2" />
      <ellipse cx="190" cy="240" rx="8" ry="5" fill={lighterColor} opacity="0.2" />
      {/* Row 3 */}
      <ellipse cx="120" cy="280" rx="8" ry="5" fill={lighterColor} opacity="0.2" />
      <ellipse cx="150" cy="280" rx="8" ry="5" fill={lighterColor} opacity="0.2" />
      <ellipse cx="180" cy="280" rx="8" ry="5" fill={lighterColor} opacity="0.2" />
      {/* Row 4 */}
      <ellipse cx="110" cy="320" rx="8" ry="5" fill={lighterColor} opacity="0.15" />
      <ellipse cx="135" cy="320" rx="8" ry="5" fill={lighterColor} opacity="0.15" />
      <ellipse cx="165" cy="320" rx="8" ry="5" fill={lighterColor} opacity="0.15" />
      <ellipse cx="190" cy="320" rx="8" ry="5" fill={lighterColor} opacity="0.15" />

      {/* Sparkle accents */}
      <circle cx="125" cy="180" r="2.5" fill={sparkleColor} opacity="0.9" />
      <circle cx="175" cy="180" r="2.5" fill={sparkleColor} opacity="0.9" />
      <circle cx="150" cy="220" r="2" fill={sparkleColor} opacity="0.8" />
      <circle cx="115" cy="260" r="2" fill={sparkleColor} opacity="0.7" />
      <circle cx="185" cy="260" r="2" fill={sparkleColor} opacity="0.7" />
      <circle cx="130" cy="350" r="1.5" fill={sparkleColor} opacity="0.6" />
      <circle cx="170" cy="380" r="1.5" fill={sparkleColor} opacity="0.6" />
      <circle cx="140" cy="450" r="1.5" fill={sparkleColor} opacity="0.5" />
      <circle cx="160" cy="500" r="1.5" fill={sparkleColor} opacity="0.5" />
      <circle cx="120" cy="550" r="1.5" fill={sparkleColor} opacity="0.5" />
      <circle cx="180" cy="580" r="1.5" fill={sparkleColor} opacity="0.5" />

      {/* Flare sparkles */}
      <circle cx="80" cy="680" r="2" fill={sparkleColor} opacity="0.6" />
      <circle cx="220" cy="690" r="2" fill={sparkleColor} opacity="0.6" />
      <circle cx="150" cy="700" r="2" fill={sparkleColor} opacity="0.5" />

      {/* Hem highlight */}
      <path
        d="M 50 740 Q 150 750, 250 740"
        stroke={lighterColor}
        strokeWidth="3"
        fill="none"
        opacity="0.4"
      />
    </g>
  )
}

// ============================================================================
// 3. Off-Shoulder Top - Elegant party top
// ============================================================================
export function OffShoulderTop({ color = '#9B59B6', className = '' }: TopProps) {
  const darkerColor = adjustColor(color, -30)
  const lighterColor = adjustColor(color, 30)

  return (
    <g className={className} data-item="off-shoulder-top">
      {/* Main body - covers from below shoulders to below waist */}
      <path
        d="M 82 195
           Q 78 230, 80 280
           Q 82 330, 88 380
           Q 120 400, 150 402
           Q 180 400, 212 380
           Q 218 330, 220 280
           Q 222 230, 218 195
           Q 185 185, 150 183
           Q 115 185, 82 195
           Z"
        fill={color}
      />

      {/* Off-shoulder ruffle band */}
      <path
        d="M 65 185
           Q 60 195, 65 208
           Q 100 225, 150 228
           Q 200 225, 235 208
           Q 240 195, 235 185
           Q 200 200, 150 202
           Q 100 200, 65 185
           Z"
        fill={color}
      />

      {/* Ruffle edge detail */}
      <path
        d="M 65 185
           Q 55 188, 52 195
           Q 55 205, 62 212"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.4"
      />
      <path
        d="M 235 185
           Q 245 188, 248 195
           Q 245 205, 238 212"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.4"
      />

      {/* Ruffle wave texture */}
      <path
        d="M 80 195 Q 95 210, 115 205 Q 130 200, 150 205 Q 170 210, 185 205 Q 205 200, 220 195"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.3"
      />

      {/* Upper ruffle wave */}
      <path
        d="M 70 190 Q 90 200, 110 195 Q 130 190, 150 195 Q 170 200, 190 195 Q 210 190, 230 190"
        fill="none"
        stroke={lighterColor}
        strokeWidth="1"
        opacity="0.4"
      />

      {/* Center seam */}
      <path
        d="M 150 228 L 150 395"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.2"
      />

      {/* Side contours */}
      <path
        d="M 88 210 Q 82 290, 92 380"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.15"
      />
      <path
        d="M 212 210 Q 218 290, 208 380"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.15"
      />

      {/* Fabric highlights */}
      <ellipse cx="120" cy="290" rx="15" ry="40" fill={lighterColor} opacity="0.15" />
      <ellipse cx="180" cy="290" rx="15" ry="40" fill={lighterColor} opacity="0.15" />

      {/* Hem detail */}
      <path
        d="M 88 380
           Q 120 400, 150 405
           Q 180 400, 212 380
           L 212 395
           Q 180 415, 150 420
           Q 120 415, 88 395
           Z"
        fill={darkerColor}
        opacity="0.4"
      />
    </g>
  )
}

// ============================================================================
// 4. Velvet Cape - Royal cape with clasp
// ============================================================================
export function VelvetCape({ color = '#8B0000', className = '' }: TopProps) {
  const darkerColor = adjustColor(color, -40)
  const lighterColor = adjustColor(color, 25)
  const goldColor = '#FFD700'
  const innerColor = '#E8D4B8'

  return (
    <g className={className} data-item="velvet-cape">
      {/* Cape back - drapes from shoulders */}
      <path
        d="M 85 175
           Q 50 220, 35 320
           Q 25 420, 35 540
           Q 45 640, 65 720
           Q 120 745, 150 745
           Q 180 745, 235 720
           Q 255 640, 265 540
           Q 275 420, 265 320
           Q 250 220, 215 175
           Z"
        fill={color}
      />

      {/* Cape inner lining visible at edges */}
      <path
        d="M 85 175
           Q 75 200, 70 240
           L 80 240
           Q 82 200, 90 180
           Z"
        fill={innerColor}
        opacity="0.6"
      />
      <path
        d="M 215 175
           Q 225 200, 230 240
           L 220 240
           Q 218 200, 210 180
           Z"
        fill={innerColor}
        opacity="0.6"
      />

      {/* Cape collar standing */}
      <path
        d="M 90 165
           Q 85 155, 90 145
           Q 120 138, 150 136
           Q 180 138, 210 145
           Q 215 155, 210 165
           Q 180 172, 150 173
           Q 120 172, 90 165
           Z"
        fill={color}
      />

      {/* Collar inner */}
      <path
        d="M 105 158
           Q 125 152, 150 150
           Q 175 152, 195 158
           Q 180 155, 150 153
           Q 120 155, 105 158
           Z"
        fill={darkerColor}
        opacity="0.5"
      />

      {/* Gold clasp chain */}
      <path
        d="M 115 165 Q 130 175, 150 178 Q 170 175, 185 165"
        fill="none"
        stroke={goldColor}
        strokeWidth="3"
        opacity="0.9"
      />

      {/* Clasp medallions */}
      <circle cx="115" cy="165" r="8" fill={goldColor} />
      <circle cx="115" cy="165" r="5" fill={lighterColor} opacity="0.3" />
      <circle cx="185" cy="165" r="8" fill={goldColor} />
      <circle cx="185" cy="165" r="5" fill={lighterColor} opacity="0.3" />

      {/* Cape draping folds */}
      <path
        d="M 100 200 Q 80 350, 60 550 Q 55 650, 80 720"
        fill="none"
        stroke={darkerColor}
        strokeWidth="4"
        opacity="0.3"
      />
      <path
        d="M 200 200 Q 220 350, 240 550 Q 245 650, 220 720"
        fill="none"
        stroke={darkerColor}
        strokeWidth="4"
        opacity="0.3"
      />
      <path
        d="M 150 180 Q 150 400, 150 700"
        fill="none"
        stroke={darkerColor}
        strokeWidth="3"
        opacity="0.15"
      />

      {/* Additional fold details */}
      <path
        d="M 120 220 Q 95 400, 90 620"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.2"
      />
      <path
        d="M 180 220 Q 205 400, 210 620"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.2"
      />

      {/* Velvet texture highlights */}
      <ellipse cx="80" cy="400" rx="15" ry="80" fill={lighterColor} opacity="0.08" />
      <ellipse cx="220" cy="400" rx="15" ry="80" fill={lighterColor} opacity="0.08" />

      {/* Bottom hem with slight curve */}
      <path
        d="M 65 720 Q 150 750, 235 720"
        stroke={darkerColor}
        strokeWidth="4"
        fill="none"
        opacity="0.4"
      />

      {/* Fur or ermine trim at collar (optional royal detail) */}
      <path
        d="M 90 145
           Q 100 142, 115 140
           Q 130 138, 150 137
           Q 170 138, 185 140
           Q 200 142, 210 145"
        stroke="#FFFAFA"
        strokeWidth="6"
        fill="none"
        opacity="0.7"
      />
    </g>
  )
}

// ============================================================================
// 5. Sequin Tank - Sparkly party tank top
// ============================================================================
export function SequinTank({ color = '#FFD700', className = '' }: TopProps) {
  const darkerColor = adjustColor(color, -35)
  const lighterColor = adjustColor(color, 30)
  const sparkleColor = '#FFFFFF'

  return (
    <g className={className} data-item="sequin-tank">
      {/* Main body */}
      <path
        d="M 102 175
           Q 96 210, 96 260
           Q 96 320, 102 380
           Q 130 400, 150 402
           Q 170 400, 198 380
           Q 204 320, 204 260
           Q 204 210, 198 175
           Q 175 165, 150 163
           Q 125 165, 102 175
           Z"
        fill={color}
      />

      {/* Tank straps */}
      <path
        d="M 118 175
           Q 115 158, 118 140
           L 132 138
           Q 130 155, 130 172
           Z"
        fill={color}
      />
      <path
        d="M 182 175
           Q 185 158, 182 140
           L 168 138
           Q 170 155, 170 172
           Z"
        fill={color}
      />

      {/* Scoop neckline */}
      <path
        d="M 118 175
           Q 135 195, 150 200
           Q 165 195, 182 175
           Q 168 190, 150 195
           Q 132 190, 118 175
           Z"
        fill={darkerColor}
        opacity="0.5"
      />

      {/* Sequin pattern - grid of sparkly circles */}
      {/* Row 1 */}
      <circle cx="115" cy="195" r="4" fill={lighterColor} opacity="0.5" />
      <circle cx="130" cy="200" r="4" fill={lighterColor} opacity="0.6" />
      <circle cx="150" cy="205" r="4" fill={lighterColor} opacity="0.5" />
      <circle cx="170" cy="200" r="4" fill={lighterColor} opacity="0.6" />
      <circle cx="185" cy="195" r="4" fill={lighterColor} opacity="0.5" />
      {/* Row 2 */}
      <circle cx="108" cy="220" r="4" fill={lighterColor} opacity="0.6" />
      <circle cx="122" cy="225" r="4" fill={lighterColor} opacity="0.5" />
      <circle cx="138" cy="228" r="4" fill={lighterColor} opacity="0.6" />
      <circle cx="162" cy="228" r="4" fill={lighterColor} opacity="0.6" />
      <circle cx="178" cy="225" r="4" fill={lighterColor} opacity="0.5" />
      <circle cx="192" cy="220" r="4" fill={lighterColor} opacity="0.6" />
      {/* Row 3 */}
      <circle cx="105" cy="250" r="4" fill={lighterColor} opacity="0.5" />
      <circle cx="120" cy="255" r="4" fill={lighterColor} opacity="0.6" />
      <circle cx="135" cy="258" r="4" fill={lighterColor} opacity="0.5" />
      <circle cx="150" cy="260" r="4" fill={lighterColor} opacity="0.6" />
      <circle cx="165" cy="258" r="4" fill={lighterColor} opacity="0.5" />
      <circle cx="180" cy="255" r="4" fill={lighterColor} opacity="0.6" />
      <circle cx="195" cy="250" r="4" fill={lighterColor} opacity="0.5" />
      {/* Row 4 */}
      <circle cx="108" cy="285" r="4" fill={lighterColor} opacity="0.6" />
      <circle cx="125" cy="290" r="4" fill={lighterColor} opacity="0.5" />
      <circle cx="142" cy="292" r="4" fill={lighterColor} opacity="0.6" />
      <circle cx="158" cy="292" r="4" fill={lighterColor} opacity="0.6" />
      <circle cx="175" cy="290" r="4" fill={lighterColor} opacity="0.5" />
      <circle cx="192" cy="285" r="4" fill={lighterColor} opacity="0.6" />
      {/* Row 5 */}
      <circle cx="110" cy="320" r="4" fill={lighterColor} opacity="0.5" />
      <circle cx="128" cy="325" r="4" fill={lighterColor} opacity="0.6" />
      <circle cx="150" cy="328" r="4" fill={lighterColor} opacity="0.5" />
      <circle cx="172" cy="325" r="4" fill={lighterColor} opacity="0.6" />
      <circle cx="190" cy="320" r="4" fill={lighterColor} opacity="0.5" />
      {/* Row 6 */}
      <circle cx="115" cy="355" r="4" fill={lighterColor} opacity="0.6" />
      <circle cx="135" cy="360" r="4" fill={lighterColor} opacity="0.5" />
      <circle cx="150" cy="362" r="4" fill={lighterColor} opacity="0.6" />
      <circle cx="165" cy="360" r="4" fill={lighterColor} opacity="0.5" />
      <circle cx="185" cy="355" r="4" fill={lighterColor} opacity="0.6" />

      {/* Sparkle highlight points */}
      <circle cx="125" cy="210" r="2" fill={sparkleColor} opacity="0.95" />
      <circle cx="175" cy="230" r="2" fill={sparkleColor} opacity="0.9" />
      <circle cx="145" cy="270" r="2" fill={sparkleColor} opacity="0.85" />
      <circle cx="160" cy="310" r="2" fill={sparkleColor} opacity="0.8" />
      <circle cx="130" cy="345" r="2" fill={sparkleColor} opacity="0.75" />
      <circle cx="170" cy="375" r="2" fill={sparkleColor} opacity="0.7" />

      {/* Side shading */}
      <path
        d="M 102 190 Q 96 280, 102 380"
        fill="none"
        stroke={darkerColor}
        strokeWidth="3"
        opacity="0.2"
      />
      <path
        d="M 198 190 Q 204 280, 198 380"
        fill="none"
        stroke={darkerColor}
        strokeWidth="3"
        opacity="0.2"
      />

      {/* Hem */}
      <path
        d="M 102 380
           Q 130 400, 150 405
           Q 170 400, 198 380"
        stroke={darkerColor}
        strokeWidth="3"
        fill="none"
        opacity="0.4"
      />
    </g>
  )
}

// ============================================================================
// 6. Peplum Blouse - Fancy top with flared waist
// ============================================================================
export function PeplumBlouse({ color = '#FF69B4', className = '' }: TopProps) {
  const darkerColor = adjustColor(color, -30)
  const lighterColor = adjustColor(color, 30)

  return (
    <g className={className} data-item="peplum-blouse">
      {/* Main fitted bodice */}
      <path
        d="M 95 170
           Q 88 200, 88 250
           Q 88 300, 95 340
           Q 125 350, 150 352
           Q 175 350, 205 340
           Q 212 300, 212 250
           Q 212 200, 205 170
           Q 180 158, 150 156
           Q 120 158, 95 170
           Z"
        fill={color}
      />

      {/* Peter Pan collar */}
      <path
        d="M 120 165
           Q 105 155, 88 165
           Q 98 180, 120 175
           Z"
        fill={color}
      />
      <path
        d="M 180 165
           Q 195 155, 212 165
           Q 202 180, 180 175
           Z"
        fill={color}
      />

      {/* Collar edge detail */}
      <path
        d="M 88 165 Q 100 175, 120 172"
        stroke={darkerColor}
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M 212 165 Q 200 175, 180 172"
        stroke={darkerColor}
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />

      {/* Button placket */}
      <line x1="150" y1="175" x2="150" y2="345" stroke={darkerColor} strokeWidth="2" opacity="0.3" />

      {/* Pearl buttons */}
      <circle cx="150" cy="195" r="4" fill="#FFFAFA" opacity="0.9" />
      <circle cx="150" cy="230" r="4" fill="#FFFAFA" opacity="0.9" />
      <circle cx="150" cy="265" r="4" fill="#FFFAFA" opacity="0.9" />
      <circle cx="150" cy="300" r="4" fill="#FFFAFA" opacity="0.9" />
      <circle cx="150" cy="335" r="4" fill="#FFFAFA" opacity="0.9" />

      {/* Peplum flare */}
      <path
        d="M 95 340
           Q 70 360, 60 400
           Q 58 420, 65 440
           L 235 440
           Q 242 420, 240 400
           Q 230 360, 205 340
           Z"
        fill={color}
      />

      {/* Peplum ruffled layers */}
      <path
        d="M 70 365 Q 110 385, 150 388 Q 190 385, 230 365"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.25"
      />
      <path
        d="M 65 395 Q 105 420, 150 422 Q 195 420, 235 395"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.2"
      />

      {/* Side peplum gathers */}
      <path
        d="M 80 350 Q 68 380, 65 420"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.3"
      />
      <path
        d="M 220 350 Q 232 380, 235 420"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.3"
      />

      {/* Short puff sleeves */}
      <path
        d="M 95 170
           Q 72 178, 58 200
           Q 48 225, 55 255
           L 78 250
           Q 72 225, 80 202
           Q 88 180, 105 175
           Z"
        fill={color}
      />
      <path
        d="M 205 170
           Q 228 178, 242 200
           Q 252 225, 245 255
           L 222 250
           Q 228 225, 220 202
           Q 212 180, 195 175
           Z"
        fill={color}
      />

      {/* Sleeve puff gathering */}
      <path
        d="M 55 255 Q 65 248, 78 250"
        stroke={darkerColor}
        strokeWidth="3"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 245 255 Q 235 248, 222 250"
        stroke={darkerColor}
        strokeWidth="3"
        fill="none"
        opacity="0.4"
      />

      {/* Fabric highlights */}
      <ellipse cx="120" cy="260" rx="12" ry="30" fill={lighterColor} opacity="0.15" />
      <ellipse cx="180" cy="260" rx="12" ry="30" fill={lighterColor} opacity="0.15" />

      {/* Peplum hem */}
      <path
        d="M 65 440 Q 150 455, 235 440"
        stroke={darkerColor}
        strokeWidth="3"
        fill="none"
        opacity="0.3"
      />
    </g>
  )
}

// ============================================================================
// 7. Princess Gown - Classic Disney-style dress
// ============================================================================
export function PrincessGown({ color = '#87CEEB', className = '' }: TopProps) {
  const darkerColor = adjustColor(color, -30)
  const lighterColor = adjustColor(color, 40)
  const accentColor = '#FFD700'

  return (
    <g className={className} data-item="princess-gown">
      {/* Puff sleeves */}
      <path
        d="M 88 175
           Q 55 182, 42 210
           Q 32 245, 45 275
           L 72 268
           Q 62 245, 70 218
           Q 78 195, 100 180
           Z"
        fill={color}
      />
      <path
        d="M 212 175
           Q 245 182, 258 210
           Q 268 245, 255 275
           L 228 268
           Q 238 245, 230 218
           Q 222 195, 200 180
           Z"
        fill={color}
      />

      {/* Sleeve puff gathers */}
      <path
        d="M 45 275 Q 55 270, 72 268"
        stroke={darkerColor}
        strokeWidth="4"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 255 275 Q 245 270, 228 268"
        stroke={darkerColor}
        strokeWidth="4"
        fill="none"
        opacity="0.4"
      />

      {/* Fitted bodice with pointed waist */}
      <path
        d="M 100 175
           Q 92 200, 92 240
           Q 92 300, 100 345
           Q 125 365, 150 370
           Q 175 365, 200 345
           Q 208 300, 208 240
           Q 208 200, 200 175
           Q 175 162, 150 160
           Q 125 162, 100 175
           Z"
        fill={color}
      />

      {/* Square neckline */}
      <path
        d="M 115 175
           L 115 188
           Q 130 195, 150 197
           Q 170 195, 185 188
           L 185 175
           Q 170 168, 150 166
           Q 130 168, 115 175
           Z"
        fill={darkerColor}
        opacity="0.4"
      />

      {/* Bodice V-seams */}
      <path
        d="M 120 175 Q 135 340, 150 370"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.25"
      />
      <path
        d="M 180 175 Q 165 340, 150 370"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.25"
      />

      {/* Gold trim at neckline */}
      <path
        d="M 115 175 Q 130 168, 150 166 Q 170 168, 185 175"
        stroke={accentColor}
        strokeWidth="3"
        fill="none"
        opacity="0.8"
      />

      {/* Full princess skirt */}
      <path
        d="M 100 345
           Q 55 400, 40 500
           Q 30 600, 45 680
           Q 55 720, 80 740
           L 220 740
           Q 245 720, 255 680
           Q 270 600, 260 500
           Q 245 400, 200 345
           Z"
        fill={color}
      />

      {/* Skirt panel lines */}
      <path
        d="M 120 365 Q 90 480, 75 650 Q 72 700, 95 735"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.2"
      />
      <path
        d="M 150 370 Q 150 520, 150 735"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.15"
      />
      <path
        d="M 180 365 Q 210 480, 225 650 Q 228 700, 205 735"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.2"
      />

      {/* Additional skirt folds */}
      <path
        d="M 105 380 Q 65 500, 55 680"
        fill="none"
        stroke={darkerColor}
        strokeWidth="3"
        opacity="0.15"
      />
      <path
        d="M 195 380 Q 235 500, 245 680"
        fill="none"
        stroke={darkerColor}
        strokeWidth="3"
        opacity="0.15"
      />

      {/* Skirt highlights */}
      <ellipse cx="100" cy="520" rx="18" ry="70" fill={lighterColor} opacity="0.15" />
      <ellipse cx="200" cy="520" rx="18" ry="70" fill={lighterColor} opacity="0.15" />

      {/* Gold waist sash */}
      <path
        d="M 100 345
           Q 125 355, 150 358
           Q 175 355, 200 345
           L 200 360
           Q 175 370, 150 373
           Q 125 370, 100 360
           Z"
        fill={accentColor}
        opacity="0.8"
      />

      {/* Bow on sash */}
      <ellipse cx="150" cy="365" rx="15" ry="8" fill={accentColor} opacity="0.9" />
      <path
        d="M 135 365 Q 125 355, 118 365 Q 125 375, 135 365"
        fill={accentColor}
      />
      <path
        d="M 165 365 Q 175 355, 182 365 Q 175 375, 165 365"
        fill={accentColor}
      />

      {/* Hem detail */}
      <path
        d="M 80 740 Q 150 755, 220 740"
        stroke={accentColor}
        strokeWidth="4"
        fill="none"
        opacity="0.6"
      />
    </g>
  )
}

// ============================================================================
// 8. Tulle Party Dress - Short fluffy party dress
// ============================================================================
export function TullePartyDress({ color = '#DDA0DD', className = '' }: TopProps) {
  const darkerColor = adjustColor(color, -25)
  const lighterColor = adjustColor(color, 35)
  const sparkleColor = '#FFFFFF'

  return (
    <g className={className} data-item="tulle-party-dress">
      {/* Fitted bodice with sweetheart neckline */}
      <path
        d="M 105 168
           Q 98 195, 98 240
           Q 98 290, 102 340
           Q 130 355, 150 358
           Q 170 355, 198 340
           Q 202 290, 202 240
           Q 202 195, 195 168
           Q 172 155, 150 153
           Q 128 155, 105 168
           Z"
        fill={color}
      />

      {/* Sweetheart neckline detail */}
      <path
        d="M 118 168
           Q 130 182, 142 188
           Q 150 190, 158 188
           Q 170 182, 182 168
           Q 168 180, 150 185
           Q 132 180, 118 168
           Z"
        fill={darkerColor}
        opacity="0.5"
      />

      {/* Thin straps */}
      <path d="M 118 168 Q 115 150, 118 135 L 128 133 Q 126 150, 126 165 Z" fill={color} />
      <path d="M 182 168 Q 185 150, 182 135 L 172 133 Q 174 150, 174 165 Z" fill={color} />

      {/* Bodice seaming */}
      <line x1="150" y1="188" x2="150" y2="350" stroke={darkerColor} strokeWidth="1" opacity="0.2" />

      {/* Glitter/sequin accents on bodice */}
      <circle cx="125" cy="195" r="2" fill={sparkleColor} opacity="0.8" />
      <circle cx="175" cy="195" r="2" fill={sparkleColor} opacity="0.8" />
      <circle cx="140" cy="230" r="1.5" fill={sparkleColor} opacity="0.7" />
      <circle cx="160" cy="230" r="1.5" fill={sparkleColor} opacity="0.7" />
      <circle cx="150" cy="270" r="2" fill={sparkleColor} opacity="0.7" />
      <circle cx="130" cy="310" r="1.5" fill={sparkleColor} opacity="0.6" />
      <circle cx="170" cy="310" r="1.5" fill={sparkleColor} opacity="0.6" />

      {/* Tulle skirt - multiple fluffy layers */}
      {/* Layer 1 - back/bottom layer */}
      <path
        d="M 102 340
           Q 65 380, 50 450
           Q 42 500, 55 550
           L 245 550
           Q 258 500, 250 450
           Q 235 380, 198 340
           Z"
        fill={color}
        opacity="0.5"
      />

      {/* Layer 2 */}
      <path
        d="M 105 345
           Q 72 382, 58 445
           Q 52 492, 62 535
           L 238 535
           Q 248 492, 242 445
           Q 228 382, 195 345
           Z"
        fill={color}
        opacity="0.6"
      />

      {/* Layer 3 */}
      <path
        d="M 108 350
           Q 78 385, 68 440
           Q 62 485, 70 520
           L 230 520
           Q 238 485, 232 440
           Q 222 385, 192 350
           Z"
        fill={color}
        opacity="0.7"
      />

      {/* Layer 4 - top/front layer */}
      <path
        d="M 110 352
           Q 85 385, 75 435
           Q 70 478, 78 510
           L 222 510
           Q 230 478, 225 435
           Q 215 385, 190 352
           Z"
        fill={color}
      />

      {/* Tulle gather details */}
      <path
        d="M 102 340 Q 80 350, 102 360"
        stroke={darkerColor}
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M 198 340 Q 220 350, 198 360"
        stroke={darkerColor}
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      />

      {/* Tulle texture lines */}
      <path
        d="M 95 370 Q 75 420, 72 500"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1"
        opacity="0.2"
      />
      <path
        d="M 130 365 Q 105 430, 100 510"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1"
        opacity="0.15"
      />
      <path
        d="M 150 358 Q 150 430, 150 520"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1"
        opacity="0.12"
      />
      <path
        d="M 170 365 Q 195 430, 200 510"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1"
        opacity="0.15"
      />
      <path
        d="M 205 370 Q 225 420, 228 500"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1"
        opacity="0.2"
      />

      {/* Sparkles on tulle */}
      <circle cx="90" cy="420" r="2" fill={sparkleColor} opacity="0.6" />
      <circle cx="210" cy="400" r="2" fill={sparkleColor} opacity="0.6" />
      <circle cx="150" cy="440" r="2.5" fill={sparkleColor} opacity="0.7" />
      <circle cx="120" cy="480" r="2" fill={sparkleColor} opacity="0.5" />
      <circle cx="180" cy="490" r="2" fill={sparkleColor} opacity="0.5" />
      <circle cx="95" cy="510" r="1.5" fill={sparkleColor} opacity="0.4" />
      <circle cx="205" cy="520" r="1.5" fill={sparkleColor} opacity="0.4" />

      {/* Tulle highlight effect */}
      <ellipse cx="100" cy="440" rx="20" ry="50" fill={lighterColor} opacity="0.12" />
      <ellipse cx="200" cy="440" rx="20" ry="50" fill={lighterColor} opacity="0.12" />

      {/* Ribbon waist detail */}
      <path
        d="M 102 340
           Q 130 355, 150 358
           Q 170 355, 198 340
           L 198 352
           Q 170 367, 150 370
           Q 130 367, 102 352
           Z"
        fill={darkerColor}
        opacity="0.5"
      />

      {/* Small bow */}
      <ellipse cx="150" cy="355" rx="8" ry="5" fill={darkerColor} opacity="0.7" />
    </g>
  )
}

// ============================================================================
// 9. Ruffle Crop Top - Fun ruffled party top
// ============================================================================
export function RuffleCropTop({ color = '#FF6B6B', className = '' }: TopProps) {
  const darkerColor = adjustColor(color, -30)
  const lighterColor = adjustColor(color, 30)

  return (
    <g className={className} data-item="ruffle-crop-top">
      {/* Main cropped body */}
      <path
        d="M 95 180
           Q 88 210, 90 255
           Q 92 295, 98 335
           Q 125 352, 150 355
           Q 175 352, 202 335
           Q 208 295, 210 255
           Q 212 210, 205 180
           Q 178 168, 150 166
           Q 122 168, 95 180
           Z"
        fill={color}
      />

      {/* Ruffle layer 1 - top */}
      <path
        d="M 82 175
           Q 75 185, 78 200
           Q 115 218, 150 220
           Q 185 218, 222 200
           Q 225 185, 218 175
           Q 185 165, 150 163
           Q 115 165, 82 175
           Z"
        fill={color}
      />

      {/* Ruffle layer 1 wave */}
      <path
        d="M 85 185
           Q 100 195, 120 188
           Q 135 182, 150 188
           Q 165 195, 180 188
           Q 200 182, 215 188"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.3"
      />

      {/* Ruffle layer 2 */}
      <path
        d="M 78 195
           Q 72 205, 75 218
           Q 110 235, 150 238
           Q 190 235, 225 218
           Q 228 205, 222 195
           Q 185 210, 150 212
           Q 115 210, 78 195
           Z"
        fill={color}
        opacity="0.9"
      />

      {/* Ruffle layer 2 wave */}
      <path
        d="M 80 208
           Q 95 218, 115 212
           Q 132 205, 150 212
           Q 168 218, 185 212
           Q 205 205, 220 210"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.25"
      />

      {/* Ruffle layer 3 */}
      <path
        d="M 75 215
           Q 68 228, 72 242
           Q 108 258, 150 260
           Q 192 258, 228 242
           Q 232 228, 225 215
           Q 188 232, 150 235
           Q 112 232, 75 215
           Z"
        fill={color}
        opacity="0.85"
      />

      {/* Ruffle layer 3 wave */}
      <path
        d="M 78 232
           Q 95 245, 118 238
           Q 135 230, 150 238
           Q 165 245, 182 238
           Q 205 230, 222 235"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.2"
      />

      {/* Body center seam */}
      <path
        d="M 150 260 L 150 348"
        stroke={darkerColor}
        strokeWidth="1"
        opacity="0.2"
      />

      {/* Side shaping */}
      <path
        d="M 95 245 Q 90 290, 100 340"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.15"
      />
      <path
        d="M 205 245 Q 210 290, 200 340"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.15"
      />

      {/* Fabric highlights */}
      <ellipse cx="120" cy="295" rx="12" ry="25" fill={lighterColor} opacity="0.15" />
      <ellipse cx="180" cy="295" rx="12" ry="25" fill={lighterColor} opacity="0.15" />

      {/* Cropped hem band */}
      <path
        d="M 98 335
           Q 125 352, 150 358
           Q 175 352, 202 335
           L 202 350
           Q 175 367, 150 372
           Q 125 367, 98 350
           Z"
        fill={darkerColor}
        opacity="0.4"
      />

      {/* Ruffle edge highlights */}
      <path
        d="M 88 180 Q 105 188, 120 182"
        stroke={lighterColor}
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 180 182 Q 195 188, 212 180"
        stroke={lighterColor}
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
    </g>
  )
}

// ============================================================================
// 10. Royal Ballgown - Grand formal gown with train
// ============================================================================
export function RoyalBallgown({ color = '#E6E6FA', className = '' }: TopProps) {
  const darkerColor = adjustColor(color, -25)
  const lighterColor = adjustColor(color, 25)
  const goldColor = '#FFD700'
  const gemColor = '#9B59B6'

  return (
    <g className={className} data-item="royal-ballgown">
      {/* Off-shoulder puff sleeves */}
      <path
        d="M 85 180
           Q 55 190, 42 220
           Q 32 255, 45 285
           L 75 278
           Q 65 252, 72 225
           Q 80 200, 100 185
           Z"
        fill={color}
      />
      <path
        d="M 215 180
           Q 245 190, 258 220
           Q 268 255, 255 285
           L 225 278
           Q 235 252, 228 225
           Q 220 200, 200 185
           Z"
        fill={color}
      />

      {/* Sleeve puff bands */}
      <path
        d="M 45 285 Q 58 278, 75 278"
        stroke={darkerColor}
        strokeWidth="4"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 255 285 Q 242 278, 225 278"
        stroke={darkerColor}
        strokeWidth="4"
        fill="none"
        opacity="0.4"
      />

      {/* Fitted corset bodice */}
      <path
        d="M 100 180
           Q 92 210, 92 260
           Q 92 310, 98 355
           Q 125 375, 150 378
           Q 175 375, 202 355
           Q 208 310, 208 260
           Q 208 210, 200 180
           Q 175 168, 150 166
           Q 125 168, 100 180
           Z"
        fill={color}
      />

      {/* Sweetheart neckline with gold trim */}
      <path
        d="M 112 180
           Q 130 198, 150 205
           Q 170 198, 188 180
           Q 172 195, 150 200
           Q 128 195, 112 180
           Z"
        fill={darkerColor}
        opacity="0.4"
      />
      <path
        d="M 112 180 Q 130 195, 150 200 Q 170 195, 188 180"
        stroke={goldColor}
        strokeWidth="2.5"
        fill="none"
        opacity="0.8"
      />

      {/* Corset boning lines */}
      <path d="M 115 190 Q 120 280, 130 370" stroke={darkerColor} strokeWidth="1" opacity="0.2" fill="none" />
      <path d="M 150 205 L 150 375" stroke={darkerColor} strokeWidth="1" opacity="0.15" />
      <path d="M 185 190 Q 180 280, 170 370" stroke={darkerColor} strokeWidth="1" opacity="0.2" fill="none" />

      {/* Jewel accents on bodice */}
      <circle cx="150" cy="215" r="5" fill={gemColor} opacity="0.8" />
      <circle cx="150" cy="215" r="3" fill={lighterColor} opacity="0.4" />
      <circle cx="130" cy="250" r="3" fill={gemColor} opacity="0.7" />
      <circle cx="170" cy="250" r="3" fill={gemColor} opacity="0.7" />
      <circle cx="150" cy="290" r="4" fill={gemColor} opacity="0.75" />
      <circle cx="140" cy="330" r="3" fill={gemColor} opacity="0.7" />
      <circle cx="160" cy="330" r="3" fill={gemColor} opacity="0.7" />

      {/* Gold waist trim */}
      <path
        d="M 98 355
           Q 125 375, 150 380
           Q 175 375, 202 355
           L 205 365
           Q 175 385, 150 390
           Q 125 385, 95 365
           Z"
        fill={goldColor}
        opacity="0.85"
      />

      {/* Grand ball skirt */}
      <path
        d="M 98 355
           Q 35 420, 15 530
           Q 5 640, 20 720
           Q 35 750, 70 760
           L 230 760
           Q 265 750, 280 720
           Q 295 640, 285 530
           Q 265 420, 202 355
           Z"
        fill={color}
      />

      {/* Skirt panel seams */}
      <path
        d="M 115 380 Q 75 500, 55 680 Q 52 730, 85 755"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.2"
      />
      <path
        d="M 150 385 Q 150 550, 150 755"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.15"
      />
      <path
        d="M 185 380 Q 225 500, 245 680 Q 248 730, 215 755"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.2"
      />

      {/* Additional draping folds */}
      <path
        d="M 100 395 Q 55 520, 35 700"
        fill="none"
        stroke={darkerColor}
        strokeWidth="3"
        opacity="0.15"
      />
      <path
        d="M 130 390 Q 95 530, 75 720"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.12"
      />
      <path
        d="M 170 390 Q 205 530, 225 720"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.12"
      />
      <path
        d="M 200 395 Q 245 520, 265 700"
        fill="none"
        stroke={darkerColor}
        strokeWidth="3"
        opacity="0.15"
      />

      {/* Fabric volume highlights */}
      <ellipse cx="80" cy="550" rx="25" ry="80" fill={lighterColor} opacity="0.1" />
      <ellipse cx="220" cy="550" rx="25" ry="80" fill={lighterColor} opacity="0.1" />

      {/* Gold hem trim */}
      <path
        d="M 70 760 Q 150 775, 230 760"
        stroke={goldColor}
        strokeWidth="5"
        fill="none"
        opacity="0.7"
      />

      {/* Scattered jewel accents on skirt */}
      <circle cx="100" cy="500" r="3" fill={gemColor} opacity="0.5" />
      <circle cx="200" cy="480" r="3" fill={gemColor} opacity="0.5" />
      <circle cx="85" cy="620" r="2.5" fill={gemColor} opacity="0.4" />
      <circle cx="215" cy="640" r="2.5" fill={gemColor} opacity="0.4" />
      <circle cx="150" cy="580" r="3" fill={gemColor} opacity="0.5" />
      <circle cx="120" cy="700" r="2" fill={gemColor} opacity="0.4" />
      <circle cx="180" cy="720" r="2" fill={gemColor} opacity="0.4" />
    </g>
  )
}

// ============================================================================
// Thumbnail Versions (50x50 viewBox)
// ============================================================================

export function BallGownThumbnail({ color = '#FFB6C1' }: { color?: string }) {
  const darkerColor = adjustColor(color, -30)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      {/* Bodice */}
      <path d="M 18 10 Q 16 14, 16 20 L 34 20 Q 34 14, 32 10 Q 28 8, 25 8 Q 22 8, 18 10 Z" fill={color} />
      {/* Sweetheart neckline */}
      <path d="M 20 10 Q 22 12, 25 13 Q 28 12, 30 10" stroke={darkerColor} strokeWidth="1" fill="none" opacity="0.5" />
      {/* Puffy skirt */}
      <path d="M 16 20 Q 5 28, 5 38 Q 6 44, 12 46 L 38 46 Q 44 44, 45 38 Q 45 28, 34 20 Z" fill={color} />
      {/* Skirt folds */}
      <path d="M 18 22 Q 12 32, 14 44" stroke={darkerColor} strokeWidth="1" opacity="0.25" fill="none" />
      <path d="M 32 22 Q 38 32, 36 44" stroke={darkerColor} strokeWidth="1" opacity="0.25" fill="none" />
      {/* Sparkles */}
      <circle cx="22" cy="14" r="1" fill="#FFFFFF" opacity="0.8" />
      <circle cx="28" cy="14" r="1" fill="#FFFFFF" opacity="0.8" />
    </svg>
  )
}

export function MermaidDressThumbnail({ color = '#40E0D0' }: { color?: string }) {
  const darkerColor = adjustColor(color, -35)
  const lighterColor = adjustColor(color, 40)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      {/* Fitted body */}
      <path d="M 19 8 Q 17 12, 17 20 Q 17 28, 18 36 L 32 36 Q 33 28, 33 20 Q 33 12, 31 8 Q 28 6, 25 6 Q 22 6, 19 8 Z" fill={color} />
      {/* Sweetheart neckline */}
      <path d="M 20 8 Q 23 11, 25 12 Q 27 11, 30 8" stroke={darkerColor} strokeWidth="1" fill="none" opacity="0.5" />
      {/* Mermaid flare */}
      <path d="M 18 36 Q 10 40, 8 46 L 42 46 Q 40 40, 32 36 Z" fill={color} />
      {/* Sequin pattern */}
      <ellipse cx="22" cy="16" rx="3" ry="2" fill={lighterColor} opacity="0.3" />
      <ellipse cx="28" cy="16" rx="3" ry="2" fill={lighterColor} opacity="0.3" />
      <ellipse cx="25" cy="24" rx="3" ry="2" fill={lighterColor} opacity="0.25" />
      {/* Sparkles */}
      <circle cx="24" cy="12" r="1" fill="#FFFFFF" opacity="0.9" />
      <circle cx="26" cy="20" r="1" fill="#FFFFFF" opacity="0.8" />
    </svg>
  )
}

export function OffShoulderTopThumbnail({ color = '#9B59B6' }: { color?: string }) {
  const darkerColor = adjustColor(color, -30)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      {/* Ruffle band */}
      <path d="M 8 12 Q 6 15, 8 18 Q 18 22, 25 23 Q 32 22, 42 18 Q 44 15, 42 12 Q 32 16, 25 17 Q 18 16, 8 12 Z" fill={color} />
      {/* Main body */}
      <path d="M 14 18 Q 12 26, 14 38 Q 20 42, 25 42 Q 30 42, 36 38 Q 38 26, 36 18 Q 32 20, 25 21 Q 18 20, 14 18 Z" fill={color} />
      {/* Ruffle wave */}
      <path d="M 12 15 Q 18 18, 25 16 Q 32 14, 38 17" stroke={darkerColor} strokeWidth="1" fill="none" opacity="0.3" />
    </svg>
  )
}

export function VelvetCapeThumbnail({ color = '#8B0000' }: { color?: string }) {
  const darkerColor = adjustColor(color, -40)
  const goldColor = '#FFD700'
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      {/* Cape */}
      <path d="M 14 12 Q 6 18, 5 32 Q 5 42, 12 46 L 38 46 Q 45 42, 45 32 Q 44 18, 36 12 Z" fill={color} />
      {/* Standing collar */}
      <path d="M 16 10 Q 14 8, 16 6 Q 22 4, 25 4 Q 28 4, 34 6 Q 36 8, 34 10 Q 28 12, 25 12 Q 22 12, 16 10 Z" fill={color} />
      {/* Gold chain */}
      <path d="M 20 10 Q 25 13, 30 10" stroke={goldColor} strokeWidth="1.5" fill="none" opacity="0.9" />
      {/* Clasps */}
      <circle cx="20" cy="10" r="2.5" fill={goldColor} />
      <circle cx="30" cy="10" r="2.5" fill={goldColor} />
      {/* Fold line */}
      <path d="M 18 14 Q 12 30, 15 44" stroke={darkerColor} strokeWidth="1" opacity="0.3" fill="none" />
      <path d="M 32 14 Q 38 30, 35 44" stroke={darkerColor} strokeWidth="1" opacity="0.3" fill="none" />
    </svg>
  )
}

export function SequinTankThumbnail({ color = '#FFD700' }: { color?: string }) {
  const darkerColor = adjustColor(color, -35)
  const lighterColor = adjustColor(color, 30)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      {/* Straps */}
      <path d="M 20 6 L 22 14 L 18 14 L 20 6 Z" fill={color} />
      <path d="M 30 6 L 28 14 L 32 14 L 30 6 Z" fill={color} />
      {/* Main body */}
      <path d="M 17 14 Q 15 22, 17 38 Q 22 42, 25 42 Q 28 42, 33 38 Q 35 22, 33 14 Q 28 12, 25 12 Q 22 12, 17 14 Z" fill={color} />
      {/* Scoop neckline */}
      <path d="M 20 14 Q 22 17, 25 18 Q 28 17, 30 14" stroke={darkerColor} strokeWidth="1" fill="none" opacity="0.5" />
      {/* Sequins */}
      <circle cx="21" cy="20" r="2" fill={lighterColor} opacity="0.5" />
      <circle cx="29" cy="20" r="2" fill={lighterColor} opacity="0.5" />
      <circle cx="25" cy="26" r="2" fill={lighterColor} opacity="0.5" />
      <circle cx="21" cy="32" r="2" fill={lighterColor} opacity="0.5" />
      <circle cx="29" cy="32" r="2" fill={lighterColor} opacity="0.5" />
      {/* Sparkle */}
      <circle cx="25" cy="20" r="1" fill="#FFFFFF" opacity="0.9" />
    </svg>
  )
}

export function PeplumBlouseThumbnail({ color = '#FF69B4' }: { color?: string }) {
  const darkerColor = adjustColor(color, -30)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      {/* Main bodice */}
      <path d="M 16 10 Q 14 16, 16 26 Q 20 28, 25 28 Q 30 28, 34 26 Q 36 16, 34 10 Q 30 8, 25 8 Q 20 8, 16 10 Z" fill={color} />
      {/* Peter Pan collar */}
      <path d="M 20 10 Q 16 8, 14 10 Q 16 12, 20 11 Z" fill={color} />
      <path d="M 30 10 Q 34 8, 36 10 Q 34 12, 30 11 Z" fill={color} />
      {/* Peplum flare */}
      <path d="M 16 26 Q 10 32, 10 40 L 40 40 Q 40 32, 34 26 Z" fill={color} />
      {/* Peplum ruffles */}
      <path d="M 12 32 Q 20 36, 25 36 Q 30 36, 38 32" stroke={darkerColor} strokeWidth="1" fill="none" opacity="0.3" />
      {/* Pearl buttons */}
      <circle cx="25" cy="14" r="1.5" fill="#FFFAFA" opacity="0.9" />
      <circle cx="25" cy="20" r="1.5" fill="#FFFAFA" opacity="0.9" />
      {/* Short puff sleeves */}
      <path d="M 16 10 Q 10 12, 8 18 L 12 18 Q 13 14, 18 11 Z" fill={color} />
      <path d="M 34 10 Q 40 12, 42 18 L 38 18 Q 37 14, 32 11 Z" fill={color} />
    </svg>
  )
}

export function PrincessGownThumbnail({ color = '#87CEEB' }: { color?: string }) {
  const darkerColor = adjustColor(color, -30)
  const goldColor = '#FFD700'
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      {/* Puff sleeves */}
      <path d="M 14 10 Q 8 12, 6 18 L 10 18 Q 11 14, 16 11 Z" fill={color} />
      <path d="M 36 10 Q 42 12, 44 18 L 40 18 Q 39 14, 34 11 Z" fill={color} />
      {/* Bodice */}
      <path d="M 17 10 Q 15 14, 16 22 Q 20 24, 25 24 Q 30 24, 34 22 Q 35 14, 33 10 Q 28 8, 25 8 Q 22 8, 17 10 Z" fill={color} />
      {/* Square neckline */}
      <path d="M 20 10 L 20 13 Q 22 15, 25 15 Q 28 15, 30 13 L 30 10" stroke={goldColor} strokeWidth="1" fill="none" opacity="0.8" />
      {/* Full skirt */}
      <path d="M 16 22 Q 6 30, 6 42 Q 7 46, 12 46 L 38 46 Q 43 46, 44 42 Q 44 30, 34 22 Z" fill={color} />
      {/* Gold sash */}
      <path d="M 16 22 Q 20 24, 25 25 Q 30 24, 34 22" stroke={goldColor} strokeWidth="2" fill="none" opacity="0.8" />
      {/* Skirt folds */}
      <path d="M 20 25 Q 14 35, 14 44" stroke={darkerColor} strokeWidth="1" opacity="0.2" fill="none" />
      <path d="M 30 25 Q 36 35, 36 44" stroke={darkerColor} strokeWidth="1" opacity="0.2" fill="none" />
    </svg>
  )
}

export function TullePartyDressThumbnail({ color = '#DDA0DD' }: { color?: string }) {
  const darkerColor = adjustColor(color, -25)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      {/* Straps */}
      <line x1="20" y1="6" x2="21" y2="10" stroke={color} strokeWidth="2" />
      <line x1="30" y1="6" x2="29" y2="10" stroke={color} strokeWidth="2" />
      {/* Fitted bodice */}
      <path d="M 18 10 Q 16 14, 17 22 Q 22 24, 25 24 Q 28 24, 33 22 Q 34 14, 32 10 Q 28 8, 25 8 Q 22 8, 18 10 Z" fill={color} />
      {/* Sweetheart neckline */}
      <path d="M 20 10 Q 22 12, 25 13 Q 28 12, 30 10" stroke={darkerColor} strokeWidth="1" fill="none" opacity="0.5" />
      {/* Tulle layers */}
      <path d="M 17 22 Q 8 30, 8 40 L 42 40 Q 42 30, 33 22 Z" fill={color} opacity="0.5" />
      <path d="M 18 23 Q 10 30, 10 38 L 40 38 Q 40 30, 32 23 Z" fill={color} opacity="0.7" />
      <path d="M 19 24 Q 12 30, 12 36 L 38 36 Q 38 30, 31 24 Z" fill={color} />
      {/* Sparkles */}
      <circle cx="22" cy="14" r="1" fill="#FFFFFF" opacity="0.8" />
      <circle cx="28" cy="14" r="1" fill="#FFFFFF" opacity="0.8" />
      <circle cx="25" cy="30" r="1" fill="#FFFFFF" opacity="0.6" />
    </svg>
  )
}

export function RuffleCropTopThumbnail({ color = '#FF6B6B' }: { color?: string }) {
  const darkerColor = adjustColor(color, -30)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      {/* Ruffle layer 1 */}
      <path d="M 12 10 Q 10 13, 12 16 Q 18 18, 25 18 Q 32 18, 38 16 Q 40 13, 38 10 Q 32 8, 25 8 Q 18 8, 12 10 Z" fill={color} />
      {/* Ruffle layer 2 */}
      <path d="M 11 15 Q 9 18, 11 21 Q 17 24, 25 24 Q 33 24, 39 21 Q 41 18, 39 15 Q 33 18, 25 19 Q 17 18, 11 15 Z" fill={color} opacity="0.9" />
      {/* Ruffle layer 3 */}
      <path d="M 10 20 Q 8 24, 10 28 Q 16 31, 25 31 Q 34 31, 40 28 Q 42 24, 40 20 Q 34 24, 25 25 Q 16 24, 10 20 Z" fill={color} opacity="0.85" />
      {/* Main body */}
      <path d="M 15 28 Q 14 34, 16 40 Q 20 42, 25 42 Q 30 42, 34 40 Q 36 34, 35 28 Z" fill={color} />
      {/* Ruffle waves */}
      <path d="M 14 12 Q 18 15, 25 13 Q 32 11, 36 14" stroke={darkerColor} strokeWidth="1" fill="none" opacity="0.3" />
      <path d="M 13 18 Q 18 21, 25 19 Q 32 17, 37 20" stroke={darkerColor} strokeWidth="1" fill="none" opacity="0.25" />
    </svg>
  )
}

export function RoyalBallgownThumbnail({ color = '#E6E6FA' }: { color?: string }) {
  const darkerColor = adjustColor(color, -25)
  const goldColor = '#FFD700'
  const gemColor = '#9B59B6'
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      {/* Puff sleeves */}
      <path d="M 14 12 Q 8 14, 6 20 L 10 20 Q 11 16, 16 13 Z" fill={color} />
      <path d="M 36 12 Q 42 14, 44 20 L 40 20 Q 39 16, 34 13 Z" fill={color} />
      {/* Fitted bodice */}
      <path d="M 17 12 Q 15 16, 16 24 Q 20 26, 25 26 Q 30 26, 34 24 Q 35 16, 33 12 Q 28 10, 25 10 Q 22 10, 17 12 Z" fill={color} />
      {/* Sweetheart with gold trim */}
      <path d="M 19 12 Q 22 15, 25 16 Q 28 15, 31 12" stroke={goldColor} strokeWidth="1.5" fill="none" opacity="0.8" />
      {/* Grand skirt */}
      <path d="M 16 24 Q 4 32, 4 44 Q 5 48, 10 48 L 40 48 Q 45 48, 46 44 Q 46 32, 34 24 Z" fill={color} />
      {/* Gold waist sash */}
      <path d="M 16 24 Q 20 26, 25 27 Q 30 26, 34 24" stroke={goldColor} strokeWidth="2" fill="none" opacity="0.85" />
      {/* Jewel accents */}
      <circle cx="25" cy="16" r="1.5" fill={gemColor} opacity="0.8" />
      <circle cx="22" cy="20" r="1" fill={gemColor} opacity="0.7" />
      <circle cx="28" cy="20" r="1" fill={gemColor} opacity="0.7" />
      {/* Skirt folds */}
      <path d="M 20 27 Q 12 36, 12 46" stroke={darkerColor} strokeWidth="1" opacity="0.2" fill="none" />
      <path d="M 30 27 Q 38 36, 38 46" stroke={darkerColor} strokeWidth="1" opacity="0.2" fill="none" />
      {/* Gold hem */}
      <path d="M 10 48 Q 25 50, 40 48" stroke={goldColor} strokeWidth="1.5" fill="none" opacity="0.7" />
    </svg>
  )
}

export default {
  BallGown,
  MermaidDress,
  OffShoulderTop,
  VelvetCape,
  SequinTank,
  PeplumBlouse,
  PrincessGown,
  TullePartyDress,
  RuffleCropTop,
  RoyalBallgown,
}
