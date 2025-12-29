"use client";

import CategoryTabs from "@/components/professionals/CategoryTabs";
import EngineerCard from "@/components/professionals/EngineerCard";
import { engineers } from "@/data/engineers";

export default function EngineersPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 mt-8">

      <h1 className="text-2xl font-bold">
        Professionals › <span className="text-amber-800">Engineers</span>
      </h1>

      <CategoryTabs />

      <div
        className="
          grid gap-6 mt-8
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        "
      >
        {engineers.map(e => (
          <EngineerCard key={e.id} data={e} />
        ))}
      </div>

    </main>
  );
}
