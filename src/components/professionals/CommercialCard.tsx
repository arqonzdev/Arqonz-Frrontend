"use client";

import Link from "next/link";
import Image from "next/image";
import { CommercialPro } from "@/types/professional";
import { Heart } from "lucide-react";

export default function CommercialCard({ data }: { data: CommercialPro }) {
  return (
    <div className="rounded-2xl shadow bg-white p-4">

      <div className="relative">
        
        {/* Fav Button */}
        <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
          <Heart size={16} className="text-gray-600" />
        </button>

        {/* IMAGE */}
        <div className="w-full h-48 rounded-xl overflow-hidden">
          <Image
            src={data.image}
            alt={data.name}
            width={500}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* DETAILS */}
      <p className="font-semibold mt-3">{data.name}</p>

      <p className="text-sm text-gray-600">
        {data.title}
      </p>

      {/* RATING */}
      <p className="text-sm mt-1 text-amber-700 font-medium">
        ⭐ {data.rating}
        <span className="text-gray-600 ml-1">
          User Reviews ({data.reviews})
        </span>
      </p>

      {/* FEE ROW */}
      <p className="mt-2 text-xs text-gray-600">
        Hourly Fee
      </p>

      <p className="text-lg font-bold">
        ₹{data.hourlyFee}
      </p>

      {/* BUTTON */}
      <button className="mt-2 bg-amber-700 hover:bg-amber-800 text-white text-sm px-5 py-2 rounded-xl">
       <Link href={`/enquiry/${data.id}`}>
         Send Enquiry
       </Link>

      </button>

    </div>
  );
}
