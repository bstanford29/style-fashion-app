'use client'

import { useState, useMemo, useCallback, useId } from 'react'
import { X, Download, Save, Play, Sparkles, Star, Heart } from 'lucide-react'

interface RunwayModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (name: string) => void
  onDownload: () => void
  characterDisplay: React.ReactNode
}

// Pre-generated particle configurations (deterministic)
const CONFETTI_COLORS = ['#ec4899', '#8b5cf6', '#06b6d4', '#fbbf24', '#34d399', '#f472b6']
const SHAPE_COLORS = ['#fbbf24', '#ec4899', '#8b5cf6', '#06b6d4']

// Confetti particle component
function ConfettiParticle({ delay, x, color }: { delay: number; x: number; color: string }) {
  return (
    <div
      className="absolute top-0 animate-confetti-fall"
      style={{
        left: `${x}%`,
        animationDelay: `${delay}ms`,
      }}
    >
      <div
        className="w-3 h-3 rounded-sm animate-confetti-spin"
        style={{
          backgroundColor: color,
          animationDelay: `${delay}ms`,
        }}
      />
    </div>
  )
}

// Sparkle burst component
function SparkleBurst({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <div
      className="absolute animate-sparkle-burst"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}ms`,
      }}
    >
      <Sparkles className="w-6 h-6 text-yellow-300" />
    </div>
  )
}

// Floating shape component
function FloatingShape({ icon: Icon, x, y, delay, color }: {
  icon: typeof Star
  x: number
  y: number
  delay: number
  color: string
}) {
  return (
    <div
      className="absolute animate-float-up opacity-0"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}ms`,
      }}
    >
      <Icon className="w-5 h-5" style={{ color }} />
    </div>
  )
}

// Seeded random number generator for consistent particle positions
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

// Pre-generate particle data with a fixed seed (deterministic)
function generateParticles(instanceId: string, seed: number) {
  const confetti = Array.from({ length: 50 }, (_, i) => ({
    id: `${instanceId}-confetti-${i}`,
    delay: seededRandom(seed + i) * 2000,
    x: seededRandom(seed + i + 100) * 100,
    color: CONFETTI_COLORS[Math.floor(seededRandom(seed + i + 200) * CONFETTI_COLORS.length)],
  }))

  const sparkles = Array.from({ length: 12 }, (_, i) => ({
    id: `${instanceId}-sparkle-${i}`,
    x: 20 + seededRandom(seed + i + 300) * 60,
    y: 20 + seededRandom(seed + i + 400) * 60,
    delay: seededRandom(seed + i + 500) * 1500,
  }))

  const shapes = [Star, Heart, Sparkles]
  const floatingShapes = Array.from({ length: 15 }, (_, i) => ({
    id: `${instanceId}-shape-${i}`,
    icon: shapes[Math.floor(seededRandom(seed + i + 600) * shapes.length)],
    x: seededRandom(seed + i + 700) * 100,
    y: 60 + seededRandom(seed + i + 800) * 40,
    delay: seededRandom(seed + i + 900) * 3000,
    color: SHAPE_COLORS[Math.floor(seededRandom(seed + i + 1000) * SHAPE_COLORS.length)],
  }))

  return { confetti, sparkles, floatingShapes }
}

