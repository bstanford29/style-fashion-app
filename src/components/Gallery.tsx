'use client'

import { useOutfit } from '@/context/OutfitContext'
import { Image as ImageIcon, Trash2 } from 'lucide-react'

interface GalleryProps {
  onLoadOutfit: () => void
}

export function Gallery({ onLoadOutfit }: GalleryProps) {
  const { state, loadOutfit, deleteOutfit } = useOutfit()
  const { savedOutfits } = state

  const handleLoadOutfit = (outfitId: string) => {
    loadOutfit(outfitId)
    onLoadOutfit()
  }

  if (savedOutfits.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-12rem)] text-center px-4">
        <div className="w-24 h-24 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-6">
          <ImageIcon className="w-12 h-12 text-pink-400" />
        </div>
        <h2
          className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2"
          style={{ fontFamily: 'Fredoka One, sans-serif' }}
        >
          No Outfits Yet!
        </h2>
        <p
          className="text-slate-600 dark:text-slate-400 max-w-xs"
          style={{ fontFamily: 'Nunito, sans-serif' }}
        >
          Create your first outfit and tap Done to save it here!
        </p>
      </div>
    )
  }

  return (
    <div className="p-4">
      <h2
        className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4"
        style={{ fontFamily: 'Fredoka One, sans-serif' }}
      >
        Your Outfits ({savedOutfits.length})
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {savedOutfits.map((outfit) => (
          <div
            key={outfit.id}
            className="group relative bg-white dark:bg-slate-800 rounded-2xl p-3 shadow-md hover:shadow-lg transition-shadow"
          >
            {/* Outfit Preview (simplified - shows equipped count) */}
            <div
              className="aspect-[2/3] bg-gradient-to-b from-pink-50 to-violet-50 dark:from-slate-700 dark:to-slate-600 rounded-xl flex items-center justify-center mb-2 cursor-pointer hover:ring-2 hover:ring-pink-300 transition-all"
              onClick={() => handleLoadOutfit(outfit.id)}
            >
              <div className="text-center">
                <div className="text-3xl mb-1">👗</div>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {Object.values(outfit.equipped).filter(Boolean).length} items
                </span>
              </div>
            </div>

            {/* Outfit Name */}
            <p
              className="text-sm font-medium text-slate-700 dark:text-slate-200 truncate"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              {outfit.name}
            </p>

            {/* Delete Button */}
            <button
              onClick={() => deleteOutfit(outfit.id)}
              className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 dark:bg-slate-700/80 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-100 dark:hover:bg-red-900/30"
              aria-label="Delete outfit"
            >
              <Trash2 className="w-4 h-4 text-red-500" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
