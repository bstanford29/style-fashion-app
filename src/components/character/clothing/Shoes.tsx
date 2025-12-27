'use client'

/**
 * Shoes SVG Components - Enhanced with 3D depth
 * All positioned to fit the 300x800 character viewBox
 * Ankle level: ~y=760
 * Feet: y=780 to y=800
 * Left foot center: x=130
 * Right foot center: x=170
 */

interface ShoeProps {
  color?: string
  className?: string
}

// ============================================================================
// 1. Sneakers - Enhanced with 3D depth
// ============================================================================
export function Sneakers({ color = '#FFFFFF', className = '' }: ShoeProps) {
  const accentColor = '#333333'
  const soleColor = '#E0E0E0'
  const soleDark = '#B8B8B8'
  const highlight = lightenColor(color, 40)
  const shadow = adjustColor(color, -30)

  return (
    <g className={className} data-item="sneakers">
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="sneakerBodyLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={shadow} />
        </linearGradient>
        <linearGradient id="sneakerBodyRight" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={shadow} />
        </linearGradient>
        <linearGradient id="sneakerSole" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={soleColor} />
          <stop offset="100%" stopColor={soleDark} />
        </linearGradient>
        <linearGradient id="sneakerToe" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5F5F5" />
          <stop offset="100%" stopColor="#D0D0D0" />
        </linearGradient>
      </defs>

      {/* Left sneaker */}
      <g>
        {/* Outer sole with thickness */}
        <path
          d="M 95 795 Q 90 798, 92 803 L 158 803 Q 163 798, 158 795 Z"
          fill={soleDark}
        />
        {/* Mid sole */}
        <path
          d="M 97 792 Q 93 795, 95 799 L 156 799 Q 160 795, 156 792 Z"
          fill="url(#sneakerSole)"
        />
        {/* Sole edge detail */}
        <path
          d="M 95 799 L 156 799"
          stroke="#CCCCCC"
          strokeWidth="1"
          fill="none"
        />
        {/* Main shoe body with 3D shape */}
        <path
          d="M 100 758
             Q 92 768, 95 782
             Q 96 790, 100 793
             L 152 793
             Q 158 790, 158 782
             Q 158 770, 150 762
             Q 138 755, 122 755
             Q 106 755, 100 758
             Z"
          fill="url(#sneakerBodyLeft)"
        />
        {/* Toe box with rubber cap */}
        <path
          d="M 95 782 Q 88 786, 88 793 Q 90 798, 98 798 L 115 798 Q 112 792, 105 788 Q 98 784, 95 782 Z"
          fill="url(#sneakerToe)"
        />
        {/* Toe cap highlight */}
        <path
          d="M 92 788 Q 90 790, 92 794"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        {/* Inner collar padding */}
        <path
          d="M 108 758 Q 125 754, 145 760"
          fill="none"
          stroke={shadow}
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Collar opening depth */}
        <ellipse cx="126" cy="758" rx="18" ry="4" fill={shadow} opacity="0.3" />
        {/* Accent stripe swoosh */}
        <path
          d="M 100 780 Q 120 775, 148 782"
          fill="none"
          stroke={accentColor}
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Lace area background */}
        <path
          d="M 112 760 Q 118 770, 120 778 L 132 778 Q 134 770, 138 760 Z"
          fill={shadow}
          opacity="0.2"
        />
        {/* Eyelets */}
        <circle cx="118" cy="763" r="2" fill={accentColor} />
        <circle cx="132" cy="763" r="2" fill={accentColor} />
        <circle cx="116" cy="770" r="2" fill={accentColor} />
        <circle cx="134" cy="770" r="2" fill={accentColor} />
        <circle cx="115" cy="777" r="2" fill={accentColor} />
        <circle cx="135" cy="777" r="2" fill={accentColor} />
        {/* Laces */}
        <path d="M 118 763 L 132 763" stroke="white" strokeWidth="2" />
        <path d="M 116 770 L 134 770" stroke="white" strokeWidth="2" />
        <path d="M 115 777 L 135 777" stroke="white" strokeWidth="2" />
        {/* Top highlight */}
        <path
          d="M 105 762 Q 115 758, 125 760"
          stroke={highlight}
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
      </g>

      {/* Right sneaker */}
      <g>
        {/* Outer sole with thickness */}
        <path
          d="M 142 795 Q 137 798, 142 803 L 208 803 Q 213 798, 208 795 Z"
          fill={soleDark}
        />
        {/* Mid sole */}
        <path
          d="M 144 792 Q 140 795, 144 799 L 206 799 Q 210 795, 206 792 Z"
          fill="url(#sneakerSole)"
        />
        {/* Sole edge detail */}
        <path
          d="M 144 799 L 206 799"
          stroke="#CCCCCC"
          strokeWidth="1"
          fill="none"
        />
        {/* Main shoe body with 3D shape */}
        <path
          d="M 148 758
             Q 142 768, 142 782
             Q 142 790, 148 793
             L 200 793
             Q 208 790, 208 782
             Q 210 770, 200 762
             Q 188 755, 172 755
             Q 156 755, 148 758
             Z"
          fill="url(#sneakerBodyRight)"
        />
        {/* Toe box with rubber cap */}
        <path
          d="M 205 782 Q 212 786, 212 793 Q 210 798, 202 798 L 185 798 Q 188 792, 195 788 Q 202 784, 205 782 Z"
          fill="url(#sneakerToe)"
        />
        {/* Toe cap highlight */}
        <path
          d="M 208 788 Q 210 790, 208 794"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        {/* Inner collar padding */}
        <path
          d="M 155 760 Q 172 754, 192 758"
          fill="none"
          stroke={shadow}
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Collar opening depth */}
        <ellipse cx="174" cy="758" rx="18" ry="4" fill={shadow} opacity="0.3" />
        {/* Accent stripe swoosh */}
        <path
          d="M 152 782 Q 175 775, 200 780"
          fill="none"
          stroke={accentColor}
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Lace area background */}
        <path
          d="M 162 760 Q 168 770, 170 778 L 182 778 Q 184 770, 188 760 Z"
          fill={shadow}
          opacity="0.2"
        />
        {/* Eyelets */}
        <circle cx="168" cy="763" r="2" fill={accentColor} />
        <circle cx="182" cy="763" r="2" fill={accentColor} />
        <circle cx="166" cy="770" r="2" fill={accentColor} />
        <circle cx="184" cy="770" r="2" fill={accentColor} />
        <circle cx="165" cy="777" r="2" fill={accentColor} />
        <circle cx="185" cy="777" r="2" fill={accentColor} />
        {/* Laces */}
        <path d="M 168 763 L 182 763" stroke="white" strokeWidth="2" />
        <path d="M 166 770 L 184 770" stroke="white" strokeWidth="2" />
        <path d="M 165 777 L 185 777" stroke="white" strokeWidth="2" />
        {/* Top highlight */}
        <path
          d="M 175 760 Q 185 758, 195 762"
          stroke={highlight}
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
      </g>
    </g>
  )
}

