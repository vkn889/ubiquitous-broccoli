import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { TagList } from "@/components/tag";
import { involvement } from "@/data/involvement";

export function Involvement() {
  return (
    <Section id="involvement" index="05" eyebrow="currently" heading="Involvement.">
      <div className="grid gap-4 md:grid-cols-3">
        {involvement.map((block, i) => (
          <Reveal key={block.title} delay={i * 0.05}>
            <div className="flex h-full flex-col rounded-2xl border border-line bg-bg p-6">
              <span className="font-mono text-xs text-accent">
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-fg">{block.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-fg/75">
                {block.description}
              </p>
              <div className="mt-4">
                <TagList items={block.tags} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
