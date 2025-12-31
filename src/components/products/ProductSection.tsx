"use client";

import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/types/product";

interface SectionProps {
  title: string;
  products: Product[];
}

export default function ProductSection({ title, products }: SectionProps) {

  const showFlashDeal = title === "Top Deals";

  return (
    <section className="mt-20">

      {/* HEADER ROW */}
      <div className="relative mb-10 w-full">

        {/* ⭐ TOP DEALS */}
        {title === "Top Deals" && (
          <h2 className="text-3xl font-bold text-center">
            <span className="text-black">Top </span>
            <span className="text-indigo-600">Deals</span>
          </h2>
        )}

        {/* 🆕 NEW ARRIVALS */}
        {title === "New Arrivals from Suppliers" && (
          <h2 className="text-3xl font-bold text-center">
            <span className="text-black">New Arrivals from </span>
            <span className="text-indigo-600">Suppliers</span>
          </h2>
        )}

        {/* OTHER TITLES */}
        {title !== "Top Deals" &&
          title !== "New Arrivals from Suppliers" && (
            <h2 className="text-2xl font-semibold text-center">{title}</h2>
        )}

        {/* SEE ALL — ALWAYS RIGHT SIDE */}
        <button
          className="
            absolute 
            right-0 
            top-1/2 
            -translate-y-1/2 
            text-sm 
            text-indigo-600 
            font-medium
          "
        >
          See all
        </button>
      </div>


      {/* PRODUCT GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            showFlashDeal={showFlashDeal}
          />
        ))}
      </div>

    </section>
  );
}
