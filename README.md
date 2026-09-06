# Trigger App — Marketing Website

A React + TypeScript + Tailwind CSS recreation of the Trigger app marketing site
(hero, private messaging, live streaming, creator wallet/payouts, privacy & vault,
download CTA, footer).

## Note on images

The screenshots you shared use real photographs of people (stock/product photos).
I can't reproduce copyrighted photography, so every avatar/photo slot in this
build is a lightweight placeholder (colored initials). Everything else —
layout, copy, section order, icons, phone-mockup UI, colors, and the logo mark —
matches your screenshots. Swap in your own licensed photos by editing
`src/components/Avatar.tsx` (or replacing it with `<img>` tags) wherever you see
`<Avatar name="..." />`.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build to /dist
```

Requires Node.js 18+.

## Structure

```
src/
  components/
    Icons.tsx            small inline icon set
    Avatar.tsx            placeholder avatar (swap for real photos)
    PhoneFrame.tsx         reusable phone-mockup shell + status bar
    NavBar.tsx             top navigation
    Hero.tsx                "Real-time communication..." hero
    PrivateMessaging.tsx    "Chat Freely, Share Securely"
    LiveStreaming.tsx       "Stream Your Way — Free, Paid or Scheduled"
    CreatorEarnings.tsx     "Same Day Payments, Every Day at 6 PM"
    PrivacyControl.tsx      "Stay in Control — Share What You Want" + vault + delete account
    DownloadCta.tsx          "Download Trigger on Google Play"
    Footer.tsx               site footer
  App.tsx
  main.tsx
  index.css
```

## Customizing brand colors

Brand tokens live in `tailwind.config.js` under `theme.extend.colors.trigger`
(`green`, `greendark`, `greendeep`, `tint`, `ink`, `slate`).
