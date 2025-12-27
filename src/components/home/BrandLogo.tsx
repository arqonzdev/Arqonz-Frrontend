// src/components/home/BrandLogo.tsx

"use client";

import Image from "next/image";
import { Brand } from "@/types/brand";

export default function BrandLogo({ brand }: { brand: Brand }) {
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md">

      {/* TODO: later track brand clicks / impressions */}
      {/* Example:
          onClick={() => trackBrandClick(brand.id)}
      */}

      <Image
        src={brand.logo}
        alt={brand.name}   // good for SEO + screen readers
        width={48}
        height={48}
        className="object-contain"

        // TODO: optional – enable priority for top brands
        // priority={brand.isFeatured}
      />

      {/* TODO: add fallback image if logo missing later */}
      {/* e.g. if (!brand.logo) show placeholder */}
    </div>
  );
}
