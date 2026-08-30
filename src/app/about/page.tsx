import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { TagList } from "@/components/tag";
import { JsonLd } from "@/components/json-ld";
import {
  graph,
  webPageSchema,
  breadcrumbSchema,
} from "@/lib/structured-data";
import { bio, education } from "@/data/education";
import { experience } from "@/data/experience";
import { siteConfig } from "@/data/site-config";

const description = `The background, education, and work history of ${siteConfig.name}: research at the University of Washington, founding the F*Cancer Foundation, and teaching programming.`;

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    url: `${siteConfig.url}/about`,
    title: `About | ${siteConfig.name}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `About | ${siteConfig.name}`,
    description,
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/about",
            name: `About | ${siteConfig.name}`,
            description,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        )}
      />
      <main>
        <PageHeader
          eyebrow="about"
          heading="Background & education."
        />

        <div className="mx-auto w-full max-w-[var(--container-content)] px-5 pb-24 sm:px-8">
          <div className="grid gap-16 border-t border-line pt-12 md:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="space-y-4 text-sm leading-relaxed text-muted sm:text-base">
                {bio.map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
              </div>
            </Reveal>

            <div className="space-y-10">
              <Reveal>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    education
                  </p>
                  <ul className="mt-4 divide-y divide-line overflow-hidden rounded-xl border border-line">
                    {education.map((entry) => (
                      <li key={entry.institution} className="p-4">
                        <p className="text-sm font-medium text-fg">{entry.institution}</p>
                        <p className="mt-1 text-sm text-muted">{entry.credential}</p>
                        <p className="mt-1 font-mono text-xs text-muted">
                          {entry.focus} · {entry.location} · {entry.dateRange}
                        </p>
                        {entry.notes ? (
                          <ul className="mt-2 list-inside list-disc space-y-1 text-xs text-muted">
                            {entry.notes.map((note) => (
                              <li key={note}>{note}</li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="mt-20 border-t border-line pt-12">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                work
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                Experience
              </h2>
            </Reveal>
            <ol className="mt-8 border-t border-line">
              {experience.map((entry, i) => (
                <Reveal key={`${entry.org}-${entry.title}`} as="li" delay={i * 0.04}>
                  <article className="grid gap-4 border-b border-line py-8 md:grid-cols-[0.85fr_1.15fr]">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                        {entry.dateRange}
                      </p>
                      <h3 className="mt-2 text-lg font-medium text-fg">{entry.title}</h3>
                      <p className="mt-1 text-sm text-muted">{entry.org}</p>
                      <p className="mt-1 font-mono text-xs text-muted">{entry.location}</p>
                    </div>
                    <div>
                      <p className="text-sm leading-relaxed text-muted sm:text-base">
                        {entry.description}
                      </p>
                      <div className="mt-4">
                        <TagList items={entry.tags} />
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
