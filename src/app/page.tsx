// src/app/page.tsx

import HomeHeroSection from "@/components/home/HomeHeroSection";
import ToolsMarketplaceSection from "@/components/home/ToolsMarketplaceSection";
import EcosystemSection from "@/components/home/EcosystemSection";
import HomeShowcaseSection from "@/components/home/HomeShowcaseSection";
import VisionSection from "@/components/home/VisionSection";
import BrandsSection  from "@/components/home/BrandsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ProjectsByCity from "@/components/home/ProjectsByCity";
import TopStoriesSection from "@/components/home/TopStoriesSection";
import OfferBanner from "@/components/home/OfferBanner";
import ToolsSectionWrapper from "@/components/home/ToolsSectionWrapper";
import PropertyHubSection from "@/components/home/PropertyHubSection";
import RegisterBannerSection from "@/components/home/RegisterBannerSection";
import StoriesSection from "@/components/home/StoriesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function HomePage() {
  return (
    <main id="top">
      <HomeHeroSection/>
      <ToolsMarketplaceSection/>
      <EcosystemSection />
      <HomeShowcaseSection />
      <VisionSection />
      <BrandsSection/> 
      <HowItWorksSection />
      <ProjectsByCity />
      <TopStoriesSection /> 
      <OfferBanner />
      <ToolsSectionWrapper />
      <PropertyHubSection />
      <RegisterBannerSection />
      <StoriesSection />
      <TestimonialsSection />
      
      
    </main>
  );
}
