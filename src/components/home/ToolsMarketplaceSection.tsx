"use client";

import { useRef } from "react";
import { toolsProducts } from "@/data/toolsProducts";
import ToolCategoryList from "./ToolCategoryList";
import ToolProductCard from "./ToolProductCard";

export default function ToolsMarketplaceSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: dir === "left" ? -260 : 260,
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="flex gap-6">
        {/* LEFT */}
        <ToolCategoryList />

        {/* CENTER + RIGHT */}
        <div className="relative flex-1">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow"
          >
            ‹
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto px-8 scrollbar-hide"
          >
            {toolsProducts.map((product) => (
              <ToolProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
