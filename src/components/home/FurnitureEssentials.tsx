"use client";

import { furnitureItems } from "@/data/furniture";

export default function FurnitureEssentials() {
  return (
    <div className="space-y-4">
      {furnitureItems.map((item, i) => (
        <div
          key={i}
          className="relative h-32 rounded-xl overflow-hidden group"
        >
      
          <div
            className="absolute inset-0 bg-gray-200"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
            <span className="font-semibold bg-white/90 px-3 py-1 rounded-full text-sm">
              {item.title}
            </span>

            <span className="bg-white w-8 h-8 flex items-center justify-center rounded-full">
              →
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
