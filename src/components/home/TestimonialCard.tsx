// src/components/home/TestimonialCard.tsx

import { Testimonial } from "@/types/testimonial";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardContent className="flex h-full flex-col p-6">

        {/* Message */}
        <p className="text-sm leading-relaxed text-gray-600">
          “{testimonial.message}”
        </p>

        {/* Author */}
        <div className="mt-6">
          <p className="text-sm font-semibold text-gray-900">
            {testimonial.name}
          </p>

          <p className="text-xs text-gray-500">
            {testimonial.role}
            {testimonial.company ? `, ${testimonial.company}` : ""}
          </p>
        </div>

      </CardContent>
    </Card>
  );
}
