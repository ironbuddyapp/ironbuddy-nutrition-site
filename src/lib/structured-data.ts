import type { Faq } from "@/lib/content";
import { appScreenshots as screenshots } from "@/lib/content";
import type { PageDef } from "@/lib/pages";
import { absoluteUrl, fullTitle, ogImage } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export type JsonLdNode = Record<string, unknown>;
export type Crumb = { name: string; path: string };

const ids = {
  organization: absoluteUrl("/#organization"),
  website: absoluteUrl("/#website"),
  app: absoluteUrl("/#app"),
  logo: absoluteUrl("/#logo"),
};

const pageId = (page: PageDef, fragment = "webpage") => `${absoluteUrl(page.path)}#${fragment}`;

/** Breadcrumb trail from a list of pages, e.g. trail(pages.home, pages.support). */
export function trail(...items: PageDef[]): Crumb[] {
  return items.map((item) => ({ name: item.label, path: item.path }));
}

function organizationNode(): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": ids.organization,
    name: siteConfig.name,
    url: absoluteUrl("/"),
    logo: {
      "@type": "ImageObject",
      "@id": ids.logo,
      url: absoluteUrl("/icon.png"),
      width: 256,
      height: 256,
      caption: `${siteConfig.name} logo`,
    },
    email: siteConfig.contactEmail,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.contactEmail,
        availableLanguage: "English",
      },
    ],
    sameAs: [
      siteConfig.githubUrl,
      siteConfig.instagramUrl,
      siteConfig.tiktokUrl,
      siteConfig.youtubeUrl,
      ...(siteConfig.playListingLive ? [siteConfig.playDeveloperUrl] : []),
    ],
  };
}

function websiteNode(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": ids.website,
    url: absoluteUrl("/"),
    name: siteConfig.fullName,
    // Google reads these when choosing the site name shown in results. Other products share the name
    // "IronBuddy", so the full name leads and the short one is the alternate. "Iron Buddy" is how most
    // people type it into Search (Search Console, September 2026).
    alternateName: [siteConfig.name, "Iron Buddy", "ironbuddy.fit"],
    description: siteConfig.description,
    inLanguage: "en-US",
    publisher: { "@id": ids.organization },
  };
}

/** Every entry maps to something the app or its privacy policy states. Do not add features that are not shipped. */
export const appFeatureList = [
  "Photo food logging: the dish is recognised on the phone, offline, from about 2,000 dishes",
  "Barcode scanner with about a million packaged products bundled in the app",
  "Food search of about 12,000 foods and dishes (USDA, FNDDS, CIQUAL), Greek names included",
  "Exact or Estimate on every number, with a range for estimates",
  "Daily calorie target and protein, carbs and fat for your goal, including lose fat and build muscle",
  "Weekly check-in: real maintenance from your logs and weight, with a suggested new target",
  "What can I still eat: saved meals that fit what is left today",
  "Pots and meal prep: weigh the pot once, every plate is exact",
  "Body weight trend",
  "Share cards and a CSV or PDF export for a coach (full version)",
  "Customizable Today: cards you move, resize, add and remove (full version)",
  "No account, no ads, no analytics and no subscription",
];

