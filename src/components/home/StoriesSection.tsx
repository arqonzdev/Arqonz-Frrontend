import Image from "next/image";
import Link from "next/link";
import { stories } from "@/data/stories";

export default function StoriesSection() {
  const featured = stories.find((s) => s.featured);
  const others = stories.filter((s) => !s.featured);

  if (!featured) return null;

  return (
    <section className="bg-gray-50 py-10 mt-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">
            See Latest <span className="text-teal-600">Stories</span>
          </h2>

          <Link
            href="/stories"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:underline"
          >
            See All <span>→</span>
          </Link>
        </div>

        {/* GRID */}
        <div className="grid gap-10 md:grid-cols-2">

          {/* FEATURED */}
          <Link
            href={featured.href}
            className="group relative rounded-3xl bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={featured.image}
                alt={featured.title}
                width={800}
                height={520}
                sizes="(max-width:768px) 100vw, 50vw"
                className="h-[420px] w-full object-cover transition group-hover:scale-105"
              />
            </div>

            <div className="mt-6">
              <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                {featured.category}
              </span>

              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {featured.title}
              </h3>

              <p className="mt-3 text-sm text-gray-600">
                {featured.description}
              </p>
            </div>

            <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
              ↗
            </div>
          </Link>

          {/* LIST */}
          <div className="flex flex-col gap-6">
            {others.map((story) => (
              <Link
                key={story.id}
                href={story.href}
                className="group relative flex gap-5 rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-md"
              >
                <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="120px"
                    className="object-cover transition group-hover:scale-105"
                  />
                </div>

                <div className="flex-1">
                  <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                    {story.category}
                  </span>

                  <h4 className="mt-2 text-base font-semibold text-gray-900">
                    {story.title}
                  </h4>

                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {story.description}
                  </p>
                </div>

                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                  ↗
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
