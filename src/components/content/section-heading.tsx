import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <div
        className={cn(
          "mb-4 h-1 w-12 rounded-full bg-brand-primary",
          align === "center" ? "mx-auto" : ""
        )}
      />
      <h2 className="text-2xl font-bold text-brand-secondary md:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-neutral-600 md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
