import PageLayout from "../components/shared/PageLayout";
import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import TechnologyStack from "../components/home/TechnologyStack";
import ProcessSection from "../components/home/ProcessSection";
import PortfolioSection from "../components/home/PortfolioSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import IndustriesSection from "../components/home/IndustriesSection";
import FAQSection from "../components/home/FAQSection";
import CTASection from "../components/home/CTASection";

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <TechnologyStack />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <IndustriesSection />
      <FAQSection />
      <CTASection />
    </PageLayout>
  );
}
