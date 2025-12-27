'use client'

import { useOutfit } from '@/context/OutfitContext'

/** Skin tone options matching CharacterBase.tsx */
const SKIN_TONES = [
  { id: 'skin01', label: 'Light', color: '#FFE4C4' },
  { id: 'skin02', label: 'Medium Light', color: '#DEB887' },
  { id: 'skin03', label: 'Medium', color: '#D2691E' },
  { id: 'skin04', label: 'Medium Dark', color: '#8B4513' },
  { id: 'skin05', label: 'Dark', color: '#4A2C2A' },
]

export function SkinToneSelector() {
  const { state, setSkinTone } = useOutfit()

  return (
    <div className="flex flex-col items-center gap-2 p-3 bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-md backdrop-blur-sm">
      {/* Label */}
      <span
        className="text-xs font-bold text-pink-500 dark:text-pink-400 uppercase tracking-wider"
        style={{ fontFamily: 'Fredoka One, sans-serif' }}
      >
        Skin Tone
      </span>

      {/* Skin tone circles */}
      <div className="flex gap-2">
        {SKIN_TONES.map((tone) => (
          <button
            key={tone.id}
            onClick={() => setSkinTone(tone.id)}
            className={`
              w-8 h-8 rounded-full
              transition-all duration-200 ease-out
              hover:scale-110
              focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2
              ${state.skinTone === tone.id
                ? 'ring-2 ring-pink-500 ring-offset-2 scale-110 shadow-lg'
                : 'shadow-md hover:shadow-lg'
              }
            `}
            style={{ backgroundColor: tone.color }}
            aria-label={`Select ${tone.label} skin tone`}
            title={tone.label}
          />
        ))}
      </div>
    </div>
  )
}

export default SkinToneSelector
