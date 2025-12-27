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
  const filteredItems = getItemsByCategory(state.selectedCategory).map(item => ({
    id: item.id,
    name: item.name,
    category: item.category,
    thumbnailPath: '', // SVG components are used instead
  }))

  // Handle drag start
  const handleDragStart = useCallback((itemId: string) => {
    console.log('🚀 handleDragStart called with:', itemId)
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
    console.log('🎯 handleDrop called with itemId:', itemId)
    const item = CLOTHING_ITEMS.find((i) => i.id === itemId)
    console.log('📦 Found item:', item)
    if (item) {
      console.log('✅ Calling equipItem with:', item.category, itemId)
      equipItem(item.category as ClothingCategory, itemId)
    } else {
      console.log('❌ Item not found in CLOTHING_ITEMS')
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
            onItemClick={handleDrop}
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
          console.log('🔥 onDrop fired!')
          console.log('📌 draggedItem state:', draggedItem)
          const dataTransferId = e.dataTransfer.getData('text/plain')
          console.log('📌 dataTransfer ID:', dataTransferId)
          // Get item ID from either the local state or dataTransfer
          const itemId = draggedItem || dataTransferId
          console.log('📌 Final itemId:', itemId)
          if (itemId) {
            handleDrop(itemId)
          } else {
            console.log('❌ No itemId found!')
          }
        }}
      >
        <CharacterDisplay
          skinTone={state.skinTone}
          equippedItems={state.equipped}
          isDragOver={isDragOver || dragState.isOverDropZone}
          onDrop={handleDrop}
        />

        {/* Skin Tone Selector */}
        <div className="absolute top-4 right-4">
          <SkinToneSelector />
        </div>

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
