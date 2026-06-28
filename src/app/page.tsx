import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBySection />
        <ProductsSection />
        <FeaturesSection />
        <TechStackSection />
        <IntegrationsSection />
        <IndustriesSection />
        <StatsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
