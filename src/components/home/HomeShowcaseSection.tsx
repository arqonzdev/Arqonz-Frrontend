import RecentlyViewed from "./RecentlyViewed";
import FurnitureEssentials from "./FurnitureEssentials";
import SmartSpeedBanner from "./SmartSpeedBanner";

export default function HomeShowcaseSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        
        {/* LEFT – Recently Viewed */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">
            Recently Viewed
          </h3>
          <RecentlyViewed />
        </div>

        {/* CENTER – Furniture Essentials */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">
            Home Furniture Essentials
          </h3>
          <FurnitureEssentials />
        </div>

        {/* RIGHT – Smart Speed Banner */}
        <SmartSpeedBanner />
      </div>
    </section>
  );
}
