# Kids Dress-Up Fashion App - Design Document

**Date:** 2024-12-27
**Status:** Approved
**Target Audience:** Children ages 5-10

---

## Overview

A playful dress-up game where kids can dress a character with clothing that fits perfectly using a pre-rendered layer system. Pure sandbox experience with no unlocks or barriers.

---

## Core Experience

### Interaction Model: Drag and Drop
- **Drag item onto character** → snaps into place with pop animation
- **Drag item off character** → removes with woosh animation
- **Drag new item to occupied slot** → auto-replaces instantly (no confirmation)

### Character
- Single character design with **4-5 skin tone variants**
- Fixed front-facing pose (arms slightly out) so all clothes fit
- Skin tone picker accessible from button near character

### Wardrobe (MVP)
- ~30-40 items total
- 5 categories × 6-8 items each:
  - Hair (6-8 styles)
  - Tops (6-8 shirts/dresses)
  - Bottoms (6-8 pants/skirts)
  - Shoes (5-6 pairs)
  - Accessories (5-6 items)
- **All items available immediately** (pure sandbox, no unlocks)

---

## Reward & Save Flow

### Completion Flow
1. Tap **"Done!"** button (big, colorful, bottom-right)
2. **Runway animation:**
   - Background dims
   - Sparkle/confetti effect
   - Character spins or poses
   - Fun sound effect
3. **Save prompt:**
   - "Save this look?" with preview
   - Optional outfit name input
   - "Save" button → goes to Gallery
4. **Share option:**
   - "Download" button generates PNG
   - Image includes character + decorative frame
   - Parent controls external sharing

### Gallery
- Grid of saved outfit thumbnails
- Tap to load outfit back onto character
- Long-press or swipe to delete
- No limit (localStorage)

---

## Technical: Layer System

### Canvas Specifications
All assets share fixed **800×1200px canvas** with transparency. Items pre-positioned to align with character pose.

### Layer Order (z-index)
```
Layer 0: Character base (skin tone variant)
Layer 1: Shoes
Layer 2: Bottoms (pants/skirts)
Layer 3: Tops (shirts/dresses)
Layer 4: Outerwear (future)
Layer 5: Accessories (bags/jewelry)
Layer 6: Hair
Layer 7: Hats/Headwear (future)
```

### Asset Naming
```
characters/base_skin01.png
characters/base_skin02.png
clothing/hair_001_ponytail.png
clothing/top_001_striped-tee.png
clothing/bottom_001_jeans.png
clothing/shoes_001_sneakers.png
clothing/accessory_001_sunglasses.png
```

### State Structure
```typescript
interface OutfitState {
  skinTone: string;  // "skin01", "skin02", etc.
  equipped: {
    hair: string | null;
    top: string | null;
    bottom: string | null;
    shoes: string | null;
    accessory: string | null;
  };
}
```

---

## UI Layout

### Main Screen (Outfit Builder)
```
┌──────────────────────────────────────────────────────────┐
│  [Dressy]                                 [skin tone 👤] │
├────────────────────┬──────┬──────────────────────────────┤
│                    │      │                              │
│  ┌────┬────┬────┐  │  💇  │      ┌──────────────────┐    │
│  │    │    │    │  │  👕  │      │                  │    │
│  ├────┼────┼────┤  │  👖  │      │    CHARACTER     │    │
│  │    │    │    │  │  👟  │      │    DISPLAY       │    │
│  ├────┼────┼────┤  │  💎  │      │                  │    │
│  │    │    │    │  │      │      │                  │    │
│  └────┴────┴────┘  │      │      └──────────────────┘    │
│                    │      │                              │
│   [Item Grid]      │ Cat. │         [Done!]              │
└────────────────────┴──────┴──────────────────────────────┘
```

### Navigation
Simple bottom bar with two tabs:
- **Create** - Main outfit builder
- **Gallery** - Saved outfits

---

## Visual Style

### Color Palette
| Role | Color | Tailwind |
|------|-------|----------|
| Primary | Pink | `pink-400` to `pink-600` |
| Secondary | Violet | `violet-400` to `violet-500` |
| Accent | Cyan | `cyan-300` to `cyan-400` |
| Neutral | Slate | `slate-100` to `slate-800` |
| Background | Gradient | `pink-50` → `violet-50` |

### Typography
- **Headings:** Fredoka One (bubbly, playful)
- **Body:** Nunito (friendly, readable)

### UI Characteristics
- Rounded corners everywhere (xl/2xl radius)
- Soft shadows, no harsh edges
- Items bounce on hover/tap
- Selected category gets glow/highlight
- Drag feedback: scale up + shadow

### Animations
- **Item equip:** Pop + subtle bounce
- **Item remove:** Shrink + fade
- **Runway:** Spin + sparkle burst + confetti
- **Page transitions:** Soft fade/slide

---

## Screens Summary

| Screen | Purpose |
|--------|---------|
| Create | Main outfit builder with drag-drop |
| Gallery | View/load/delete saved outfits |

---

## Out of Scope (MVP)

- Multiple character poses
- Gamification/unlocks
- Social features
- In-app purchases
- User accounts
- Sound effects (nice-to-have)

---

## Next Steps

1. Run Design OS workflow (`/product-vision` → `/export-product`)
2. Generate placeholder assets (AI-assisted)
3. Build core components with parallel agents
4. Test with target age group
