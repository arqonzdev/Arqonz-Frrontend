// src/components/home/HeroSearch/HeroSearchBox.tsx

"use client";

import { Search, Camera } from "lucide-react";

// TODO: later connect backend search API
import { useState } from "react";

// ⭐ NEW — for navigation
import { useRouter } from "next/navigation";


export default function HeroSearchBox() {

  // TODO: backend search keyword state
  const [query, setQuery] = useState("");

  // ⭐ NEW — router for redirect
  const router = useRouter();

  // TODO: backend search submit handler
  const handleSearch = async () => {

    // stop empty search
    if (!query.trim()) return;

    // ⭐ redirect to search page (same as navbar)
    router.push(`/products/search?q=${encodeURIComponent(query)}`);

    // TODO: later call backend also
    // await fetch(`/api/search?q=${query}`);
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">

      {/* Search Input */}
      <div className="relative rounded-xl border-2 border-teal-700 p-1">
        <div className="relative">

          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search by products, professionals or services"
            className="w-full rounded-xl py-4 pl-11 pr-40 text-sm outline-none"

            // TODO: enable later
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {/* AQIQ */}
          <button
            className="absolute right-28 top-1/2 -translate-y-1/2 rounded-full bg-black px-4 py-1.5 text-xs font-semibold text-white"
            // TODO: trigger AI search later
            // onClick={handleAISearch}
          >
            AQIQ ✨
          </button>

          {/* Search button */}
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold text-gray-900"
            onClick={handleSearch}
          >
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

            // TODO: later trigger quick search
            onClick={() => {
              setQuery(item);
              router.push(`/products/search?q=${encodeURIComponent(item)}`);
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
