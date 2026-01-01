'use client'

/**
 * Princess & Party Themed Bottom Clothing SVG Components
 * ViewBox: 300x800
 *
 * Character Anatomy Reference:
 * - Waist: y=340-360
 * - Hips: y=360-400
 * - Legs: y=400-740
 * - Ankles: y=725-740
 * - Left leg center: x=120, Right leg center: x=180
 */

interface BottomProps {
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
// 1. LayeredTulleSkirt - Fluffy ballerina-style skirt
// ============================================================================
export function LayeredTulleSkirt({ color = '#FFB6C1', className = '' }: BottomProps) {
  const darkerColor = adjustColor(color, -25)
  const lighterColor = adjustColor(color, 30)
  const paleColor = adjustColor(color, 50)

  return (
    <g className={className} data-item="layered-tulle-skirt">
      {/* Waistband - satin ribbon style */}
      <path
        d="M 100 335
           Q 92 345, 92 358
           Q 92 370, 100 378
           L 200 378
           Q 208 370, 208 358
           Q 208 345, 200 335
           Q 175 325, 150 325
           Q 125 325, 100 335
           Z"
        fill={darkerColor}
      />

      {/* Hip area coverage */}
      <path
        d="M 92 378
           Q 88 400, 92 420
           L 208 420
           Q 212 400, 208 378
           Z"
        fill={darkerColor}
        opacity="0.7"
      />

      {/* Layer 5 - Bottom layer (longest, lightest) */}
      <path
        d="M 38 420
           Q 25 480, 28 540
           Q 32 580, 50 605
           Q 80 640, 150 645
           Q 220 640, 250 605
           Q 268 580, 272 540
           Q 275 480, 262 420
           Q 200 415, 150 415
           Q 100 415, 38 420
           Z"
        fill={paleColor}
        opacity="0.3"
      />

      {/* Layer 4 */}
      <path
        d="M 45 420
           Q 32 475, 38 525
           Q 45 565, 65 590
           Q 95 620, 150 625
           Q 205 620, 235 590
           Q 255 565, 262 525
           Q 268 475, 255 420
           Q 200 415, 150 415
           Q 100 415, 45 420
           Z"
        fill={lighterColor}
        opacity="0.4"
      />

      {/* Layer 3 */}
      <path
        d="M 52 420
           Q 40 465, 48 510
           Q 55 548, 78 572
           Q 108 598, 150 602
           Q 192 598, 222 572
           Q 245 548, 252 510
           Q 260 465, 248 420
           Q 200 415, 150 415
           Q 100 415, 52 420
           Z"
        fill={color}
        opacity="0.5"
      />

      {/* Layer 2 */}
      <path
        d="M 58 420
           Q 48 458, 55 498
           Q 62 532, 85 555
           Q 115 578, 150 582
           Q 185 578, 215 555
           Q 238 532, 245 498
           Q 252 458, 242 420
           Q 200 415, 150 415
           Q 100 415, 58 420
           Z"
        fill={lighterColor}
        opacity="0.6"
      />

      {/* Layer 1 - Top layer (shortest, most visible) */}
      <path
        d="M 65 420
           Q 55 452, 62 488
           Q 70 518, 92 538
           Q 120 558, 150 562
           Q 180 558, 208 538
           Q 230 518, 238 488
           Q 245 452, 235 420
           Q 200 415, 150 415
           Q 100 415, 65 420
           Z"
        fill={color}
        opacity="0.7"
      />

      {/* Decorative gathering lines */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <path
          key={i}
          d={`M ${75 + i * 25} 420 Q ${70 + i * 25} 480, ${72 + i * 26} 550`}
          fill="none"
          stroke={darkerColor}
          strokeWidth="1"
          opacity="0.2"
        />
      ))}

      {/* Waistband satin highlight */}
      <path
        d="M 105 345 Q 150 340, 195 345"
        fill="none"
        stroke={lighterColor}
        strokeWidth="3"
        opacity="0.5"
      />

      {/* Center bow */}
      <ellipse cx="150" cy="355" rx="12" ry="7" fill={darkerColor} />
      <path
        d="M 140 355
           Q 125 345, 128 355
           Q 125 365, 140 355
           Z"
        fill={color}
      />
      <path
        d="M 160 355
           Q 175 345, 172 355
           Q 175 365, 160 355
           Z"
        fill={color}
      />
      <circle cx="150" cy="355" r="4" fill={darkerColor} />

      {/* Sparkle details */}
      <circle cx="75" cy="505" r="2" fill="white" opacity="0.6" />
      <circle cx="225" cy="495" r="2" fill="white" opacity="0.6" />
      <circle cx="150" cy="545" r="2.5" fill="white" opacity="0.5" />
      <circle cx="110" cy="520" r="1.5" fill="white" opacity="0.4" />
      <circle cx="190" cy="530" r="1.5" fill="white" opacity="0.4" />
    </g>
  )
}

