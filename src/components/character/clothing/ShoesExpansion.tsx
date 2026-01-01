'use client'

/**
 * Princess & Party Shoes SVG Components
 * ViewBox: 300x800
 * Feet: y=740 to y=800 (heels raise foot slightly)
 * Left foot center: x=115, Right foot center: x=185
 */

interface ShoeProps {
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
// 1. GlassSlippers - Clear sparkly Cinderella heels
// ============================================================================
export function GlassSlippers({ color = '#ADD8E6', className = '' }: ShoeProps) {
  const highlight = adjustColor(color, 60)
  const shadow = adjustColor(color, -30)

  return (
    <g className={className} data-item="glass-slippers">
      <defs>
        {/* Glass gradient with transparency */}
        <linearGradient id="glassBodyLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={highlight} stopOpacity="0.7" />
          <stop offset="50%" stopColor={color} stopOpacity="0.5" />
          <stop offset="100%" stopColor={shadow} stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="glassBodyRight" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={highlight} stopOpacity="0.7" />
          <stop offset="50%" stopColor={color} stopOpacity="0.5" />
          <stop offset="100%" stopColor={shadow} stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="glassHeel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0.4" />
        </linearGradient>
        {/* Sparkle filter */}
        <filter id="glassSparkle">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Left Glass Slipper */}
      <g>
        {/* Ground shadow */}
        <ellipse cx="120" cy="798" rx="28" ry="4" fill="#333" opacity="0.2" />

        {/* Crystal heel */}
        <path
          d="M 105 775 L 100 795 Q 100 798, 105 798 L 115 798 Q 118 798, 116 795 L 112 775 Z"
          fill="url(#glassHeel)"
          stroke={color}
          strokeWidth="0.5"
          opacity="0.8"
        />
        {/* Heel sparkle */}
        <path d="M 103 785 L 108 780 M 105 790 L 110 785" stroke="white" strokeWidth="1" opacity="0.7" />

        {/* Main shoe body - delicate pump shape */}
        <path
          d="M 95 755 Q 90 765, 95 775 Q 100 785, 115 790 Q 135 795, 148 785
             Q 152 775, 148 765 Q 140 755, 120 752 Q 100 752, 95 755 Z"
          fill="url(#glassBodyLeft)"
          stroke={color}
          strokeWidth="1"
          opacity="0.85"
        />

        {/* Inner reflection */}
        <path
          d="M 100 760 Q 98 770, 105 778"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
          opacity="0.5"
          strokeLinecap="round"
        />

        {/* Toe highlight */}
        <ellipse cx="138" cy="780" rx="8" ry="4" fill="white" opacity="0.35" />

        {/* Sparkles */}
        <g filter="url(#glassSparkle)">
          <circle cx="105" cy="762" r="1.5" fill="white" opacity="0.9" />
          <circle cx="130" cy="768" r="1" fill="white" opacity="0.8" />
          <circle cx="118" cy="758" r="1.2" fill="white" opacity="0.85" />
          <circle cx="140" cy="775" r="1" fill="white" opacity="0.7" />
          <circle cx="112" cy="780" r="0.8" fill="white" opacity="0.9" />
        </g>

        {/* Opening edge */}
        <path
          d="M 100 758 Q 120 752, 142 760"
          stroke={highlight}
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
      </g>

      {/* Right Glass Slipper */}
      <g>
        {/* Ground shadow */}
        <ellipse cx="180" cy="798" rx="28" ry="4" fill="#333" opacity="0.2" />

        {/* Crystal heel */}
        <path
          d="M 195 775 L 200 795 Q 200 798, 195 798 L 185 798 Q 182 798, 184 795 L 188 775 Z"
          fill="url(#glassHeel)"
          stroke={color}
          strokeWidth="0.5"
          opacity="0.8"
        />
        {/* Heel sparkle */}
        <path d="M 197 785 L 192 780 M 195 790 L 190 785" stroke="white" strokeWidth="1" opacity="0.7" />

        {/* Main shoe body */}
        <path
          d="M 205 755 Q 210 765, 205 775 Q 200 785, 185 790 Q 165 795, 152 785
             Q 148 775, 152 765 Q 160 755, 180 752 Q 200 752, 205 755 Z"
          fill="url(#glassBodyRight)"
          stroke={color}
          strokeWidth="1"
          opacity="0.85"
        />

        {/* Inner reflection */}
        <path
          d="M 200 760 Q 202 770, 195 778"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
          opacity="0.5"
          strokeLinecap="round"
        />

        {/* Toe highlight */}
        <ellipse cx="162" cy="780" rx="8" ry="4" fill="white" opacity="0.35" />

        {/* Sparkles */}
        <g filter="url(#glassSparkle)">
          <circle cx="195" cy="762" r="1.5" fill="white" opacity="0.9" />
          <circle cx="170" cy="768" r="1" fill="white" opacity="0.8" />
          <circle cx="182" cy="758" r="1.2" fill="white" opacity="0.85" />
          <circle cx="160" cy="775" r="1" fill="white" opacity="0.7" />
          <circle cx="188" cy="780" r="0.8" fill="white" opacity="0.9" />
        </g>

        {/* Opening edge */}
        <path
          d="M 200 758 Q 180 752, 158 760"
          stroke={highlight}
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
      </g>
    </g>
  )
}

