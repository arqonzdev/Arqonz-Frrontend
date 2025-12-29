"use client";

import Image from "next/image";
import Link from "next/link";
import { SupplierCategory } from "@/types/supplier";

export default function SupplierCategoryCard({ data }: { data: SupplierCategory }) {
  return (
    <Link
      href={data.link}
      className="rounded-2xl shadow bg-white overflow-hidden block
      hover:shadow-lg transition"
    >
      {/* IMAGE + GRADIENT OVERLAY */}
      <div className="relative h-36">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <p className="font-semibold">
          {data.title}
        </p>

        <p className="text-sm text-gray-600 mt-1 leading-snug">
          {data.description}
        </p>

        <p className="mt-3 text-sm font-medium">
          Explore Now →
        </p>
      </div>
    </Link>
  );
}
