// src/components/home/TopStoriesSection.tsx
import Image from "next/image";
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
          <div
            key={story.id}
            className="relative h-[150px] min-w-[220px] rounded-xl overflow-hidden bg-gray-200"
          >
            <Image
              src={story.image}
              alt="Top story"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
