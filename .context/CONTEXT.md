## Context: YARD coursework implementation
Date: 2026-11-22
Agent: OpenCode cx/gpt-6-luna

## Goal
Create two coursework tasks and implement a YARD multi-page website/UI kit plus the style-guide draft, based on the coursework brief and existing UI kit.

## Artifacts Created
- `kursova/PLAN.md` — two-task plan, scope, deliverables, verification criteria.
- `kursova/Задание-1-Сайт-и-UI-kit.md` — brief/checklist for site and atomic UI kit.
- `kursova/Задание-2-Керівництво-зі-стилю.md` — style-guide draft following the methodical instructions.
- `ui-kit/catalog.html`, `ui-kit/contacts.html` — additional store pages.
- `ui-kit/navigation/`, `ui-kit/price/`, `ui-kit/badge/`, `ui-kit/stock-status/`, `ui-kit/swatch/` — atomic specimens and individual states.

## Key Decisions
- Use existing `ui-kit/` as the YARD source; leave unrelated balloon demo in project root untouched.
- User-requested task numbering differs from source document: their Task 1 is site/UI kit (methodical Task 2); their Task 2 is style guide (methodical Task 1). Explained in docs.
- Separate assembled store pages from atomic UI specimens; specimens should show a single component/state on a blank canvas.
- Site checkout/payment remains demonstrative; do not claim real order processing.
- Style guide includes placeholders for two competitor examples, screenshots, and final citations; these still need completion.
- UI detector reported low-contrast/small-text warnings, some inherited from existing YARD CSS. Automatic local-link verification did not complete due to shell limitations.

## Files Touched
- `.context/CONTEXT.md`
- `kursova/PLAN.md`
- `kursova/Задание-1-Сайт-и-UI-kit.md`
- `kursova/Задание-2-Керівництво-зі-стилю.md`
- `ui-kit/index.html`
- `ui-kit/README.md`
- `ui-kit/home.html`
- `ui-kit/product.html`
- `ui-kit/styles.css`
- `ui-kit/catalog.html`
- `ui-kit/contacts.html`
- `ui-kit/navigation/{index,default,hover,focus}.html`
- `ui-kit/price/{index,default,sale}.html`
- `ui-kit/badge/{index,new,sold-out}.html`
- `ui-kit/stock-status/{index,available,low-stock,unavailable}.html`
- `ui-kit/swatch/{index,default,selected,unavailable}.html`
