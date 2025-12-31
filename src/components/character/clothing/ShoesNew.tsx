'use client'

/**
 * New Shoe SVG Components
 * ViewBox: 300x800
 * Feet: y=740 to y=780
 * Left foot center: x=120, Right foot center: x=180
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

export function MaryJanes({ color = '#1a1a1a', className = '' }: ShoeProps) {
  const darkerColor = adjustColor(color, -30)
  const lighterColor = adjustColor(color, 40)

  return (
    <g className={className}>
      {/* Left Mary Jane */}
      <g>
        {/* Shoe body */}
        <path
          d="M 95 760 Q 90 745, 100 740 Q 120 735, 140 745 Q 145 755, 140 770 Q 130 780, 110 780 Q 95 778, 95 760 Z"
          fill={color}
        />
        {/* Patent leather shine */}
        <ellipse cx="115" cy="755" rx="12" ry="6" fill={lighterColor} opacity="0.35" />
        {/* Toe cap line */}
        <path d="M 100 755 Q 115 748, 130 755" fill="none" stroke={darkerColor} strokeWidth="1.5" opacity="0.4" />
        {/* Strap */}
        <path d="M 105 752 Q 120 745, 135 752" fill="none" stroke={color} strokeWidth="5" />
        <path d="M 105 752 Q 120 745, 135 752" fill="none" stroke={darkerColor} strokeWidth="2" />
        {/* Button */}
        <circle cx="133" cy="750" r="3" fill={lighterColor} />
        <circle cx="132" cy="749" r="1" fill="white" opacity="0.5" />
        {/* Sole */}
        <path d="M 95 775 Q 90 780, 100 782 Q 120 785, 140 780 L 145 773" fill="none" stroke={darkerColor} strokeWidth="3" />
      </g>

      {/* Right Mary Jane */}
      <g>
        {/* Shoe body */}
        <path
          d="M 205 760 Q 210 745, 200 740 Q 180 735, 160 745 Q 155 755, 160 770 Q 170 780, 190 780 Q 205 778, 205 760 Z"
          fill={color}
        />
        {/* Patent leather shine */}
        <ellipse cx="185" cy="755" rx="12" ry="6" fill={lighterColor} opacity="0.35" />
        {/* Toe cap line */}
        <path d="M 200 755 Q 185 748, 170 755" fill="none" stroke={darkerColor} strokeWidth="1.5" opacity="0.4" />
        {/* Strap */}
        <path d="M 195 752 Q 180 745, 165 752" fill="none" stroke={color} strokeWidth="5" />
        <path d="M 195 752 Q 180 745, 165 752" fill="none" stroke={darkerColor} strokeWidth="2" />
        {/* Button */}
        <circle cx="167" cy="750" r="3" fill={lighterColor} />
        <circle cx="166" cy="749" r="1" fill="white" opacity="0.5" />
        {/* Sole */}
        <path d="M 205 775 Q 210 780, 200 782 Q 180 785, 160 780 L 155 773" fill="none" stroke={darkerColor} strokeWidth="3" />
      </g>
    </g>
  )
}

export function RainBoots({ color = '#FFD700', className = '' }: ShoeProps) {
  const darkerColor = adjustColor(color, -40)
  const lighterColor = adjustColor(color, 50)

  return (
    <g className={className}>
      {/* Left Rain Boot */}
      <g>
        {/* Boot shaft */}
        <path
          d="M 100 650 Q 95 680, 95 710 Q 95 740, 100 760 Q 95 775, 105 780 Q 125 785, 145 775 Q 148 760, 145 740 Q 148 700, 145 665 Q 140 650, 122 648 Q 105 648, 100 650 Z"
          fill={color}
        />
        {/* Glossy highlight */}
        <path
          d="M 105 660 Q 100 700, 102 745"
          fill="none"
          stroke={lighterColor}
          strokeWidth="8"
          opacity="0.4"
          strokeLinecap="round"
        />
        {/* Top rim */}
        <ellipse cx="122" cy="650" rx="22" ry="6" fill={darkerColor} opacity="0.5" />
        {/* Sole separation line */}
        <path d="M 98 765 Q 120 775, 145 768" fill="none" stroke={darkerColor} strokeWidth="2" />
        {/* Toe bump */}
        <ellipse cx="120" cy="778" rx="18" ry="6" fill={darkerColor} opacity="0.3" />
      </g>

      {/* Right Rain Boot */}
      <g>
        {/* Boot shaft */}
        <path
          d="M 200 650 Q 205 680, 205 710 Q 205 740, 200 760 Q 205 775, 195 780 Q 175 785, 155 775 Q 152 760, 155 740 Q 152 700, 155 665 Q 160 650, 178 648 Q 195 648, 200 650 Z"
          fill={color}
        />
        {/* Glossy highlight */}
        <path
          d="M 195 660 Q 200 700, 198 745"
          fill="none"
          stroke={lighterColor}
          strokeWidth="8"
          opacity="0.4"
          strokeLinecap="round"
        />
        {/* Top rim */}
        <ellipse cx="178" cy="650" rx="22" ry="6" fill={darkerColor} opacity="0.5" />
        {/* Sole separation line */}
        <path d="M 202 765 Q 180 775, 155 768" fill="none" stroke={darkerColor} strokeWidth="2" />
        {/* Toe bump */}
        <ellipse cx="180" cy="778" rx="18" ry="6" fill={darkerColor} opacity="0.3" />
      </g>
    </g>
  )
}

