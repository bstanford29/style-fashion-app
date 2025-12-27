'use client'

import { useMemo } from 'react'
import { SVGCharacter } from './character/SVGCharacter'

/**
 * Props for the CharacterDisplay component
 */
export interface CharacterDisplayProps {
  /** The skin tone ID for the base character image (skin01-skin05) */
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
 * CharacterDisplay - The main character canvas for the dress-up game
 * Now uses SVG-based fashion doll character with proper clothing overlays
 */
export function CharacterDisplay({
  skinTone,
  equippedItems,
  isDragOver = false,
  onDrop,
  className = '',
}: CharacterDisplayProps) {
  // Handle drag events
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    e.dataTransfer.dropEffect = 'copy'
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const itemId = e.dataTransfer.getData('text/plain')
    console.log('🎨 CharacterDisplay handleDrop - itemId:', itemId)
    if (itemId && onDrop) {
      onDrop(itemId)
    }
  }

  const hasAnyItems = useMemo(() => {
    return Object.values(equippedItems).some(Boolean)
  }, [equippedItems])

  return (
    <div
      className={`
        relative w-full aspect-[3/5] max-w-sm mx-auto
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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-white/30 dark:bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-4 left-4 w-2 h-2 bg-pink-300 dark:bg-pink-500/50 rounded-full animate-pulse" />
        <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-violet-300 dark:bg-violet-500/50 rounded-full animate-pulse" />
        <div className="absolute bottom-12 left-6 w-1 h-1 bg-cyan-300 dark:bg-cyan-500/50 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-4 w-2 h-2 bg-pink-200 dark:bg-pink-500/30 rounded-full animate-pulse" />
      </div>

      {/* Drop zone indicator overlay */}
      {isDragOver && (
        <div className="absolute inset-0 z-[100] pointer-events-none">
          {/* Animated dashed border */}
          <div className="absolute inset-2 rounded-2xl border-4 border-dashed border-pink-400 dark:border-pink-500 animate-pulse" />

          {/* Glowing overlay */}
          <div className="absolute inset-0 bg-pink-400/10 dark:bg-pink-500/10 animate-pulse" />

          {/* Drop here text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-xl border-2 border-pink-300 dark:border-pink-500">
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

      {/* SVG Fashion Doll Character */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full h-full max-h-[95%]">
          <SVGCharacter
            skinTone={skinTone}
            equippedItems={equippedItems}
            animate={true}
          />
        </div>
      </div>

      {/* Hint text when no items */}
      {!hasAnyItems && !isDragOver && (
        <div className="absolute bottom-6 left-0 right-0 text-center">
          <p className="text-pink-400 dark:text-pink-300 text-sm font-medium animate-pulse">
            Tap an item to dress me up!
          </p>
        </div>
      )}

      {/* Bottom shadow for grounding */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-gradient-to-t from-slate-900/10 dark:from-black/20 to-transparent rounded-full blur-md" />

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

        :global(.animate-equip) {
          animation: equip-bounce 0.3s ease-out;
        }

        @keyframes glow-pulse {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(244, 114, 182, 0.4);
          }
          50% {
            box-shadow: 0 0 40px rgba(244, 114, 182, 0.6);
          }
        }
      `}</style>
    </div>
  )
}

export default CharacterDisplay