// ============================================================================
// 2. StrappyHeels - Elegant party heels with straps
// ============================================================================
export function StrappyHeels({ color = '#FFD700', className = '' }: ShoeProps) {
  const darkerColor = adjustColor(color, -40)
  const highlight = adjustColor(color, 50)
  const strapColor = adjustColor(color, -20)

  return (
    <g className={className} data-item="strappy-heels">
      <defs>
        <linearGradient id="strappyBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
        <linearGradient id="strappyStrap" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="100%" stopColor={strapColor} />
        </linearGradient>
        <linearGradient id="metalGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF8DC" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
      </defs>

      {/* Left Strappy Heel */}
      <g>
        {/* Shadow */}
        <ellipse cx="118" cy="800" rx="26" ry="4" fill="#333" opacity="0.25" />

        {/* Stiletto heel */}
        <path
          d="M 100 778 L 96 798 Q 96 802, 102 802 L 110 802 Q 114 802, 112 798 L 108 778 Z"
          fill={darkerColor}
        />
        <path d="M 98 785 L 100 780" stroke={highlight} strokeWidth="1" opacity="0.5" />

        {/* Sole */}
        <path
          d="M 108 778 Q 125 785, 148 778 L 148 782 Q 125 790, 108 782 Z"
          fill={darkerColor}
        />

        {/* Toe strap */}
        <path
          d="M 130 770 Q 148 778, 145 790"
          fill="none"
          stroke="url(#strappyStrap)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M 125 772 Q 145 775, 148 788"
          fill="none"
          stroke="url(#strappyStrap)"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Cross straps over foot */}
        <path
          d="M 105 760 Q 125 780, 145 765"
          fill="none"
          stroke="url(#strappyStrap)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M 108 768 Q 125 755, 142 770"
          fill="none"
          stroke="url(#strappyStrap)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Ankle strap */}
        <path
          d="M 100 738 Q 95 745, 100 752 Q 130 758, 145 748 Q 150 742, 145 735"
          fill="none"
          stroke="url(#strappyStrap)"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Gold buckle */}
        <rect x="138" y="738" width="8" height="6" rx="1" fill="url(#metalGold)" />
        <rect x="140" y="740" width="4" height="2" rx="0.5" fill={darkerColor} />

        {/* Strap highlights */}
        <path d="M 106 762 Q 125 778, 144 767" stroke={highlight} strokeWidth="1" fill="none" opacity="0.4" />
      </g>

      {/* Right Strappy Heel */}
      <g>
        {/* Shadow */}
        <ellipse cx="182" cy="800" rx="26" ry="4" fill="#333" opacity="0.25" />

        {/* Stiletto heel */}
        <path
          d="M 200 778 L 204 798 Q 204 802, 198 802 L 190 802 Q 186 802, 188 798 L 192 778 Z"
          fill={darkerColor}
        />
        <path d="M 202 785 L 200 780" stroke={highlight} strokeWidth="1" opacity="0.5" />

        {/* Sole */}
        <path
          d="M 192 778 Q 175 785, 152 778 L 152 782 Q 175 790, 192 782 Z"
          fill={darkerColor}
        />

        {/* Toe strap */}
        <path
          d="M 170 770 Q 152 778, 155 790"
          fill="none"
          stroke="url(#strappyStrap)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M 175 772 Q 155 775, 152 788"
          fill="none"
          stroke="url(#strappyStrap)"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Cross straps */}
        <path
          d="M 195 760 Q 175 780, 155 765"
          fill="none"
          stroke="url(#strappyStrap)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M 192 768 Q 175 755, 158 770"
          fill="none"
          stroke="url(#strappyStrap)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Ankle strap */}
        <path
          d="M 200 738 Q 205 745, 200 752 Q 170 758, 155 748 Q 150 742, 155 735"
          fill="none"
          stroke="url(#strappyStrap)"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Gold buckle */}
        <rect x="154" y="738" width="8" height="6" rx="1" fill="url(#metalGold)" />
        <rect x="156" y="740" width="4" height="2" rx="0.5" fill={darkerColor} />

        {/* Strap highlights */}
        <path d="M 194 762 Q 175 778, 156 767" stroke={highlight} strokeWidth="1" fill="none" opacity="0.4" />
      </g>
    </g>
  )
}

// ============================================================================
// 3. SparkleFlats - Glittery ballet flats
// ============================================================================
export function SparkleFlats({ color = '#C0C0C0', className = '' }: ShoeProps) {
  const darkerColor = adjustColor(color, -30)
  const highlight = adjustColor(color, 40)
  const sparkleColor = '#FFFFFF'

  return (
    <g className={className} data-item="sparkle-flats">
      <defs>
        <linearGradient id="sparkleBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
        {/* Glitter pattern */}
        <pattern id="glitterPattern" patternUnits="userSpaceOnUse" width="8" height="8">
          <circle cx="1" cy="1" r="0.5" fill={sparkleColor} opacity="0.8" />
          <circle cx="4" cy="3" r="0.4" fill={sparkleColor} opacity="0.6" />
          <circle cx="7" cy="2" r="0.3" fill={sparkleColor} opacity="0.9" />
          <circle cx="2" cy="6" r="0.4" fill={sparkleColor} opacity="0.7" />
          <circle cx="5" cy="7" r="0.5" fill={sparkleColor} opacity="0.8" />
          <circle cx="6" cy="5" r="0.3" fill={sparkleColor} opacity="0.5" />
        </pattern>
      </defs>

      {/* Left Sparkle Flat */}
      <g>
        {/* Shadow */}
        <ellipse cx="120" cy="788" rx="30" ry="5" fill="#333" opacity="0.2" />

        {/* Main body */}
        <path
          d="M 90 768 Q 85 778, 92 788 Q 110 798, 140 792 Q 155 788, 155 775
             Q 155 765, 140 758 Q 115 752, 95 758 Q 88 762, 90 768 Z"
          fill="url(#sparkleBody)"
        />

        {/* Glitter overlay */}
        <path
          d="M 90 768 Q 85 778, 92 788 Q 110 798, 140 792 Q 155 788, 155 775
             Q 155 765, 140 758 Q 115 752, 95 758 Q 88 762, 90 768 Z"
          fill="url(#glitterPattern)"
          opacity="0.6"
        />

        {/* Inner opening shadow */}
        <ellipse cx="118" cy="765" rx="18" ry="6" fill={darkerColor} opacity="0.3" />

        {/* Decorative bow */}
        <ellipse cx="105" cy="770" rx="5" ry="3" fill={darkerColor} />
        <ellipse cx="115" cy="770" rx="5" ry="3" fill={darkerColor} />
        <circle cx="110" cy="770" r="3" fill={highlight} />

        {/* Toe highlight */}
        <ellipse cx="145" cy="780" rx="6" ry="4" fill={highlight} opacity="0.4" />

        {/* Scattered sparkles */}
        <circle cx="98" cy="775" r="1.2" fill="white" opacity="0.9" />
        <circle cx="125" cy="768" r="1" fill="white" opacity="0.85" />
        <circle cx="135" cy="778" r="0.8" fill="white" opacity="0.9" />
        <circle cx="108" cy="782" r="1" fill="white" opacity="0.8" />
        <circle cx="148" cy="772" r="0.9" fill="white" opacity="0.85" />
      </g>

      {/* Right Sparkle Flat */}
      <g>
        {/* Shadow */}
        <ellipse cx="180" cy="788" rx="30" ry="5" fill="#333" opacity="0.2" />

        {/* Main body */}
        <path
          d="M 210 768 Q 215 778, 208 788 Q 190 798, 160 792 Q 145 788, 145 775
             Q 145 765, 160 758 Q 185 752, 205 758 Q 212 762, 210 768 Z"
          fill="url(#sparkleBody)"
        />

        {/* Glitter overlay */}
        <path
          d="M 210 768 Q 215 778, 208 788 Q 190 798, 160 792 Q 145 788, 145 775
             Q 145 765, 160 758 Q 185 752, 205 758 Q 212 762, 210 768 Z"
          fill="url(#glitterPattern)"
          opacity="0.6"
        />

        {/* Inner opening shadow */}
        <ellipse cx="182" cy="765" rx="18" ry="6" fill={darkerColor} opacity="0.3" />

        {/* Decorative bow */}
        <ellipse cx="195" cy="770" rx="5" ry="3" fill={darkerColor} />
        <ellipse cx="185" cy="770" rx="5" ry="3" fill={darkerColor} />
        <circle cx="190" cy="770" r="3" fill={highlight} />

        {/* Toe highlight */}
        <ellipse cx="155" cy="780" rx="6" ry="4" fill={highlight} opacity="0.4" />

        {/* Scattered sparkles */}
        <circle cx="202" cy="775" r="1.2" fill="white" opacity="0.9" />
        <circle cx="175" cy="768" r="1" fill="white" opacity="0.85" />
        <circle cx="165" cy="778" r="0.8" fill="white" opacity="0.9" />
        <circle cx="192" cy="782" r="1" fill="white" opacity="0.8" />
        <circle cx="152" cy="772" r="0.9" fill="white" opacity="0.85" />
      </g>
    </g>
  )
}

