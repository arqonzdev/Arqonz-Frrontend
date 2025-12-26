"use client";

import { categories } from "@/data/categories1";
import { useState } from "react";
import CategoryColumn from "./CategoryColumn";

export default function MegaMenu({ open }: { open: boolean }) {
  const [active, setActive] = useState(0);

  if (!open) return null;

  return (
    <div className="
      absolute left-0 top-full w-full
      bg-[#063B3A]
      text-white
      shadow-2xl
      rounded-b-2xl
      z-40
      py-8 px-10
    ">

      <div className="grid grid-cols-4 gap-10">

        {/* LEFT MENU */}
        <div className="border-r border-white/20 pr-6 space-y-1">
          {categories.map((cat, i) => (
            <div
              key={cat.slug}
              onMouseEnter={() => setActive(i)}
              className={`
                px-3 py-2 rounded text-[14px] cursor-pointer
                transition
                ${i === active
                  ? "bg-white/15 text-white"
                  : "text-gray-300 hover:bg-white/10"}
              `}
            >
              {cat.name}
            </div>
          ))}
        </div>

        {/* RIGHT COLUMNS */}
        <div className="col-span-3 grid grid-cols-3 gap-10">
          {categories[active]?.children?.map(sub => (
            <CategoryColumn
              key={sub.slug}
              title={sub.name}
              items={sub.children}
            />
          ))}
        </div>

      </div>

    </div>
  );
}
