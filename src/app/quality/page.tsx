import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import {
  ClipboardCheck,
  Gauge,
  Eye,
  PackageCheck,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { SectionHeading } from "@/components/content/section-heading";
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

      {/* Quality Process — connected flow */}
      <Section>
        <Container>
          <SectionHeading
            title={t("process.title")}
            subtitle={t("process.subtitle")}
          />
          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="absolute left-0 right-0 top-[52px] hidden h-0.5 bg-gradient-to-r from-brand-primary/20 via-brand-primary/40 to-brand-primary/20 lg:block" />

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
              {PROCESS_STEPS.map(({ key, icon: Icon }, index) => (
                <div key={key} className="relative flex flex-col items-center text-center">
                  {/* Step number + icon */}
                  <div className="relative z-10 mb-5">
                    <div className="mx-auto flex h-[104px] w-[104px] items-center justify-center rounded-2xl border-2 border-brand-primary/20 bg-white shadow-md transition-all duration-300 hover:border-brand-primary hover:shadow-lg">
                      <Icon className="h-10 w-10 text-brand-primary" />
                    </div>
                    <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-white shadow-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-brand-secondary">
                    {t(`process.${key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {t(`process.${key}.desc`)}
                  </p>
                  {/* Mobile arrow */}
                  {index < PROCESS_STEPS.length - 1 && (
                    <ArrowRight className="mt-4 h-5 w-5 rotate-90 text-brand-primary/40 sm:hidden" />
                  )}
                </div>
              ))}
            </div>
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {certifications.map((cert) => (
              <CertificationCard key={cert.id} certification={cert} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
