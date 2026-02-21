import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/content/section-heading";
import { ProductCard } from "@/components/products/product-card";
import type { Product } from "@/types";
import { getRelatedProducts } from "@/lib/data";

interface RelatedProductsProps {
  product: Product;
}

export function RelatedProducts({ product }: RelatedProductsProps) {
  const t = useTranslations("products");
  const related = getRelatedProducts(product, 4);

  if (related.length === 0) return null;

  return (
    <section className="py-spacing-section-mobile md:py-spacing-section">
      <SectionHeading title={t("relatedProducts")} />
      <div className="grid grid-cols-1 gap-spacing-card-gap sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {related.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
