"use client";

import Image from "next/image";
import Link from "next/link";
import { registerRoles } from "@/data/registerRoles";
import RegisterRoleCard from "./RegisterRoleCard";
import { useRef } from "react";

export default function RegisterBannerSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: dir === "left" ? -260 : 260,
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto max-w-7xl px-6 pt-10 pb-24">
      <div className="relative rounded-2xl">

        {/* Background Image */}
        <div className="relative h-[420px]">
          <Image
            src="/register/register-bg.png"
            alt="Register Banner"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <h2 className="text-2xl font-semibold">
            Register with Arqonz Construction Marketplace
          </h2>

          <p className="mt-2 text-sm opacity-90">
            No middlemen. No fake listings. Just verified projects and real pricing.
          </p>

          <Link href="/register">
            <button className="mt-4 rounded-lg bg-teal-600 px-6 py-2 text-sm font-semibold hover:bg-teal-700">
              REGISTER NOW
            </button>
          </Link>

          <p className="mt-6 max-w-xl text-base font-medium">
            From verified builders to real-time pricing—everything your project needs in one place.
          </p>
        </div>

        {/* Bottom Slider */}
        <div className="absolute left-0 right-0 bottom-0 translate-y-1/2 px-8">
          <div className="relative flex items-center justify-center">

            {/* Left Arrow */}
            <button
              aria-label="Scroll left"
              onClick={() => scroll("left")}
              className="absolute -left-4 z-10 rounded-md bg-white p-2 shadow hover:bg-gray-50"
            >
              ←
            </button>

            {/* Cards */}
            <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
            >
              {registerRoles.map((role) => (
                <RegisterRoleCard
                  key={role.id}
                  title={role.title}
                  image={role.image}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              aria-label="Scroll right"
              onClick={() => scroll("right")}
              className="absolute -right-4 z-10 rounded-md bg-white p-2 shadow hover:bg-gray-50"
            >
              →
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
