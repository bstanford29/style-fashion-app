'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

interface ClothingItem {
  id: string
  name: string
  category: string
  thumbnailPath: string
}

interface ItemGridProps {
  items: ClothingItem[]
  onDragStart: (itemId: string) => void
  onDragEnd: () => void
}

// -----------------------------------------------------------------------------
// ItemCard Component - Individual draggable clothing item
// -----------------------------------------------------------------------------

interface ItemCardProps {
  item: ClothingItem
  index: number
  onDragStart: (itemId: string) => void
  onDragEnd: () => void
}

function ItemCard({ item, index, onDragStart, onDragEnd }: ItemCardProps) {
  const [isDragging, setIsDragging] = useState(false)

  // HTML5 Drag handlers
  const handleDragStart = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    setIsDragging(true)
    onDragStart(item.id)

    // Set drag data
    e.dataTransfer.setData('text/plain', item.id)
    e.dataTransfer.effectAllowed = 'move'

    // Create a drag image (optional: could use the thumbnail)
    if (e.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect()
      e.dataTransfer.setDragImage(e.currentTarget, rect.width / 2, rect.height / 2)
    }
  }, [item.id, onDragStart])

  const handleDragEnd = useCallback(() => {
    setIsDragging(false)
    onDragEnd()
  }, [onDragEnd])

  // Touch drag handlers for mobile
  const handleTouchStart = useCallback(() => {
    setIsDragging(true)
    onDragStart(item.id)
  }, [item.id, onDragStart])

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
    onDragEnd()
  }, [onDragEnd])

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`
        group relative aspect-square min-h-[72px] min-w-[72px]
        cursor-grab active:cursor-grabbing
        touch-manipulation select-none
        animate-fade-in-up
        transition-all duration-200 ease-out
        ${isDragging
          ? 'scale-110 z-50 rotate-3'
          : 'scale-100 z-0 rotate-0'}
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
          border-3 border-transparent
          transition-all duration-200 ease-out
          ${isDragging
            ? 'shadow-2xl shadow-pink-300/50 dark:shadow-pink-500/30 border-pink-400 dark:border-pink-500'
            : 'shadow-md shadow-slate-200/60 dark:shadow-slate-900/40 hover:shadow-lg hover:shadow-pink-200/40 dark:hover:shadow-pink-500/20 hover:border-violet-300 dark:hover:border-violet-500'}
        `}
      >
        {/* Inner glow effect on hover */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-100/0 to-violet-100/0 group-hover:from-pink-100/30 group-hover:to-violet-100/30 dark:group-hover:from-pink-500/10 dark:group-hover:to-violet-500/10 transition-all duration-200 pointer-events-none" />

        {/* Thumbnail image */}
        <div className="relative w-full h-full p-2 flex items-center justify-center">
          <Image
            src={item.thumbnailPath}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
            className={`
              object-contain p-1
              transition-transform duration-200 ease-out
              ${isDragging ? 'scale-95' : 'group-hover:scale-105'}
            `}
            draggable={false}
          />
        </div>

        {/* Subtle sparkle indicator on hover */}
        <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-gradient-to-br from-cyan-300 to-pink-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 animate-pulse" />
      </div>

      {/* Item name tooltip on hover (desktop) */}
      <div className="
        absolute -bottom-6 left-1/2 -translate-x-1/2
        px-2 py-0.5 rounded-full
        bg-slate-800/90 dark:bg-white/90
        text-white dark:text-slate-800
        text-xs font-medium whitespace-nowrap
        opacity-0 group-hover:opacity-100
        pointer-events-none
        transition-opacity duration-200
        hidden sm:block
      ">
        {item.name}
      </div>
    </div>
  )
}

// -----------------------------------------------------------------------------
// ItemGrid Component - Main grid container
// -----------------------------------------------------------------------------

export function ItemGrid({ items, onDragStart, onDragEnd }: ItemGridProps) {
  // Use first item's category as key to trigger animation restart on category change
  const gridKey = items.length > 0 ? items[0].category : 'empty'

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4">
        <div className="text-6xl mb-4 animate-bounce">
          <span role="img" aria-label="No items">
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
          </span>
        </div>
        <p className="text-slate-400 dark:text-slate-500 text-center font-medium">
          No items in this category yet!
        </p>
      </div>
    )
  }

  return (
    <div className="p-3">
      {/* Grid container - responsive 3x3 or 4x3 based on screen width */}
      <div
        key={gridKey}
        className="
          grid gap-3
          grid-cols-3
          sm:grid-cols-4
          lg:grid-cols-3
          xl:grid-cols-4
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