function appNode(): JsonLdNode {
  return {
    "@type": ["MobileApplication", "SoftwareApplication"],
    "@id": ids.app,
    name: siteConfig.fullName,
    alternateName: ["IronBuddy Nutrition", "Iron Buddy Nutrition"],
    description: siteConfig.description,
    url: absoluteUrl("/"),
    applicationCategory: "HealthApplication",
    applicationSubCategory: "Calorie counter and nutrition tracker",
    operatingSystem: "Android",
    inLanguage: "en-US",
    image: ogImage.url,
    screenshot: screenshots.map((shot) => ({
      "@type": "ImageObject",
      contentUrl: absoluteUrl(`/screenshots/${shot.file}`),
      encodingFormat: "image/webp",
      width: shot.width,
      height: shot.height,
      caption: shot.alt,
    })),
    featureList: appFeatureList,
    // Only point at the Play listing once it is public; before that it returns "not found".
    ...(siteConfig.playListingLive
      ? {
          downloadUrl: siteConfig.playStoreUrl,
          installUrl: siteConfig.playStoreUrl,
          sameAs: [siteConfig.playStoreUrl],
        }
      : {}),
    // The download is free, but after the trial a one-time purchase is required to keep logging and editing. No
    // `price`: Google Play sets it per country and the site never states one (and never "0", which would say free).
    // Add an aggregateRating only when it is genuine and shown on the page.
    offers: {
      "@type": "Offer",
      category: "Free trial, then one-time purchase",
      description: `Free to download with a ${siteConfig.freeTrialDays}-day free trial of everything. After the trial, a one-time in-app purchase through Google Play keeps everything unlocked and is required to keep logging and editing; Google Play shows the price for each country. It also adds the backup file, export and import, share cards, the export for a coach and a customizable Today. No subscription.`,
    },
    author: { "@id": ids.organization },
    publisher: { "@id": ids.organization },
  };
}

function breadcrumbNode(page: PageDef, crumbs: Crumb[]): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    "@id": pageId(page, "breadcrumb"),
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

function questions(items: Faq[]) {
  return items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  }));
}

type PageOptions = {
  /** Schema.org type for the page node. Defaults to WebPage. */
  type?: string;
  /** Extra properties merged into the page node (for example mainEntity). */
  extra?: JsonLdNode;
  about?: "app" | "organization";
  trail?: Crumb[];
  /** A FAQ section that is visible on this page. Each question should appear in markup on one page only. */
  faqs?: Faq[];
  article?: boolean;
};

function pageNode(page: PageDef, options: PageOptions): JsonLdNode {
  return {
    "@type": options.type ?? "WebPage",
    "@id": pageId(page),
    url: absoluteUrl(page.path),
    name: fullTitle(page),
    description: page.description,
    inLanguage: "en-US",
    isPartOf: { "@id": ids.website },
    datePublished: page.published,
    dateModified: page.modified,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: ogImage.url,
      width: ogImage.width,
      height: ogImage.height,
    },
    ...(options.about
      ? { about: { "@id": options.about === "app" ? ids.app : ids.organization } }
      : {}),
    ...(options.trail ? { breadcrumb: { "@id": pageId(page, "breadcrumb") } } : {}),
    ...options.extra,
  };
}

export function graph(nodes: JsonLdNode[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}

/** JSON-LD graph for the home page: Organization, WebSite, WebPage and the MobileApplication. */
export function homeGraph(page: PageDef) {
  return graph([
    organizationNode(),
    websiteNode(),
    pageNode(page, { about: "app" }),
    appNode(),
  ]);
}

/** JSON-LD graph for any inner page. */
export function pageGraph(page: PageDef, options: PageOptions & { trail: Crumb[] }) {
  const nodes: JsonLdNode[] = [
    organizationNode(),
    websiteNode(),
    pageNode(page, options),
    breadcrumbNode(page, options.trail),
  ];

  if (options.faqs?.length) {
    nodes.push({
      "@type": "FAQPage",
      "@id": pageId(page, "faq"),
      isPartOf: { "@id": pageId(page) },
      mainEntity: questions(options.faqs),
    });
  }



  if (options.article) {
    nodes.push({
      "@type": "Article",
      "@id": pageId(page, "article"),
      headline: page.title,
      description: page.description,
      image: [ogImage.url],
      datePublished: page.published,
      dateModified: page.modified,
      inLanguage: "en-US",
      author: { "@id": ids.organization },
      publisher: { "@id": ids.organization },
      mainEntityOfPage: { "@id": pageId(page) },
    });
  }

  return graph(nodes);
}

/** The FAQ page is itself the FAQPage, so its questions live on the page node. */
export function faqPageGraph(page: PageDef, crumbs: Crumb[], items: Faq[]) {
  return pageGraph(page, {
    type: "FAQPage",
    trail: crumbs,
    extra: { mainEntity: questions(items) },
  });
}
