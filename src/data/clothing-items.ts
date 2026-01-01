/**
 * Clothing Items Data
 * Complete definitions for all 87 clothing items across 5 categories
 * (40 original + 47 new princess/party themed)
 */

import type { ClothingCategory, ClothingItem } from '@/lib/types'

export const CLOTHING_ITEMS: ClothingItem[] = [
  // ==========================================================================
  // HAIR (17 items) - zIndex: 60 (on top of head)
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
  // NEW Hair Styles
  {
    id: 'hair_006',
    name: 'Space Buns',
    category: 'hair',
    componentName: 'SpaceBuns',
    defaultColor: '#4A3728',
    zIndex: 60,
  },
  {
    id: 'hair_007',
    name: 'Pixie Cut',
    category: 'hair',
    componentName: 'PixieCut',
    defaultColor: '#2C1810',
    zIndex: 60,
  },
  {
    id: 'hair_008',
    name: 'Side Braid',
    category: 'hair',
    componentName: 'SideBraid',
    defaultColor: '#8B4513',
    zIndex: 60,
  },
  // Princess/Party Hair Expansion (9 new)
  {
    id: 'hair_009',
    name: 'Elegant Updo',
    category: 'hair',
    componentName: 'ElegantUpdo',
    defaultColor: '#2C1810',
    zIndex: 60,
  },
  {
    id: 'hair_010',
    name: 'Long Curls',
    category: 'hair',
    componentName: 'LongCurls',
    defaultColor: '#FFD700',
    zIndex: 60,
  },
  {
    id: 'hair_011',
    name: 'Half Up Crown',
    category: 'hair',
    componentName: 'HalfUpCrown',
    defaultColor: '#8B4513',
    zIndex: 60,
  },
  {
    id: 'hair_012',
    name: 'Sleek Low Bun',
    category: 'hair',
    componentName: 'SleekLowBun',
    defaultColor: '#1C1C1C',
    zIndex: 60,
  },
  {
    id: 'hair_013',
    name: 'Voluminous Waves',
    category: 'hair',
    componentName: 'VoluminousWaves',
    defaultColor: '#D4A574',
    zIndex: 60,
  },
  {
    id: 'hair_014',
    name: 'Double Dutch Braids',
    category: 'hair',
    componentName: 'DoubleDutchBraids',
    defaultColor: '#4A3728',
    zIndex: 60,
  },
  {
    id: 'hair_015',
    name: 'High Ponytail Glam',
    category: 'hair',
    componentName: 'HighPonytailGlam',
    defaultColor: '#2C1810',
    zIndex: 60,
  },
  {
    id: 'hair_016',
    name: 'Afro Puffs',
    category: 'hair',
    componentName: 'AfroPuffs',
    defaultColor: '#1C1C1C',
    zIndex: 60,
  },
  {
    id: 'hair_017',
    name: 'Loose Fishtail',
    category: 'hair',
    componentName: 'LooseFishtail',
    defaultColor: '#C68642',
    zIndex: 60,
  },

  // ==========================================================================
  // TOPS (8 items) - zIndex: 30 (over torso)
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
  // NEW Tops
  {
    id: 'top_006',
    name: 'Sundress',
    category: 'top',
    componentName: 'Sundress',
    defaultColor: '#FFB6C1',
    zIndex: 30,
  },
  {
    id: 'top_007',
    name: 'Cardigan',
    category: 'top',
    componentName: 'Cardigan',
    defaultColor: '#DEB887',
    zIndex: 32,
  },
  {
    id: 'top_008',
    name: 'Denim Jacket',
    category: 'top',
    componentName: 'DenimJacket',
    defaultColor: '#4682B4',
    zIndex: 32,
  },
  // Princess/Party Tops Expansion (10 new)
  {
    id: 'top_009',
    name: 'Ball Gown',
    category: 'top',
    componentName: 'BallGown',
    defaultColor: '#FFB6C1',
    zIndex: 30,
  },
  {
    id: 'top_010',
    name: 'Mermaid Dress',
    category: 'top',
    componentName: 'MermaidDress',
    defaultColor: '#40E0D0',
    zIndex: 30,
  },
  {
    id: 'top_011',
    name: 'Off Shoulder Top',
    category: 'top',
    componentName: 'OffShoulderTop',
    defaultColor: '#FFFFFF',
    zIndex: 30,
  },
  {
    id: 'top_012',
    name: 'Velvet Cape',
    category: 'top',
    componentName: 'VelvetCape',
    defaultColor: '#800020',
    zIndex: 35,
  },
  {
    id: 'top_013',
    name: 'Sequin Tank',
    category: 'top',
    componentName: 'SequinTank',
    defaultColor: '#FFD700',
    zIndex: 30,
  },
  {
    id: 'top_014',
    name: 'Peplum Blouse',
    category: 'top',
    componentName: 'PeplumBlouse',
    defaultColor: '#FF69B4',
    zIndex: 30,
  },
  {
    id: 'top_015',
    name: 'Princess Gown',
    category: 'top',
    componentName: 'PrincessGown',
    defaultColor: '#E6E6FA',
    zIndex: 30,
  },
  {
    id: 'top_016',
    name: 'Tulle Party Dress',
    category: 'top',
    componentName: 'TullePartyDress',
    defaultColor: '#FFB6C1',
    zIndex: 30,
  },
  {
    id: 'top_017',
    name: 'Ruffle Crop Top',
    category: 'top',
    componentName: 'RuffleCropTop',
    defaultColor: '#FF6B6B',
    zIndex: 30,
  },
  {
    id: 'top_018',
    name: 'Royal Ballgown',
    category: 'top',
    componentName: 'RoyalBallgown',
    defaultColor: '#4169E1',
    zIndex: 30,
  },

  // ==========================================================================
  // BOTTOMS (17 items) - zIndex: 20 (over legs)
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
  // NEW Bottoms
  {
    id: 'bottom_006',
    name: 'Overalls',
    category: 'bottom',
    componentName: 'Overalls',
    defaultColor: '#4A90D9',
    zIndex: 25,
  },
  {
    id: 'bottom_007',
    name: 'Tutu',
    category: 'bottom',
    componentName: 'Tutu',
    defaultColor: '#FFB6C1',
    zIndex: 20,
  },
  {
    id: 'bottom_008',
    name: 'Joggers',
    category: 'bottom',
    componentName: 'Joggers',
    defaultColor: '#2C3E50',
    zIndex: 20,
  },
  // Princess/Party Bottoms Expansion (9 new)
  {
    id: 'bottom_009',
    name: 'Layered Tulle Skirt',
    category: 'bottom',
    componentName: 'LayeredTulleSkirt',
    defaultColor: '#FFB6C1',
    zIndex: 20,
  },
  {
    id: 'bottom_010',
    name: 'Sequin Mini Skirt',
    category: 'bottom',
    componentName: 'SequinMiniSkirt',
    defaultColor: '#C0C0C0',
    zIndex: 20,
  },
  {
    id: 'bottom_011',
    name: 'Satin Maxi Skirt',
    category: 'bottom',
    componentName: 'SatinMaxiSkirt',
    defaultColor: '#800020',
    zIndex: 20,
  },
  {
    id: 'bottom_012',
    name: 'Glitter Leggings',
    category: 'bottom',
    componentName: 'GlitterLeggings',
    defaultColor: '#FFD700',
    zIndex: 20,
  },
  {
    id: 'bottom_013',
    name: 'Velvet Pants',
    category: 'bottom',
    componentName: 'VelvetPants',
    defaultColor: '#4B0082',
    zIndex: 20,
  },
  {
    id: 'bottom_014',
    name: 'Bubble Skirt',
    category: 'bottom',
    componentName: 'BubbleSkirt',
    defaultColor: '#FF69B4',
    zIndex: 20,
  },
  {
    id: 'bottom_015',
    name: 'Metallic Shorts',
    category: 'bottom',
    componentName: 'MetallicShorts',
    defaultColor: '#C0C0C0',
    zIndex: 20,
  },
  {
    id: 'bottom_016',
    name: 'Tiered Ruffle Skirt',
    category: 'bottom',
    componentName: 'TieredRuffleSkirt',
    defaultColor: '#E6E6FA',
    zIndex: 20,
  },
  {
    id: 'bottom_017',
    name: 'Princess A-Line Skirt',
    category: 'bottom',
    componentName: 'PrincessALineSkirt',
    defaultColor: '#ADD8E6',
    zIndex: 20,
  },

  // ==========================================================================
  // SHOES (17 items) - zIndex: 10 (at feet level)
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
  // NEW Shoes
  {
    id: 'shoes_006',
    name: 'Mary Janes',
    category: 'shoes',
    componentName: 'MaryJanes',
    defaultColor: '#1a1a1a',
    zIndex: 10,
  },
  {
    id: 'shoes_007',
    name: 'Rain Boots',
    category: 'shoes',
    componentName: 'RainBoots',
    defaultColor: '#FFD700',
    zIndex: 10,
  },
  {
    id: 'shoes_008',
    name: 'Loafers',
    category: 'shoes',
    componentName: 'Loafers',
    defaultColor: '#8B4513',
    zIndex: 10,
  },
  // Princess/Party Shoes Expansion (9 new)
  {
    id: 'shoes_009',
    name: 'Glass Slippers',
    category: 'shoes',
    componentName: 'GlassSlippers',
    defaultColor: '#ADD8E6',
    zIndex: 10,
  },
  {
    id: 'shoes_010',
    name: 'Strappy Heels',
    category: 'shoes',
    componentName: 'StrappyHeels',
    defaultColor: '#FFD700',
    zIndex: 10,
  },
  {
    id: 'shoes_011',
    name: 'Sparkle Flats',
    category: 'shoes',
    componentName: 'SparkleFlats',
    defaultColor: '#C0C0C0',
    zIndex: 10,
  },
  {
    id: 'shoes_012',
    name: 'Satin Pumps',
    category: 'shoes',
    componentName: 'SatinPumps',
    defaultColor: '#FFB6C1',
    zIndex: 10,
  },
  {
    id: 'shoes_013',
    name: 'Jeweled Sandals',
    category: 'shoes',
    componentName: 'JeweledSandals',
    defaultColor: '#40E0D0',
    zIndex: 10,
  },
  {
    id: 'shoes_014',
    name: 'Velvet Slippers',
    category: 'shoes',
    componentName: 'VelvetSlippers',
    defaultColor: '#800020',
    zIndex: 10,
  },
  {
    id: 'shoes_015',
    name: 'Platform Glitter',
    category: 'shoes',
    componentName: 'PlatformGlitter',
    defaultColor: '#FF69B4',
    zIndex: 10,
  },
  {
    id: 'shoes_016',
    name: 'Ankle Strap Heels',
    category: 'shoes',
    componentName: 'AnkleStrapHeels',
    defaultColor: '#1C1C1C',
    zIndex: 10,
  },
  {
    id: 'shoes_017',
    name: 'Pearl Flats',
    category: 'shoes',
    componentName: 'PearlFlats',
    defaultColor: '#FFFAF0',
    zIndex: 10,
  },

  // ==========================================================================
  // ACCESSORIES (18 items) - zIndex: 50-75 (varies by type)
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
  // NEW Accessories
  {
    id: 'accessory_006',
    name: 'Tiara',
    category: 'accessory',
    componentName: 'Tiara',
    defaultColor: '#FFD700',
    zIndex: 72,
  },
  {
    id: 'accessory_007',
    name: 'Backpack',
    category: 'accessory',
    componentName: 'Backpack',
    defaultColor: '#FF6B6B',
    zIndex: 5,
  },
  {
    id: 'accessory_008',
    name: 'Glasses',
    category: 'accessory',
    componentName: 'Glasses',
    defaultColor: '#1a1a1a',
    zIndex: 65,
  },
  // Princess/Party Accessories Expansion (10 new)
  {
    id: 'accessory_009',
    name: 'Diamond Tiara',
    category: 'accessory',
    componentName: 'DiamondTiara',
    defaultColor: '#C0C0C0',
    zIndex: 72,
  },
  {
    id: 'accessory_010',
    name: 'Pearl Necklace',
    category: 'accessory',
    componentName: 'PearlNecklace',
    defaultColor: '#FFFAF0',
    zIndex: 50,
  },
  {
    id: 'accessory_011',
    name: 'Chandelier Earrings',
    category: 'accessory',
    componentName: 'ChandelierEarrings',
    defaultColor: '#FFD700',
    zIndex: 55,
  },
  {
    id: 'accessory_012',
    name: 'Satin Gloves',
    category: 'accessory',
    componentName: 'SatinGloves',
    defaultColor: '#FFFFFF',
    zIndex: 40,
  },
  {
    id: 'accessory_013',
    name: 'Feather Boa',
    category: 'accessory',
    componentName: 'FeatherBoa',
    defaultColor: '#FF69B4',
    zIndex: 45,
  },
  {
    id: 'accessory_014',
    name: 'Clutch Purse',
    category: 'accessory',
    componentName: 'ClutchPurse',
    defaultColor: '#C0C0C0',
    zIndex: 45,
  },
  {
    id: 'accessory_015',
    name: 'Crown',
    category: 'accessory',
    componentName: 'Crown',
    defaultColor: '#FFD700',
    zIndex: 73,
  },
  {
    id: 'accessory_016',
    name: 'Masquerade Mask',
    category: 'accessory',
    componentName: 'MasqueradeMask',
    defaultColor: '#800020',
    zIndex: 66,
  },
  {
    id: 'accessory_017',
    name: 'Flower Crown',
    category: 'accessory',
    componentName: 'FlowerCrown',
    defaultColor: '#FFB6C1',
    zIndex: 71,
  },
  {
    id: 'accessory_018',
    name: 'Wand',
    category: 'accessory',
    componentName: 'Wand',
    defaultColor: '#E6E6FA',
    zIndex: 45,
  },
]

/**
 * Get all items in a specific category
 */
export function getItemsByCategory(category: ClothingCategory): ClothingItem[] {
  return CLOTHING_ITEMS.filter((item) => item.category === category)
}

/**
 * Get a single item by its ID
 */
export function getItemById(id: string): ClothingItem | undefined {
  return CLOTHING_ITEMS.find((item) => item.id === id)
}

/**
 * Get all categories with their items
 */
export function getAllCategories(): Record<ClothingCategory, ClothingItem[]> {
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
