import { pages } from "@/lib/pages";
import { siteConfig } from "@/lib/site";

export const heroBullets = [
  "Plate, Barcode or Label",
  "Works Offline",
  "No Account, No Ads",
  "Exact or Estimate, Always Shown",
] as const;

/** Compact benefit line shown under the hero headline on small screens. */
export const heroHighlights = ["Offline", "No account, no ads", "Free trial"] as const;

export type FeatureIcon =
  | "camera"
  | "barcode"
  | "weigh"
  | "calendar"
  | "target"
  | "chart"
  | "clipboard"
  | "layout"
  | "shield"
  | "share";

/** Every card states something the app does today (see the app's CHANGELOG). Do not add features that are not shipped. */
export const features: Array<{ title: string; description: string; icon: FeatureIcon }> = [
  {
    title: "Photograph Your Plate",
    description: "Recognised on your phone. You pick portion and oil.",
    icon: "camera",
  },
  {
    title: "Scan a Barcode",
    description: "A million products built in. No connection needed.",
    icon: "barcode",
  },
  {
    title: "Weigh It, Exactly",
    description: "12,000 foods and dishes. Grams from your scale.",
    icon: "weigh",
  },
  {
    title: "Honest Numbers",
    description: "Exact or Estimate on every meal, with the range.",
    icon: "target",
  },
  {
    title: "Built for Training",
    description: "Protein first. Lose fat, build muscle, maintain or bulk.",
    icon: "chart",
  },
  {
    title: "Weekly Check-in",
    description: "Your real maintenance from two weeks of logs. You decide.",
    icon: "calendar",
  },
  {
    title: "Read a Label",
    description: "Photograph a nutrition table: the numbers fill in.",
    icon: "clipboard",
  },
  {
    title: "Share & Export",
    description: "Day cards, and CSV or PDF for your coach.",
    icon: "share",
  },
  {
    title: "Offline & Private",
    description: "No account, no analytics. Nothing leaves your phone.",
    icon: "shield",
  },
];

/**
 * App screenshots in public/screenshots/ (WebP, 720 × 1560, recorded 20 October 2026 (Today, the plate photo and My meals again on 22 October, app 0.1.6) with sample data in the app's default
 * dark Fig look, by the app repo's scripts/store/capture-site.mjs). `carousel: true`
 * marks the current set: it drives the home page carousel, the structured data and the image sitemap. `credit: true` marks a
 * screen that shows a sample plate photo from the Nutrition5k dataset (CC BY 4.0): the site shows `photoCredit` under it.
 */
export const screenshots = [
  {
    id: "today",
    file: "ironbuddy-nutrition-today-macro-gauges.webp",
    label: "Today",
    alt: "IronBuddy Nutrition calorie counter Today screen: 660 kcal left of a 2,040 target with an estimate range, protein, carbs and fat as three gauges with the grams to go, and today's meals each marked Exact or Estimate",
    width: 720,
    height: 1560,
    carousel: true,
    credit: false,
  },
  {
    id: "camera",
    file: "ironbuddy-nutrition-one-camera.webp",
    label: "One Camera",
    alt: "Shot, one camera button for a plate, a barcode or a nutrition label: the app works out which, on the phone",
    width: 720,
    height: 1560,
    carousel: true,
  },
  {
    id: "photo",
    file: "ironbuddy-nutrition-photo-portion-oil.webp",
    label: "Photo of Your Plate",
    alt: "Photo food logging, the last step of Shot: your dinner from the plate photo, roasted salmon 150g, boiled broccoli 80g and a tablespoon of olive oil, about 468 kcal as an Estimate, checked before it is logged",
    width: 720,
    height: 1560,
    carousel: true,
    credit: true,
  },
  {
    id: "barcode",
    file: "ironbuddy-nutrition-barcode-scanner.webp",
    label: "Barcode Scanner",
    alt: "Offline barcode scanner: Greek yogurt 2%, one 200g serving, 146 kcal, Exact from the label",
    width: 720,
    height: 1560,
    carousel: true,
  },
  {
    id: "weigh",
    file: "ironbuddy-nutrition-weigh-food-exact.webp",
    label: "Weigh It",
    alt: "Food scale logging: 185g of cooked white rice, 241 kcal, marked Exact",
    width: 720,
    height: 1560,
    carousel: true,
  },
  {
    id: "stillEat",
    file: "ironbuddy-nutrition-what-can-i-still-eat.webp",
    label: "What Can I Still Eat?",
    alt: "What can I still eat: with about 391 kcal and 35g protein left, saved meals that fit, each logged with one tap",
    width: 720,
    height: 1560,
    carousel: true,
  },
  {
    id: "checkIn",
    file: "ironbuddy-nutrition-weekly-check-in.webp",
    label: "Weekly Check-in",
    alt: "Weekly check-in: you ate 1,930 kcal a day, lost about 0.5 kg a week, you burn about 2,490 kcal a day; suggested 1,940 kcal",
    width: 720,
    height: 1560,
    carousel: true,
  },
  {
    id: "plan",
    file: "ironbuddy-nutrition-calorie-macro-plan.webp",
    label: "Your Daily Plan",
    alt: "Macro calculator result: maintenance 2,590 kcal, target 2,040 kcal, 164g protein, 218g carbs, 57g fat, to lose about 0.5 kg a week",
    width: 720,
    height: 1560,
    carousel: true,
  },
  {
    id: "meals",
    file: "ironbuddy-nutrition-saved-meals.webp",
    label: "My Meals",
    alt: "My meals as cards: saved meals logged again in two taps, six cards, each with its plate photo: oats with milk and banana, Greek yogurt with honey, chicken, rice and broccoli, scrambled eggs (2), steak, potatoes and greens, tuna salad, all Exact",
    width: 720,
    height: 1560,
    carousel: true,
    credit: true,
  },
] as const;

