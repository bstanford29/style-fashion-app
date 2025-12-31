'use client'

import { useState, useCallback } from 'react'
import { useDrag } from '@/context/DragContext'
import { CLOTHING_ITEMS, CATEGORY_INFO } from '@/data/clothing-items'
import type { ClothingCategory } from '@/lib/types'

// Import thumbnail components
import {
  LongStraightHairThumbnail,
  ShortBobHairThumbnail,
  PonytailHairThumbnail,
  CurlyWavyHairThumbnail,
  BraidsHairThumbnail,
} from './character/clothing/HairStyles'
import {
  SpaceBunsThumbnail,
  PixieCutThumbnail,
  SideBraidThumbnail,
} from './character/clothing/HairStylesNew'
import {
  BasicTShirtThumbnail,
  TankTopThumbnail,
  LongSleeveShirtThumbnail,
  CropTopThumbnail,
  HoodieThumbnail,
} from './character/clothing/Tops'
import {
  SundressThumbnail,
  CardiganThumbnail,
  DenimJacketThumbnail,
} from './character/clothing/TopsNew'
import {
  JeansThumbnail,
  SkirtThumbnail,
  ShortsThumbnail,
  LeggingsThumbnail,
  PleatedSkirtThumbnail,
} from './character/clothing/Bottoms'
import {
  OverallsThumbnail,
  TutuThumbnail,
  JoggersThumbnail,
} from './character/clothing/BottomsNew'
import {
  SneakersThumbnail,
  BalletFlatsThumbnail,
  BootsThumbnail,
  SandalsThumbnail,
  HighHeelsThumbnail,
} from './character/clothing/Shoes'
import {
  MaryJanesThumbnail,
  RainBootsThumbnail,
  LoafersThumbnail,
} from './character/clothing/ShoesNew'
import {
  BowHeadbandThumbnail,
  NecklaceThumbnail,
  SunglassesThumbnail,
  EarringsThumbnail,
  HatThumbnail,
} from './character/clothing/Accessories'
import {
  TiaraThumbnail,
  BackpackThumbnail,
  GlassesThumbnail,
} from './character/clothing/AccessoriesNew'

// Map item IDs to their thumbnail components
const THUMBNAIL_COMPONENTS: Record<string, React.ComponentType<{ color?: string }>> = {
  hair_001: LongStraightHairThumbnail,
  hair_002: ShortBobHairThumbnail,
  hair_003: PonytailHairThumbnail,
  hair_004: CurlyWavyHairThumbnail,
  hair_005: BraidsHairThumbnail,
  hair_006: SpaceBunsThumbnail,
  hair_007: PixieCutThumbnail,
  hair_008: SideBraidThumbnail,
  top_001: BasicTShirtThumbnail,
  top_002: TankTopThumbnail,
  top_003: LongSleeveShirtThumbnail,
  top_004: CropTopThumbnail,
  top_005: HoodieThumbnail,
  top_006: SundressThumbnail,
  top_007: CardiganThumbnail,
  top_008: DenimJacketThumbnail,
  bottom_001: JeansThumbnail,
  bottom_002: SkirtThumbnail,
  bottom_003: ShortsThumbnail,
  bottom_004: LeggingsThumbnail,
  bottom_005: PleatedSkirtThumbnail,
  bottom_006: OverallsThumbnail,
  bottom_007: TutuThumbnail,
  bottom_008: JoggersThumbnail,
  shoes_001: SneakersThumbnail,
  shoes_002: BalletFlatsThumbnail,
  shoes_003: BootsThumbnail,
  shoes_004: SandalsThumbnail,
  shoes_005: HighHeelsThumbnail,
  shoes_006: MaryJanesThumbnail,
  shoes_007: RainBootsThumbnail,
  shoes_008: LoafersThumbnail,
  accessory_001: BowHeadbandThumbnail,
  accessory_002: NecklaceThumbnail,
  accessory_003: SunglassesThumbnail,
  accessory_004: EarringsThumbnail,
  accessory_005: HatThumbnail,
  accessory_006: TiaraThumbnail,
  accessory_007: BackpackThumbnail,
  accessory_008: GlassesThumbnail,
}

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

