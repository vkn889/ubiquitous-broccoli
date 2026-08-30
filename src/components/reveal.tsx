"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** stagger delay in seconds */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
};

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Scroll-into-view fade/slide-up reveal (SRD 3.4).
 * Honors prefers-reduced-motion by rendering content immediately with no transform.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const common = {
    className,
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, margin: "0px 0px -12% 0px" },
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
    variants,
  };

  switch (as) {
    case "li":
      return <motion.li {...common}>{children}</motion.li>;
    case "section":
      return <motion.section {...common}>{children}</motion.section>;
    case "article":
      return <motion.article {...common}>{children}</motion.article>;
    default:
      return <motion.div {...common}>{children}</motion.div>;
  }
}
