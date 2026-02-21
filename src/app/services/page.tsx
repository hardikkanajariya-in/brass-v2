import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { SectionHeading } from "@/components/content/section-heading";
import { ServiceCard } from "@/components/content/service-card";
import { Button } from "@/components/ui/button";
import { getServices } from "@/lib/data";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("seo");
  return {
    title: t("services.title"),
    description: t("services.description"),
  };
}

export default function ServicesPage() {
  const t = useTranslations("services");
  const tCommon = useTranslations("common");
  const services = getServices();

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
          <SectionHeading
            title={t("capabilities")}
            subtitle={t("capabilitiesSubtitle")}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                learnMoreLabel={tCommon("buttons.learnMore")}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Service detail sections — alternating layout */}
      {services.map((service, index) => {
        const iconName = service.lucideIcon as keyof typeof LucideIcons;
        const Icon = (LucideIcons[iconName] as LucideIcons.LucideIcon) || LucideIcons.Wrench;
        const isEven = index % 2 === 0;

        return (
          <section
            key={service.id}
            id={service.slug}
            className={isEven ? "bg-white" : "bg-surface-muted"}
          >
            <Container>
              <div className="py-16 md:py-20">
                <div className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${!isEven ? "lg:[direction:rtl] lg:[&>*]:[direction:ltr]" : ""}`}>
                  {/* Left / Content side */}
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10">
                        <Icon className="h-6 w-6 text-brand-primary" />
                      </div>
                      <div className="h-px flex-1 bg-brand-primary/20" />
                    </div>

                    <h2 className="mb-4 text-2xl font-bold text-brand-secondary md:text-3xl">
                      {service.name}
                    </h2>
                    <p className="mb-6 text-base leading-relaxed text-neutral-600">
                      {service.description}
                    </p>

                    <Link
                      href="/request-quote"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary transition-colors hover:text-brand-primary-dark"
                    >
                      Get a Quote
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  {/* Right / Capabilities side */}
                  <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm sm:p-8">
                    <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-brand-primary">
                      Key Capabilities
                    </h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {service.capabilities.map((cap) => (
                        <div
                          key={cap}
                          className="flex items-start gap-2.5 rounded-lg bg-neutral-50 px-3 py-2.5"
                        >
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
                          <span className="text-sm leading-snug text-neutral-700">
                            {cap}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      {/* CTA */}
      <Section background="dark">
        <Container>
          <div className="py-8 text-center">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              {t("cta.title")}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/70">
              {t("cta.subtitle")}
            </p>
            <div className="mt-6">
              <Button as={Link} href="/contact" size="lg">
                {t("cta.button")}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
