"use client";

import React from "react";

interface Props {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export default function AuthCard({ children, title, subtitle }: Props) {
  return (
    <div
      className="
      w-full max-w-lg
      bg-white/90 backdrop-blur-xl
      rounded-3xl
      shadow-[0_25px_70px_-15px_rgba(0,0,0,0.25)]
      border border-white/60
      px-8 py-10
      transition
      hover:shadow-[0_35px_90px_-20px_rgba(0,0,0,0.35)]
      "
    >
      {title && (
        <h2 className="text-3xl font-semibold text-center tracking-wide mb-2">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="text-center text-gray- text-sm mb-8">
          {subtitle}
        </p>
      )}

      {/* subtle divider */}
      {(title || subtitle) && (
        <div className="w-14 h-[2px] bg-emerald-900/80 mx-auto mb-8 rounded-full" />
      )}

      {children}
    </div>
  );
}
