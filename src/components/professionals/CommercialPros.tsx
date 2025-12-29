import { commercialPros } from "@/data/professionals/commercialPros";
import CommercialCard from "./CommercialCard";

export default function CommercialPros() {

  // ---------- BACKEND PLACEHOLDER ----------
  // TODO enable when backend ready
  // const res = await fetch("/api/professionals/commercials");
  // const commercialPros = await res.json();
  // -----------------------------------------

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 mt-12">

      <h2 className="text-center text-2xl md:text-3xl font-bold">
        Trusted <span className="text-amber-700">Commercials Pros</span>
      </h2>

      <div className="grid gap-6 mt-8
        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {commercialPros.map(item => (
          <CommercialCard key={item.id} data={item} />
        ))}

      </div>
    </section>
  );
}
