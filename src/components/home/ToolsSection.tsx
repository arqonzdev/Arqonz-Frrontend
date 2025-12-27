import { tools } from "@/data/tools";
import ToolCard from "./ToolCard";

export default function ToolsSection() {
  return (
    <div className="grid gap-6 md:grid-cols-4">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}
