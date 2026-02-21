import { siteConfig } from "../../site.config";
import type { SiteConfig } from "../../site.config";

export { siteConfig };
export type { SiteConfig };

export function getCompanyName(): string {
  return siteConfig.company.name;
}

export function getFooterCredit(): {
  text: string;
  url: string;
  companyName: string;
} {
  return {
    text: siteConfig.footer.credit.textKey,
    url: siteConfig.footer.credit.url,
    companyName: siteConfig.footer.credit.companyName,
  };
}

export function getSeoTitle(page: string): string {
  return siteConfig.seo.titleTemplate.replace("%s", page);
}

export function getContactInfo() {
  return siteConfig.contact;
}

export function isFeatureEnabled(
  flag: keyof SiteConfig["features"]
): boolean {
  return siteConfig.features[flag];
}