// ============================================================================
// 4. SatinPumps - Classic princess pumps
// ============================================================================
export function SatinPumps({ color = '#FFB6C1', className = '' }: ShoeProps) {
  const darkerColor = adjustColor(color, -35)
  const highlight = adjustColor(color, 45)
  const shadow = adjustColor(color, -50)

  return (
    <g className={className} data-item="satin-pumps">
      <defs>
        <linearGradient id="satinBodyLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="40%" stopColor={color} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
        <linearGradient id="satinBodyRight" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="40%" stopColor={color} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
        {/* Satin sheen effect */}
        <linearGradient id="satinSheen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="50%" stopColor="white" stopOpacity="0" />
          <stop offset="100%" stopColor="white" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Left Satin Pump */}
      <g>
        {/* Ground shadow */}
        <ellipse cx="120" cy="795" rx="28" ry="4" fill="#333" opacity="0.25" />

        {/* Kitten heel */}
        <path
          d="M 102 772 L 98 792 Q 98 796, 104 796 L 112 796 Q 116 796, 114 792 L 110 772 Z"
          fill={shadow}
        />
        <path d="M 100 780 L 102 775" stroke={color} strokeWidth="1.5" opacity="0.4" />

        {/* Main pump body */}
        <path
          d="M 95 755 Q 88 765, 95 778 Q 105 792, 130 795 Q 152 795, 155 780
             Q 158 765, 145 755 Q 125 748, 105 752 Q 92 755, 95 755 Z"
          fill="url(#satinBodyLeft)"
        />

        {/* Satin sheen overlay */}
        <path
          d="M 98 760 Q 95 770, 100 780 Q 108 790, 125 792"
          stroke="url(#satinSheen)"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* V-cut opening */}
        <path
          d="M 105 758 Q 120 750, 138 758 L 128 770 Q 120 765, 112 770 Z"
          fill={shadow}
          opacity="0.4"
        />

        {/* Opening edge highlight */}
        <path
          d="M 107 759 Q 120 752, 136 759"
          stroke={highlight}
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />

        {/* Toe highlight */}
        <ellipse cx="142" cy="782" rx="8" ry="5" fill={highlight} opacity="0.3" />

        {/* Delicate seam */}
        <path d="M 120 770 L 120 790" stroke={darkerColor} strokeWidth="0.5" opacity="0.3" />
      </g>

      {/* Right Satin Pump */}
      <g>
        {/* Ground shadow */}
        <ellipse cx="180" cy="795" rx="28" ry="4" fill="#333" opacity="0.25" />

        {/* Kitten heel */}
        <path
          d="M 198 772 L 202 792 Q 202 796, 196 796 L 188 796 Q 184 796, 186 792 L 190 772 Z"
          fill={shadow}
        />
        <path d="M 200 780 L 198 775" stroke={color} strokeWidth="1.5" opacity="0.4" />

        {/* Main pump body */}
        <path
          d="M 205 755 Q 212 765, 205 778 Q 195 792, 170 795 Q 148 795, 145 780
             Q 142 765, 155 755 Q 175 748, 195 752 Q 208 755, 205 755 Z"
          fill="url(#satinBodyRight)"
        />

        {/* Satin sheen overlay */}
        <path
          d="M 202 760 Q 205 770, 200 780 Q 192 790, 175 792"
          stroke="url(#satinSheen)"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* V-cut opening */}
        <path
          d="M 195 758 Q 180 750, 162 758 L 172 770 Q 180 765, 188 770 Z"
          fill={shadow}
          opacity="0.4"
        />

        {/* Opening edge highlight */}
        <path
          d="M 193 759 Q 180 752, 164 759"
          stroke={highlight}
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />

        {/* Toe highlight */}
        <ellipse cx="158" cy="782" rx="8" ry="5" fill={highlight} opacity="0.3" />

        {/* Delicate seam */}
        <path d="M 180 770 L 180 790" stroke={darkerColor} strokeWidth="0.5" opacity="0.3" />
      </g>
    </g>
  )
}

// ============================================================================
// 5. JeweledSandals - Fancy sandals with gems
// ============================================================================
export function JeweledSandals({ color = '#40E0D0', className = '' }: ShoeProps) {
  const darkerColor = adjustColor(color, -40)
  const highlight = adjustColor(color, 50)
  const gemColor = '#FF69B4'
  const gemHighlight = '#FFB6C1'

  return (
    <g className={className} data-item="jeweled-sandals">
      <defs>
        <linearGradient id="jeweledSole" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
        <linearGradient id="jeweledStrap" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
        <radialGradient id="gemGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor={gemHighlight} />
          <stop offset="50%" stopColor={gemColor} />
          <stop offset="100%" stopColor={adjustColor(gemColor, -40)} />
        </radialGradient>
        <radialGradient id="crystalGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#E0E0E0" />
          <stop offset="100%" stopColor="#A0A0A0" />
        </radialGradient>
      </defs>

      {/* Left Jeweled Sandal */}
      <g>
        {/* Shadow */}
        <ellipse cx="120" cy="795" rx="30" ry="4" fill="#333" opacity="0.2" />

        {/* Flat sole */}
        <path
          d="M 90 782 Q 85 788, 92 795 Q 120 802, 152 792 Q 158 785, 152 778 Q 120 770, 92 778 Q 88 780, 90 782 Z"
          fill="url(#jeweledSole)"
        />
        {/* Sole edge */}
        <path
          d="M 92 795 Q 120 802, 152 792"
          stroke={darkerColor}
          strokeWidth="2"
          fill="none"
        />

        {/* Toe strap with gems */}
        <path
          d="M 130 775 Q 152 782, 148 795"
          fill="none"
          stroke="url(#jeweledStrap)"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Cross straps */}
        <path
          d="M 95 775 Q 120 790, 145 778"
          fill="none"
          stroke="url(#jeweledStrap)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M 98 785 Q 120 772, 142 785"
          fill="none"
          stroke="url(#jeweledStrap)"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Ankle strap */}
        <path
          d="M 95 755 Q 88 762, 95 770 Q 120 778, 148 765 Q 155 758, 148 752"
          fill="none"
          stroke="url(#jeweledStrap)"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Gems along straps */}
        <ellipse cx="108" cy="780" rx="3" ry="2.5" fill="url(#gemGradient)" />
        <circle cx="108" cy="779" r="1" fill="white" opacity="0.6" />

        <ellipse cx="130" cy="778" rx="2.5" ry="2" fill="url(#crystalGradient)" />
        <circle cx="129" cy="777" r="0.8" fill="white" opacity="0.7" />

        <ellipse cx="120" cy="762" rx="3.5" ry="3" fill="url(#gemGradient)" />
        <circle cx="119" cy="761" r="1.2" fill="white" opacity="0.6" />

        <ellipse cx="138" cy="758" rx="2.5" ry="2" fill="url(#crystalGradient)" />
        <circle cx="137" cy="757" r="0.8" fill="white" opacity="0.7" />

        {/* Small accent gems */}
        <circle cx="100" cy="777" r="1.5" fill="url(#crystalGradient)" />
        <circle cx="145" cy="772" r="1.5" fill="url(#gemGradient)" />
      </g>

      {/* Right Jeweled Sandal */}
      <g>
        {/* Shadow */}
        <ellipse cx="180" cy="795" rx="30" ry="4" fill="#333" opacity="0.2" />

        {/* Flat sole */}
        <path
          d="M 210 782 Q 215 788, 208 795 Q 180 802, 148 792 Q 142 785, 148 778 Q 180 770, 208 778 Q 212 780, 210 782 Z"
          fill="url(#jeweledSole)"
        />
        {/* Sole edge */}
        <path
          d="M 208 795 Q 180 802, 148 792"
          stroke={darkerColor}
          strokeWidth="2"
          fill="none"
        />

        {/* Toe strap with gems */}
        <path
          d="M 170 775 Q 148 782, 152 795"
          fill="none"
          stroke="url(#jeweledStrap)"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Cross straps */}
        <path
          d="M 205 775 Q 180 790, 155 778"
          fill="none"
          stroke="url(#jeweledStrap)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M 202 785 Q 180 772, 158 785"
          fill="none"
          stroke="url(#jeweledStrap)"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Ankle strap */}
        <path
          d="M 205 755 Q 212 762, 205 770 Q 180 778, 152 765 Q 145 758, 152 752"
          fill="none"
          stroke="url(#jeweledStrap)"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Gems along straps */}
        <ellipse cx="192" cy="780" rx="3" ry="2.5" fill="url(#gemGradient)" />
        <circle cx="192" cy="779" r="1" fill="white" opacity="0.6" />

        <ellipse cx="170" cy="778" rx="2.5" ry="2" fill="url(#crystalGradient)" />
        <circle cx="169" cy="777" r="0.8" fill="white" opacity="0.7" />

        <ellipse cx="180" cy="762" rx="3.5" ry="3" fill="url(#gemGradient)" />
        <circle cx="179" cy="761" r="1.2" fill="white" opacity="0.6" />

        <ellipse cx="162" cy="758" rx="2.5" ry="2" fill="url(#crystalGradient)" />
        <circle cx="161" cy="757" r="0.8" fill="white" opacity="0.7" />

        {/* Small accent gems */}
        <circle cx="200" cy="777" r="1.5" fill="url(#crystalGradient)" />
        <circle cx="155" cy="772" r="1.5" fill="url(#gemGradient)" />
      </g>
    </g>
  )
}

