"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { siteConfig } from "../../../site.config";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const t = useTranslations();
  const pathname = usePathname();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = siteConfig.navigation.filter(
    (item) =>
      (item.id !== "blog" || siteConfig.features.showBlog) &&
      (item.id !== "infrastructure" || siteConfig.features.showInfrastructure)
  );

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50"
          onClick={onClose}
          aria-hidden
        />
      )}

      {/* Slide-in panel */}
      <nav
        className={cn(
          "fixed top-0 left-0 z-50 flex h-full w-80 max-w-[85vw] flex-col bg-brand-secondary transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        aria-label="Mobile navigation"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 p-4">
          <Link href="/" className="flex items-center gap-1" onClick={onClose}>
            <span className="text-lg font-bold text-brand-primary">
              BrassCraft
            </span>
            <span className="text-lg font-semibold text-white">Industries</span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-white"
            aria-label={t("common.aria.closeMenu")}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Nav items */}
        <div className="flex-1 overflow-y-auto py-4">
          {navItems.map((item) => (
            <div key={item.id}>
              {item.children ? (
                <>
                  <button
                    onClick={() =>
                      setExpandedId(
                        expandedId === item.id ? null : item.id
                      )
                    }
                    className="flex min-h-[44px] w-full items-center justify-between px-6 py-3 text-left text-sm font-medium text-white/90 transition-colors hover:text-white"
                  >
                    {t(item.labelKey)}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        expandedId === item.id ? "rotate-180" : ""
                      )}
                    />
                  </button>
                  {expandedId === item.id && (
                    <div className="bg-white/5 py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.id}
                          href={child.href}
                          className="block min-h-[44px] px-10 py-2.5 text-sm text-white/70 transition-colors hover:text-brand-primary"
                          onClick={onClose}
                        >
                          {t(child.labelKey)}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block min-h-[44px] px-6 py-3 text-sm font-medium text-white/90 transition-colors hover:text-white"
                  onClick={onClose}
                >
                  {t(item.labelKey)}
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>
    </>
  );
}
