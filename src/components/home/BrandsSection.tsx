// src/components/home/BrandsSection.tsx

"use client";

import { useRef } from "react";
import { brands, brandsIntro } from "@/data/brands";
import BrandLogo from "./BrandLogo";

export default function BrandsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  // TODO: later replace with API loaded brands if needed
  // const { data: brands } = useQuery(...)

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="relative rounded-3xl border border-gray-300 bg-[#fffaf3] p-12">

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <div>
            <h3 className="text-3xl font-semibold text-teal-700">
              {brandsIntro.title}
            </h3>

            <p className="mt-2 text-gray-600">
              {brandsIntro.subtitle}
            </p>
          </div>

          {/* RIGHT SLIDER */}
          <div className="relative">

            {/* LEFT ARROW */}
            <button
              onClick={scrollLeft}
              className="absolute -left-6 top-1/2 z-10 -translate-y-1/2 rounded-lg border bg-white p-2 shadow hover:bg-gray-50"
            >
              ←
            </button>

            {/* SLIDER */}
            <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-2"
            >
              {brands.map((brand) => (
                <BrandLogo key={brand.id} brand={brand} />

                // TODO: later:
                // <Link href={`/brands/${brand.slug}`}>
                //   <BrandLogo ... />
                // </Link>
              ))}
            </div>

            {/* RIGHT ARROW */}
            <button
              onClick={scrollRight}
              className="absolute -right-6 top-1/2 z-10 -translate-y-1/2 rounded-lg border bg-white p-2 shadow hover:bg-gray-50"
            >
              →
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
