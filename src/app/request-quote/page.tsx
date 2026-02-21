import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { ShieldCheck, Clock, Globe, FileText } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { QuoteRequestForm } from "@/components/forms/quote-request-form";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("seo");
  return {
    title: t("quote.title"),
    description: t("quote.description"),
  };
}

export default function RequestQuotePage() {
  const t = useTranslations("quote");

  const trustItems = [
    { icon: Clock, label: "Response within 24 hours" },
    { icon: Globe, label: "45+ countries served" },
    { icon: ShieldCheck, label: "ISO certified quality" },
    { icon: FileText, label: "Detailed quotation" },
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
            {/* Trust indicators sidebar */}
            <div>
              <h2 className="mb-6 text-xl font-bold text-brand-secondary">Why Choose Us</h2>
              <div className="space-y-5">
                {trustItems.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 rounded-xl border border-neutral-100 bg-white p-4 shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10">
                      <Icon className="h-5 w-5 text-brand-primary" />
                    </div>
                    <span className="text-sm font-medium text-neutral-700">{label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-brand-primary/20 bg-brand-primary/5 p-5">
                <p className="text-sm leading-relaxed text-neutral-600">
                  Fill out the form and our team will provide a detailed quotation tailored to your requirements within 24 hours.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="mb-6 text-xl font-bold text-brand-secondary">Quote Details</h2>
                <QuoteRequestForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
