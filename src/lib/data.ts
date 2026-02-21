import type {
  Product,
  Category,
  Company,
  Testimonial,
  Certification,
  Service,
  BlogPost,
  FAQ,
  InfrastructureData,
} from "@/types";

import productsData from "@/data/products.json";
import categoriesData from "@/data/categories.json";
import companyData from "@/data/company.json";
import testimonialsData from "@/data/testimonials.json";
import certificationsData from "@/data/certifications.json";
import servicesData from "@/data/services.json";
import blogData from "@/data/blog.json";
import faqsData from "@/data/faqs.json";
import infrastructureData from "@/data/infrastructure.json";
import { siteConfig } from "../../site.config";

// Products
export function getProducts(): Product[] {
  return (productsData as Product[]).sort((a, b) => a.order - b.order);
}

export function getProductBySlug(slug: string): Product | undefined {
  return (productsData as Product[]).find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return (productsData as Product[])
    .filter((p) => p.categorySlug === categorySlug)
    .sort((a, b) => a.order - b.order);
}

export function getFeaturedProducts(limit?: number): Product[] {
  const featured = (productsData as Product[])
    .filter((p) => p.isFeatured)
    .sort((a, b) => a.order - b.order);
  return limit ? featured.slice(0, limit) : featured;
}

export function getNewProducts(): Product[] {
  return (productsData as Product[])
    .filter((p) => p.isNew)
    .sort((a, b) => a.order - b.order);
}

export function getRelatedProducts(product: Product, limit: number = 4): Product[] {
  return (productsData as Product[])
    .filter((p) => p.categorySlug === product.categorySlug && p.slug !== product.slug)
    .sort((a, b) => a.order - b.order)
    .slice(0, limit);
}

// Categories
export function getCategories(): Category[] {
  return (categoriesData as Category[]).sort((a, b) => a.order - b.order);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return (categoriesData as Category[]).find((c) => c.slug === slug);
}

// Company
export function getCompanyInfo(): Company {
  return companyData as Company;
}

// Testimonials
export function getTestimonials(): Testimonial[] {
  return testimonialsData as Testimonial[];
}

// Certifications
export function getCertifications(): Certification[] {
  return certificationsData as Certification[];
}

// Services
export function getServices(): Service[] {
  return servicesData as Service[];
}

export function getServiceBySlug(slug: string): Service | undefined {
  return (servicesData as Service[]).find((s) => s.slug === slug);
}

// Blog
export function getBlogPosts(): BlogPost[] {
  return (blogData as BlogPost[]).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return (blogData as BlogPost[]).find((b) => b.slug === slug);
}

// FAQs
export function getFAQs(): FAQ[] {
  return faqsData as FAQ[];
}

export function getFAQsByCategory(category: string): FAQ[] {
  return (faqsData as FAQ[]).filter((f) => f.category === category);
}

// Infrastructure
export function getInfrastructure(): InfrastructureData {
  return infrastructureData as InfrastructureData;
}

// Navigation
export function getNavigation() {
  return siteConfig.navigation;
}
