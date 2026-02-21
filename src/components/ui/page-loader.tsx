"use client";

import { Suspense, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function PageLoaderInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  // Track navigation changes
  useEffect(() => {
    // When pathname/search changes, the new page has loaded — finish the bar
    setProgress(100);
    const timeout = setTimeout(() => {
      setLoading(false);
      setVisible(false);
      setProgress(0);
    }, 300);
    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  // Intercept all link clicks to start the loader
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Skip external links, hash links, mailto, tel
      if (
        href.startsWith("http") ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        target.getAttribute("target") === "_blank"
      ) {
        return;
      }

      // Skip if same page
      if (href === pathname) return;

      // Start loading
      setLoading(true);
      setVisible(true);
      setProgress(20);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  // Simulate incremental progress
  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 15;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [loading]);

  if (!visible) return null;

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed top-0 right-0 left-0 z-[9999]">
        <div
          className="h-[3px] bg-brand-primary transition-all duration-300 ease-out"
          style={{
            width: `${progress}%`,
            boxShadow: "0 0 10px var(--colors-brand-primary), 0 0 5px var(--colors-brand-primary)",
          }}
        />
      </div>

      {/* Subtle page overlay with spinner */}
      {loading && (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-white/60 backdrop-blur-[1px] transition-opacity duration-200">
          <div className="flex flex-col items-center gap-3">
            <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-neutral-200 border-t-brand-primary" />
            <span className="text-sm font-medium text-neutral-500">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
}

export function PageLoader() {
  return (
    <Suspense fallback={null}>
      <PageLoaderInner />
    </Suspense>
  );
}
