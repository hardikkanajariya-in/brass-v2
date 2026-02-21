export interface SiteConfig {
  company: {
    name: string;
    tagline: string;
    logo: string;
    logoDark: string;
    founded: number;
  };
  contact: {
    email: string;
    salesEmail: string;
    phone: string;
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
      pincode: string;
    };
    workingHours: string;
    mapEmbedUrl: string;
  };
  social: {
    linkedin: string;
    facebook: string;
    youtube: string;
    twitter: string;
  };
  seo: {
    titleTemplate: string;
    defaultDescriptionKey: string;
    siteUrl: string;
    ogImage: string;
  };
  navigation: Array<{
    id: string;
    labelKey: string;
    href: string;
    children?: Array<{
      id: string;
      labelKey: string;
      href: string;
    }>;
  }>;
  footer: {
    credit: {
      textKey: string;
      url: string;
      companyName: string;
    };
    columns: Array<{
      titleKey: string;
      links: Array<{
        labelKey: string;
        href: string;
      }>;
    }>;
  };
  features: {
    showBlog: boolean;
    showTestimonials: boolean;
    showInfrastructure: boolean;
    showNewsletter: boolean;
  };
  fonts: {
    heading: string;
    body: string;
  };
  images: {
    hero: string;
    aboutBanner: string;
    infrastructureBanner: string;
    qualityBanner: string;
    ctaBackground: string;
  };
}

export const siteConfig: SiteConfig = {
  company: {
    name: "BrassCraft Industries",
    tagline: "home.hero.tagline",
    logo: "/images/logo.svg",
    logoDark: "/images/logo-dark.svg",
    founded: 1995,
  },
  contact: {
    email: "info@brasscraftindustries.com",
    salesEmail: "sales@brasscraftindustries.com",
    phone: "+91 98765 43210",
    address: {
      street: "GIDC Industrial Estate, Plot 45-B",
      city: "Jamnagar",
      state: "Gujarat",
      country: "India",
      pincode: "361004",
    },
    workingHours: "Mon–Sat: 9:00 AM – 6:00 PM IST",
    mapEmbedUrl: "https://maps.google.com/maps?q=Jamnagar+GIDC",
  },
  social: {
    linkedin: "https://linkedin.com/company/brasscraftindustries",
    facebook: "https://facebook.com/brasscraftindustries",
    youtube: "https://youtube.com/@brasscraftindustries",
    twitter: "https://twitter.com/brasscraftind",
  },
  seo: {
    titleTemplate: "%s | BrassCraft Industries",
    defaultDescriptionKey: "seo.home.description",
    siteUrl: "https://brasscraftindustries.com",
    ogImage:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&q=80",
  },
  navigation: [
    { id: "home", labelKey: "nav.home", href: "/" },
    { id: "about", labelKey: "nav.aboutUs", href: "/about" },
    {
      id: "products",
      labelKey: "nav.products",
      href: "/products",
      children: [
        { id: "all-products", labelKey: "nav.allProducts", href: "/products" },
        {
          id: "fittings",
          labelKey: "nav.productCategories",
          href: "/products/fittings",
        },
        { id: "valves", labelKey: "categories.valves", href: "/products/valves" },
        {
          id: "connectors",
          labelKey: "categories.connectors",
          href: "/products/connectors",
        },
        {
          id: "fasteners",
          labelKey: "categories.fasteners",
          href: "/products/fasteners",
        },
        {
          id: "inserts",
          labelKey: "categories.inserts",
          href: "/products/inserts",
        },
        {
          id: "turned-parts",
          labelKey: "categories.turnedParts",
          href: "/products/turned-parts",
        },
        {
          id: "plumbing",
          labelKey: "categories.plumbing",
          href: "/products/plumbing",
        },
        {
          id: "electrical",
          labelKey: "categories.electrical",
          href: "/products/electrical",
        },
      ],
    },
    { id: "services", labelKey: "nav.services", href: "/services" },
    { id: "quality", labelKey: "nav.quality", href: "/quality" },
    {
      id: "infrastructure",
      labelKey: "nav.infrastructure",
      href: "/infrastructure",
    },
    {
      id: "certifications",
      labelKey: "nav.certifications",
      href: "/certifications",
    },
    { id: "blog", labelKey: "nav.blog", href: "/blog" },
    { id: "contact", labelKey: "nav.contact", href: "/contact" },
    {
      id: "request-quote",
      labelKey: "nav.requestQuote",
      href: "/request-quote",
    },
  ],
  footer: {
    credit: {
      textKey: "footer.builtBy",
      url: "https://hardikkanajariya.in",
      companyName: "hardikkanajariya.in",
    },
    columns: [
      {
        titleKey: "footer.quickLinks",
        links: [
          { labelKey: "nav.home", href: "/" },
          { labelKey: "nav.aboutUs", href: "/about" },
          { labelKey: "nav.products", href: "/products" },
          { labelKey: "nav.services", href: "/services" },
          { labelKey: "nav.quality", href: "/quality" },
          { labelKey: "nav.contact", href: "/contact" },
        ],
      },
      {
        titleKey: "footer.productCategories",
        links: [
          { labelKey: "categories.fittings", href: "/products/fittings" },
          { labelKey: "categories.valves", href: "/products/valves" },
          { labelKey: "categories.connectors", href: "/products/connectors" },
          { labelKey: "categories.fasteners", href: "/products/fasteners" },
          { labelKey: "categories.inserts", href: "/products/inserts" },
          { labelKey: "categories.turnedParts", href: "/products/turned-parts" },
          { labelKey: "categories.plumbing", href: "/products/plumbing" },
          { labelKey: "categories.electrical", href: "/products/electrical" },
        ],
      },
    ],
  },
  features: {
    showBlog: true,
    showTestimonials: true,
    showInfrastructure: true,
    showNewsletter: true,
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  images: {
    hero: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1920&q=80",
    aboutBanner:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    infrastructureBanner:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=80",
    qualityBanner:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&q=80",
    ctaBackground:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80",
  },
};
