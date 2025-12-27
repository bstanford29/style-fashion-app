'use client'

import { useDrag } from '@/context/DragContext'

export function DropZoneOverlay() {
  const { state } = useDrag()

  if (!state.isDragging) return null

  const isOver = state.isOverDropZone

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <div
        className={`
          absolute inset-4 rounded-3xl border-4 border-dashed transition-all duration-300
          ${isOver
            ? 'border-pink-400 bg-pink-100/30 animate-dropzone-glow'
            : 'border-slate-300/50 bg-transparent'}
        `}
      >
        {isOver && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-pink-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg animate-bounce-gentle">
              Drop here!
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DropZoneOverlay
