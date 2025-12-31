import ToolsSection from "./ToolsSection";
import AIBudgetCard from "./AIBudgetCard";

export default function ToolsSectionWrapper() {
  return (
    <section className="mt-10">
      <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-12">

        {/* LEFT */}
        <div className="lg:col-span-8 bg-black rounded-2xl p-8">
          <ToolsSection />
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-4">
          <AIBudgetCard />
        </div>

      </div>
    </section>
  );
}
