import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { AboutPreview } from "@/components/about-preview";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Awards } from "@/components/awards";
import { Involvement } from "@/components/involvement";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { graph, profilePageSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={graph(profilePageSchema())} />
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
