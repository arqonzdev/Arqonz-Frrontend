"use client";

import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/types/product";

interface SectionProps {
  title: string;
  products: Product[];
}

export default function ProductSection({ title, products }: SectionProps) {

  const showFlashDeal = title === "Top Deals";   // 👈 ONLY HERE TRUE

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <button className="text-sm text-indigo-600 font-medium">See all</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            showFlashDeal={showFlashDeal}   // 👈 PASS FLAG
          />
        ))}
      </div>
    </section>
  );
}
