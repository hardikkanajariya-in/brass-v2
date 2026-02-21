import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/content/section-heading";
import { StatCounter } from "@/components/content/stat-counter";

export function StatsSection() {
  const t = useTranslations("home");

  const stats = [
    { value: 30, suffix: "+", label: t("stats.years") },
    { value: 55, suffix: "+", label: t("stats.products") },
    { value: 45, suffix: "+", label: t("stats.countries") },
    { value: 1000000, suffix: "+", label: t("stats.capacity") },
  ];

  return (
    <Section background="dark">
      <Container>
        <SectionHeading
          title={t("sections.stats")}
          subtitle={t("sections.statsSubtitle")}
          className="text-white [&_h2]:text-white [&_p]:text-white/70 [&_.h-px]:bg-white/30 [&_.h-2]:bg-white/50"
        />
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="relative rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
