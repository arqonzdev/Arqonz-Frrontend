import Image from "next/image";
import Link from "next/link";
import { Engineer } from "@/data/engineers";

export default function EngineerCard({ data }: { data: Engineer }) {
  return (
    <div className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition">

      <p className="font-semibold text-lg">{data.name}</p>

      <div className="flex items-center gap-3 mt-2">
        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
          <Image
            src={data.image}
            alt={data.name}
            width={48}
            height={48}
            className="object-cover"
          />
        </div>

        <div>
          <p className="font-medium">{data.company}</p>
          <p className="text-gray-500 text-sm">{data.city}</p>
        </div>
      </div>

      <p className="mt-3 text-sm">
        ⭐ {data.rating}
        <span className="text-gray-500"> User Reviews ({data.reviews})</span>
      </p>

      <div className="flex gap-2 mt-2 flex-wrap">
        {data.sectors.map((t, i) => (
          <span key={i} className="px-3 py-1 bg-gray-100 rounded-lg text-sm">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-3 text-sm">
        Since <b>{data.years}</b> years
      </div>

      <div className="text-sm">
        Projects <b>{data.projects}</b>
      </div>

      {/* CORRECT BUTTON */}
      <Link href={`/professionals/engineers/${data.id}`}>
        <button className="mt-4 w-full bg-amber-800 text-white rounded-lg py-2 hover:bg-amber-900">
          View Details
        </button>
      </Link>

    </div>
  );
}
