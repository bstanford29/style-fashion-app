'use client'

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react'

// =============================================================================
// Types
// =============================================================================

export interface DraggedItem {
  id: string
  category: string
  name: string
  thumbnailPath?: string
}

export interface DragState {
  isDragging: boolean
  draggedItem: DraggedItem | null
  isOverDropZone: boolean
  cursorPosition: { x: number; y: number }
}

export interface DragContextValue {
  state: DragState
  startDrag: (item: DraggedItem, e: React.DragEvent | React.TouchEvent | React.MouseEvent) => void
  updateCursor: (x: number, y: number) => void
  setOverDropZone: (isOver: boolean) => void
  endDrag: () => void
}

// =============================================================================
// Initial State
// =============================================================================

const initialState: DragState = {
  isDragging: false,
  draggedItem: null,
  isOverDropZone: false,
  cursorPosition: { x: 0, y: 0 },
}

// =============================================================================
// Context
// =============================================================================

const DragContext = createContext<DragContextValue | null>(null)

// =============================================================================
// Provider
// =============================================================================

interface DragProviderProps {
  children: ReactNode
}

export function DragProvider({ children }: DragProviderProps) {
  const [state, setState] = useState<DragState>(initialState)

  // Start dragging an item
  const startDrag = useCallback(
    (item: DraggedItem, e: React.DragEvent | React.TouchEvent | React.MouseEvent) => {
      let x = 0
      let y = 0

      // Handle different event types
      if ('clientX' in e) {
        x = e.clientX
        y = e.clientY
      } else if ('touches' in e && e.touches[0]) {
        x = e.touches[0].clientX
        y = e.touches[0].clientY
      }

      setState({
        isDragging: true,
        draggedItem: item,
        isOverDropZone: false,
        cursorPosition: { x, y },
      })
    },
    []
  )

  // Update cursor position during drag
  const updateCursor = useCallback((x: number, y: number) => {
    setState((prev) => ({
      ...prev,
      cursorPosition: { x, y },
    }))
  }, [])

  // Set whether cursor is over the drop zone
  const setOverDropZone = useCallback((isOver: boolean) => {
    setState((prev) => ({
      ...prev,
      isOverDropZone: isOver,
    }))
  }, [])

  // End the drag operation
  const endDrag = useCallback(() => {
    setState(initialState)
  }, [])

  // Memoize context value
  const value = useMemo<DragContextValue>(
    () => ({
      state,
      startDrag,
      updateCursor,
      setOverDropZone,
      endDrag,
    }),
    [state, startDrag, updateCursor, setOverDropZone, endDrag]
  )

  return <DragContext.Provider value={value}>{children}</DragContext.Provider>
}

// =============================================================================
// Hook
// =============================================================================

export function useDrag(): DragContextValue {
  const context = useContext(DragContext)

  if (!context) {
    throw new Error('useDrag must be used within a DragProvider')
  }

  return context
}

// =============================================================================
// Export
// =============================================================================

export { DragContext }
