'use client'

import { Sparkles, Image } from 'lucide-react'

interface BottomNavProps {
  activeTab: 'create' | 'gallery'
  onTabChange?: (tab: 'create' | 'gallery') => void
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: 'create' as const, icon: Sparkles, label: 'Create' },
    { id: 'gallery' as const, icon: Image, label: 'Gallery' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-t border-pink-100 dark:border-slate-700">
      <div className="max-w-4xl mx-auto h-full flex items-center justify-around px-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          const Icon = tab.icon

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange?.(tab.id)}
              className={`
                flex flex-col items-center justify-center gap-1 px-6 py-2 rounded-2xl transition-all
                ${isActive
                  ? 'bg-pink-100 dark:bg-pink-900/30 scale-105'
                  : 'hover:bg-pink-50 dark:hover:bg-slate-800'
                }
              `}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon
                className={`w-7 h-7 transition-colors ${
                  isActive
                    ? 'text-pink-500 dark:text-pink-400'
                    : 'text-slate-400 dark:text-slate-500'
                }`}
              />
              <span
                className={`text-xs font-medium transition-colors ${
                  isActive
                    ? 'text-pink-600 dark:text-pink-400'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
