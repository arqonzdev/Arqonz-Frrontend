"use client";

import Link from "next/link";
import { Product } from "@/types/product";

interface Props {
  products?: Product[];
}

export default function RecommendedProducts({ products = [] }: Props) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-4">
        Other Product Recommendations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {products.map((p) => (
          <div
            key={p.id}
            className="border rounded-xl overflow-hidden bg-white shadow-sm"
          >

            <Link href={`/products/${p.slug}`}>
              <div className="aspect-[4/3] bg-gray-100">
                <img
                  src={p.image}
                  className="w-full h-full object-cover"
                  alt={p.title}
                />
              </div>

              <div className="p-3">
                <p className="text-sm text-gray-700 line-clamp-2 min-h-[40px]">
                  {p.title}
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-lg font-semibold">
                    ₹{p.price.toLocaleString()}
                  </span>

                  {p.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ₹{p.originalPrice}
                    </span>
                  )}
                </div>

                <p className="text-emerald-700 text-sm font-medium mt-1">
                  {p.discountPercent}% off
                </p>

                <p className="text-xs text-gray-600 mt-1">
                  MOQ: {p.minOrderQty}
                </p>
              </div>
            </Link>

            <div className="px-3 pb-3">
              <button className="bg-emerald-900 text-white w-full py-2 rounded-lg">
                Send Enquiry
              </button>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
