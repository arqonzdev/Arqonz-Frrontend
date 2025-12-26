"use client";

import Image from "next/image";
import Link from "next/link";
// import HowItWorksCard from "./HowItWorksCard";
import { howItWorksSteps } from "@/data/howItWorks";

const pros = [
  {
    id: "architect",
    title: "Architects",
    image: "/images/pros/architect.jpg",
  },
  {
    id: "interior",
    title: "Interior Designers",
    image: "/images/pros/interior.jpg",
  },
  {
    id: "engineer",
    title: "Engineers",
    image: "/images/pros/engineer.jpg",
  },
];

export default function MeetTheProsSection() {
  return (
    <section className="py-10 bg-[#FFF4EA]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE – Meet the Pros */}
        <div>
          <h2 className="text-3xl font-semibold mb-1">
            Meet the <span className="text-teal-600">Pros</span>
          </h2>
          <p className="text-gray-600 mb-8">behind the work</p>

          <div className="flex gap-4">
            {pros.map((pro) => (
              <div
                key={pro.id}
                className="relative w-[220px] h-[300px] rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={pro.image}
                  alt={pro.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-black/55 p-4">
                  <p className="text-white font-medium">
                    {pro.title}
                  </p>
                </div>
              </div>
            ))}
          </div>            
        </div>

        {/* RIGHT SIDE – How it Works */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">
            Ask Once, Get Several Quotes
          </h3>
          <p className="text-gray-600 mb-6">How it works?</p>

          {/* <div className="grid gap-4">
            {howItWorksSteps.map((step) => (
              // <HowItWorksCard key={step.step} item={step} />
            ))}
          </div> */}

              {/* Schedule Demo */}
          <Link href="/demo" className="flex-1">
            <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-white hover:bg-teal-700">
              Schedule a Demo
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
