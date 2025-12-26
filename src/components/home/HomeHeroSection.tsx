// src/components/home/HomeHeroSection.tsx

import PrimaryCategoryStrip from "./PrimaryCategoryStrip";
import HeroSearchBox from "./HeroSearch/HeroSearchBox";
import TrendingProducts from "./TrendingProducts";
import LeadCaptureCard from "./LeadCaptureCard";

export default function HomeHeroSection() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Top category strip */}
        <PrimaryCategoryStrip />

        {/* Hero content */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3 items-start">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <HeroSearchBox />
            <TrendingProducts />
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:sticky lg:top-24">
            <LeadCaptureCard />
          </div>
        </div>
      </div>
    </section>
  );
}
