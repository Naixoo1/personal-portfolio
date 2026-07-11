"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { staggerContainer } from "@/lib/animations";
import type { Project } from "@/lib/data";

interface ProjectGridProps {
  projects: Project[];
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
}

export function ProjectGrid({
  projects,
  title = "Selected Work",
  subtitle = "End-to-end systems engineered for performance, security, and scale",
  showViewAll = true,
}: ProjectGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-foreground-muted text-lg max-w-xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </motion.div>

        {/* View All link */}
        {showViewAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href="/projects"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover
                font-medium transition-colors group"
            >
              View full archive
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
