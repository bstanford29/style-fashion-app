'use client'

import { Header } from './Header'
import { BottomNav } from './BottomNav'

interface AppShellProps {
  children: React.ReactNode
  activeTab: 'create' | 'gallery'
  onTabChange?: (tab: 'create' | 'gallery') => void
  onSettingsClick?: () => void
}

export function AppShell({
  children,
  activeTab,
  onTabChange,
  onSettingsClick,
}: AppShellProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-violet-50 dark:from-slate-900 dark:to-slate-800 flex flex-col">
      {/* Header */}
      <Header onSettingsClick={onSettingsClick} />

      {/* Main Content */}
      <main className="flex-1 overflow-auto pb-20">
        <div className="max-w-4xl mx-auto w-full">
          {children}
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  )
}
