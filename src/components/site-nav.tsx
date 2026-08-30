"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import StaggeredMenu, {
  type StaggeredMenuItem,
  type StaggeredMenuSocialItem,
} from "@/components/ui/StaggeredMenu";
import { siteConfig } from "@/data/site-config";

const items: StaggeredMenuItem[] = [
  { label: "Home", ariaLabel: "Go to the top of the page", link: "/" },
  { label: "About", ariaLabel: "Jump to about", link: "/#about" },
  { label: "Projects", ariaLabel: "Jump to projects", link: "/#projects" },
  { label: "Experience", ariaLabel: "Jump to experience", link: "/#experience" },
  { label: "Contact", ariaLabel: "Jump to contact", link: "/#contact" },
];

const socialItems: StaggeredMenuSocialItem[] = [
  { label: "GitHub", link: "https://github.com/viraatnellutla" },
  { label: "LinkedIn", link: "https://www.linkedin.com/in/viraatnellutla" },
  { label: "Email", link: `mailto:${siteConfig.email}` },
];

/** Theme-aware wrapper around the React Bits StaggeredMenu (hamburger toggle). */
export function SiteNav() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <StaggeredMenu
      position="right"
      isFixed
      items={items}
      socialItems={socialItems}
      displaySocials
      displayItemNumbering
      logoUrl={isDark ? "/logo-dark.svg" : "/logo-light.svg"}
      accentColor={isDark ? "#38bdf8" : "#0284c7"}
      colors={isDark ? ["#0e2a3f", "#0369a1"] : ["#bae6fd", "#7dd3fc"]}
      menuButtonColor={isDark ? "#eef4fb" : "#0b1524"}
      openMenuButtonColor={isDark ? "#eef4fb" : "#0b1524"}
      changeMenuColorOnOpen={false}
    />
  );
}
