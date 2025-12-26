import { CategoryNode } from "@/data/categories1";

interface Props {
  title: string;
  items?: CategoryNode[];
}

export default function CategoryColumn({ title, items = [] }: Props) {
  return (
    <div className="flex flex-col gap-2 min-w-[220px]">
      <h3 className="text-white font-semibold text-[15px]">
        {title}
      </h3>

      <ul className="space-y-1">
        {items.map((item) => (
          <li
            key={item.slug}
            className="
              text-gray-300 text-[13px]
              hover:text-white
              cursor-pointer
              transition
            "
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
