"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("errors.500");

  return (
    <div className="flex min-h-[60vh] items-center">
      <Container>
        <div className="text-center">
          <h1 className="text-7xl font-bold text-brand-primary">500</h1>
          <h2 className="mt-4 text-2xl font-bold text-brand-secondary">
            {t("title")}
          </h2>
          <p className="mt-2 text-neutral-600">{t("subtitle")}</p>
          <div className="mt-8">
            <Button onClick={reset}>
              {t("retry")}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
