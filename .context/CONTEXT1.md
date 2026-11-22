## Context: YARD UI Kit
Date: 2026-10-15

## Goal
Build a compact browser UI kit for a youthful vintage-workwear fashion store, organized as isolated component-state specimens for Figma reference.

## Structure
- `ui-kit/index.html` — component directory.
- `ui-kit/foundations.html` — shared palette, typography, and spacing.
- `ui-kit/styles.css` — shared tokens and specimen styling.
- Component folders each contain `index.html` for state navigation and one HTML file per state.
- `ui-kit/README.md` — preview and inventory.

## Components / states
- `button/` — default, hover, focus, pressed, disabled, loading.
- `text-field/` — empty, focus, filled, error, disabled.
- `checkbox/` — unchecked, checked, focus, disabled.
- `chip/` — default, selected, disabled.
- `product-card/` — default, hover, favorite, sold out.
- `size-option/` — default, selected, unavailable.

## Design decisions
- Brand concept: YARD, youthful city workwear with vintage utility cues.
- Palette: warm paper, ink, olive, acid lime, rust; Manrope with system fallback.
- Component state HTML pages show one specimen centered on an otherwise empty canvas; no page chrome or neighboring specimens.
- HTML is a browser reference, not a generated Figma document.
