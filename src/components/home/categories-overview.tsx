import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/content/section-heading";
import { CategoryCard } from "@/components/products/category-card";
import { getCategories } from "@/lib/data";

export function CategoriesOverview() {
  const t = useTranslations("home.sections");
  const categories = getCategories();

  return (
    <Section>
      <Container>
        <SectionHeading
          title={t("ourProducts")}
          subtitle={t("ourProductsSubtitle")}
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
