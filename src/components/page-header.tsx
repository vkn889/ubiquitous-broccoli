import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/reveal";

type PageHeaderProps = {
  eyebrow: string;
  heading: string;
  intro?: string;
  /** kept for backwards-compat; unused */
  index?: string;
  archive?: string;
};

export function PageHeader({ eyebrow, heading, intro }: PageHeaderProps) {
  return (
    <header className="mx-auto w-full max-w-[var(--container-content)] px-5 pb-8 pt-28 sm:px-8 sm:pt-32">
      <Reveal>
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted transition-colors duration-200 hover:text-fg"
        >
          <ArrowLeft
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5"
            aria-hidden="true"
          />
          Home
        </Link>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mt-10 text-xs font-medium uppercase tracking-[0.22em] text-muted">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-fg sm:text-5xl md:text-6xl">
          {heading}
        </h1>
        {intro ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg/75">{intro}</p>
        ) : null}
      </Reveal>
    </header>
  );
}
