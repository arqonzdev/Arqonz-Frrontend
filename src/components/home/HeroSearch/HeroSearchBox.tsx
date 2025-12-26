// src/components/home/HeroSearch/HeroSearchBox.tsx
import { Search, Camera } from "lucide-react";

export default function HeroSearchBox() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      {/* Search Input */}
      <div className="relative rounded-xl border-2 border-teal-700 p-1">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            defaultValue="Non-perishable cement"
            placeholder="Search by products, professionals or services"
            className="w-full rounded-xl py-4 pl-11 pr-40 text-sm outline-none"
          />

          {/* AQIQ */}
          <button className="absolute right-28 top-1/2 -translate-y-1/2 rounded-full bg-black px-4 py-1.5 text-xs font-semibold text-white">
            AQIQ ✨
          </button>

          {/* Search button */}
          <button className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold text-gray-900">
            🔍 Search
          </button>
        </div>
      </div>

      {/* Search by image */}
      <div className="mt-2 flex items-center gap-2 text-xs text-gray-600">
        <Camera size={14} />
        <span className="cursor-pointer hover:underline">
          Search by image
        </span>
      </div>

      {/* Frequently searched */}
      <div className="mt-4 text-sm text-gray-700">
        <span className="font-medium">Frequently Searched:</span>{" "}
        {[
          "Soft Clay",
          "Cement",
          "Interior Architect Designer",
          "Night lamp",
          "Kitchen cabinet",
          "Carpenter",
        ].map((item) => (
          <span
            key={item}
            className="ml-2 cursor-pointer underline hover:text-teal-700"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