// ============================================================================
// 2. SequinMiniSkirt - Sparkly party skirt
// ============================================================================
export function SequinMiniSkirt({ color = '#C0C0C0', className = '' }: BottomProps) {
  const darkerColor = adjustColor(color, -30)
  const lighterColor = adjustColor(color, 40)

  return (
    <g className={className} data-item="sequin-mini-skirt">
      {/* Waistband */}
      <path
        d="M 102 335
           Q 95 345, 95 360
           Q 95 372, 102 380
           L 198 380
           Q 205 372, 205 360
           Q 205 345, 198 335
           Q 175 325, 150 325
           Q 125 325, 102 335
           Z"
        fill={darkerColor}
      />

      {/* Hip/body area */}
      <path
        d="M 95 380
           Q 90 405, 88 420
           L 212 420
           Q 210 405, 205 380
           Z"
        fill={color}
      />

      {/* Main skirt body - mini length to y=520 */}
      <path
        d="M 88 420
           Q 75 455, 72 490
           Q 70 515, 78 530
           L 222 530
           Q 230 515, 228 490
           Q 225 455, 212 420
           Z"
        fill={color}
      />

      {/* Sequin pattern - scattered sparkles */}
      {[
        { x: 95, y: 435 }, { x: 115, y: 445 }, { x: 140, y: 430 }, { x: 165, y: 440 }, { x: 185, y: 432 }, { x: 205, y: 438 },
        { x: 88, y: 460 }, { x: 108, y: 470 }, { x: 128, y: 455 }, { x: 150, y: 465 }, { x: 172, y: 458 }, { x: 195, y: 468 }, { x: 215, y: 455 },
        { x: 82, y: 488 }, { x: 102, y: 495 }, { x: 125, y: 482 }, { x: 148, y: 492 }, { x: 170, y: 485 }, { x: 192, y: 498 }, { x: 218, y: 485 },
        { x: 85, y: 512 }, { x: 110, y: 518 }, { x: 135, y: 508 }, { x: 158, y: 515 }, { x: 182, y: 510 }, { x: 208, y: 520 },
      ].map((pos, i) => (
        <g key={i}>
          <circle cx={pos.x} cy={pos.y} r="3" fill={lighterColor} opacity="0.8" />
          <circle cx={pos.x - 0.5} cy={pos.y - 0.5} r="1.5" fill="white" opacity="0.9" />
        </g>
      ))}

      {/* Hem with sequin border */}
      <path
        d="M 78 530 L 222 530"
        fill="none"
        stroke={lighterColor}
        strokeWidth="5"
        opacity="0.8"
      />

      {/* Reflective shimmer lines */}
      <path
        d="M 100 425 Q 95 470, 90 515"
        fill="none"
        stroke={lighterColor}
        strokeWidth="8"
        opacity="0.15"
      />
      <path
        d="M 200 425 Q 205 470, 210 515"
        fill="none"
        stroke={lighterColor}
        strokeWidth="8"
        opacity="0.15"
      />

      {/* Waistband accent */}
      <path
        d="M 105 365 Q 150 358, 195 365"
        fill="none"
        stroke={lighterColor}
        strokeWidth="2"
        opacity="0.6"
      />
    </g>
  )
}

// ============================================================================
// 3. SatinMaxiSkirt - Elegant floor-length skirt
// ============================================================================
export function SatinMaxiSkirt({ color = '#4169E1', className = '' }: BottomProps) {
  const darkerColor = adjustColor(color, -35)
  const lighterColor = adjustColor(color, 25)
  const highlightColor = adjustColor(color, 60)

  return (
    <g className={className} data-item="satin-maxi-skirt">
      {/* Waistband - fitted satin */}
      <path
        d="M 100 335
           Q 92 348, 92 365
           Q 92 378, 100 385
           L 200 385
           Q 208 378, 208 365
           Q 208 348, 200 335
           Q 175 325, 150 325
           Q 125 325, 100 335
           Z"
        fill={darkerColor}
      />

      {/* Hip area */}
      <path
        d="M 92 385
           Q 88 410, 85 430
           L 215 430
           Q 212 410, 208 385
           Z"
        fill={color}
      />

      {/* Main skirt - floor length to y=740 */}
      <path
        d="M 85 430
           Q 62 520, 55 600
           Q 48 680, 52 740
           L 248 740
           Q 252 680, 245 600
           Q 238 520, 215 430
           Z"
        fill={color}
      />

      {/* Satin sheen - center highlight */}
      <path
        d="M 150 430
           Q 145 540, 148 650
           Q 150 700, 150 740"
        fill="none"
        stroke={highlightColor}
        strokeWidth="35"
        opacity="0.2"
        strokeLinecap="round"
      />

      {/* Left side shadow */}
      <path
        d="M 85 430
           Q 72 520, 65 620
           Q 58 700, 60 740"
        fill="none"
        stroke={darkerColor}
        strokeWidth="20"
        opacity="0.3"
        strokeLinecap="round"
      />

      {/* Right side shadow */}
      <path
        d="M 215 430
           Q 228 520, 235 620
           Q 242 700, 240 740"
        fill="none"
        stroke={darkerColor}
        strokeWidth="20"
        opacity="0.3"
        strokeLinecap="round"
      />

      {/* Flowing fold lines */}
      <path
        d="M 110 430 Q 95 560, 85 700"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.25"
      />
      <path
        d="M 190 430 Q 205 560, 215 700"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.25"
      />
      <path
        d="M 130 430 Q 125 580, 120 730"
        fill="none"
        stroke={lighterColor}
        strokeWidth="1"
        opacity="0.2"
      />
      <path
        d="M 170 430 Q 175 580, 180 730"
        fill="none"
        stroke={lighterColor}
        strokeWidth="1"
        opacity="0.2"
      />

      {/* Hem with slight wave */}
      <path
        d="M 52 740
           Q 80 745, 110 738
           Q 130 735, 150 738
           Q 170 742, 190 738
           Q 220 735, 248 740"
        fill="none"
        stroke={darkerColor}
        strokeWidth="3"
      />

      {/* Waistband highlight */}
      <path
        d="M 105 350 Q 150 345, 195 350"
        fill="none"
        stroke={lighterColor}
        strokeWidth="2"
        opacity="0.4"
      />
    </g>
  )
}

