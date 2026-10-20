// Renders public/og.jpg (1200 × 630), the image shown when a page is shared, from the site's own colours,
// logo and a real app screenshot. Run from the repo root: node scripts/make-og.mjs (needs Playwright installed).
import { chromium } from "playwright";
import { readFileSync } from "node:fs";
import path from "node:path";

const root = path.resolve(".");
const b64 = (p) => readFileSync(path.join(root, p)).toString("base64");
const logo = `data:image/png;base64,${b64("public/logo-mark.png")}`;
const shot = `data:image/webp;base64,${b64("public/screenshots/ironbuddy-nutrition-today-calories-protein.webp")}`;
const font = `data:font/woff2;base64,${b64("public/fonts/space-grotesk/latin.woff2")}`;

const html = `<!doctype html><html><head><style>
@font-face { font-family: Jakarta; src: url(${font}) format("woff2"); font-weight: 200 800; }
* { margin: 0; box-sizing: border-box; }
body { width: 1200px; height: 630px; background: radial-gradient(circle at 90% 0%, rgba(199,146,180,.22), rgba(199,146,180,0) 50%), #151013; color: #ede8eb; font-family: Jakarta, sans-serif; position: relative; overflow: hidden; }
.glow { position: absolute; width: 560px; height: 560px; border-radius: 50%; background: radial-gradient(circle, rgba(199,146,180,.18), transparent 65%); right: 40px; top: 30px; }
.text { position: absolute; left: 72px; top: 92px; width: 640px; }
.brand { display: flex; align-items: center; gap: 16px; font-size: 26px; font-weight: 600; }
.brand img { width: 56px; height: 56px; border-radius: 14px; }
.eyebrow { margin-top: 44px; font-size: 18px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; color: #c792b4; }
h1 { margin-top: 14px; font-size: 62px; line-height: 1.06; font-weight: 700; letter-spacing: -.02em; }
p { margin-top: 22px; font-size: 26px; line-height: 1.35; color: #a696a0; }
.pills { margin-top: 30px; display: flex; gap: 12px; }
.pills span { border: 1px solid #392d35; background: #1e181c; border-radius: 999px; padding: 8px 18px; font-size: 19px; color: #ede8eb; }
.phone { position: absolute; right: 96px; top: 54px; width: 300px; height: 650px; border-radius: 44px; border: 1px solid rgba(255,255,255,.14); background: #000; padding: 9px; box-shadow: 0 40px 90px -20px rgba(0,0,0,.8); }
.phone div { width: 100%; height: 100%; border-radius: 36px; overflow: hidden; background: #1e181c; }
.phone img { width: 100%; display: block; }
</style></head><body>
<div class="glow"></div>
<div class="text">
  <div class="brand"><img src="${logo}" alt="">IronBuddy: Nutrition Tracker</div>
  <div class="eyebrow">For Android · Offline</div>
  <h1>One camera. Honest numbers.</h1>
  <p>Calories and macros with honest numbers: every meal says Exact or Estimate.</p>
  <div class="pills"><span>No account</span><span>No ads</span><span>Pay once</span></div>
</div>
<div class="phone"><div><img src="${shot}" alt=""></div></div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: "load" });
await page.waitForTimeout(300);
await page.screenshot({ path: path.join(root, "public/og.jpg"), type: "jpeg", quality: 88 });
await browser.close();
console.log("public/og.jpg written");
