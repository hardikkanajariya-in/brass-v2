import { useTranslations } from "next-intl";
import type { ProductSpecifications as ProductSpecsType } from "@/types";

interface ProductSpecsProps {
  specifications: ProductSpecsType;
}

export function ProductSpecs({ specifications }: ProductSpecsProps) {
  const t = useTranslations("products.specs");

  const specRows = [
    { label: t("material"), value: specifications.material },
    { label: t("size"), value: specifications.sizeRange },
    { label: t("thread"), value: specifications.threadType },
    { label: t("pressure"), value: specifications.pressureRating },
    { label: t("temperature"), value: specifications.temperatureRange },
    {
      label: t("finish"),
      value: specifications.finishOptions.join(", "),
    },
    { label: t("weight"), value: specifications.weight },
    { label: t("standard"), value: specifications.standard },
  ];

  return (
    <div className="overflow-hidden rounded-card border border-neutral-200">
      <table className="w-full">
        <thead>
          <tr className="bg-brand-secondary text-white">
            <th className="px-4 py-3 text-left text-sm font-semibold">
              {t("material").replace(specifications.material, "Specification")}
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          {specRows.map((row, i) => (
            <tr
              key={row.label}
              className={i % 2 === 0 ? "bg-surface-muted" : "bg-white"}
            >
              <td className="px-4 py-3 text-sm font-medium text-brand-secondary">
                {row.label}
              </td>
              <td className="px-4 py-3 text-sm text-neutral-600">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
