// src/types/product.ts

export interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  minOrderQty: number | string;
  rating: number;
  slug: string;
}


export interface Supplier {
  name: string;
  location: string;
  type: string;

  stats: {
    ordersDelivered: string;
    responseTime: string;
    productsCount: string;
  };
}
