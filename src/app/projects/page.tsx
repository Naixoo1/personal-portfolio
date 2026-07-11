import type { Metadata } from "next";
import { ProjectGrid } from "@/components/organisms/ProjectGrid";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Technical deep dives from 7+ years of building production systems across AI, fintech, and healthcare.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-16">
      <ProjectGrid
        projects={projects}
        title="All Case Studies"
        subtitle="End-to-end systems engineered for performance, security, and scale"
        showViewAll={false}
      />
    </div>
  );
}
