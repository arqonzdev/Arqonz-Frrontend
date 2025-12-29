"use client";

import Image from "next/image";
import Link from "next/link";
import { ProfessionalCard } from "@/types/professional";
import { Heart } from "lucide-react";

type Props = {
  data: ProfessionalCard;
};

export default function ProfessionalCard({ data }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex gap-4 relative">

      {/* Rank Badge */}
      <div className="absolute top-2 left-2 bg-white rounded-full w-6 h-6 text-center text-xs font-semibold shadow">
        {data.rank}
      </div>

      {/* Fav Icon */}
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
      >
        <Heart size={18} />
      </button>

      {/* IMAGE */}
      <div className="w-24 h-24 rounded-xl overflow-hidden">
        <Image
          src={data.image}
          alt={data.name}
          width={200}
          height={200}
          className="object-cover w-full h-full"
        />
      </div>

      {/* CONTENT */}
      <div className="flex-1">

        <p className="font-semibold">{data.name}</p>

        <p className="text-sm text-gray-600">
          {data.title}
        </p>

        <p className="text-sm text-gray-600 mt-1">
          {data.completedProjects}+ Completed projects
        </p>

        <p className="text-sm text-gray-600">
          {data.locations.join(", ")}
        </p>

        <p className="text-sm text-gray-600">
          {data.categories.join(", ")}
        </p>

        <p className="text-sm mt-1 font-semibold text-amber-700">
          ⭐ {data.rating} User Reviews ({data.reviewsCount})
        </p>

        <div className="flex gap-3 mt-3">
          <button className="px-4 py-2 rounded-xl bg-amber-700 text-white text-sm">
          <Link href={`/enquiry/${data.id}`}>
          Send Enquiry
         </Link>
          </button>

          <Link
            href={data.profileUrl}
            className="px-4 py-2 rounded-xl bg-gray-800 text-white text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
