import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ExternalLinkProps = {
  href: string;
  label: string;
  className?: string;
};

/** External link that always opens in a new tab with safe rel (SRD FR-11). */
export function ExternalLink({ href, label, className }: ExternalLinkProps) {
  const isMail = href.startsWith("mailto:");
  return (
    <a
      href={href}
      {...(isMail
        ? {}
        : { target: "_blank", rel: "noopener noreferrer" })}
      className={cn(
        "group inline-flex items-center gap-1 font-mono text-sm text-fg",
        "underline decoration-line underline-offset-4 transition-colors duration-200",
        "hover:text-accent hover:decoration-accent",
        className,
      )}
    >
      {label}
      <ArrowUpRight
        className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
    </a>
  );
}
