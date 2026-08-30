import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Projects } from "@/components/projects";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Projects",
  description: `The full project archive from ${siteConfig.name}, spanning health-tech, machine learning, and research builds.`,
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <main className="pt-24">
        <Projects />
      </main>
      <Footer />
    </>
  );
}
