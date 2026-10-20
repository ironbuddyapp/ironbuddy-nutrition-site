import { pages } from "@/lib/pages";
import { siteConfig } from "@/lib/site";

export const heroBullets = [
  "Plate, Barcode or Label",
  "Works Offline",
  "One-Time Purchase",
  "No Account, No Ads",
  "Exact or Estimate, Always Shown",
  "Free Trial Included",
] as const;

/** Compact benefit line shown under the hero headline on small screens. */
export const heroHighlights = ["Offline", "No ads", "No account", "Free trial"] as const;

export type FeatureIcon =
  | "camera"
  | "barcode"
  | "weigh"
  | "calendar"
  | "target"
  | "chart"
  | "pot"
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
    title: "Pots & Meal Prep",
    description: "Weigh the pot once: every plate is exact.",
    icon: "pot",
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
 * App screenshots in public/screenshots/ (WebP, 720 × 1560, recorded 20 October 2026 with sample data in the app's default
 * dark Fig look, by the app repo's scripts/store/capture-site.mjs). `carousel: true`
 * marks the current set: it drives the home page carousel, the structured data and the image sitemap.
 */
export const screenshots = [
  {
    id: "today",
    file: "ironbuddy-nutrition-today-calories-protein.webp",
    label: "Today",
    alt: "IronBuddy Nutrition calorie counter Today screen: about 391 kcal left of 2,040, protein 129 of 164 g, six meals each marked Exact or Estimate",
    width: 720,
    height: 1560,
    carousel: true,
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
    alt: "Photo food logging: baked salmon from the plate photo, normal portion of about 150 g, olive oil picked as an extra",
    width: 720,
    height: 1560,
    carousel: true,
  },
  {
    id: "barcode",
    file: "ironbuddy-nutrition-barcode-scanner.webp",
    label: "Barcode Scanner",
    alt: "Offline barcode scanner: Greek yogurt 2%, one 200 g serving, 146 kcal, Exact from the label",
    width: 720,
    height: 1560,
    carousel: true,
  },
  {
    id: "weigh",
    file: "ironbuddy-nutrition-weigh-food-exact.webp",
    label: "Weigh It",
    alt: "Food scale logging: 185 g of cooked white rice, 241 kcal, marked Exact",
    width: 720,
    height: 1560,
    carousel: true,
  },
  {
    id: "stillEat",
    file: "ironbuddy-nutrition-what-can-i-still-eat.webp",
    label: "What Can I Still Eat?",
    alt: "What can I still eat: with about 391 kcal and 35 g protein left, saved meals that fit, each logged with one tap",
    width: 720,
    height: 1560,
    carousel: true,
  },
  {
    id: "checkIn",
    file: "ironbuddy-nutrition-weekly-check-in.webp",
    label: "Weekly Check-in",
    alt: "Weekly check-in: ate 1,930 kcal on average, weight moved -0.51 kg a week, real maintenance 2,490 kcal, suggested 1,940 kcal",
    width: 720,
    height: 1560,
    carousel: true,
  },
  {
    id: "plan",
    file: "ironbuddy-nutrition-calorie-macro-plan.webp",
    label: "Your Daily Plan",
    alt: "Macro calculator result: maintenance 2,590 kcal, target 2,040 kcal, 164 g protein, 218 g carbs, 57 g fat, to lose about 0.5 kg a week",
    width: 720,
    height: 1560,
    carousel: true,
  },
  {
    id: "meals",
    file: "ironbuddy-nutrition-saved-meals.webp",
    label: "My Meals",
    alt: "My meals: two pots for meal prep and saved meals logged again in two taps, oats with milk and banana, Greek yogurt with honey, all Exact",
    width: 720,
    height: 1560,
    carousel: true,
  },
] as const;

/** The current screenshot set (see above). */
export const appScreenshots = screenshots.filter((shot) => shot.carousel);

/** Public path of a screenshot, e.g. "/screenshots/ironbuddy-nutrition-today-calories-protein.webp". */
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
  includes: `The ${siteConfig.freeTrialDays}-day free trial includes everything: photo logging, barcodes, the food search, your plan, Today, My meals, pots, weight and the weekly check-in.`,
  unlocks: `Buying the app once keeps everything unlocked after the trial, and adds the backup file, export and import of your data, share cards, the export for a coach, a customizable Today and accent colours.`,
  afterTrial:
    "If you don't buy, the app becomes read-only when the trial ends: nothing is deleted and your meals stay visible, but logging and editing need the purchase.",
} as const;

export const homeFaqs: Faq[] = [
  {
    id: "photo",
    question: "How does the photo work out the calories?",
    answer:
      "The photo only names the dish: a model on your phone suggests it and you confirm. The calories are that dish's values times the portion you pick, plus any extra oil. It is always an Estimate with a range; weigh the plate once and it's Exact next time.",
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
      "Exact means the numbers come from something measured: grams you typed from a kitchen scale, a product's label, or a pot you weighed. Estimate means a guess: a portion you didn't weigh, or a dish whose recipe varies. Estimates show a range (about 15% either way, or 25% for a dish without its own record), and when any meal today is an estimate, the calories left show it too.",
  },
  {
    id: "data",
    question: "Where are my meals stored?",
    answer:
      "On your phone only. We never receive them: there is no server, no account and no analytics in the app. Android can back them up to your own Google account if you turn that on, and the full version keeps a backup file in your Download folder.",
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
