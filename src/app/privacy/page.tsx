import type { Metadata } from "next";
import { BulletList, Code, ContentSection, PageBody, Strong, TextLink } from "@/components/content";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { pages } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { pageGraph, trail } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata(pages.privacy);

/*
 * This page IS the privacy policy of IronBuddy: Nutrition Tracker: the app links here (Settings → About) and Play
 * Console uses this URL. Every statement must match what the app does (IronBuddy-Nutrition-Tracker-Android). Change
 * the wording here and bump `pages.privacy.modified` in src/lib/pages.ts. Before the iPhone app is released, add
 * what differs on iPhone (App Store purchases, iCloud Backup, the Files app).
 */

const googlePrivacyUrl = "https://policies.google.com/privacy";
const githubPrivacyUrl = "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement";

const contents = [
  ["summary", "1. Summary"],
  ["applies-to", "2. Who we are and what this covers"],
  ["data-on-device", "3. Data stored on your device"],
  ["camera", "4. Camera and photos"],
  ["recognition", "5. Food recognition and label reading on your phone"],
  ["purchases", "6. Purchases and payment"],
  ["google-play", "7. Review prompts and update notices"],
  ["not-collected", "8. Data we do not collect"],
  ["backups", "9. Backups, exports and sharing"],
  ["transmission", "10. What leaves your phone"],
  ["permissions", "11. Permissions"],
  ["deleting-data", "12. How to delete your data"],
  ["health-notice", "13. Health notice"],
  ["age", "14. Adults only"],
  ["rights", "15. Your rights"],
  ["third-party", "16. Third-party services and this website"],
  ["changes", "17. Changes to this policy"],
  ["contact", "18. Contact"],
] as const;

function GooglePolicyLink() {
  return <TextLink href={googlePrivacyUrl}>Google&apos;s Privacy Policy</TextLink>;
}

