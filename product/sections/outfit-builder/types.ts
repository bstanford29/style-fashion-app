export interface ClothingItem {
  id: string
  name: string
  category: ClothingCategory
  imagePath: string
  thumbnailPath: string
  zIndex: number
}

export type ClothingCategory = 'hair' | 'top' | 'bottom' | 'shoes' | 'accessory'

export interface Character {
  id: string
  name: string
  skinTones: SkinTone[]
}

export interface SkinTone {
  id: string
  name: string
  imagePath: string
}

export interface EquippedItems {
  hair: string | null
  top: string | null
  bottom: string | null
  shoes: string | null
  accessory: string | null
}

export interface OutfitBuilderState {
  selectedCategory: ClothingCategory
  equipped: EquippedItems
  skinTone: string
  isDragging: boolean
  draggedItem: string | null
}
