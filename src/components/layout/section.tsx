import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionBackground = "default" | "muted" | "dark" | "brand";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: SectionBackground;
  id?: string;
}

const backgroundClasses: Record<SectionBackground, string> = {
  default: "bg-surface-default",
  muted: "bg-surface-muted",
  dark: "bg-brand-secondary text-white",
  brand: "bg-brand-primary text-white",
};

export function Section({
  children,
  className,
  background = "default",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-spacing-section-mobile md:py-spacing-section",
        backgroundClasses[background],
        className
      )}
    >
      {children}
    </section>
  );
}
