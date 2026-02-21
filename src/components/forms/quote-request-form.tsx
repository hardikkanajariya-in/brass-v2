"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/data";

type FormStatus = "idle" | "success" | "error";

export function QuoteRequestForm() {
  const t = useTranslations("quote.form");
  const tContact = useTranslations("contact.form");
  const [status, setStatus] = useState<FormStatus>("idle");
  const products = getProducts();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Static site — simulate submission
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-card bg-green-50 p-8 text-center">
        <CheckCircle className="h-12 w-12 text-green-500" />
        <p className="text-sm text-green-700">{t("success")}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm text-brand-primary underline"
        >
          {t("submit")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-brand-secondary">
            {tContact("name")} *
          </label>
          <input
            type="text"
            required
            className="w-full rounded-button border border-neutral-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-brand-secondary">
            {tContact("email")} *
          </label>
          <input
            type="email"
            required
            className="w-full rounded-button border border-neutral-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-brand-secondary">
            {tContact("phone")}
          </label>
          <input
            type="tel"
            className="w-full rounded-button border border-neutral-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
          />
        </div>

        {/* Company */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-brand-secondary">
            {tContact("company")} *
          </label>
          <input
            type="text"
            required
            className="w-full rounded-button border border-neutral-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
          />
        </div>
      </div>

      {/* Product selection */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-brand-secondary">
          {t("product")} *
        </label>
        <select
          required
          className="w-full rounded-button border border-neutral-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
        >
          <option value="">—</option>
          {products.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      {/* Quantity */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-brand-secondary">
          {t("quantity")} *
        </label>
        <input
          type="text"
          required
          className="w-full rounded-button border border-neutral-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
        />
      </div>

      {/* Special specifications */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-brand-secondary">
          {t("specifications")}
        </label>
        <textarea
          rows={4}
          className="w-full resize-none rounded-button border border-neutral-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
        />
      </div>

      {/* Delivery date */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-brand-secondary">
          {t("deadline")}
        </label>
        <input
          type="date"
          className="w-full rounded-button border border-neutral-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle className="h-4 w-4" />
          {t("error")}
        </div>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        <Send className="h-4 w-4" />
        {t("submit")}
      </Button>
    </form>
  );
}
