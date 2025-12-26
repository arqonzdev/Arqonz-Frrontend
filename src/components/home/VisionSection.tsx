// src/components/home/VisionSection.tsx

import Link from "next/link";

import VisionCard from "./VisionCard";
import { visionIntro, visionItems } from "@/data/vision";

export default function VisionSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      {/* Dark Teal Container */}
      <div className="relative rounded-3xl bg-[#064f53] px-10 pt-10 pb-28 text-white">

        {/* Top Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
          
          {/* Left */}
          <div className="max-w-xl">
            <span className="inline-block mb-4 rounded-full bg-white/10 px-4 py-1 text-sm">
              {visionIntro.title}
            </span>

            <h2 className="text-3xl lg:text-4xl font-semibold leading-snug">
              Rebuilding the future of construction through innovation & technology
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-md text-sm text-white/90">
            <p className="mb-6">
              {visionIntro.description}
            </p>

            <div className="flex items-center gap-4">
              <button className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100">
                View Services →
              </button>
              {/* Schedule Demo */}
          <Link href="/demo" className="flex-1">
            <button className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100">
              Schedule a Demo
            </button>
          </Link>

            </div>
          </div>
        </div>

        {/* Cards (Floating) */}
        <div className="absolute left-1/2 bottom-[-120px] w-full max-w-6xl -translate-x-1/2 px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visionItems.map((item) => (
              <VisionCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
