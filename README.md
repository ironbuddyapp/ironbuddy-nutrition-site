# IronBuddy: Nutrition Tracker — website

The site at **https://nutrition.ironbuddy.fit**: product page, privacy policy and support page for the offline
calorie and macro tracker for Android (`com.ironbuddy.nutrition`). Sister sites: `ironbuddy.fit` (the brand) and
the workout tracker's site.

The **privacy policy** (`/privacy/`) is the one the app links to (Settings → Privacy policy) and the one entered
in Play Console. Keep it true to what the app does, and bump `pages.privacy.modified` when it changes.

## Stack

- Next.js 15 App Router, static export (`out/`)
- TypeScript, Tailwind CSS v4
- GitHub Pages, deployed by `.github/workflows/pages.yml` on every push to `main`
- No analytics, no cookies

## Configure

`src/lib/site.ts`:

- `playListingLive`: set to `true` the day the Play listing is public (the badges then link to it)
- `price`, `freeTrialDays`: keep in sync with the Play listing and the privacy policy
- `workoutUrl`: switch to `https://workout.ironbuddy.fit` once that site is live

## Develop

```bash
npm install
npm run dev
```

## Build and check

```bash
npm run build
npm run seo:check
```

`seo:check` validates titles, descriptions, canonicals, headings, structured data, links, the sitemap, robots.txt
and llms.txt in `out/`, and exits with an error if anything is wrong.

## Images

- `public/screenshots/`: app screenshots (WebP, 720 × 1560) taken from the app with sample data.
- `public/og.jpg`: the share image, made by `scripts/make-og.mjs` (needs Playwright).