// ============================================================================
// 2. Ballet Flats - Enhanced with 3D depth
// ============================================================================
export function BalletFlats({ color = '#FF69B4', className = '' }: ShoeProps) {
  const darkerColor = adjustColor(color, -30)
  const highlight = lightenColor(color, 30)
  const shadow = adjustColor(color, -50)

  return (
    <g className={className} data-item="ballet-flats">
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="balletBodyLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="40%" stopColor={color} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
        <linearGradient id="balletBodyRight" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="40%" stopColor={color} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
        <radialGradient id="balletBow" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={shadow} />
        </radialGradient>
      </defs>

      {/* Left flat */}
      <g>
        {/* Sole shadow */}
        <ellipse cx="125" cy="800" rx="32" ry="5" fill="#333" opacity="0.2" />
        {/* Main shoe body with depth */}
        <path
          d="M 95 790
             Q 88 794, 90 800
             Q 92 804, 100 805
             L 152 805
             Q 160 804, 162 800
             Q 163 794, 158 790
             Q 145 785, 125 785
             Q 105 785, 95 790
             Z"
          fill="url(#balletBodyLeft)"
        />
        {/* Heel cup - inner depth */}
        <path
          d="M 150 790 Q 158 794, 158 800 Q 156 804, 150 804"
          fill="none"
          stroke={shadow}
          strokeWidth="2"
          opacity="0.4"
        />
        {/* Shoe opening depth */}
        <ellipse cx="125" cy="790" rx="22" ry="6" fill={shadow} opacity="0.25" />
        {/* Toe point shape */}
        <path
          d="M 95 795 Q 88 798, 90 802"
          stroke={darkerColor}
          strokeWidth="2"
          fill="none"
        />
        {/* Top edge highlight */}
        <path
          d="M 100 788 Q 125 783, 150 788"
          stroke={highlight}
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        {/* Decorative bow */}
        <g transform="translate(110, 790)">
          {/* Bow loops */}
          <ellipse cx="-6" cy="0" rx="6" ry="4" fill="url(#balletBow)" />
          <ellipse cx="6" cy="0" rx="6" ry="4" fill="url(#balletBow)" />
          {/* Bow center knot */}
          <ellipse cx="0" cy="0" rx="3" ry="3" fill={darkerColor} />
          {/* Bow ribbons hanging */}
          <path d="M -2 3 Q -4 8, -6 10" stroke={darkerColor} strokeWidth="2" fill="none" />
          <path d="M 2 3 Q 4 8, 6 10" stroke={darkerColor} strokeWidth="2" fill="none" />
        </g>
      </g>

      {/* Right flat */}
      <g>
        {/* Sole shadow */}
        <ellipse cx="175" cy="800" rx="32" ry="5" fill="#333" opacity="0.2" />
        {/* Main shoe body with depth */}
        <path
          d="M 142 790
             Q 137 794, 138 800
             Q 140 804, 148 805
             L 200 805
             Q 210 804, 212 800
             Q 213 794, 205 790
             Q 195 785, 175 785
             Q 155 785, 142 790
             Z"
          fill="url(#balletBodyRight)"
        />
        {/* Heel cup - inner depth */}
        <path
          d="M 148 790 Q 140 794, 142 800 Q 144 804, 150 804"
          fill="none"
          stroke={shadow}
          strokeWidth="2"
          opacity="0.4"
        />
        {/* Shoe opening depth */}
        <ellipse cx="175" cy="790" rx="22" ry="6" fill={shadow} opacity="0.25" />
        {/* Toe point shape */}
        <path
          d="M 205 795 Q 212 798, 210 802"
          stroke={darkerColor}
          strokeWidth="2"
          fill="none"
        />
        {/* Top edge highlight */}
        <path
          d="M 150 788 Q 175 783, 200 788"
          stroke={highlight}
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        {/* Decorative bow */}
        <g transform="translate(190, 790)">
          {/* Bow loops */}
          <ellipse cx="-6" cy="0" rx="6" ry="4" fill="url(#balletBow)" />
          <ellipse cx="6" cy="0" rx="6" ry="4" fill="url(#balletBow)" />
          {/* Bow center knot */}
          <ellipse cx="0" cy="0" rx="3" ry="3" fill={darkerColor} />
          {/* Bow ribbons hanging */}
          <path d="M -2 3 Q -4 8, -6 10" stroke={darkerColor} strokeWidth="2" fill="none" />
          <path d="M 2 3 Q 4 8, 6 10" stroke={darkerColor} strokeWidth="2" fill="none" />
        </g>
      </g>
    </g>
  )
}

