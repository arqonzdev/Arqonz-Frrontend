import { Category } from "@/types/category";

const categories: Category[] = [
  { title: "Civil", image: "/img/civil.jpg" },
  { title: "Electrical & Plumbing", image: "/img/plumbing.jpg" },
  { title: "Kitchen & Wardrobe", image: "/img/kitchen.jpg" },
  { title: "Furniture", image: "/img/furniture.jpg" },
];

export default function ExploreProducts() {
  return (
    <section className="pt-10">

      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">
          Explore our wide range of
        </h2>
        <p className="text-3xl font-bold text-teal-600 -mt-1">
          Products
        </p>
      </div>

      {/* Category Cards */}
      <div className="flex gap-6 overflow-x-auto pb-3 hide-scrollbar">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="min-w-[230px] bg-white rounded-3xl shadow-lg p-3"
          >
            {/* Image */}
            <div className="w-full h-28 bg-gray-200 rounded-2xl" />

            {/* Title */}
            <p className="mt-3 text-sm font-semibold text-center">
              {cat.title}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
