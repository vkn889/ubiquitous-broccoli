import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Reveal } from "@/components/reveal";
import { TerminalPanel } from "@/components/terminal-panel";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[92vh] items-center"
    >
      <div className="mx-auto w-full max-w-[var(--container-content)] px-5 py-28 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <p className="inline-flex items-center rounded-full border border-line bg-bg px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted">
                {siteConfig.role}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1
                id="hero-heading"
                className="mt-6 text-5xl font-bold leading-[1.03] tracking-tighter text-fg sm:text-6xl md:text-7xl"
              >
                Hi, I&apos;m {siteConfig.shortName}.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg/80">
                {siteConfig.positioning}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
                >
                  See my work
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  href="#about"
                  className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-bg px-6 py-3 text-sm font-medium text-fg transition-colors duration-200 hover:border-accent hover:text-accent"
                >
                  About me
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <TerminalPanel
              file={siteConfig.terminalFile}
              lines={siteConfig.terminalLines}
            />
          </Reveal>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center text-muted"
        aria-hidden="true"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </div>
    </section>
  );
}
