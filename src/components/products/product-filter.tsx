"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Filter } from "lucide-react";
import { SearchInput } from "@/components/ui/search-input";
import { ProductGrid } from "@/components/products/product-grid";
import type { Product, Category } from "@/types";
import { cn } from "@/lib/utils";

interface ProductFilterProps {
  products: Product[];
  categories: Category[];
}

type SortOption = "featured" | "az" | "za";

export function ProductFilter({ products, categories }: ProductFilterProps) {
  const t = useTranslations("products");
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [sort, setSort] = useState<SortOption>("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory !== "all") {
      result = result.filter((p) => p.categorySlug === activeCategory);
    }

    if (search.trim()) {
      const query = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.shortDescription.toLowerCase().includes(query)
      );
    }

    switch (sort) {
      case "az":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "featured":
      default:
        result.sort((a, b) => {
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          return a.order - b.order;
        });
    }

    return result;
  }, [products, activeCategory, search, sort]);

  return (
    <div>
      {/* Mobile filter toggle */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="mb-4 flex items-center gap-2 rounded-button border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 md:hidden"
      >
        <Filter className="h-4 w-4" />
        {t("filter.allCategories")}
      </button>

      {/* Filter bar */}
      <div
        className={cn(
          "mb-8 space-y-4 md:flex md:items-center md:justify-between md:space-y-0",
          showFilters ? "block" : "hidden md:flex"
        )}
      >
        {/* Category chips */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === "all"
                ? "bg-brand-primary text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            )}
          >
            {t("filter.allCategories")}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.slug)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeCategory === cat.slug
                  ? "bg-brand-primary text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search + sort */}
        <div className="flex gap-3">
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder={t("filter.search")}
            className="w-full md:w-64"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="rounded-input border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none"
          >
            <option value="featured">{t("filter.sortFeatured")}</option>
            <option value="az">{t("filter.sortAZ")}</option>
            <option value="za">{t("filter.sortZA")}</option>
          </select>
        </div>
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <ProductGrid products={filtered} />
      ) : (
        <p className="py-12 text-center text-neutral-500">{t("noResults")}</p>
      )}
    </div>
  );
}