// ============================================================================
// 6. VelvetSlippers - Royal house slippers
// ============================================================================
export function VelvetSlippers({ color = '#800020', className = '' }: ShoeProps) {
  const darkerColor = adjustColor(color, -30)
  const highlight = adjustColor(color, 40)
  const goldColor = '#DAA520'
  const goldHighlight = '#FFD700'

  return (
    <g className={className} data-item="velvet-slippers">
      <defs>
        <linearGradient id="velvetBodyLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
        <linearGradient id="velvetBodyRight" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
        <linearGradient id="goldThread" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={goldHighlight} />
          <stop offset="50%" stopColor={goldColor} />
          <stop offset="100%" stopColor={adjustColor(goldColor, -30)} />
        </linearGradient>
      </defs>

      {/* Left Velvet Slipper */}
      <g>
        {/* Shadow */}
        <ellipse cx="118" cy="790" rx="32" ry="5" fill="#333" opacity="0.2" />

        {/* Main slipper body */}
        <path
          d="M 88 765 Q 82 775, 88 788 Q 100 798, 135 795 Q 155 792, 155 778
             Q 155 765, 140 758 Q 115 750, 92 755 Q 85 760, 88 765 Z"
          fill="url(#velvetBodyLeft)"
        />

        {/* Velvet texture effect - subtle lines */}
        <path d="M 95 765 Q 100 775, 98 785" stroke={darkerColor} strokeWidth="0.5" opacity="0.3" />
        <path d="M 110 760 Q 115 775, 112 788" stroke={darkerColor} strokeWidth="0.5" opacity="0.3" />
        <path d="M 130 762 Q 132 775, 130 785" stroke={darkerColor} strokeWidth="0.5" opacity="0.3" />

        {/* Inner opening */}
        <ellipse cx="115" cy="762" rx="20" ry="7" fill={darkerColor} opacity="0.4" />

        {/* Gold embroidery - crown pattern */}
        <path
          d="M 105 775 L 110 768 L 115 775 L 120 768 L 125 775"
          fill="none"
          stroke="url(#goldThread)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Crown base */}
        <path d="M 103 778 L 127 778" stroke="url(#goldThread)" strokeWidth="1.5" />

        {/* Gold dots */}
        <circle cx="110" cy="768" r="1.5" fill={goldHighlight} />
        <circle cx="115" cy="772" r="1" fill={goldHighlight} />
        <circle cx="120" cy="768" r="1.5" fill={goldHighlight} />

        {/* Toe highlight */}
        <ellipse cx="145" cy="782" rx="6" ry="4" fill={highlight} opacity="0.25" />

        {/* Plush inner lining visible */}
        <path
          d="M 98 760 Q 115 755, 135 762"
          stroke={adjustColor(color, 20)}
          strokeWidth="3"
          fill="none"
          opacity="0.4"
        />
      </g>

      {/* Right Velvet Slipper */}
      <g>
        {/* Shadow */}
        <ellipse cx="182" cy="790" rx="32" ry="5" fill="#333" opacity="0.2" />

        {/* Main slipper body */}
        <path
          d="M 212 765 Q 218 775, 212 788 Q 200 798, 165 795 Q 145 792, 145 778
             Q 145 765, 160 758 Q 185 750, 208 755 Q 215 760, 212 765 Z"
          fill="url(#velvetBodyRight)"
        />

        {/* Velvet texture effect */}
        <path d="M 205 765 Q 200 775, 202 785" stroke={darkerColor} strokeWidth="0.5" opacity="0.3" />
        <path d="M 190 760 Q 185 775, 188 788" stroke={darkerColor} strokeWidth="0.5" opacity="0.3" />
        <path d="M 170 762 Q 168 775, 170 785" stroke={darkerColor} strokeWidth="0.5" opacity="0.3" />

        {/* Inner opening */}
        <ellipse cx="185" cy="762" rx="20" ry="7" fill={darkerColor} opacity="0.4" />

        {/* Gold embroidery - crown pattern */}
        <path
          d="M 175 775 L 180 768 L 185 775 L 190 768 L 195 775"
          fill="none"
          stroke="url(#goldThread)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Crown base */}
        <path d="M 173 778 L 197 778" stroke="url(#goldThread)" strokeWidth="1.5" />

        {/* Gold dots */}
        <circle cx="180" cy="768" r="1.5" fill={goldHighlight} />
        <circle cx="185" cy="772" r="1" fill={goldHighlight} />
        <circle cx="190" cy="768" r="1.5" fill={goldHighlight} />

        {/* Toe highlight */}
        <ellipse cx="155" cy="782" rx="6" ry="4" fill={highlight} opacity="0.25" />

        {/* Plush inner lining visible */}
        <path
          d="M 202 760 Q 185 755, 165 762"
          stroke={adjustColor(color, 20)}
          strokeWidth="3"
          fill="none"
          opacity="0.4"
        />
      </g>
    </g>
  )
}

