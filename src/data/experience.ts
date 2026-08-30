/**
 * Reverse-chronological work history.
 * TODO(Viraat): confirm exact dates, locations, and add outcome metrics.
 */

export type ExperienceEntry = {
  title: string;
  org: string;
  location: string;
  dateRange: string;
  description: string;
  tags: string[];
};

export const experience: ExperienceEntry[] = [
  {
    title: "Research Intern",
    org: "Center for Cryo-Biomedical Engineering & Artificial Organs, University of Washington",
    location: "Seattle, WA",
    dateRange: "June 2026 to Present",
    description:
      "Working under Professor Shen Ren on cryopreservation and artificial-organ research. Building data pipelines and machine-learning models to analyze experimental results and support protein and tissue-preservation work.",
    tags: ["Python", "PyTorch", "Data Analysis", "Computational Biology", "Research"],
  },
  {
    title: "Founder & Executive Director",
    org: "F*Cancer Foundation",
    location: "Remote",
    dateRange: "February 2026 to Present",
    description:
      "Founded a student-run nonprofit supporting cancer patients and families. Designed and fully developed the organization's website end to end, and run fundraising, outreach, and a volunteer team.",
    tags: ["Next.js", "Fundraising", "Operations", "Leadership"],
  },
  {
    title: "Content Manager",
    org: "Chakra Healing",
    location: "Remote",
    dateRange: "June 2026 to Present",
    description:
      "Manage content and the digital presence for Chakra Healing, a family-owned QHHT regression-therapy practice. Handle site copy, publishing, and messaging.",
    tags: ["Content Strategy", "Web", "Marketing"],
  },
  {
    title: "Coding Instructor",
    org: "Luma Coding",
    location: "Remote",
    dateRange: "October 2025 to December 2025",
    description:
      "Taught programming fundamentals, Python, and web development to middle- and high-school students. Built lesson plans and project-based curriculum, and mentored students through their first full builds.",
    tags: ["Python", "Web Development", "Teaching", "Curriculum"],
  },
];
