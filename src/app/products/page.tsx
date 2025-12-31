import HeroSection from "@/components/products/HeroSection";
import ExploreProducts from "@/components/products/ExploreProducts";
import RecommendedDeals from "@/components/products/RecommendedDeals";
import ProductsStatsPanel from "@/components/products/ProductsStatsPanel";

import ProductSection from "@/components/products/ProductSection";
import AllProductsGrid from "@/components/products/AllProductsGrid";

import { topDeals, newArrivals, allProducts } from "@/data/products";


export default function ProductsPage() {
  return (
    <>
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4">

        {/* Categories */}
        <ExploreProducts />

        {/* Blue Stats Section */}
        <ProductsStatsPanel />

        <RecommendedDeals/>
        {/* Top Deals */}
        <ProductSection
          title="Top Deals"
          products={topDeals}
        />

        {/* New Arrivals */}
        <ProductSection
          title="New Arrivals from Suppliers"
          products={newArrivals}
        />

        {/* ⭐ Full Product Listing Grid */}
       <AllProductsGrid products={allProducts} />

      </div>
    </>
  );
}
