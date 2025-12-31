'use client'

import { Settings } from 'lucide-react'

interface HeaderProps {
  onSettingsClick?: () => void
}

export function Header({ onSettingsClick }: HeaderProps) {
  return (
    <header className="h-14 px-4 flex items-center justify-between bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-pink-100 dark:border-slate-700">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-2xl">✨</span>
        <h1
          className="text-xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"
          style={{ fontFamily: 'Fredoka One, sans-serif' }}
        >
          Dressy
        </h1>
      </div>

      {/* Settings Button - only renders if handler is provided */}
      {onSettingsClick && (
        <button
          onClick={onSettingsClick}
          className="p-2 rounded-xl hover:bg-pink-100 dark:hover:bg-slate-700 transition-colors"
          aria-label="Settings"
        >
          <Settings className="w-6 h-6 text-slate-600 dark:text-slate-300" />
        </button>
      )}
    </header>
  )
}
