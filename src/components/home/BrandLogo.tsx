// src/components/home/BrandLogo.tsx
import Image from "next/image";
import { Brand } from "@/types/brand";

export default function BrandLogo({ brand }: { brand: Brand }) {
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md">
      <Image
        src={brand.logo}
        alt={brand.name}
        width={48}
        height={48}
        className="object-contain"
      />
    </div>
  );
}
