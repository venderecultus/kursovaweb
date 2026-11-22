## Context: Skydos venue and supermarket cards
Date: 2026-10-31
Agent: OpenCode (cx/gpt-6-luna)

## Goal
Refine the mobile Skydos mockup so the map stays above offers and venue/supermarket tabs show only their matching cards.

## Artifacts Created
- None in this chat.

## Key Decisions
- The map remains above the offers section.
- “Заклади” displays venue offer cards (e.g. chocolate croissant at Львівські круасани); supermarket product cards are hidden until “Супермаркети” is selected.
- Venue cards use the same offer-card layout, without shop-name/logo badges in the image area.
- Venue distance/time metadata uses map-pin and clock SVG icons; “Забрати” buttons have the northeast arrow icon.
- Fixed CSS specificity so `.offer-list[hidden]` actually hides the supermarket list despite `.offer-list { display: grid; }`.
- Fixed malformed location-pin SVG path on the Milk Bar card.
- Venue offer prices, discounts, and distances are mock data.

## Files Touched
- `index.html` — map order, initial category visibility, venue cards, distance/time and action icons; corrected SVG path.
- `styles.css` — honor `hidden` on supermarket offer list.
- `app.js` — existing category toggle switches the two lists and headings; `node --check app.js` passed.
