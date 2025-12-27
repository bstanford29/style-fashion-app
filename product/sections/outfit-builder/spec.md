# Outfit Builder Section

## Overview
The main dress-up interface where kids drag and drop clothing items onto a character. This is the core experience of the app.

## Layout
```
┌────────────────────┬──────┬──────────────────────────────┐
│                    │      │                              │
│  ┌────┬────┬────┐  │  💇  │      ┌──────────────────┐    │
│  │    │    │    │  │  👕  │      │                  │    │
│  ├────┼────┼────┤  │  👖  │      │    CHARACTER     │    │
│  │    │    │    │  │  👟  │      │    DISPLAY       │    │
│  ├────┼────┼────┤  │  💎  │      │    (layered)     │    │
│  │    │    │    │  │      │      │                  │    │
│  └────┴────┴────┘  │      │      └──────────────────┘    │
│                    │      │                              │
│   [Item Grid]      │ Cat. │         [Done!]              │
└────────────────────┴──────┴──────────────────────────────┘
```

## Components

### CharacterDisplay
- Shows the dressed character using layered PNGs
- Drop zone for drag-and-drop
- Fixed 800x1200 canvas scaled to fit
- Displays equipped items at correct z-index

### CategorySelector
- Vertical bar of category icons
- Categories: Hair, Tops, Bottoms, Shoes, Accessories
- Active category highlighted with pink background
- Icons: 32px, rounded, playful

### ItemGrid
- 3x3 or 4x3 grid of items for selected category
- Each item shows thumbnail
- Draggable items
- Visual feedback when dragging

### DoneButton
- Large pink button "Done!"
- Triggers runway animation when tapped
- Only visible when at least one item equipped

## Interactions

### Drag and Drop
1. User drags item from grid
2. Item follows finger/cursor
3. Character display shows drop zone highlight
4. On drop: item snaps to character with pop animation
5. Auto-replace if slot already occupied

### Remove Item
- Drag equipped item off character area
- Item disappears with woosh animation

## State
```typescript
interface OutfitBuilderState {
  selectedCategory: 'hair' | 'top' | 'bottom' | 'shoes' | 'accessory'
  equipped: {
    hair: string | null
    top: string | null
    bottom: string | null
    shoes: string | null
    accessory: string | null
  }
  skinTone: string
  isDragging: boolean
  draggedItem: string | null
}
```

## Animations
- Item equip: scale(1.1) → scale(1) + opacity fade in
- Item remove: scale(1) → scale(0.8) + opacity fade out
- Category switch: items grid fade in with stagger
- Drop zone highlight: pulsing pink border
