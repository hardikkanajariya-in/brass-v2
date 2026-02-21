"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Phone, Menu, ChevronDown } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";
import { siteConfig } from "../../../site.config";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Start with solid header on inner pages to avoid flash of transparent nav
  const [isScrolled, setIsScrolled] = useState(!isHomePage);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        setIsScrolled(window.scrollY > 50);
      } else {
        setIsScrolled(true); // Always solid on inner pages
      }
    };
    // Run immediately to set correct state
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

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
            <Link href="/" className="flex shrink-0 items-center gap-1">
              <span className="text-lg font-bold text-brand-primary md:text-xl lg:text-2xl">
                BrassCraft
              </span>
              <span
                className={cn(
                  "text-lg font-semibold md:text-xl lg:text-2xl",
                  isScrolled ? "text-brand-secondary" : "text-white"
                )}
              >
                Industries
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-0.5 xl:flex">
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
                      "flex items-center gap-0.5 whitespace-nowrap rounded-md px-2.5 py-2 text-[13px] font-medium transition-colors",
                      isScrolled
                        ? "text-neutral-700 hover:text-brand-primary"
                        : "text-white/90 hover:text-white"
                    )}
                  >
                    {t(item.labelKey)}
                    {item.children && (
                      <ChevronDown className="h-3 w-3" />
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
            <div className="flex shrink-0 items-center gap-2 lg:gap-3">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className={cn(
                  "hidden items-center gap-1.5 text-[13px] font-medium lg:flex",
                  isScrolled
                    ? "text-brand-secondary"
                    : "text-white"
                )}
              >
                <Phone className="h-3.5 w-3.5" />
                <span className="whitespace-nowrap">{siteConfig.contact.phone}</span>
              </a>
              <Link href="/request-quote" className="hidden xl:block">
                <Button variant="primary" size="sm">
                  {t("nav.requestQuote")}
                </Button>
              </Link>
              <button
                onClick={() => setIsMobileOpen(true)}
                className={cn(
                  "p-2 xl:hidden",
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
