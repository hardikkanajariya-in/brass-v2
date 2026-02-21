import Link from "next/link";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";
import type { Category } from "@/types";
import type { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  category: Category;
  className?: string;
}

function getIcon(iconName: string): LucideIcon {
  const icons = LucideIcons as unknown as Record<string, LucideIcon>;
  return icons[iconName] || LucideIcons.Box;
}

export function CategoryCard({ category, className }: CategoryCardProps) {
  const Icon = getIcon(category.lucideIcon);

  return (
    <Link
      href={`/products/${category.slug}`}
      className={cn(
        "group flex flex-col items-center rounded-card border border-neutral-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-brand-primary hover:bg-brand-primary/5 hover:shadow-card",
        className
      )}
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-base font-semibold text-brand-secondary">
        {category.name}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm text-neutral-500">
        {category.description}
      </p>
      <span className="mt-3 inline-flex items-center rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-medium text-brand-primary">
        {category.productCount} products
      </span>
    </Link>
  );
}
