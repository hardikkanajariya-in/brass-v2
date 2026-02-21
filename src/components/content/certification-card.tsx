import * as LucideIcons from "lucide-react";
import type { Certification } from "@/types";

interface CertificationCardProps {
  certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
  const iconName = certification.lucideIcon as keyof typeof LucideIcons;
  const Icon = (LucideIcons[iconName] as LucideIcons.LucideIcon) || LucideIcons.Award;

  return (
    <div className="group relative overflow-hidden rounded-card border border-neutral-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Top accent gradient */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-primary to-brand-primary-dark" />
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-primary/10 transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-white">
        <Icon className="h-7 w-7 text-brand-primary transition-colors duration-300 group-hover:text-white" />
      </div>

      <h3 className="mb-1 text-lg font-semibold text-brand-secondary">
        {certification.name}
      </h3>
      <p className="text-xs font-medium uppercase tracking-wide text-brand-primary">
        {certification.body}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-neutral-600">
        {certification.description}
      </p>

      <div className="mt-4 flex items-center gap-3 border-t border-neutral-100 pt-3 text-xs text-neutral-500">
        <span className="rounded-full bg-brand-primary/10 px-2 py-0.5 font-medium text-brand-primary">Certified: {certification.year}</span>
        <span>{certification.validity}</span>
      </div>
    </div>
  );
}
