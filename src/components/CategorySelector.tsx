'use client'

import { Scissors, Shirt, Footprints, Gem } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type ClothingCategory = 'hair' | 'top' | 'bottom' | 'shoes' | 'accessory'

interface CategorySelectorProps {
  selectedCategory: ClothingCategory
  onSelectCategory: (category: ClothingCategory) => void
}

// Custom pants icon component since lucide-react doesn't have one
function PantsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Waistband */}
      <path d="M4 4h16v3H4z" />
      {/* Left leg */}
      <path d="M4 7l2 13h4l1-13" />
      {/* Right leg */}
      <path d="M13 7l1 13h4l2-13" />
    </svg>
  )
}

interface CategoryItem {
  id: ClothingCategory
  icon: LucideIcon | typeof PantsIcon
  label: string
  emoji: string
}

const categories: CategoryItem[] = [
  { id: 'hair', icon: Scissors, label: 'Hair', emoji: '✂️' },
  { id: 'top', icon: Shirt, label: 'Tops', emoji: '👕' },
  { id: 'bottom', icon: PantsIcon, label: 'Bottoms', emoji: '👖' },
  { id: 'shoes', icon: Footprints, label: 'Shoes', emoji: '👟' },
  { id: 'accessory', icon: Gem, label: 'Accessories', emoji: '💎' },
]

export function CategorySelector({
  selectedCategory,
  onSelectCategory,
}: CategorySelectorProps) {
  return (
    <nav
      className="flex flex-col gap-2 p-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-pink-100/50 dark:shadow-slate-900/50"
      aria-label="Clothing categories"
    >
      {categories.map((category) => {
        const isActive = selectedCategory === category.id
        const Icon = category.icon

        return (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`
              group relative flex items-center justify-center
              w-12 h-12 min-w-[48px] min-h-[48px]
              rounded-xl
              transition-all duration-200 ease-out
              focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2
              ${isActive
                ? 'bg-pink-100 dark:bg-pink-900/30 scale-105 shadow-md shadow-pink-200/50 dark:shadow-pink-900/30'
                : 'bg-slate-50 dark:bg-slate-700/50 hover:bg-pink-50 dark:hover:bg-slate-700 hover:scale-110'
              }
            `}
            aria-label={category.label}
            aria-pressed={isActive}
            title={category.label}
          >
            {/* Icon */}
            <Icon
              className={`
                w-8 h-8 transition-all duration-200
                ${isActive
                  ? 'text-pink-500 dark:text-pink-400'
                  : 'text-slate-400 dark:text-slate-500 group-hover:text-pink-400 dark:group-hover:text-pink-300'
                }
              `}
            />

            {/* Active indicator dot */}
            {isActive && (
              <span
                className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-pink-500 dark:bg-pink-400 rounded-full animate-pulse"
                aria-hidden="true"
              />
            )}

            {/* Tooltip on hover for non-touch devices */}
            <span
              className="
                absolute left-full ml-3 px-2 py-1
                bg-slate-800 dark:bg-slate-600 text-white text-xs font-medium
                rounded-md whitespace-nowrap
                opacity-0 scale-95 pointer-events-none
                group-hover:opacity-100 group-hover:scale-100
                transition-all duration-150
                hidden sm:block
              "
              role="tooltip"
            >
              {category.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}

export type { ClothingCategory, CategorySelectorProps }
