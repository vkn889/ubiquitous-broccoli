/**
 * Education entries for About.
 * TODO(Viraat): confirm school name, program, expected graduation, and coursework.
 */

export type EducationEntry = {
  institution: string;
  credential: string;
  focus: string;
  location: string;
  dateRange: string;
  notes?: string[];
};

export const education: EducationEntry[] = [
  {
    institution: "High School",
    credential: "High School Diploma (in progress)",
    focus: "Computer Science, Mathematics, and Biology",
    location: "Washington, USA",
    dateRange: "Expected 2027",
    notes: [
      "Coursework in AP Computer Science, Calculus, Biology, and Statistics",
      "Active in FBLA, DECA, TSA, Science Olympiad, and Mu Alpha Theta",
    ],
  },
  {
    institution: "University of Washington",
    credential: "Research Internship",
    focus: "Cryo-Biomedical Engineering & Artificial Organs",
    location: "Seattle, WA",
    dateRange: "June 2026 to Present",
    notes: ["Research under Professor Shen Ren"],
  },
];

/** Bio paragraphs for the about block. First person. No em dashes. */
export const bio: string[] = [
  "I'm Viraat, and I work at the intersection of biology, programming, and human impact. Most of what I make uses code and machine learning to make health and science easier to understand and more useful to actual people.",
  "I founded the F*Cancer Foundation in February 2026 and built its website end to end. Since June 2026 I have been a research intern at the University of Washington's Center for Cryo-Biomedical Engineering under Professor Shen Ren, where I write data pipelines and models to make sense of experimental results. I also manage content for Chakra Healing, a family-owned QHHT regression-therapy practice.",
  "Before that I taught programming at Luma Coding from October to December 2025, helping students ship their first real projects. I compete in FBLA, DECA, TSA, Science Olympiad, and Mu Alpha Theta.",
  "Most of my projects come back to the same question: how can software help someone understand their own health, learn something new, or just have fun with the people around them.",
];
