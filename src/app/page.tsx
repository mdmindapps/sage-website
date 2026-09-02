import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import PoweredByAI from "@/components/home/PoweredByAI";
import WorkWithCoach from "@/components/home/WorkWithCoach";
import WhatsInside from "@/components/home/WhatsInside";
import FeatureGrid from "@/components/home/FeatureGrid";
import Pricing from "@/components/home/Pricing";
import FAQ from "@/components/home/FAQ";
import CoachBanner from "@/components/home/CoachBanner";
import PhotoBand from "@/components/home/PhotoBand";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <PhotoBand src="/images/home/healthy-meal.jpg" alt="A colourful, balanced meal" />
      <PoweredByAI />
      <WorkWithCoach />
      <WhatsInside />
      <FeatureGrid />
      <PhotoBand src="/images/home/active-lifestyle.jpg" alt="A runner outdoors at sunset" />
      <Pricing />
      <FAQ />
      <CoachBanner />
      <FinalCTA />
    </>
  );
}
