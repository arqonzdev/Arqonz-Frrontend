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

export default function ProductDetailPage() {

  /* ---------- SUPPLIER DATA ---------- */
  const supplier = {
    name: "Nandi Plastic Cement Store",
    location: "Chennai",
    type: "Retailer Store",
    stats: {
      ordersDelivered: "25K+",
      responseTime: "<3 hrs",
      productsCount: "120+"
    }
  };

  /* ---------- SUPPLIER POPULAR PRODUCTS ---------- */
  const supplierPopularProducts = [
    {
      id: "1",
      title: "High-Strength Cement Blocks — Durable & Weather-Resistant",
      price: 1456,
      originalPrice: 1856,
      minOrderQty: "1 ton",
      discountPercent: 20,
      rating: 4.3,
      image: "/img/brick.jpg",
      slug: "cement-block-1"
    },
    {
      id: "2",
      title: "Premium Quality Grey Cement for Construction",
      price: 1556,
      originalPrice: 1856,
      minOrderQty: "5 Bags",
      discountPercent: 20,
      rating: 4.5,
      image: "/img/cement.jpg",
      slug: "premium-grey-cement"
    },
    {
      id: "3",
      title: "Construction Grade Cement Bricks",
      price: 1256,
      originalPrice: 1656,
      minOrderQty: "500 pcs",
      discountPercent: 24,
      rating: 4.1,
      image: "/img/bricks.jpg",
      slug: "cement-bricks"
    }
  ];

  /* ---------- OTHER PRODUCT RECOMMENDATIONS ---------- */
  const recommendedProducts = [
    {
      id: "10",
      title: "High-Strength Cement Blocks",
      price: 1456,
      originalPrice: 1856,
      minOrderQty: "1 ton",
      discountPercent: 20,
      rating: 4.3,
      image: "/img/brick.jpg",
      slug: "cement-block-2"
    },
    {
      id: "11",
      title: "Premium Grey Cement",
      price: 1499,
      originalPrice: 1899,
      minOrderQty: "5 Bags",
      discountPercent: 21,
      rating: 4.4,
      image: "/img/cement.jpg",
      slug: "grey-cement-2"
    },
    {
      id: "12",
      title: "Solid Construction Bricks",
      price: 1200,
      originalPrice: 1600,
      minOrderQty: "300 pcs",
      discountPercent: 25,
      rating: 4.2,
      image: "/img/bricks.jpg",
      slug: "construction-bricks-2"
    },
    {
      id: "13",
      title: "Ready Mix Concrete Material",
      price: 2500,
      originalPrice: 3000,
      minOrderQty: "1 ton",
      discountPercent: 17,
      rating: 4.6,
      image: "/img/concrete.jpg",
      slug: "ready-mix-concrete"
    }
  ];

  return (
    <div className="bg-gray-50">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <HeaderSection />
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2">
          <GallerySection />
          <VariantSelector />
        </div>

        <div>
          <PriceOrderPanel />
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <TabsSection />
      </div>

      {/* Product Information */}
      <div id="product-info" className="max-w-7xl mx-auto px-6 mt-8">
        <TechnicalDetails />
      </div>

      {/* Packing & Delivery */}
      <div id="packing-delivery" className="max-w-7xl mx-auto px-6 mt-8">
        <PackingDelivery />
      </div>

      {/* Reviews */}
      <div id="reviews" className="max-w-7xl mx-auto px-6 mt-8">
        <ReviewsSection />
      </div>

      {/* Supplier */}
      <div id="supplier" className="max-w-7xl mx-auto px-6 mt-8">
        <KnowSupplier supplier={supplier} />
      </div>

      {/* Video */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <VideoSection />
      </div>

      {/* Supplier Popular Products */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <SupplierPopularProducts products={supplierPopularProducts} />
      </div>

      {/* Other Recommendations */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <RecommendedProducts products={recommendedProducts} />
      </div>

      {/* BOM CTA */}
      <div className="max-w-7xl mx-auto px-6 mt-8 mb-20">
        <BomCtaBanner />
      </div>

    </div>
  );
}
