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
 * This page IS the privacy policy of IronBuddy: Nutrition Tracker on Android and iPhone: both apps link here
 * (Settings → About), and Play Console and App Store Connect use this URL. Every statement must match what the apps do
 * (IronBuddy-Nutrition-Tracker-Android and IronBuddy-Nutrition-Tracker-iOS); where they differ, name the platform.
 * Change the wording here and bump `pages.privacy.modified` in src/lib/pages.ts.
 */

const googlePrivacyUrl = "https://policies.google.com/privacy";
const applePrivacyUrl = "https://www.apple.com/legal/privacy/";
const githubPrivacyUrl = "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement";

const contents = [
  ["summary", "1. Summary"],
  ["applies-to", "2. Who we are and what this covers"],
  ["data-on-device", "3. Data stored on your device"],
  ["camera", "4. Camera and photos"],
  ["recognition", "5. Food recognition, label reading and plan reading on your phone"],
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

function ApplePolicyLink() {
  return <TextLink href={applePrivacyUrl}>Apple&apos;s Privacy Policy</TextLink>;
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
            IronBuddy: Nutrition Tracker (“the App”) is a calorie and nutrition tracker that keeps your data on your
            phone. This policy explains what the App stores, where it stays, and what it does <em>not</em> collect. In
            short: we never receive your meals, your body data, your plans or your photos. A copy leaves your phone
            only when you choose it, when your phone&apos;s own backup makes it (Android&apos;s backup to your Google
            account, or on iPhone iCloud Backup and the App&apos;s copy in your own iCloud), or when a Google app you
            open on Android makes it, and this policy names each one. It covers the App on Android and on iPhone;
            where they differ, it says which.
          </>
        }
      >
        <dl className="space-y-1 text-sm text-muted">
          <div>
            <dt className="inline font-medium text-white">App: </dt>
            <dd className="inline">
              IronBuddy: Nutrition Tracker (Android package <Code>{siteConfig.playStoreId}</Code>; iPhone bundle ID{" "}
              <Code>com.ironbuddy.nutrition</Code>)
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
            <li>
              Everything you enter (meals, weight, body details, your goal) is stored on your phone. Copies exist only as
              section 9 describes; on iPhone that includes the App&apos;s own copy in your private iCloud.
            </li>
            <li>
              There is no account and no IronBuddy server, and the App has no IronBuddy cloud sync. We never receive
              your data.
            </li>
            <li>
              Photos of your plate, of barcodes and of nutrition labels are read on your phone and are never sent to
              us. The only exception is one you choose on Android: if you tap &quot;Read with Google Lens&quot;, that
              one label photo is handed to Google&apos;s app (section 4). The iPhone app has no Google Lens button.
            </li>
            <li>
              A small copy of a plate photo you log from Shot is kept on your phone with that meal (and with it in My
              meals if you save it). It is never uploaded by the App, never added to your gallery or Photos, and not in
              the backup file or the App&apos;s iCloud copy. It is deleted when you delete the last logged meal or saved
              meal that uses it.
              On Android the phone&apos;s camera also leaves each full-size photo in the App&apos;s own storage (section 4).
            </li>
            <li>
              &quot;Say the numbers&quot; and &quot;Say it&quot; use the microphone only when you tap them, with the
              phone&apos;s own on-device speech recognition (Android&apos;s, or Apple&apos;s on iPhone). The audio and the
              words stay on your phone (section 4).
            </li>
            <li>The App has no ads, no analytics and no crash-reporting service. We do not sell or share data.</li>
            <li>
              The social media rows in Settings open a page on workout.ironbuddy.fit that counts the tap with
              GoatCounter, then forwards you (section 16).
            </li>
            <li>
              The food database, the barcode list and the food recognition model are built into the App, so looking
              food up never goes online.
            </li>
            <li>
              A dietitian&apos;s plan you bring in by scan, photo or file is read on your phone. The App keeps only the
              foods you add with &quot;Add the week&quot;, as planned meals. It does not save the photo, the file or the
              text it read. On
              Android, pages scanned with Google&apos;s page scanner are image files that Google&apos;s scanner writes,
              and section 5 says what we know about them and what we do not. On iPhone, Apple&apos;s document camera is
              used, and the App deletes the scanned pages as soon as it has loaded them.
            </li>
            <li>
              The App&apos;s own screens connect to nothing outside the App. On Android, Google Play handles the
              one-time purchase, the occasional review prompt and update notices (sections 6 and 7), Google&apos;s own
              app handles anything you choose to open in Google Lens (section 4), and the first time you scan a plan,
              Google Play services fetches Google&apos;s page scanner once, which needs the internet that one time
              (section 5). On iPhone, the App Store handles the purchase, the free trial item and the occasional rating
              prompt, and Apple&apos;s iCloud keeps the App&apos;s copy of your data in your own iCloud account (sections
              6, 7 and 9).
            </li>
            <li>
              A weekly weigh-in reminder is off until you switch it on. It is a notification made on your phone
              (section 11).
            </li>
            <li>
              Copies of your data exist outside the App only where you or your phone put them: on Android,
              Android&apos;s own backup to your Google account; on iPhone, the App&apos;s copy in your own iCloud and your
              iPhone&apos;s iCloud Backup, if it is on; and a backup file and exports you choose to make (full version;
              on iPhone anyone can also export a copy just before deleting their data) (section 9).
            </li>
          </BulletList>
        </ContentSection>

        <ContentSection id="applies-to" title="2. Who we are and what this covers">
          <p>
            The App is made by <Strong>{siteConfig.developerName}</Strong>, the developer named on its Google Play
            and App Store listings (“we”, “us”). You can reach us at <TextLink href={`mailto:${email}`}>{email}</TextLink>.
          </p>
          <p>
            This policy covers the IronBuddy: Nutrition Tracker app for Android distributed on Google Play and the
            IronBuddy: Nutrition Tracker app for iPhone distributed on the Apple App Store, including their testing
            versions. A testing version may also have a &quot;Test recorder&quot; in Settings: it keeps each photo taken
            in Shot and Scan on the phone, with what the App read and what you logged, until you delete it in the Test
            recorder (&quot;Clear exported tests&quot; or &quot;Delete all&quot;); its Export sends a copy through the share
            sheet and does not remove them. Only versions built for testing include it. It does not cover Google Play, Google Play services and Google&apos;s page scanner, Android&apos;s
            backup service, Google Lens and the Google app, the App Store, iCloud and iCloud Backup, iOS and its
            speech recognition and document camera, or the apps and services you choose to send files to (for example
            email, Google Drive, iCloud Drive or messaging apps). Our other app,
            IronBuddy: Workout Tracker, has <TextLink href={`${siteConfig.brandUrl}/privacy/`}>its own policy</TextLink>.
          </p>
        </ContentSection>

        <ContentSection id="data-on-device" title="3. Data stored on your device">
          <p>The App keeps the following in its private storage on your phone, and uses it only to work for you:</p>
          <BulletList>
            <li>
              <Strong>Food log:</Strong> the meals you log (name, amount in grams or millilitres or a number of
              portions, calories, protein, carbs, fat, an estimate range, meal of the day, date and the time you logged
              it, and the barcode if it came from one), your saved meals, products you add by barcode, and foods you add
              yourself.
            </li>
            <li>
              <Strong>Health and body data:</Strong> the answers you give to set up your plan (goal, sex, age,
              height, weight, daily movement, training days, pace, and optionally a goal weight), your weigh-ins, and
              your weekly check-ins and the target changes you accept. If you switch on the weekly weigh-in reminder,
              the day and time you pick.
            </li>
            <li>
              <Strong>Your week plan:</Strong> the meals you plan for coming days, including those you add from a
              dietitian&apos;s plan. For each: the food&apos;s name, the amount in grams, calories, protein, carbs, fat,
              the meal of the day, the date, and whether you have logged it. The plan is part of your data, so it is in
              your phone&apos;s backup (Android&apos;s backup, or on iPhone iCloud Backup and the App&apos;s iCloud copy),
              in the backup file and in a copy you export (section 9). What a plan shows about
              how you eat can say something about your health.
            </li>
            <li>
              <Strong>Personal details you choose to enter:</Strong> an optional first name, shown on Today, on share
              cards and in the export for a coach.
            </li>
            <li>
              <Strong>Settings:</Strong> units, theme, accent colour, tips, the layout of your Today cards and how the
              calories card shows protein, carbs and fat; and the App&apos;s own records (which tips and tours you have
              seen, when it last asked for a rating, an update notice you dismissed).
            </li>
            <li>
              <Strong>Trial and purchase status:</Strong> when your free trial started, the latest time the App has
              seen (so that moving the phone&apos;s date back does not extend the trial), whether you have bought the
              full version, and the identifier that confirms it: the purchase token Google Play provides on Android,
              or the transaction identifier the App Store provides on iPhone. On iPhone the trial start is the date
              the App Store records for the free &quot;7-day Trial&quot; item, or an earlier start the App already had
              (section 6).
            </li>
          </BulletList>
          <p>
            We do not receive any of this. It stays on your phone unless you, or your phone&apos;s backup, copy it
            somewhere, or, on iPhone, the App keeps its copy in your own iCloud (section 9).
          </p>
        </ContentSection>

        <ContentSection id="camera" title="4. Camera and photos">
          <p>
            The App uses the camera only when you tap to take a photo of your plate, of a barcode or of a nutrition
            label. Taking a photo of a dietitian&apos;s plan opens a page scanner instead: Google&apos;s on Android,
            Apple&apos;s document camera on iPhone (section 5). For a dietitian&apos;s plan, &quot;Import a file&quot;
            can also take an existing picture through the phone&apos;s own picker, and the App receives only the file you
            choose. On iPhone, iOS asks once for permission to use the camera; the App has no permission to read your
            Photos library.
          </p>
          <BulletList>
            <li>
              The picture is read on your phone: to suggest which foods are on the plate, to read the barcode digits
              (on Android with the Android System WebView&apos;s built-in barcode reader, on iPhone with Apple&apos;s Vision
              framework), or to read the numbers on a nutrition label.
            </li>
            <li>
              It is shown on screen while you confirm the meal. Apart from the camera files on Android (below), the App
              does not keep a barcode or label photo; it never adds a meal photo to your gallery or Photos, and never
              sends one to us. If you use Google Lens on Android (below), the App keeps that one label photo as a
              temporary file in its private storage so Google&apos;s app can open it, and deletes it when it checks your
              clipboard after you come back; otherwise the next photo you hand to Lens replaces it.
            </li>
            <li>
              <Strong>Camera files on Android.</Strong> On Android, the phone&apos;s camera hands each photo (plate,
              barcode or label) to the App as a full-size image file in the App&apos;s own storage on the phone, and the
              App does not delete these files yet. They stay on your phone only: the App never uploads them, they are
              not in Android&apos;s backup, the backup file or any export, and they are removed when you uninstall the
              App.
            </li>
            <li>
              <Strong>Plate photos kept with a meal.</Strong> When you log a plate from Shot, the App keeps a small copy
              of the photo (at most 480 px on its longest side) with that meal, so you can see it on Today, in the
              meal&apos;s details and in My meals. The copy stays in the App&apos;s private storage on your phone: the App
              never uploads it or adds it to your gallery or Photos, it is not in the backup file or the App&apos;s iCloud
              copy, and it is deleted when you delete the last logged meal or saved meal that uses it. On Android it is not in
              Android&apos;s backup either. On iPhone, if iCloud Backup is on, iOS may include the App&apos;s private
              storage, with these copies, in your iPhone&apos;s own backup (section 9).
            </li>
            <li>The App does not use the camera in the background and does not record video.</li>
          </BulletList>
          <p>
            <Strong>Say the numbers (microphone).</Strong> In Shot&apos;s label and barcode screens and in Quick add you
            can tap &quot;Say the numbers&quot; and tell the App the calories and macros, and in Shot&apos;s &quot;What&apos;s
            on the plate?&quot; you can tap &quot;Say it&quot; to name the foods. It listens only after you tap, until you
            stop speaking, using the phone&apos;s own on-device speech recognition (English): Android&apos;s on-device
            recogniser (Android 12 and later), or on iPhone Apple&apos;s speech recognition set to work on the iPhone
            only. If your phone cannot recognise English on the device, the App says so and you type instead. On
            iPhone, iOS asks once for
            permission to use the microphone and speech recognition. The audio and the words stay on your phone;
            nothing is sent to us or collected, and the App does not record or keep the sound.
          </p>
          <p>
            <Strong>Google Lens (optional).</Strong> On Android, the nutrition-label form offers &quot;Read with Google
            Lens&quot; (in Shot, &quot;Google Lens&quot;) for labels the App&apos;s own reader cannot manage. Only if you
            tap it, the App hands the label photo (the one you just took, or a new one) to Google Lens in the Google app
            on your phone. If no share screen in the Google app opens, Android&apos;s share sheet opens instead and you
            choose the app. From
            that moment the photo is in Google&apos;s app, not ours: Google receives and processes it under its own terms
            and <GooglePolicyLink />, as part of your own use of Google&apos;s services. If you have turned on Visual
            Search History in your Google account, Google may keep the image there; see{" "}
            <TextLink href="https://support.google.com/websearch/answer/17028154">Google&apos;s help page</TextLink>.
          </p>
          <p>
            In Lens you select the label&apos;s text and tap Copy yourself. When you come back while the App is waiting
            for Lens, or when you tap &quot;I copied it: paste now&quot;, the App reads your clipboard and uses the text
            only if it was copied after you left for Lens (Android 7 cannot tell when text was copied, so there any
            copied text is used). It picks out the nutrition numbers on your phone, fills in the form for you to check,
            and does not keep the copied text. Android may show a short &quot;IronBuddy Nutrition pasted from your
            clipboard&quot; notice when this happens. The App does not read the clipboard at any other time, and it
            receives nothing else from Google: no account details
            and no search results other than the text you copied. IronBuddy itself still sends nothing to Google or to
            us. If you never tap that button, Google Lens is never involved and you can always type the numbers
            instead. The iPhone app has no Google Lens button, never hands a photo to Google&apos;s app and does not
            read the clipboard.
          </p>
          <p>
            On Android, to get back from Lens with one tap, the App can show a notification while Lens is open (&quot;Copied the
            table? Tap to go back&quot;). On Android 13 and later it asks for permission to show it the first time you
            open Lens from the App; you can say no and press Back instead. The notification is created on your phone,
            holds none of your data, and is removed when you return. The only other notification is the weekly weigh-in
            reminder, which you can switch on in Progress (section 11). You can also
            share text to the Android app yourself (for example with Share on Android&apos;s &quot;copied&quot; preview): the
            App picks out the nutrition numbers on your phone, fills in the form for you to check, and does not keep
            the text.
          </p>
          <p>
            <Strong>Search on Google.</Strong> If a food or a barcode is not in the app&apos;s offline list, the app can
            offer a Search on Google button. Only when you tap it, your phone&apos;s browser opens a Google search for
            the barcode number, or for the words you typed followed by the word &quot;calories&quot;.
            IronBuddy does not send, receive or store anything for
            this: the search is made by your browser, under Google&apos;s own privacy policy. It never happens by itself.
          </p>
        </ContentSection>

        <ContentSection id="recognition" title="5. Food recognition, label reading and plan reading on your phone">
          <p>
            Dish suggestions come from a food recognition model (SigLIP 2, an open model published by Google) that is
            built into the App and runs entirely on your phone, using ONNX Runtime, open-source software from Microsoft.
            Nutrition labels are read on your phone too, with PaddleOCR&apos;s open-source text models, also built into
            the App. On iPhone, barcodes are read on the phone with Apple&apos;s built-in Vision framework.
          </p>
          <p>
            No photo, result or usage information is sent to Google, Microsoft, Apple or anyone else, or to us: the App
            does not allow any connection from its interface except to its own built-in files. (On Android, Google
            Lens, section 4, and Google&apos;s page scanner, below, are Google&apos;s own.)
          </p>
          <p>
            <Strong>A dietitian&apos;s plan.</Strong> On Week, &quot;Have a plan from a dietitian?&quot; offers two ways
            in: Take a photo and Import a file. Import a file uses the phone&apos;s own file picker (Android&apos;s, or on
            iPhone iOS&apos;s, which can also offer a photo from your Photos), and it gives the App only the file you
            pick: a PDF, a Word file (.docx), a text file or a picture. Take a photo opens a page scanner: Google&apos;s on
            Android, Apple&apos;s document camera on iPhone (below). Either way the text is read on your phone: PDF and Word files with software built into the
            App (pdf.js, an open-source library from Mozilla, loaded the first time you open a PDF), and pictures,
            scanned pages and scanned PDFs with the same built-in text models that read nutrition labels. You then check
            the result: clear lines go in as read, and you answer only the lines in doubt before you tap &quot;Add the
            week&quot;.
          </p>
          <p>
            <Strong>What the App keeps and does not keep.</Strong> The App keeps only the foods you add, as planned
            meals (section 3). It reads the file or picture into its memory, takes the text out, and drops both when you
            close the check screen or add the lines. It does not save the file, the picture or the text it read, does not
            put them in the backup file, in Android&apos;s backup or in the App&apos;s iCloud copy, and keeps no wording or
            name from the plan. A short
            diagnostic log in the App&apos;s memory may hold lines of text read from a page until you close the App; it is
            not saved. The App sends nothing to us or to anyone else.
          </p>
          <p>
            <Strong>Google&apos;s page scanner.</Strong> On Android, Take a photo opens Google&apos;s document scanner,
            which is part of Google Play services on your phone (Google&apos;s ML Kit). It finds the page, straightens it
            and can take up to eight pages, and it also lets you pick a picture from your gallery inside Google&apos;s
            scanner. Google&apos;s scanner runs in Google Play services and opens the camera itself. Google says
            the whole scanner flow operates on the device. The first time, Google Play services fetches the scanner
            itself from Google, which needs an internet connection that one time; after that it needs none. The scanner
            writes the pages you scan as image files on your phone and hands them to the App. The App reads each into
            memory and does not keep it, and it does not delete those files. Google does not say where the files are
            stored or when they are deleted, so we cannot tell you; they may stay in your phone&apos;s storage for the App
            until Android clears them. We also have not been able to establish what Google Play services itself records
            about installing or using the scanner; see <GooglePolicyLink /> and{" "}
            <TextLink href="https://developers.google.com/ml-kit/android-data-disclosure">
              Google&apos;s ML Kit data disclosure
            </TextLink>
            . If your phone has no Google Play services, if Google reports that it has too little memory for the scanner
            (Google says it needs 1.7 GB), or if it has no internet the first time, the App says so and you can use
            Import a file instead.
          </p>
          <p>
            <Strong>Apple&apos;s document camera (iPhone).</Strong> On iPhone, Take a photo opens Apple&apos;s document
            camera, which is part of iOS (VisionKit). It finds the page, straightens it and can take several pages; the
            App uses the first eight. It uses the camera under the App&apos;s camera permission. The App downloads nothing
            for it and sends nothing anywhere. The App saves the pages as image files in its temporary folder, loads
            them into memory, deletes the files, and reads the pages on the phone with its built-in text models.
          </p>
          <p>
            <Strong>Other people&apos;s details and health information.</Strong> A dietitian&apos;s plan can carry details
            you did not enter: a dietitian&apos;s or clinic&apos;s name, your name or someone else&apos;s, a diagnosis,
            test results or the dietitian&apos;s notes. The App shows the text it read on your screen so that you can check
            it, and keeps none of it. The original photo or file stays where you took it or stored it (for example your
            gallery or Photos, your Downloads folder, the Files app or an email), and this policy does not cover those
            places; pages from the page scanners are described above. Bring in only plans
            that are yours or that you have permission to use.
          </p>
        </ContentSection>

        <ContentSection id="purchases" title="6. Purchases and payment">
          <p>
            The App is free to download with a free trial (currently {siteConfig.freeTrialDays} days) that covers
            logging, photos, search, barcodes, My meals and your numbers. Some parts are the full version only, even
            during the trial: meal planning (Week, planned meals on Today and a dietitian&apos;s plan by scan or file),
            the backup file, export and import, the export for a coach, share cards, choosing your Today layout, how
            Today shows protein, carbs and fat, and the accent colour (on
            iPhone, anyone can export a copy just before deleting their data). After the
            trial, a one-time purchase through Google Play (Android) or the App Store (iPhone) keeps it unlocked; there
            is no subscription and nothing is charged automatically. Without the purchase your data stays visible but
            logging and editing are locked.
          </p>
          <p>
            <Strong>On Android</Strong>, the purchase is made and processed entirely by Google Play. The App receives
            only confirmation that it exists (the product identifier and a purchase token) and keeps it on your phone,
            so it can unlock the full version and check it again when you open the App or reinstall it. The App never
            receives your payment card, billing address or other payment details. See <GooglePolicyLink />.
          </p>
          <p>
            <Strong>On iPhone</Strong>, purchases are made and processed entirely by the Apple App Store. The free
            trial is a free in-app item (&quot;7-day Trial&quot;) that the App Store records on your Apple ID; the App
            reads the date you obtained it to know when your trial started, so reinstalling the App or using another
            iPhone does not restart the trial. The one-time unlock is a separate in-app purchase. The App receives
            from the App Store only confirmation that these items belong to your Apple ID (the product identifier, a
            transaction identifier and the date), checked on the phone by Apple&apos;s StoreKit when you open the App
            and when you tap Restore purchase; there is no IronBuddy server in between. The App never receives your
            payment card, billing address, Apple ID password or other payment details. See <ApplePolicyLink />.
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
          <p>
            <Strong>On iPhone</Strong>, now and then, after you have used the App for a while, it may ask iOS to show
            Apple&apos;s built-in rating prompt. iOS decides whether it appears (Apple says at most three times a
            year), and Apple lets you turn such prompts off in the iPhone&apos;s Settings; we do not learn whether you
            saw it, what you rated or what you wrote. The iPhone app does not check for updates itself: the App Store
            installs them.
          </p>
        </ContentSection>

        <ContentSection id="not-collected" title="8. Data we do not collect">
          <p>As of the date at the top of this page, the App does not:</p>
          <BulletList>
            <li>create accounts or ask you to sign in;</li>
            <li>
              send your meals, body data, plans, photos or settings to any server of ours or of anyone else, except the
              App&apos;s copy in your own iCloud on iPhone (section 9) and a label photo you choose to hand to Google Lens
              on Android (section 4);
            </li>
            <li>
              contain advertising, analytics or crash-reporting code (the Android app does include Google&apos;s client
              libraries for Google Play Billing, the in-app review, in-app updates and the page scanner, sections 5 to 7);
            </li>
            <li>sell, rent or share personal data, or track you across other companies&apos; apps and websites;</li>
            <li>
              access your location, contacts or other apps&apos; data, read your gallery or Photos library, read any
              file except one you pick in the phone&apos;s own picker, the pages the page scanner hands back (section 5)
              or the photo the camera hands back (section 4), or use the microphone except when you
              tap &quot;Say the numbers&quot; or &quot;Say it&quot; (section 4), apart from two things for Google Lens on Android:
              checking whether Google&apos;s app is installed, and reading the text you copied in Lens only while it is
              waiting for Lens (when you come back, or when you tap &quot;I copied it: paste now&quot;), or text you choose
              to share to the App (section 4);
            </li>
            <li>receive your payment details (these stay with Google Play or the App Store).</li>
          </BulletList>
        </ContentSection>

        <ContentSection id="backups" title="9. Backups, exports and sharing">
          <p>Copies of your data can exist outside the App&apos;s private storage only in these ways:</p>
          <BulletList>
            <li>
              <Strong>Android backup (Google account):</Strong> if backup is turned on in your phone&apos;s settings,
              Android may keep a backup of the App&apos;s data (the App&apos;s saved data, not plate photos) in your Google
              account, as Google describes, and restore it on a new phone. Android can also copy the same data straight
              to a new phone during phone-to-phone transfer. Android&apos;s documentation says this backup is end-to-end encrypted on Android 9
              and later when the phone has a screen lock. This is done entirely by Android and Google; we cannot access these backups. You can turn
              it off or delete it in your phone&apos;s Google backup settings.
            </li>
            <li>
              <Strong>iCloud copy (iPhone only):</Strong> on iPhone, the App keeps one up-to-date copy of your data in
              your own iCloud account, using Apple&apos;s CloudKit. A few seconds after you change something, it replaces
              that copy with your current data: the same data as the backup file (below), plus the date your free trial
              started, the latest time the App has seen, the App&apos;s version number and when the copy was saved. Plate
              photos are not in it. The copy sits in the private
              area of your iCloud that only you can open with your Apple ID; it is stored and managed by Apple, and
              IronBuddy has no servers and cannot read it. It runs in the trial too, and it needs you to be signed in to
              iCloud; if you are not, the App does not make one. Deleting the App does not delete the copy: if you
              reinstall the App, or open it on a new iPhone signed in to the same Apple ID, the App offers to bring your
              data back or to start fresh. Because the copy carries the trial dates, restoring it does not restart your
              trial. &quot;Delete my profile and all data&quot; deletes the copy (section 12).
            </li>
            <li>
              <Strong>iCloud Backup (iPhone):</Strong> if iCloud Backup is turned on in your iPhone&apos;s settings, iOS
              includes the App&apos;s data in your iPhone&apos;s backup in your iCloud account and can restore it on a new
              iPhone, as Apple describes. This backup is made and managed entirely by Apple; we cannot access it. You can turn it off or
              manage it in your iPhone&apos;s settings.
            </li>
            <li>
              <Strong>Backup file (full version):</Strong> the App keeps one up-to-date copy of your data in a file
              named <Code>ironbuddy-nutrition-backup.json</Code>, replacing it each time your data changes. It includes
              your week plan; plate photos are not in it. On Android it is at{" "}
              <Code>Download/IronBuddy Nutrition/ironbuddy-nutrition-backup.json</Code>, where you and apps you allow to
              read your files can open it. On iPhone it is in the Files app (On My iPhone → IronBuddy Nutrition), or in a
              folder you choose once with iOS&apos;s folder picker, for example in iCloud Drive, where Apple stores it in
              your own iCloud; the App can reach only the folder you chose. You can turn the file off in Settings.
            </li>
            <li>
              <Strong>Export a copy (full version):</Strong> a JSON file of your data, including your week plan, sent
              wherever you choose through the phone&apos;s share sheet. On iPhone, &quot;Export a copy first&quot; on the
              delete screen (section 12) is there for everyone.
            </li>
            <li>
              <Strong>Export for a coach (full version):</Strong> a spreadsheet (CSV) or PDF of your meals and weight
              for the last 7, 30 or 90 days, with your name and your calorie target, and in the PDF also your goal and
              macro targets, sent through the phone&apos;s share sheet wherever you choose.
            </li>
            <li>
              <Strong>Share cards (full version):</Strong> a picture of your day or week (your meals, and your first name
              if you entered one), made on your phone. Calories
              are hidden on the card unless you switch them on. You choose to share it through the phone&apos;s share
              sheet or save it: to your gallery (Pictures → IronBuddy Nutrition) on Android, or to your Photos on
              iPhone, where iOS asks once for permission to add pictures; the App can only add to Photos and never
              reads them.
            </li>
            <li>
              <Strong>Import (full version):</Strong> you can load a backup file back into the App. The App keeps one
              copy of your data from just before an import, so you can undo it.
            </li>
          </BulletList>
          <p>
            Everything in this list except Android backup, the iCloud copy, iCloud Backup and the backup file (which
            you can turn off) happens only when you choose it. Once a file is saved or shared, where it goes is outside
            our control and covered by that destination&apos;s own policy. Uninstalling the App does not delete files
            already in your Download folder, backups in your Google account, the iCloud copy, an iPhone backup in
            iCloud, or a backup file in a folder you chose such as iCloud Drive. On iPhone, deleting the App does
            delete its On My iPhone → IronBuddy Nutrition folder.
          </p>
        </ContentSection>

        <ContentSection id="transmission" title="10. What leaves your phone">
          <p>
            The App sends nothing you enter to us or to any server we run. On Android, Android&apos;s own backup
            (section 9) is made by Android, not by the App. The food database (from USDA, CIQUAL and Open Food
            Facts), the barcode list and the food recognition model are copies built into the App, so every lookup in
            the App happens on your phone; Search on Google, if you tap it, opens a Google search in your browser
            (section 4). On Android, the App itself uses the network only through Google Play
            (purchase, review prompt, update check), through links you choose to open in your browser, such as this
            policy, Search on Google and Follow IronBuddy, and, the first time you
            scan a plan, through Google Play services, which fetches Google&apos;s page scanner once (section 5). Google
            Lens, if you choose to open it (section 4), is Google&apos;s app, not ours. Logging, the food list, barcodes,
            food recognition and reading labels and plans work without an internet connection. Buying the full version,
            Google Lens and the first use of the page scanner need one.
          </p>
          <p>
            <Strong>On iPhone</Strong>, the App sends nothing you enter to us or to any server we run. Apple&apos;s own
            services make the network connections: StoreKit with the App Store, for the purchase, the free trial item
            and the App Store&apos;s own rating prompt, and CloudKit with your iCloud account, for the App&apos;s iCloud
            copy (section 9). iCloud Backup is made by iOS, not by the App. The page scanner, speech recognition and
            barcode reading are part of iOS and work on the phone, and the App downloads nothing for them. Links you
            choose to open (such as this policy, Search on Google, Sources and Follow IronBuddy) open outside the App, in
            your browser, a social app or the App Store. Starting the free trial, buying the full version and keeping
            the iCloud copy up to date need an internet connection; logging, the food list, barcodes, food recognition
            and reading labels and plans work offline.
          </p>
        </ContentSection>

        <ContentSection id="permissions" title="11. Permissions">
          <p>
            <Strong>On Android:</Strong>
          </p>
          <BulletList>
            <li>
              <Strong>Camera:</Strong> only when you tap to photograph a plate, a barcode or a nutrition label (section
              4). Google&apos;s page scanner, which you open to scan a plan, runs in Google Play services and opens the
              camera itself (section 5).
            </li>
            <li>
              <Strong>Files (no permission asked):</Strong> when you tap Import a file on Week, Android&apos;s own file
              picker opens and gives the App only the file you choose (section 5).
            </li>
            <li>
              <Strong>Microphone:</Strong> only after you tap &quot;Say the numbers&quot; or &quot;Say it&quot;, to recognise
              what you say, on your phone with Android&apos;s own on-device speech recogniser (section 4).
            </li>
            <li>
              <Strong>Internet:</Strong> declared by the App. The App&apos;s own screens are blocked from contacting any
              server (section 10); Google Play, Google Play services and your browser make their own connections. It is
              not used to upload your data.
            </li>
            <li>
              <Strong>Google Play Billing:</Strong> to make and confirm the one-time purchase.
            </li>
            <li>
              <Strong>Storage (Android 12 and older):</Strong> declared so the App can keep the backup file in Download →
              IronBuddy Nutrition on older phones; the App reads files only through the phone&apos;s own picker. If an
              earlier install left a backup file there, the App asks you to choose the IronBuddy Nutrition folder
              inside Download once, in Android&apos;s folder picker; the App then reaches only that folder.
            </li>
            <li>
              <Strong>Google app visibility and clipboard (no permission needed):</Strong> the App can see whether
              Google&apos;s app is installed, only to offer Google Lens, and it reads the clipboard only while it is
              waiting for Lens: when you come back, or when you tap &quot;I copied it: paste now&quot;. It also takes text
              you choose to share to the App (section 4). It looks up no other app; Android lets it see only
              Google&apos;s app, camera apps, apps that accept a shared picture and Google Play&apos;s billing service, so
              that taking a photo, handing a photo to Lens and the purchase work.
            </li>
            <li>
              <Strong>Notifications (Android 13 and later, optional):</Strong> two, both made on your phone and neither
              holding your data: the &quot;Copied the table? Tap to go back&quot; notification while Google Lens is open
              (section 4), and,
              only if you switch it on in Progress, the weekly weigh-in reminder on the day and time you pick. No offers
              or other notifications. You can turn the reminder off in Progress and either notification off at any time
              in Android&apos;s settings for the App.
            </li>
          </BulletList>
          <p>
            <Strong>On iPhone</Strong>, iOS asks for these only when you first use the feature, and you can change each
            in the iPhone&apos;s Settings → IronBuddy Nutrition:
          </p>
          <BulletList>
            <li>
              <Strong>Camera:</Strong> to photograph a plate, a barcode, a nutrition label or a dietitian&apos;s plan
              (sections 4 and 5).
            </li>
            <li>
              <Strong>Microphone and Speech Recognition:</Strong> only after you tap &quot;Say the numbers&quot; or &quot;Say
              it&quot;, recognised
              on the iPhone itself (section 4).
            </li>
            <li>
              <Strong>Photos (add only):</Strong> only if you save a share card to Photos. The App can add pictures and
              cannot read your Photos library (section 9).
            </li>
            <li>
              <Strong>Notifications (optional):</Strong> only if you switch on the weekly weigh-in reminder in Progress.
              It is a notification made on your iPhone and holds none of your data. There are no other notifications.
            </li>
            <li>
              <Strong>Files and folders (no permission asked):</Strong> the App reaches a file only through iOS&apos;s
              own pickers, when you import a backup or a plan, or choose a folder for the backup file.
            </li>
          </BulletList>
          <p>
            The iPhone app does not ask for your location, contacts or Photos library, does not track you, and has no
            Google Play Billing or Google Lens, and does not read the clipboard. In-app purchases go through Apple&apos;s
            StoreKit.
          </p>
        </ContentSection>

        <ContentSection id="deleting-data" title="12. How to delete your data">
          <BulletList>
            <li>
              <Strong>In the App (Android):</Strong> Settings → Data → Reset all data erases your profile, meals, saved
              meals, plate photos, weigh-ins, plans and settings on your phone. It keeps your trial dates and purchase,
              and the copy from just before your last import (used by Undo last import); the backup file in Download →
              IronBuddy Nutrition is replaced with your new data once you finish setting up again. Once the free trial
              has ended without a purchase, Reset all data is not shown; uninstalling the App then removes its data
              from the phone.
            </li>
            <li>
              <Strong>In the App (iPhone):</Strong> Settings → Your data → Delete my profile and all data shows what will
              go, offers to export a copy first, and then deletes your profile (name, body details, goal and targets),
              every meal, weekly check-in and weigh-in, your saved meals, own foods and products, week plans and plate
              photos, all settings and the weigh-in reminder, every file the App saved in On My iPhone → IronBuddy
              Nutrition (the backup file included), the backup file in a folder you chose, and the App&apos;s iCloud copy.
              If iCloud cannot be reached at that moment, the iCloud copy is deleted the next time it can be, and it is
              never offered back. Your purchase is not deleted, because it belongs to your Apple ID, and the free trial
              does not restart.
            </li>
            <li>
              <Strong>Plate photos:</Strong> deleting a meal deletes its photo copy too, unless a saved meal in My meals
              still uses it; the photo goes once neither does.
            </li>
            <li>
              <Strong>Camera files on Android:</Strong> the full-size files the camera leaves in the App&apos;s storage
              (section 4) are not removed by deleting a meal or by Reset all data; uninstalling the App removes them.
            </li>
            <li>
              <Strong>Scanned plan pages:</Strong> on Android, Google&apos;s page scanner writes the pages you scan as
              image files on your phone. The App does not delete them, and Google does not say where they are stored or
              when they are deleted (section 5). On iPhone, the App deletes the scanned pages once it has read them.
            </li>
            <li>
              <Strong>Your week plan:</Strong> remove planned meals on Week, or use Reset all data (Android, see above for
              what it keeps) or Delete my profile and all data (iPhone). Copies in your
              phone&apos;s backup, in the backup file and in exports are covered below.
            </li>
            <li>
              <Strong>Uninstall:</Strong> removes the App and its private storage. On iPhone it also removes the On My
              iPhone → IronBuddy Nutrition folder, but not the App&apos;s iCloud copy.
            </li>
            <li>
              <Strong>Files you made:</Strong> the backup file in your Download folder (Android), a backup
              file in a folder you chose such as iCloud Drive (iPhone), share cards saved to your gallery or Photos, and
              anything you shared, are not removed by uninstalling or by Reset all data; delete them yourself if you no
              longer want them.
            </li>
            <li>
              <Strong>Android backup:</Strong> delete it in your phone&apos;s settings (Google → Backup) or in your
              Google account.
            </li>
            <li>
              <Strong>iCloud (iPhone):</Strong> Delete my profile and all data removes the App&apos;s iCloud copy; you can
              also remove it in your iPhone&apos;s iCloud storage settings. An iCloud Backup of your iPhone is managed in
              Settings → your name → iCloud.
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
            and from your own logs, and photo-based meals are estimates. A dietitian&apos;s plan you bring in is read as
            text and turned into estimates from the App&apos;s own food list; the App does not check whether a plan or its
            numbers suit you, so follow your dietitian or doctor if they differ from the App. If you are pregnant or breastfeeding, have
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
            phone (and, on iPhone, in your own iCloud), you can do this yourself: view and edit everything in the App,
            export a copy (full version; on iPhone also just before you delete everything), and delete your data (on
            Android, Settings → Data → Reset all data, or uninstall the App, which is the only way once the trial has
            ended without a purchase; on iPhone, Delete my profile and all data). If you have a question or a request,
            email us at{" "}
            <TextLink href={`mailto:${email}`}>{email}</TextLink>. You also have the right to complain to the data
            protection authority in your country.
          </p>
        </ContentSection>

        <ContentSection id="third-party" title="16. Third-party services and this website">
          <p>
            On Android, Google Play (purchases, review prompts, update notices), Google Play services and its page scanner
            (section 5), Android&apos;s backup, and Google Lens in the Google app (only if you choose it, section 4) are
            run by Google under its own terms; see <GooglePolicyLink /> and{" "}
            <TextLink href="https://developers.google.com/ml-kit/android-data-disclosure">
              Google&apos;s ML Kit data disclosure
            </TextLink>
            . The App reaches the page scanner through an open-source bridge (Capawesome&apos;s Capacitor plugin,
            Apache-2.0) that has no network code of its own. On iPhone, the App Store (purchases, the free trial item and
            rating prompts), iCloud and CloudKit (the App&apos;s iCloud copy), iCloud Backup and iCloud Drive, and iOS&apos;s
            speech recognition, document camera and Vision framework are run by Apple under its own terms; see{" "}
            <ApplePolicyLink />. Apps you share files to are covered by their own policies. Google Lens is a trademark
            of Google LLC, and iPhone, iCloud and App Store are trademarks of Apple Inc.; IronBuddy is not made, endorsed
            or sponsored by Google or Apple.
          </p>
          <p>
            <Strong>Links to our social media pages:</Strong> Settings → About has a row, Follow IronBuddy, that opens
            a list of Instagram, TikTok, YouTube and Facebook. A tap on one of them opens a page on our Workout website,
            workout.ironbuddy.fit (for example /from-nutrition-ig), in your phone&apos;s browser. That page uses
            GoatCounter to count the visit as one event named after the network you tapped, then forwards you to our
            page on that network. GoatCounter counts the page, the referrer and general details such as browser,
            operating system, screen width and country; it uses no cookies and does not store IP addresses (see{" "}
            <TextLink href="https://www.goatcounter.com/help/privacy">GoatCounter&apos;s privacy policy</TextLink>). It
            does not record your name, an account or anything you logged, and the App itself sends nothing. Nothing is
            counted until you tap a network. After the forward, that network&apos;s own privacy policy applies. We
            count taps, not follows.
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
