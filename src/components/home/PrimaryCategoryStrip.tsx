// src/components/home/PrimaryCategoryStrip.tsx

import Image from "next/image";

// TODO: move to /data/categories.ts later when backend connects
const categories = [
  { title: "Civil", image: "/icons/civil.png" },
  { title: "Plumbing", image: "/icons/plumbing.png" },
  { title: "Floor & Wall", image: "/icons/floor-wall.png" },
  { title: "Door & Windows", image: "/icons/door-window.png" },
  { title: "Furniture", image: "/icons/furniture.png" },
  { title: "Home decor", image: "/icons/home-decor.png" },
  { title: "Kitchen & Wardrobe", image: "/icons/kitchen.png" },
  { title: "Professionals", image: "/icons/professionals.png" },
  { title: "Courses", image: "/icons/courses.png" },
  { title: "Handyman", image: "/icons/handyman.png" },
  { title: "Real Estate", image: "/icons/real-estate.png" },
  { title: "Earth Movers", image: "/icons/earth-movers.png" },
  { title: "Jobs", image: "/icons/jobs.png" },
];

export default function PrimaryCategoryStrip() {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="flex min-w-[90px] flex-col items-center text-xs text-gray-700 hover:text-teal-700 transition"
          >
            <div className="h-10 w-10 rounded-lg bg-gray-100 overflow-hidden flex items-center justify-center">
              <Image
                src={cat.image}
                alt={cat.title}
                width={32}
                height={32}
                className="object-contain"
              />
            </div>

            <span className="mt-2 text-center">
              {cat.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
