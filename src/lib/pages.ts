export type PageKind = "home" | "support" | "legal";

export type PageDef = {
  /** Path with leading and trailing slash (the site uses trailingSlash: true). */
  path: string;
  kind: PageKind;
  /** Short label for navigation, footer and breadcrumbs. */
  label: string;
  /** Title without the " | IronBuddy" suffix (the root layout template adds it). The home page is the exception. */
  title: string;
  /** 140–160 characters. */
  description: string;
  /** One line used on link cards. */
  summary: string;
  /** ISO dates. Bump `modified` whenever the page content changes; the sitemap and JSON-LD read it. */
  published: string;
  modified: string;
  /** Extra image paths to list in the sitemap for image discovery. */
  images?: readonly string[];
};

const LAUNCH = "2026-10-18";

/** The current screenshot set (appScreenshots in content.ts). */
const screenshotImages = [
  "/screenshots/ironbuddy-nutrition-today-calories-protein.webp",
  "/screenshots/ironbuddy-nutrition-photo-portion-oil.webp",
  "/screenshots/ironbuddy-nutrition-barcode-scanner.webp",
  "/screenshots/ironbuddy-nutrition-weigh-food-exact.webp",
  "/screenshots/ironbuddy-nutrition-what-can-i-still-eat.webp",
  "/screenshots/ironbuddy-nutrition-weekly-check-in.webp",
  "/screenshots/ironbuddy-nutrition-calorie-macro-plan.webp",
  "/screenshots/ironbuddy-nutrition-saved-meals.webp",
] as const;

export const pages = {
  home: {
    path: "/",
    kind: "home",
    label: "Home",
    title: "IronBuddy: Nutrition Tracker – Offline Calorie Counter",
    description:
      "Offline calorie and macro tracker for Android: photograph your plate, scan a barcode or weigh it. Honest numbers for people who train. Pay once, no account.",
    summary: "The offline calorie and macro tracker: photo, barcode or scale, honest numbers, pay once.",
    published: LAUNCH,
    modified: LAUNCH,
    images: screenshotImages,
  },
  support: {
    path: "/support/",
    kind: "support",
    label: "Support",
    title: "Support and Help – IronBuddy Nutrition Tracker",
    description:
      "Help for IronBuddy: Nutrition Tracker: restore your purchase, back up and move your data, fix a wrong number, and contact us. Answers in plain words.",
    summary: "Restore a purchase, back up or move your data, and how to reach us.",
    published: LAUNCH,
    modified: LAUNCH,
  },
  privacy: {
    path: "/privacy/",
    kind: "legal",
    label: "Privacy Policy",
    title: "Privacy Policy – IronBuddy Nutrition Tracker",
    description:
      "Privacy policy of IronBuddy: Nutrition Tracker. Your meals, weight and photos stay on your phone: no account, no analytics, nothing sent to us.",
    summary: "What the app keeps on your phone, and what it never sends anywhere.",
    published: LAUNCH,
    modified: LAUNCH,
  },
} as const satisfies Record<string, PageDef>;

export type PageKey = keyof typeof pages;

export const pageList: PageDef[] = Object.values(pages);
