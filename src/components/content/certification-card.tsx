import * as LucideIcons from "lucide-react";
import type { Certification } from "@/types";

interface CertificationCardProps {
  certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
  const iconName = certification.lucideIcon as keyof typeof LucideIcons;
  const Icon = (LucideIcons[iconName] as LucideIcons.LucideIcon) || LucideIcons.Award;

  return (
    <div className="group rounded-card bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-lg">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary/10 transition-colors duration-300 group-hover:bg-brand-primary/20">
        <Icon className="h-7 w-7 text-brand-primary" />
      </div>

      <h3 className="mb-1 text-lg font-semibold text-brand-secondary">
        {certification.name}
      </h3>
      <p className="text-xs font-medium text-brand-primary">
        {certification.body}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-neutral-600">
        {certification.description}
      </p>

      <div className="mt-4 flex items-center gap-3 border-t border-neutral-100 pt-3 text-xs text-neutral-500">
        <span>Certified: {certification.year}</span>
        <span>·</span>
        <span>{certification.validity}</span>
      </div>
    </div>
  );
}
