import { AppScreen, PhoneMockup } from "@/components/PhoneMockup";
import { Container } from "@/components/Container";
import { ExploreIronBuddyButton } from "@/components/ExploreIronBuddyButton";
import { GooglePlayButton } from "@/components/GooglePlayButton";
import { Icon } from "@/components/icons";
import { heroBullets, heroHighlights, photoCredit, screenshotSrc } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { preload } from "react-dom";

export function Hero() {
  preload(screenshotSrc("today"), { as: "image", fetchPriority: "high" });

  return (
    <section id="home" className="relative overflow-hidden max-lg:scroll-mt-0 max-lg:py-0 sm:pb-24 sm:pt-16 lg:scroll-mt-24 lg:pb-28 lg:pt-20">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />

      <Container className="relative grid h-full min-h-0 flex-1 items-center gap-4 max-lg:grid-rows-[minmax(0,1fr)_auto] sm:gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="animate-fade-up max-lg:order-2 max-lg:min-h-0">
          {/* The eyebrow is part of the H1 so the page's main heading names what the app is. */}
          <h1 className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface py-1.5 pl-2.5 pr-3.5 font-[family-name:var(--font-display)] text-xs font-medium tracking-[0.04em] text-primary">
              <span aria-hidden className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(242,179,61,0.9)]" />
              {siteConfig.fullName} for Android
              <span className="sr-only">. </span>
            </span>
            <span className="mt-3 block text-[1.85rem] font-semibold leading-[1.05] tracking-tight text-white lg:mt-6 lg:text-[3.9rem] lg:leading-[1.02]">
              Offline calorie counter for <span className="text-primary-glow">people who train.</span>
            </span>
          </h1>
          <p className="mt-2 text-sm font-semibold tracking-tight text-white/85 sm:text-base lg:mt-3 lg:text-2xl">
            An offline calorie counter: one camera for your plate, a barcode or a label. Pay once.
          </p>

          <ul
            aria-label="Key benefits"
            className="mt-2 flex flex-wrap items-center gap-x-2 text-xs text-muted lg:hidden"
          >
            {heroHighlights.map((item) => (
              <li
                key={item}
                className="after:ml-2 after:text-white/25 after:content-['·'] last:after:content-none"
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-3 hidden max-w-lg text-sm leading-relaxed text-muted sm:mt-5 sm:text-base lg:block lg:text-lg">
            IronBuddy Nutrition is a calorie and macro tracker for people who train. Point one camera at your plate, a
            barcode or a nutrition label, or weigh your food, and every number tells you whether it&apos;s exact or an estimate. Everything
            stays on your phone, with no account and no ads.
          </p>

          <ul className="mt-8 hidden grid-cols-2 gap-3 lg:mt-8 lg:grid">
            {heroBullets.map((item) => (
              <li key={item} className="flex items-center gap-2.5 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-white">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col gap-3 lg:mt-10 lg:flex-row lg:items-center">
            <div className="hidden lg:block">
              <GooglePlayButton />
            </div>
            <ExploreIronBuddyButton />
            <a
              href="#features"
              className="hidden h-12 items-center justify-center rounded-full border border-white/12 px-6 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:inline-flex"
            >
              View Features
            </a>
          </div>
        </div>

        <div className="relative flex min-h-0 flex-col items-center justify-center animate-fade-up max-lg:order-1">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/12 blur-3xl" />
          {/* Width also shrinks on short screens (100svh minus header, install bar and text block) so the phone is never clipped. */}
          <PhoneMockup float className="relative max-lg:w-[min(200px,calc((100svh_-_26.25rem)_*_0.4615))]">
            <AppScreen id="today" priority />
          </PhoneMockup>
          <p className="relative mt-2 text-center text-[10px] leading-tight text-muted">{photoCredit}</p>
        </div>
      </Container>
    </section>
  );
}
