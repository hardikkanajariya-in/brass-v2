import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative rounded-card border border-neutral-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="absolute inset-y-0 left-0 w-1 rounded-l-card bg-brand-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-primary/10 transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-white">
        <Icon className="h-7 w-7 text-brand-primary transition-colors duration-300 group-hover:text-white" />
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
