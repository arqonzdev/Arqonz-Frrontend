"use client";

import Image from "next/image";
import Link from "next/link";
import { howItWorksSteps } from "@/data/howItWorks";

const pros = [
  { id: "architect", title: "Architects", image: "/pros/architect.png" },
  { id: "interior", title: "Interior Designers", image: "/pros/interior.png" },
  { id: "engineer", title: "Engineers", image: "/pros/engineer.png" },
];

export default function MeetTheProsSection() {
  return (
    <section className="bg-[#FFF4EA] py-12">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl font-semibold mb-1">
            Meet the <span className="text-teal-600">Pros</span>
          </h2>

          <p className="text-gray-600 mb-8 text-sm">behind the work</p>

          {/* --- 3 Cards in ONE Row --- */}
          <div className="grid grid-cols-3 gap-4">
            {pros.map((pro) => (
              <div
                key={pro.id}
                className="relative rounded-2xl overflow-hidden shadow-md bg-white"
              >
                <Image
                  src={pro.image}
                  alt={pro.title}
                  width={400}
                  height={500}
                  className="h-64 w-full object-cover"
                />

                <div className="bg-black/60 text-white p-3 text-sm font-medium">
                  {pro.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">
            Ask Once, Get Several Quotes
          </h3>

          <p className="text-gray-600 text-sm mb-6">
            How it works?
          </p>

          {/* --- Number Steps --- */}
          <ol className="space-y-4 text-sm text-gray-700">
            {howItWorksSteps.map(step => (
              <li key={step.stepNumber} className="flex gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-700 text-white text-xs">
                  {step.stepNumber}
                </span>
                {step.description}
              </li>
            ))}
          </ol>

          {/* Button */}
          <Link href="/demo">
            <button className="mt-8 rounded-lg bg-teal-700 px-6 py-3 text-white text-sm hover:bg-teal-800">
              Schedule a Demo
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