// ============================================================================
// 7. PlatformGlitter - Chunky sparkly platforms
// ============================================================================
export function PlatformGlitter({ color = '#FF69B4', className = '' }: ShoeProps) {
  const darkerColor = adjustColor(color, -35)
  const highlight = adjustColor(color, 45)
  const platformColor = '#1C1C1C'

  return (
    <g className={className} data-item="platform-glitter">
      <defs>
        <linearGradient id="platformBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
        <linearGradient id="platformSole" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3A3A3A" />
          <stop offset="100%" stopColor={platformColor} />
        </linearGradient>
        {/* Chunky glitter pattern */}
        <pattern id="chunkyGlitter" patternUnits="userSpaceOnUse" width="6" height="6">
          <rect width="6" height="6" fill="transparent" />
          <circle cx="1" cy="1" r="0.8" fill="white" opacity="0.9" />
          <circle cx="4" cy="2" r="0.6" fill="#FFD700" opacity="0.8" />
          <circle cx="2" cy="4" r="0.7" fill="white" opacity="0.85" />
          <circle cx="5" cy="5" r="0.5" fill="#FFD700" opacity="0.7" />
          <circle cx="3" cy="3" r="0.4" fill="white" opacity="0.9" />
        </pattern>
      </defs>

      {/* Left Platform */}
      <g>
        {/* Shadow */}
        <ellipse cx="120" cy="805" rx="35" ry="5" fill="#333" opacity="0.3" />

        {/* Chunky platform sole */}
        <path
          d="M 88 775 L 85 795 Q 85 805, 95 808 L 152 808 Q 160 805, 158 795 L 155 775 Z"
          fill="url(#platformSole)"
        />
        {/* Platform edge highlight */}
        <path d="M 88 780 L 85 798" stroke="#4A4A4A" strokeWidth="2" />
        <path d="M 155 780 L 158 798" stroke="#4A4A4A" strokeWidth="2" />
        {/* Sole tread */}
        <path d="M 90 802 L 155 802" stroke="#0A0A0A" strokeWidth="1.5" />

        {/* Upper shoe */}
        <path
          d="M 90 755 Q 85 765, 88 778 L 155 778 Q 158 765, 152 755
             Q 135 748, 118 748 Q 100 748, 90 755 Z"
          fill="url(#platformBody)"
        />

        {/* Glitter overlay */}
        <path
          d="M 90 755 Q 85 765, 88 778 L 155 778 Q 158 765, 152 755
             Q 135 748, 118 748 Q 100 748, 90 755 Z"
          fill="url(#chunkyGlitter)"
          opacity="0.7"
        />

        {/* Opening */}
        <ellipse cx="120" cy="755" rx="22" ry="6" fill={darkerColor} opacity="0.35" />

        {/* Strap across */}
        <path
          d="M 95 758 Q 120 750, 148 758"
          fill="none"
          stroke={darkerColor}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M 95 758 Q 120 750, 148 758"
          fill="none"
          stroke="url(#chunkyGlitter)"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Large sparkles */}
        <circle cx="100" cy="768" r="2" fill="white" opacity="0.95" />
        <circle cx="140" cy="762" r="1.8" fill="#FFD700" opacity="0.9" />
        <circle cx="118" cy="770" r="2.2" fill="white" opacity="0.9" />
        <circle cx="130" cy="755" r="1.5" fill="#FFD700" opacity="0.85" />
      </g>

      {/* Right Platform */}
      <g>
        {/* Shadow */}
        <ellipse cx="180" cy="805" rx="35" ry="5" fill="#333" opacity="0.3" />

        {/* Chunky platform sole */}
        <path
          d="M 212 775 L 215 795 Q 215 805, 205 808 L 148 808 Q 140 805, 142 795 L 145 775 Z"
          fill="url(#platformSole)"
        />
        {/* Platform edge highlight */}
        <path d="M 212 780 L 215 798" stroke="#4A4A4A" strokeWidth="2" />
        <path d="M 145 780 L 142 798" stroke="#4A4A4A" strokeWidth="2" />
        {/* Sole tread */}
        <path d="M 145 802 L 210 802" stroke="#0A0A0A" strokeWidth="1.5" />

        {/* Upper shoe */}
        <path
          d="M 210 755 Q 215 765, 212 778 L 145 778 Q 142 765, 148 755
             Q 165 748, 182 748 Q 200 748, 210 755 Z"
          fill="url(#platformBody)"
        />

        {/* Glitter overlay */}
        <path
          d="M 210 755 Q 215 765, 212 778 L 145 778 Q 142 765, 148 755
             Q 165 748, 182 748 Q 200 748, 210 755 Z"
          fill="url(#chunkyGlitter)"
          opacity="0.7"
        />

        {/* Opening */}
        <ellipse cx="180" cy="755" rx="22" ry="6" fill={darkerColor} opacity="0.35" />

        {/* Strap across */}
        <path
          d="M 205 758 Q 180 750, 152 758"
          fill="none"
          stroke={darkerColor}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M 205 758 Q 180 750, 152 758"
          fill="none"
          stroke="url(#chunkyGlitter)"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Large sparkles */}
        <circle cx="200" cy="768" r="2" fill="white" opacity="0.95" />
        <circle cx="160" cy="762" r="1.8" fill="#FFD700" opacity="0.9" />
        <circle cx="182" cy="770" r="2.2" fill="white" opacity="0.9" />
        <circle cx="170" cy="755" r="1.5" fill="#FFD700" opacity="0.85" />
      </g>
    </g>
  )
}

