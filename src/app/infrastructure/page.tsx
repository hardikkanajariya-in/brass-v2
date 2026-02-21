import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Factory, Wrench, FlaskConical, TrendingUp, Cog, Microscope } from "lucide-react";
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

  const plantStats = [
    { icon: Factory, value: infra.totalArea, label: "Total Area" },
    { icon: Wrench, value: infra.productionArea, label: "Production Area" },
    { icon: TrendingUp, value: infra.monthlyCapacity, label: "Monthly Capacity" },
    { icon: FlaskConical, value: infra.certifiedSince, label: "ISO Certified Since" },
  ];

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

      {/* Plant overview */}
      <Section>
        <Container>
          <SectionHeading
            title={t("plant.title")}
            subtitle={t("plant.subtitle")}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {plantStats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="group relative overflow-hidden rounded-xl border border-neutral-100 bg-white p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-primary to-brand-primary-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-primary/10 transition-colors duration-300 group-hover:bg-brand-primary">
                  <Icon className="h-7 w-7 text-brand-primary transition-colors duration-300 group-hover:text-white" />
                </div>
                <p className="text-2xl font-bold text-brand-secondary">{value}</p>
                <p className="mt-1 text-sm text-neutral-500">{label}</p>
              </div>
            ))}
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
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {infra.machinery.map((machine) => (
              <div
                key={machine.name}
                className="group relative overflow-hidden rounded-xl border border-neutral-100 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-brand-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10">
                      <Cog className="h-5 w-5 text-brand-primary" />
                    </div>
                    <h3 className="font-semibold text-brand-secondary">
                      {machine.name}
                    </h3>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-white">
                    {machine.count}
                  </span>
                </div>
                <p className="pl-[52px] text-sm text-neutral-600">{machine.description}</p>
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
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {infra.qualityLab.map((eq) => (
              <div
                key={eq.name}
                className="group relative overflow-hidden rounded-xl border border-neutral-100 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-primary to-brand-primary-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10">
                    <Microscope className="h-5 w-5 text-brand-primary" />
                  </div>
                  <h3 className="font-semibold text-brand-secondary">
                    {eq.name}
                  </h3>
                </div>
                <p className="pl-[52px] text-sm text-neutral-600">{eq.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
