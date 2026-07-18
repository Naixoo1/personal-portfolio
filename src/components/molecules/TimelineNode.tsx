"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  Database,
  AlertTriangle,
  Brain,
  Rocket,
  Shield,
  CheckCircle,
  Layout,
  CreditCard,
} from "lucide-react";
import type { TimelineEvent } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  search: Search,
  database: Database,
  "alert-triangle": AlertTriangle,
  brain: Brain,
  rocket: Rocket,
  shield: Shield,
  "check-circle": CheckCircle,
  layout: Layout,
  "credit-card": CreditCard,
};

const categoryStyles: Record<string, { dot: string; border: string }> = {
  milestone: {
    dot: "bg-accent",
    border: "border-accent/30",
  },
  challenge: {
    dot: "bg-warning",
    border: "border-warning/30",
  },
  outcome: {
    dot: "bg-success",
    border: "border-success/30",
  },
};

interface TimelineNodeProps {
  event: TimelineEvent;
  index: number;
  isLast: boolean;
}

export function TimelineNode({ event, index, isLast }: TimelineNodeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const styles = categoryStyles[event.category] || categoryStyles.milestone;
  const Icon = iconMap[event.icon] || Rocket;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      className="relative flex gap-6 pb-10 last:pb-0"
    >
      {/* Timeline Line & Dot */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.12 + 0.2, type: "spring", stiffness: 300 }}
          className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center
            border-2 ${styles.border} bg-surface shadow-md`}
        >
          <Icon className="w-4 h-4 text-foreground-muted" />
        </motion.div>
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.12 + 0.3 }}
            className="w-px flex-1 bg-gradient-to-b from-surface-border to-transparent origin-top"
          />
        )}
      </div>

      {/* Content Card */}
      <div className="flex-1 pb-2">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-medium text-foreground-subtle uppercase tracking-wider">
            {new Date(event.date + (event.date.split('-').length === 2 ? "-01" : "")).toLocaleDateString("en-US", {
              month: "short",
              day: event.date.split('-').length === 3 ? "numeric" : undefined,
              year: "numeric",
            })}
          </span>
          <span
            className={`w-2 h-2 rounded-full ${styles.dot}`}
          />
          <span className="text-xs font-medium text-foreground-subtle capitalize">
            {event.category}
          </span>
        </div>
        <h4 className="text-base font-semibold text-foreground mb-1">
          {event.title}
        </h4>
        <p className="text-sm text-foreground-muted leading-relaxed">
          {event.description}
        </p>
      </div>
    </motion.div>
  );
}
