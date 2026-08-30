import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  /** two-digit index shown as a subtle marker, e.g. "02" */
  index?: string;
  /** small eyebrow line above the heading */
  eyebrow: string;
  /** large section heading */
  heading: string;
  children: ReactNode;
  className?: string;
  /** kept for backwards-compat with older callers; unused */
  archive?: string;
  total?: string;
};

export function Section({
  id,
  index,
  eyebrow,
  heading,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("scroll-mt-24 py-20 sm:py-28", className)}
    >
      <div className="mx-auto w-full max-w-[var(--container-content)] px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-muted">
            {index ? <span className="text-accent">{index}</span> : null}
            <span className="h-px w-8 bg-line-strong" />
            <span>{eyebrow}</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            id={`${id}-heading`}
            className="mt-4 text-3xl font-bold tracking-tight text-fg sm:text-4xl md:text-5xl"
          >
            {heading}
          </h2>
        </Reveal>

        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
