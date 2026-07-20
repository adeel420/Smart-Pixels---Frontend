import ScrollAnimation from "@/components/ui/hero-scroll-animation";
import WhyChooseUs from "@/components/ui/why-choose-us";
import ProcessSection from "@/components/ui/process-section";
import IndustriesSection from "@/components/ui/industries-section";
import VerticalTabs from "@/components/ui/vertical-tabs";
import GrowthPathSection from "@/components/ui/growth-path-section";
import PricingSection from "@/components/ui/pricing-section";
import SolutionsSection from "@/components/ui/solutions-section";
import CtaSection from "@/components/ui/cta-section";
import FaqSection from "@/components/ui/faq-section";

export default function Home() {
  return (
    <div>
      <ScrollAnimation />
      <WhyChooseUs />
      <ProcessSection />
      <IndustriesSection />
      <VerticalTabs />
      {/* <GrowthPathSection /> */}
      <PricingSection />
      <SolutionsSection />
      <CtaSection />
      <FaqSection />

      {/* CTA Section */}
    </div>
  );
}
