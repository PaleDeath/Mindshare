import type { Metadata } from "next";
import { Bebas_Neue, Space_Mono, Inter } from "next/font/google";
import "@/app/globals.css";

// ── Typography ──────────────────────────────────────────────────────────────

/** Display: editorial large headlines */
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

/** Mono: labels, tags, technical copy */
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

/** Sans: body text, descriptions */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// ── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Mindshare — Engineering · Networks · Distribution",
  description:
    "A small agency combining full-stack engineering, ecosystem growth, " +
    "and distribution systems into a single mindshare engine.",
  keywords: ["agency", "web3", "engineering", "growth", "distribution", "mindshare"],
  openGraph: {
    title: "Mindshare",
    description: "One agency. Three forces. One mindshare.",
    type: "website",
  },
};

// ── Root Layout ─────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${spaceMono.variable} ${inter.variable}`}
    >
      <head>
        {/* Preload hint for GSAP — improves first-interaction timing */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-void text-signal antialiased cursor-none overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
