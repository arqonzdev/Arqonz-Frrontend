"use client";

import Image from "next/image";
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
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="relative overflow-hidden rounded-2xl">

        {/* Background Image */}
        <div className="relative h-[420px]">
          <Image
            src="/images/register/register-bg.jpg"
            alt="Register"
            fill
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

          <button className="mt-4 rounded-lg bg-teal-600 px-6 py-2 text-sm font-semibold">
            REGISTER NOW
          </button>

          <p className="mt-6 max-w-xl text-base font-medium">
            From verified builders to real-time pricing—everything your project needs in one place.
          </p>
        </div>

        {/* Bottom Slider */}
        <div className="absolute bottom-6 left-0 right-0 px-6">
          <div className="relative flex items-center">

            {/* Left Arrow */}
            <button
              onClick={() => scroll("left")}
              className="absolute -left-4 z-10 rounded-md bg-white p-2 shadow"
            >
              ←
            </button>

            {/* Cards */}
            <div
              ref={sliderRef}
              className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-6"
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
              onClick={() => scroll("right")}
              className="absolute -right-4 z-10 rounded-md bg-white p-2 shadow"
            >
              →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
