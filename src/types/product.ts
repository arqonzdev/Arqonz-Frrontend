// src/types/product.ts

export interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  minOrderQty: number;
  rating: number;

  slug: string;   // 👈 ADD THIS
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