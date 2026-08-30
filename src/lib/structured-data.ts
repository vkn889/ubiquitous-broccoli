/**
 * schema.org JSON-LD builders. Everything is linked by @id so a page can emit
 * one @graph and crawlers dedupe the Person / WebSite nodes.
 */

import { siteConfig } from "@/data/site-config";
import { projects } from "@/data/projects";

type Node = Record<string, unknown>;

const PERSON_ID = `${siteConfig.url}/#person`;
const SITE_ID = `${siteConfig.url}/#website`;
const OG = `${siteConfig.url}${siteConfig.ogImage}`;

/** Wrap nodes in a single linked graph. */
export function graph(...nodes: Node[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}

export function personSchema(): Node {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: siteConfig.name,
    alternateName: siteConfig.initials,
    url: siteConfig.url,
    image: OG,
    jobTitle: siteConfig.titleRoles,
    description: siteConfig.metaDescription,
    email: `mailto:${siteConfig.email}`,
    knowsAbout: [
      "Computational biology",
      "Machine learning",
      "Bioinformatics",
      "Protein design",
      "Health technology",
      "Web development",
      "Data engineering",
    ],
    knowsLanguage: ["English"],
    nationality: { "@type": "Country", name: "United States" },
    address: {
      "@type": "PostalAddress",
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    worksFor: {
      "@type": "Organization",
      name: "University of Washington, Center for Cryo-Biomedical Engineering and Artificial Organs",
      url: "https://www.washington.edu/",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Washington",
      url: "https://www.washington.edu/",
    },
    founder: {
      "@type": "NonprofitOrganization",
      name: "F*Cancer Foundation",
    },
    sameAs: siteConfig.socialLinks
      .filter((l) => !l.url.startsWith("mailto:"))
      .map((l) => l.url),
  };
}

export function websiteSchema(): Node {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: siteConfig.url,
    name: `${siteConfig.name} | ${siteConfig.titleRoles}`,
    description: siteConfig.metaDescription,
    inLanguage: "en-US",
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
    copyrightHolder: { "@id": PERSON_ID },
  };
}

export function profilePageSchema(): Node {
  return {
    "@type": "ProfilePage",
    "@id": `${siteConfig.url}/#profilepage`,
    url: siteConfig.url,
    name: `${siteConfig.name} | ${siteConfig.titleRoles}`,
    description: siteConfig.metaDescription,
    isPartOf: { "@id": SITE_ID },
    about: { "@id": PERSON_ID },
    mainEntity: { "@id": PERSON_ID },
    inLanguage: "en-US",
    dateModified: new Date().toISOString(),
  };
}

export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
}): Node {
  return {
    "@type": "WebPage",
    "@id": `${siteConfig.url}${opts.path}#webpage`,
    url: `${siteConfig.url}${opts.path}`,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": SITE_ID },
    about: { "@id": PERSON_ID },
    inLanguage: "en-US",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): Node {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${siteConfig.url}${it.path}`,
    })),
  };
}

export function projectsItemListSchema(): Node {
  return {
    "@type": "ItemList",
    name: "Projects by Viraat Nellutla",
    itemListOrder: "https://schema.org/ItemListUnordered",
    numberOfItems: projects.length,
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: p.title,
        description: p.brief,
        abstract: p.description,
        keywords: p.tags.join(", "),
        creativeWorkStatus:
          p.status === "shipped" ? "Published" : "In progress",
        creator: { "@id": PERSON_ID },
        author: { "@id": PERSON_ID },
      },
    })),
  };
}
