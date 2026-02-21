import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Target, Eye, Building2, Globe, Award } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { SectionHeading } from "@/components/content/section-heading";
import { Timeline } from "@/components/content/timeline";
import { TeamMember } from "@/components/content/team-member";
import { FeatureCard } from "@/components/content/feature-card";
import { CTASection } from "@/components/home/cta-section";
import { getCompanyInfo } from "@/lib/data";
import * as LucideIcons from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("seo");
  return {
    title: t("about.title"),
    description: t("about.description"),
  };
}

export default function AboutPage() {
  const t = useTranslations("about");
  const company = getCompanyInfo();

  return (
    <>
      <Breadcrumb />

      {/* Hero */}
      <Section background="brand">
        <Container>
          <div className="relative overflow-hidden py-12 text-center text-white md:py-16">
            {/* Decorative circles */}
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

      {/* Overview with stats strip */}
      <Section>
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10">
                  <Building2 className="h-6 w-6 text-brand-primary" />
                </div>
                <div className="h-px flex-1 bg-brand-primary/20" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-brand-secondary md:text-3xl">
                {t("overview.title")}
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                {company.description}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-xl border border-neutral-100 bg-white p-5 text-center shadow-sm">
                <p className="text-3xl font-bold text-brand-primary">30+</p>
                <p className="mt-1 text-sm text-neutral-500">Years Experience</p>
              </div>
              <div className="rounded-xl border border-neutral-100 bg-white p-5 text-center shadow-sm">
                <Globe className="mx-auto mb-2 h-6 w-6 text-brand-primary" />
                <p className="text-3xl font-bold text-brand-primary">45+</p>
                <p className="mt-1 text-sm text-neutral-500">Countries Served</p>
              </div>
              <div className="rounded-xl border border-neutral-100 bg-white p-5 text-center shadow-sm">
                <Award className="mx-auto mb-2 h-6 w-6 text-brand-primary" />
                <p className="text-3xl font-bold text-brand-primary">ISO</p>
                <p className="mt-1 text-sm text-neutral-500">Certified Quality</p>
              </div>
              <div className="rounded-xl border border-neutral-100 bg-white p-5 text-center shadow-sm">
                <p className="text-3xl font-bold text-brand-primary">55+</p>
                <p className="mt-1 text-sm text-neutral-500">Product Lines</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section background="muted">
        <Container>
          <SectionHeading
            title={t("mission.title") + " & " + t("vision.title")}
            subtitle="Guiding principles that drive everything we do"
          />
          <div className="grid gap-8 md:gap-10 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-card bg-white p-8 shadow-card">
              <div className="absolute inset-y-0 left-0 w-1 bg-brand-primary" />
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10">
                <Target className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-brand-secondary">
                {t("mission.title")}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {t("mission.content")}
              </p>
            </div>
            <div className="relative overflow-hidden rounded-card bg-white p-8 shadow-card">
              <div className="absolute inset-y-0 left-0 w-1 bg-brand-secondary" />
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-secondary/10">
                <Eye className="h-6 w-6 text-brand-secondary" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-brand-secondary">
                {t("vision.title")}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {t("vision.content")}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Values */}
      <Section>
        <Container>
          <SectionHeading
            title={t("values.title")}
            subtitle={t("values.subtitle")}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {company.coreValues.map((value) => {
              const iconName = value.lucideIcon as keyof typeof LucideIcons;
              const Icon = (LucideIcons[iconName] as LucideIcons.LucideIcon) || LucideIcons.Star;
              return (
                <FeatureCard
                  key={value.id}
                  icon={Icon}
                  title={value.title}
                  description={value.description}
                />
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section background="muted">
        <Container>
          <SectionHeading
            title={t("timeline.title")}
            subtitle={t("timeline.subtitle")}
          />
          <Timeline milestones={company.milestones} />
        </Container>
      </Section>

      {/* Team */}
      <Section>
        <Container>
          <SectionHeading
            title={t("team.title")}
            subtitle={t("team.subtitle")}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {company.leadership.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
