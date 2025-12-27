/**
 * Clothing Items Data
 * Complete definitions for all 25 clothing items across 5 categories
 */

import type { ClothingCategory } from '@/lib/types'

export interface ClothingItemData {
  id: string
  name: string
  category: ClothingCategory
  componentName: string
  defaultColor: string
  zIndex: number
}

export const CLOTHING_ITEMS: ClothingItemData[] = [
  // ==========================================================================
  // HAIR (5 items) - zIndex: 60 (on top of head)
  // ==========================================================================
  {
    id: 'hair_001',
    name: 'Long Straight',
    category: 'hair',
    componentName: 'LongStraightHair',
    defaultColor: '#4A3728',
    zIndex: 60,
  },
  {
    id: 'hair_002',
    name: 'Short Bob',
    category: 'hair',
    componentName: 'ShortBobHair',
    defaultColor: '#2C1810',
    zIndex: 60,
  },
  {
    id: 'hair_003',
    name: 'Ponytail',
    category: 'hair',
    componentName: 'PonytailHair',
    defaultColor: '#8B4513',
    zIndex: 60,
  },
  {
    id: 'hair_004',
    name: 'Curly Wavy',
    category: 'hair',
    componentName: 'CurlyWavyHair',
    defaultColor: '#1C1C1C',
    zIndex: 60,
  },
  {
    id: 'hair_005',
    name: 'Braids',
    category: 'hair',
    componentName: 'BraidsHair',
    defaultColor: '#FFD700',
    zIndex: 60,
  },

  // ==========================================================================
  // TOPS (5 items) - zIndex: 30 (over torso)
  // ==========================================================================
  {
    id: 'top_001',
    name: 'Basic T-Shirt',
    category: 'top',
    componentName: 'BasicTShirt',
    defaultColor: '#FF6B6B',
    zIndex: 30,
  },
  {
    id: 'top_002',
    name: 'Tank Top',
    category: 'top',
    componentName: 'TankTop',
    defaultColor: '#98D8C8',
    zIndex: 30,
  },
  {
    id: 'top_003',
    name: 'Long Sleeve',
    category: 'top',
    componentName: 'LongSleeveShirt',
    defaultColor: '#9B59B6',
    zIndex: 30,
  },
  {
    id: 'top_004',
    name: 'Crop Top',
    category: 'top',
    componentName: 'CropTop',
    defaultColor: '#F39C12',
    zIndex: 30,
  },
  {
    id: 'top_005',
    name: 'Hoodie',
    category: 'top',
    componentName: 'Hoodie',
    defaultColor: '#3498DB',
    zIndex: 30,
  },

  // ==========================================================================
  // BOTTOMS (5 items) - zIndex: 20 (over legs)
  // ==========================================================================
  {
    id: 'bottom_001',
    name: 'Jeans',
    category: 'bottom',
    componentName: 'Jeans',
    defaultColor: '#2C3E50',
    zIndex: 20,
  },
  {
    id: 'bottom_002',
    name: 'Skirt',
    category: 'bottom',
    componentName: 'Skirt',
    defaultColor: '#E74C3C',
    zIndex: 20,
  },
  {
    id: 'bottom_003',
    name: 'Shorts',
    category: 'bottom',
    componentName: 'Shorts',
    defaultColor: '#1ABC9C',
    zIndex: 20,
  },
  {
    id: 'bottom_004',
    name: 'Leggings',
    category: 'bottom',
    componentName: 'Leggings',
    defaultColor: '#2C2C2C',
    zIndex: 20,
  },
  {
    id: 'bottom_005',
    name: 'Pleated Skirt',
    category: 'bottom',
    componentName: 'PleatedSkirt',
    defaultColor: '#34495E',
    zIndex: 20,
  },

  // ==========================================================================
  // SHOES (5 items) - zIndex: 10 (at feet level)
  // ==========================================================================
  {
    id: 'shoes_001',
    name: 'Sneakers',
    category: 'shoes',
    componentName: 'Sneakers',
    defaultColor: '#FFFFFF',
    zIndex: 10,
  },
  {
    id: 'shoes_002',
    name: 'Ballet Flats',
    category: 'shoes',
    componentName: 'BalletFlats',
    defaultColor: '#FF69B4',
    zIndex: 10,
  },
  {
    id: 'shoes_003',
    name: 'Boots',
    category: 'shoes',
    componentName: 'Boots',
    defaultColor: '#8B4513',
    zIndex: 10,
  },
  {
    id: 'shoes_004',
    name: 'Sandals',
    category: 'shoes',
    componentName: 'Sandals',
    defaultColor: '#D4A574',
    zIndex: 10,
  },
  {
    id: 'shoes_005',
    name: 'High Heels',
    category: 'shoes',
    componentName: 'HighHeels',
    defaultColor: '#C0392B',
    zIndex: 10,
  },

  // ==========================================================================
  // ACCESSORIES (5 items) - zIndex: 50-70 (varies by type)
  // ==========================================================================
  {
    id: 'accessory_001',
    name: 'Bow Headband',
    category: 'accessory',
    componentName: 'BowHeadband',
    defaultColor: '#FF69B4',
    zIndex: 70,
  },
  {
    id: 'accessory_002',
    name: 'Necklace',
    category: 'accessory',
    componentName: 'Necklace',
    defaultColor: '#FFD700',
    zIndex: 50,
  },
  {
    id: 'accessory_003',
    name: 'Sunglasses',
    category: 'accessory',
    componentName: 'Sunglasses',
    defaultColor: '#1C1C1C',
    zIndex: 65,
  },
  {
    id: 'accessory_004',
    name: 'Earrings',
    category: 'accessory',
    componentName: 'Earrings',
    defaultColor: '#C0C0C0',
    zIndex: 55,
  },
  {
    id: 'accessory_005',
    name: 'Hat',
    category: 'accessory',
    componentName: 'Hat',
    defaultColor: '#4169E1',
    zIndex: 75,
  },
]

/**
 * Get all items in a specific category
 */
export function getItemsByCategory(category: ClothingCategory): ClothingItemData[] {
  return CLOTHING_ITEMS.filter((item) => item.category === category)
}

/**
 * Get a single item by its ID
 */
export function getItemById(id: string): ClothingItemData | undefined {
  return CLOTHING_ITEMS.find((item) => item.id === id)
}

/**
 * Get all categories with their items
 */
export function getAllCategories(): Record<ClothingCategory, ClothingItemData[]> {
  return {
    hair: getItemsByCategory('hair'),
    top: getItemsByCategory('top'),
    bottom: getItemsByCategory('bottom'),
    shoes: getItemsByCategory('shoes'),
    accessory: getItemsByCategory('accessory'),
  }
}

/**
 * Category display info
 */
export const CATEGORY_INFO: Record<ClothingCategory, { name: string; emoji: string }> = {
  hair: { name: 'Hair', emoji: '💇' },
  top: { name: 'Tops', emoji: '👕' },
  bottom: { name: 'Bottoms', emoji: '👖' },
  shoes: { name: 'Shoes', emoji: '👟' },
  accessory: { name: 'Accessories', emoji: '✨' },
}
