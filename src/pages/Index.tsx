import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import PartnersSection from "@/components/PartnersSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <AboutSection />
      <AdvantagesSection />
      <PartnersSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
