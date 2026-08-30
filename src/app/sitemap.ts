import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ["", "/about", "/projects"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
