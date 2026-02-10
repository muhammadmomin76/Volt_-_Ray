import { HeroSection } from "@/components/HeroSection";
import { SocialProof } from "@/components/SocialProof";
import { WhyVoltRay } from "@/components/WhyVoltRay";
import { ServicesGrid } from "@/components/ServicesGrid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <SocialProof />
      <WhyVoltRay />
      <ServicesGrid />
    </div>
  );
}
