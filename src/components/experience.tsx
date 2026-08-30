import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { TagList } from "@/components/tag";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" index="03" eyebrow="work" heading="Experience.">
      <ol className="border-t border-line">
        {experience.map((entry, i) => (
          <Reveal key={`${entry.org}-${entry.title}`} as="li" delay={i * 0.04}>
            <article className="grid gap-4 border-b border-line py-8 md:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                  {entry.dateRange}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-fg">{entry.title}</h3>
                <p className="mt-1 text-sm text-muted">{entry.org}</p>
                <p className="mt-1 font-mono text-xs text-muted">{entry.location}</p>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-fg/80 sm:text-base">
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
    </Section>
  );
}
