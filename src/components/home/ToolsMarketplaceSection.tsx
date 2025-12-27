"use client";

import { useRef } from "react";
import { toolsProducts } from "@/data/toolsProducts";
import ToolCategoryList from "./ToolCategoryList";
import ToolProductCard from "./ToolProductCard";

export default function ToolsMarketplaceSection() {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: dir === "left" ? -260 : 260,
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8">

      {/* MOBILE CATEGORY SCROLLER */}
      <div className="sm:hidden mb-5">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          <ToolCategoryList mobile />
        </div>
      </div>

      <div className="flex gap-6">

        {/* DESKTOP CATEGORY LIST */}
        <div className="hidden sm:block w-64 shrink-0">
          <ToolCategoryList />
        </div>

        {/* SLIDER */}
        <div className="relative flex-1">

          {/* LEFT ARROW (HIDDEN ON MOBILE) */}
          <button
            onClick={() => scroll("left")}
            className="hidden sm:flex absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow"
          >
            ‹
          </button>

          {/* PRODUCT SLIDER */}
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-1 sm:px-8"
          >
            {toolsProducts.map((product) => (
              <ToolProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* RIGHT ARROW (HIDDEN ON MOBILE) */}
          <button
            onClick={() => scroll("right")}
            className="hidden sm:flex absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
