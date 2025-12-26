import Link from "next/link";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
  showFlashDeal?: boolean;
}

export default function ProductCard({ product, showFlashDeal }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`}>
      <Card className="hover:shadow-lg transition-shadow h-full cursor-pointer">
        <CardContent className="p-4 h-full flex flex-col">

          {showFlashDeal && (
            <div className="bg-pink-600 text-white px-3 py-1 rounded-md inline-block text-xs font-medium mb-2">
              ⚡ Flash Deals
            </div>
          )}

          <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-100">
            <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
          </div>

          <div className="mt-3 text-sm text-gray-600">⭐ {product.rating}</div>

          <h3 className="mt-2 text-sm font-medium text-gray-900 line-clamp-2 min-h-[40px]">
            {product.title}
          </h3>

          <p className="mt-1 text-xs text-gray-500">MOQ: {product.minOrderQty}</p>

          <div className="mt-2 flex items-center gap-2">
            <span className="text-base font-semibold text-gray-900">
              ₹ {product.price.toLocaleString()}
            </span>

            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {product.originalPrice.toLocaleString()}
              </span>
            )}

            {product.discountPercent && (
              <span className="text-xs font-medium text-green-600">
                {product.discountPercent}% off
              </span>
            )}
          </div>

          <div className="mt-4 pt-2 flex-1 flex items-end">
            <Button className="w-full" size="sm">
              Send Enquiry
            </Button>
          </div>

        </CardContent>
      </Card>
    </Link>
  );
}
