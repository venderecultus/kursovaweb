# YARD storefront

React + Vite responsive storefront and separate atomic UI-kit for the coursework brief. The design follows the supplied screenshots: warm paper ground, minimal header, full-width photographic hero, category strip, editorial product grid, olive closing field.

## Run

```sh
npm install
npm run dev
```

Open the printed local URL. Production bundle: `npm run build`. UI kit: `/ui-kit/` while the dev server is running, or open `ui-kit/index.html`. Five app routes: `/`, `/catalog`, `/product/canvas`, `/cart`, `/contacts`.

## Structure

- `src/components/` — shared announcement, navigation, footer, product card/grid, category links, and cart state.
- `src/pages/` — home, catalog, product, cart, and contacts routes.
- `src/data/products.js` — sample catalog and price formatting.
- `src/styles/tokens.css` — shared brand tokens; `global.css` — responsive layout and component styles.
- `ui-kit/` — separate atomic component reference, foundation specimens, component family indices and individual states.
- `screenshots/` — screenshots from the earlier HTML prototype, kept as coursework reference.

## Notes

Product listings, prices, contact details, and some Unsplash photos are illustrative samples and should be confirmed/replaced for a real launch. The hero photo is a bundled Unsplash image. Cart contents persist in localStorage; checkout links to email because no payment service/backend is connected. Manrope is loaded from Google Fonts with Arial fallback. The UI-kit HTML is a browser/Figma reference, not a generated Figma document.
