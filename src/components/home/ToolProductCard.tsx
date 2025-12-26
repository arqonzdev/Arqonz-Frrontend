// src/components/home/ToolProductCard.tsx

import Image from "next/image";
import { ToolProduct } from "@/data/toolsProducts";

interface Props {
  product: ToolProduct;
}

export default function ToolProductCard({ product }: Props) {
  return (
    <div className="min-w-[240px] flex-shrink-0 rounded-2xl bg-white p-3 shadow-sm">
      {/* Image */}
      <div className="relative h-40 w-full rounded-xl bg-gray-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-2"
        />
      </div>

      {/* Title */}
      <p className="mt-2 line-clamp-2 text-sm font-medium text-gray-900">
        {product.title}
      </p>

      {/* Price */}
      <div className="mt-1 flex items-center gap-2 text-sm font-semibold">
        <span>₹{product.price}</span>
        <span className="text-xs text-green-600">{product.discount}</span>
      </div>

      {/* Button */}
      <button className="mt-3 w-full rounded-lg bg-teal-700 py-2 text-xs font-semibold text-white hover:bg-teal-800">
        Send Enquiry
      </button>
    </div>
  );
}
