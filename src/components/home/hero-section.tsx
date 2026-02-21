import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function HeroSection() {
  const t = useTranslations("home.hero");

  return (
    <section
      className="relative flex min-h-[80vh] items-center overflow-hidden py-20 lg:min-h-screen lg:py-0"
      style={{
        background: "var(--gradients-hero)",
      }}
    >
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float absolute top-20 left-[10%] h-32 w-32 rotate-12 opacity-10">
          <svg viewBox="0 0 100 100">
            <polygon
              points="50,5 93,25 93,75 50,95 7,75 7,25"
              fill="var(--colors-brand-primary)"
            />
          </svg>
        </div>
        <div className="animate-float-delayed absolute top-[40%] right-[15%] h-48 w-48 -rotate-6 opacity-8">
          <svg viewBox="0 0 100 100">
            <polygon
              points="50,5 93,25 93,75 50,95 7,75 7,25"
              fill="var(--colors-brand-primary-light)"
            />
          </svg>
        </div>
        <div className="animate-float-slow absolute bottom-20 left-[30%] h-24 w-24 rotate-45 opacity-6">
          <svg viewBox="0 0 100 100">
            <polygon
              points="50,5 93,25 93,75 50,95 7,75 7,25"
              fill="var(--colors-brand-primary)"
            />
          </svg>
        </div>
        <div className="animate-spin-slow absolute top-[60%] left-[70%] h-64 w-64 opacity-5">
          <svg viewBox="0 0 100 100">
            <polygon
              points="50,5 93,25 93,75 50,95 7,75 7,25"
              fill="var(--colors-brand-primary-light)"
              strokeWidth="1"
              stroke="var(--colors-brand-primary)"
            />
          </svg>
        </div>
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Text */}
          <div className="animate-fade-in-up">
            <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-5 max-w-xl text-base text-neutral-200 md:text-lg lg:text-xl">
              {t("subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/request-quote">
                <Button variant="primary" size="lg">
                  {t("cta1")}
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-brand-secondary"
                  iconRight={<ArrowRight className="h-5 w-5" />}
                >
                  {t("cta2")}
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats - visible on all screens */}
          <div>
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              {[
                { value: "30+", label: "years" },
                { value: "55+", label: "products" },
                { value: "45+", label: "countries" },
                { value: "1M+", label: "capacity" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-card border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm sm:p-6"
                >
                  <div className="text-2xl font-bold text-brand-primary-light sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-white/70 sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
