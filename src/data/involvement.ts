/**
 * "Involvement" block. Three entries, each with a title, short blurb, and tags.
 */

export type InvolvementBlock = {
  title: string;
  description: string;
  tags: string[];
};

export const involvement: InvolvementBlock[] = [
  {
    title: "Competitive STEM & Business",
    description:
      "Active competitor across FBLA, DECA, and TSA in programming, business, and technology events, plus Science Olympiad and Mu Alpha Theta.",
    tags: ["FBLA", "DECA", "TSA"],
  },
  {
    title: "Nonprofit Leadership",
    description:
      "Founder and director of the F*Cancer Foundation, coordinating volunteers, fundraising, and the organization's digital presence.",
    tags: ["Founder", "Operations", "Fundraising"],
  },
  {
    title: "Teaching & Mentorship",
    description:
      "Coding instructor at Luma Coding, guiding students from first principles to their first shipped projects in Python and web development.",
    tags: ["Instruction", "Python", "Mentorship"],
  },
];
