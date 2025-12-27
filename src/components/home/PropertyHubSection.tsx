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
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {propertyHubItems.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-xl ${
                item.size === "large" ? "row-span-2" : ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 50vw, 400px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/30" />

              <span className="absolute bottom-3 left-3 text-sm font-semibold text-white">
                {item.title} →
              </span>
            </div>
          ))}
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
