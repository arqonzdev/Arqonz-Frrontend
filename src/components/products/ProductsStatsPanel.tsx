"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductsStatsPanel() {

  const router = useRouter();
  const [query, setQuery] = useState("");

  const stats = [
    { value: "80k+", label: "Civil" },
    { value: "15k+", label: "Furniture" },
    { value: "80k+", label: "Flooring" },
    { value: "15k+", label: "Electricals" },
    { value: "80k+", label: "Wardrobe" },
    { value: "15k+", label: "Windows" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) return;

    router.push(`/products/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <section className="mt-12">

      <div
        className="
        bg-gradient-to-r from-cyan-500 to-teal-400
        rounded-[32px]
        p-20
        shadow-xl
        flex flex-col md:flex-row
        justify-between
        gap-10
        text-white
      "
      >

        {/* LEFT SIDE */}
        <div className="flex-1">
          <h3 className="text-3xl font-bold leading-snug">
            Discover a wide<br />
            range of products<br />
            tailored to meet<br />
            your needs
          </h3>

          {/* SEARCH */}
          <form onSubmit={handleSearch} className="mt-8">
            <div
              className="
                flex items-center
                bg-white
                rounded-full
                px-5 py-3
                shadow-lg
                max-w-md
                text-gray-700
              "
            >
              <span className="mr-2">🔍</span>

              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search your Products here"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 gap-4 md:w-[320px]">

          {stats.map((item, i) => (
            <div
              key={i}
              className="
                bg-white
                rounded-2xl
                p-8
                text-center
                shadow-md
                text-gray-800
              "
            >
              <p className="text-2xl font-bold">{item.value}</p>
              <p className="text-sm">{item.label}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
