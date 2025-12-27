'use client'

import { Sparkles } from 'lucide-react'

interface DoneButtonProps {
  hasEquippedItems: boolean
  onClick: () => void
}

export default function DoneButton({ hasEquippedItems, onClick }: DoneButtonProps) {
  if (!hasEquippedItems) return null

  return (
    <button
      onClick={onClick}
      className="
        group
        relative
        flex
        items-center
        justify-center
        gap-3
        px-10
        py-5
        text-2xl
        font-display
        text-white
        bg-gradient-to-br
        from-pink-400
        via-pink-500
        to-pink-600
        rounded-full
        shadow-[0_8px_0_0_#be185d,0_12px_20px_rgba(236,72,153,0.4)]
        transition-all
        duration-200
        ease-out
        hover:shadow-[0_6px_0_0_#be185d,0_10px_16px_rgba(236,72,153,0.5)]
        hover:translate-y-0.5
        active:shadow-[0_2px_0_0_#be185d,0_4px_8px_rgba(236,72,153,0.3)]
        active:translate-y-1.5
        focus:outline-none
        focus-visible:ring-4
        focus-visible:ring-pink-300
        dark:from-pink-500
        dark:via-pink-600
        dark:to-pink-700
        dark:shadow-[0_8px_0_0_#9d174d,0_12px_20px_rgba(219,39,119,0.5)]
        dark:hover:shadow-[0_6px_0_0_#9d174d,0_10px_16px_rgba(219,39,119,0.6)]
        dark:active:shadow-[0_2px_0_0_#9d174d,0_4px_8px_rgba(219,39,119,0.4)]
        animate-bounce-gentle
      "
      aria-label="Show runway with your outfit"
    >
      {/* Sparkle burst effect on hover */}
      <span className="
        absolute
        -inset-2
        rounded-full
        bg-gradient-to-r
        from-pink-300
        via-violet-300
        to-cyan-300
        opacity-0
        blur-xl
        transition-opacity
        duration-300
        group-hover:opacity-40
        dark:from-pink-500
        dark:via-violet-500
        dark:to-cyan-500
      " />

      {/* Sparkle icon with spin animation on hover */}
      <Sparkles
        className="
          relative
          w-7
          h-7
          transition-transform
          duration-300
          group-hover:rotate-12
          group-hover:scale-110
        "
        strokeWidth={2.5}
      />

      {/* Text */}
      <span className="relative tracking-wide">
        Done!
      </span>

      {/* Floating sparkle particles */}
      <span className="
        absolute
        -top-1
        -right-1
        w-3
        h-3
        rounded-full
        bg-cyan-300
        animate-ping
        opacity-75
        dark:bg-cyan-400
      " />
      <span className="
        absolute
        -bottom-1
        -left-1
        w-2
        h-2
        rounded-full
        bg-violet-300
        animate-ping
        animation-delay-150
        opacity-75
        dark:bg-violet-400
      " />
    </button>
  )
}
