import { trialDetails } from "@/lib/content";
import { pages } from "@/lib/pages";
import type { PageDef } from "@/lib/pages";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const entry = (page: PageDef) => `- [${page.label}](${absoluteUrl(page.path)}): ${page.summary}`;

/**
 * A plain-text summary for AI assistants and agents (https://llmstxt.org), generated from the same page registry
 * as the sitemap, so it never lists a page that does not exist. Every fact must match the app.
 */
export function GET() {
  const body = [
    `# ${siteConfig.fullName}`,
    "",
    `> IronBuddy: Nutrition Tracker is an offline calorie and macro tracker for Android, made for people who train. Meals are logged three ways: a photo of the plate (the dish is recognised on the phone and the user picks the portion and any extra oil), a barcode (about a million packaged products are built into the app), or the food search with grams from a kitchen scale (about 12,000 foods and dishes from USDA, FNDDS and CIQUAL). Every number is marked Exact (measured) or Estimate (with a range). It sets a daily calorie and protein target for goals including lose fat, build muscle, and a weekly check-in suggests a new target from the user's own logs and weigh-ins. There is no account, no ads and no analytics; data stays on the phone. Free to download with a ${siteConfig.freeTrialDays}-day free trial, then a one-time purchase of ${siteConfig.price.label} through Google Play.`,
    "",
    "Key facts:",
    "",
    "- Platform: Android, on Google Play. Not available on iPhone yet.",
    `- Android package: ${siteConfig.playStoreId}`,
    ...(siteConfig.playListingLive ? [`- Google Play: ${siteConfig.playStoreUrl}`] : ["- Google Play: coming soon"]),
    "- Works offline: yes (food search, barcodes and photo recognition need no connection)",
    "- Account required: no",
    "- Ads: none. Analytics: none",
    "- Subscription: none",
    `- Free trial: ${trialDetails.includes} ${trialDetails.unlocks} ${trialDetails.afterTrial}`,
    `- Price: ${siteConfig.price.label} one-time, after the ${siteConfig.freeTrialDays}-day free trial (Google Play shows the final amount for your country)`,
    `- Developer: ${siteConfig.developerName}, also makers of IronBuddy: Workout Tracker (${siteConfig.workoutUrl})`,
    `- Contact: ${siteConfig.contactEmail}`,
    "",
    "## Pages",
    "",
    entry(pages.home),
    entry(pages.support),
    entry(pages.privacy),
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
