// src/components/home/CityProjectCard.tsx

import Image from "next/image";
import { City } from "@/types/city";

interface Props {
  city: City; // ✅ correct type
}

export default function CityProjectCard({ city }: Props) {
  return (
    <div className="min-w-[240px] overflow-hidden rounded-2xl bg-white shadow">
      <div className="relative h-40">
        <Image
          src={city.image}
          alt={city.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h4 className="font-semibold text-gray-900">{city.name}</h4>
        <p className="mt-1 text-sm text-gray-500">
          {city.projects}+ Projects
        </p>
      </div>
    </div>
  );
}
