"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedCounter } from "@/components/atoms/AnimatedCounter";
import { globalMetrics } from "@/lib/data";

export function MetricsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="metrics" className="py-16 md:py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-surface-border bg-surface p-4
            grid grid-cols-2 md:grid-cols-4 divide-x divide-surface-border"
        >
          {globalMetrics.map((metric) => (
            <AnimatedCounter
              key={metric.label}
              value={parseFloat(metric.value)}
              prefix={metric.prefix}
              suffix={metric.suffix}
              label={metric.label}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
