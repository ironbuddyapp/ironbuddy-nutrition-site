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
  /**
   * The search this page targets, from keyword-map.md (owner-approved). `main` must appear in the title, H1, meta
   * description and first paragraph, and no two pages share it (seo:check). `null`: a navigational page with no target.
   */
  keywords: { main: string; supporting: readonly string[] } | null;
  /** Extra image paths to list in the sitemap for image discovery. */
  images?: readonly string[];
};

const LAUNCH = "2026-10-18";
/** The label reader and the optional Google Lens hand-off are described (section 4). */
const LENS = "2026-10-20";
/** Version 0.1.6: plate photos kept on the phone, "Say the numbers" microphone, What's New page. */
const V016 = "2026-10-22";
/** Version 0.1.8: coffees by name, drinks at a real amount (0.1.7: Build a meal and batch cooking). */
const V018 = "2026-10-23";
/** Version 0.1.9: a plate as one card on Today, look-alike swaps, say or type the plate, extras by the spoon, macro gauges. */
const V019 = "2026-10-25";

/** The current screenshot set (appScreenshots in content.ts). */
const screenshotImages = [
  "/screenshots/ironbuddy-nutrition-today-macro-gauges.webp",
  "/screenshots/ironbuddy-nutrition-one-camera.webp",
  "/screenshots/ironbuddy-nutrition-photo-portion-oil.webp",
  "/screenshots/ironbuddy-nutrition-barcode-scanner.webp",
  "/screenshots/ironbuddy-nutrition-weigh-food-exact.webp",
  "/screenshots/ironbuddy-nutrition-what-can-i-still-eat.webp",
  "/screenshots/ironbuddy-nutrition-weekly-check-in.webp",
  "/screenshots/ironbuddy-nutrition-calorie-macro-plan.webp",
  "/screenshots/ironbuddy-nutrition-saved-meals.webp",
] as const;

/** Keyword map applied: titles, H1s, descriptions and intros name each page's main keyword. */
const KEYWORD_MAP = "2026-10-21";

export const pages = {
  home: {
    path: "/",
    kind: "home",
    label: "Home",
    title: "IronBuddy: Nutrition Tracker – Offline Calorie Counter",
    description:
      "Offline calorie counter and macro tracker for Android: photograph your plate, scan a barcode or weigh it. Honest numbers for people who train. No account.",
    summary: "The offline calorie and macro tracker: photo, barcode or scale, honest numbers, pay once.",
    keywords: { main: "offline calorie counter", supporting: ["macro tracker", "barcode scanner", "photo food logging"] },
    published: LAUNCH,
    modified: V019,
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
    keywords: null,
    published: LAUNCH,
    modified: LAUNCH,
  },
  whatsNew: {
    path: "/whats-new/",
    kind: "support",
    label: "What's New",
    title: "What's New in IronBuddy Nutrition Tracker",
    description:
      "What changed in each version of IronBuddy: Nutrition Tracker: a plate as one card, look-alike swaps, butter and oil by the spoon, macro gauges and more.",
    summary: "What changed in each version of the app.",
    keywords: null,
    published: V016,
    modified: V019,
    images: [
      "/screenshots/ironbuddy-nutrition-build-a-meal.webp",
      "/screenshots/ironbuddy-nutrition-shot-plate-route.webp",
      "/screenshots/ironbuddy-nutrition-plate-photos-in-meals.webp",
    ],
  },
  privacy: {
    path: "/privacy/",
    kind: "legal",
    label: "Privacy Policy",
    title: "Privacy Policy – IronBuddy Nutrition Tracker",
    description:
      "Privacy policy of IronBuddy: Nutrition Tracker. Your meals, weight and photos stay on your phone: no account, no analytics, nothing sent to us.",
    summary: "What the app keeps on your phone, and what it never sends anywhere.",
    keywords: null,
    published: LAUNCH,
    modified: V016,
  },
} as const satisfies Record<string, PageDef>;

export type PageKey = keyof typeof pages;

export const pageList: PageDef[] = Object.values(pages);
