import { recommendedSections } from "@/data/professionals/recommended";
import ProfessionalCard from "./ProfessionalCard";

export default function RecommendedSection() {

  // -------- BACKEND PLACEHOLDER ----------
  // TODO: enable backend later
  // const res = await fetch("/api/professionals/recommended");
  // const recommendedSections = await res.json();
  // ---------------------------------------

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 mt-10">

      <h2 className="text-center text-2xl md:text-3xl font-bold">
        Recommended <span className="text-amber-700">Professionals</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-6">

        {recommendedSections.map((section, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-2xl shadow p-5"
          >
            <p className="font-semibold text-lg mb-4">
              {section.title}
            </p>

            <div className="space-y-4">
              {section.list.map(item => (
                <ProfessionalCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
