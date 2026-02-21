import Link from "next/link";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  const t = useTranslations("errors.404");

  return (
    <div className="flex min-h-[60vh] items-center">
      <Container>
        <div className="text-center">
          <h1 className="text-7xl font-bold text-brand-primary">404</h1>
          <h2 className="mt-4 text-2xl font-bold text-brand-secondary">
            {t("title")}
          </h2>
          <p className="mt-2 text-neutral-600">{t("subtitle")}</p>
          <div className="mt-8">
            <Button as={Link} href="/">
              {t("backHome")}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
