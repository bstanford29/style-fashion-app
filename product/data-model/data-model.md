# Data Model

## Entities

### Character
The base doll figure that kids dress up. Has a fixed pose that all clothing items are designed to fit. Available in multiple skin tone variants so kids can choose a character that looks like them.

### ClothingItem
An individual piece of clothing or accessory (shirt, pants, hairstyle, shoes, etc.). Each item is a pre-rendered PNG image positioned to fit perfectly on the character's pose. Items have a layer order (z-index) to ensure proper stacking when multiple items are equipped.

### ClothingCategory
A grouping of related clothing items. Categories include Hair, Tops, Bottoms, Shoes, and Accessories. Each category has an icon and contains multiple items. Only one item per category can be equipped at a time (e.g., one top, one bottom).

### Outfit
A saved combination of clothing items equipped on a character. Includes which skin tone variant was used and which items are equipped in each slot. Kids can save multiple outfits to their gallery and reload them later.

## Relationships

- ClothingCategory has many ClothingItem
- ClothingItem belongs to one ClothingCategory
- Outfit has one Character (skin tone selection)
- Outfit has many ClothingItem (one per category slot)
- Character can have many Outfit (saved in gallery)
