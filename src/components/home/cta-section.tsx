import Link from "next/link";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const t = useTranslations("home.sections");

  return (
    <section
      className="relative overflow-hidden py-spacing-section-mobile md:py-spacing-section"
      style={{
        background: "var(--gradients-hero)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
      <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-white/5" />
      <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <Container>
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            {t("cta")}
          </h2>
          <p className="mt-4 text-base text-white/80 md:text-lg">
            {t("ctaSubtitle")}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/request-quote">
              <Button variant="primary" size="lg">
                {t("ctaButton")}
              </Button>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-button border-2 border-white/30 px-6 py-3 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