// ============================================================================
// 3. Boots - Enhanced with 3D depth and leather texture
// ============================================================================
export function Boots({ color = '#8B4513', className = '' }: ShoeProps) {
  const darkerColor = adjustColor(color, -35)
  const highlight = lightenColor(color, 25)
  const soleColor = '#1C1C1C'
  const soleMid = '#2C2C2C'

  return (
    <g className={className} data-item="boots">
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="bootBodyLeft" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={darkerColor} />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
        <linearGradient id="bootBodyRight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={darkerColor} />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
        <linearGradient id="bootSole" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={soleMid} />
          <stop offset="100%" stopColor={soleColor} />
        </linearGradient>
        <linearGradient id="bootHeel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3A3A3A" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
        <linearGradient id="metalBuckle" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8E8E8" />
          <stop offset="50%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#888888" />
        </linearGradient>
      </defs>

      {/* Left boot */}
      <g>
        {/* Boot shaft with 3D curve */}
        <path
          d="M 100 695
             Q 92 715, 92 745
             Q 92 775, 95 790
             L 95 795
             L 155 795
             L 155 790
             Q 158 775, 158 745
             Q 158 715, 152 695
             Q 140 688, 125 688
             Q 110 688, 100 695
             Z"
          fill="url(#bootBodyLeft)"
        />
        {/* Shaft inner shadow for depth */}
        <path
          d="M 95 700 Q 93 730, 93 760"
          stroke={darkerColor}
          strokeWidth="3"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M 155 700 Q 157 730, 157 760"
          stroke={darkerColor}
          strokeWidth="3"
          fill="none"
          opacity="0.5"
        />
        {/* Sole with visible thickness */}
        <path
          d="M 88 795 Q 85 800, 90 808 L 160 808 Q 165 800, 162 795 Z"
          fill="url(#bootSole)"
        />
        {/* Sole tread detail */}
        <path d="M 95 805 L 155 805" stroke="#0A0A0A" strokeWidth="1" />
        {/* Heel block with 3D shape */}
        <path
          d="M 142 795 L 160 795 L 162 808 L 165 818 L 142 818 L 140 808 Z"
          fill="url(#bootHeel)"
        />
        {/* Heel edge highlight */}
        <path d="M 142 795 L 142 818" stroke="#4A4A4A" strokeWidth="1" />
        {/* Toe box shape */}
        <path
          d="M 95 785 Q 88 790, 88 798"
          stroke={darkerColor}
          strokeWidth="2"
          fill="none"
        />
        {/* Leather strap with depth */}
        <path
          d="M 95 720 L 155 720 L 155 732 L 95 732 Z"
          fill={darkerColor}
        />
        {/* Strap highlight */}
        <path d="M 97 722 L 153 722" stroke={highlight} strokeWidth="1" opacity="0.4" />
        {/* Strap shadow */}
        <path d="M 97 730 L 153 730" stroke="#000" strokeWidth="1" opacity="0.3" />
        {/* 3D Buckle */}
        <rect x="118" y="716" width="16" height="20" rx="2" fill="url(#metalBuckle)" />
        <rect x="121" y="720" width="10" height="12" rx="1" fill={darkerColor} />
        <path d="M 126 720 L 126 732" stroke="#D0D0D0" strokeWidth="2" />
        {/* Buckle highlight */}
        <path d="M 119 717 L 133 717" stroke="white" strokeWidth="1" opacity="0.5" />
        {/* Top trim with fold */}
        <path
          d="M 98 695 Q 125 688, 152 695"
          fill="none"
          stroke={darkerColor}
          strokeWidth="5"
        />
        <path
          d="M 100 693 Q 125 686, 150 693"
          fill="none"
          stroke={highlight}
          strokeWidth="1.5"
          opacity="0.3"
        />
        {/* Opening depth */}
        <ellipse cx="125" cy="693" rx="20" ry="5" fill={darkerColor} opacity="0.4" />
        {/* Leather texture lines */}
        <path d="M 105 740 Q 110 755, 105 770" stroke={darkerColor} strokeWidth="0.5" opacity="0.3" />
        <path d="M 145 740 Q 140 755, 145 770" stroke={darkerColor} strokeWidth="0.5" opacity="0.3" />
      </g>

      {/* Right boot */}
      <g>
        {/* Boot shaft with 3D curve */}
        <path
          d="M 148 695
             Q 142 715, 142 745
             Q 142 775, 145 790
             L 145 795
             L 205 795
             L 205 790
             Q 208 775, 208 745
             Q 208 715, 200 695
             Q 190 688, 175 688
             Q 160 688, 148 695
             Z"
          fill="url(#bootBodyRight)"
        />
        {/* Shaft inner shadow for depth */}
        <path
          d="M 145 700 Q 143 730, 143 760"
          stroke={darkerColor}
          strokeWidth="3"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M 205 700 Q 207 730, 207 760"
          stroke={darkerColor}
          strokeWidth="3"
          fill="none"
          opacity="0.5"
        />
        {/* Sole with visible thickness */}
        <path
          d="M 138 795 Q 135 800, 140 808 L 210 808 Q 215 800, 212 795 Z"
          fill="url(#bootSole)"
        />
        {/* Sole tread detail */}
        <path d="M 145 805 L 205 805" stroke="#0A0A0A" strokeWidth="1" />
        {/* Heel block with 3D shape */}
        <path
          d="M 140 795 L 158 795 L 160 808 L 158 818 L 135 818 L 138 808 Z"
          fill="url(#bootHeel)"
        />
        {/* Heel edge highlight */}
        <path d="M 158 795 L 158 818" stroke="#4A4A4A" strokeWidth="1" />
        {/* Toe box shape */}
        <path
          d="M 205 785 Q 212 790, 212 798"
          stroke={darkerColor}
          strokeWidth="2"
          fill="none"
        />
        {/* Leather strap with depth */}
        <path
          d="M 145 720 L 205 720 L 205 732 L 145 732 Z"
          fill={darkerColor}
        />
        {/* Strap highlight */}
        <path d="M 147 722 L 203 722" stroke={highlight} strokeWidth="1" opacity="0.4" />
        {/* Strap shadow */}
        <path d="M 147 730 L 203 730" stroke="#000" strokeWidth="1" opacity="0.3" />
        {/* 3D Buckle */}
        <rect x="166" y="716" width="16" height="20" rx="2" fill="url(#metalBuckle)" />
        <rect x="169" y="720" width="10" height="12" rx="1" fill={darkerColor} />
        <path d="M 174 720 L 174 732" stroke="#D0D0D0" strokeWidth="2" />
        {/* Buckle highlight */}
        <path d="M 167 717 L 181 717" stroke="white" strokeWidth="1" opacity="0.5" />
        {/* Top trim with fold */}
        <path
          d="M 148 695 Q 175 688, 200 695"
          fill="none"
          stroke={darkerColor}
          strokeWidth="5"
        />
        <path
          d="M 150 693 Q 175 686, 198 693"
          fill="none"
          stroke={highlight}
          strokeWidth="1.5"
          opacity="0.3"
        />
        {/* Opening depth */}
        <ellipse cx="175" cy="693" rx="20" ry="5" fill={darkerColor} opacity="0.4" />
        {/* Leather texture lines */}
        <path d="M 155 740 Q 160 755, 155 770" stroke={darkerColor} strokeWidth="0.5" opacity="0.3" />
        <path d="M 195 740 Q 190 755, 195 770" stroke={darkerColor} strokeWidth="0.5" opacity="0.3" />
      </g>
    </g>
  )
}

