import Hero from "@/components/professionals/Hero";
import RecommendedSection from "@/components/professionals/RecommendedSection";
import CommercialPros from "@/components/professionals/CommercialPros";
import CategoriesStrip from "@/components/professionals/CategoriesStrip";
import BestTeams from "@/components/professionals/BestTeams";
import TrendingProjects from "@/components/professionals/TrendingProjects";
import FeaturedPortfolios from "@/components/professionals/FeaturedPortfolios";
import ShowcasedSuppliers from "@/components/suppliers/ShowcasedSuppliers";

export default function ProfessionalsPage() {
  return (
    <main>
      <Hero />
      <RecommendedSection />
      <CommercialPros />
      <CategoriesStrip />
      <BestTeams />
      <TrendingProjects />
      <FeaturedPortfolios />
      <ShowcasedSuppliers />
    </main>
  );
}
