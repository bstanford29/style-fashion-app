'use client'

import { useDrag } from '@/context/DragContext'

/**
 * Category-specific emojis for the drag preview
 */
const CATEGORY_EMOJIS: Record<string, string> = {
  hair: '💇',
  top: '👕',
  bottom: '👖',
  shoes: '👟',
  accessory: '✨',
}

/**
 * DragPreview - A floating preview that follows the cursor during drag
 *
 * Features:
 * - Fixed position following cursor
 * - Semi-transparent with slight rotation
 * - Shows item category emoji and name
 * - Drop shadow for depth
 * - Pointer-events: none to not interfere with drop detection
 */
export function DragPreview() {
  const { state } = useDrag()

  // Don't render if not dragging
  if (!state.isDragging || !state.draggedItem) {
    return null
  }

  const emoji = CATEGORY_EMOJIS[state.draggedItem.category] || '✨'
  const { x, y } = { x: state.cursorPosition.x, y: state.cursorPosition.y }

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: x - 30,
        top: y - 30,
        opacity: 0.9,
      }}
    >
      {/* Preview card */}
      <div
        className="
          w-[60px] h-[60px]
          rounded-xl
          bg-white dark:bg-slate-800
          shadow-2xl shadow-pink-300/50 dark:shadow-pink-500/30
          border-2 border-pink-400 dark:border-pink-500
          flex items-center justify-center
          rotate-[5deg]
          transform
          animate-pulse
        "
      >
        <span className="text-2xl">{emoji}</span>
      </div>

      {/* Item name label */}
      <div
        className="
          text-xs font-medium text-center mt-1
          text-slate-700 dark:text-slate-300
          bg-white/90 dark:bg-slate-800/90
          px-2 py-0.5 rounded-full shadow-sm
          truncate max-w-[80px]
          backdrop-blur-sm
        "
      >
        {state.draggedItem.name}
      </div>

      {/* Sparkle effect */}
      <div className="absolute -top-1 -right-1">
        <span className="text-sm animate-spin-slow">✨</span>
      </div>
    </div>
  )
}

export default DragPreview