// ============================================================================
// 4. Sandals - Enhanced with 3D straps and sole
// ============================================================================
export function Sandals({ color = '#D4A574', className = '' }: ShoeProps) {
  const strapColor = adjustColor(color, -20)
  const strapDark = adjustColor(color, -40)
  const strapHighlight = lightenColor(color, 20)
  const soleDark = adjustColor(color, -30)

  return (
    <g className={className} data-item="sandals">
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="sandalSole" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={soleDark} />
        </linearGradient>
        <linearGradient id="sandalStrap" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={strapHighlight} />
          <stop offset="50%" stopColor={strapColor} />
          <stop offset="100%" stopColor={strapDark} />
        </linearGradient>
        <linearGradient id="sandalBuckle" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8E8E8" />
          <stop offset="50%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#909090" />
        </linearGradient>
      </defs>

      {/* Left sandal */}
      <g>
        {/* Sole shadow */}
        <ellipse cx="125" cy="802" rx="32" ry="4" fill="#333" opacity="0.3" />
        {/* Main sole with edge thickness */}
        <path
          d="M 95 790
             Q 88 794, 90 800
             L 160 800
             Q 165 794, 158 790
             Q 145 786, 125 786
             Q 105 786, 95 790
             Z"
          fill="url(#sandalSole)"
        />
        {/* Sole edge visible */}
        <path
          d="M 90 800 Q 88 804, 92 806 L 158 806 Q 162 804, 160 800"
          fill={soleDark}
        />
        {/* Sole texture pattern */}
        <path d="M 100 795 L 150 795" stroke={strapDark} strokeWidth="0.5" opacity="0.3" />
        {/* Toe strap with 3D volume */}
        <path
          d="M 108 788
             Q 92 794, 108 802"
          fill="none"
          stroke="url(#sandalStrap)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* Toe strap highlight */}
        <path
          d="M 106 790 Q 94 795, 106 800"
          fill="none"
          stroke={strapHighlight}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.4"
        />
        {/* Cross strap with 3D */}
        <path
          d="M 100 785 Q 125 798, 150 785"
          fill="none"
          stroke="url(#sandalStrap)"
          strokeWidth="7"
          strokeLinecap="round"
        />
        {/* Cross strap highlight */}
        <path
          d="M 103 784 Q 125 795, 147 784"
          fill="none"
          stroke={strapHighlight}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />
        {/* Ankle strap */}
        <path
          d="M 148 792 Q 160 780, 148 768"
          fill="none"
          stroke="url(#sandalStrap)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Ankle strap highlight */}
        <path
          d="M 146 790 Q 156 780, 146 770"
          fill="none"
          stroke={strapHighlight}
          strokeWidth="1.5"
          opacity="0.4"
        />
        {/* 3D Buckle */}
        <ellipse cx="152" cy="772" rx="6" ry="5" fill="url(#sandalBuckle)" />
        <ellipse cx="152" cy="772" rx="3" ry="2.5" fill={strapDark} />
        {/* Buckle highlight */}
        <ellipse cx="150" cy="770" rx="2" ry="1.5" fill="white" opacity="0.4" />
      </g>

      {/* Right sandal */}
      <g>
        {/* Sole shadow */}
        <ellipse cx="175" cy="802" rx="32" ry="4" fill="#333" opacity="0.3" />
        {/* Main sole with edge thickness */}
        <path
          d="M 142 790
             Q 135 794, 140 800
             L 210 800
             Q 215 794, 205 790
             Q 195 786, 175 786
             Q 155 786, 142 790
             Z"
          fill="url(#sandalSole)"
        />
        {/* Sole edge visible */}
        <path
          d="M 140 800 Q 138 804, 142 806 L 208 806 Q 212 804, 210 800"
          fill={soleDark}
        />
        {/* Sole texture pattern */}
        <path d="M 150 795 L 200 795" stroke={strapDark} strokeWidth="0.5" opacity="0.3" />
        {/* Toe strap with 3D volume */}
        <path
          d="M 192 788
             Q 208 794, 192 802"
          fill="none"
          stroke="url(#sandalStrap)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* Toe strap highlight */}
        <path
          d="M 194 790 Q 206 795, 194 800"
          fill="none"
          stroke={strapHighlight}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.4"
        />
        {/* Cross strap with 3D */}
        <path
          d="M 150 785 Q 175 798, 200 785"
          fill="none"
          stroke="url(#sandalStrap)"
          strokeWidth="7"
          strokeLinecap="round"
        />
        {/* Cross strap highlight */}
        <path
          d="M 153 784 Q 175 795, 197 784"
          fill="none"
          stroke={strapHighlight}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />
        {/* Ankle strap */}
        <path
          d="M 152 792 Q 140 780, 152 768"
          fill="none"
          stroke="url(#sandalStrap)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Ankle strap highlight */}
        <path
          d="M 154 790 Q 144 780, 154 770"
          fill="none"
          stroke={strapHighlight}
          strokeWidth="1.5"
          opacity="0.4"
        />
        {/* 3D Buckle */}
        <ellipse cx="148" cy="772" rx="6" ry="5" fill="url(#sandalBuckle)" />
        <ellipse cx="148" cy="772" rx="3" ry="2.5" fill={strapDark} />
        {/* Buckle highlight */}
        <ellipse cx="146" cy="770" rx="2" ry="1.5" fill="white" opacity="0.4" />
      </g>
    </g>
  )
}

