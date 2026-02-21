import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Factory, Wrench, FlaskConical, TrendingUp } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { SectionHeading } from "@/components/content/section-heading";
import { getInfrastructure } from "@/lib/data";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("seo");
  return {
    title: t("infrastructure.title"),
    description: t("infrastructure.description"),
  };
}

export default function InfrastructurePage() {
  const t = useTranslations("infrastructure");
  const infra = getInfrastructure();

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

      {/* Plant overview */}
      <Section>
        <Container>
          <SectionHeading
            title={t("plant.title")}
            subtitle={t("plant.subtitle")}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-card bg-white p-6 text-center shadow-card">
              <Factory className="mx-auto mb-3 h-10 w-10 text-brand-primary" />
              <p className="text-2xl font-bold text-brand-secondary">{infra.totalArea}</p>
              <p className="text-sm text-neutral-500">Total Area</p>
            </div>
            <div className="rounded-card bg-white p-6 text-center shadow-card">
              <Wrench className="mx-auto mb-3 h-10 w-10 text-brand-primary" />
              <p className="text-2xl font-bold text-brand-secondary">{infra.productionArea}</p>
              <p className="text-sm text-neutral-500">Production Area</p>
            </div>
            <div className="rounded-card bg-white p-6 text-center shadow-card">
              <TrendingUp className="mx-auto mb-3 h-10 w-10 text-brand-primary" />
              <p className="text-2xl font-bold text-brand-secondary">{infra.monthlyCapacity}</p>
              <p className="text-sm text-neutral-500">Monthly Capacity</p>
            </div>
            <div className="rounded-card bg-white p-6 text-center shadow-card">
              <FlaskConical className="mx-auto mb-3 h-10 w-10 text-brand-primary" />
              <p className="text-2xl font-bold text-brand-secondary">{infra.certifiedSince}</p>
              <p className="text-sm text-neutral-500">ISO Certified Since</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Machinery */}
      <Section background="muted">
        <Container>
          <SectionHeading
            title={t("machinery.title")}
            subtitle={t("machinery.subtitle")}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {infra.machinery.map((machine) => (
              <div
                key={machine.name}
                className="rounded-card bg-white p-5 shadow-card"
              >
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-semibold text-brand-secondary">
                    {machine.name}
                  </h3>
                  <span className="rounded-full bg-brand-primary/10 px-3 py-1 text-sm font-bold text-brand-primary">
                    {machine.count}
                  </span>
                </div>
                <p className="text-sm text-neutral-600">{machine.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Quality Lab */}
      <Section>
        <Container>
          <SectionHeading
            title={t("lab.title")}
            subtitle={t("lab.subtitle")}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {infra.qualityLab.map((eq) => (
              <div
                key={eq.name}
                className="rounded-card bg-white p-5 shadow-card"
              >
                <h3 className="mb-1 font-semibold text-brand-secondary">
                  {eq.name}
                </h3>
                <p className="text-sm text-neutral-600">{eq.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
