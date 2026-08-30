/**
 * Single source of truth for identity, SEO, and contact links.
 *
 * NOTE: Content below is a best-effort draft. Viraat should confirm every
 * claim (titles, dates, handles, URLs) before publishing.
 */

export type SocialLink = {
  label: string;
  /** short handle/username shown next to the label */
  handle: string;
  url: string;
};

export type SiteConfig = {
  name: string;
  shortName: string;
  initials: string;
  /** on-page hero chip, e.g. "Biology, Programming & Human Impact" */
  role: string;
  /** SEO title suffix, comma format: "Innovator, Engineer, Researcher" */
  titleRoles: string;
  /** hero positioning statement, one sentence */
  positioning: string;
  /** filename shown on the hero terminal panel */
  terminalFile: string;
  /** lines typed out, one by one, in the hero terminal panel */
  terminalLines: string[];
  url: string;
  /** ~150 char search-result description */
  metaDescription: string;
  ogImage: string;
  email: string;
  /** coarse location for structured data */
  region: string;
  country: string;
  /** search keywords */
  keywords: string[];
  socialLinks: SocialLink[];
};

export const siteConfig: SiteConfig = {
  name: "Viraat Nellutla",
  shortName: "Viraat",
  initials: "VKN",
  role: "Biology, Programming & Human Impact",
  titleRoles: "Innovator, Engineer, Researcher",
  positioning:
    "I build software and machine-learning tools at the intersection of biology, programming, and human impact, helping people understand their health, learn something new, and connect with the people around them.",
  terminalFile: "viraat.py",
  terminalLines: [
    ">>> import viraat",
    ">>> viraat.focus",
    "['biology', 'programming', 'human impact']",
    ">>> viraat.now()",
    "'research @ UW  ·  building health tools'",
    ">>> viraat.ship()",
    "deploying: things that help people ... ok",
  ],
  url: "https://viraatnellutla.me",
  metaDescription:
    "Innovator, engineer, and researcher. Research at the University of Washington, and projects at the intersection of biology, programming, and human impact.",
  ogImage: "/opengraph-image",
  email: "vkn889@gmail.com",
  region: "Washington",
  country: "US",
  keywords: [
    "Viraat Nellutla",
    "Viraat Nellutla portfolio",
    "Viraat Nellutla researcher",
    "researcher",
    "software engineer",
    "founder",
    "computational biology",
    "machine learning",
    "bioinformatics",
    "protein design",
    "health technology",
    "health-tech",
    "F*Cancer Foundation",
    "University of Washington research",
    "cryopreservation",
    "student researcher",
    "Next.js developer",
    "TypeScript",
    "Python",
  ],
  socialLinks: [
    { label: "GitHub", handle: "@viraatnellutla", url: "https://github.com/viraatnellutla" },
    { label: "LinkedIn", handle: "in/viraatnellutla", url: "https://www.linkedin.com/in/viraatnellutla" },
    { label: "Email", handle: "vkn889@gmail.com", url: "mailto:vkn889@gmail.com" },
  ],
};
