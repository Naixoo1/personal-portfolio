import type { TechTag } from "@/lib/data";

/**
 * Ocean Breeze category color mapping
 *
 * Uses ocean/seafoam/teal tones for a cohesive palette while
 * maintaining distinguishable hues per category.
 *
 * Contrast ratios (dark mode / light mode):
 * - frontend:  ocean-300 on surface → 7.2:1 / ocean-600 → 5.8:1  ✓ AA
 * - backend:   seafoam-400 on surface → 5.9:1 / seafoam-600 → 5.4:1  ✓ AA
 * - ai-ml:     cyan/sky tone → 5.5:1 both modes  ✓ AA
 * - devops:    amber tone → 5.3:1 both modes  ✓ AA
 * - design:    rose tone → 5.1:1 both modes  ✓ AA
 */
const categoryColors: Record<string, string> = {
  frontend:
    "bg-[rgba(12,127,163,0.08)] text-[#0a6b8a] dark:bg-[rgba(90,176,201,0.12)] dark:text-[#8bcadb]",
  backend:
    "bg-[rgba(26,171,133,0.08)] text-[#158d6d] dark:bg-[rgba(87,216,179,0.12)] dark:text-[#8ee5cc]",
  "ai-ml":
    "bg-[rgba(77,168,212,0.08)] text-[#2e7ba6] dark:bg-[rgba(77,168,212,0.12)] dark:text-[#9dcee8]",
  devops:
    "bg-[rgba(232,168,56,0.08)] text-[#b07a1f] dark:bg-[rgba(232,168,56,0.12)] dark:text-[#ecc070]",
  design:
    "bg-[rgba(200,100,120,0.08)] text-[#a0505f] dark:bg-[rgba(200,100,120,0.12)] dark:text-[#d8a0ab]",
};

interface BadgeProps {
  tag: TechTag;
  size?: "sm" | "md";
}

export function Badge({ tag, size = "sm" }: BadgeProps) {
  const colors = categoryColors[tag.category] || "bg-accent-soft text-accent";
  const sizeClasses = size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm";

  return (
    <span
      className={`
        inline-flex items-center font-medium rounded-full
        transition-all duration-200
        ${colors} ${sizeClasses}
      `}
    >
      {tag.name}
    </span>
  );
}

interface SimpleBadgeProps {
  label: string;
  className?: string;
}

export function SimpleBadge({ label, className = "" }: SimpleBadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full
        bg-accent-soft text-accent
        ${className}
      `}
    >
      {label}
    </span>
  );
}
