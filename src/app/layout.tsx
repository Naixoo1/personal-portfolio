import type { Metadata } from "next";
import { Playfair_Display, Lora, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import "./globals.css";

/*
 * Typography Framework — Ocean Breeze Design System
 *
 * PAIRING RATIONALE:
 * ─ Playfair Display (headings): High-contrast transitional serif with
 *   sharp hairlines and bold letterforms. Evokes luxury editorial design
 *   while maintaining technical precision. The display optical size is
 *   optimized for large headings (24px+).
 *
 * ─ Lora (body): Contemporary serif with moderate contrast and calligraphic
 *   roots. Designed for screen readability, its warm curves balance
 *   Playfair's sharp geometry. Excellent x-height for long-form reading.
 *
 * ─ JetBrains Mono (code): Monospaced with programming ligatures and
 *   increased letter-spacing. Signals technical credibility when displaying
 *   code snippets, tech tags, and metric values.
 */

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "900"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Alvaro Febryan Angkawijaya — Frontend & Backend Developer | AI Enthusiast",
    template: "%s | Alvaro",
  },
  description:
    "Frontend & Backend Developer and AI Enthusiast based in Indonesia. High school student passionate about full-stack web development, coding, data analysis, and computational problem-solving.",
  keywords: [
    "Alvaro Febryan Angkawijaya",
    "Frontend Developer",
    "Backend Developer",
    "AI Enthusiast",
    "React",
    "Next.js",
    "Spreadsheet Architecture",
    "Indonesia Developer",
    "Portfolio",
  ],
  authors: [{ name: "Alvaro Febryan Angkawijaya" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Alvaro — Portfolio",
    title: "Alvaro Febryan Angkawijaya — Frontend & Backend Developer",
    description:
      "Frontend & Backend Developer and AI Enthusiast based in Indonesia. View projects and get in touch.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvaro Febryan Angkawijaya — Frontend & Backend Developer",
    description:
      "Frontend & Backend Developer and AI Enthusiast based in Indonesia. View projects and get in touch.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lora.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
