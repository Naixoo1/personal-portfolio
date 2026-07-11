import type { Variants, Transition } from "framer-motion";

/*
 * ═══════════════════════════════════════════════════════════════
 * OCEAN BREEZE — MOTION PRINCIPLES
 * ═══════════════════════════════════════════════════════════════
 *
 * Philosophy: "Water in motion" — every animation should feel
 * like the fluid, effortless movement of ocean currents.
 *
 * 1. ELEGANCE OVER SPEED
 *    Use the custom `ease-elegant` (0.22, 1, 0.36, 1) as the default
 *    curve. It decelerates smoothly, mimicking a wave reaching shore.
 *
 * 2. LAYERED REVEALS
 *    Stagger child elements by 80-120ms to create a cascading
 *    "ripple" effect. Never reveal everything simultaneously.
 *
 * 3. SUBTLE SCALE
 *    Keep scale animations within 0.95–1.03. Luxury brands whisper.
 *
 * 4. DIRECTIONAL INTENT
 *    Entrance: always from below or behind (y: 24, opacity: 0).
 *    Exit: fade only — no directional exit on navigation.
 *
 * 5. SPRING PHYSICS
 *    Use spring transitions for interactive elements (hover, drag).
 *    CSS transitions for ambient effects (gradients, glows).
 */

// ===== SPRING CONFIGS =====

/** Smooth spring — primary interaction curve. Luxury feel. */
export const springSmooth: Transition = {
  type: "spring",
  stiffness: 180,
  damping: 28,
  mass: 1,
};

/** Bouncy spring — for micro-interactions (toggles, badges). */
export const springBouncy: Transition = {
  type: "spring",
  stiffness: 280,
  damping: 18,
  mass: 0.8,
};

/** Gentle spring — for ambient motion (floats, orbs). */
export const springGentle: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 22,
  mass: 1.2,
};

// ===== ELEGANT EASING =====

const elegantEase = [0.22, 1, 0.36, 1] as const;

// ===== FADE VARIANTS =====

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: elegantEase },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: elegantEase },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: elegantEase },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: elegantEase },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: elegantEase },
  },
};

// ===== SCALE VARIANTS =====

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springBouncy,
  },
};

// ===== STAGGER VARIANTS =====

/** Container with cascading ripple stagger (100ms between children). */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/** Faster stagger for dense grids (60ms). */
export const staggerFaster: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

/** Individual staggered item — subtle upward drift. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: elegantEase },
  },
};

// ===== NAV VARIANTS =====

export const navVariants: Variants = {
  top: {
    height: "4.5rem",
    backgroundColor: "transparent",
  },
  scrolled: {
    height: "3.5rem",
    backgroundColor: "var(--glass-bg)",
  },
};

// ===== MOBILE MENU =====

export const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.2, ease: elegantEase },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: elegantEase,
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

export const mobileMenuItemVariants: Variants = {
  closed: { opacity: 0, x: -12 },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: elegantEase },
  },
};

// ===== CARD HOVER =====

/** Luxury card hover — minimal lift, no exaggerated scale. */
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    transition: springSmooth,
  },
  hover: {
    scale: 1.015,
    y: -3,
    transition: springSmooth,
  },
};

// ===== TIMELINE =====

export const timelineNodeVariants: Variants = {
  hidden: { opacity: 0, x: -16, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5, ease: elegantEase },
  },
};

// ===== PAGE TRANSITION =====

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: elegantEase },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: elegantEase },
  },
};
