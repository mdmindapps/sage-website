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
      <PhotoBand
        src="/images/home/breakfast-spread.png"
        alt="A breakfast table with eggs, cheese, vegetables and fresh bread"
        scan={{
          box: { left: 30, top: 20, right: 72, bottom: 94 },
          labels: [
            { name: "Olives", kcal: 60, x: 53, y: 25 },
            { name: "Cheese", kcal: 190, x: 36, y: 60 },
            { name: "Tomatoes", kcal: 25, x: 67, y: 72 },
          ],
        }}
      />
      <PoweredByAI />
      <WorkWithCoach />
      <WhatsInside />
      <FeatureGrid />
      <PhotoBand src="/images/home/group-run.png" alt="A group of friends running together on a sunny day" />
      <Pricing />
      <FAQ />
      <CoachBanner />
      <FinalCTA />
    </>
  );
}
