import Link from "next/link";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const t = useTranslations("home.sections");

  return (
    <section
      className="relative py-spacing-section-mobile md:py-spacing-section"
      style={{
        background: "var(--gradients-hero)",
      }}
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            {t("cta")}
          </h2>
          <p className="mt-4 text-base text-white/80 md:text-lg">
            {t("ctaSubtitle")}
          </p>
          <div className="mt-8">
            <Link href="/request-quote">
              <Button variant="primary" size="lg">
                {t("ctaButton")}
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