interface ClothingItem {
  id: string
  name: string
  category: string
  thumbnailPath?: string
}

interface ItemGridProps {
  items: ClothingItem[]
  onDragStart: (itemId: string) => void
  onDragEnd: () => void
  onItemClick?: (itemId: string) => void
}

// -----------------------------------------------------------------------------
// ItemCard Component - Individual draggable clothing item
// -----------------------------------------------------------------------------

interface ItemCardProps {
  item: ClothingItem
  index: number
  onDragStart: (itemId: string) => void
  onDragEnd: () => void
  onItemClick?: (itemId: string) => void
}

function ItemCard({ item, index, onDragStart, onDragEnd, onItemClick }: ItemCardProps) {
  const [isDragging, setIsDragging] = useState(false)
  const { startDrag, updateCursor, endDrag } = useDrag()

  // Get the SVG thumbnail component for this item
  const ThumbnailComponent = THUMBNAIL_COMPONENTS[item.id]
  const itemData = CLOTHING_ITEMS.find((i) => i.id === item.id)

  // HTML5 Drag handlers
  const handleDragStart = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      setIsDragging(true)
      onDragStart(item.id)

      // Start the global drag state
      startDrag(
        { id: item.id, category: item.category, name: item.name },
        e
      )

      // Set drag data
      e.dataTransfer.setData('text/plain', item.id)
      e.dataTransfer.effectAllowed = 'move'

      // Make the default drag image invisible
      const img = new Image()
      img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
      e.dataTransfer.setDragImage(img, 0, 0)
    },
    [item.id, item.category, item.name, onDragStart, startDrag]
  )

  const handleDrag = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      // Update cursor position during drag
      if (e.clientX !== 0 || e.clientY !== 0) {
        updateCursor(e.clientX, e.clientY)
      }
    },
    [updateCursor]
  )

  const handleDragEnd = useCallback(() => {
    setIsDragging(false)
    onDragEnd()
    endDrag()
  }, [onDragEnd, endDrag])

  // Touch drag handlers for mobile
  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      setIsDragging(true)
      onDragStart(item.id)
      startDrag(
        { id: item.id, category: item.category, name: item.name },
        e
      )
    },
    [item.id, item.category, item.name, onDragStart, startDrag]
  )

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (e.touches[0]) {
        updateCursor(e.touches[0].clientX, e.touches[0].clientY)
      }
    },
    [updateCursor]
  )

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
    onDragEnd()
    endDrag()
  }, [onDragEnd, endDrag])

  // Handle click to equip
  const handleClick = useCallback(() => {
    console.log('👆 Item clicked:', item.id)
    if (onItemClick) {
      onItemClick(item.id)
    }
  }, [item.id, onItemClick])

  return (
    <div
      draggable
      onClick={handleClick}
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`
        group relative aspect-square min-h-[72px] min-w-[72px]
        cursor-pointer
        touch-manipulation select-none
        animate-fade-in-up
        transition-all duration-200 ease-out
        ${isDragging ? 'scale-110 z-50 rotate-3 opacity-50' : 'scale-100 z-0 rotate-0'}
      `}
      style={{
        animationDelay: `${index * 60}ms`,
        animationFillMode: 'backwards',
      }}
      role="button"
      aria-label={`Drag ${item.name} to dress character`}
      tabIndex={0}
    >
      {/* Card container with playful styling */}
      <div
        className={`
          w-full h-full rounded-xl overflow-hidden
          bg-white dark:bg-slate-800
          border-2 border-transparent
          transition-all duration-200 ease-out
          ${isDragging
            ? 'shadow-2xl shadow-pink-300/50 dark:shadow-pink-500/30 border-pink-400 dark:border-pink-500'
            : 'shadow-md shadow-slate-200/60 dark:shadow-slate-900/40 hover:shadow-lg hover:shadow-pink-200/40 dark:hover:shadow-pink-500/20 hover:border-violet-300 dark:hover:border-violet-500'}
        `}
      >
        {/* Inner glow effect on hover */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-100/0 to-violet-100/0 group-hover:from-pink-100/30 group-hover:to-violet-100/30 dark:group-hover:from-pink-500/10 dark:group-hover:to-violet-500/10 transition-all duration-200 pointer-events-none" />

        {/* SVG Thumbnail or fallback */}
        <div className="w-full h-full p-2 flex items-center justify-center">
          {ThumbnailComponent ? (
            <div className="w-full h-full">
              <ThumbnailComponent color={itemData?.defaultColor} />
            </div>
          ) : (
            // Fallback to emoji if no thumbnail component
            <div className="flex flex-col items-center justify-center">
              <span className="text-2xl mb-1">
                {CATEGORY_INFO[item.category as ClothingCategory]?.emoji || '✨'}
              </span>
              <span className="text-xs text-slate-600 dark:text-slate-300 font-medium text-center leading-tight truncate w-full px-1">
                {item.name}
              </span>
            </div>
          )}
        </div>

        {/* Subtle sparkle indicator on hover */}
        <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-gradient-to-br from-cyan-300 to-pink-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 animate-pulse" />
      </div>

      {/* Item name tooltip on hover (desktop) */}
      <div
        className="
          absolute -bottom-7 left-1/2 -translate-x-1/2
          px-2 py-1 rounded-md
          bg-slate-800/95 dark:bg-white/95
          text-white dark:text-slate-800
          text-xs font-medium whitespace-nowrap
          opacity-0 group-hover:opacity-100
          pointer-events-none
          transition-opacity duration-200
          hidden sm:block
          z-50
          shadow-lg
        "
      >
        {item.name}
      </div>
    </div>
  )
}

