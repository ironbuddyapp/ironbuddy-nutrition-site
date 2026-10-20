import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: siteConfig.fullName,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#14110d",
    theme_color: "#14110d",
    lang: "en",
    categories: ["health", "food", "fitness"],
    icons: [
      {
        // Declared at its real size. It was previously listed as 512x512 while the file is 256x256.
        src: "/icon.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
