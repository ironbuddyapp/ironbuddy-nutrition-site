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
        <ContentSection id="v0-1-10" title="Version 0.1.10 (28 October 2026)">
          <BulletList>
            <li>
              <Strong>Settings like the Workout Tracker:</Strong> Settings now looks like IronBuddy: Workout
              Tracker&apos;s, with the same groups and row names.
            </li>
            <li>
              <Strong>Backup rows under Data:</Strong> Export a copy, Import a backup file and Undo last import are their
              own rows under Data again.
            </li>
            <li>
              <Strong>New in Settings:</Strong> Body Tracking takes you to your weight, and Main Concept replays the
              intro.
            </li>
            <li>
              <Strong>iPhone only:</Strong> after a reinstall, the first screen offers to bring back the iCloud copy.
            </li>
          </BulletList>
        </ContentSection>

        <ContentSection id="v0-1-9" title="Version 0.1.9 (24 October 2026)">
          <BulletList>
            <li>
              <Strong>A plate is one card on Today:</Strong> a plate logged from one Shot photo shows as one card. Tap it
              to see each food, add one you forgot, move the plate to another meal, save it to My meals or delete it.
            </li>
            <li>
              <Strong>One-tap swaps for look-alike foods:</Strong> in Shot, swap a food for its look-alike in one tap
              (white, wholemeal, multigrain or rye toast; ham, turkey or chicken slices; egg, cheese and yogurt kinds).
            </li>
            <li>
              <Strong>Say or type what&apos;s on the plate:</Strong> speech is recognised on the phone (English,
              offline); nothing leaves the phone.
            </li>
            <li>
              <Strong>Extras by the spoon:</Strong> butter, oil and other extras are counted with &minus; / + in
              teaspoons and tablespoons together (0 to 10 of each), for example 1 tsp in the pan plus 2 tbsp on the
              bread.
            </li>
            <li>
              <Strong>Macro gauges on Today:</Strong> the calories card shows protein, carbs and fat as three gauges,
              the default for everyone. The full version can pick another look in Settings &rarr; Appearance &rarr;
              Macros on Today: Gauges, Rings, Bars, Tiles or Big numbers.
            </li>
          </BulletList>
          <p>Every calorie number still says Exact or Estimate.</p>
          <figure>
            <img
              src="/screenshots/ironbuddy-nutrition-today-macro-gauges.webp"
              width={720}
              height={1560}
              loading="lazy"
              alt="Today screen: 660 kcal left with an estimate range, protein, carbs and fat as three gauges with the grams to go, and today's meals marked Exact or Estimate"
              className="w-full max-w-xs rounded-2xl border border-white/8"
            />
            <figcaption className="mt-2 text-sm text-muted">Protein, carbs and fat as gauges on Today.</figcaption>
          </figure>
        </ContentSection>

        <ContentSection id="v0-1-8"title="Version 0.1.8 (23 October 2026)">
          <BulletList>
            <li>
              <Strong>Coffees by name:</Strong> Shot names a freddo espresso, freddo cappuccino, frapp&eacute;, Greek
              coffee, espresso, cappuccino or latte as that drink, and the drink keeps its name in the list and in the
              logged meal.
            </li>
            <li>
              <Strong>Drinks start at a real amount:</Strong> a protein shake is one scoop, coffee, tea and juice a cup
              or glass, beer and cola a bottle, wine a glass. Grams typed from a scale are still Exact; a size guess is
              an Estimate.
            </li>
          </BulletList>
        </ContentSection>

        <ContentSection id="v0-1-7" title="Version 0.1.7 (22 October 2026)">
          <BulletList>
            <li>
              <Strong>Build a meal:</Strong> in My meals, pick foods from the list, set the grams of each and see the
              whole meal&apos;s calories and macros added up. Save it, log it again in two taps, and change its foods
              or amounts later. Exact when every food is weighed, otherwise an Estimate with a range.
            </li>
            <li>
              <Strong>Batch cooking:</Strong> the first question is One meal or A batch (a pot eaten over several
              days). Say how many portions the pot makes and one portion logs as an Estimate; weigh the cooked pot, then
              your plate, for Exact numbers.
            </li>
            <li>
              <Strong>A clearer saved-meal sheet:</Strong> the numbers first, then how much and which meal. A batch
              picks Portions or Weigh my plate.
            </li>
          </BulletList>
          <figure>
            <img
              src="/screenshots/ironbuddy-nutrition-build-a-meal.webp"
              width={1600}
              height={844}
              loading="lazy"
              alt="Build a meal in four screens: One meal or A batch, a meal added up to 356 kcal and Exact, a 450 g plate from a chicken and rice batch at 527 kcal and Exact, and the saved-meal sheet"
              className="w-full rounded-2xl border border-white/8"
            />
            <figcaption className="mt-2 text-sm text-muted">
              Build a meal or a batch, then log it in two taps.
            </figcaption>
          </figure>
        </ContentSection>

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
