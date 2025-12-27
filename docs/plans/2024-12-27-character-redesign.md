# Character Redesign Plan - Life-Like Dress-Up Figure

**Date:** 2024-12-27
**Status:** AWAITING REVIEW
**Problem:** Current placeholder character is crude CSS shapes that look terrible. Drag-and-drop doesn't work.

---

## Current Issues

### 1. Character Looks Terrible
- Using colored `<div>` rectangles for body parts
- No actual human form or proportions
- Completely unusable for a dress-up game

### 2. Drag-and-Drop Broken
- Items can be dragged but don't visually equip on character
- State updates but visual feedback is missing
- Touch support untested

---

## Proposed Solution: SVG Illustrated Character System

### Why SVG?
- **Vector-based**: Scales perfectly at any size
- **Inline rendering**: No external files needed initially
- **Animatable**: Can add bounce, wave, blink animations
- **Styleable**: Colors can be changed via CSS/props (skin tones)
- **No asset dependency**: Works immediately without PNG files

### Character Design Approach

**Option A: Chibi/Kawaii Style (Recommended for Kids 5-10)**
```
┌─────────────────────────────────┐
│          ┌─────┐               │
│         (  ◕‿◕ )  ← Big eyes   │
│          └──┬──┘    cute face  │
│             │                   │
│         ┌───┴───┐              │
│         │ TORSO │ ← Simplified │
│         └───┬───┘   body       │
│           ┌─┴─┐                │
│           │   │ ← Short legs   │
│           └───┘                │
│                                │
│  Large head, small body        │
│  Approachable, not realistic   │
└─────────────────────────────────┘
```
- Large expressive head (40% of height)
- Simplified body proportions
- Friendly, non-intimidating
- Perfect for kids app

**Option B: Fashion Doll Style**
```
┌─────────────────────────────────┐
│           ┌───┐                │
│           │ o │ ← Smaller head │
│           └─┬─┘                │
│         ┌───┴───┐              │
│         │       │              │
│         │ TORSO │ ← Elongated  │
│         │       │   fashion    │
│         └───┬───┘   proportions│
│           ┌─┴─┐                │
│           │   │                │
│           │   │ ← Long legs    │
│           │   │                │
│           └───┘                │
└─────────────────────────────────┘
```
- Elongated fashion proportions
- More "grown up" look
- Better for showcasing clothes

**Option C: Realistic Cartoon**
```
┌─────────────────────────────────┐
│           ┌───┐                │
│          (  •• )               │
│           └─┬─┘                │
│         ┌───┴───┐              │
│         │       │              │
│         │ TORSO │              │
│         └───┬───┘              │
│           ┌─┴─┐                │
│           │   │                │
│           │   │                │
│           └───┘                │
│                                │
│  Normal human proportions      │
│  More realistic but still      │
│  illustrated/cartoonish        │
└─────────────────────────────────┘
```

---

## Technical Architecture

### SVG Layer System

```tsx
<svg viewBox="0 0 400 600" className="character-canvas">
  {/* Layer 0: Shadow */}
  <ellipse className="shadow" />

  {/* Layer 1: Back Hair (if long hair style) */}
  {equipped.hair && <HairBack style={equipped.hair} />}

  {/* Layer 2: Body Base */}
  <BodyBase skinTone={skinTone} />

  {/* Layer 3: Underwear/Base layer (always visible) */}
  <BaseUndergarments />

  {/* Layer 4: Bottom clothing */}
  {equipped.bottom && <BottomClothing item={equipped.bottom} />}

  {/* Layer 5: Shoes */}
  {equipped.shoes && <Shoes item={equipped.shoes} />}

  {/* Layer 6: Top clothing */}
  {equipped.top && <TopClothing item={equipped.top} />}

  {/* Layer 7: Head/Face */}
  <Head skinTone={skinTone} />

  {/* Layer 8: Front Hair */}
  {equipped.hair && <HairFront style={equipped.hair} />}

  {/* Layer 9: Accessories */}
  {equipped.accessory && <Accessory item={equipped.accessory} />}
</svg>
```

### Clothing Item Definition

```typescript
interface ClothingItemSVG {
  id: string
  name: string
  category: 'hair' | 'top' | 'bottom' | 'shoes' | 'accessory'

  // SVG path data for the clothing shape
  svgPaths: {
    main: string      // Main clothing shape
    details?: string  // Buttons, patterns, etc.
    shadow?: string   // Optional shadow/depth
  }

  // Colors
  primaryColor: string
  secondaryColor?: string
  accentColor?: string

  // Thumbnail for grid (simplified SVG)
  thumbnailSvg: string
}
```

