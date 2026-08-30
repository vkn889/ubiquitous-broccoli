import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Projects } from "@/components/projects";
import { JsonLd } from "@/components/json-ld";
import {
  graph,
  webPageSchema,
  breadcrumbSchema,
  projectsItemListSchema,
} from "@/lib/structured-data";
import { siteConfig } from "@/data/site-config";

const description = `Projects by ${siteConfig.name}: shipped work and work in progress across biology, machine learning, web apps, games, and health-tech.`;

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/projects`,
    title: `Projects | ${siteConfig.name}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `Projects | ${siteConfig.name}`,
    description,
  },
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={graph(
          {
            ...webPageSchema({
              path: "/projects",
              name: `Projects | ${siteConfig.name}`,
              description,
            }),
            "@type": "CollectionPage",
            mainEntity: projectsItemListSchema(),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
        )}
      />
      <main className="pt-24">
        <Projects />
      </main>
      <Footer />
    </>
  );
}
