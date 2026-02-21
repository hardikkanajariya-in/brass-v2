import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import {
  ClipboardCheck,
  Gauge,
  Eye,
  PackageCheck,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { SectionHeading } from "@/components/content/section-heading";
import { FeatureCard } from "@/components/content/feature-card";
import { CertificationCard } from "@/components/content/certification-card";
import { getCertifications } from "@/lib/data";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("seo");
  return {
    title: t("quality.title"),
    description: t("quality.description"),
  };
}

const PROCESS_STEPS = [
  { key: "incoming", icon: ClipboardCheck },
  { key: "inProcess", icon: Gauge },
  { key: "final", icon: Eye },
  { key: "dispatch", icon: PackageCheck },
] as const;

export default function QualityPage() {
  const t = useTranslations("quality");
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

      {/* Quality Process */}
      <Section>
        <Container>
          <SectionHeading
            title={t("process.title")}
            subtitle={t("process.subtitle")}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map(({ key, icon }, index) => (
              <div key={key} className="relative">
                <div className="absolute -left-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-white">
                  {index + 1}
                </div>
                <FeatureCard
                  icon={icon}
                  title={t(`process.${key}.title`)}
                  description={t(`process.${key}.desc`)}
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Standards */}
      <Section background="muted">
        <Container>
          <SectionHeading
            title={t("standards.title")}
            subtitle={t("standards.subtitle")}
          />
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
