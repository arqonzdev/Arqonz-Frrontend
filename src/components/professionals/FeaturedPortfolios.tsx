import PortfolioCard from "./PortfolioCard";
import { featuredPortfolios } from "@/data/professionals/featuredPortfolios";

export default function FeaturedPortfolios() {

  // -------- BACKEND PLACEHOLDER ----------
  // TODO enable later
  // const res = await fetch("/api/portfolios/featured");
  // const featuredPortfolios = await res.json();
  // ---------------------------------------

  return (
    <section className="mt-16 bg-amber-800 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <h2 className="text-center text-white text-3xl font-bold">
          Featured Portfolios
        </h2>

        <p className="text-center text-white/90 mt-2">
          Build trust through proof of work.
        </p>

        <div className="grid gap-6 mt-10
          grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

          {featuredPortfolios.map(item => (
            <PortfolioCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