// ============================================================================
// 5. High Heels - Front-Facing Elegant Pumps
// ============================================================================
export function HighHeels({ color = '#C0392B', className = '' }: ShoeProps) {
  const darkerColor = adjustColor(color, -35)
  const highlight = lightenColor(color, 30)
  const shadow = adjustColor(color, -50)
  const insideColor = adjustColor(color, -60)

  return (
    <g className={className} data-item="high-heels">
      {/* Gradient definitions */}
      <defs>
        {/* Left shoe gradient - light from upper left */}
        <linearGradient id="heelBodyLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="35%" stopColor={color} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
        {/* Right shoe gradient - light from upper right */}
        <linearGradient id="heelBodyRight" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="35%" stopColor={color} />
          <stop offset="100%" stopColor={darkerColor} />
        </linearGradient>
        {/* Toe box top gradient for 3D curve */}
        <radialGradient id="toeTopLeft" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="60%" stopColor={color} />
          <stop offset="100%" stopColor={darkerColor} />
        </radialGradient>
        <radialGradient id="toeTopRight" cx="70%" cy="30%" r="70%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="60%" stopColor={color} />
          <stop offset="100%" stopColor={darkerColor} />
        </radialGradient>
        {/* Inner shoe depth */}
        <linearGradient id="heelInner" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={insideColor} />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
        {/* Sole gradient */}
        <linearGradient id="heelSole" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3A3A3A" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
        {/* Stiletto heel gradient */}
        <linearGradient id="stilettoLeft" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={darkerColor} />
          <stop offset="50%" stopColor={shadow} />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
        <linearGradient id="stilettoRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={darkerColor} />
          <stop offset="50%" stopColor={shadow} />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
      </defs>

      {/* ===== LEFT HEEL (front-facing, slightly angled outward) ===== */}
      <g>
        {/* Ground shadow */}
        <ellipse cx="125" cy="820" rx="22" ry="4" fill="#333" opacity="0.35" />

        {/* Stiletto heel - behind foot, only tip visible */}
        <path
          d="M 108 800
             L 104 818
             Q 104 822, 108 822
             L 114 822
             Q 118 822, 118 818
             L 116 800
             Z"
          fill="url(#stilettoLeft)"
        />
        {/* Heel tip */}
        <rect x="105" y="820" width="12" height="4" rx="1" fill="#1A1A1A" />

        {/* Main shoe body - front-facing pump shape */}
        {/* This creates the vamp (top of foot coverage) seen from front */}
        <path
          d="M 100 770
             Q 95 775, 95 782
             Q 95 790, 100 796
             L 100 800
             L 145 800
             L 145 796
             Q 150 790, 150 782
             Q 150 775, 145 770
             Q 135 764, 122 764
             Q 108 764, 100 770
             Z"
          fill="url(#heelBodyLeft)"
        />

        {/* Toe box - rounded front facing toward viewer */}
        <ellipse cx="122" cy="800" rx="24" ry="10" fill="url(#toeTopLeft)" />

        {/* Toe box front edge (slight 3D lip) */}
        <path
          d="M 98 800
             Q 98 808, 108 812
             Q 122 816, 136 812
             Q 146 808, 146 800"
          fill="none"
          stroke={darkerColor}
          strokeWidth="2"
        />

        {/* Inner foot opening - V-shape of pump */}
        <path
          d="M 108 772
             Q 122 768, 136 772
             L 130 780
             Q 122 776, 114 780
             Z"
          fill="url(#heelInner)"
        />

        {/* Opening edge highlight */}
        <path
          d="M 110 773 Q 122 769, 134 773"
          stroke={highlight}
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />

        {/* Top highlight across vamp */}
        <path
          d="M 105 778 Q 122 774, 140 778"
          stroke={highlight}
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />

        {/* Toe box highlight - 3D roundness */}
        <ellipse cx="118" cy="798" rx="8" ry="4" fill={highlight} opacity="0.25" />

        {/* Subtle seam detail on vamp */}
        <path
          d="M 122 780 L 122 795"
          stroke={darkerColor}
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />

        {/* Inner arch shadow (foot inside) */}
        <path
          d="M 105 790 Q 122 794, 140 790"
          stroke={shadow}
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />
      </g>

      {/* ===== RIGHT HEEL (front-facing, slightly angled outward) ===== */}
      <g>
        {/* Ground shadow */}
        <ellipse cx="175" cy="820" rx="22" ry="4" fill="#333" opacity="0.35" />

        {/* Stiletto heel - behind foot, only tip visible */}
        <path
          d="M 182 800
             L 184 818
             Q 184 822, 188 822
             L 194 822
             Q 198 822, 196 818
             L 192 800
             Z"
          fill="url(#stilettoRight)"
        />
        {/* Heel tip */}
        <rect x="183" y="820" width="12" height="4" rx="1" fill="#1A1A1A" />

        {/* Main shoe body - front-facing pump shape */}
        <path
          d="M 155 770
             Q 150 775, 150 782
             Q 150 790, 155 796
             L 155 800
             L 200 800
             L 200 796
             Q 205 790, 205 782
             Q 205 775, 200 770
             Q 190 764, 177 764
             Q 163 764, 155 770
             Z"
          fill="url(#heelBodyRight)"
        />

        {/* Toe box - rounded front facing toward viewer */}
        <ellipse cx="177" cy="800" rx="24" ry="10" fill="url(#toeTopRight)" />

        {/* Toe box front edge (slight 3D lip) */}
        <path
          d="M 153 800
             Q 153 808, 163 812
             Q 177 816, 191 812
             Q 201 808, 201 800"
          fill="none"
          stroke={darkerColor}
          strokeWidth="2"
        />

        {/* Inner foot opening - V-shape of pump */}
        <path
          d="M 163 772
             Q 177 768, 191 772
             L 185 780
             Q 177 776, 169 780
             Z"
          fill="url(#heelInner)"
        />

        {/* Opening edge highlight */}
        <path
          d="M 165 773 Q 177 769, 189 773"
          stroke={highlight}
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />

        {/* Top highlight across vamp */}
        <path
          d="M 160 778 Q 177 774, 195 778"
          stroke={highlight}
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />

        {/* Toe box highlight - 3D roundness */}
        <ellipse cx="182" cy="798" rx="8" ry="4" fill={highlight} opacity="0.25" />

        {/* Subtle seam detail on vamp */}
        <path
          d="M 177 780 L 177 795"
          stroke={darkerColor}
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />

        {/* Inner arch shadow (foot inside) */}
        <path
          d="M 160 790 Q 177 794, 195 790"
          stroke={shadow}
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />
      </g>
    </g>
  )
}

