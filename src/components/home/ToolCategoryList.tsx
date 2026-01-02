// src/components/home/ToolCategoryList.tsx

import { toolCategories } from "@/data/toolsProducts";

type Props = {
  mobile?: boolean;   // ⭐ optional prop
};

export default function ToolCategoryList({ mobile }: Props) {
  return (
    <div
      className={`rounded-2xl bg-white p-4 shadow-sm 
      ${mobile ? "w-full" : "w-64 shrink-0"}`}
    >
      <h3 className="mb-3 text-sm font-semibold text-gray-900">
        Tools Categories
      </h3>

      <ul className="space-y-3 text-sm text-gray-700">
        {toolCategories.map((item) => (
          <li
            key={item}
            className="flex cursor-pointer items-center justify-between hover:text-teal-700"
          >
            {item}
            <span>›</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
