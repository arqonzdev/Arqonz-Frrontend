// src/components/home/TrendingProducts.tsx

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
          <div
            key={item.name}
            className="flex min-w-[120px] flex-col items-center gap-2 rounded-xl bg-white p-3 shadow-sm"
          >
            <div className="text-3xl">{item.image}</div>
            <p className="text-xs text-gray-700">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
