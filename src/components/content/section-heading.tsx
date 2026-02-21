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
          "mb-4 inline-flex items-center gap-2",
          align === "center" ? "justify-center w-full" : ""
        )}
      >
        <div className="h-px w-8 bg-brand-primary" />
        <div className="h-2 w-2 rounded-full bg-brand-primary" />
        <div className="h-px w-8 bg-brand-primary" />
      </div>
      <h2 className="text-2xl font-bold text-brand-secondary md:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-base text-neutral-600 md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
