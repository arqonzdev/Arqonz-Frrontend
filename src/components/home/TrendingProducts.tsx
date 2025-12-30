// src/components/home/TrendingProducts.tsx

import Link from "next/link";
import Image from "next/image";

const products = [
  { name: "Bricks", image: "/icons/bricks.png" },
  { name: "Concrete Blocks", image: "/icons/concrete-blocks.png" },
  { name: "Sand", image: "/icons/sand.png" },
  { name: "Cement", image: "/icons/cement.png" },
];

export default function TrendingProducts() {
  return (
    <div className="mt-6">
      <h4 className="mb-3 text-sm font-semibold text-gray-800">
        Frequently searched products
      </h4>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {products.map((item) => (
          <Link
            key={item.name}
            href={`/products/search?q=${encodeURIComponent(item.name)}`}
            className="flex min-w-[120px] flex-col items-center gap-2 rounded-xl bg-white p-3 shadow-sm hover:shadow-md transition"
          >
            {/* ICON */}
            <div className="w-12 h-12 relative">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain"
              />
            </div>

            {/* TEXT */}
            <p className="text-xs text-gray-700">{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
