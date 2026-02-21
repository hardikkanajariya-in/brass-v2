import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { ProductGallery } from "@/components/products/product-gallery";
import { ProductSpecs } from "@/components/products/product-specs";
import { RelatedProducts } from "@/components/products/related-products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductJsonLd } from "@/components/seo/json-ld";
import {
  getProducts,
  getProductBySlug,
  getCategories,
  getCategoryBySlug,
} from "@/lib/data";
import { CheckCircle } from "lucide-react";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  const products = getProducts();
  const categories = getCategories();
  return products.map((p) => {
    const cat = categories.find((c) => c.id === p.categoryId);
    return { category: cat?.slug ?? p.categorySlug, slug: p.slug };
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug, category: catSlug } = await params;
  const t = await getTranslations("products");
  const tCommon = await getTranslations("common");
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryBySlug(catSlug);
  const allImages = [product.image, ...product.gallery];

  return (
    <>
      <ProductJsonLd product={product} />
      <Breadcrumb />

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Gallery */}
            <ProductGallery images={allImages} productName={product.name} />

            {/* Product info */}
            <div>
              <div className="mb-3 flex flex-wrap gap-2">
                {product.isFeatured && (
                  <Badge variant="brand">{tCommon("labels.featured")}</Badge>
                )}
                {product.isNew && (
                  <Badge variant="secondary">{tCommon("labels.new")}</Badge>
                )}
                {category && (
                  <Badge variant="outline">
                    <Link href={`/products/${category.slug}`}>
                      {category.name}
                    </Link>
                  </Badge>
                )}
              </div>

              <h1 className="text-2xl font-bold text-brand-secondary md:text-3xl">
                {product.name}
              </h1>

              <p className="mt-4 leading-relaxed text-neutral-600">
                {product.description}
              </p>

              {/* Features */}
              {product.features.length > 0 && (
                <div className="mt-6">
                  <h3 className="mb-2 text-lg font-semibold text-brand-secondary">
                    {t("features")}
                  </h3>
                  <ul className="space-y-1.5">
                    {product.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-neutral-600"
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Applications */}
              {product.applications.length > 0 && (
                <div className="mt-6">
                  <h3 className="mb-2 text-lg font-semibold text-brand-secondary">
                    {t("applications")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((a) => (
                      <Badge key={a} variant="outline">
                        {a}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8">
                <Button as={Link} href="/request-quote" size="lg">
                  {t("requestQuote")}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Specifications */}
      {product.specifications && (
        <Section background="muted">
          <Container>
            <h2 className="mb-6 text-2xl font-bold text-brand-secondary">
              {t("specifications")}
            </h2>
            <ProductSpecs specifications={product.specifications} />
          </Container>
        </Section>
      )}

      {/* Related Products */}
      <Section>
        <Container>
          <RelatedProducts product={product} />
        </Container>
      </Section>
    </>
  );
}
