'use client'

import { useState } from 'react'
import { AppShell } from './components/AppShell'

export default function ShellPreview() {
  const [activeTab, setActiveTab] = useState<'create' | 'gallery'>('create')

  return (
    <AppShell
      activeTab={activeTab}
      onTabChange={setActiveTab}
      onSettingsClick={() => console.log('Settings clicked')}
    >
      <div className="p-6">
        {activeTab === 'create' ? (
          <div className="text-center py-12">
            <h2
              className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2"
              style={{ fontFamily: 'Fredoka One, sans-serif' }}
            >
              Outfit Builder
            </h2>
            <p className="text-slate-600 dark:text-slate-400" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Drag and drop clothes to dress your character!
            </p>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2
              className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2"
              style={{ fontFamily: 'Fredoka One, sans-serif' }}
            >
              Your Gallery
            </h2>
            <p className="text-slate-600 dark:text-slate-400" style={{ fontFamily: 'Nunito, sans-serif' }}>
              View your saved outfits here!
            </p>
          </div>
        )}
      </div>
    </AppShell>
  )
}
