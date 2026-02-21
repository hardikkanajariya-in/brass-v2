"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Phone, Menu, ChevronDown } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";
import { siteConfig } from "../../../site.config";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = siteConfig.navigation.filter(
    (item) =>
      item.id !== "request-quote" &&
      (item.id !== "blog" || siteConfig.features.showBlog) &&
      (item.id !== "infrastructure" || siteConfig.features.showInfrastructure)
  );

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white shadow-md"
            : "bg-transparent"
        )}
      >
        <Container>
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1">
              <span className="text-xl font-bold text-brand-primary md:text-2xl">
                BrassCraft
              </span>
              <span
                className={cn(
                  "text-xl font-semibold md:text-2xl",
                  isScrolled ? "text-brand-secondary" : "text-white"
                )}
              >
                Industries
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() =>
                    item.children ? setActiveDropdown(item.id) : undefined
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      isScrolled
                        ? "text-neutral-700 hover:text-brand-primary"
                        : "text-white/90 hover:text-white"
                    )}
                  >
                    {t(item.labelKey)}
                    {item.children && (
                      <ChevronDown className="h-3.5 w-3.5" />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && activeDropdown === item.id && (
                    <div className="absolute top-full left-0 z-50 mt-0 w-64 rounded-lg border border-neutral-200 bg-white p-2 shadow-dropdown">
                      {item.children.map((child) => (
                        <Link
                          key={child.id}
                          href={child.href}
                          className="block rounded-md px-4 py-2.5 text-sm text-neutral-700 transition-colors hover:bg-brand-primary/5 hover:text-brand-primary"
                        >
                          {t(child.labelKey)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className={cn(
                  "hidden items-center gap-2 text-sm font-medium md:flex",
                  isScrolled
                    ? "text-brand-secondary"
                    : "text-white"
                )}
              >
                <Phone className="h-4 w-4" />
                <span>{siteConfig.contact.phone}</span>
              </a>
              <Link href="/request-quote" className="hidden lg:block">
                <Button variant="primary" size="sm">
                  {t("nav.requestQuote")}
                </Button>
              </Link>
              <button
                onClick={() => setIsMobileOpen(true)}
                className={cn(
                  "p-2 lg:hidden",
                  isScrolled ? "text-brand-secondary" : "text-white"
                )}
                aria-label={t("common.aria.openMenu")}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
}
