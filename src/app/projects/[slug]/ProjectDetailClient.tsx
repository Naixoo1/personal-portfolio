"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Building2, User } from "lucide-react";
import { Badge } from "@/components/atoms/Badge";
import { AnimatedCounter } from "@/components/atoms/AnimatedCounter";
import { ProjectTimeline } from "@/components/organisms/ProjectTimeline";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import type { Project } from "@/lib/data";

interface ProjectDetailClientProps {
  project: Project;
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const formatDate = (dateStr: string) =>
    new Date(dateStr + "-01").toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });

  return (
    <article className="pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Back link — "Case Studies" framing */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-foreground-muted
                hover:text-accent transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              All Case Studies
            </Link>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Title */}
            <motion.h1
              variants={staggerItem}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground
                leading-tight tracking-tight"
            >
              {project.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl text-foreground-muted leading-relaxed max-w-3xl"
            >
              {project.subtitle}
            </motion.p>

            {/* Meta info */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap items-center gap-6 text-sm text-foreground-muted"
            >
              <span className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                {project.client}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {project.role}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(project.startDate)} — {formatDate(project.endDate)}
              </span>
            </motion.div>

            {/* Tags */}
            <motion.div variants={staggerItem} className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <Badge key={tag.name} tag={tag} size="md" />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image Area */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="aspect-[16/9] rounded-2xl overflow-hidden bg-background-secondary
              border border-surface-border"
          >
            <div className="w-full h-full bg-gradient-to-br from-accent/15 via-secondary/10 to-accent/5
              flex items-center justify-center">
              <span className="text-8xl font-bold text-foreground/5">
                {project.title.charAt(0)}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              The Challenge
            </h2>
            <p className="text-foreground-muted leading-relaxed text-lg">
              {project.description}
            </p>
          </motion.div>

          {/* Measurable Outcomes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10"
          >
            <h3 className="text-xl font-bold text-foreground mb-4">
              Measurable Outcomes
            </h3>
            <ul className="space-y-3">
              {project.highlights.map((highlight, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-start gap-3 text-foreground-muted"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span className="leading-relaxed">{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-surface-border bg-surface p-4
            grid grid-cols-2 md:grid-cols-4 divide-x divide-surface-border">
            {project.metrics.map((metric) => (
              <AnimatedCounter
                key={metric.label}
                value={parseFloat(metric.value.replace(/[^0-9.]/g, ""))}
                prefix={metric.value.match(/^[^0-9]*/)?.[0]}
                suffix={metric.suffix}
                label={metric.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Timeline */}
      <section className="bg-background-secondary">
        <ProjectTimeline events={project.timeline} />
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            This caliber of work. Your next project.
          </h2>
          <p className="text-foreground-muted text-lg">
            Let&apos;s discuss how this level of technical depth can serve your team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full
              bg-accent text-white font-medium text-lg
              hover:bg-accent-hover transition-colors shadow-lg shadow-accent-glow/20"
          >
            Start a Brief
          </Link>
        </div>
      </section>
    </article>
  );
}