// ============================================================================
// Helper functions
// ============================================================================
function adjustColor(hex: string, amount: number): string {
  const num = parseInt(hex.replace('#', ''), 16)
  const r = Math.min(255, Math.max(0, (num >> 16) + amount))
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amount))
  const b = Math.min(255, Math.max(0, (num & 0x0000FF) + amount))
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
}

function lightenColor(hex: string, amount: number): string {
  return adjustColor(hex, amount)
}

// ============================================================================
// Thumbnail Versions (50x50 viewBox) - Updated with 3D appearance
// ============================================================================

export function SneakersThumbnail({ color = '#FFFFFF' }: { color?: string }) {
  const shadow = adjustColor(color, -30)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <defs>
        <linearGradient id="sneakerThumbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={lightenColor(color, 30)} />
          <stop offset="100%" stopColor={shadow} />
        </linearGradient>
      </defs>
      <path d="M 5 30 Q 3 38, 8 42 L 45 42 Q 48 38, 45 32 Q 38 26, 25 26 Q 10 26, 5 30 Z" fill="url(#sneakerThumbGrad)" />
      <path d="M 5 42 L 45 42 L 47 47 L 3 47 Z" fill="#C0C0C0" />
      <path d="M 8 38 Q 6 40, 8 44 L 18 44 Q 15 40, 10 38 Z" fill="#E8E8E8" />
      <path d="M 12 32 Q 25 30, 38 34" fill="none" stroke="#333" strokeWidth="2.5" />
      <circle cx="20" cy="30" r="1.5" fill="#333" />
      <circle cx="28" cy="30" r="1.5" fill="#333" />
      <line x1="20" y1="30" x2="28" y2="30" stroke="white" strokeWidth="1.5" />
    </svg>
  )
}

