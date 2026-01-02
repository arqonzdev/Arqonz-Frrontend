import ProductDetailPage from "./product-client";

export async function generateStaticParams() {
  return [
    { slug: "cement" },
    { slug: "tiles" },
    { slug: "bricks" },
  ];
}

export default function Page() {
  return <ProductDetailPage />;
}
