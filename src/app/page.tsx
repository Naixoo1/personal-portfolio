import { Hero } from "@/components/organisms/Hero";
import { ProjectGrid } from "@/components/organisms/ProjectGrid";
import { SkillsShowcase } from "@/components/organisms/SkillsShowcase";
import { MetricsBar } from "@/components/organisms/MetricsBar";
import { getFeaturedProjects, siteConfig } from "@/lib/data";
import { Button } from "@/components/atoms/Button";
import { ArrowRight } from "lucide-react";

import { FAQ } from "@/components/organisms/FAQ";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: siteConfig.name,
            jobTitle: siteConfig.title,
            url: "https://alvarofebryan.dev",
            sameAs: [
              "https://github.com",
              "https://linkedin.com",
              "https://twitter.com",
            ],
            knowsAbout: [
              "React",
              "Next.js",
              "Python",
              "TensorFlow",
              "System Design",
            ],
          }),
        }}
      />

      <Hero />
      <ProjectGrid projects={featuredProjects} />
      <SkillsShowcase />
      <MetricsBar />
      <FAQ />

      {/* Bottom CTA — Retention close */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Your next system deserves{" "}
            <span className="gradient-text">precision</span>.
          </h2>
          <p className="text-lg text-foreground-muted max-w-xl mx-auto">
            I partner with teams that refuse to compromise on quality.
            Let&apos;s discuss your requirements.
          </p>
          <div className="pt-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start a Brief
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
