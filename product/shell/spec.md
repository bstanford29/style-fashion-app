# Application Shell Specification

## Overview
A kid-friendly shell with bottom tab navigation and minimal header. Designed for easy thumb access on mobile devices and simple navigation between the two main sections.

## Navigation Structure
- **Create** → Outfit Builder (default view, home)
- **Gallery** → Saved Outfits

## Header
- **Left:** App logo/name "Dressy" with playful typography
- **Right:** Settings gear icon (opens skin tone selector and preferences)

## User Menu
No traditional user menu - this is a local-first app without accounts. Settings icon provides access to character customization (skin tone) and any app preferences.

## Layout Pattern
- **Header:** Fixed top bar (56px height) with logo and settings
- **Content:** Full remaining height, scrollable
- **Bottom Tab Bar:** Fixed bottom (64px height) with two large tap targets

## Responsive Behavior
- **Desktop:** Centered content with max-width, tabs still at bottom for consistency
- **Tablet:** Same as mobile, optimized for touch
- **Mobile:** Full-width content, large touch targets (48px minimum)

## Design Notes
- Use pink/violet gradient or soft background
- Tab icons should be large and playful (32px icons)
- Active tab gets highlighted with primary color (pink)
- Rounded corners everywhere (kid-friendly aesthetic)
- No text labels on tabs if icons are clear enough (sparkle for Create, photo for Gallery)
