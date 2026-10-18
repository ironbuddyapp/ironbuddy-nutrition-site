import Link from "next/link";
import { Container } from "@/components/Container";
import { GooglePlayButton } from "@/components/GooglePlayButton";
import { Reveal } from "@/components/Reveal";
import { SocialLinks } from "@/components/SocialLinks";
import { pages } from "@/lib/pages";
import { siteConfig } from "@/lib/site";

export function Download() {
  return (
    <section id="download" className="max-lg:scroll-mt-0 max-lg:justify-center max-lg:py-0 lg:scroll-mt-24 lg:pb-32 lg:pt-8 sm:pb-32">
      <Container className="flex h-full min-h-0 flex-col justify-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-surface px-6 py-10 text-center sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(183,255,42,0.14),transparent_55%)]" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Download
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Download IronBuddy Nutrition: pay once, eat for your goal.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-lg">
                Free to download with a {siteConfig.freeTrialDays}-day free trial. After that, pay{" "}
                {siteConfig.price.label} once to keep it all unlocked, with no subscription. Your
                meals stay on your phone, and the app works without a connection.
              </p>
              <div className="mt-8 flex justify-center">
                <GooglePlayButton lazy />
              </div>
              <div className="mt-8 flex flex-col items-center gap-5 lg:hidden">
                <SocialLinks />
                <nav
                  aria-label="About and legal"
                  className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm text-muted"
                >
                  <a href={siteConfig.brandUrl} className="inline-flex min-h-11 items-center transition hover:text-white">
                    About IronBuddy
                  </a>
                  <Link href={pages.privacy.path} className="inline-flex min-h-11 items-center transition hover:text-white">
                    Privacy Policy
                  </Link>
                  <Link href={pages.support.path} className="inline-flex min-h-11 items-center transition hover:text-white">
                    Support
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
