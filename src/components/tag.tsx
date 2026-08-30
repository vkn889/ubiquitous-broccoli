import { cn } from "@/lib/utils";

/** Small monospace bracket-styled tag chip (SRD 3.2). */
export function Tag({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-mono text-[11px] uppercase tracking-wider text-muted",
        "rounded-md border border-line px-2 py-1 transition-colors duration-200 hover:border-line-strong hover:text-fg",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TagList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
