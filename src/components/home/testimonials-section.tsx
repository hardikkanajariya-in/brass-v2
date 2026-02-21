"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/content/section-heading";
import { TestimonialCard } from "@/components/content/testimonial-card";
import { getTestimonials } from "@/lib/data";

export function TestimonialsSection() {
  const t = useTranslations("home.sections");
  const testimonials = getTestimonials();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0]?.clientWidth || 350;
    const gap = 24;
    const scrollAmount = cardWidth + gap;
    const newIndex =
      direction === "left"
        ? Math.max(0, activeIndex - 1)
        : Math.min(testimonials.length - 1, activeIndex + 1);
    setActiveIndex(newIndex);
    scrollRef.current.scrollTo({
      left: newIndex * scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <Section background="muted">
      <Container>
        <SectionHeading
          title={t("ourClients")}
          subtitle={t("ourClientsSubtitle")}
        />
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth pb-6"
            style={{ scrollbarWidth: "none" }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-[85vw] flex-none snap-start sm:w-[400px]"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-colors hover:border-brand-primary hover:text-brand-primary"
              aria-label={t("ourClients")}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    i === activeIndex
                      ? "w-6 bg-brand-primary"
                      : "w-2 bg-neutral-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-colors hover:border-brand-primary hover:text-brand-primary"
              aria-label={t("ourClients")}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
