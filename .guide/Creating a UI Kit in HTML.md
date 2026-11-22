## Guide: Creating an HTML UI Kit as Isolated Component States
Date: 2026-10-15

## Purpose
Create a small, browser-viewable UI kit as a visual reference for design work (for example, rebuilding components in Figma). The kit is a library of actual HTML specimens, not a polished product page, app mockup, or collection of assembled screens.

## Core rule
- One state page contains exactly one component in exactly one state.
- Split interface assemblies into their smallest independently meaningful UI elements. Do not group neighboring controls just because they appear together in a product detail block or on the same screen.
- A specimen is one smallest reusable/interactive element (or a single atomic display element), not a section or feature bundle. Examples: color swatches and size selector are separate components; a purchase button is a button, not a separate "purchase" component; stock status and delivery/returns information are separate elements when they have distinct meaning and styling.
- Keep a component's intrinsic label/content with it only when needed to understand the element. Do not include other controls, adjacent metadata, or supporting components in its specimen.
- The state page is otherwise a blank canvas: no site header, footer, sidebar, explanatory copy, component inventory, or other specimens.
- Center the specimen on the canvas so it can be inspected on its own.
- Put navigation between states on a separate component index page, not on the specimen pages.
- Shared foundations such as colors, typography, spacing, and shape can have their own general reference pages.

## Workflow

1. **Define and atomize the product scope.** Use the product brief and intended interface to inventory UI, then decompose every screen/block into the smallest independently meaningful elements before creating specimens. For example, a product detail area may become breadcrumbs, product title, price, description, color swatch selector, size selector, add-to-cart button, stock status, delivery/returns note, and accordion. Do not keep "product details", "product options", or "purchase" as broad specimens if they contain multiple independently understandable elements. Do not create unrelated components just to make the kit look larger.

2. **Set visual foundations first.** Establish the brand direction and document shared colors, typography, spacing, borders, radii, and other recurring values on a foundations page. Store reusable values in CSS custom properties and use shared component styling across all state pages.

3. **Inventory real states per atomic component.** List only states that apply to that element and its behavior. Examples: button — default, hover, focus, pressed, disabled, loading; size option — default, selected, unavailable; color swatch — default, selected, unavailable. Do not combine the state inventories of distinct elements. Include meaningful variants/states, not decorative differences.

4. **Use a folder per component.** Keep the component’s state files together. A simple structure:

   ```text
   ui-kit/
   ├── index.html                 # overall component directory
   ├── foundations.html           # shared design foundations
   ├── styles.css                 # shared tokens and specimen styles
   ├── button/
   │   ├── index.html             # links to button state pages
   │   ├── default.html
   │   ├── hover.html
   │   ├── focus.html
   │   ├── disabled.html
   │   └── loading.html
   └── text-field/
       ├── index.html
       ├── empty.html
       ├── focus.html
       └── error.html
   ```

5. **Make the top-level index a directory.** Link to the foundations and each component’s index page. Show component names and a short state inventory so the user can quickly find a family. This directory is the only broad overview; do not turn it into a landing-page mockup.

6. **Make each component index a state menu.** For each component folder, `index.html` should provide clear links to that component’s individual state files and a way back to the top-level directory. It may describe the state names, but should not combine component specimens.

7. **Make each state HTML page a literal atomic specimen.** Link the shared stylesheet using the correct relative path. Use semantic HTML that matches the real control (`button`, labeled `input`, etc.). Include one component only and content intrinsic to that element/state. If a proposed specimen contains multiple controls or distinct information types, split it into separate component folders/files. Represent focus, selected, disabled, error, loading, and similar states in their visual treatment and, where appropriate, their real HTML attributes (`disabled`, `aria-invalid`, `aria-pressed`, `aria-busy`, associated error text). A visual focus example may use an explicit state class so it remains visible when opened directly.

   ```html
   <!doctype html>
   <html lang="uk">
   <head>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1">
     <title>Кнопка — Disabled</title>
     <link rel="stylesheet" href="../styles.css">
   </head>
   <body class="specimen-page">
     <main><button class="spec-button" disabled>Додати до кошика</button></main>
   </body>
   </html>
   ```

8. **Keep examples comparable and content realistic.** Across states of the same component, keep label, size, and other irrelevant content consistent so only the intended state changes. Use product-appropriate language and representative values. For errors, show understandable text and a corrective next step; for unavailable items, make unavailability clear without color alone.

9. **Cover the right edge cases.** For applicable components, include empty input, long or wrapping text, validation error, unavailable choice, loading, or sold-out state. Each remains its own page and should still show only one component. Do not add a state that has no meaningful behavior in the product.

10. **Build shared styling and responsive behavior.** Use shared CSS tokens and classes; avoid duplicating styles per file. State pages should have a neutral, uncluttered background, viewport-height canvas, and centered specimen. Allow components to grow naturally; ensure they remain visible on small screens and at increased zoom. Foundations and directory pages can have their own layouts.

11. **Document and hand off.** Keep a short README with how to open the kit, external dependencies/fallbacks, folder inventory, and the fact that the HTML is a reference rather than a native Figma file or production interface. Keep this guide focused on the workflow; update the kit inventory when component folders or states change.

## Verification
- Open the top-level `index.html`, navigate into each component, and open every listed state.
- Confirm that every state page shows one component only, with no page chrome or extra specimens.
- Audit each specimen for atomization: no distinct control, status, label group, or information block is bundled with another just because they share a screen; split them into separate specimens when independently meaningful.
- Confirm each component index links to all and only existing state files, and each state page links to the shared stylesheet.
- Confirm the top-level directory links to foundations and component indexes, and all return links work.
- Check common viewport widths and browser zoom; no specimen should clip or become unreadable.
- Check semantics and accessibility: labels are associated with inputs; disabled states use native `disabled` when applicable; focus is visible; errors/status include text or another cue besides color.
- Check shared design values for consistency and verify any external font/image dependency has a fallback or is documented.

## Common mistakes
- Putting all states or multiple different components on one specimen page.
- Treating a feature bundle (for example, product details/options/purchase) as one component instead of splitting it into atomic UI elements.
- Adding a header, footer, mock page, or explanatory panel to the otherwise blank state canvas.
- Making the top-level index itself a branded marketing page instead of a component directory.
- Showing only default states or inventing states without product behavior.
- Using different labels or dimensions across state examples when the state itself is the only intended difference.
- Repeating CSS independently for each file, allowing visual drift.
- Treating an HTML reference as a generated Figma library or production-ready component implementation.
