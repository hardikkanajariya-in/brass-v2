import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import Link from "next/link";
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

      {/* Service detail sections */}
      {services.map((service) => (
        <Section key={service.id} id={service.slug} background="muted">
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-4 text-2xl font-bold text-brand-secondary">
                {service.name}
              </h2>
              <p className="mb-6 leading-relaxed text-neutral-600">
                {service.description}
              </p>
              {service.capabilities.length > 0 && (
                <ul className="grid gap-2 sm:grid-cols-2">
                  {service.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-start gap-2 text-sm text-neutral-600"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                      {cap}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Container>
        </Section>
      ))}

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
