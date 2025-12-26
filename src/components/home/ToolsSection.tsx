// src/components/home/ToolsSection.tsx
import ToolCard from "./ToolCard";
import { tools } from "@/data/tools";
import Image from "next/image";

export default function ToolsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1.3fr] gap-6">
        
        {/* LEFT – BLACK PANEL */}
        <div className="rounded-2xl bg-black p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>

        {/* RIGHT – AI BANNER */}
        <div className="relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#2EE5C7] to-[#00B7D6] p-6 text-white">
          <div>
            <h3 className="text-lg font-semibold">
              AI-Powered Dream Home Building
            </h3>
            <p className="text-xl font-bold">Budget Planning</p>

            <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#0F766E] px-4 py-2 text-sm font-semibold hover:bg-[#115E59]">
              Click Here →
            </button>
          </div>

          <div className="relative mt-6 h-60 w-full">
            <Image
              src="/images/ai-assistant.png"
              alt="AI Assistant"
              fill
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
