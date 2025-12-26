"use client";

export default function HeaderSection() {
  return (
    <div>
      {/* Rating Row */}
      <div className="flex items-center gap-2">
        <span className="text-amber-500 text-xl">★</span>
        <p className="font-semibold">4.3</p>
        <p className="text-gray-500 text-sm">(19,342)</p>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-semibold mt-3 leading-snug">
        Premium-Grade Cement – High-Strength, Fast-Setting,
        and Durable for Construction, Repairs, and Extreme Conditions.
      </h1>
    </div>
  );
}
