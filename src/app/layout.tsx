import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { siteConfig } from "@/data/site-config";
import { SiteBackground } from "@/components/site-background";
import { SiteNav } from "@/components/site-nav";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const sans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} · ${siteConfig.role}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.metaDescription,
  keywords: [
    "Viraat Nellutla",
    "portfolio",
    "software engineer",
    "machine learning",
    "computational biology",
    "health-tech",
    "biology",
    "research",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} · ${siteConfig.role}`,
    description: siteConfig.metaDescription,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} · ${siteConfig.role}`,
    description: siteConfig.metaDescription,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eaf5fc" },
    { media: "(prefers-color-scheme: dark)", color: "#060d18" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable} h-full`}
    >
      <body className="min-h-full">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <SiteBackground />
          <SiteNav />
          <ThemeToggle />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
