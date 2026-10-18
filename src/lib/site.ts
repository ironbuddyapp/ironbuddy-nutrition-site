/** Length of the free trial. Keep in sync with the privacy policy (section 4) and the Play listing. */
const freeTrialDays = 7;

/**
 * One-time price charged after the trial. Keep in sync with the Play listing. Google Play shows it in local
 * currency, so the amount a visitor sees there can differ slightly by country and tax.
 */
const price = { amount: "7", currency: "EUR", label: "€7" } as const;

const playStoreId = "com.ironbuddy.nutrition";
/** The listing's canonical address, for structured data and app links. */
const playStoreUrl = `https://play.google.com/store/apps/details?id=${playStoreId}`;
/**
 * UTM tags for the site's own Play links, so installs from this website show up in Play Console under
 * Statistics / acquisition reports as "Tracked channels (UTM)". Play reads them from the URL-encoded `referrer`.
 */
const playReferrer = encodeURIComponent("utm_source=nutrition.ironbuddy.fit&utm_medium=website&utm_campaign=website");
const playStoreLinkUrl = `${playStoreUrl}&referrer=${playReferrer}`;

export const siteConfig = {
  name: "IronBuddy",
  /** The product's full name, as on the store listing. Use it where the app is named. */
  fullName: "IronBuddy: Nutrition Tracker",
  tagline: "Eat for your goal. Offline, honest, pay once.",
  title: "IronBuddy: Nutrition Tracker – Offline Calorie Counter",
  description:
    "Offline calorie and macro tracker for Android: snap your plate, scan a barcode or weigh it. Honest numbers, built for people who train. Pay once, no account.",
  url: "https://nutrition.ironbuddy.fit",
  /** The brand home page. */
  brandUrl: "https://ironbuddy.fit",
  /** The sister app's site. */
  workoutUrl: "https://workout.ironbuddy.fit",
  locale: "en_US",
  /**
   * LAUNCH SWITCH. False until the Play listing is public: the Google Play badges show "coming soon" and link
   * nowhere, so nobody lands on Play's "not found" page. Set to true the day the listing goes live.
   */
  playListingLive: false as boolean,
  playStoreUrl,
  playStoreId,
  /** What the badges and the footer link to: the listing plus the UTM tags above. */
  playStoreLinkUrl,
  /** Opens the Play Store app directly from in-app browsers (Instagram, TikTok, ...), with the same UTM tags. */
  playStoreIntent: `intent://details?id=${playStoreId}&referrer=${playReferrer}#Intent;scheme=market;package=com.android.vending;S.browser_fallback_url=${encodeURIComponent(playStoreLinkUrl)};end`,
  playDeveloperUrl: "https://play.google.com/store/apps/developer?id=IronBuddy",
  /** The developer, exactly as named in Play Console. The privacy policy names it. */
  developerName: "IronBuddy",
  githubUrl: "https://github.com/ironbuddyapp",
  instagramUrl: "https://www.instagram.com/ironbuddy_app/",
  tiktokUrl: "https://www.tiktok.com/@ironbuddyapp",
  youtubeUrl: "https://www.youtube.com/@IronBuddyApp",
  contactEmail: "iron.buddy.app@gmail.com",
  ogImage: "/og.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: "image/jpeg",
  ogImageAlt:
    "IronBuddy: Nutrition Tracker for Android: snap your plate, scan a barcode or weigh it. Offline, no account, pay once.",
  freeTrialDays,
  price,
} as const;
