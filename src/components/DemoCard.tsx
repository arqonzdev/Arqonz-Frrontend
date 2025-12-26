"use client";

export default function DemoCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl w-full">
      {children}
    </div>
  );
}
