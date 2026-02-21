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
        "group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/50 hover:shadow-lg",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
        <h3 className="text-base font-semibold text-brand-secondary transition-colors duration-200 group-hover:text-brand-primary">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-neutral-500">
          {truncate(product.shortDescription, 100)}
        </p>
        <div className="mt-4 flex items-center gap-1 border-t border-neutral-100 pt-4 text-sm font-medium text-brand-primary">
          {t("common.buttons.viewDetails")}
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
