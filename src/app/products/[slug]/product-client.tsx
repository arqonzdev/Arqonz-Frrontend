"use client";

import HeaderSection from "@/components/product-detail/HeaderSection";
import GallerySection from "@/components/product-detail/GallerySection";
import VariantSelector from "@/components/product-detail/VariantSelector";
import PriceOrderPanel from "@/components/product-detail/PriceOrderPanel";
import TabsSection from "@/components/product-detail/TabsSection";
import TechnicalDetails from "@/components/product-detail/TechnicalDetails";
import PackingDelivery from "@/components/product-detail/PackingDelivery";
import ReviewsSection from "@/components/product-detail/ReviewsSection";
import KnowSupplier from "@/components/product-detail/KnowSupplier";
import VideoSection from "@/components/product-detail/VideoSection";
import SupplierPopularProducts from "@/components/product-detail/SupplierPopularProducts";
import RecommendedProducts from "@/components/product-detail/RecommendedProducts";
import BomCtaBanner from "@/components/product-detail/BomCtaBanner";

import { supplierPopularProducts, recommendedProducts } from "@/data/products";

export default function ProductDetailPage() {

  const supplier = {
    name: "Nandi Plastic Cement Store",
    location: "Chennai",
    type: "Retailer Store",
    overview: "We are in the Industry Since 2024...",
    stats: {
      ordersDelivered: "25K+",
      responseTime: "<3 hrs",
      productsCount: "120+"
    }
  };

  return (
    <div className="bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 pt-6">
        <HeaderSection />
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2">
          <GallerySection />
          <VariantSelector />
        </div>

        <div>
          <PriceOrderPanel />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10">
        <TabsSection />
      </div>

      <div id="product-info" className="max-w-7xl mx-auto px-6 mt-8">
        <TechnicalDetails />
      </div>

      <div id="packing-delivery" className="max-w-7xl mx-auto px-6 mt-8">
        <PackingDelivery />
      </div>

      <div id="reviews" className="max-w-7xl mx-auto px-6 mt-8">
        <ReviewsSection />
      </div>

      <div id="supplier" className="max-w-7xl mx-auto px-6 mt-8">
        <KnowSupplier supplier={supplier} />
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8">
        <VideoSection />
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8">
        <SupplierPopularProducts products={supplierPopularProducts} />
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8">
        <RecommendedProducts products={recommendedProducts} />
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 mb-20">
        <BomCtaBanner />
      </div>

    </div>
  );
}
