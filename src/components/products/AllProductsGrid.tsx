"use client";

import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/types/product";

interface AllProductsGridProps {
  products: Product[];
}

export default function AllProductsGrid({ products }: AllProductsGridProps) {
  return (
    <section className="mt-10">
      <div
        className="
        grid 
        grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-6
      "
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
