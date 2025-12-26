// src/components/home/OfferBanner.tsx

import { Button } from "@/components/ui/button";

export default function OfferBanner() {
  return (
    <section className="px-6 py-10">
      <div className="mx-auto max-w-7xl rounded-2xl overflow-hidden shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* LEFT CARD */}
          <div
            className="relative h-[250px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1556912167-f556f1f39faa')",
            }}
          >
            <div className="absolute inset-0 bg-black/45 p-6 flex flex-col justify-between">
              <div>
                <span className="inline-block mb-2 rounded bg-white/90 px-3 py-1 text-xs font-medium text-black">
                  Ad
                </span>

                <h2 className="text-2xl font-semibold text-white">
                  Flat 25 % OFF
                </h2>

                <p className="mt-2 text-sm text-white/90 max-w-xs">
                  On Modular kitchens, Wardrobes and storage containers
                </p>
              </div>

              <Button
                variant="ghost"
                className="self-end text-white hover:bg-white/20"
              >
                Explore →
              </Button>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            className="relative h-[250px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
            }}
          >
            <div className="absolute inset-0 bg-[#c6a06c]/90 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  75 Properties for sale
                </h2>

                <p className="mt-2 text-sm text-white/90">
                  Explore Localities in chennai
                </p>
              </div>

              <Button
                variant="ghost"
                className="self-end text-white hover:bg-white/20"
              >
                Explore →
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
