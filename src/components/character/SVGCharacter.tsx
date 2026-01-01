'use client'

import { CharacterBase } from './CharacterBase'
import { getItemById } from '@/data/clothing-items'
import type { EquippedItems } from '@/lib/types'
import {
  LongStraightHair,
  ShortBobHair,
  PonytailHair,
  CurlyWavyHair,
  BraidsHair,
} from './clothing/HairStyles'
import {
  SpaceBuns,
  PixieCut,
  SideBraid,
} from './clothing/HairStylesNew'
import {
  ElegantUpdo,
  LongCurls,
  HalfUpCrown,
  SleekLowBun,
  VoluminousWaves,
  DoubleDutchBraids,
  HighPonytailGlam,
  AfroPuffs,
  LooseFishtail,
} from './clothing/HairStylesExpansion'
import {
  BasicTShirt,
  TankTop,
  LongSleeveShirt,
  CropTop,
  Hoodie,
} from './clothing/Tops'
import {
  Sundress,
  Cardigan,
  DenimJacket,
} from './clothing/TopsNew'
import {
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
} from './clothing/TopsExpansion'
import {
  Jeans,
  Skirt,
  Shorts,
  Leggings,
  PleatedSkirt,
} from './clothing/Bottoms'
import {
  Overalls,
  Tutu,
  Joggers,
} from './clothing/BottomsNew'
import {
  LayeredTulleSkirt,
  SequinMiniSkirt,
  SatinMaxiSkirt,
  GlitterLeggings,
  VelvetPants,
  BubbleSkirt,
  MetallicShorts,
  TieredRuffleSkirt,
  PrincessALineSkirt,
} from './clothing/BottomsExpansion'
import {
  Sneakers,
  BalletFlats,
  Boots,
  Sandals,
  HighHeels,
} from './clothing/Shoes'
import {
  MaryJanes,
  RainBoots,
  Loafers,
} from './clothing/ShoesNew'
import {
  GlassSlippers,
  StrappyHeels,
  SparkleFlats,
  SatinPumps,
  JeweledSandals,
  VelvetSlippers,
  PlatformGlitter,
  AnkleStrapHeels,
  PearlFlats,
} from './clothing/ShoesExpansion'
import {
  BowHeadband,
  Necklace,
  Sunglasses,
  Earrings,
  Hat,
} from './clothing/Accessories'
import {
  Tiara,
  Backpack,
  Glasses,
} from './clothing/AccessoriesNew'
import {
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
} from './clothing/AccessoriesExpansion'

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
  hair_006: SpaceBuns,
  hair_007: PixieCut,
  hair_008: SideBraid,
  // Princess/Party Expansion
  hair_009: ElegantUpdo,
  hair_010: LongCurls,
  hair_011: HalfUpCrown,
  hair_012: SleekLowBun,
  hair_013: VoluminousWaves,
  hair_014: DoubleDutchBraids,
  hair_015: HighPonytailGlam,
  hair_016: AfroPuffs,
  hair_017: LooseFishtail,
}

/** Hair styles that have parts that should render BEHIND the body (ponytails, braids, long hair) */
const HAIR_RENDERS_BEHIND_BODY = [
  'hair_001', 'hair_003', 'hair_005', 'hair_008', // Long straight, ponytail, braids, side braid
  'hair_010', 'hair_011', 'hair_012', 'hair_013', 'hair_014', 'hair_015', 'hair_017', // Long curls, half up, low bun, waves, dutch braids, high ponytail, fishtail
]

const TOP_COMPONENTS: Record<string, React.ComponentType<{ color?: string; className?: string }>> = {
  top_001: BasicTShirt,
  top_002: TankTop,
  top_003: LongSleeveShirt,
  top_004: CropTop,
  top_005: Hoodie,
  top_006: Sundress,
  top_007: Cardigan,
  top_008: DenimJacket,
  // Princess/Party Expansion
  top_009: BallGown,
  top_010: MermaidDress,
  top_011: OffShoulderTop,
  top_012: VelvetCape,
  top_013: SequinTank,
  top_014: PeplumBlouse,
  top_015: PrincessGown,
  top_016: TullePartyDress,
  top_017: RuffleCropTop,
  top_018: RoyalBallgown,
}

const BOTTOM_COMPONENTS: Record<string, React.ComponentType<{ color?: string; className?: string }>> = {
  bottom_001: Jeans,
  bottom_002: Skirt,
  bottom_003: Shorts,
  bottom_004: Leggings,
  bottom_005: PleatedSkirt,
  bottom_006: Overalls,
  bottom_007: Tutu,
  bottom_008: Joggers,
  // Princess/Party Expansion
  bottom_009: LayeredTulleSkirt,
  bottom_010: SequinMiniSkirt,
  bottom_011: SatinMaxiSkirt,
  bottom_012: GlitterLeggings,
  bottom_013: VelvetPants,
  bottom_014: BubbleSkirt,
  bottom_015: MetallicShorts,
  bottom_016: TieredRuffleSkirt,
  bottom_017: PrincessALineSkirt,
}

