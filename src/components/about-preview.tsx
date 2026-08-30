import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { bio, education } from "@/data/education";

export function AboutPreview() {
  return (
    <Section id="about" index="01" eyebrow="about" heading="Engineer, researcher, founder.">
      <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="space-y-4 text-sm leading-relaxed text-fg/80 sm:text-base">
            {bio.slice(0, 2).map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 pt-2 text-sm font-medium text-accent transition-colors duration-200 hover:text-fg"
            >
              Read full bio
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              education
            </p>
            <ul className="mt-4 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-bg">
              {education.map((entry) => (
                <li key={entry.institution} className="p-4">
                  <p className="text-sm font-semibold text-fg">{entry.institution}</p>
                  <p className="mt-1 text-sm text-muted">{entry.credential}</p>
                  <p className="mt-1 font-mono text-xs text-muted">
                    {entry.focus} · {entry.dateRange}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
