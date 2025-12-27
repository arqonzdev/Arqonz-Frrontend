// src/components/home/ToolProductCard.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { ToolProduct } from "@/data/toolsProducts";

interface Props {
  product: ToolProduct;
}

export default function ToolProductCard({ product }: Props) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="min-w-[85%] sm:min-w-[240px] flex-shrink-0 rounded-2xl bg-white p-3 shadow-sm hover:shadow-md transition border border-gray-100"
    >
      {/* Image */}
      <div className="relative h-36 sm:h-40 w-full rounded-xl bg-gray-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-3"
          sizes="200px"
        />
      </div>

      {/* Title */}
      <p className="mt-2 line-clamp-2 text-sm font-medium text-gray-900">
        {product.title}
      </p>

      {/* Price + Discount */}
      <div className="mt-1 flex items-center gap-2 text-sm font-semibold">
        <span>₹{product.price}</span>
        {product.discount && (
          <span className="text-xs text-green-600">{product.discount}</span>
        )}
      </div>

      {/* CTA */}
      <div className="mt-3">
        <span className="block text-center w-full rounded-lg bg-teal-700 py-2 text-xs font-semibold text-white hover:bg-teal-800 active:scale-[.99]">
          Send Enquiry
        </span>
      </div>
    </Link>
  );
}
