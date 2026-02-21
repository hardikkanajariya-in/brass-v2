import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
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

      {/* Overview */}
      <Section>
        <Container>
          <SectionHeading
            title={t("overview.title")}
            subtitle={t("overview.subtitle")}
          />
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-neutral-600 leading-relaxed">
              {company.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section background="muted">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-card bg-white p-8 shadow-card">
              <h3 className="mb-3 text-xl font-bold text-brand-secondary">
                {t("mission.title")}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {t("mission.content")}
              </p>
            </div>
            <div className="rounded-card bg-white p-8 shadow-card">
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