export default function PrivacyPage() {
  const email = siteConfig.contactEmail;

  return (
    <main id="main">
      <JsonLd data={pageGraph(pages.privacy, { trail: trail(pages.home, pages.privacy) })} />
      <PageHero
        trail={trail(pages.home, pages.privacy)}
        eyebrow="Legal"
        title="IronBuddy Nutrition Privacy Policy"
        updated={pages.privacy.modified}
        lead={
          <>
            IronBuddy: Nutrition Tracker (“the App”) is a calorie and nutrition tracker that keeps everything on your
            phone. This policy explains what the App stores, where it stays, and what it does <em>not</em> collect. In
            short: your meals, your body data and your photos never reach us.
          </>
        }
      >
        <dl className="space-y-1 text-sm text-muted">
          <div>
            <dt className="inline font-medium text-white">App: </dt>
            <dd className="inline">
              IronBuddy: Nutrition Tracker (Android package <Code>{siteConfig.playStoreId}</Code>)
            </dd>
          </div>
          <div>
            <dt className="inline font-medium text-white">Developer: </dt>
            <dd className="inline">{siteConfig.developerName}</dd>
          </div>
          <div>
            <dt className="inline font-medium text-white">Contact: </dt>
            <dd className="inline">
              <TextLink href={`mailto:${email}`}>{email}</TextLink>
            </dd>
          </div>
        </dl>
      </PageHero>

      <PageBody>
        <nav aria-label="Policy contents">
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

        <ContentSection id="summary" title="1. Summary">
          <BulletList>
            <li>Everything you enter (meals, weight, body details, your goal) is stored on your phone only.</li>
            <li>There is no account, no IronBuddy server and no cloud sync. We never receive your data.</li>
            <li>
              Photos of your plate, of barcodes and of nutrition labels are read on your phone and are never sent to
              us. The only exception is one you choose: if you tap &quot;Read with Google Lens&quot;, that one label
              photo is handed to Google&apos;s app (section 4).
            </li>
            <li>The App has no ads, no analytics and no crash-reporting service. We do not sell or share data.</li>
            <li>
              The food database, the barcode list and the food recognition model are built into the App, so looking
              food up never goes online.
            </li>
            <li>
              The only internet use is through Google Play: the one-time purchase, the occasional review prompt and
              update notices (sections 6 and 7).
            </li>
            <li>
              Copies of your data exist outside the App only where you or your phone put them: Android&apos;s own
              backup to your Google account, and, in the full version, a backup file and exports you choose to make
              (section 9).
            </li>
          </BulletList>
        </ContentSection>

        <ContentSection id="applies-to" title="2. Who we are and what this covers">
          <p>
            The App is made by <Strong>{siteConfig.developerName}</Strong>, the developer named on its Google Play
            listing (“we”, “us”). You can reach us at <TextLink href={`mailto:${email}`}>{email}</TextLink>.
          </p>
          <p>
            This policy covers the IronBuddy: Nutrition Tracker app for Android distributed on Google Play, including
            its testing versions. It does not cover Google Play, Android&apos;s backup service, Google Lens and the
            Google app, or the apps and services you choose to send files to (for example email, Google Drive or messaging apps). Our other app,
            IronBuddy: Workout Tracker, has <TextLink href={`${siteConfig.brandUrl}/privacy/`}>its own policy</TextLink>.
          </p>
        </ContentSection>

        <ContentSection id="data-on-device" title="3. Data stored on your device">
          <p>The App keeps the following in its private storage on your phone, and uses it only to work for you:</p>
          <BulletList>
            <li>
              <Strong>Food log:</Strong> the meals you log (name, amount in grams, calories, protein, carbs, fat,
              meal of the day and date), your saved meals, your pots and meal-prep boxes, and products you add by
              barcode.
            </li>
            <li>
              <Strong>Health and body data:</Strong> the answers you give to set up your plan (goal, sex, age,
              height, weight, daily movement, training days, pace, and optionally a goal weight), your weigh-ins, and
              your weekly check-ins and the target changes you accept.
            </li>
            <li>
              <Strong>Personal details you choose to enter:</Strong> an optional first name, shown on Today.
            </li>
            <li>
              <Strong>Settings:</Strong> units, theme, accent colour, tips, and the layout of your Today cards.
            </li>
            <li>
              <Strong>Trial and purchase status:</Strong> when your free trial started, the latest time the App has
              seen (so that moving the phone&apos;s date back does not extend the trial), whether you have bought the
              full version, and the purchase token Google Play provides to confirm it.
            </li>
          </BulletList>
          <p>
            We do not receive any of this. It stays on your phone unless you, or Android&apos;s backup, copy it
            somewhere (section 9).
          </p>
        </ContentSection>

        <ContentSection id="camera" title="4. Camera and photos">
          <p>
            The App uses the camera only when you tap to take a photo of your plate, of a barcode or of a nutrition
            label. You can also pick an existing picture with Android&apos;s photo picker, in which case the App
            receives only the picture you choose.
          </p>
          <BulletList>
            <li>
              The picture is read on your phone: to suggest which foods are on the plate, to read the barcode digits,
              or to read the numbers on a nutrition label.
            </li>
            <li>
              It is shown on screen while you confirm the meal, then discarded. The App never adds it to your gallery
              and never sends it to us. If you use Google Lens (below), the App keeps that one label photo as a
              temporary file in its private storage so Google&apos;s app can open it, and deletes it when you come back.
            </li>
            <li>The App does not use the camera in the background and does not record video or sound.</li>
          </BulletList>
          <p>
            <Strong>Google Lens (optional).</Strong> On Android, the nutrition-label form offers &quot;Read with Google
            Lens&quot; for labels the App&apos;s own reader cannot manage. Only if you tap it, the App hands the label
            photo (the one you just took, or a new one) to Google Lens in the Google app on your phone. If Lens&apos;s
            own share screen is not available, Android&apos;s share sheet opens instead and you choose the app. From
            that moment the photo is in Google&apos;s app, not ours: Google receives and processes it under its own terms
            and <GooglePolicyLink />, as part of your own use of Google&apos;s services. If you have turned on Visual
            Search History in your Google account, Google may keep the image there; see{" "}
            <TextLink href="https://support.google.com/websearch/answer/14601082">Google&apos;s help page</TextLink>.
          </p>
          <p>
            In Lens you select the label&apos;s text and tap Copy yourself. When you come back, the App reads your
            clipboard once and uses the text only if it was copied after you left for Lens. It picks out the nutrition
            numbers on your phone, fills in the form for you to check, and does not keep the copied text. Android may
            show a short &quot;IronBuddy Nutrition pasted from your clipboard&quot; notice when this happens. The App
            never reads the clipboard at any other time, and it receives nothing else from Google: no account details
            and no search results other than the text you copied. IronBuddy itself still sends nothing to Google or to
            us. If you never tap that button, Google Lens is never involved and you can always type the numbers
            instead.
          </p>
        </ContentSection>

        <ContentSection id="recognition" title="5. Food recognition and label reading on your phone">
          <p>
            Dish suggestions come from a food recognition model (SigLIP 2, an open model published by Google) that is
            built into the App and runs entirely on your phone, using ONNX Runtime, open-source software from Microsoft.
            Nutrition labels are read on your phone too, with PaddleOCR&apos;s open-source text models, also built into
            the App.
          </p>
          <p>
            No photo, result or usage information is sent to Google, Microsoft or anyone else, or to us: the App does
            not allow any connection from its interface except to its own built-in files.
          </p>
        </ContentSection>

        <ContentSection id="purchases" title="6. Purchases and payment">
          <p>
            The App is free to download with a free trial (currently {siteConfig.freeTrialDays} days) of everything.
            After the trial, a one-time purchase through Google Play keeps it unlocked; there is no subscription.
            Without the purchase your data stays visible but logging and editing are locked.
          </p>
          <p>
            The purchase is made and processed entirely by Google Play. The App receives only confirmation that it
            exists (the product identifier and a purchase token) and keeps it on your phone, so it can unlock the full
            version and check it again when you open the App or reinstall it. The App never receives your payment
            card, billing address or other payment details. See <GooglePolicyLink />.
          </p>
        </ContentSection>

        <ContentSection id="google-play" title="7. Review prompts and update notices">
          <p>
            Now and then, after you have used the App for a while, it may ask Google Play to show its built-in rating
            prompt. Google Play shows and handles the prompt; we do not learn whether you saw it, what you rated, or
            what you wrote.
          </p>
          <p>
            The App may also ask Google Play whether a newer version is available, to show an update notice on Today.
            That check is handled by Google Play and contains none of your data.
          </p>
        </ContentSection>

        <ContentSection id="not-collected" title="8. Data we do not collect">
          <p>As of the date at the top of this page, the App does not:</p>
          <BulletList>
            <li>create accounts or ask you to sign in;</li>
            <li>send your meals, body data, photos or settings to any server, ours or anyone else&apos;s;</li>
            <li>contain advertising, analytics or crash-reporting code;</li>
            <li>sell, rent or share personal data;</li>
            <li>
              access your location, contacts, microphone or other apps&apos; data, except two things for Google Lens:
              checking whether Google&apos;s app is installed, and reading the text you copied in Lens, once, when you
              come back (section 4);
            </li>
            <li>receive your payment details (these stay with Google Play).</li>
          </BulletList>
        </ContentSection>

        <ContentSection id="backups" title="9. Backups, exports and sharing">
          <p>Copies of your data can exist outside the App&apos;s private storage only in these ways:</p>
          <BulletList>
            <li>
              <Strong>Android backup (Google account):</Strong> if backup is turned on in your phone&apos;s settings,
              Android may keep an encrypted backup of the App&apos;s data in your Google account and restore it on a
              new phone. This is done entirely by Android and Google; we cannot access these backups. You can turn
              it off or delete it in your phone&apos;s Google backup settings.
            </li>
            <li>
              <Strong>Backup file (full version):</Strong> the App keeps one up-to-date copy of your data at{" "}
              <Code>Download/IronBuddy Nutrition/ironbuddy-nutrition-backup.json</Code>, replacing it each time your
              data changes. It stays on your phone, where you and apps you allow to read your files can open it. You
              can turn it off in Settings.
            </li>
            <li>
              <Strong>Export a copy (full version):</Strong> a JSON file of your data, sent wherever you choose through
              Android&apos;s share sheet.
            </li>
            <li>
              <Strong>Export for a coach (full version):</Strong> a spreadsheet (CSV) or PDF of your meals and weight
              for the days you choose, saved or shared where you choose.
            </li>
            <li>
              <Strong>Share cards (full version):</Strong> a picture of your day or week, made on your phone. Calories
              are hidden on the card unless you switch them on. You choose to share it through Android&apos;s share
              sheet or save it to your gallery (Pictures → IronBuddy Nutrition).
            </li>
            <li>
              <Strong>Import (full version):</Strong> you can load a backup file back into the App. The App keeps one
              copy of your data from just before an import, so you can undo it.
            </li>
          </BulletList>
          <p>
            Everything in this list except Android backup happens only when you choose it. Once a file is saved or
            shared, where it goes is outside our control and covered by that destination&apos;s own policy.
            Uninstalling the App does not delete files already in your Download folder or backups in your Google
            account.
          </p>
        </ContentSection>

        <ContentSection id="transmission" title="10. What leaves your phone">
          <p>
            Nothing you enter is sent to us or to any server. The food database (from USDA, CIQUAL and Open Food
            Facts), the barcode list and the food recognition model are copies built into the App, so every lookup
            happens on your phone. The App&apos;s only network use is Google Play (purchase, review prompt, update
            check), links you choose to open in your browser, such as this policy, and Google Lens if you choose to open it
            (section 4), which is Google&apos;s app, not ours.
          </p>
        </ContentSection>

        <ContentSection id="permissions" title="11. Permissions">
          <BulletList>
            <li>
              <Strong>Camera:</Strong> only when you tap to photograph a plate, a barcode or a nutrition label (section 4).
            </li>
            <li>
              <Strong>Internet:</Strong> needed by Google Play for the purchase, the review prompt and update notices,
              and to open links in your browser. It is not used to upload your data.
            </li>
            <li>
              <Strong>Google Play Billing:</Strong> to make and confirm the one-time purchase.
            </li>
            <li>
              <Strong>Storage (older Android versions only):</Strong> to keep the backup file and exports in your
              Download folder, and to read a backup file you choose to import. After a reinstall, Android may ask you
              to choose the IronBuddy Nutrition folder once; the App then reaches only that folder.
            </li>
            <li>
              <Strong>Google app visibility and clipboard (no permission needed):</Strong> the App can see whether
              Google&apos;s app is installed, only to offer Google Lens, and it reads the clipboard only once after you
              return from Lens (section 4). It cannot see your other apps.
            </li>
          </BulletList>
        </ContentSection>

        <ContentSection id="deleting-data" title="12. How to delete your data">
          <BulletList>
            <li>
              <Strong>In the App:</Strong> Settings → Reset all data erases everything the App stores on your phone.
            </li>
            <li>
              <Strong>Uninstall:</Strong> removes the App and its private storage.
            </li>
            <li>
              <Strong>Files you made:</Strong> the backup file and exports in your Download folder, and anything you
              shared, are not removed by uninstalling or resetting; delete them yourself if you no longer want them.
            </li>
            <li>
              <Strong>Android backup:</Strong> delete it in your phone&apos;s settings (Google → Backup) or in your
              Google account.
            </li>
          </BulletList>
          <p>
            Because we hold none of your data, there is nothing for us to delete on our side and no account to close.
          </p>
        </ContentSection>

        <ContentSection id="health-notice" title="13. Health notice">
          <p>
            The App is a food logging and planning tool. It is <Strong>not a medical device</Strong> and does not
            diagnose, treat or prevent any condition. Calorie and macro targets are estimates from standard formulas
            and from your own logs, and photo-based meals are estimates. If you are pregnant or breastfeeding, have
            had an eating disorder, or have a medical condition, talk to a doctor before following calorie targets.
          </p>
        </ContentSection>

        <ContentSection id="age" title="14. Adults only">
          <p>
            The App is meant for adults aged 18 and over and asks your age before making a plan; it does not create
            calorie targets for anyone younger. It is not directed at children.
          </p>
        </ContentSection>

        <ContentSection id="rights" title="15. Your rights">
          <p>
            Under data protection laws such as the EU General Data Protection Regulation you have the right to access,
            correct, delete or take a copy of personal data held about you. Because your data is held only on your own
            phone, you can do all of this yourself in the App: view and edit everything, export a copy (full version)
            and reset all data. If you have a question or a request, email us at{" "}
            <TextLink href={`mailto:${email}`}>{email}</TextLink>. You also have the right to complain to the data
            protection authority in your country.
          </p>
        </ContentSection>

        <ContentSection id="third-party" title="16. Third-party services and this website">
          <p>
            Google Play (purchases, review prompts, update notices), Android&apos;s backup, and Google Lens in the
            Google app (only if you choose it, section 4) are run by Google under its own terms; see{" "}
            <GooglePolicyLink />. Apps you share files to are covered by their own policies. Google Lens is a trademark
            of Google LLC; IronBuddy is not made, endorsed or sponsored by Google.
          </p>
          <p>
            <Strong>This website</Strong> (nutrition.ironbuddy.fit) uses no cookies, no analytics and no tracking. It
            is hosted on GitHub Pages, which may log visitors&apos; IP addresses for security; see{" "}
            <TextLink href={githubPrivacyUrl}>GitHub&apos;s privacy statement</TextLink>.
          </p>
        </ContentSection>

        <ContentSection id="changes" title="17. Changes to this policy">
          <p>
            If the App or this policy changes, we will update this page and the date at the top. If a change affects
            what the App does with your data, the App&apos;s release notes will say so.
          </p>
        </ContentSection>

        <ContentSection id="contact" title="18. Contact">
          <p>
            {siteConfig.developerName}, <TextLink href={`mailto:${email}`}>{email}</TextLink>
          </p>
        </ContentSection>
      </PageBody>
    </main>
  );
}
