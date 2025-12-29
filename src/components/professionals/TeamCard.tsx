"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Team } from "@/types/professional";

export default function TeamCard({ data }: { data: Team }) {
  return (
    <div className="rounded-2xl shadow bg-white overflow-hidden">

      {/* IMAGE */}
      <div className="relative h-44">
        <Image
          src={data.image}
          alt={data.name}
          fill
          className="object-cover"
        />

        <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
          <Heart size={16} className="text-gray-600" />
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-4">

        <p className="font-semibold text-lg">
          {data.name}
        </p>

        <p className="text-sm text-gray-600">
          {data.tagline}
        </p>

        {/* Rating */}
        <p className="text-sm mt-1 text-amber-700 font-medium">
          ⭐ {data.rating}
          <span className="text-gray-600 ml-1">
            User Reviews ({data.reviews})
          </span>
        </p>

        {/* Fee */}
        <p className="text-xs text-gray-600 mt-2">
          Hourly fee
        </p>

        <p className="text-lg font-bold">
          ₹{data.hourlyFee}
        </p>

        <Link
          href={`/enquiry/${data.id}`}
          className="mt-2 inline-block bg-amber-700 hover:bg-amber-800
          text-white text-sm px-5 py-2 rounded-xl"
        >
          Send Enquiry
        </Link>

      </div>
    </div>
  );
}
