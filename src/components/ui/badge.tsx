import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BadgeVariant = "brand" | "secondary" | "outline";

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  brand: "bg-brand-primary/10 text-brand-primary-dark",
  secondary: "bg-brand-secondary/10 text-brand-secondary",
  outline: "border border-brand-primary text-brand-primary",
};

export function Badge({
  variant = "brand",
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
