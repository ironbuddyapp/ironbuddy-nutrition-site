import type { Metadata } from "next";
import { BulletList, ContentSection, PageBody, Strong, TextLink } from "@/components/content";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { pages } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import { pageGraph, trail } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata(pages.whatsNew);

/*
 * Release notes, newest first. The lines are the app's own What's New lines (from the product's site brief): real
 * changes only. Add a section per released version and bump `pages.whatsNew.modified` in src/lib/pages.ts.
 * The screenshots are phone-size test-build captures with sample data; never show a price.
 */

export default function WhatsNewPage() {
  return (
    <main id="main">
      <JsonLd data={pageGraph(pages.whatsNew, { trail: trail(pages.home, pages.whatsNew) })} />
      <PageHero
        trail={trail(pages.home, pages.whatsNew)}
        eyebrow="What's New"
        title="What's New in IronBuddy Nutrition Tracker"
        updated={pages.whatsNew.modified}
        lead={
          <>
            What changed in each version of IronBuddy: Nutrition Tracker, newest first. The app is in closed testing on
            Google Play and is not public yet.
          </>
        }
      />

      <PageBody>
        <ContentSection id="v0-1-6" title="Version 0.1.6 (22 October 2026)">
          <BulletList>
            <li>
              <Strong>Shot asks one thing at a time:</Strong> what it is, the meal, the foods, the amounts, then check
              and log.
            </li>
            <li>
              <Strong>Labels:</Strong> every number is named, and one the reader isn&apos;t sure of is left empty
              instead of guessed.
            </li>
            <li>
              <Strong>Say the numbers:</Strong> tell the app the calories and macros, recognised on your phone
              (English).
            </li>
            <li>
              <Strong>Plate photos with your meals:</Strong> your plate photos now show with your meals on Today and in
              My meals. You can rename a meal in My meals.
            </li>
          </BulletList>
          <p>
            A small copy of a plate photo is kept with its meal on your phone only: it is never uploaded and not in any
            backup. Barcode and label photos are still discarded after reading. See the{" "}
            <TextLink href={pages.privacy.path}>privacy policy</TextLink> for the details.
          </p>
          <figure>
            <img
              src="/screenshots/ironbuddy-nutrition-shot-plate-route.webp"
              width={1600}
              height={441}
              loading="lazy"
              alt="The Shot plate route, seven screens: what did you photograph, which meal, what is on the plate, how much, anything added, the meal check, and the label check"
              className="w-full rounded-2xl border border-white/8"
            />
            <figcaption className="mt-2 text-sm text-muted">
              Shot, one question per screen, from the photo to logging the meal.
            </figcaption>
          </figure>
          <figure>
            <img
              src="/screenshots/ironbuddy-nutrition-plate-photos-in-meals.webp"
              width={1600}
              height={1172}
              loading="lazy"
              alt="Plate photos on the Today screen, in a meal's details and in My meals"
              className="w-full rounded-2xl border border-white/8"
            />
            <figcaption className="mt-2 text-sm text-muted">
              Plate photos on Today, in a meal&apos;s details and in My meals.
            </figcaption>
          </figure>
        </ContentSection>
      </PageBody>
    </main>
  );
}
