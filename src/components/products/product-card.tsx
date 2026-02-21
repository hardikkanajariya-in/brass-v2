import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/types";
import { cn } from "@/lib/utils";
import { truncate } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const t = useTranslations();

  return (
    <Link
      href={`/products/${product.categorySlug}/${product.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-card border border-transparent bg-white shadow-card transition-all duration-300 hover:border-brand-primary/50 hover:shadow-lg",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {product.isFeatured && (
            <Badge variant="brand">{t("common.labels.featured")}</Badge>
          )}
          {product.isNew && (
            <Badge variant="secondary">{t("common.labels.new")}</Badge>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-brand-secondary group-hover:text-brand-primary">
          {product.name}
        </h3>
        <p className="mt-1.5 line-clamp-2 flex-1 text-sm text-neutral-600">
          {truncate(product.shortDescription, 100)}
        </p>
        <div className="mt-3 flex items-center gap-1 text-sm font-medium text-brand-primary">
          {t("common.buttons.viewDetails")}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