// ============================================================================
// 4. GlitterLeggings - Sparkly stretch pants
// ============================================================================
export function GlitterLeggings({ color = '#FFD700', className = '' }: BottomProps) {
  const darkerColor = adjustColor(color, -30)
  const lighterColor = adjustColor(color, 35)

  return (
    <g className={className} data-item="glitter-leggings">
      {/* High waistband */}
      <path
        d="M 105 330
           Q 95 342, 92 360
           Q 90 380, 95 400
           L 205 400
           Q 210 380, 208 360
           Q 205 342, 195 330
           Q 175 320, 150 320
           Q 125 320, 105 330
           Z"
        fill={darkerColor}
      />

      {/* Waistband shimmer */}
      <path
        d="M 100 355 Q 150 348, 200 355"
        fill="none"
        stroke={lighterColor}
        strokeWidth="2"
        opacity="0.5"
      />

      {/* Hip/crotch coverage */}
      <path
        d="M 95 400
           Q 92 425, 98 450
           L 132 450
           L 150 435
           L 168 450
           L 202 450
           Q 208 425, 205 400
           Z"
        fill={color}
      />

      {/* Left leg */}
      <path
        d="M 98 450
           Q 95 520, 98 600
           Q 100 680, 100 740
           L 145 740
           Q 142 680, 140 600
           Q 138 520, 132 450
           Z"
        fill={color}
      />

      {/* Right leg */}
      <path
        d="M 168 450
           Q 162 520, 160 600
           Q 158 680, 155 740
           L 200 740
           Q 200 680, 202 600
           Q 205 520, 202 450
           Z"
        fill={color}
      />

      {/* Glitter effect - scattered sparkles */}
      {[
        // Left leg sparkles
        { x: 108, y: 480 }, { x: 125, y: 510 }, { x: 115, y: 545 }, { x: 130, y: 580 },
        { x: 110, y: 615 }, { x: 128, y: 650 }, { x: 118, y: 690 }, { x: 135, y: 720 },
        { x: 102, y: 560 }, { x: 138, y: 620 }, { x: 112, y: 670 },
        // Right leg sparkles
        { x: 175, y: 475 }, { x: 190, y: 508 }, { x: 168, y: 540 }, { x: 185, y: 575 },
        { x: 172, y: 610 }, { x: 192, y: 645 }, { x: 178, y: 685 }, { x: 188, y: 715 },
        { x: 162, y: 555 }, { x: 195, y: 615 }, { x: 170, y: 665 },
      ].map((pos, i) => (
        <g key={i}>
          <circle cx={pos.x} cy={pos.y} r="2" fill="white" opacity="0.8" />
          <circle cx={pos.x} cy={pos.y} r="1" fill={lighterColor} opacity="1" />
        </g>
      ))}

      {/* Shimmer highlights on thighs */}
      <path
        d="M 108 470 Q 112 550, 115 640"
        fill="none"
        stroke={lighterColor}
        strokeWidth="12"
        opacity="0.2"
        strokeLinecap="round"
      />
      <path
        d="M 188 470 Q 185 550, 182 640"
        fill="none"
        stroke={lighterColor}
        strokeWidth="12"
        opacity="0.2"
        strokeLinecap="round"
      />

      {/* Center seam */}
      <path
        d="M 132 450 Q 150 468, 168 450"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1.5"
        opacity="0.3"
      />

      {/* Ankle cuffs */}
      <rect x="100" y="735" width="45" height="8" rx="2" fill={darkerColor} opacity="0.5" />
      <rect x="155" y="735" width="45" height="8" rx="2" fill={darkerColor} opacity="0.5" />
    </g>
  )
}

