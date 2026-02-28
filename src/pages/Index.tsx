import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import AparajitaSection from "@/components/AparajitaSection";
import DivineBlessingsSection from "@/components/DivineBlessingsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <AparajitaSection />
      <DivineBlessingsSection />
      <ServicesSection />
      <WhyChooseSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
    <FooterSection />
  </>
);

export default Index;
