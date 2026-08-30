import { Hero } from "@/components/hero";
import { AboutPreview } from "@/components/about-preview";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Awards } from "@/components/awards";
import { Involvement } from "@/components/involvement";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/data/site-config";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: siteConfig.role,
  description: siteConfig.metaDescription,
  email: `mailto:${siteConfig.email}`,
  sameAs: siteConfig.socialLinks
    .filter((l) => !l.url.startsWith("mailto:"))
    .map((l) => l.url),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <main>
        <Hero />
        <AboutPreview />
        <Projects />
        <Experience />
        <Awards />
        <Involvement />
      </main>
      <Footer />
    </>
  );
}
