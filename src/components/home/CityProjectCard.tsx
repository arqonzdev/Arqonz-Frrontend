// src/components/home/CityProjectCard.tsx

"use client";

import Image from "next/image";
import { City } from "@/types/city";

interface Props {
  city: City; // ✅ correct type
}

export default function CityProjectCard({ city }: Props) {
  return (
    <div className="min-w-[240px] overflow-hidden rounded-2xl bg-white shadow">

      {/* Image */}
      <div className="relative h-40">
        <Image
          src={city.image}
          alt={city.name}   // good for SEO + accessibility
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">

        {/* City Name */}
        <h4 className="font-semibold text-gray-900">
          {city.name}
        </h4>

        {/* Projects count */}
        <p className="mt-1 text-sm text-gray-500">
          {city.projects}+ Projects
        </p>

        {/* TODO: later enable link routing to city page */}
        {/* Example:
            <Link href={`/cities/${city.slug}`}>View more</Link>
        */}

        {/* TODO: analytics click handler later */}
        {/* onClick={() => trackCityView(city.id)} */}

      </div>
    </div>
  );
}