// ============================================================================
// 8. AnkleStrapHeels - Elegant heels with bow detail
// ============================================================================
export function AnkleStrapHeels({ color = '#1C1C1C', className = '' }: ShoeProps) {
  const darkerColor = adjustColor(color, -20)
  const highlight = adjustColor(color, 50)
  const bowColor = '#FF1493'
  const bowHighlight = '#FF69B4'

  return (
    <g className={className} data-item="ankle-strap-heels">
      <defs>
        <linearGradient id="ankleHeelBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="40%" stopColor={color} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
        <radialGradient id="bowGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={bowHighlight} />
          <stop offset="100%" stopColor={bowColor} />
        </radialGradient>
      </defs>

      {/* Left Ankle Strap Heel */}
      <g>
        {/* Shadow */}
        <ellipse cx="120" cy="800" rx="28" ry="4" fill="#333" opacity="0.3" />

        {/* Stiletto heel */}
        <path
          d="M 102 778 L 98 798 Q 98 802, 104 802 L 112 802 Q 116 802, 114 798 L 110 778 Z"
          fill={darkerColor}
        />
        <path d="M 100 785 L 102 780" stroke={highlight} strokeWidth="1.5" opacity="0.4" />

        {/* Pointed toe shape */}
        <path
          d="M 95 755 Q 88 765, 92 778 Q 100 790, 130 792 Q 155 790, 155 775
             Q 155 762, 140 755 Q 118 748, 100 752 Q 92 754, 95 755 Z"
          fill="url(#ankleHeelBody)"
        />

        {/* Toe box shine */}
        <ellipse cx="142" cy="778" rx="8" ry="5" fill={highlight} opacity="0.2" />

        {/* V-cut opening */}
        <path
          d="M 105 758 Q 122 750, 140 758 L 130 768 Q 122 763, 114 768 Z"
          fill={darkerColor}
          opacity="0.5"
        />

        {/* Ankle strap */}
        <path
          d="M 98 738 Q 92 745, 98 752 Q 120 762, 148 752 Q 155 745, 148 738"
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M 100 740 Q 95 746, 100 752"
          stroke={highlight}
          strokeWidth="1.5"
          opacity="0.3"
        />

        {/* Decorative bow on ankle */}
        <g transform="translate(148, 745)">
          <ellipse cx="-5" cy="0" rx="6" ry="4" fill="url(#bowGradient)" />
          <ellipse cx="5" cy="0" rx="6" ry="4" fill="url(#bowGradient)" />
          <ellipse cx="0" cy="0" rx="3" ry="2.5" fill={bowColor} />
          {/* Bow tails */}
          <path d="M -3 2 Q -6 8, -4 12" stroke={bowColor} strokeWidth="2.5" fill="none" />
          <path d="M 3 2 Q 6 8, 4 12" stroke={bowColor} strokeWidth="2.5" fill="none" />
          {/* Bow highlights */}
          <ellipse cx="-5" cy="-1" rx="2" ry="1" fill={bowHighlight} opacity="0.5" />
          <ellipse cx="5" cy="-1" rx="2" ry="1" fill={bowHighlight} opacity="0.5" />
        </g>

        {/* Edge highlight */}
        <path
          d="M 100 756 Q 120 750, 142 758"
          stroke={highlight}
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
      </g>

      {/* Right Ankle Strap Heel */}
      <g>
        {/* Shadow */}
        <ellipse cx="180" cy="800" rx="28" ry="4" fill="#333" opacity="0.3" />

        {/* Stiletto heel */}
        <path
          d="M 198 778 L 202 798 Q 202 802, 196 802 L 188 802 Q 184 802, 186 798 L 190 778 Z"
          fill={darkerColor}
        />
        <path d="M 200 785 L 198 780" stroke={highlight} strokeWidth="1.5" opacity="0.4" />

        {/* Pointed toe shape */}
        <path
          d="M 205 755 Q 212 765, 208 778 Q 200 790, 170 792 Q 145 790, 145 775
             Q 145 762, 160 755 Q 182 748, 200 752 Q 208 754, 205 755 Z"
          fill="url(#ankleHeelBody)"
        />

        {/* Toe box shine */}
        <ellipse cx="158" cy="778" rx="8" ry="5" fill={highlight} opacity="0.2" />

        {/* V-cut opening */}
        <path
          d="M 195 758 Q 178 750, 160 758 L 170 768 Q 178 763, 186 768 Z"
          fill={darkerColor}
          opacity="0.5"
        />

        {/* Ankle strap */}
        <path
          d="M 202 738 Q 208 745, 202 752 Q 180 762, 152 752 Q 145 745, 152 738"
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M 200 740 Q 205 746, 200 752"
          stroke={highlight}
          strokeWidth="1.5"
          opacity="0.3"
        />

        {/* Decorative bow on ankle */}
        <g transform="translate(152, 745)">
          <ellipse cx="-5" cy="0" rx="6" ry="4" fill="url(#bowGradient)" />
          <ellipse cx="5" cy="0" rx="6" ry="4" fill="url(#bowGradient)" />
          <ellipse cx="0" cy="0" rx="3" ry="2.5" fill={bowColor} />
          {/* Bow tails */}
          <path d="M -3 2 Q -6 8, -4 12" stroke={bowColor} strokeWidth="2.5" fill="none" />
          <path d="M 3 2 Q 6 8, 4 12" stroke={bowColor} strokeWidth="2.5" fill="none" />
          {/* Bow highlights */}
          <ellipse cx="-5" cy="-1" rx="2" ry="1" fill={bowHighlight} opacity="0.5" />
          <ellipse cx="5" cy="-1" rx="2" ry="1" fill={bowHighlight} opacity="0.5" />
        </g>

        {/* Edge highlight */}
        <path
          d="M 200 756 Q 180 750, 158 758"
          stroke={highlight}
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
      </g>
    </g>
  )
}

// ============================================================================
// 9. PearlFlats - Flats with pearl accents
// ============================================================================
export function PearlFlats({ color = '#FFFAF0', className = '' }: ShoeProps) {
  const darkerColor = adjustColor(color, -25)
  const highlight = '#FFFFFF'
  const shadow = adjustColor(color, -40)

  return (
    <g className={className} data-item="pearl-flats">
      <defs>
        <linearGradient id="pearlFlatBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="40%" stopColor={color} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
        <radialGradient id="pearlGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#F5F5F5" />
          <stop offset="70%" stopColor="#E8E8E8" />
          <stop offset="100%" stopColor="#D0D0D0" />
        </radialGradient>
        <radialGradient id="pearlGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Left Pearl Flat */}
      <g>
        {/* Shadow */}
        <ellipse cx="120" cy="790" rx="32" ry="5" fill="#333" opacity="0.15" />

        {/* Main flat body */}
        <path
          d="M 88 768 Q 82 778, 88 790 Q 105 802, 145 795 Q 158 790, 158 775
             Q 158 762, 142 755 Q 115 748, 92 755 Q 85 760, 88 768 Z"
          fill="url(#pearlFlatBody)"
        />

        {/* Inner opening */}
        <ellipse cx="118" cy="762" rx="20" ry="7" fill={shadow} opacity="0.25" />

        {/* Decorative pearl cluster */}
        {/* Center large pearl */}
        <circle cx="115" cy="772" r="5" fill="url(#pearlGradient)" />
        <ellipse cx="113" cy="770" rx="1.5" ry="1" fill="white" opacity="0.8" />

        {/* Surrounding smaller pearls */}
        <circle cx="105" cy="770" r="3.5" fill="url(#pearlGradient)" />
        <ellipse cx="103.5" cy="769" rx="1" ry="0.7" fill="white" opacity="0.8" />

        <circle cx="125" cy="770" r="3.5" fill="url(#pearlGradient)" />
        <ellipse cx="123.5" cy="769" rx="1" ry="0.7" fill="white" opacity="0.8" />

        <circle cx="110" cy="778" r="3" fill="url(#pearlGradient)" />
        <ellipse cx="109" cy="777" rx="0.8" ry="0.6" fill="white" opacity="0.8" />

        <circle cx="120" cy="778" r="3" fill="url(#pearlGradient)" />
        <ellipse cx="119" cy="777" rx="0.8" ry="0.6" fill="white" opacity="0.8" />

        {/* Tiny accent pearls */}
        <circle cx="100" cy="775" r="2" fill="url(#pearlGradient)" />
        <circle cx="130" cy="775" r="2" fill="url(#pearlGradient)" />

        {/* Toe highlight */}
        <ellipse cx="148" cy="782" rx="6" ry="4" fill={highlight} opacity="0.4" />

        {/* Edge definition */}
        <path
          d="M 90 788 Q 105 798, 142 792"
          stroke={darkerColor}
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        />

        {/* Top edge highlight */}
        <path
          d="M 95 760 Q 118 752, 145 760"
          stroke={highlight}
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
      </g>

      {/* Right Pearl Flat */}
      <g>
        {/* Shadow */}
        <ellipse cx="180" cy="790" rx="32" ry="5" fill="#333" opacity="0.15" />

        {/* Main flat body */}
        <path
          d="M 212 768 Q 218 778, 212 790 Q 195 802, 155 795 Q 142 790, 142 775
             Q 142 762, 158 755 Q 185 748, 208 755 Q 215 760, 212 768 Z"
          fill="url(#pearlFlatBody)"
        />

        {/* Inner opening */}
        <ellipse cx="182" cy="762" rx="20" ry="7" fill={shadow} opacity="0.25" />

        {/* Decorative pearl cluster */}
        {/* Center large pearl */}
        <circle cx="185" cy="772" r="5" fill="url(#pearlGradient)" />
        <ellipse cx="183" cy="770" rx="1.5" ry="1" fill="white" opacity="0.8" />

        {/* Surrounding smaller pearls */}
        <circle cx="175" cy="770" r="3.5" fill="url(#pearlGradient)" />
        <ellipse cx="173.5" cy="769" rx="1" ry="0.7" fill="white" opacity="0.8" />

        <circle cx="195" cy="770" r="3.5" fill="url(#pearlGradient)" />
        <ellipse cx="193.5" cy="769" rx="1" ry="0.7" fill="white" opacity="0.8" />

        <circle cx="180" cy="778" r="3" fill="url(#pearlGradient)" />
        <ellipse cx="179" cy="777" rx="0.8" ry="0.6" fill="white" opacity="0.8" />

        <circle cx="190" cy="778" r="3" fill="url(#pearlGradient)" />
        <ellipse cx="189" cy="777" rx="0.8" ry="0.6" fill="white" opacity="0.8" />

        {/* Tiny accent pearls */}
        <circle cx="170" cy="775" r="2" fill="url(#pearlGradient)" />
        <circle cx="200" cy="775" r="2" fill="url(#pearlGradient)" />

        {/* Toe highlight */}
        <ellipse cx="152" cy="782" rx="6" ry="4" fill={highlight} opacity="0.4" />

        {/* Edge definition */}
        <path
          d="M 210 788 Q 195 798, 158 792"
          stroke={darkerColor}
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        />

        {/* Top edge highlight */}
        <path
          d="M 205 760 Q 182 752, 155 760"
          stroke={highlight}
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
      </g>
    </g>
  )
}

