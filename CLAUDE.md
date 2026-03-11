# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

- `npm run dev` — Start Vite dev server
- `npm run build` — Production build
- `npm run preview` — Preview production build locally

## Architecture

React 18 SPA using Vite, Bootstrap 5 for styling, and react-router-dom v6 for routing. Deployed on Vercel.

**Routing** is defined in `src/main.jsx` using `createBrowserRouter`. The Header and Footer render outside the router (always visible).

**Receipt types** each follow the same pattern under `src/components/<receipt-type>/`:
- `*Container.jsx` — Page-level component, holds state and orchestrates form + preview
- `*Form.jsx` — User input form
- `*Template.jsx` — Receipt layout/display
- `*ToPrint.jsx` — Print-optimized wrapper using `react-to-print`

Six receipt types exist: rent-receipt, wifi-receipt, laptop-submission-receipt, bus-ticket, ola-receipt, irctc-receipt.

**Bus ticket (RedBus)** has additional complexity: auto-calculated cancellation policy (percentage tiers based on journey date and ticket price), static terms & conditions, and a multi-page print layout. Its CSS is in `src/index.css` under the `bt-` prefix. Static assets (logo, banner) live in `src/assets/`.

**Key libraries:**
- `react-to-print` — PDF/print export for receipts
- `react-quill` — Rich text editor (used for terms & conditions in laptop submission)
- `bootstrap` — CSS framework (no React-Bootstrap; uses className strings directly)

**Ola receipt** has two pages: a ride receipt (page 1) and an Original Tax Invoice (page 2). Uses an OpenStreetMap iframe embed for the route map based on pickup/drop lat/lng. Auto-calculates total bill (rounded) from ride fare + convenience fees, and CGST/SGST (9% each on convenience fees) for the tax invoice. CSS uses `ola-` prefix.

**IRCTC receipt** is a single-page railway booking confirmation email layout. Features a 6-column booking details grid, dynamic passenger rows (add/remove in form), and auto-calculated total fare (ticket fare + convenience fee + travel insurance). CSS uses `irctc-` prefix with colored section headers (green for Passenger/Fare/How-to, red for Must Read, blue for Customer Care, orange for Book Hotels).

All receipt-specific CSS uses prefixed class names in `src/index.css` (no CSS modules): `bt-` for bus ticket, `ola-` for Ola, `irctc-` for IRCTC. Print styles use `@media print` with `-webkit-print-color-adjust: exact` for colored backgrounds.
