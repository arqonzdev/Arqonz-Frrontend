// src/components/home/HowItWorksCard.tsx

import { HowItWorksStep } from "@/types/howItWorks";
import { Card, CardContent } from "@/components/ui/card";

interface HowItWorksCardProps {
  step: HowItWorksStep;
}

export default function HowItWorksCard({ step }: HowItWorksCardProps) {
  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardContent className="p-6 text-center">
        {/* Step Number */}
        <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
          {step.stepNumber}
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-900">
          {step.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-600">
          {step.description}
        </p>
      </CardContent>
    </Card>
  );
}
