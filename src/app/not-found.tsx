import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-[var(--container-content)] flex-col items-start justify-center px-5 sm:px-8">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
        Error 404
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-fg sm:text-5xl">
        Page not found.
      </h1>
      <p className="mt-4 text-sm text-muted">
        That page doesn&apos;t exist, or it hasn&apos;t been built yet.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
      >
        Back home
      </Link>
    </main>
  );
}
