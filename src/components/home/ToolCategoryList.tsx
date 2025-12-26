// src/components/home/ToolCategoryList.tsx

import { toolCategories } from "@/data/toolsProducts";

export default function ToolCategoryList() {
  return (
    <div className="w-64 shrink-0 rounded-2xl bg-white p-4 shadow-sm">
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