// ============================================================================
// THUMBNAILS (50x50 viewBox)
// ============================================================================

export function GlassSlippersThumbnail({ color = '#ADD8E6' }: { color?: string }) {
  const highlight = adjustColor(color, 60)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <defs>
        <linearGradient id="glassThumb" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={highlight} stopOpacity="0.7" />
          <stop offset="100%" stopColor={color} stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <ellipse cx="25" cy="42" rx="18" ry="3" fill="#333" opacity="0.15" />
      <path d="M 18 32 L 15 42 Q 15 44, 20 44 L 28 44 Q 30 44, 28 42 L 26 32 Z" fill={color} opacity="0.4" stroke={color} strokeWidth="0.5" />
      <path d="M 8 25 Q 5 32, 12 40 Q 25 46, 42 38 Q 46 30, 42 24 Q 32 18, 20 20 Q 8 22, 8 25 Z" fill="url(#glassThumb)" stroke={color} strokeWidth="0.8" />
      <circle cx="15" cy="28" r="1.5" fill="white" opacity="0.9" />
      <circle cx="30" cy="32" r="1" fill="white" opacity="0.8" />
      <circle cx="22" cy="25" r="1.2" fill="white" opacity="0.85" />
      <path d="M 12 28 Q 10 33, 15 38" stroke="white" strokeWidth="2" fill="none" opacity="0.5" strokeLinecap="round" />
    </svg>
  )
}

export function StrappyHeelsThumbnail({ color = '#FFD700' }: { color?: string }) {
  const darkerColor = adjustColor(color, -40)
  const highlight = adjustColor(color, 50)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <defs>
        <linearGradient id="strappyThumb" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
      </defs>
      <ellipse cx="25" cy="44" rx="18" ry="3" fill="#333" opacity="0.2" />
      <path d="M 12 35 L 10 44 Q 10 46, 15 46 L 22 46 Q 25 46, 23 44 L 20 35 Z" fill={darkerColor} />
      <path d="M 25 32 Q 40 38, 38 46" fill="none" stroke="url(#strappyThumb)" strokeWidth="4" strokeLinecap="round" />
      <path d="M 15 28 Q 28 38, 40 30" fill="none" stroke="url(#strappyThumb)" strokeWidth="3" strokeLinecap="round" />
      <path d="M 12 18 Q 8 22, 12 28 Q 28 34, 40 25 Q 44 20, 40 15" fill="none" stroke="url(#strappyThumb)" strokeWidth="4" strokeLinecap="round" />
      <rect x="36" y="18" width="6" height="5" rx="1" fill="#FFD700" />
    </svg>
  )
}

export function SparkleFlatsThumbnail({ color = '#C0C0C0' }: { color?: string }) {
  const darkerColor = adjustColor(color, -30)
  const highlight = adjustColor(color, 40)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <defs>
        <linearGradient id="sparkleThumb" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
      </defs>
      <ellipse cx="25" cy="40" rx="20" ry="4" fill="#333" opacity="0.15" />
      <path d="M 5 28 Q 3 35, 10 42 Q 25 48, 45 40 Q 48 32, 42 26 Q 28 20, 12 24 Q 5 26, 5 28 Z" fill="url(#sparkleThumb)" />
      <ellipse cx="23" cy="30" rx="12" ry="4" fill={darkerColor} opacity="0.25" />
      <ellipse cx="16" cy="32" rx="4" ry="2.5" fill={darkerColor} />
      <ellipse cx="24" cy="32" rx="4" ry="2.5" fill={darkerColor} />
      <circle cx="20" cy="32" r="2.5" fill={highlight} />
      <circle cx="12" cy="36" r="1.2" fill="white" opacity="0.9" />
      <circle cx="32" cy="34" r="1" fill="white" opacity="0.85" />
      <circle cx="38" cy="36" r="0.8" fill="white" opacity="0.9" />
    </svg>
  )
}

export function SatinPumpsThumbnail({ color = '#FFB6C1' }: { color?: string }) {
  const darkerColor = adjustColor(color, -35)
  const highlight = adjustColor(color, 45)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <defs>
        <linearGradient id="satinThumb" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
      </defs>
      <ellipse cx="25" cy="42" rx="18" ry="3" fill="#333" opacity="0.2" />
      <path d="M 14 32 L 12 42 Q 12 44, 17 44 L 24 44 Q 27 44, 25 42 L 22 32 Z" fill={adjustColor(color, -50)} />
      <path d="M 8 22 Q 4 30, 10 40 Q 22 48, 45 42 Q 48 32, 42 24 Q 28 16, 14 20 Q 6 22, 8 22 Z" fill="url(#satinThumb)" />
      <path d="M 15 25 Q 28 20, 38 28 L 32 34 Q 28 30, 22 34 Z" fill={darkerColor} opacity="0.35" />
      <path d="M 12 28 Q 10 34, 15 40" stroke="white" strokeWidth="6" fill="none" opacity="0.25" strokeLinecap="round" />
      <ellipse cx="40" cy="38" rx="5" ry="3" fill={highlight} opacity="0.3" />
    </svg>
  )
}

