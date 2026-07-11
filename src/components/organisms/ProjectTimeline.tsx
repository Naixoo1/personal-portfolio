"use client";

import { TimelineNode } from "@/components/molecules/TimelineNode";
import type { TimelineEvent } from "@/lib/data";

export interface ProjectTimelineProps {
  events: TimelineEvent[];
}

export function ProjectTimeline({ events }: ProjectTimelineProps) {
  return (
    <section id="timeline" className="py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
          Delivery Timeline
        </h3>

        <div className="relative">
          {events.map((event, i) => (
            <TimelineNode
              key={event.id}
              event={event}
              index={i}
              isLast={i === events.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
