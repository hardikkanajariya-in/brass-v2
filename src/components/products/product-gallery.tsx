"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {/* Main image */}
      <div className="relative mb-4 overflow-hidden rounded-card bg-neutral-100">
        <Image
          src={images[activeIndex] || images[0]}
          alt={productName}
          width={600}
          height={500}
          priority
          className="h-auto w-full object-cover transition-opacity duration-300"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.slice(0, 4).map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "relative h-20 w-20 overflow-hidden rounded-md border-2 transition-colors",
                i === activeIndex
                  ? "border-brand-primary"
                  : "border-transparent hover:border-neutral-300"
              )}
            >
              <Image
                src={img}
                alt={`${productName} - ${i + 1}`}
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
