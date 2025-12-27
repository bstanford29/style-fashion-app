'use client'

import { useState, useCallback } from 'react'
import { CharacterDisplay } from './CharacterDisplay'
import { CategorySelector, ClothingCategory } from './CategorySelector'
import { ItemGrid } from './ItemGrid'
import DoneButton from './DoneButton'
import RunwayModal from './RunwayModal'
import { useOutfit } from '@/context/OutfitContext'
import clothingData from '@/../product/sections/outfit-builder/data.json'

export function OutfitBuilder() {
  const { state, selectCategory, equipItem, saveOutfit, hasEquippedItems } = useOutfit()
  const [isDragOver, setIsDragOver] = useState(false)
  const [draggedItem, setDraggedItem] = useState<string | null>(null)
  const [showRunway, setShowRunway] = useState(false)

  // Filter items by selected category
  const filteredItems = clothingData.items.filter(
    (item) => item.category === state.selectedCategory
  )

  // Handle drag start
  const handleDragStart = useCallback((itemId: string) => {
    setDraggedItem(itemId)
  }, [])

  // Handle drag end
  const handleDragEnd = useCallback(() => {
    setDraggedItem(null)
    setIsDragOver(false)
  }, [])

  // Handle drop on character
  const handleDrop = useCallback((itemId: string) => {
    const item = clothingData.items.find((i) => i.id === itemId)
    if (item) {
      equipItem(item.category as ClothingCategory, itemId)
    }
    setDraggedItem(null)
    setIsDragOver(false)
  }, [equipItem])

  // Handle drag over character
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  // Handle drag leave character
  const handleDragLeave = useCallback(() => {
    setIsDragOver(false)
  }, [])

  // Handle save outfit
  const handleSaveOutfit = useCallback((name: string) => {
    saveOutfit(name)
    setShowRunway(false)
  }, [saveOutfit])

  // Handle download (placeholder for now)
  const handleDownload = useCallback(() => {
    // TODO: Implement canvas capture and download
    alert('Download feature coming soon!')
  }, [])

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4 h-[calc(100vh-8rem)]">
      {/* Left side: Item Grid + Category Selector */}
      <div className="flex gap-2 flex-1 lg:flex-none lg:w-[400px]">
        {/* Item Grid */}
        <div className="flex-1 overflow-y-auto">
          <ItemGrid
            items={filteredItems}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
        </div>

        {/* Category Selector */}
        <CategorySelector
          selectedCategory={state.selectedCategory}
          onSelectCategory={selectCategory}
        />
      </div>

      {/* Right side: Character Display + Done Button */}
      <div
        className="flex-1 flex flex-col items-center justify-center relative"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={(e) => {
          e.preventDefault()
          if (draggedItem) {
            handleDrop(draggedItem)
          }
        }}
      >
        <CharacterDisplay
          skinTone={state.skinTone}
          equippedItems={state.equipped}
          isDragOver={isDragOver}
          onDrop={handleDrop}
        />

        {/* Done Button */}
        <div className="absolute bottom-4 right-4">
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