export function JeweledSandalsThumbnail({ color = '#40E0D0' }: { color?: string }) {
  const darkerColor = adjustColor(color, -40)
  const highlight = adjustColor(color, 50)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <defs>
        <linearGradient id="jeweledThumb" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
        <radialGradient id="gemThumb" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFB6C1" />
          <stop offset="100%" stopColor="#FF69B4" />
        </radialGradient>
      </defs>
      <ellipse cx="25" cy="42" rx="20" ry="3" fill="#333" opacity="0.15" />
      <path d="M 5 35 Q 3 40, 10 44 Q 25 48, 45 42 Q 48 38, 42 34 Q 25 28, 10 32 Q 5 34, 5 35 Z" fill="url(#jeweledThumb)" />
      <path d="M 32 32 Q 45 38, 42 46" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <path d="M 8 32 Q 25 42, 42 34" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <path d="M 8 20 Q 4 26, 10 32 Q 25 38, 42 28 Q 46 22, 42 18" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="20" cy="34" rx="3" ry="2.5" fill="url(#gemThumb)" />
      <circle cx="19" cy="33" r="1" fill="white" opacity="0.6" />
      <ellipse cx="32" cy="26" rx="2.5" ry="2" fill="white" />
      <circle cx="31" cy="25" r="0.8" fill="white" opacity="0.7" />
    </svg>
  )
}

export function VelvetSlippersThumbnail({ color = '#800020' }: { color?: string }) {
  const darkerColor = adjustColor(color, -30)
  const highlight = adjustColor(color, 40)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <defs>
        <linearGradient id="velvetThumb" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
      </defs>
      <ellipse cx="25" cy="42" rx="22" ry="4" fill="#333" opacity="0.15" />
      <path d="M 5 28 Q 2 36, 8 44 Q 22 50, 45 44 Q 50 36, 45 28 Q 30 20, 12 24 Q 4 26, 5 28 Z" fill="url(#velvetThumb)" />
      <ellipse cx="22" cy="28" rx="14" ry="5" fill={darkerColor} opacity="0.35" />
      <path d="M 18 36 L 22 30 L 26 36 L 30 30 L 34 36" fill="none" stroke="#DAA520" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 16 38 L 36 38" stroke="#DAA520" strokeWidth="1.5" />
      <circle cx="22" cy="30" r="1.5" fill="#FFD700" />
      <circle cx="30" cy="30" r="1.5" fill="#FFD700" />
      <ellipse cx="42" cy="38" rx="4" ry="3" fill={highlight} opacity="0.2" />
    </svg>
  )
}

export function PlatformGlitterThumbnail({ color = '#FF69B4' }: { color?: string }) {
  const darkerColor = adjustColor(color, -35)
  const highlight = adjustColor(color, 45)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <defs>
        <linearGradient id="platformThumb" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
      </defs>
      <ellipse cx="25" cy="48" rx="22" ry="4" fill="#333" opacity="0.25" />
      <path d="M 5 32 L 3 44 Q 3 50, 10 50 L 42 50 Q 48 50, 46 44 L 44 32 Z" fill="#2A2A2A" />
      <path d="M 6 46 L 44 46" stroke="#1A1A1A" strokeWidth="1.5" />
      <path d="M 6 20 Q 4 28, 6 34 L 44 34 Q 46 28, 44 20 Q 32 14, 25 14 Q 15 14, 6 20 Z" fill="url(#platformThumb)" />
      <ellipse cx="25" cy="22" rx="14" ry="5" fill={darkerColor} opacity="0.3" />
      <circle cx="12" cy="28" r="2" fill="white" opacity="0.9" />
      <circle cx="38" cy="26" r="1.8" fill="#FFD700" opacity="0.85" />
      <circle cx="25" cy="30" r="2.2" fill="white" opacity="0.9" />
      <circle cx="32" cy="22" r="1.5" fill="#FFD700" opacity="0.8" />
    </svg>
  )
}

export function AnkleStrapHeelsThumbnail({ color = '#1C1C1C' }: { color?: string }) {
  const highlight = adjustColor(color, 50)
  const darkerColor = adjustColor(color, -20)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <defs>
        <linearGradient id="ankleThumb" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
        <radialGradient id="bowThumb" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FF69B4" />
          <stop offset="100%" stopColor="#FF1493" />
        </radialGradient>
      </defs>
      <ellipse cx="25" cy="46" rx="18" ry="3" fill="#333" opacity="0.25" />
      <path d="M 14 34 L 12 44 Q 12 46, 17 46 L 24 46 Q 27 46, 25 44 L 22 34 Z" fill={darkerColor} />
      <path d="M 8 22 Q 4 30, 10 40 Q 22 48, 45 42 Q 48 32, 42 24 Q 28 16, 14 20 Q 6 22, 8 22 Z" fill="url(#ankleThumb)" />
      <path d="M 15 25 Q 28 20, 38 28 L 32 34 Q 28 30, 22 34 Z" fill={darkerColor} opacity="0.4" />
      <path d="M 10 14 Q 6 18, 10 24 Q 25 32, 42 22 Q 46 18, 42 14" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="42" cy="18" rx="5" ry="3.5" fill="url(#bowThumb)" />
      <ellipse cx="48" cy="18" rx="5" ry="3.5" fill="url(#bowThumb)" />
      <ellipse cx="45" cy="18" rx="2.5" ry="2" fill="#FF1493" />
    </svg>
  )
}

export function PearlFlatsThumbnail({ color = '#FFFAF0' }: { color?: string }) {
  const darkerColor = adjustColor(color, -25)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <defs>
        <linearGradient id="pearlFlatThumb" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
        <radialGradient id="pearlThumb" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#D0D0D0" />
        </radialGradient>
      </defs>
      <ellipse cx="25" cy="42" rx="22" ry="4" fill="#333" opacity="0.1" />
      <path d="M 5 28 Q 2 36, 8 44 Q 22 50, 45 44 Q 50 36, 45 28 Q 30 20, 12 24 Q 4 26, 5 28 Z" fill="url(#pearlFlatThumb)" />
      <ellipse cx="22" cy="28" rx="14" ry="5" fill={darkerColor} opacity="0.2" />
      <circle cx="22" cy="34" r="4" fill="url(#pearlThumb)" />
      <ellipse cx="20" cy="32" rx="1.2" ry="0.8" fill="white" opacity="0.8" />
      <circle cx="14" cy="32" r="3" fill="url(#pearlThumb)" />
      <circle cx="30" cy="32" r="3" fill="url(#pearlThumb)" />
      <circle cx="18" cy="38" r="2.5" fill="url(#pearlThumb)" />
      <circle cx="26" cy="38" r="2.5" fill="url(#pearlThumb)" />
      <ellipse cx="42" cy="38" rx="4" ry="3" fill="white" opacity="0.4" />
    </svg>
  )
}

// ============================================================================
// EXPORTS
// ============================================================================

const ShoesExpansion = {
  GlassSlippers,
  StrappyHeels,
  SparkleFlats,
  SatinPumps,
  JeweledSandals,
  VelvetSlippers,
  PlatformGlitter,
  AnkleStrapHeels,
  PearlFlats,
}

export default ShoesExpansion
