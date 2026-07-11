import type { Metadata } from "next";
import { siteConfig, skills, globalMetrics } from "@/lib/data";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.name}, ${siteConfig.title}. ${siteConfig.bio}`,
};

export default function AboutPage() {
  return (
    <AboutClient
      config={siteConfig}
      skills={skills}
      metrics={globalMetrics}
    />
  );
}
