import { useTranslations } from "next-intl";
import { Shield, Clock, Globe, Cog, Award, DollarSign } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/content/section-heading";
import { FeatureCard } from "@/components/content/feature-card";

const FEATURES = [
  { key: "quality", icon: Shield },
  { key: "delivery", icon: Clock },
  { key: "global", icon: Globe },
  { key: "precision", icon: Cog },
  { key: "certified", icon: Award },
  { key: "competitive", icon: DollarSign },
] as const;

export function WhyChooseUs() {
  const t = useTranslations("home");

  return (
    <Section>
      <Container>
        <SectionHeading
          title={t("sections.whyChooseUs")}
          subtitle={t("sections.whyChooseUsSubtitle")}
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {FEATURES.map(({ key, icon }) => (
            <FeatureCard
              key={key}
              icon={icon}
              title={t(`whyChooseUs.${key}.title`)}
              description={t(`whyChooseUs.${key}.desc`)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
