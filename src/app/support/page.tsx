import type { Metadata } from "next";
import { BulletList, ContentSection, NumberedList, PageBody, Strong, TextLink } from "@/components/content";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { pages } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { pageGraph, trail } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata(pages.support);

/*
 * The support page (the store listings' "support URL"). Every step names the App's own labels; check them against
 * the app (src/routes/settings.tsx) whenever a label changes, and bump `pages.support.modified`.
 */

const contents = [
  ["contact", "Contact us"],
  ["restore", "Restore your purchase"],
  ["new-phone", "Move to a new phone"],
  ["trial", "The free trial and the purchase"],
  ["numbers", "A number looks wrong"],
  ["photo", "The photo didn't find my dish"],
  ["barcode", "A barcode isn't found"],
  ["delete", "Delete your data"],
  ["refund", "Refunds"],
] as const;

export default function SupportPage() {
  const email = siteConfig.contactEmail;

  return (
    <main id="main">
      <JsonLd data={pageGraph(pages.support, { trail: trail(pages.home, pages.support) })} />
      <PageHero
        trail={trail(pages.home, pages.support)}
        eyebrow="Support"
        title="IronBuddy Nutrition Support"
        updated={pages.support.modified}
        lead={
          <>
            Help with IronBuddy: Nutrition Tracker. Most answers are below; if yours isn&apos;t, email us and a person
            will reply.
          </>
        }
      >
        <p className="text-sm text-muted">
          Email: <TextLink href={`mailto:${email}`}>{email}</TextLink>
        </p>
      </PageHero>

      <PageBody>
        <nav aria-label="Support topics">
          <ol className="grid gap-x-8 gap-y-1 rounded-3xl border border-white/8 bg-surface px-5 py-4 text-sm sm:grid-cols-2 sm:px-7">
            {contents.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="inline-block py-1.5 text-muted transition hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <ContentSection id="contact" title="Contact us">
          <p>
            Email <TextLink href={`mailto:${email}`}>{email}</TextLink>. It helps if you include:
          </p>
          <BulletList>
            <li>your phone model and Android version;</li>
            <li>the App&apos;s version (phone Settings → Apps → IronBuddy Nutrition);</li>
            <li>what you did, what you expected, and what happened instead (a screenshot helps a lot).</li>
          </BulletList>
          <p>
            We can&apos;t see your meals or settings: they exist only on your phone. Please don&apos;t send health
            details we don&apos;t need.
          </p>
        </ContentSection>

        <ContentSection id="restore" title="Restore your purchase">
          <p>Bought the full version, but the App asks you to unlock again (for example after reinstalling)?</p>
          <NumberedList>
            <li>Make sure the phone is signed in to the Google account you bought it with, and is online.</li>
            <li>
              Open the App and go to <Strong>Settings → Restore purchase</Strong>.
            </li>
            <li>The App checks with Google Play and unlocks again. You are never charged twice.</li>
          </NumberedList>
        </ContentSection>

        <ContentSection id="new-phone" title="Move to a new phone">
          <p>There are two ways, and you can use both:</p>
          <BulletList>
            <li>
              <Strong>Android backup:</Strong> if Google backup is on (phone Settings → Google → Backup), installing
              the App on a new phone with the same Google account brings your data back automatically. This works in
              the trial and the full version.
            </li>
            <li>
              <Strong>Backup file (full version):</Strong> copy{" "}
              <em>Download → IronBuddy Nutrition → ironbuddy-nutrition-backup.json</em> to the new phone, then in the
              App use <Strong>Settings → Import a backup file…</Strong>. You can also use{" "}
              <Strong>Settings → Export a copy…</Strong> to send a copy anywhere you like first.
            </li>
          </BulletList>
        </ContentSection>

        <ContentSection id="trial" title="The free trial and the purchase">
          <BulletList>
            <li>
              The {siteConfig.freeTrialDays}-day free trial includes everything. No payment is needed to start.
            </li>
            <li>
              After the trial, one payment of {siteConfig.price.label} through Google Play keeps everything unlocked
              for good. There is no subscription and nothing renews.
            </li>
            <li>
              If you don&apos;t buy, nothing is deleted: your meals stay visible, and logging and editing wait until
              you unlock.
            </li>
          </BulletList>
        </ContentSection>

        <ContentSection id="numbers" title="A number looks wrong">
          <BulletList>
            <li>
              <Strong>Check the badge.</Strong> <em>Exact</em> means measured (grams you typed from a scale, a
              product&apos;s label, a pot you weighed). <em>Estimate</em> means a guess, shown with a range.
            </li>
            <li>
              <Strong>Fix the amount:</Strong> tap the meal on Today and type the grams you weighed. A measured food
              then becomes Exact.
            </li>
            <li>
              <Strong>Raw or cooked:</Strong> rice, pasta, pulses and meat change weight when cooked. In Add food, use
              the Raw / Cooked switch to match how you weighed it.
            </li>
            <li>
              <Strong>Your daily target:</Strong> it&apos;s a starting estimate. After two weeks of logging and a few
              weigh-ins, the weekly check-in on Progress suggests a target based on your own results.
            </li>
          </BulletList>
        </ContentSection>

        <ContentSection id="photo" title="The photo didn't find my dish">
          <p>
            The photo suggests dishes from about 2,000 it knows; it can miss home recipes and mixed plates. You can
            always type the dish in the search box on the same screen, or tap one of your usual meals. For the best
            guesses, photograph one dish from above in good light. A photo is always an estimate: weigh the plate once
            and save it to My meals, and next time it logs as Exact.
          </p>
        </ContentSection>

        <ContentSection id="barcode" title="A barcode isn't found">
          <p>
            The App includes about a million products, but not every one. If yours isn&apos;t there, the App opens a
            form: copy the per-100 g values from the label once, and from then on it&apos;s one tap. Product data comes
            from <TextLink href="https://world.openfoodfacts.org/">Open Food Facts</TextLink>, an open database built
            by volunteers; if a product&apos;s values are wrong, check them against the pack before saving.
          </p>
        </ContentSection>

        <ContentSection id="delete" title="Delete your data">
          <p>
            In the App, <Strong>Settings → Reset all data</Strong> erases everything on your phone. Uninstalling the
            App also removes its data. The backup file and exports in your Download folder, and Android&apos;s backup
            in your Google account, stay until you delete them. We hold no copy of your data, so there is no account to
            close. Details are in the <TextLink href={pages.privacy.path}>privacy policy</TextLink>.
          </p>
        </ContentSection>

        <ContentSection id="refund" title="Refunds">
          <p>
            Purchases are handled by Google Play. Within 48 hours of buying you can request a refund yourself in your{" "}
            <TextLink href="https://play.google.com/store/account/orderhistory">Google Play order history</TextLink>.
            After that, email us with your order number (it starts with GPA.) and we&apos;ll look at it.
          </p>
        </ContentSection>
      </PageBody>
    </main>
  );
}
