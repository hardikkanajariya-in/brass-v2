"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export function StatCounter({ value, suffix = "", label }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const startTime = performance.now();
    const displayValue = value > 10000 ? value / 1000 : value;

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * displayValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [isVisible, value]);

  const displaySuffix = value > 10000 ? `M${suffix}` : suffix;
  const displayCount = value > 10000 ? `${count === 0 ? "0" : count < 1000 ? count : `${count}`}` : count;

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold text-brand-primary-light md:text-4xl">
        {displayCount}
        {displaySuffix}
      </div>
      <div className="mt-2 text-sm text-white/70">{label}</div>
    </div>
  );
}
