import { cn } from "@/lib/utils";
import type { ReactNode, ElementType, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: ElementType;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  children: ReactNode;
  className?: string;
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-white hover:bg-brand-primary-dark shadow-button active:scale-[0.98]",
  secondary:
    "bg-brand-secondary text-white hover:bg-brand-secondary-dark active:scale-[0.98]",
  outline:
    "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white",
  ghost:
    "text-brand-primary hover:bg-brand-primary/10",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-2.5 text-sm gap-2",
  lg: "px-8 py-3 text-base gap-2",
};

export function Button({
  variant = "primary",
  size = "md",
  as,
  iconLeft,
  iconRight,
  children,
  className,
  ...props
}: ButtonProps) {
  const Component = as || "button";

  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center rounded-button font-medium transition-all duration-300",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {iconLeft && <span className="shrink-0">{iconLeft}</span>}
      {children}
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </Component>
  );
}
