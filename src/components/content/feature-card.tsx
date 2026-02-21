import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group rounded-card bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-lg">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary/10 transition-colors duration-300 group-hover:bg-brand-primary/20">
        <Icon className="h-7 w-7 text-brand-primary" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-brand-secondary">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-neutral-600">
        {description}
      </p>
    </div>
  );
}
