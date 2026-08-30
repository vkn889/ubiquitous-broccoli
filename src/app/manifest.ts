import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} | ${siteConfig.titleRoles}`,
    short_name: siteConfig.name,
    description: siteConfig.metaDescription,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#eaf5fc",
    theme_color: "#0284c7",
    lang: "en-US",
    dir: "ltr",
    categories: ["portfolio", "technology", "science", "education"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
      { src: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
  };
}