export function BalletFlatsThumbnail({ color = '#FF69B4' }: { color?: string }) {
  const dark = adjustColor(color, -30)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <defs>
        <linearGradient id="balletThumbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={lightenColor(color, 25)} />
          <stop offset="100%" stopColor={dark} />
        </linearGradient>
      </defs>
      <ellipse cx="25" cy="38" rx="20" ry="3" fill="#333" opacity="0.2" />
      <path d="M 5 32 Q 3 36, 8 40 L 45 40 Q 50 36, 45 32 Q 35 28, 25 28 Q 15 28, 5 32 Z" fill="url(#balletThumbGrad)" />
      <ellipse cx="25" cy="32" rx="12" ry="4" fill={dark} opacity="0.3" />
      <ellipse cx="18" cy="32" rx="4" ry="2.5" fill={dark} />
      <ellipse cx="24" cy="32" rx="4" ry="2.5" fill={dark} />
      <ellipse cx="21" cy="32" rx="2" ry="2" fill={adjustColor(color, -50)} />
    </svg>
  )
}

export function BootsThumbnail({ color = '#8B4513' }: { color?: string }) {
  const dark = adjustColor(color, -25)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <defs>
        <linearGradient id="bootThumbGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={dark} />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={dark} />
        </linearGradient>
      </defs>
      <path d="M 10 8 Q 8 22, 10 38 L 40 38 Q 42 22, 40 8 Q 30 5, 25 5 Q 15 5, 10 8 Z" fill="url(#bootThumbGrad)" />
      <rect x="8" y="40" width="34" height="6" rx="2" fill="#2C2C2C" />
      <rect x="35" y="38" width="8" height="10" rx="1" fill="#1A1A1A" />
      <rect x="8" y="18" width="34" height="6" rx="2" fill={dark} />
      <rect x="18" y="16" width="10" height="10" rx="1" fill="#C0C0C0" />
      <rect x="21" y="19" width="4" height="4" rx="0.5" fill={dark} />
      <ellipse cx="25" cy="8" rx="12" ry="3" fill={dark} opacity="0.4" />
    </svg>
  )
}

