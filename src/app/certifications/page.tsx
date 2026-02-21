import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { SectionHeading } from "@/components/content/section-heading";
import { CertificationCard } from "@/components/content/certification-card";
import { getCertifications } from "@/lib/data";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("seo");
  return {
    title: t("certifications.title"),
    description: t("certifications.description"),
  };
}

export default function CertificationsPage() {
  const t = useTranslations("certifications");
  const certifications = getCertifications();

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
          <p className="mx-auto mb-10 max-w-3xl text-center leading-relaxed text-neutral-600">
            {t("intro")}
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <CertificationCard key={cert.id} certification={cert} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