// ============================================================================
// 5. VelvetPants - Fancy formal pants
// ============================================================================
export function VelvetPants({ color = '#800020', className = '' }: BottomProps) {
  const darkerColor = adjustColor(color, -25)
  const lighterColor = adjustColor(color, 20)
  const sheenColor = adjustColor(color, 45)

  return (
    <g className={className} data-item="velvet-pants">
      {/* Waistband with fold-over */}
      <path
        d="M 100 335
           Q 92 348, 92 365
           L 208 365
           Q 208 348, 200 335
           Q 175 325, 150 325
           Q 125 325, 100 335
           Z"
        fill={darkerColor}
      />

      {/* Waistband lower */}
      <path
        d="M 92 365
           Q 90 380, 92 395
           L 208 395
           Q 210 380, 208 365
           Z"
        fill={color}
      />

      {/* Hip/crotch area */}
      <path
        d="M 92 395
           Q 88 425, 95 455
           L 132 455
           L 150 440
           L 168 455
           L 205 455
           Q 212 425, 208 395
           Z"
        fill={color}
      />

      {/* Left leg - wide leg silhouette */}
      <path
        d="M 95 455
           Q 88 530, 88 610
           Q 88 680, 85 740
           L 148 740
           Q 145 680, 145 610
           Q 145 530, 132 455
           Z"
        fill={color}
      />

      {/* Right leg - wide leg silhouette */}
      <path
        d="M 168 455
           Q 155 530, 155 610
           Q 155 680, 152 740
           L 215 740
           Q 212 680, 212 610
           Q 212 530, 205 455
           Z"
        fill={color}
      />

      {/* Velvet sheen effect - soft highlights */}
      <path
        d="M 105 470 Q 100 570, 98 680"
        fill="none"
        stroke={sheenColor}
        strokeWidth="15"
        opacity="0.12"
        strokeLinecap="round"
      />
      <path
        d="M 195 470 Q 200 570, 202 680"
        fill="none"
        stroke={sheenColor}
        strokeWidth="15"
        opacity="0.12"
        strokeLinecap="round"
      />

      {/* Center vertical highlight */}
      <path
        d="M 118 470 Q 120 600, 118 720"
        fill="none"
        stroke={lighterColor}
        strokeWidth="8"
        opacity="0.1"
      />
      <path
        d="M 182 470 Q 180 600, 182 720"
        fill="none"
        stroke={lighterColor}
        strokeWidth="8"
        opacity="0.1"
      />

      {/* Center seam */}
      <path
        d="M 132 455 Q 150 472, 168 455"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.4"
      />
      <line x1="150" y1="395" x2="150" y2="472" stroke={darkerColor} strokeWidth="2" opacity="0.4" />

      {/* Side seams */}
      <line x1="92" y1="395" x2="85" y2="740" stroke={darkerColor} strokeWidth="1" opacity="0.3" />
      <line x1="208" y1="395" x2="215" y2="740" stroke={darkerColor} strokeWidth="1" opacity="0.3" />

      {/* Hem - clean tailored finish */}
      <rect x="85" y="735" width="63" height="8" fill={darkerColor} opacity="0.4" />
      <rect x="152" y="735" width="63" height="8" fill={darkerColor} opacity="0.4" />

      {/* Waistband button */}
      <circle cx="150" cy="355" r="5" fill={darkerColor} />
      <circle cx="150" cy="355" r="3" fill={lighterColor} opacity="0.5" />
    </g>
  )
}

