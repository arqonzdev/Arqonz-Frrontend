import Image from "next/image";
import { Category } from "@/types/category";

const categories: Partial<Category>[] = [
  { title: "Civil", image: "/products/civil.png" },
  { title: "Electrical & Plumbing", image: "/products/plumbing.png" },
  { title: "Kitchen & Wardrobe", image: "/products/kitchen.png" },
  { title: "Furniture", image: "/products/furniture.png" },
  { title: "Furniture", image: "/products/furniture.png" }
];

export default function ExploreProducts() {
  return (
    <section className="pt-5">

      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold">
          Explore our wide range of
        </h2>
        <p className="text-3xl font-bold text-teal-600 -mt-1">
          Products
        </p>
      </div>

      {/* Category Cards */}
      <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="min-w-[250px] bg-white rounded-3xl shadow-lg p-3"
          >

            {/* Image */}
            <div className="w-full h-50 bg-gray-200 rounded-2xl relative">
              <Image
                src={cat.image!}
                alt={cat.title!}
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            {/* Title */}
            <p className="mt-4 text-sm font-semibold text-center">
              {cat.title}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
