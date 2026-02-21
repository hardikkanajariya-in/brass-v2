import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/content/section-heading";
import { ProductGrid } from "@/components/products/product-grid";
import { getFeaturedProducts } from "@/lib/data";

export function FeaturedProducts() {
  const t = useTranslations();
  const products = getFeaturedProducts(8);

  return (
    <Section background="muted">
      <Container>
        <div className="flex items-end justify-between">
          <SectionHeading
            title={t("common.labels.featured")}
            align="left"
          />
          <Link
            href="/products"
            className="mb-10 flex items-center gap-1 text-sm font-medium text-brand-primary hover:underline md:mb-14"
          >
            {t("common.labels.viewAll")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <ProductGrid products={products} />
      </Container>
    </Section>
  );
}
