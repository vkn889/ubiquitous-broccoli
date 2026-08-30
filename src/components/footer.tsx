import { Reveal } from "@/components/reveal";
import { ExternalLink } from "@/components/external-link";
import { siteConfig } from "@/data/site-config";

/**
 * Footer doubles as the site's only "Contact" surface (kept simple, at the
 * bottom of the page). Anchored as #contact for the nav.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto w-full max-w-[var(--container-content)] px-5 py-20 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-muted">
            <span className="text-accent">06</span>
            <span className="h-px w-8 bg-line-strong" />
            <span>get in touch</span>
          </div>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            Let&apos;s build something.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-fg/75">
            Open to research collaborations, internships, and health-tech worth
            shipping. Email is the fastest way to reach me.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {siteConfig.socialLinks.map((link) => (
              <li key={link.url}>
                <ExternalLink href={link.url} label={link.handle} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-[var(--container-content)] flex-col gap-2 px-5 py-6 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {siteConfig.name}
          </p>
          <p className="text-muted/70">Built with Next.js · Deployed on Vercel</p>
        </div>
      </div>
    </footer>
  );
}
