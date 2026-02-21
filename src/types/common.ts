export interface NavigationItem {
  id: string;
  labelKey: string;
  href: string;
  children?: NavigationItem[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Machine {
  name: string;
  count: number;
  description: string;
}

export interface Equipment {
  name: string;
  description: string;
}

export interface InfrastructureData {
  totalArea: string;
  productionArea: string;
  machinery: Machine[];
  qualityLab: Equipment[];
  monthlyCapacity: string;
  certifiedSince: number;
}