export function Loafers({ color = '#8B4513', className = '' }: ShoeProps) {
  const darkerColor = adjustColor(color, -35)
  const lighterColor = adjustColor(color, 25)

  return (
    <g className={className}>
      {/* Left Loafer */}
      <g>
        {/* Shoe body */}
        <path
          d="M 92 755 Q 88 745, 100 738 Q 120 732, 142 742 Q 148 752, 145 765 Q 135 778, 115 780 Q 95 778, 92 755 Z"
          fill={color}
        />
        {/* Moccasin stitching */}
        <path
          d="M 105 745 Q 118 738, 132 745"
          fill="none"
          stroke={darkerColor}
          strokeWidth="1.5"
          strokeDasharray="3,2"
          opacity="0.6"
        />
        {/* Penny slot */}
        <rect x="113" y="750" width="10" height="4" rx="1" fill={darkerColor} />
        <rect x="115" y="751" width="6" height="2" rx="0.5" fill={lighterColor} opacity="0.4" />
        {/* Leather fold shadow */}
        <path d="M 100 760 Q 118 765, 138 760" fill="none" stroke={darkerColor} strokeWidth="1" opacity="0.3" />
        {/* Heel */}
        <path d="M 92 765 Q 88 775, 98 780 Q 108 782, 118 780" fill={darkerColor} opacity="0.5" />
        {/* Top opening */}
        <ellipse cx="118" cy="742" rx="14" ry="5" fill={darkerColor} opacity="0.4" />
        {/* Highlight */}
        <ellipse cx="115" cy="755" rx="8" ry="4" fill={lighterColor} opacity="0.2" />
      </g>

      {/* Right Loafer */}
      <g>
        {/* Shoe body */}
        <path
          d="M 208 755 Q 212 745, 200 738 Q 180 732, 158 742 Q 152 752, 155 765 Q 165 778, 185 780 Q 205 778, 208 755 Z"
          fill={color}
        />
        {/* Moccasin stitching */}
        <path
          d="M 195 745 Q 182 738, 168 745"
          fill="none"
          stroke={darkerColor}
          strokeWidth="1.5"
          strokeDasharray="3,2"
          opacity="0.6"
        />
        {/* Penny slot */}
        <rect x="177" y="750" width="10" height="4" rx="1" fill={darkerColor} />
        <rect x="179" y="751" width="6" height="2" rx="0.5" fill={lighterColor} opacity="0.4" />
        {/* Leather fold shadow */}
        <path d="M 200 760 Q 182 765, 162 760" fill="none" stroke={darkerColor} strokeWidth="1" opacity="0.3" />
        {/* Heel */}
        <path d="M 208 765 Q 212 775, 202 780 Q 192 782, 182 780" fill={darkerColor} opacity="0.5" />
        {/* Top opening */}
        <ellipse cx="182" cy="742" rx="14" ry="5" fill={darkerColor} opacity="0.4" />
        {/* Highlight */}
        <ellipse cx="185" cy="755" rx="8" ry="4" fill={lighterColor} opacity="0.2" />
      </g>
    </g>
  )
}

// Thumbnails
export function MaryJanesThumbnail({ color = '#1a1a1a' }: { color?: string }) {
  const lighterColor = adjustColor(color, 40)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <path d="M 10 35 Q 8 28, 15 25 Q 25 22, 35 28 Q 38 35, 35 42 Q 28 48, 18 48 Q 10 46, 10 35 Z" fill={color} />
      <ellipse cx="22" cy="32" rx="8" ry="4" fill={lighterColor} opacity="0.35" />
      <path d="M 15 33 Q 23 28, 32 33" fill="none" stroke={color} strokeWidth="3" />
      <circle cx="30" cy="31" r="2" fill={lighterColor} />
    </svg>
  )
}

export function RainBootsThumbnail({ color = '#FFD700' }: { color?: string }) {
  const darkerColor = adjustColor(color, -40)
  const lighterColor = adjustColor(color, 50)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <path d="M 15 8 Q 12 20, 12 32 Q 10 42, 18 46 Q 30 48, 38 42 Q 40 32, 38 20 Q 36 8, 26 6 Q 18 6, 15 8 Z" fill={color} />
      <path d="M 16 12 Q 14 25, 15 38" fill="none" stroke={lighterColor} strokeWidth="4" opacity="0.4" strokeLinecap="round" />
      <ellipse cx="26" cy="8" rx="10" ry="3" fill={darkerColor} opacity="0.5" />
    </svg>
  )
}

export function LoafersThumbnail({ color = '#8B4513' }: { color?: string }) {
  const darkerColor = adjustColor(color, -35)
  const lighterColor = adjustColor(color, 25)
  return (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <path d="M 8 32 Q 5 25, 15 20 Q 25 16, 38 22 Q 44 30, 42 40 Q 34 48, 20 48 Q 8 46, 8 32 Z" fill={color} />
      <path d="M 18 26 Q 26 21, 35 26" fill="none" stroke={darkerColor} strokeWidth="1" strokeDasharray="2,1" opacity="0.6" />
      <rect x="22" y="30" width="6" height="3" rx="1" fill={darkerColor} />
      <ellipse cx="25" cy="23" rx="8" ry="3" fill={darkerColor} opacity="0.4" />
      <ellipse cx="24" cy="34" rx="5" ry="2" fill={lighterColor} opacity="0.2" />
    </svg>
  )
}

export default { MaryJanes, RainBoots, Loafers }
