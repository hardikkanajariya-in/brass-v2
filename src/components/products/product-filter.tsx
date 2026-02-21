"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Filter, SlidersHorizontal, Package } from "lucide-react";
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
    <div className="space-y-8">
      {/* Filter panel */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
        {/* Mobile filter toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="mb-4 flex w-full items-center justify-between gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-700 md:hidden"
        >
          <span className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-brand-primary" />
            {t("filter.allCategories")}
          </span>
          <Filter className={cn("h-4 w-4 transition-transform", showFilters && "rotate-180")} />
        </button>

        {/* Category chips */}
        <div
          className={cn(
            "space-y-5",
            showFilters ? "block" : "hidden md:block"
          )}
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Categories
            </p>
            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={() => setActiveCategory("all")}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                  activeCategory === "all"
                    ? "border-brand-primary bg-brand-primary text-white shadow-sm"
                    : "border-neutral-200 bg-white text-neutral-600 hover:border-brand-primary/40 hover:text-brand-primary"
                )}
              >
                {t("filter.allCategories")}
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                    activeCategory === cat.slug
                      ? "border-brand-primary bg-brand-primary text-white shadow-sm"
                      : "border-neutral-200 bg-white text-neutral-600 hover:border-brand-primary/40 hover:text-brand-primary"
                  )}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-neutral-100" />

          {/* Search + sort row */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <SearchInput
              value={search}
              onChange={setSearch}
              placeholder={t("filter.search")}
              className="w-full sm:max-w-xs"
            />
            <div className="flex items-center gap-3">
              <label className="hidden text-sm text-neutral-500 lg:block">Sort by:</label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-700 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none"
              >
                <option value="featured">{t("filter.sortFeatured")}</option>
                <option value="az">{t("filter.sortAZ")}</option>
                <option value="za">{t("filter.sortZA")}</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results header */}
      <div className="flex items-center gap-3">
        <Package className="h-5 w-5 text-brand-primary" />
        <p className="text-sm font-medium text-neutral-600">
          Showing <span className="font-bold text-brand-secondary">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "product" : "products"}
          {activeCategory !== "all" && (
            <span className="text-neutral-400">
              {" "}in {categories.find((c) => c.slug === activeCategory)?.name}
            </span>
          )}
        </p>
        <div className="h-px flex-1 bg-neutral-200" />
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <ProductGrid products={filtered} />
      ) : (
        <div className="rounded-2xl border border-dashed border-neutral-300 py-16 text-center">
          <Package className="mx-auto mb-3 h-12 w-12 text-neutral-300" />
          <p className="text-neutral-500">{t("noResults")}</p>
          <button
            onClick={() => { setSearch(""); setActiveCategory("all"); }}
            className="mt-3 text-sm font-medium text-brand-primary hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
