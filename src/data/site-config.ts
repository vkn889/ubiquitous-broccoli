/**
 * Single source of truth for identity, meta tags, and contact links (SRD FR-10, FR-12).
 *
 * NOTE: Content below is a best-effort draft assembled from the PRD. Viraat should
 * confirm every claim (titles, dates, handles, URLs) before publishing (PRD 7).
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
  role: string;
  /** hero positioning statement, one sentence */
  positioning: string;
  /** filename shown on the hero terminal panel */
  terminalFile: string;
  /** lines typed out, one by one, in the hero terminal panel */
  terminalLines: string[];
  url: string;
  metaDescription: string;
  ogImage: string;
  email: string;
  socialLinks: SocialLink[];
};

export const siteConfig: SiteConfig = {
  name: "Viraat Nellutla",
  shortName: "Viraat",
  initials: "VKN",
  role: "Biology, Programming & Human Impact",
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
    "Viraat Nellutla is a student engineer and researcher working at the intersection of biology, programming, and human impact. Founder of the F*Cancer Foundation and a research intern at the University of Washington.",
  ogImage: "/opengraph-image",
  email: "vkn889@gmail.com",
  socialLinks: [
    { label: "GitHub", handle: "@viraatnellutla", url: "https://github.com/viraatnellutla" },
    { label: "LinkedIn", handle: "in/viraatnellutla", url: "https://www.linkedin.com/in/viraatnellutla" },
    { label: "Email", handle: "vkn889@gmail.com", url: "mailto:vkn889@gmail.com" },
  ],
};
