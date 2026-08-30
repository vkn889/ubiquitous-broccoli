"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { GradientWave } from "@/components/ui/gradient-wave";

const LIGHT_COLORS = [
  "#38bdf8",
  "#ffffff",
  "#7dd3fc",
  "#ffffff",
  "#38bdf8",
  "#e0f2fe",
];

const DARK_COLORS = [
  "#0b3a5b",
  "#0f172a",
  "#075985",
  "#0f172a",
  "#0369a1",
  "#082f49",
];

/**
 * Full-page animated gradient backdrop, fixed behind all content.
 * Re-initialises (via `key`) when the theme flips so the wave palette follows.
 */
export function SiteBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const colors = isDark ? DARK_COLORS : LIGHT_COLORS;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
      style={{ background: "var(--page)" }}
    >
      <GradientWave key={isDark ? "dark" : "light"} colors={colors} darkenTop={isDark} />
      <div className="absolute inset-0" style={{ background: "var(--veil)" }} />
    </div>
  );
}
