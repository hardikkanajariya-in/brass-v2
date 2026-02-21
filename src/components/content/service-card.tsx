import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  learnMoreLabel: string;
}

export function ServiceCard({ service, learnMoreLabel }: ServiceCardProps) {
  const iconName = service.lucideIcon as keyof typeof LucideIcons;
  const Icon = (LucideIcons[iconName] as LucideIcons.LucideIcon) || LucideIcons.Wrench;

  return (
    <div className="group flex h-full flex-col rounded-card bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-lg">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary/10 transition-colors duration-300 group-hover:bg-brand-primary/20">
        <Icon className="h-7 w-7 text-brand-primary" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-brand-secondary">
        {service.name}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-neutral-600">
        {service.shortDescription}
      </p>

      <ul className="mb-4 space-y-1">
        {service.features.slice(0, 3).map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm text-neutral-600"
          >
            <LucideIcons.Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href={`/services#${service.slug}`}
        className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-brand-primary transition-colors hover:text-brand-primary-dark"
      >
        {learnMoreLabel}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