const SHOES_COMPONENTS: Record<string, React.ComponentType<{ color?: string; className?: string }>> = {
  shoes_001: Sneakers,
  shoes_002: BalletFlats,
  shoes_003: Boots,
  shoes_004: Sandals,
  shoes_005: HighHeels,
  shoes_006: MaryJanes,
  shoes_007: RainBoots,
  shoes_008: Loafers,
  // Princess/Party Expansion
  shoes_009: GlassSlippers,
  shoes_010: StrappyHeels,
  shoes_011: SparkleFlats,
  shoes_012: SatinPumps,
  shoes_013: JeweledSandals,
  shoes_014: VelvetSlippers,
  shoes_015: PlatformGlitter,
  shoes_016: AnkleStrapHeels,
  shoes_017: PearlFlats,
}

const ACCESSORY_COMPONENTS: Record<string, React.ComponentType<{ color?: string; className?: string }>> = {
  accessory_001: BowHeadband,
  accessory_002: Necklace,
  accessory_003: Sunglasses,
  accessory_004: Earrings,
  accessory_005: Hat,
  accessory_006: Tiara,
  accessory_007: Backpack,
  accessory_008: Glasses,
  // Princess/Party Expansion
  accessory_009: DiamondTiara,
  accessory_010: PearlNecklace,
  accessory_011: ChandelierEarrings,
  accessory_012: SatinGloves,
  accessory_013: FeatherBoa,
  accessory_014: ClutchPurse,
  accessory_015: Crown,
  accessory_016: MasqueradeMask,
  accessory_017: FlowerCrown,
  accessory_018: Wand,
}

export function SVGCharacter({
  skinTone,
  equippedItems,
  className = '',
  animate = true,
}: SVGCharacterProps) {
  // Helper to get color from data layer
  const getColor = (id: string | null) => id ? getItemById(id)?.defaultColor : undefined

  // Get component references for equipped items
  const HairComponent = equippedItems.hair ? HAIR_COMPONENTS[equippedItems.hair] : null
  const TopComponent = equippedItems.top ? TOP_COMPONENTS[equippedItems.top] : null
  const BottomComponent = equippedItems.bottom ? BOTTOM_COMPONENTS[equippedItems.bottom] : null
  const ShoesComponent = equippedItems.shoes ? SHOES_COMPONENTS[equippedItems.shoes] : null
  const AccessoryComponent = equippedItems.accessory ? ACCESSORY_COMPONENTS[equippedItems.accessory] : null

  const animationClass = animate ? 'animate-equip' : ''

  // Check if current hair should render behind body
  const hairRendersBehind = equippedItems.hair && HAIR_RENDERS_BEHIND_BODY.includes(equippedItems.hair)

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Main SVG Container - all layers rendered in order */}
      <svg
        viewBox="0 0 300 800"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        aria-label="Dressed character"
      >
        {/* Layer 1: Hair Back (behind body for ponytails, braids, long hair) */}
        {HairComponent && hairRendersBehind && (
          <g className={animationClass} data-layer="hair-back">
            <HairComponent color={getColor(equippedItems.hair)} />
          </g>
        )}

        {/* Layer 2: Character Base Body */}
        <g data-layer="body">
          <CharacterBase skinTone={skinTone} />
        </g>

        {/* Layer 3: Bottoms (pants/skirts over legs) - rendered first */}
        {BottomComponent && (
          <g className={animationClass} data-layer="bottom">
            <BottomComponent color={getColor(equippedItems.bottom)} />
          </g>
        )}

        {/* Layer 4: Shoes (on top of bottoms - boots cover jeans, sneakers cover pant hem) */}
        {ShoesComponent && (
          <g className={animationClass} data-layer="shoes">
            <ShoesComponent color={getColor(equippedItems.shoes)} />
          </g>
        )}

        {/* Layer 5: Tops (shirts over torso) */}
        {TopComponent && (
          <g className={animationClass} data-layer="top">
            <TopComponent color={getColor(equippedItems.top)} />
          </g>
        )}

        {/* Layer 6: Hair Front (bangs over face) - only for hair that doesn't go behind body */}
        {HairComponent && !hairRendersBehind && (
          <g className={animationClass} data-layer="hair-front">
            <HairComponent color={getColor(equippedItems.hair)} />
          </g>
        )}

        {/* Layer 7: Accessories (on top of everything) */}
        {AccessoryComponent && (
          <g className={animationClass} data-layer="accessory">
            <AccessoryComponent color={getColor(equippedItems.accessory)} />
          </g>
        )}
      </svg>

    </div>
  )
}

export default SVGCharacter