/** Credit for the sample plate photos in the screenshots marked `credit: true`. */
export const photoCredit = "Sample photos: Nutrition5k dataset, Google Research, CC BY 4.0";

/** The current screenshot set (see above). */
export const appScreenshots = screenshots.filter((shot) => shot.carousel);

/** Public path of a screenshot, e.g. "/screenshots/ironbuddy-nutrition-today-macro-gauges.webp". */
export function screenshotSrc(id: ScreenshotId) {
  const shot = screenshots.find((item) => item.id === id);
  if (!shot) throw new Error(`Unknown screenshot: ${id}`);
  return `/screenshots/${shot.file}`;
}

export type ScreenshotId = (typeof screenshots)[number]["id"];

export type Faq = {
  id: string;
  question: string;
  answer: string;
  more?: { href: string; label: string };
};

/** What the free trial includes and what happens after it, in one place so every page says the same thing. */
export const trialDetails = {
  includes: `The ${siteConfig.freeTrialDays}-day free trial includes everything: photo logging, barcodes, the food search, your plan, Today, My meals, weight and the weekly check-in.`,
  unlocks: `Buying the app once keeps everything unlocked after the trial, and adds the backup file, export and import of your data, share cards, the export for a coach, a customizable Today and accent colours.`,
  afterTrial:
    "If you don't buy, the app becomes read-only when the trial ends: nothing is deleted and your meals stay visible, but logging and editing need the purchase.",
} as const;

export const homeFaqs: Faq[] = [
  {
    id: "photo",
    question: "How does the photo work out the calories?",
    answer:
      "The photo only names the dish: a model on your phone suggests it and you confirm. The calories are that dish's values times the portion you pick, plus any extras such as oil or butter, counted by the spoon (teaspoons and tablespoons). It is always an Estimate with a range; weigh the plate once and it's Exact next time.",
  },
  {
    id: "offline",
    question: "Does it really work offline?",
    answer:
      "Yes. The food database, the million barcodes and the photo recognition are all inside the app. Nothing is looked up online, and the app has no account to sign in to. The only time it uses the internet is when you buy or restore the full version through Google Play.",
  },
  {
    id: "price",
    question: "How much does it cost?",
    answer: `It is free to download with a ${siteConfig.freeTrialDays}-day free trial of everything. After that, one payment through Google Play keeps it unlocked for good; Play shows the price for your country. No subscription, no ads.`,
  },
  {
    id: "exact",
    question: "What do Exact and Estimate mean?",
    answer:
      "Exact means the numbers come from something measured: grams you typed from a kitchen scale, or a product's label. Estimate means a guess: a portion you didn't weigh, or a dish whose recipe varies. Estimates show a range (about 15% either way, or 25% for a dish without its own record), and when any meal today is an estimate, the calories left show it too.",
  },
  {
    id: "data",
    question: "Where are my meals stored?",
    answer:
      "On your phone only. We never receive them: there is no server, no account and no analytics in the app. Android can back them up to your own Google account if you turn that on, and the full version keeps a backup file in your Download folder. A small copy of a plate photo is kept with its meal on your phone only: it is never uploaded and is not in any backup.",
  },
  {
    id: "training",
    question: "Is it for people who train?",
    answer:
      "Yes. Protein comes first on every screen, and the goals include Lose fat, build muscle. The weekly check-in compares what you ate with how your weight moved and suggests a new target; you decide whether to use it. It's by the makers of IronBuddy: Workout Tracker.",
  },
];

export const navItems = [
  { label: "Features", href: "/#features", desktop: true },
  { label: "Screenshots", href: "/#screenshots", desktop: true },
  { label: "FAQ", href: "/#faq", desktop: true },
  { label: "Support", href: pages.support.path, desktop: true },
  { label: "Privacy Policy", href: pages.privacy.path, desktop: false },
  { label: "Download", href: "/#download", desktop: false },
] as const;

/** Sections of the home page, used by the mobile dot navigation and the "Explore" auto-scroll. */
export const sectionNav = [
  { id: "home", label: "Home" },
  { id: "features", label: "Features" },
  { id: "screenshots", label: "Screenshots" },
  { id: "faq", label: "FAQ" },
  { id: "download", label: "Download" },
] as const;

export const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Screenshots", href: "/#screenshots" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: pages.support.label, href: pages.support.path },
      { label: pages.whatsNew.label, href: pages.whatsNew.path },
      { label: pages.privacy.label, href: pages.privacy.path },
    ],
  },
  {
    title: "IronBuddy",
    links: [
      { label: "About IronBuddy", href: siteConfig.brandUrl },
      { label: "Workout Tracker", href: siteConfig.workoutUrl },
    ],
  },
] as const;
