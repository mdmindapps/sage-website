import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import PoweredByAI from "@/components/home/PoweredByAI";
import WhatsInside from "@/components/home/WhatsInside";
import FeatureGrid from "@/components/home/FeatureGrid";
import Testimonials from "@/components/home/Testimonials";
import Pricing from "@/components/home/Pricing";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <PoweredByAI />
      <WhatsInside />
      <FeatureGrid />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