### Example: T-Shirt SVG Component

```tsx
function TShirtTop({ color = '#FF69B4' }: { color: string }) {
  return (
    <g className="clothing-top animate-equip">
      {/* Main shirt body */}
      <path
        d="M140,180
           L120,190 L100,250 L120,250 L130,220  // Left sleeve
           L130,300 L270,300                      // Body
           L270,220 L280,250 L300,250 L280,190   // Right sleeve
           L260,180                               // Neckline right
           L220,170 L200,175 L180,170             // Collar curve
           L140,180 Z"
        fill={color}
        stroke={darken(color, 20)}
        strokeWidth="2"
      />

      {/* Collar detail */}
      <path
        d="M180,170 Q200,185 220,170"
        fill="none"
        stroke={darken(color, 30)}
        strokeWidth="3"
      />

      {/* Sleeve cuffs */}
      <path d="M100,245 L120,245" stroke={darken(color, 20)} strokeWidth="3" />
      <path d="M280,245 L300,245" stroke={darken(color, 20)} strokeWidth="3" />
    </g>
  )
}
```

---

## Drag-and-Drop Fix

### Current Problem
The drag events are fragmented between ItemGrid and OutfitBuilder. The CharacterDisplay has its own drop handler that conflicts.

### Solution: Unified Drag Context

```tsx
// DragContext.tsx
interface DragState {
  isDragging: boolean
  draggedItem: ClothingItem | null
  dropTarget: 'character' | null
}

const DragContext = createContext<{
  state: DragState
  startDrag: (item: ClothingItem) => void
  endDrag: () => void
  setDropTarget: (target: 'character' | null) => void
}>()

// Usage in ItemGrid
<div
  draggable
  onDragStart={() => startDrag(item)}
  onDragEnd={endDrag}
>

// Usage in CharacterDisplay
<div
  onDragOver={(e) => {
    e.preventDefault()
    setDropTarget('character')
  }}
  onDragLeave={() => setDropTarget(null)}
  onDrop={() => {
    if (draggedItem) {
      equipItem(draggedItem)
    }
    endDrag()
  }}
>
```

### Visual Feedback Improvements

1. **Drag preview**: Show mini version of clothing following cursor
2. **Drop zone highlight**: Character glows/pulses when item hovers
3. **Equip animation**: Clothing "snaps" onto character with bounce
4. **Sound effect**: Optional satisfying "pop" sound

---

## Implementation Plan (For Agents)

### Phase 1: SVG Character Base (frontend-developer x1)
- Create `SVGCharacter.tsx` with full body illustration
- Support 5 skin tones via CSS custom properties
- Include idle animation (subtle breathing/blinking)
- Base pose: Front-facing, arms slightly out

### Phase 2: SVG Clothing Library (frontend-developer x3 in parallel)
- Agent 1: Hair styles (6 options) + Accessories (5 options)
- Agent 2: Tops (8 options) - t-shirts, dresses, jackets
- Agent 3: Bottoms (6 options) + Shoes (5 options)

### Phase 3: Drag System Rewrite (frontend-developer x1)
- Create `DragContext` for unified state
- Implement visual drag preview
- Add drop zone animations
- Test on mobile/touch

### Phase 4: Integration + Polish (fullstack-developer x1)
- Wire everything together
- Add equip/unequip animations
- Performance optimization
- Accessibility (keyboard support)

---

## Questions for Review

1. **Character Style**: Which option do you prefer?
   - A) Chibi/Kawaii (big head, cute) - Recommended for ages 5-10
   - B) Fashion Doll (elongated, elegant)
   - C) Realistic Cartoon (normal proportions)

2. **Clothing Variety**: How many items per category for MVP?
   - Minimal (4-5 per category) = 25 total items
   - Standard (6-8 per category) = 40 total items
   - Full (10+ per category) = 60+ total items

3. **Animation Level**:
   - Basic (instant equip, simple hover states)
   - Standard (bounce equip, drag preview)
   - Deluxe (particle effects, sound, runway walk)

---

## Next Steps After Approval

1. You approve this plan (with any modifications)
2. I invoke `master-orchestrator` with full context
3. Orchestrator delegates to parallel frontend agents
4. Security audit on completion
5. You test and provide feedback

---

**Ready for your review. Which character style and options do you prefer?**
