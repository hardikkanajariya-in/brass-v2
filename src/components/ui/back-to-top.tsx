"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useTranslations } from "next-intl";

export function BackToTop() {
  const t = useTranslations("common");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed right-4 bottom-4 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-white shadow-lg transition-all duration-300 hover:bg-brand-primary-dark hover:shadow-xl sm:right-8 sm:bottom-8 sm:h-12 sm:w-12"
      aria-label={t("buttons.backToTop")}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
