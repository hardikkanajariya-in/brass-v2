import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumb } from "@/components/layout/breadcrumb";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("seo");
  return {
    title: t("privacy.title"),
    description: t("privacy.description"),
  };
}

export default function PrivacyPolicyPage() {
  const t = useTranslations("privacy");

  const sections = [
    { key: "dataCollection" },
    { key: "dataUsage" },
    { key: "cookies" },
    { key: "contactPrivacy" },
  ] as const;

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
          <div className="mx-auto max-w-3xl space-y-8">
            {sections.map(({ key }) => (
              <div key={key}>
                <h2 className="mb-3 text-xl font-bold text-brand-secondary">
                  {t(`${key}.title`)}
                </h2>
                <p className="leading-relaxed text-neutral-600">
                  {t(`${key}.content`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
