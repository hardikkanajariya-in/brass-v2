import { siteConfig } from "../../site.config";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || siteConfig.seo.siteUrl;
export const PRODUCTS_PER_PAGE = 12;
export const BLOG_PER_PAGE = 9;
