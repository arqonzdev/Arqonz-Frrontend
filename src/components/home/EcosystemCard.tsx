import Image from "next/image";

export default function EcosystemCard({ item }: any) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-[#F6E4D7] p-4">
      <div className="relative h-12 w-12 flex-shrink-0">
        <Image src={item.image} alt={item.title} fill className="object-contain" />
      </div>

      <div className="flex-1">
        <p className="text-sm font-semibold text-gray-900">{item.title}</p>
        <p className="text-xs font-bold text-gray-700">{item.count}</p>
      </div>
    </div>
  );
}
