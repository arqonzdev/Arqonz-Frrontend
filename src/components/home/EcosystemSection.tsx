import Image from "next/image";
import { ecosystemItems } from "@/data/ecosystem";
import EcosystemCard from "./EcosystemCard";

export default function EcosystemSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

        {/* LEFT */}
        <div className="rounded-2xl bg-[#FAFAFA] p-8">
          <h2 className="text-xl font-semibold text-teal-700">
            A Simplified Ecosystem for Every Business Need
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Discover a vast array of solutions customized for your enterprise requirements
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {ecosystemItems.map((item) => (
              <EcosystemCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[315px] w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/ecosystem-right.jpg"
            alt="Construction Planning"
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}
