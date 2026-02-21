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
        "group relative flex flex-col items-center overflow-hidden rounded-card border border-neutral-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary hover:shadow-lg",
        className
      )}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-primary to-brand-primary-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110">
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
