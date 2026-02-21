import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { SectionHeading } from "@/components/content/section-heading";
import { FaqAccordion } from "@/components/content/faq-accordion";
import { ContactForm } from "@/components/forms/contact-form";
import { getFAQs } from "@/lib/data";
import { siteConfig } from "../../../site.config";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("seo");
  return {
    title: t("contact.title"),
    description: t("contact.description"),
  };
}

export default function ContactPage() {
  const t = useTranslations("contact");
  const faqs = getFAQs().slice(0, 6);

  const contactItems = [
    {
      icon: MapPin,
      label: t("info.address"),
      value: `${siteConfig.contact.address.street}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.state}, ${siteConfig.contact.address.country} - ${siteConfig.contact.address.pincode}`,
    },
    {
      icon: Phone,
      label: t("info.phone"),
      value: siteConfig.contact.phone,
      href: `tel:${siteConfig.contact.phone}`,
    },
    {
      icon: Mail,
      label: t("info.email"),
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
    },
    {
      icon: Clock,
      label: t("info.hours"),
      value: siteConfig.contact.workingHours,
    },
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

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div>
              <h2 className="mb-6 text-xl font-bold text-brand-secondary">Get in Touch</h2>
              <div className="space-y-5">
                {contactItems.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="group flex gap-4 rounded-xl border border-neutral-100 bg-white p-4 transition-all duration-200 hover:border-brand-primary/20 hover:shadow-sm">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 transition-colors duration-200 group-hover:bg-brand-primary">
                      <Icon className="h-5 w-5 text-brand-primary transition-colors duration-200 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-brand-secondary">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm text-neutral-600 transition-colors hover:text-brand-primary"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-neutral-600">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="mb-6 text-xl font-bold text-brand-secondary">Send a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQs */}
      {faqs.length > 0 && (
        <Section background="muted">
          <Container>
            <SectionHeading
              title={t("faqsTitle")}
              subtitle={t("faqsSubtitle")}
            />
            <div className="mx-auto max-w-3xl">
              <FaqAccordion faqs={faqs} />
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
