/**
 * Project archive.
 *
 * Two states: "shipped" (published or finished, public or not) and "building"
 * (in progress). Each project renders as its own Folder in the projects section;
 * clicking a folder opens its detail card.
 *
 * NOTE: "F*Cancer Foundation" is a role, not a project. It lives in
 * data/experience.ts + data/involvement.ts.
 *
 * `image` values are Unsplash placeholders. Drop real screenshots into
 * /public/projects/<slug>.(png|jpg) and set `image` to "/projects/<slug>.png".
 */

export type ProjectStatus = "shipped" | "building";
export type ProjectFolderColor =
  | "blue"
  | "black"
  | "grey"
  | "yellow"
  | "orange"
  | "red";

export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  brief: string;
  description: string;
  status: ProjectStatus;
  folderColor: ProjectFolderColor;
  image: string;
  imageAlt: string;
  links: ProjectLink[];
  tags: string[];
};

const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const projects: Project[] = [
  // ---------- Shipped ----------
  {
    slug: "salus",
    title: "Salus",
    brief: "Understand what your diagnosis actually means.",
    description:
      "A website that helps patients get more knowledgeable about their diagnoses. It breaks down conditions and health terms into plain language so people can walk into appointments better informed and ask better questions.",
    status: "shipped",
    folderColor: "blue",
    image: UNSPLASH("photo-1576091160550-2173dba999ef"),
    imageAlt: "Placeholder screenshot for Salus",
    links: [],
    tags: ["Next.js", "React", "Health literacy", "Web"],
  },
  {
    slug: "diabetes-research",
    title: "Diabetes Research",
    brief: "Pending publication.",
    description:
      "A research project analyzing patterns in diabetes data, currently pending publication. Covers data cleaning, modeling, evaluation against clinical baselines, and error analysis.",
    status: "shipped",
    folderColor: "red",
    image: UNSPLASH("photo-1532187863486-abf9dbad1b69"),
    imageAlt: "Placeholder figure for the diabetes research project",
    links: [],
    tags: ["Research", "Machine Learning", "Healthcare", "Python"],
  },
  {
    slug: "ignisearch",
    title: "IgniSearch",
    brief: "A school lost and found, actually organized.",
    description:
      "A lost and found system for a school. A searchable directory of found items with categories, claim tracking, and an admin view, so the front office keeps everything in one place instead of a pile of unlabeled boxes.",
    status: "shipped",
    folderColor: "yellow",
    image: UNSPLASH("photo-1454165804606-c3d57bc86b40"),
    imageAlt: "Placeholder screenshot for IgniSearch",
    links: [],
    tags: ["Next.js", "React", "CRUD", "Web"],
  },
  {
    slug: "sentifi",
    title: "Sentifi",
    brief: "Reads the mood of the market.",
    description:
      "A sentiment analysis tool for trading. It scores news and social chatter around a ticker and turns it into a simple signal you can watch alongside price.",
    status: "shipped",
    folderColor: "orange",
    image: UNSPLASH("photo-1611974789855-9c2a0a7236a3"),
    imageAlt: "Placeholder dashboard screenshot for Sentifi",
    links: [],
    tags: ["Python", "NLP", "Sentiment analysis", "Finance"],
  },
  {
    slug: "dharma",
    title: "Dharma",
    brief: "Daily Hindu readings, and a place to start learning.",
    description:
      "A website that delivers curated daily Hindu readings and teaches the basics of Hinduism. Built for people who want a consistent practice or a friendly on-ramp to the philosophy.",
    status: "shipped",
    folderColor: "orange",
    image: UNSPLASH("photo-1507842217343-583bb7270b66"),
    imageAlt: "Placeholder screenshot for Dharma",
    links: [],
    tags: ["Next.js", "React", "Content", "Web"],
  },
  {
    slug: "mog-off",
    title: "Mog Off",
    brief: "Street-fighter-style PvP with your friends.",
    description:
      "An online multiplayer fighting game I built. Real-time PvP combat for two friends or a lobby of up to eight players, with synced match state and a roster of moves.",
    status: "shipped",
    folderColor: "red",
    image: UNSPLASH("photo-1511512578047-dfb367046420"),
    imageAlt: "Placeholder screenshot for Mog Off",
    links: [],
    tags: ["Game dev", "Multiplayer", "WebSockets", "TypeScript"],
  },
  {
    slug: "whos-that-pokemon",
    title: "Who's That Pokémon",
    brief: "A party game for the whole family.",
    description:
      "A real-time guessing game where up to seven players join one room and race to name the Pokémon on screen. Built to be a light, fast pick for family game night.",
    status: "shipped",
    folderColor: "yellow",
    image: UNSPLASH("photo-1550745165-9bc0b252726f"),
    imageAlt: "Placeholder screenshot for Who's That Pokémon",
    links: [],
    tags: ["Game dev", "Multiplayer", "Realtime", "React"],
  },
  {
    slug: "chakra-healing",
    title: "Chakra Healing Hypnosis",
    brief: "The home of a family QHHT practice.",
    description:
      "The website for Chakra Healing, a family-owned business focused on QHHT regression therapy. Covers the practice's approach, session information, and booking.",
    status: "shipped",
    folderColor: "blue",
    image: UNSPLASH("photo-1506126613408-eca07ce68773"),
    imageAlt: "Placeholder screenshot for the Chakra Healing website",
    links: [],
    tags: ["Next.js", "Web", "Small business"],
  },

  // ---------- Building ----------
  {
    slug: "her2-research",
    title: "HER2 Protein Analysis Research",
    brief: "Studying a protein that matters in cancer.",
    description:
      "Ongoing research analyzing the HER2 protein, a target in several cancers, using structural and sequence data to look for patterns worth following up.",
    status: "building",
    folderColor: "black",
    image: UNSPLASH("photo-1518770660439-4636190af475"),
    imageAlt: "Placeholder figure for the HER2 protein research",
    links: [],
    tags: ["Research", "Computational biology", "Proteins", "Python"],
  },
  {
    slug: "stasis",
    title: "Stasis",
    brief: "A nudge toward better posture.",
    description:
      "An app in progress that watches for slouching and gives gentle, well-timed reminders to sit up, without turning posture into another thing to feel guilty about.",
    status: "building",
    folderColor: "grey",
    image: UNSPLASH("photo-1499209974431-9dddcece7f88"),
    imageAlt: "Placeholder screenshot for Stasis",
    links: [],
    tags: ["App", "Computer vision", "Health-Tech"],
  },
  {
    slug: "solace",
    title: "Solace",
    brief: "Low-friction mental health check-ins.",
    description:
      "A mental health app in progress built around short, private check-ins: mood logging, gentle prompts, and simple trends. Designed to be calm and quick.",
    status: "building",
    folderColor: "black",
    image: UNSPLASH("photo-1497366216548-37526070297c"),
    imageAlt: "Placeholder screenshot for Solace",
    links: [],
    tags: ["React", "Next.js", "Health-Tech"],
  },
  {
    slug: "primer",
    title: "Primer",
    brief: "Paper-trade crypto, and learn while you do.",
    description:
      "An automated paper-trading system for crypto markets. It implements strategy backtesting over historical data, a live paper-execution loop, and a dashboard for tracking simulated P&L and drawdown, while teaching the concepts behind each strategy as you go.",
    status: "building",
    folderColor: "grey",
    image: UNSPLASH("photo-1460925895917-afdab827c52f"),
    imageAlt: "Placeholder dashboard screenshot for Primer",
    links: [],
    tags: ["Python", "Backtesting", "APIs", "Finance"],
  },
];

export const shippedProjects = projects.filter((p) => p.status === "shipped");
export const buildingProjects = projects.filter((p) => p.status === "building");
export const featuredProjects = projects;
