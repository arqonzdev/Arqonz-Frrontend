"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const tabs = [
  "Products",
  "Suppliers",
  "Nearest Supplies",
  "Verified Suppliers",
];

export default function ProductSearchPage() {

  // -------- Get search text from URL --------
  const params = useSearchParams();
 const query = params.get("q") || params.get("query") || "";

  const search = query.trim();

  const [activeTab, setActiveTab] = useState("Products");

  return (
    <div className="max-w-7xl mx-auto px-6 mt-10">

      {/* ---------------- TITLE ROW ---------------- */}
      <h2 className="text-2xl font-semibold">
        Showing 4,000+ products from global suppliers for “{search}”
      </h2>

      {/* ---------------- TABS ---------------- */}
      <div className="flex gap-10 mt-6 border-b pb-2 text-gray-600">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 font-medium
              ${activeTab === tab ? "text-black border-b-2 border-black" : ""}
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ---------------- 2 COLUMN LAYOUT ---------------- */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">

        {/* LEFT SIDE FILTER PANEL */}
        <FiltersPanel />

        {/* RIGHT SIDE PRODUCT GRID */}
        <ProductGrid />

      </div>
    </div>
  );
}



/* ===========================================================
   PRICE FILTER COMPONENT
=========================================================== */

function PriceFilter() {

  const [min] = useState(0);
  const [max, setMax] = useState(30000);

  return (
    <div className="mt-6">

      <p className="font-medium mb-2">PRICE</p>

      <input
        type="range"
        min={0}
        max={30000}
        value={max}
        onChange={(e) => setMax(Number(e.target.value))}
        className="w-full accent-red-500"
      />

      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>Min ₹{min}</span>
        <span>₹{max}</span>
      </div>

      <button
        className="mt-2 text-xs text-blue-600 underline"
        onClick={() => console.log({ min, max })}
      >
        Apply
      </button>

    </div>
  );
}



/* ===========================================================
   FILTERS PANEL
=========================================================== */

function FiltersPanel() {
  return (
    <div className="bg-white rounded-2xl shadow p-5 h-fit">

      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">Filters</h3>
        <button className="text-xs text-gray-500">
          CLEAR ALL
        </button>
      </div>

      <div className="mt-4 text-sm">

        <p className="text-gray-500">Categories</p>
        <p className="font-medium mt-1">
          Products &gt; Cement
        </p>

        <PriceFilter />

        <div className="mt-5">
          <label className="flex gap-2 items-center cursor-pointer">
            <input type="checkbox" />
            Arqonz Verified Suppliers
          </label>
        </div>

        {[
          "Customer Ratings",
          "Delivery By",
          "Min. Order",
          "Supplier Region",
          "Feature",
          "Color",
          "Strength Grade (MPa)",
          "Warranty",
          "Grade",
        ].map((item) => (
          <details
            key={item}
            className="mt-3 px-3 py-2 border rounded-md cursor-pointer"
          >
            <summary className="font-medium">
              {item}
            </summary>
          </details>
        ))}

      </div>

    </div>
  );
}



/* ===========================================================
   PRODUCT GRID
=========================================================== */

function ProductGrid() {

  const products = Array.from({ length: 12 }).map(() => ({
    title:
      "High-Strength Cement Blocks – Durable, Weather-Resistant, and Built for Tough Conditions.",
    price: 1456,
    oldPrice: 1856,
    moq: 10,
    image: "/cement.png",
    freeShipping: true,
    rating: 4.3,
  }));

  return (
    <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {products.map((p, i) => (
        <div key={i} className="bg-white rounded-2xl shadow p-4">

          <div className="w-full aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden relative">
            <Image
              src={p.image}
              alt={p.title}
              fill
              className="object-cover"
            />
          </div>

          <p className="mt-3 text-sm font-medium leading-snug line-clamp-2">
            {p.title}
          </p>

          <p className="text-xs text-gray-600 mt-1">
            MOQ: {p.moq}
          </p>

          <p className="mt-1">
            <span className="font-semibold text-lg">
              ₹{p.price}
            </span>{" "}
            <span className="text-gray-400 line-through text-sm">
              {p.oldPrice}
            </span>
          </p>

          {p.freeShipping && (
            <p className="text-green-600 text-sm">
              Free Shipping
            </p>
          )}

          <button className="mt-3 w-full bg-gray-900 text-white rounded-xl py-2">
            Send Enquiry
          </button>

        </div>
      ))}

    </div>
  );
}
