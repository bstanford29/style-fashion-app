'use client'

import { CharacterBase } from './CharacterBase'
import {
  LongStraightHair,
  ShortBobHair,
  PonytailHair,
  CurlyWavyHair,
  BraidsHair,
} from './clothing/HairStyles'
import {
  BasicTShirt,
  TankTop,
  LongSleeveShirt,
  CropTop,
  Hoodie,
} from './clothing/Tops'
import {
  Jeans,
  Skirt,
  Shorts,
  Leggings,
  PleatedSkirt,
} from './clothing/Bottoms'
import {
  Sneakers,
  BalletFlats,
  Boots,
  Sandals,
  HighHeels,
} from './clothing/Shoes'
import {
  BowHeadband,
  Necklace,
  Sunglasses,
  Earrings,
  Hat,
} from './clothing/Accessories'

export interface EquippedItems {
  hair: string | null
  top: string | null
  bottom: string | null
  shoes: string | null
  accessory: string | null
}

export interface SVGCharacterProps {
  /** Skin tone ID - skin01 through skin05 */
  skinTone: string
  /** Currently equipped items by category */
  equippedItems: EquippedItems
  /** Optional className for the container */
  className?: string
  /** Whether equip animation should play */
  animate?: boolean
}

/** Map item IDs to their SVG components */
const HAIR_COMPONENTS: Record<string, React.ComponentType<{ color?: string; className?: string }>> = {
  hair_001: LongStraightHair,
  hair_002: ShortBobHair,
  hair_003: PonytailHair,
  hair_004: CurlyWavyHair,
  hair_005: BraidsHair,
}

const TOP_COMPONENTS: Record<string, React.ComponentType<{ color?: string; className?: string }>> = {
  top_001: BasicTShirt,
  top_002: TankTop,
  top_003: LongSleeveShirt,
  top_004: CropTop,
  top_005: Hoodie,
}

const BOTTOM_COMPONENTS: Record<string, React.ComponentType<{ color?: string; className?: string }>> = {
  bottom_001: Jeans,
  bottom_002: Skirt,
  bottom_003: Shorts,
  bottom_004: Leggings,
  bottom_005: PleatedSkirt,
}

const SHOES_COMPONENTS: Record<string, React.ComponentType<{ color?: string; className?: string }>> = {
  shoes_001: Sneakers,
  shoes_002: BalletFlats,
  shoes_003: Boots,
  shoes_004: Sandals,
  shoes_005: HighHeels,
}

const ACCESSORY_COMPONENTS: Record<string, React.ComponentType<{ color?: string; className?: string }>> = {
  accessory_001: BowHeadband,
  accessory_002: Necklace,
  accessory_003: Sunglasses,
  accessory_004: Earrings,
  accessory_005: Hat,
}

export function SVGCharacter({
  skinTone,
  equippedItems,
  className = '',
  animate = true,
}: SVGCharacterProps) {
  // Get component references for equipped items
  const HairComponent = equippedItems.hair ? HAIR_COMPONENTS[equippedItems.hair] : null
  const TopComponent = equippedItems.top ? TOP_COMPONENTS[equippedItems.top] : null
  const BottomComponent = equippedItems.bottom ? BOTTOM_COMPONENTS[equippedItems.bottom] : null
  const ShoesComponent = equippedItems.shoes ? SHOES_COMPONENTS[equippedItems.shoes] : null
  const AccessoryComponent = equippedItems.accessory ? ACCESSORY_COMPONENTS[equippedItems.accessory] : null

  const animationClass = animate ? 'animate-equip' : ''

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Main SVG Container - all layers rendered in order */}
      <svg
        viewBox="0 0 300 800"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        aria-label="Dressed character"
      >
        {/* Layer 1: Hair Back (behind everything) */}
        {HairComponent && (
          <g className={animationClass} data-layer="hair-back">
            {/* Hair back layer would go here if component supports it */}
          </g>
        )}

        {/* Layer 2: Character Base Body */}
        <g data-layer="body">
          <CharacterBase skinTone={skinTone} />
        </g>

        {/* Layer 3: Bottoms (pants/skirts over legs) - rendered first */}
        {BottomComponent && (
          <g className={animationClass} data-layer="bottom">
            <BottomComponent />
          </g>
        )}

        {/* Layer 4: Shoes (on top of bottoms - boots cover jeans, sneakers cover pant hem) */}
        {ShoesComponent && (
          <g className={animationClass} data-layer="shoes">
            <ShoesComponent />
          </g>
        )}

        {/* Layer 5: Tops (shirts over torso) */}
        {TopComponent && (
          <g className={animationClass} data-layer="top">
            <TopComponent />
          </g>
        )}

        {/* Layer 6: Hair Front (bangs over face) */}
        {HairComponent && (
          <g className={animationClass} data-layer="hair-front">
            <HairComponent />
          </g>
        )}

        {/* Layer 7: Accessories (on top of everything) */}
        {AccessoryComponent && (
          <g className={animationClass} data-layer="accessory">
            <AccessoryComponent />
          </g>
        )}
      </svg>

      {/* CSS for equip animation */}
      <style jsx>{`
        @keyframes equip-bounce {
          0% {
            transform: scale(1.2);
            opacity: 0.7;
          }
          50% {
            transform: scale(0.95);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-equip {
          animation: equip-bounce 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}

export default SVGCharacter
