import { HeroSection } from "@/components/home/hero-section";
import { CategoriesOverview } from "@/components/home/categories-overview";
import { FeaturedProducts } from "@/components/home/featured-products";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { StatsSection } from "@/components/home/stats-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <div className="-mt-16 md:-mt-20">
      <HeroSection />
      <CategoriesOverview />
      <FeaturedProducts />
      <WhyChooseUs />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
