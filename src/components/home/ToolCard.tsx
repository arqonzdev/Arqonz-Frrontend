// src/components/home/ToolCard.tsx
import { Tool } from "@/types/tool";

interface Props {
  tool: Tool;
}

export default function ToolCard({ tool }: Props) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/60 p-6 text-white hover:bg-black/80 transition h-full flex flex-col">

      {/* Icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#F3E8DF] text-black text-lg">
        {tool.icon}
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold">{tool.title}</h3>

      {/* Subtitle */}
      <p className="mt-1 text-xs text-[#9BE7D8]">
        {tool.subtitle}
      </p>

      {/* Description */}
      <p className="mt-3 text-xs leading-relaxed text-gray-300">
        {tool.description}
      </p>

      {/* Button — always bottom */}
      <button
        className="mt-auto rounded-md bg-[#F3E8DF] px-4 py-1.5 text-xs font-semibold text-black hover:bg-white"
      >
        TRY NOW →
      </button>
    </div>
  );
}

