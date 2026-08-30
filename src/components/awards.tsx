"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Tag } from "@/components/tag";
import { awards, AWARDS_VISIBLE_COUNT } from "@/data/awards";

export function Awards() {
  const [expanded, setExpanded] = useState(false);
  const hasMore = awards.length > AWARDS_VISIBLE_COUNT;
  const visible = expanded ? awards : awards.slice(0, AWARDS_VISIBLE_COUNT);

  return (
    <Section id="awards" index="04" eyebrow="recognition" heading="Awards & recognition.">
      <ul className="grid gap-4 sm:grid-cols-2">
        {visible.map((award, i) => (
          <Reveal key={`${award.title}-${award.year}`} as="li" delay={i * 0.03}>
            <div className="h-full rounded-2xl border border-line bg-bg p-6">
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-sm font-semibold text-fg">{award.title}</p>
                <span className="font-mono text-xs text-accent">{award.year}</span>
              </div>
              <p className="mt-2 text-sm text-muted">{award.issuer}</p>
              <div className="mt-4">
                <Tag>{award.category}</Tag>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>

      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="group mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full border border-line bg-bg px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-muted transition-colors duration-200 hover:border-line-strong hover:text-fg"
        >
          {expanded ? "Show less" : `Show all (${awards.length})`}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      )}
    </Section>
  );
}
