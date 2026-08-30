"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type TerminalPanelProps = {
  file: string;
  lines: string[];
};

/**
 * Hero "active shell" panel with a one-shot typewriter effect.
 * With prefers-reduced-motion, all lines render immediately.
 */
export function TerminalPanel({ file, lines }: TerminalPanelProps) {
  const reduceMotion = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const done = lineIndex >= lines.length;
  const isStatic = reduceMotion || done;

  useEffect(() => {
    if (reduceMotion || done) return;

    const current = lines[lineIndex];
    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 26);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, 360);
    return () => clearTimeout(t);
  }, [reduceMotion, done, lineIndex, charIndex, lines]);

  const visibleLines = isStatic ? lines : lines.slice(0, lineIndex + 1);

  return (
    <div className="glass overflow-hidden rounded-2xl border border-line font-mono text-sm shadow-2xl shadow-sky-950/10">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" aria-hidden="true" />
        <span className="ml-2 text-xs text-muted">{file}</span>
      </div>
      <div className="min-h-[188px] space-y-1.5 p-4 leading-relaxed" aria-live="polite">
        {visibleLines.map((line, i) => {
          const isLast = i === visibleLines.length - 1;
          const text = isStatic || !isLast ? line : line.slice(0, charIndex);
          const isPrompt = line.startsWith(">>>") || line.startsWith("$");
          return (
            <p key={i} className={isPrompt ? "text-accent" : "text-fg/80"}>
              {text}
              {!isStatic && isLast ? (
                <span className="caret-blink text-accent">▍</span>
              ) : null}
            </p>
          );
        })}
        {isStatic && (
          <p className="text-accent">
            {">>> "}
            <span className="caret-blink">▍</span>
          </p>
        )}
      </div>
    </div>
  );
}
