import { siteConfig } from "@/lib/site";

/*
 * Smart store links for social bios (Marketing brief, 2026-10-23): one address per source that sends each visitor
 * to the right store and tags the visit. The same links exist on workout.ironbuddy.fit for the workout app.
 *
 * While siteConfig.playListingLive is false, /get, /get-fb, /get-ig and /soon-iphone all show one neutral
 * "IronBuddy: Nutrition Tracker is coming soon" page to every visitor: no Play link, no feature claims, no dates, no scripts.
 * When it is set to true they switch on their own:
 *   Android         → the tagged Google Play URL for the source below.
 *   iPhone and iPad → /soon-iphone/ (no iOS app yet).
 *   Everyone else   → a short page with the tagged Google Play badge and the "coming to iPhone" line.
 *
 * The pages are plain HTML, outside the site layout: noindex, not in the sitemap, linked from nowhere on the site.
 * scripts/check-seo.mjs skips them by their `ironbuddy-page: forward` meta tag. Never state a price or an iOS date.
 * When the iOS app is live, the iPhone branch switches to the App Store URL (Marketing sends the URLs).
 */

/**
 * GoatCounter counting of the events below. OFF on purpose: the privacy policy (section 16) says this website uses
 * no analytics. Turn it on only after the owner approves and that section names GoatCounter for these links.
 */
const countVisits = false as boolean;
const goatcounterUrl = "https://ironbuddy.goatcounter.com/count";

type SmartLink = {
  /** Play Console reads these from the URL-encoded `referrer` (Statistics → "Tracked channels (UTM)"). */
  utm: string;
  /** GoatCounter event name (kept apart from the workout site's bio-play events). */
  event: string;
  /** The event's title in GoatCounter. */
  title: string;
};

export const smartLinks = {
  get: { utm: "utm_source=instagram&utm_medium=bio&utm_campaign=bio", event: "nutrition-bio-play", title: "Instagram bio to Google Play (Nutrition)" },
  "get-fb": { utm: "utm_source=facebook&utm_medium=bio&utm_campaign=bio", event: "nutrition-bio-play-fb", title: "Facebook bio to Google Play (Nutrition)" },
  "get-ig": { utm: "utm_source=instagram&utm_medium=personal&utm_campaign=bio", event: "nutrition-bio-play-personal", title: "Instagram personal to Google Play (Nutrition)" },
} satisfies Record<string, SmartLink>;

export type SmartLinkName = keyof typeof smartLinks;

const soonEvent = "soon-iphone-nutrition";
const playUrl = (utm: string) => `${siteConfig.playStoreUrl}&referrer=${encodeURIComponent(utm)}`;
const escapeHtml = (value: string) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
/** A JSON value that is safe inside an inline <script>. */
const js = (value: unknown) => JSON.stringify(value).replace(/</g, "\\u003c");

const style = `@font-face{font-family:"Inter";font-weight:400 600;font-display:swap;src:url(/fonts/inter/latin.woff2) format("woff2")}
body{margin:0;background:#14110d;color:#a89f92;font:16px "Inter",system-ui,sans-serif;display:flex;min-height:100vh;align-items:center;justify-content:center;text-align:center}
main{max-width:22rem;padding:2rem 1rem}h1{color:#f0ebe3;font-size:1.35rem;font-weight:600;margin:1rem 0 .75rem}p{line-height:1.5;margin:.75rem 0}a{color:#f2b33d}
.badge{display:inline-block;margin:.5rem 0}.badge img{display:block}.opening{display:none}.android .opening{display:block}.android .store{display:none}`;

