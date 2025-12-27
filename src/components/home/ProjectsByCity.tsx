// src/components/home/ProjectsByCity.tsx

"use client";

import { useRef } from "react";
import { cities } from "@/data/cities";
import CityProjectCard from "./CityProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ProjectsByCity() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 320; // ek card jitna
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">
            Latest Projects{" "}
            <span className="text-sm font-normal text-gray-500">
              (For Builders & Suppliers)
            </span>
          </h2>

          <Link
            href="/projects"
            className="text-sm font-medium text-teal-600 hover:underline"
          >
            View All New Projects →
          </Link>
        </div>

        {/* Slider */}
        <div className="relative">

          {/* Left Arrow */}
          <button
            aria-label="Scroll Left"
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-gray-50"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth px-10 scrollbar-hide"
          >
            {cities.map((city) => (
              <CityProjectCard key={city.id} city={city} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            aria-label="Scroll Right"
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-gray-50"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
