'use client'

import { useState, useCallback } from 'react'
import { CharacterDisplay } from './CharacterDisplay'
import { CategorySelector, ClothingCategory } from './CategorySelector'
import { ItemGrid } from './ItemGrid'
import DoneButton from './DoneButton'
import RunwayModal from './RunwayModal'
import SkinToneSelector from './SkinToneSelector'
import { useOutfit } from '@/context/OutfitContext'
import { useDrag } from '@/context/DragContext'
import { CLOTHING_ITEMS, getItemsByCategory } from '@/data/clothing-items'

export function OutfitBuilder() {
  const { state, selectCategory, equipItem, saveOutfit, hasEquippedItems } = useOutfit()
  const { state: dragState, setOverDropZone } = useDrag()
  const [isDragOver, setIsDragOver] = useState(false)
  const [draggedItem, setDraggedItem] = useState<string | null>(null)
  const [showRunway, setShowRunway] = useState(false)

  // Get items from our new typed data for the selected category
  const filteredItems = getItemsByCategory(state.selectedCategory)

  // Handle drag start
  const handleDragStart = useCallback((itemId: string) => {
    setDraggedItem(itemId)
  }, [])

  // Handle drag end
  const handleDragEnd = useCallback(() => {
    setDraggedItem(null)
    setIsDragOver(false)
    setOverDropZone(false)
  }, [setOverDropZone])

  // Handle drop on character
  const handleDrop = useCallback((itemId: string) => {
    const item = CLOTHING_ITEMS.find((i) => i.id === itemId)
    if (item) {
      equipItem(item.category as ClothingCategory, itemId)
    }
    setDraggedItem(null)
    setIsDragOver(false)
    setOverDropZone(false)
  }, [equipItem, setOverDropZone])

  // Handle drag over character
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
    setOverDropZone(true)
  }, [setOverDropZone])

  // Handle drag leave character
  const handleDragLeave = useCallback(() => {
    setIsDragOver(false)
    setOverDropZone(false)
  }, [setOverDropZone])

  // Handle save outfit
  const handleSaveOutfit = useCallback((name: string) => {
    saveOutfit(name)
    setShowRunway(false)
  }, [saveOutfit])

  // Handle download - captures the SVG character and converts to PNG
  const handleDownload = useCallback(async () => {
    try {
      // Find the SVG element within the RunwayModal's character display
      const svgElement = document.querySelector('[aria-label="Dressed character"]') as SVGSVGElement | null
      if (!svgElement) {
        console.error('Could not find character SVG')
        return
      }

      // Clone the SVG to avoid modifying the original
      const clonedSvg = svgElement.cloneNode(true) as SVGSVGElement

      // Set explicit dimensions on the cloned SVG
      clonedSvg.setAttribute('width', '600')
      clonedSvg.setAttribute('height', '1600')

      // Serialize SVG to string
      const serializer = new XMLSerializer()
      const svgString = serializer.serializeToString(clonedSvg)

      // Create a Blob from the SVG string
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' })
      const svgUrl = URL.createObjectURL(svgBlob)

      // Create an image from the SVG
      const img = new Image()
      img.onload = () => {
        // Create canvas and draw the image
        const canvas = document.createElement('canvas')
        canvas.width = 600
        canvas.height = 1600
        const ctx = canvas.getContext('2d')

        if (ctx) {
          // Fill with a nice gradient background
          const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
          gradient.addColorStop(0, '#ecfeff') // cyan-50
          gradient.addColorStop(0.5, '#fce7f3') // pink-100
          gradient.addColorStop(1, '#ede9fe') // violet-100
          ctx.fillStyle = gradient
          ctx.fillRect(0, 0, canvas.width, canvas.height)

          // Draw the character
          ctx.drawImage(img, 0, 0, 600, 1600)

          // Convert to PNG and download
          canvas.toBlob((blob) => {
            if (blob) {
              const url = URL.createObjectURL(blob)
              const link = document.createElement('a')
              link.download = `dressy-outfit-${Date.now()}.png`
              link.href = url
              link.click()
              URL.revokeObjectURL(url)
            }
          }, 'image/png')
        }

        URL.revokeObjectURL(svgUrl)
      }

      img.onerror = () => {
        console.error('Failed to load SVG as image')
        URL.revokeObjectURL(svgUrl)
      }

      img.src = svgUrl
    } catch (error) {
      console.error('Download failed:', error)
    }
  }, [])

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4 h-[calc(100vh-8rem)]">
      {/* Left side: Item Grid + Category Selector */}
      <div className="flex gap-2 flex-1 lg:flex-none lg:w-[400px]">
        {/* Item Grid */}
        <div className="flex-1 overflow-y-auto overflow-x-visible pb-4">
          <ItemGrid
            items={filteredItems}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onItemClick={handleDrop}
          />
        </div>

        {/* Category Selector */}
        <CategorySelector
          selectedCategory={state.selectedCategory}
          onSelectCategory={selectCategory}
        />
      </div>

      {/* Right side: Character Display + Controls */}
      <div className="flex-1 flex flex-col items-center gap-4">
        {/* Character Display Area */}
        <div
          className="flex-1 flex items-center justify-center w-full"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={(e) => {
            e.preventDefault()
            const dataTransferId = e.dataTransfer.getData('text/plain')
            // Get item ID from either the local state or dataTransfer
            const itemId = draggedItem || dataTransferId
            if (itemId) {
              handleDrop(itemId)
            }
          }}
        >
          <CharacterDisplay
            skinTone={state.skinTone}
            equippedItems={state.equipped}
            isDragOver={isDragOver || dragState.isOverDropZone}
            onDrop={handleDrop}
          />
        </div>

        {/* Controls row - BELOW character, not overlapping */}
        <div className="flex items-center gap-4 pb-2">
          <SkinToneSelector />
          <DoneButton
            hasEquippedItems={hasEquippedItems}
            onClick={() => setShowRunway(true)}
          />
        </div>
      </div>

      {/* Runway Modal */}
      <RunwayModal
        isOpen={showRunway}
        onClose={() => setShowRunway(false)}
        onSave={handleSaveOutfit}
        onDownload={handleDownload}
        characterDisplay={
          <CharacterDisplay
            skinTone={state.skinTone}
            equippedItems={state.equipped}
          />
        }
      />
    </div>
  )
}
