import { cn } from "@/lib/utils";

type PlaceholderShape = "hexagon" | "circle" | "rectangle";

interface PlaceholderImageProps {
  label?: string;
  shape?: PlaceholderShape;
  className?: string;
}

export function PlaceholderImage({
  label = "",
  shape = "rectangle",
  className,
}: PlaceholderImageProps) {
  const initial = label ? label.charAt(0).toUpperCase() : "B";

  if (shape === "circle") {
    return (
      <div
        className={cn(
          "flex items-center justify-center rounded-full bg-brand-primary/10",
          className
        )}
      >
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="var(--colors-brand-primary)"
            opacity="0.15"
          />
          <text
            x="50"
            y="55"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="var(--colors-brand-primary)"
            fontSize="36"
            fontWeight="600"
          >
            {initial}
          </text>
        </svg>
      </div>
    );
  }

  if (shape === "hexagon") {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-brand-primary/5",
          className
        )}
      >
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <polygon
            points="50,5 93,25 93,75 50,95 7,75 7,25"
            fill="var(--colors-brand-primary)"
            opacity="0.12"
          />
          <text
            x="50"
            y="55"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="var(--colors-brand-primary)"
            fontSize="28"
            fontWeight="600"
          >
            {label || "B"}
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center bg-brand-primary/5",
        className
      )}
    >
      <svg viewBox="0 0 200 150" className="h-full w-full">
        <rect
          width="200"
          height="150"
          fill="var(--colors-brand-primary)"
          opacity="0.08"
        />
        <text
          x="100"
          y="80"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="var(--colors-brand-primary)"
          fontSize="16"
          fontWeight="500"
        >
          {label || "Image"}
        </text>
      </svg>
    </div>
  );
}
