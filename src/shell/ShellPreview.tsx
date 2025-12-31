'use client'

import { useState } from 'react'
import { AppShell } from './components/AppShell'
import { OutfitBuilder } from '@/components/OutfitBuilder'
import { Gallery } from '@/components/Gallery'

export default function ShellPreview() {
  const [activeTab, setActiveTab] = useState<'create' | 'gallery'>('create')

  return (
    <AppShell
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'create' ? (
        <OutfitBuilder />
      ) : (
        <Gallery onLoadOutfit={() => setActiveTab('create')} />
      )}
    </AppShell>
  )
}
