import Image from "next/image";
import Link from "next/link";
import { propertyHubItems } from "@/data/propertyHub";

export default function PropertyHubSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr_1fr] gap-6 rounded-2xl bg-[#F8F5F1] p-6">

        {/* LEFT */}
        <div className="flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold text-teal-700">
              Real Estate
            </span>

            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              Find the perfect place for buy, sell, and rent verified
              properties with real-time updates and trusted builders.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full bg-gray-300 border-2 border-white"
                />
              ))}
            </div>

            {/* Schedule Demo */}
            <Link href="/demo" className="flex-1">
              <button className="ml-auto rounded-lg bg-teal-700 px-4 py-2 text-xs font-semibold text-white">
                Schedule a Demo
              </button>
            </Link>
          </div>
        </div>

       {/* CENTER */}
<div className="grid grid-cols-[1.3fr_1.7fr] gap-4">

  {/* LEFT BIG — APARTMENTS */}
  <div className="relative overflow-hidden rounded-xl row-span-2 aspect-[3/4] shadow">
    <Image
      src={propertyHubItems[0].image}
      alt={propertyHubItems[0].title}
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-black/30" />
    <span className="absolute bottom-3 left-3 text-sm font-semibold text-white">
      {propertyHubItems[0].title} →
    </span>
  </div>

  {/* RIGHT SIDE GRID */}
  <div className="grid grid-rows-[1fr_1fr] gap-4">

    {/* VILLAS — FULL WIDTH */}
    <div className="relative overflow-hidden rounded-xl shadow aspect-[5/3]">
      <Image
        src={propertyHubItems[1].image}
        alt={propertyHubItems[1].title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <span className="absolute bottom-3 left-3 text-sm font-semibold text-white">
        {propertyHubItems[1].title} →
      </span>
    </div>

    {/* BOTTOM — 2 GRID ITEMS */}
    <div className="grid grid-cols-2 gap-4">

      {/* PLOTS */}
      <div className="relative overflow-hidden rounded-xl shadow aspect-[4/3]">
        <Image
          src={propertyHubItems[2].image}
          alt={propertyHubItems[2].title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <span className="absolute bottom-3 left-3 text-sm font-semibold text-white">
          {propertyHubItems[2].title} →
        </span>
      </div>

      {/* COMMERCIAL */}
      <div className="relative overflow-hidden rounded-xl shadow aspect-[4/3]">
        <Image
          src={propertyHubItems[3].image}
          alt={propertyHubItems[3].title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <span className="absolute bottom-3 left-3 text-sm font-semibold text-white">
          {propertyHubItems[3].title} →
        </span>
      </div>

    </div>
  </div>

</div>


        {/* RIGHT */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Explore <span className="text-teal-700">Property Hub</span>
            </h3>

            <p className="mt-3 text-sm text-gray-600">
              Power your search with Arqonz—find properties, track construction
              projects, and access verified industry professionals effortlessly.
            </p>
          </div>

          <Link
            href="/properties"
            className="mt-6 text-sm font-semibold text-teal-700"
          >
            Explore All →
          </Link>
        </div>

      </div>
    </section>
  );
}
