import { Hero } from "@/components/organisms/Hero";
import { ProjectGrid } from "@/components/organisms/ProjectGrid";
import { SkillsShowcase } from "@/components/organisms/SkillsShowcase";
import { MetricsBar } from "@/components/organisms/MetricsBar";
import { getFeaturedProjects, siteConfig, socialLinks } from "@/lib/data";
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
            url: siteConfig.url,
            sameAs: socialLinks.map((link) => link.url),
            knowsAbout: [
              "Frontend Development",
              "Backend Development",
              "Web Design",
              "Data Analysis",
              "AI-Assisted Development",
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
            Let&apos;s build something{" "}
            <span className="gradient-text">amazing</span> together.
          </h2>
          <p className="text-lg text-foreground-muted max-w-xl mx-auto">
            I am always open to new challenges, design competitions, and collaborative development projects.
          </p>
          <div className="pt-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get in touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
