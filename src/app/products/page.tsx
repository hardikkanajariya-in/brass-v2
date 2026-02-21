import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { ProductFilter } from "@/components/products/product-filter";
import { getProducts, getCategories } from "@/lib/data";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("seo");
  return {
    title: t("products.title"),
    description: t("products.description"),
  };
}

export default function ProductsPage() {
  const t = useTranslations("products");
  const products = getProducts();
  const categories = getCategories();

  return (
    <>
      <Breadcrumb />
      <Section background="brand">
        <Container>
          <div className="py-12 text-center text-white">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              {t("hero.subtitle")}
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <ProductFilter products={products} categories={categories} />
        </Container>
      </Section>
    </>
  );
}
