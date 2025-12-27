// src/components/home/TrendingProducts.tsx

import Link from "next/link";

const products = [
  { name: "Bricks", image: "🧱" },
  { name: "Concrete Blocks", image: "🏗️" },
  { name: "Sand", image: "⏳" },
  { name: "Cement", image: "🏢" },
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
            <div className="text-3xl select-none">{item.image}</div>
            <p className="text-xs text-gray-700">{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