export function SandalsThumbnail({ color = '#D4A574' }: { color?: string }) {
  const strap = adjustColor(color, -20)
  const dark = adjustColor(color, -40)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <defs>
        <linearGradient id="sandalThumbGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={dark} />
        </linearGradient>
        <linearGradient id="sandalStrapThumb" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={lightenColor(strap, 15)} />
          <stop offset="100%" stopColor={dark} />
        </linearGradient>
      </defs>
      <ellipse cx="25" cy="42" rx="20" ry="3" fill="#333" opacity="0.2" />
      <path d="M 5 35 Q 3 38, 8 42 L 45 42 Q 50 38, 45 35 Q 35 32, 25 32 Q 15 32, 5 35 Z" fill="url(#sandalThumbGrad)" />
      <path d="M 8 42 Q 6 44, 10 46 L 42 46 Q 46 44, 44 42" fill={dark} />
      <path d="M 15 34 Q 8 38, 15 42" fill="none" stroke="url(#sandalStrapThumb)" strokeWidth="5" strokeLinecap="round" />
      <path d="M 10 33 Q 25 42, 40 33" fill="none" stroke="url(#sandalStrapThumb)" strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="42" cy="30" rx="4" ry="3" fill="#C0C0C0" />
      <ellipse cx="42" cy="30" rx="2" ry="1.5" fill={dark} />
    </svg>
  )
}

export function HighHeelsThumbnail({ color = '#C0392B' }: { color?: string }) {
  const dark = adjustColor(color, -35)
  const highlight = lightenColor(color, 25)
  const shadow = adjustColor(color, -50)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <defs>
        {/* Radial gradient for 3D toe box */}
        <radialGradient id="heelThumbToe" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="60%" stopColor={color} />
          <stop offset="100%" stopColor={dark} />
        </radialGradient>
        <linearGradient id="heelThumbBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="40%" stopColor={color} />
          <stop offset="100%" stopColor={dark} />
        </linearGradient>
        <linearGradient id="heelThumbInner" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={shadow} />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
      </defs>
      {/* Ground shadow */}
      <ellipse cx="25" cy="46" rx="16" ry="3" fill="#333" opacity="0.3" />
      {/* Stiletto heel - behind, only tip visible */}
      <path d="M 20 38 L 18 44 Q 18 46, 21 46 L 26 46 Q 29 46, 28 44 L 27 38 Z" fill={shadow} />
      <rect x="19" y="45" width="9" height="3" rx="1" fill="#1A1A1A" />
      {/* Main shoe body - front-facing vamp */}
      <path d="M 10 22 Q 6 26, 6 32 Q 6 36, 10 38 L 40 38 Q 44 36, 44 32 Q 44 26, 40 22 Q 32 17, 25 17 Q 17 17, 10 22 Z" fill="url(#heelThumbBody)" />
      {/* Toe box - rounded front facing */}
      <ellipse cx="25" cy="38" rx="16" ry="6" fill="url(#heelThumbToe)" />
      {/* Toe edge */}
      <path d="M 9 38 Q 9 43, 16 45 Q 25 47, 34 45 Q 41 43, 41 38" fill="none" stroke={dark} strokeWidth="1.5" />
      {/* Inner V-opening */}
      <path d="M 16 21 Q 25 18, 34 21 L 30 27 Q 25 24, 20 27 Z" fill="url(#heelThumbInner)" />
      {/* Top highlight */}
      <path d="M 12 25 Q 25 21, 38 25" stroke={highlight} strokeWidth="1.5" fill="none" opacity="0.5" />
      {/* Toe highlight */}
      <ellipse cx="22" cy="36" rx="5" ry="2.5" fill={highlight} opacity="0.25" />
    </svg>
  )
}

const Shoes = {
  Sneakers,
  BalletFlats,
  Boots,
  Sandals,
  HighHeels,
}

export default Shoes
