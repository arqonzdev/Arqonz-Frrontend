// src/components/home/VisionCard.tsx

import { VisionItem } from "@/types/vision";
import { Card, CardContent } from "@/components/ui/card";

interface VisionCardProps {
  item: VisionItem;
}

export default function VisionCard({ item }: VisionCardProps) {
  return (
    <Card className="h-full rounded-2xl shadow-lg border border-gray-100">
      <CardContent className="p-6">
        <h3 className="text-base font-semibold text-gray-900">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          {item.description}
        </p>
      </CardContent>
    </Card>
  );
}
