/**
 * Shared types for the Dressy kids dress-up app
 */

// Clothing categories available in the app
export type ClothingCategory = 'hair' | 'top' | 'bottom' | 'shoes' | 'accessory'

// Individual clothing item definition
export interface ClothingItem {
  id: string
  name: string
  category: ClothingCategory
  componentName: string
  defaultColor: string
  zIndex: number
}

// Character base definition
export interface Character {
  id: string
  name: string
  skinTones: SkinTone[]
}

// Skin tone variant for characters
export interface SkinTone {
  id: string
  name: string
  imagePath: string
}

// Currently equipped items by category
export interface EquippedItems {
  hair: string | null
  top: string | null
  bottom: string | null
  shoes: string | null
  accessory: string | null
}

// Saved outfit for persistence
export interface SavedOutfit {
  id: string
  name: string
  equipped: EquippedItems
  skinTone: string
  createdAt: string
}

// Full outfit state
export interface OutfitState {
  selectedCategory: ClothingCategory
  equipped: EquippedItems
  skinTone: string
  savedOutfits: SavedOutfit[]
}

// Context API shape
export interface OutfitContextValue {
  state: OutfitState
  selectCategory: (category: ClothingCategory) => void
  equipItem: (category: ClothingCategory, itemId: string) => void
  removeItem: (category: ClothingCategory) => void
  setSkinTone: (skinTone: string) => void
  saveOutfit: (name: string) => void
  loadOutfit: (outfitId: string) => void
  deleteOutfit: (outfitId: string) => void
  hasEquippedItems: boolean
}
