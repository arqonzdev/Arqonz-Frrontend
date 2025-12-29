import TeamCard from "./TeamCard";
import { bestTeams } from "@/data/professionals/bestTeams";

export default function BestTeams() {

  // -------- BACKEND PLACEHOLDER ----------
  // TODO enable later
  // const res = await fetch("/api/professionals/teams");
  // const bestTeams = await res.json();
  // ---------------------------------------

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 mt-14">

      <h2 className="text-center text-2xl md:text-3xl font-bold">
        Build with the
        <span className="text-amber-700"> Best Teams</span>
      </h2>

      <div className="
        grid gap-6 mt-10
        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
      ">
        {bestTeams.map(team => (
          <TeamCard key={team.id} data={team} />
        ))}
      </div>
    </section>
  );
}