// -----------------------------------------------------------------------------
// ItemGrid Component - Main grid container
// -----------------------------------------------------------------------------

export function ItemGrid({ items, onDragStart, onDragEnd, onItemClick }: ItemGridProps) {
  // Use first item's category as key to trigger animation restart on category change
  const gridKey = items.length > 0 ? items[0].category : 'empty'

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4">
        <div className="text-6xl mb-4 animate-bounce">
          <svg
            className="w-16 h-16 text-slate-300 dark:text-slate-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        </div>
        <p className="text-slate-400 dark:text-slate-500 text-center font-medium">
          No items in this category yet!
        </p>
      </div>
    )
  }

  return (
    <div className="p-3 pb-8 overflow-visible">
      {/* Grid container - responsive layout with space for tooltips */}
      <div
        key={gridKey}
        className="
          grid gap-4
          grid-cols-3
          sm:grid-cols-4
          lg:grid-cols-3
          xl:grid-cols-4
          overflow-visible
        "
        role="list"
        aria-label="Clothing items grid"
      >
        {items.map((item, index) => (
          <ItemCard
            key={item.id}
            item={item}
            index={index}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onItemClick={onItemClick}
          />
        ))}
      </div>

      {/* Subtle decorative element */}
      <div className="mt-4 flex justify-center gap-1.5">
        {[...Array(Math.min(items.length, 5))].map((_, i) => (
          <div
            key={i}
            className={`
              w-1.5 h-1.5 rounded-full
              transition-all duration-300
              ${i === 0 ? 'bg-pink-400' : ''}
              ${i === 1 ? 'bg-violet-400' : ''}
              ${i === 2 ? 'bg-cyan-400' : ''}
              ${i === 3 ? 'bg-pink-300' : ''}
              ${i === 4 ? 'bg-violet-300' : ''}
            `}
            style={{ animationDelay: `${i * 100}ms` }}
          />
        ))}
      </div>
    </div>
  )
}

export default ItemGrid
