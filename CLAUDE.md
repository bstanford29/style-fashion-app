# Style Fashion App

## Project Overview
A kids dress-up game where children (ages 5-10) can dress doll characters with clothing items that fit perfectly using a pre-rendered layer system.

## Tech Stack
- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **State:** React Context + localStorage

## Key Architecture: Pre-Rendered Layer System
Clothes fit perfectly because each item is pre-rendered to match the character's pose:
- All items are 800x1200px PNGs with transparency
- Items layer using z-index ordering
- 2-3 character bases, all sharing the same pose

## Design OS Integration
This project uses Design OS for planning. Planning files are in `product/`:
- `product/product-overview.md` - Vision and features
- `product/product-roadmap.md` - Sections breakdown
- `product/data-model/` - Entity definitions
- `product/design-system/` - Colors and typography
- `product/shell/` - Navigation spec
- `product/sections/` - Per-section specs and data

## Key Commands
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run lint         # Run ESLint
```

## Folder Structure
```
src/
├── app/              # Next.js App Router pages
├── components/       # Reusable UI components
│   ├── CharacterDisplay.tsx
│   ├── CategorySelector.tsx
│   ├── ItemGrid.tsx
│   └── ...
├── context/          # React Context providers
│   └── OutfitContext.tsx
└── lib/              # Utilities and types

public/
└── assets/
    ├── characters/   # Base character PNGs
    └── clothing/     # Clothing item PNGs
```

## Design Tokens (Kid-Friendly)
- Primary: pink
- Secondary: violet
- Accent: cyan
- Neutral: slate
- Font: Fredoka One (headings), Nunito (body)
