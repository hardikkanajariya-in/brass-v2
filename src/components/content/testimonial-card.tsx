import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex h-full flex-col rounded-card border-l-4 border-brand-primary bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-lg">
      <Quote className="mb-3 h-8 w-8 text-brand-primary opacity-20" />
      <p className="flex-1 text-sm leading-relaxed text-neutral-600">
        {testimonial.content}
      </p>

      {/* Rating */}
      <div className="mt-4 flex gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < testimonial.rating
                ? "fill-brand-primary text-brand-primary"
                : "text-neutral-300"
            }`}
          />
        ))}
      </div>

      {/* Author */}
      <div className="mt-3 border-t border-neutral-100 pt-3">
        <p className="font-semibold text-brand-secondary">
          {testimonial.name}
        </p>
        <p className="text-sm text-neutral-500">
          {testimonial.designation}, {testimonial.company}
        </p>
        <p className="text-xs text-neutral-400">{testimonial.country}</p>
      </div>
    </div>
  );
}
