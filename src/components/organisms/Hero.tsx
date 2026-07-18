"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/atoms/Button";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { ArrowDown, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Floating orbs — ocean tones */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-accent/10 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "20%", left: "15%" }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-secondary/8 blur-3xl"
        animate={{
          x: [0, -25, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "20%", right: "10%" }}
      />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Availability badge */}
        <motion.div variants={staggerItem} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-success/10 border border-success/20 text-success text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            Open to competitions, hackathons & projects
          </span>
        </motion.div>

        {/* H1 — Headline (6 words) */}
        <motion.h1
          variants={staggerItem}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold
            tracking-tight leading-[1.1] mb-6"
        >
          <span className="block text-foreground">Frontend & Backend</span>
          <span className="block gradient-text">Developer & AI Enthusiast</span>
        </motion.h1>

        {/* H2 — Subheadline (15 words) */}
        <motion.p
          variants={staggerItem}
          className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto
            leading-relaxed mb-10"
        >
          Hi, I&apos;m Alvaro. An 11th-grade student from Indonesia with a passion for
          building full-stack web applications and leveraging AI to optimize workflows.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={staggerItem}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            href="/projects"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Explore Work
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Start a Brief
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={staggerItem}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-foreground-subtle" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
