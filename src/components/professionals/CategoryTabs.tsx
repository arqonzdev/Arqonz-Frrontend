import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "All", link: "/professionals" },
  { label: "Architects", link: "/professionals/architects" },
  { label: "Engineers", link: "/professionals/engineers" },
  { label: "Interior Designers", link: "/professionals/interior-designers" },
  { label: "Builders", link: "/professionals/builders" },
];

export default function CategoryTabs() {

  const path = usePathname();

  return (
    <div className="flex gap-6 mt-6 border-b pb-3">
      {tabs.map(t => (
        <Link
          key={t.label}
          href={t.link}
          className={`font-medium ${
            path === t.link ? "text-black border-b-2 border-black" : "text-gray-500"
          }`}
        >
          {t.label}
        </Link>
      ))}
    </div>
  );
}
