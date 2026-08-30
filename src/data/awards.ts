/**
 * "Awards & Recognition" block
 * (PRD open question 3). Same shape as SRD's Certification model plus a
 * "Show All" default count (SRD FR-9).
 * TODO(Viraat): replace with actual competition placements / honors and links.
 */

export type Award = {
  title: string;
  issuer: string;
  year: number;
  category: string;
  credentialUrl?: string;
};

/** number of items visible before the user expands (SRD FR-9) */
export const AWARDS_VISIBLE_COUNT = 4;

export const awards: Award[] = [
  { title: "State Qualifier, Coding & Programming", issuer: "TSA (Technology Student Association)", year: 2025, category: "Computer Science" },
  { title: "Regional Placement, Introduction to Programming", issuer: "FBLA (Future Business Leaders of America)", year: 2025, category: "Computer Science" },
  { title: "Team Award, Division C", issuer: "Science Olympiad", year: 2024, category: "STEM" },
  { title: "Chapter Officer / Competitor", issuer: "DECA", year: 2024, category: "Business" },
  { title: "Mathematics Honor Society Member", issuer: "Mu Alpha Theta", year: 2024, category: "Mathematics" },
  { title: "Research Internship Selection", issuer: "University of Washington", year: 2025, category: "Research" },
];
