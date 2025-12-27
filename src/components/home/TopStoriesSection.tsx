// src/components/home/TopStoriesSection.tsx
import Image from "next/image";
import Link from "next/link";
import { topStories } from "@/data/topstories";

export default function TopStoriesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">

      {/* Heading */}
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        Top Stories
      </h3>

      {/* Horizontal scroll */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">

        {topStories.map((story) => (
          <Link
            key={story.id}
            href={story.href}
            className="relative h-[150px] min-w-[220px] overflow-hidden rounded-xl bg-gray-200 hover:shadow"
          >
            <Image
              src={story.image}
              alt={story.title ?? "Top story"}
              fill
              sizes="220px"
              className="object-cover"
            />
          </Link>
        ))}

      </div>
    </section>
  );
}