// ============================================================================
// 6. BubbleSkirt - Poufy rounded hem skirt
// ============================================================================
export function BubbleSkirt({ color = '#FF69B4', className = '' }: BottomProps) {
  const darkerColor = adjustColor(color, -25)
  const lighterColor = adjustColor(color, 30)

  return (
    <g className={className} data-item="bubble-skirt">
      {/* Fitted waistband */}
      <path
        d="M 102 335
           Q 95 348, 95 362
           Q 95 375, 102 385
           L 198 385
           Q 205 375, 205 362
           Q 205 348, 198 335
           Q 175 325, 150 325
           Q 125 325, 102 335
           Z"
        fill={darkerColor}
      />

      {/* Hip area */}
      <path
        d="M 95 385
           Q 90 408, 88 425
           L 212 425
           Q 210 408, 205 385
           Z"
        fill={color}
      />

      {/* Bubble shape - main pouf */}
      <path
        d="M 88 425
           Q 55 460, 48 500
           Q 42 540, 58 565
           Q 78 595, 120 605
           Q 150 610, 180 605
           Q 222 595, 242 565
           Q 258 540, 252 500
           Q 245 460, 212 425
           Z"
        fill={color}
      />

      {/* Inner bubble tuck - creates bubble effect */}
      <path
        d="M 60 560
           Q 90 580, 150 585
           Q 210 580, 240 560
           Q 220 590, 150 595
           Q 80 590, 60 560
           Z"
        fill={darkerColor}
        opacity="0.3"
      />

      {/* Top highlight - puffy effect */}
      <ellipse cx="150" cy="475" rx="55" ry="35" fill={lighterColor} opacity="0.2" />

      {/* Side volume shadows */}
      <path
        d="M 55 480 Q 48 520, 62 555"
        fill="none"
        stroke={darkerColor}
        strokeWidth="10"
        opacity="0.15"
        strokeLinecap="round"
      />
      <path
        d="M 245 480 Q 252 520, 238 555"
        fill="none"
        stroke={darkerColor}
        strokeWidth="10"
        opacity="0.15"
        strokeLinecap="round"
      />

      {/* Gather lines from waist */}
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M ${95 + i * 25} 425 Q ${85 + i * 28} 480, ${78 + i * 30} 540`}
          fill="none"
          stroke={darkerColor}
          strokeWidth="1"
          opacity="0.2"
        />
      ))}

      {/* Decorative bow at waist */}
      <ellipse cx="150" cy="360" rx="10" ry="6" fill={darkerColor} />
      <path
        d="M 142 360
           Q 128 352, 132 360
           Q 128 368, 142 360
           Z"
        fill={lighterColor}
      />
      <path
        d="M 158 360
           Q 172 352, 168 360
           Q 172 368, 158 360
           Z"
        fill={lighterColor}
      />
      <circle cx="150" cy="360" r="4" fill={darkerColor} />

      {/* Ribbon tails */}
      <path
        d="M 145 365 Q 138 390, 140 410"
        fill="none"
        stroke={lighterColor}
        strokeWidth="5"
        opacity="0.7"
      />
      <path
        d="M 155 365 Q 162 390, 160 410"
        fill="none"
        stroke={lighterColor}
        strokeWidth="5"
        opacity="0.7"
      />
    </g>
  )
}

// ============================================================================
// 7. MetallicShorts - Shiny party shorts
// ============================================================================
export function MetallicShorts({ color = '#C0C0C0', className = '' }: BottomProps) {
  const darkerColor = adjustColor(color, -40)
  const lighterColor = adjustColor(color, 50)

  return (
    <g className={className} data-item="metallic-shorts">
      {/* Waistband */}
      <path
        d="M 100 335
           Q 92 348, 92 365
           Q 92 378, 100 388
           L 200 388
           Q 208 378, 208 365
           Q 208 348, 200 335
           Q 175 325, 150 325
           Q 125 325, 100 335
           Z"
        fill={darkerColor}
      />

      {/* Hip/body area */}
      <path
        d="M 92 388
           Q 88 415, 92 440
           L 130 440
           L 150 428
           L 170 440
           L 208 440
           Q 212 415, 208 388
           Z"
        fill={color}
      />

      {/* Left leg - short length to y=480 */}
      <path
        d="M 92 440
           Q 82 458, 78 490
           L 150 490
           Q 148 458, 130 440
           Z"
        fill={color}
      />

      {/* Right leg - short length to y=480 */}
      <path
        d="M 170 440
           Q 152 458, 150 490
           L 222 490
           Q 218 458, 208 440
           Z"
        fill={color}
      />

      {/* Metallic sheen - dramatic highlights */}
      <path
        d="M 105 400 Q 100 430, 95 465"
        fill="none"
        stroke={lighterColor}
        strokeWidth="18"
        opacity="0.4"
        strokeLinecap="round"
      />
      <path
        d="M 195 400 Q 200 430, 205 465"
        fill="none"
        stroke={lighterColor}
        strokeWidth="18"
        opacity="0.4"
        strokeLinecap="round"
      />

      {/* Center highlight streak */}
      <path
        d="M 150 395 L 150 480"
        fill="none"
        stroke={lighterColor}
        strokeWidth="25"
        opacity="0.15"
      />

      {/* Sharp metallic reflections */}
      <path
        d="M 88 450 L 98 470"
        stroke={lighterColor}
        strokeWidth="3"
        opacity="0.6"
      />
      <path
        d="M 212 450 L 202 470"
        stroke={lighterColor}
        strokeWidth="3"
        opacity="0.6"
      />

      {/* Center seam */}
      <path
        d="M 130 440 Q 150 455, 170 440"
        fill="none"
        stroke={darkerColor}
        strokeWidth="2"
        opacity="0.5"
      />
      <line x1="150" y1="388" x2="150" y2="455" stroke={darkerColor} strokeWidth="2" opacity="0.5" />

      {/* Hem - with metallic edge */}
      <path
        d="M 78 485 L 150 485 L 222 485"
        fill="none"
        stroke={lighterColor}
        strokeWidth="5"
        opacity="0.7"
      />

      {/* Waistband button */}
      <circle cx="150" cy="362" r="6" fill={lighterColor} />
      <circle cx="150" cy="362" r="4" fill={darkerColor} />
      <circle cx="149" cy="361" r="2" fill="white" opacity="0.7" />
    </g>
  )
}

// ============================================================================
// 8. TieredRuffleSkirt - Layered flamenco-style
// ============================================================================
export function TieredRuffleSkirt({ color = '#FF6347', className = '' }: BottomProps) {
  const darkerColor = adjustColor(color, -25)
  const lighterColor = adjustColor(color, 25)

  return (
    <g className={className} data-item="tiered-ruffle-skirt">
      {/* Fitted waistband */}
      <path
        d="M 102 335
           Q 95 348, 95 362
           Q 95 375, 102 385
           L 198 385
           Q 205 375, 205 362
           Q 205 348, 198 335
           Q 175 325, 150 325
           Q 125 325, 102 335
           Z"
        fill={darkerColor}
      />

      {/* Hip yoke area */}
      <path
        d="M 95 385
           Q 90 408, 88 430
           L 212 430
           Q 210 408, 205 385
           Z"
        fill={color}
      />

      {/* Tier 1 - Top tier (shortest) */}
      <path
        d="M 88 430
           Q 75 448, 72 468
           Q 70 488, 78 498
           L 222 498
           Q 230 488, 228 468
           Q 225 448, 212 430
           Z"
        fill={color}
      />
      {/* Tier 1 ruffle edge */}
      <path
        d="M 72 490
           Q 82 502, 100 495
           Q 115 488, 130 498
           Q 145 508, 160 498
           Q 175 488, 190 495
           Q 205 502, 228 490"
        fill={lighterColor}
        opacity="0.4"
      />

      {/* Tier 2 - Middle tier */}
      <path
        d="M 70 498
           Q 58 520, 55 545
           Q 52 565, 62 575
           L 238 575
           Q 248 565, 245 545
           Q 242 520, 230 498
           Z"
        fill={color}
      />
      {/* Tier 2 ruffle edge */}
      <path
        d="M 55 565
           Q 68 580, 88 572
           Q 105 565, 122 575
           Q 140 585, 160 575
           Q 178 565, 195 572
           Q 215 580, 245 565"
        fill={lighterColor}
        opacity="0.4"
      />

      {/* Tier 3 - Bottom tier (longest, to y=600) */}
      <path
        d="M 52 575
           Q 38 598, 35 625
           Q 32 648, 45 660
           L 255 660
           Q 268 648, 265 625
           Q 262 598, 248 575
           Z"
        fill={color}
      />
      {/* Tier 3 ruffle edge */}
      <path
        d="M 35 648
           Q 52 665, 78 655
           Q 100 645, 125 658
           Q 148 668, 175 658
           Q 198 648, 225 655
           Q 248 665, 265 648"
        fill={lighterColor}
        opacity="0.4"
      />

      {/* Tier shadow lines */}
      <path d="M 78 498 L 72 498" stroke={darkerColor} strokeWidth="2" opacity="0.4" />
      <path d="M 222 498 L 228 498" stroke={darkerColor} strokeWidth="2" opacity="0.4" />
      <path d="M 62 575 L 55 575" stroke={darkerColor} strokeWidth="2" opacity="0.4" />
      <path d="M 238 575 L 245 575" stroke={darkerColor} strokeWidth="2" opacity="0.4" />

      {/* Vertical gather lines */}
      <path d="M 120 430 Q 110 520, 95 620" stroke={darkerColor} strokeWidth="1" opacity="0.2" />
      <path d="M 150 430 Q 150 520, 150 620" stroke={darkerColor} strokeWidth="1" opacity="0.2" />
      <path d="M 180 430 Q 190 520, 205 620" stroke={darkerColor} strokeWidth="1" opacity="0.2" />

      {/* Waistband accent */}
      <path
        d="M 105 355 Q 150 348, 195 355"
        fill="none"
        stroke={lighterColor}
        strokeWidth="2"
        opacity="0.4"
      />
    </g>
  )
}

// ============================================================================
// 9. PrincessALineSkirt - Classic full skirt
// ============================================================================
export function PrincessALineSkirt({ color = '#E6E6FA', className = '' }: BottomProps) {
  const darkerColor = adjustColor(color, -20)
  const lighterColor = adjustColor(color, 25)
  const accentColor = '#DDA0DD' // Plum accent

  return (
    <g className={className} data-item="princess-aline-skirt">
      {/* Fitted waistband with pleated detail */}
      <path
        d="M 100 335
           Q 92 348, 92 362
           Q 92 375, 100 385
           L 200 385
           Q 208 375, 208 362
           Q 208 348, 200 335
           Q 175 325, 150 325
           Q 125 325, 100 335
           Z"
        fill={darkerColor}
      />

      {/* Hip yoke */}
      <path
        d="M 92 385
           Q 88 408, 85 430
           L 215 430
           Q 212 408, 208 385
           Z"
        fill={color}
      />

      {/* Main A-line skirt body - to y=650 */}
      <path
        d="M 85 430
           Q 55 510, 45 580
           Q 38 630, 50 665
           L 250 665
           Q 262 630, 255 580
           Q 245 510, 215 430
           Z"
        fill={color}
      />

      {/* Soft panel lines for A-line structure */}
      <path
        d="M 110 430 Q 88 540, 70 640"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1"
        opacity="0.2"
      />
      <path
        d="M 150 430 Q 150 540, 150 640"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1"
        opacity="0.15"
      />
      <path
        d="M 190 430 Q 212 540, 230 640"
        fill="none"
        stroke={darkerColor}
        strokeWidth="1"
        opacity="0.2"
      />

      {/* Subtle sheen */}
      <ellipse cx="150" cy="530" rx="40" ry="60" fill={lighterColor} opacity="0.2" />

      {/* Decorative hem with scallop edge */}
      <path
        d="M 50 660
           Q 60 675, 80 665
           Q 95 658, 110 668
           Q 125 678, 150 668
           Q 175 658, 190 668
           Q 205 678, 220 665
           Q 240 655, 250 660"
        fill="none"
        stroke={accentColor}
        strokeWidth="4"
        opacity="0.6"
      />

      {/* Small flower/bow decorations at hem */}
      {[70, 150, 230].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy={658} r="5" fill={accentColor} opacity="0.5" />
          <circle cx={x} cy={658} r="3" fill={lighterColor} opacity="0.7" />
        </g>
      ))}

      {/* Waistband ribbon bow */}
      <ellipse cx="150" cy="360" rx="12" ry="7" fill={accentColor} opacity="0.8" />
      <path
        d="M 140 360
           Q 122 350, 128 360
           Q 122 370, 140 360
           Z"
        fill={accentColor}
        opacity="0.9"
      />
      <path
        d="M 160 360
           Q 178 350, 172 360
           Q 178 370, 160 360
           Z"
        fill={accentColor}
        opacity="0.9"
      />
      <circle cx="150" cy="360" r="4" fill={darkerColor} />

      {/* Ribbon tails */}
      <path
        d="M 147 365 Q 142 395, 145 420"
        fill="none"
        stroke={accentColor}
        strokeWidth="4"
        opacity="0.7"
      />
      <path
        d="M 153 365 Q 158 395, 155 420"
        fill="none"
        stroke={accentColor}
        strokeWidth="4"
        opacity="0.7"
      />
    </g>
  )
}

// ============================================================================
// THUMBNAIL VERSIONS (50x50 viewBox)
// ============================================================================

export function LayeredTulleSkirtThumbnail({ color = '#FFB6C1' }: { color?: string }) {
  const dark = adjustColor(color, -25)
  const light = adjustColor(color, 30)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <rect x="15" y="5" width="20" height="6" rx="3" fill={dark} />
      <ellipse cx="25" cy="32" rx="22" ry="16" fill={light} opacity="0.4" />
      <ellipse cx="25" cy="30" rx="19" ry="14" fill={color} opacity="0.5" />
      <ellipse cx="25" cy="28" rx="16" ry="12" fill={light} opacity="0.6" />
      <ellipse cx="25" cy="26" rx="13" ry="10" fill={color} opacity="0.7" />
      <ellipse cx="22" cy="8" rx="4" ry="2" fill={color} />
      <ellipse cx="28" cy="8" rx="4" ry="2" fill={color} />
      <circle cx="25" cy="8" r="2" fill={dark} />
    </svg>
  )
}

export function SequinMiniSkirtThumbnail({ color = '#C0C0C0' }: { color?: string }) {
  const dark = adjustColor(color, -30)
  const light = adjustColor(color, 40)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <rect x="15" y="5" width="20" height="6" rx="3" fill={dark} />
      <path d="M 15 11 Q 10 22, 8 35 L 42 35 Q 40 22, 35 11 Z" fill={color} />
      {[12, 20, 28, 36].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy={18} r="2" fill={light} opacity="0.8" />
          <circle cx={x + 4} cy={26} r="2" fill={light} opacity="0.8" />
        </g>
      ))}
      <line x1="8" y1="33" x2="42" y2="33" stroke={light} strokeWidth="2" />
    </svg>
  )
}

export function SatinMaxiSkirtThumbnail({ color = '#4169E1' }: { color?: string }) {
  const dark = adjustColor(color, -35)
  const light = adjustColor(color, 25)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <rect x="15" y="3" width="20" height="6" rx="2" fill={dark} />
      <path d="M 15 9 Q 8 25, 6 45 L 44 45 Q 42 25, 35 9 Z" fill={color} />
      <path d="M 25 9 Q 24 28, 25 45" stroke={light} strokeWidth="6" opacity="0.2" />
      <path d="M 18 12 Q 12 28, 10 42" stroke={dark} strokeWidth="1" opacity="0.3" />
      <path d="M 32 12 Q 38 28, 40 42" stroke={dark} strokeWidth="1" opacity="0.3" />
    </svg>
  )
}

export function GlitterLeggingsThumbnail({ color = '#FFD700' }: { color?: string }) {
  const dark = adjustColor(color, -30)
  const light = adjustColor(color, 35)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <rect x="14" y="3" width="22" height="7" rx="3" fill={dark} />
      <path d="M 16 10 L 14 45 L 22 45 L 23 10 Z" fill={color} />
      <path d="M 27 10 L 28 45 L 36 45 L 34 10 Z" fill={color} />
      {[16, 32, 18, 30, 17, 33].map((x, i) => (
        <circle key={i} cx={x} cy={15 + i * 5} r="1" fill="white" opacity="0.8" />
      ))}
      <path d="M 17 15 Q 18 30, 18 40" stroke={light} strokeWidth="3" opacity="0.2" />
      <path d="M 33 15 Q 32 30, 32 40" stroke={light} strokeWidth="3" opacity="0.2" />
    </svg>
  )
}

export function VelvetPantsThumbnail({ color = '#800020' }: { color?: string }) {
  const dark = adjustColor(color, -25)
  const light = adjustColor(color, 20)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <rect x="14" y="4" width="22" height="6" rx="2" fill={dark} />
      <path d="M 14 10 L 10 45 L 23 45 L 24 10 Z" fill={color} />
      <path d="M 26 10 L 27 45 L 40 45 L 36 10 Z" fill={color} />
      <path d="M 16 15 Q 14 30, 13 42" stroke={light} strokeWidth="4" opacity="0.1" />
      <path d="M 34 15 Q 36 30, 37 42" stroke={light} strokeWidth="4" opacity="0.1" />
      <circle cx="25" cy="7" r="2" fill={dark} />
    </svg>
  )
}

export function BubbleSkirtThumbnail({ color = '#FF69B4' }: { color?: string }) {
  const dark = adjustColor(color, -25)
  const light = adjustColor(color, 30)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <rect x="15" y="5" width="20" height="6" rx="3" fill={dark} />
      <ellipse cx="25" cy="28" rx="20" ry="15" fill={color} />
      <ellipse cx="25" cy="24" rx="12" ry="8" fill={light} opacity="0.3" />
      <path d="M 8 36 Q 25 42, 42 36" fill={dark} opacity="0.3" />
      <ellipse cx="22" cy="8" rx="4" ry="2" fill={light} />
      <ellipse cx="28" cy="8" rx="4" ry="2" fill={light} />
      <circle cx="25" cy="8" r="2" fill={dark} />
    </svg>
  )
}

export function MetallicShortsThumbnail({ color = '#C0C0C0' }: { color?: string }) {
  const dark = adjustColor(color, -40)
  const light = adjustColor(color, 50)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <rect x="14" y="6" width="22" height="7" rx="3" fill={dark} />
      <path d="M 14 13 L 10 32 L 24 32 L 25 13 Z" fill={color} />
      <path d="M 25 13 L 26 32 L 40 32 L 36 13 Z" fill={color} />
      <path d="M 16 15 Q 14 22, 12 30" stroke={light} strokeWidth="5" opacity="0.4" />
      <path d="M 34 15 Q 36 22, 38 30" stroke={light} strokeWidth="5" opacity="0.4" />
      <line x1="10" y1="30" x2="40" y2="30" stroke={light} strokeWidth="2" />
      <circle cx="25" cy="10" r="2.5" fill={light} />
      <circle cx="25" cy="10" r="1.5" fill={dark} />
    </svg>
  )
}

export function TieredRuffleSkirtThumbnail({ color = '#FF6347' }: { color?: string }) {
  const dark = adjustColor(color, -25)
  const light = adjustColor(color, 25)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <rect x="15" y="4" width="20" height="5" rx="2" fill={dark} />
      {/* Tier 1 */}
      <path d="M 15 9 Q 10 14, 8 20 L 42 20 Q 40 14, 35 9 Z" fill={color} />
      <path d="M 8 18 Q 15 22, 25 18 Q 35 14, 42 18" fill={light} opacity="0.4" />
      {/* Tier 2 */}
      <path d="M 8 20 Q 5 28, 4 34 L 46 34 Q 45 28, 42 20 Z" fill={color} />
      <path d="M 4 32 Q 12 37, 25 32 Q 38 27, 46 32" fill={light} opacity="0.4" />
      {/* Tier 3 */}
      <path d="M 4 34 Q 2 42, 3 46 L 47 46 Q 48 42, 46 34 Z" fill={color} />
      <path d="M 3 44 Q 12 48, 25 44 Q 38 40, 47 44" fill={light} opacity="0.4" />
    </svg>
  )
}

export function PrincessALineSkirtThumbnail({ color = '#E6E6FA' }: { color?: string }) {
  const dark = adjustColor(color, -20)
  const accent = '#DDA0DD'
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <rect x="15" y="4" width="20" height="6" rx="2" fill={dark} />
      <path d="M 15 10 Q 6 28, 4 44 L 46 44 Q 44 28, 35 10 Z" fill={color} />
      <path d="M 20 10 Q 12 28, 8 42" stroke={dark} strokeWidth="0.5" opacity="0.3" />
      <path d="M 30 10 Q 38 28, 42 42" stroke={dark} strokeWidth="0.5" opacity="0.3" />
      <path d="M 4 42 Q 15 48, 25 42 Q 35 36, 46 42" stroke={accent} strokeWidth="2" opacity="0.6" />
      <ellipse cx="22" cy="7" rx="4" ry="2" fill={accent} opacity="0.9" />
      <ellipse cx="28" cy="7" rx="4" ry="2" fill={accent} opacity="0.9" />
      <circle cx="25" cy="7" r="2" fill={dark} />
    </svg>
  )
}

// ============================================================================
// Default Export
// ============================================================================
const BottomsExpansion = {
  LayeredTulleSkirt,
  SequinMiniSkirt,
  SatinMaxiSkirt,
  GlitterLeggings,
  VelvetPants,
  BubbleSkirt,
  MetallicShorts,
  TieredRuffleSkirt,
  PrincessALineSkirt,
}

export default BottomsExpansion
