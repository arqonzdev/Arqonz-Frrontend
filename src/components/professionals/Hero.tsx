"use client";

import Image from "next/image";
import { professionalsHero } from "@/data/professionals/hero";

export default function Hero() {
  // ---------------- BACKEND PLACEHOLDER ----------------
  // TODO: Enable when backend ready
  // const res = await fetch("/api/professionals/hero");
  // const professionalsHero = await res.json();
  // -----------------------------------------------------

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 mt-6 md:mt-10">

      {/* TEXT BLOCK */}
      <div className="text-center max-w-4xl mx-auto">
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          <span className="text-amber-700">{professionalsHero.titleHighlight} </span>
          {professionalsHero.titleRest}
        </h1>

        <p className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed">
          {professionalsHero.subtitle}
        </p>
      </div>

      {/* IMAGE BLOCK */}
      <div className="mt-6 md:mt-8 rounded-2xl overflow-hidden shadow-sm">
        <Image
          src={professionalsHero.image}
          alt="Construction workspace"
          width={1600}
          height={900}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

    </section>
  );
}
