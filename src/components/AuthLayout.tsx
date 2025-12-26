"use client";

import Image from "next/image";
import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen relative">

      {/* Background */}
      <Image
        src="/auth-bg.jpg"
        alt="Construction"
        fill
        priority
        className="object-cover"
      />

      {/* White overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" />

      {/* Center card */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex justify-center items-center min-h-[80vh]">

          <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">
            {children}
          </div>

        </div>
      </div>

    </div>
  );
}
