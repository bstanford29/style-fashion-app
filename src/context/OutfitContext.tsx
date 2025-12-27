'use client'

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react'
import type {
  ClothingCategory,
  EquippedItems,
  OutfitState,
  OutfitContextValue,
  SavedOutfit,
} from '@/lib/types'

// Storage key for localStorage persistence
const STORAGE_KEY = 'dressy-saved-outfits'

// Default empty equipped items
const emptyEquipped: EquippedItems = {
  hair: null,
  top: null,
  bottom: null,
  shoes: null,
  accessory: null,
}

// Initial state
const initialState: OutfitState = {
  selectedCategory: 'top',
  equipped: { ...emptyEquipped },
  skinTone: 'light',
  savedOutfits: [],
}

// Action types
type OutfitAction =
  | { type: 'SELECT_CATEGORY'; category: ClothingCategory }
  | { type: 'EQUIP_ITEM'; category: ClothingCategory; itemId: string }
  | { type: 'REMOVE_ITEM'; category: ClothingCategory }
  | { type: 'SET_SKIN_TONE'; skinTone: string }
  | { type: 'SAVE_OUTFIT'; outfit: SavedOutfit }
  | { type: 'LOAD_OUTFIT'; outfit: SavedOutfit }
  | { type: 'DELETE_OUTFIT'; outfitId: string }
  | { type: 'LOAD_SAVED_OUTFITS'; outfits: SavedOutfit[] }

// Reducer function
function outfitReducer(state: OutfitState, action: OutfitAction): OutfitState {
  switch (action.type) {
    case 'SELECT_CATEGORY':
      return {
        ...state,
        selectedCategory: action.category,
      }

    case 'EQUIP_ITEM':
      return {
        ...state,
        equipped: {
          ...state.equipped,
          [action.category]: action.itemId,
        },
      }

    case 'REMOVE_ITEM':
      return {
        ...state,
        equipped: {
          ...state.equipped,
          [action.category]: null,
        },
      }

    case 'SET_SKIN_TONE':
      return {
        ...state,
        skinTone: action.skinTone,
      }

    case 'SAVE_OUTFIT':
      return {
        ...state,
        savedOutfits: [...state.savedOutfits, action.outfit],
      }

    case 'LOAD_OUTFIT':
      return {
        ...state,
        equipped: { ...action.outfit.equipped },
        skinTone: action.outfit.skinTone,
      }

    case 'DELETE_OUTFIT':
      return {
        ...state,
        savedOutfits: state.savedOutfits.filter(
          (outfit) => outfit.id !== action.outfitId
        ),
      }

    case 'LOAD_SAVED_OUTFITS':
      return {
        ...state,
        savedOutfits: action.outfits,
      }

    default:
      return state
  }
}

// Generate unique ID for saved outfits
function generateId(): string {
  return `outfit-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
}

// Context creation
const OutfitContext = createContext<OutfitContextValue | null>(null)

// Provider props
interface OutfitProviderProps {
  children: ReactNode
}

// Provider component
export function OutfitProvider({ children }: OutfitProviderProps) {
  const [state, dispatch] = useReducer(outfitReducer, initialState)

  // Load saved outfits from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const outfits = JSON.parse(stored) as SavedOutfit[]
        dispatch({ type: 'LOAD_SAVED_OUTFITS', outfits })
      }
    } catch (error) {
      console.error('Failed to load saved outfits:', error)
    }
  }, [])

  // Persist savedOutfits to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.savedOutfits))
    } catch (error) {
      console.error('Failed to save outfits:', error)
    }
  }, [state.savedOutfits])

  // Action: Select category
  const selectCategory = useCallback((category: ClothingCategory) => {
    dispatch({ type: 'SELECT_CATEGORY', category })
  }, [])

  // Action: Equip item
  const equipItem = useCallback((category: ClothingCategory, itemId: string) => {
    dispatch({ type: 'EQUIP_ITEM', category, itemId })
  }, [])

  // Action: Remove item
  const removeItem = useCallback((category: ClothingCategory) => {
    dispatch({ type: 'REMOVE_ITEM', category })
  }, [])

  // Action: Set skin tone
  const setSkinTone = useCallback((skinTone: string) => {
    dispatch({ type: 'SET_SKIN_TONE', skinTone })
  }, [])

  // Action: Save current outfit
  const saveOutfit = useCallback(
    (name: string) => {
      const newOutfit: SavedOutfit = {
        id: generateId(),
        name,
        equipped: { ...state.equipped },
        skinTone: state.skinTone,
        createdAt: new Date().toISOString(),
      }
      dispatch({ type: 'SAVE_OUTFIT', outfit: newOutfit })
    },
    [state.equipped, state.skinTone]
  )

  // Action: Load saved outfit
  const loadOutfit = useCallback(
    (outfitId: string) => {
      const outfit = state.savedOutfits.find((o) => o.id === outfitId)
      if (outfit) {
        dispatch({ type: 'LOAD_OUTFIT', outfit })
      }
    },
    [state.savedOutfits]
  )

  // Action: Delete saved outfit
  const deleteOutfit = useCallback((outfitId: string) => {
    dispatch({ type: 'DELETE_OUTFIT', outfitId })
  }, [])

  // Computed: Check if any items are equipped
  const hasEquippedItems = useMemo(() => {
    return Object.values(state.equipped).some((item) => item !== null)
  }, [state.equipped])

  // Context value
  const value: OutfitContextValue = useMemo(
    () => ({
      state,
      selectCategory,
      equipItem,
      removeItem,
      setSkinTone,
      saveOutfit,
      loadOutfit,
      deleteOutfit,
      hasEquippedItems,
    }),
    [
      state,
      selectCategory,
      equipItem,
      removeItem,
      setSkinTone,
      saveOutfit,
      loadOutfit,
      deleteOutfit,
      hasEquippedItems,
    ]
  )

  return (
    <OutfitContext.Provider value={value}>{children}</OutfitContext.Provider>
  )
}

// Custom hook for accessing outfit context
export function useOutfit(): OutfitContextValue {
  const context = useContext(OutfitContext)

  if (!context) {
    throw new Error('useOutfit must be used within an OutfitProvider')
  }

  return context
}

// Export context for advanced use cases
export { OutfitContext }
