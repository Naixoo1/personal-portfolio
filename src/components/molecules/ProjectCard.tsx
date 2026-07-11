"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/atoms/Badge";
import { cardHover } from "@/lib/animations";
import type { Project } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" },
        },
      }}
    >
      <Link href={`/projects/${project.slug}`} className="block group">
        <motion.article
          initial="rest"
          whileHover="hover"
          variants={cardHover}
          className="relative rounded-2xl overflow-hidden border border-surface-border
            bg-surface transition-shadow duration-300 hover:shadow-lg hover:shadow-accent-glow/10"
        >
          {/* Thumbnail */}
          <div className="relative aspect-[16/10] overflow-hidden bg-background-secondary">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-pink-500/10 to-blue-500/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-bold text-foreground/5">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 bg-accent/10 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 rounded-full bg-accent/90 flex items-center justify-center text-white">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-3">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-1">
                {project.title}
              </h3>
            </div>

            <p className="text-sm text-foreground-muted line-clamp-2 leading-relaxed">
              {project.subtitle}
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="text-xs text-foreground-subtle">
                {project.role} · {project.client}
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.tags.slice(0, 4).map((tag) => (
                <Badge key={tag.name} tag={tag} size="sm" />
              ))}
              {project.tags.length > 4 && (
                <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full bg-surface-hover text-foreground-subtle">
                  +{project.tags.length - 4}
                </span>
              )}
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}
