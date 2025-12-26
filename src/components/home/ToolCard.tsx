// src/components/home/ToolCard.tsx
import { Tool } from "@/types/tool";

interface Props {
  tool: Tool;
}

export default function ToolCard({ tool }: Props) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/60 p-5 text-white hover:bg-black/80 transition">
      {/* Icon */}
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F3E8DF] text-black">
        {tool.icon}
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold">{tool.title}</h3>

      {/* Subtitle */}
      <p className="mt-1 text-xs text-[#9BE7D8]">{tool.subtitle}</p>

      {/* Description */}
      <p className="mt-2 text-xs leading-relaxed text-gray-300 line-clamp-3">
        {tool.description}
      </p>

      {/* Button */}
      <button className="mt-4 rounded-md bg-[#F3E8DF] px-4 py-1.5 text-xs font-semibold text-black hover:bg-white">
        TRY NOW →
      </button>
    </div>
  );
}
