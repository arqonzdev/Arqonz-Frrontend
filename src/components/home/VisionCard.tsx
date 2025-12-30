import { VisionItem } from "@/types/vision";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface VisionCardProps {
  item: VisionItem;
}

export default function VisionCard({ item }: VisionCardProps) {
  return (
    <Card className="h-full rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="p-6">

        {/* ICON */}
        <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center mb-4 shadow-sm mx-auto">
          <Image
            src={item.icon}
            alt={item.title}
            width={30}
            height={30}
            className="object-contain"
          />
        </div>

        {/* TITLE */}
        <h3 className="text-base font-semibold text-gray-900 text-center">
          {item.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-3 text-sm leading-relaxed text-gray-600 text-center">
          {item.description}
        </p>

      </CardContent>
    </Card>
  );
}
