"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/atoms/Button";
import { AnimatedCounter } from "@/components/atoms/AnimatedCounter";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { ArrowRight, Download } from "lucide-react";
import type { Metric, Skill } from "@/lib/data";

interface AboutClientProps {
  config: {
    name: string;
    title: string;
    bio: string;
    email: string;
    location: string;
  };
  skills: Record<string, Skill[]>;
  metrics: Metric[];
}

export function AboutClient({ config, skills, metrics }: AboutClientProps) {
  const bioRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const bioInView = useInView(bioRef, { once: true, margin: "-80px" });
  const skillsInView = useInView(skillsRef, { once: true, margin: "-80px" });

  return (
    <div className="pt-32 pb-16">
      {/* Hero */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={staggerItem}>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Background
              </span>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground
                leading-tight"
            >
              {config.name}
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-xl md:text-2xl text-foreground-muted font-medium"
            >
              {config.title}
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-4 pt-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start a Brief
              </Button>
              <Button
                href="/resume.pdf"
                variant="secondary"
                size="lg"
                icon={<Download className="w-5 h-5" />}
              >
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bio */}
      <section className="px-6 pb-20" ref={bioRef}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={bioInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-surface-border bg-surface p-8 md:p-12"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Engineering Philosophy
            </h2>
            <div className="space-y-4 text-foreground-muted leading-relaxed text-lg">
              <p>{config.bio}</p>
              <p>
                I specialize in bridging the gap between cutting-edge research
                and production-grade systems. Every architecture I design is
                optimized not just for performance — but for measurable business
                outcomes.
              </p>
              <p>
                Beyond client work, I contribute to open-source infrastructure,
                speak at engineering conferences, and mentor early-career
                developers in systems design.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-surface-border bg-surface p-4
            grid grid-cols-2 md:grid-cols-4 divide-x divide-surface-border">
            {metrics.map((metric) => (
              <AnimatedCounter
                key={metric.label}
                value={parseFloat(metric.value)}
                prefix={metric.prefix}
                suffix={metric.suffix}
                label={metric.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 pb-20 bg-background-secondary py-20" ref={skillsRef}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Technical Proficiency
            </h2>
            <p className="text-foreground-muted text-lg">
              Production-tested capabilities across the modern stack
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                variants={staggerItem}
                className="rounded-2xl border border-surface-border bg-surface p-6 space-y-4"
              >
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg
                        bg-background text-foreground-muted cursor-default
                        hover:bg-accent-soft hover:text-accent transition-all"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to evaluate the fit?
          </h2>
          <p className="text-lg text-foreground-muted max-w-xl mx-auto">
            I work best with teams that value technical rigor and clear
            communication.
          </p>
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Start a Brief
          </Button>
        </div>
      </section>
    </div>
  );
}
