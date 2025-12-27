'use client'

import { useMemo } from 'react'
import Image from 'next/image'

/**
 * Props for the CharacterDisplay component
 */
export interface CharacterDisplayProps {
  /** The skin tone ID for the base character image */
  skinTone: string
  /** Currently equipped items by category slot */
  equippedItems: {
    hair: string | null
    top: string | null
    bottom: string | null
    shoes: string | null
    accessory: string | null
  }
  /** Whether an item is currently being dragged over this component */
  isDragOver?: boolean
  /** Callback when an item is dropped onto the character */
  onDrop?: (itemId: string) => void
  /** Optional className for the container */
  className?: string
}

/**
 * Layer configuration for clothing items
 * z-index values control the visual stacking order
 */
const LAYER_Z_INDEX: Record<string, number> = {
  base: 0,
  shoes: 10,
  bottom: 20,
  top: 30,
  accessory: 50,
  hair: 60,
}

/**
 * CharacterDisplay - The main character canvas for the dress-up game
 *
 * Displays a character using layered PNG images. All images are 800x1200px
 * and pre-rendered to fit the character's pose perfectly.
 *
 * Features:
 * - Layered PNG composition with proper z-index ordering
 * - Responsive scaling while maintaining aspect ratio
 * - Drop zone visual feedback for drag-and-drop
 * - Dark mode support
 */
export function CharacterDisplay({
  skinTone,
  equippedItems,
  isDragOver = false,
  onDrop,
  className = '',
}: CharacterDisplayProps) {
  // Compute the base character image path
  const baseImagePath = useMemo(() => {
    return `/assets/characters/base_${skinTone}.png`
  }, [skinTone])

  // Build the layers array for rendering
  const layers = useMemo(() => {
    const layerItems: Array<{
      key: string
      imagePath: string
      zIndex: number
    }> = []

    // Add equipped items as layers
    for (const [slot, itemId] of Object.entries(equippedItems)) {
      if (itemId) {
        layerItems.push({
          key: `${slot}-${itemId}`,
          imagePath: `/assets/clothing/${itemId}.png`,
          zIndex: LAYER_Z_INDEX[slot] ?? 0,
        })
      }
    }

    // Sort by z-index for correct layering
    return layerItems.sort((a, b) => a.zIndex - b.zIndex)
  }, [equippedItems])

  // Handle drag events
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy'
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const itemId = e.dataTransfer.getData('text/plain')
    if (itemId && onDrop) {
      onDrop(itemId)
    }
  }

  return (
    <div
      className={`
        relative w-full aspect-[2/3] max-w-md mx-auto
        rounded-3xl overflow-hidden
        bg-gradient-to-b from-cyan-50 via-pink-50 to-violet-100
        dark:from-slate-800 dark:via-slate-800 dark:to-slate-700
        shadow-lg shadow-pink-200/50 dark:shadow-slate-900/50
        transition-all duration-300 ease-out
        ${isDragOver
          ? 'ring-4 ring-pink-400 ring-offset-2 ring-offset-pink-50 dark:ring-offset-slate-900 scale-[1.02]'
          : 'ring-2 ring-pink-200/50 dark:ring-slate-600/50'
        }
        ${className}
      `}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      role="img"
      aria-label="Character display area - drag clothes here to dress up"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-white/30 dark:bg-white/5 rounded-full blur-3xl" />

        {/* Sparkle decorations for kid-friendly feel */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-pink-300 dark:bg-pink-500/50 rounded-full animate-pulse" />
        <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-violet-300 dark:bg-violet-500/50 rounded-full animate-pulse delay-100" />
        <div className="absolute bottom-12 left-6 w-1 h-1 bg-cyan-300 dark:bg-cyan-500/50 rounded-full animate-pulse delay-200" />
        <div className="absolute bottom-20 right-4 w-2 h-2 bg-pink-200 dark:bg-pink-500/30 rounded-full animate-pulse delay-300" />
      </div>

      {/* Drop zone indicator overlay */}
      {isDragOver && (
        <div className="absolute inset-0 z-[100] pointer-events-none">
          {/* Pulsing border effect */}
          <div className="absolute inset-2 rounded-2xl border-4 border-dashed border-pink-400 dark:border-pink-500 animate-pulse" />

          {/* Center drop hint */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-xl">
              <p
                className="text-pink-500 dark:text-pink-400 font-bold text-lg"
                style={{ fontFamily: 'Fredoka One, sans-serif' }}
              >
                Drop here!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Character layers container */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Inner container maintains 800x1200 aspect ratio */}
        <div className="relative w-full h-full">
          {/* Base character layer */}
          <Image
            src={baseImagePath}
            alt="Character base"
            fill
            className="object-contain"
            style={{ zIndex: LAYER_Z_INDEX.base }}
            draggable={false}
            priority
          />

          {/* Equipped clothing layers */}
          {layers.map(({ key, imagePath, zIndex }) => (
            <Image
              key={key}
              src={imagePath}
              alt=""
              fill
              className="object-contain transition-opacity duration-200 animate-equip"
              style={{ zIndex }}
              draggable={false}
            />
          ))}
        </div>
      </div>

      {/* Bottom reflection/shadow for grounding */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-8 bg-gradient-to-t from-slate-900/10 dark:from-black/20 to-transparent rounded-full blur-md" />
    </div>
  )
}

export default CharacterDisplay
