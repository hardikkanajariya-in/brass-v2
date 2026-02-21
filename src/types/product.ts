export interface ProductSpecifications {
  material: string;
  sizeRange: string;
  threadType: string;
  pressureRating: string;
  temperatureRange: string;
  finishOptions: string[];
  weight: string;
  standard: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  categoryId: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  specifications: ProductSpecifications;
  applications: string[];
  features: string[];
  isFeatured: boolean;
  isNew: boolean;
  order: number;
}