function page({ title, head = "", body, script }: { title: string; head?: string; body: string; script?: string }) {
  const counter = script
    ? `${countVisits ? `<script data-goatcounter="${goatcounterUrl}" data-goatcounter-settings='{"no_onload":true}' async src="//gc.zgo.at/count.js"></script>\n` : ""}<script>
(function () {
  var gc = document.querySelector("script[data-goatcounter]");
  function count(vars) {
    if (!gc) return;
    if (window.goatcounter && window.goatcounter.count) window.goatcounter.count(vars);
    else gc.addEventListener("load", function () { window.goatcounter.count(vars); });
  }
${script}
})();
</script>
`
    : "";
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<meta name="ironbuddy-page" content="forward">
<title>${escapeHtml(title)}</title>
<link rel="icon" href="/favicon.ico">
<style>${style}</style>
${head}</head>
<body>
<main>
<img src="/logo-mark.png" alt="" width="64" height="64">
${body}
</main>
${counter}</body>
</html>
`;
}

function html(markup: string) {
  return new Response(markup, { headers: { "content-type": "text/html; charset=utf-8" } });
}

/** Every smart link (and /soon-iphone) until the Play listing is public. */
function comingSoonPage() {
  return html(page({ title: siteConfig.fullName, body: `<h1>${escapeHtml(siteConfig.fullName)} is coming soon.</h1>` }));
}

/** /get, /get-fb, /get-ig. */
export function smartLinkPage(name: SmartLinkName) {
  if (!siteConfig.playListingLive) return comingSoonPage();
  const link = smartLinks[name];
  const target = playUrl(link.utm);
  // Runs before the page paints: iPhone and iPad leave at once, Android swaps the badge for "Opening Google Play".
  // iPadOS reports itself as a Mac, so a Mac with a touch screen counts as an iPad.
  const head = `<script>
(function () {
  var ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) location.replace(${js(`/soon-iphone/?from=${name}`)});
  else if (/Android/i.test(ua)) document.documentElement.className = "android";
})();
</script>
`;
  const body = `<h1>${escapeHtml(siteConfig.fullName)}</h1>
<p class="opening">Opening Google Play&hellip; <a href="${escapeHtml(target)}">Tap here if nothing happens</a></p>
<div class="store">
<a class="badge" href="${escapeHtml(target)}"><img src="/badges/google-play-badge.svg" alt="Get it on Google Play" width="180" height="53"></a>
<p>${escapeHtml(siteConfig.fullName)} is coming to iPhone.</p>
</div>`;
  // Android: count, then leave (the same timings as the workout site's /play). Others: count a click on the badge
  // (count.js sends with sendBeacon, so the click is recorded as the link leaves the page).
  const script = `  var event = { event: true, path: ${js(link.event)}, title: ${js(link.title)} };
  if (document.documentElement.className === "android") {
    var done = false;
    var go = function () { if (!done) { done = true; location.replace(${js(target)}); } };
    count(event);
    if (!gc || (window.goatcounter && window.goatcounter.count)) setTimeout(go, gc ? 250 : 0);
    else gc.addEventListener("load", function () { setTimeout(go, 250); });
    setTimeout(go, 1500);
  } else {
    document.querySelector(".badge").addEventListener("click", function () { count(event); });
  }`;
  return html(page({ title: siteConfig.fullName, head, body, script }));
}

/** /soon-iphone/: where the smart links send iPhone and iPad visitors until the iOS app is live. */
export function soonIphonePage() {
  if (!siteConfig.playListingLive) return comingSoonPage();
  const targets = Object.fromEntries(Object.entries(smartLinks).map(([name, link]) => [name, playUrl(link.utm)]));
  const body = `<h1>${escapeHtml(siteConfig.fullName)} is coming to iPhone.</h1>
<p>An iOS version is on our roadmap, and we&rsquo;ll share news about availability as soon as we can.</p>
<p>On Android? Get ${escapeHtml(siteConfig.fullName)} on Google Play.</p>
<a class="badge" href="${escapeHtml(siteConfig.playStoreLinkUrl)}"><img src="/badges/google-play-badge.svg" alt="Get it on Google Play" width="180" height="53"></a>`;
  // ?from=<smart link> keeps the source: the Play badge gets that link's tags and the event title names it.
  const script = `  var from = new URLSearchParams(location.search).get("from");
  var targets = ${js(targets)};
  if (from && Object.prototype.hasOwnProperty.call(targets, from)) document.querySelector(".badge").href = targets[from];
  else from = null;
  count({ event: true, path: ${js(soonEvent)}, title: "Soon on iPhone (Nutrition)" + (from ? " (/" + from + ")" : "") });`;
  return html(page({ title: `${siteConfig.fullName} on iPhone`, body, script }));
}
