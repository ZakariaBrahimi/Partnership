# FlexDZ × MizaniyaPay — collaboration landing page

A trilingual (Arabic RTL / French / English) landing page presenting the FlexDZ commerce + MizaniyaPay payments
collaboration. React 18 · TypeScript · Tailwind CSS · Framer Motion · Lucide. No backend.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build → dist/
```

## Deploy on Vercel

Import this repository in Vercel. The Vite preset is
auto-detected (build `npm run build`, output `dist`).

## Before presenting — things to replace

| What | Where |
| --- | --- |
| Official logos (currently **placeholders**) | `src/assets/brands/flexdz-logo.svg`, `src/assets/brands/mizaniyapay-logo.svg` — see the README there |
| FlexDZ brand color (assumed orange) | `tailwind.config.ts` → `colors.flex` |
| External links / contact target | `src/lib/config.ts` |
| Favicon & social image (placeholders) | `public/favicon.svg`, `public/favicon.png`, `public/og-image.png` |

MizaniyaPay's navy / yellow come from the project's existing coin mark (copied from the MizaniyaPay project's `app/icon.png`).

## Translations

All visible copy lives in `src/i18n/translations.ts` (`en`, `fr`, `ar`). `fr` and `ar` are typed against the English
shape, so a missing key is a compile error. The choice is stored in `localStorage["preferred-language"]`; on first
visit the full-screen language selector is shown. `<html lang dir>`, the page title and meta description follow the
active language. The layout uses logical Tailwind utilities (`ms-`, `pe-`, `start-`, `text-start`, `rtl:` variants), so
RTL mirrors the whole interface, not just the text.

## Content rules followed

- Initial scope = FlexDZ checkout, MizaniyaPay / CIB / Edahabia payment, confirmation, status sync, settlement.
- Payment links, QR, refunds, onboarding automation, analytics and campaigns are labelled **Future opportunity**.
- No certifications, card schemes, crypto, BNPL or financing are mentioned.
- The merchant "Orders" panel is an illustrative mock and is labelled as such.

## Structure

```
src/
  components/        one file per page section + Navbar, LanguageSelector/Switcher, Logo, Section helpers
  components/ui/     button (cva + Radix Slot, shadcn-style)
  i18n/              translations.ts, LanguageProvider.tsx
  hooks/useLanguage.ts
  lib/               utils.ts, config.ts
  assets/brands/     logo SVGs
```