// Inner modal content - gets remounted each time the modal opens for fresh animations
function RunwayModalContent({
  onClose,
  onSave,
  onDownload,
  characterDisplay,
}: Omit<RunwayModalProps, 'isOpen'>) {
  const [outfitName, setOutfitName] = useState('')
  const [showNameInput, setShowNameInput] = useState(false)
  const instanceId = useId()

  // Generate particles once when component mounts (fresh on each modal open)
  const { confetti, sparkles, floatingShapes } = useMemo(
    () => generateParticles(instanceId, 42),
    [instanceId]
  )

  const handleSaveClick = useCallback(() => {
    if (showNameInput && outfitName.trim()) {
      onSave(outfitName.trim())
      setShowNameInput(false)
      setOutfitName('')
    } else {
      setShowNameInput(true)
    }
  }, [showNameInput, outfitName, onSave])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && outfitName.trim()) {
      onSave(outfitName.trim())
      setShowNameInput(false)
      setOutfitName('')
    }
    if (e.key === 'Escape') {
      setShowNameInput(false)
    }
  }, [outfitName, onSave])

  const handleClose = useCallback(() => {
    setShowNameInput(false)
    setOutfitName('')
    onClose()
  }, [onClose])

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        p-4
        animate-fade-in
      "
      role="dialog"
      aria-modal="true"
      aria-labelledby="runway-title"
    >
      {/* Backdrop */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-slate-900/90
          via-purple-900/80
          to-slate-900/90
          backdrop-blur-sm
        "
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Confetti layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {confetti.map((particle) => (
          <ConfettiParticle
            key={particle.id}
            delay={particle.delay}
            x={particle.x}
            color={particle.color}
          />
        ))}
      </div>

      {/* Sparkle layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {sparkles.map((sparkle) => (
          <SparkleBurst
            key={sparkle.id}
            x={sparkle.x}
            y={sparkle.y}
            delay={sparkle.delay}
          />
        ))}
      </div>

      {/* Floating shapes layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingShapes.map((shape) => (
          <FloatingShape
            key={shape.id}
            icon={shape.icon}
            x={shape.x}
            y={shape.y}
            delay={shape.delay}
            color={shape.color}
          />
        ))}
      </div>

      {/* Main modal content */}
      <div
        className="
          relative
          flex
          flex-col
          items-center
          w-full
          max-w-md
          animate-scale-bounce-in
        "
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="
            absolute
            -top-2
            -right-2
            z-10
            p-2
            bg-white
            rounded-full
            shadow-lg
            transition-transform
            duration-200
            hover:scale-110
            active:scale-95
            focus:outline-none
            focus-visible:ring-4
            focus-visible:ring-pink-300
            dark:bg-slate-800
          "
          aria-label="Close runway modal"
        >
          <X className="w-6 h-6 text-slate-600 dark:text-slate-300" />
        </button>

        {/* Title */}
        <h2
          id="runway-title"
          className="
            mb-6
            text-4xl
            font-display
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-pink-400
            via-violet-400
            to-cyan-400
            animate-shimmer
            drop-shadow-[0_2px_4px_rgba(236,72,153,0.5)]
          "
        >
          Runway Ready!
        </h2>

        {/* Character display container */}
        <div
          className="
            relative
            w-72
            h-96
            mb-8
            bg-gradient-to-b
            from-pink-100
            via-violet-50
            to-cyan-100
            rounded-3xl
            shadow-[0_0_60px_rgba(236,72,153,0.3),0_0_120px_rgba(139,92,246,0.2)]
            overflow-hidden
            dark:from-pink-900/30
            dark:via-violet-900/30
            dark:to-cyan-900/30
          "
        >
          {/* Spotlight effect */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-radial
              from-white/40
              via-transparent
              to-transparent
              pointer-events-none
              dark:from-white/10
            "
          />

          {/* Bouncing character container */}
          <div className="relative w-full h-full animate-character-bounce">
            {characterDisplay}
          </div>

          {/* Stage floor reflection */}
          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              h-16
              bg-gradient-to-t
              from-slate-900/20
              to-transparent
              dark:from-slate-900/40
            "
          />
        </div>

        {/* Name input (shown when saving) */}
        {showNameInput && (
          <div className="w-full mb-4 animate-slide-up">
            <input
              type="text"
              value={outfitName}
              onChange={(e) => setOutfitName(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Name your outfit..."
              autoFocus
              className="
                w-full
                px-6
                py-3
                text-lg
                font-sans
                text-center
                text-slate-700
                bg-white
                border-4
                border-pink-300
                rounded-full
                shadow-lg
                placeholder:text-slate-400
                focus:outline-none
                focus:border-pink-500
                focus:ring-4
                focus:ring-pink-200
                dark:bg-slate-800
                dark:text-white
                dark:border-pink-600
                dark:placeholder:text-slate-500
                dark:focus:ring-pink-800
              "
            />
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* Save button */}
          <button
            onClick={handleSaveClick}
            className="
              group
              flex
              items-center
              gap-2
              px-6
              py-3
              text-lg
              font-display
              text-white
              bg-gradient-to-br
              from-violet-400
              via-violet-500
              to-violet-600
              rounded-full
              shadow-[0_4px_0_0_#6d28d9,0_6px_12px_rgba(139,92,246,0.4)]
              transition-all
              duration-200
              hover:shadow-[0_3px_0_0_#6d28d9,0_5px_10px_rgba(139,92,246,0.5)]
              hover:translate-y-0.5
              active:shadow-[0_1px_0_0_#6d28d9,0_2px_4px_rgba(139,92,246,0.3)]
              active:translate-y-1
              focus:outline-none
              focus-visible:ring-4
              focus-visible:ring-violet-300
              dark:from-violet-500
              dark:via-violet-600
              dark:to-violet-700
            "
          >
            <Save className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>{showNameInput ? 'Save!' : 'Save'}</span>
          </button>

          {/* Download button */}
          <button
            onClick={onDownload}
            className="
              group
              flex
              items-center
              gap-2
              px-6
              py-3
              text-lg
              font-display
              text-white
              bg-gradient-to-br
              from-cyan-400
              via-cyan-500
              to-cyan-600
              rounded-full
              shadow-[0_4px_0_0_#0891b2,0_6px_12px_rgba(6,182,212,0.4)]
              transition-all
              duration-200
              hover:shadow-[0_3px_0_0_#0891b2,0_5px_10px_rgba(6,182,212,0.5)]
              hover:translate-y-0.5
              active:shadow-[0_1px_0_0_#0891b2,0_2px_4px_rgba(6,182,212,0.3)]
              active:translate-y-1
              focus:outline-none
              focus-visible:ring-4
              focus-visible:ring-cyan-300
              dark:from-cyan-500
              dark:via-cyan-600
              dark:to-cyan-700
            "
          >
            <Download className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>Download</span>
          </button>

          {/* Keep Playing button */}
          <button
            onClick={handleClose}
            className="
              group
              flex
              items-center
              gap-2
              px-6
              py-3
              text-lg
              font-display
              text-white
              bg-gradient-to-br
              from-pink-400
              via-pink-500
              to-pink-600
              rounded-full
              shadow-[0_4px_0_0_#be185d,0_6px_12px_rgba(236,72,153,0.4)]
              transition-all
              duration-200
              hover:shadow-[0_3px_0_0_#be185d,0_5px_10px_rgba(236,72,153,0.5)]
              hover:translate-y-0.5
              active:shadow-[0_1px_0_0_#be185d,0_2px_4px_rgba(236,72,153,0.3)]
              active:translate-y-1
              focus:outline-none
              focus-visible:ring-4
              focus-visible:ring-pink-300
              dark:from-pink-500
              dark:via-pink-600
              dark:to-pink-700
            "
          >
            <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>Keep Playing</span>
          </button>
        </div>
      </div>
    </div>
  )
}

// Main modal wrapper - conditionally renders content
export default function RunwayModal({
  isOpen,
  onClose,
  onSave,
  onDownload,
  characterDisplay,
}: RunwayModalProps) {
  if (!isOpen) return null

  return (
    <RunwayModalContent
      onClose={onClose}
      onSave={onSave}
      onDownload={onDownload}
      characterDisplay={characterDisplay}
    />
  )
}
