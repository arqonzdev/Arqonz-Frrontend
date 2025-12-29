"use client";

import Image from "next/image";
import Link from "next/link";
import { proCategories } from "@/data/professionals/categories";

export default function CategoriesStrip() {

  // ---------- BACKEND PLACEHOLDER ----------
  // TODO enable later
  // const res = await fetch("/api/professionals/categories");
  // const proCategories = await res.json();
  // -----------------------------------------

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 mt-14">

      {/* TITLE */}
      <h2 className="text-center text-2xl md:text-3xl font-bold">
        Design. Build. Create.
        <span className="text-amber-700"> Together</span>
      </h2>

      {/* GRID */}
      <div className="
        grid gap-6 mt-10
        grid-cols-2 sm:grid-cols-3 md:grid-cols-5
        place-items-center">

        {proCategories.map(item => (
          <Link
            key={item.id}
            href={item.link}
            className="
              bg-white rounded-3xl shadow
              p-6 w-full max-w-[230px]
              flex flex-col items-center
              hover:shadow-lg transition
            "
          >
            {/* IMAGE */}
            <div className="w-28 h-28 relative">
              <Image
                src={item.icon}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>

            {/* TITLE */}
            <p className="mt-3 font-semibold text-gray-700 text-center">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
