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
          <div className="relative overflow-hidden py-12 text-center text-white md:py-16">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/5" />
            <h1 className="relative text-3xl font-bold md:text-4xl lg:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="relative mx-auto mt-4 max-w-2xl text-lg text-white/80">
              {t("hero.subtitle")}
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            {sections.map(({ key }, index) => (
              <div key={key} className="rounded-xl border border-neutral-100 bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-sm font-bold text-brand-primary">
                    {index + 1}
                  </span>
                  <h2 className="text-xl font-bold text-brand-secondary">
                    {t(`${key}.title`)}
                  </h2>
                </div>
                <p className="pl-11 leading-relaxed text-neutral-600">
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
