"use client";

import Image from "next/image";
import Link from "next/link";
import { Portfolio } from "@/types/portfolio";
import { MapPin } from "lucide-react";

export default function PortfolioCard({ data }: { data: Portfolio }) {
  return (
    <div className="bg-white rounded-3xl shadow p-4 pb-6 w-full">

      {/* GALLERY */}
      <Link href={data.profileLink}>
        <div className="grid grid-cols-3 gap-2 h-36 rounded-2xl overflow-hidden">
          {data.gallery.map((img, i) => (
            <div key={i} className="relative">
              <Image
                src={img}
                alt={data.studioName}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Link>

      {/* PROFILE IMAGE */}
      <div className="flex justify-center -mt-10">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow">
          <Image
            src={data.profileImage}
            alt={data.ownerName}
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
      </div>

      {/* TEXT */}
      <div className="text-center mt-3">

        <Link href={data.profileLink}>
          <p className="font-semibold text-lg">
            {data.studioName}
          </p>
        </Link>

        {/* LOCATION */}
        <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
          <MapPin size={14} />
          {data.city}
        </p>

        {/* FEATURED BADGE */}
        {data.featured && (
          <span className="mt-2 inline-block text-xs bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
            ⭐ Featured
          </span>
        )}
      </div>

      {/* BUTTON */}
      <Link href={`/enquiry/${data.id}`}
        className="mt-4 block w-full bg-amber-700 hover:bg-amber-800 
        text-white text-sm py-2 rounded-xl text-center"
      >
        Send Enquiry
      </Link>

    </div>
  );
}
