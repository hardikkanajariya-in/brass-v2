"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export function StatCounter({ value, suffix = "", label }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    // For large values (like 1,000,000), count to a smaller display number
    const targetDisplay = value >= 1000000 ? 1 : value;
    const duration = value >= 1000000 ? 800 : 2000;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * targetDisplay));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(targetDisplay);
      }
    }

    requestAnimationFrame(animate);
  }, [hasAnimated, value]);

  // Format display value
  let displayText: string;
  if (value >= 1000000) {
    displayText = `${count}M`;
  } else {
    displayText = `${count}`;
  }

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold text-brand-primary-light md:text-4xl">
        {displayText}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-white/70">{label}</div>
    </div>
  );
}
