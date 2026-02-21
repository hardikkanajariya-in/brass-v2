import type { Milestone } from "@/types";

interface TimelineProps {
  milestones: Milestone[];
}

export function Timeline({ milestones }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line - visible on both mobile (left) and desktop (center) */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-brand-primary/20 md:left-1/2" />

      <div className="space-y-8">
        {milestones.map((milestone, index) => (
          <div
            key={milestone.year}
            className={`relative flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Dot - visible on both mobile and desktop */}
            <div className="absolute left-4 top-5 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-brand-primary bg-white md:left-1/2 md:top-1" />

            {/* Content */}
            <div className="w-full pl-10 md:w-1/2 md:pl-0">
              <div
                className={`rounded-card bg-white p-5 shadow-card ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <span className="inline-block rounded-full bg-brand-primary px-3 py-1 text-xs font-semibold text-white">
                  {milestone.year}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-brand-secondary">
                  {milestone.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  {milestone.description}
                </p>
              </div>
            </div>

            {/* Spacer for other side */}
            <div className="hidden w-1/2 md:block" />
          </div>
        ))}
      </div>
    </div>
  );
}
