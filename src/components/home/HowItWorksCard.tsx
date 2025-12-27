// src/components/home/HowItWorksCard.tsx

import { HowItWorksStep } from "@/types/howItWorks";
import { Card, CardContent } from "@/components/ui/card";

interface HowItWorksCardProps {
  step: HowItWorksStep;
}

export default function HowItWorksCard({ step }: HowItWorksCardProps) {
  return (
    <Card className="h-full hover:shadow-md sm:hover:scale-[1.01] transition-all border border-gray-100 rounded-2xl">
      <CardContent className="p-4 sm:p-6 text-center">

        {/* Step Number Badge */}
        <div className="mx-auto mb-4 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-teal-700 text-xs sm:text-sm font-semibold text-white">
          {step.stepNumber}
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-sm font-semibold text-gray-900">
          {step.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
          {step.description}
        </p>

      </CardContent>
    </Card>
  );
}
