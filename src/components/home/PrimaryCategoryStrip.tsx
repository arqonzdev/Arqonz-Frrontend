// src/components/home/PrimaryCategoryStrip.tsx

// TODO: move to /data/categories.ts later when backend connects
const categories = [
  "Civil",
  "Plumbing",
  "Floor & Wall",
  "Door & Windows",
  "Furniture",
  "Home decor",
  "Kitchen & Wardrobe",
  "Professionals",
  "Courses",
  "Handyman",
  "Real Estate",
  "Earth Movers",
  "Jobs",
];

export default function PrimaryCategoryStrip() {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth">
        {categories.map((item) => (
          <div
            key={item}
            className="flex min-w-[90px] flex-col items-center text-xs text-gray-700 hover:text-teal-700 transition"
          >
            <div className="h-10 w-10 rounded-lg bg-gray-100" />
            <span className="mt-2 text-center">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
