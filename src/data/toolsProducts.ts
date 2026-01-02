// src/data/toolsProducts.ts

export interface ToolProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  discount: string;
  moq: number;
  rating: number;

  slug: string;   // ⭐ added for product URL
}

export const toolCategories = [
  "Design tools",
  "Procurement tools",
  "Supplier tools",
  "Networking tools",
  "Operation tools",
  "Sales & Marketing",
  "Recruitment tools",
  "Intelligence (AQIQ)",
];

export const toolsProducts: ToolProduct[] = [
  {
    id: 1,
    title: "High-Strength Cement Blocks",
    image: "/cement.png",
    price: 1456,
    discount: "20% off",
    moq: 10,
    rating: 4.3,
    slug: "high-strength-cement-blocks-1",
  },
  {
    id: 2,
    title: "High-Strength Cement Blocks",
    image: "/cement.png",
    price: 1520,
    discount: "20% off",
    moq: 10,
    rating: 4.3,
    slug: "high-strength-cement-blocks-2",
  },
  {
    id: 3,
    title: "High-Strength Cement Blocks",
    image: "/cement.png",
    price: 1600,
    discount: "20% off",
    moq: 10,
    rating: 4.3,
    slug: "high-strength-cement-blocks-3",
  },
  {
    id: 4,
    title: "High-Strength Cement Blocks",
    image: "/cement.png",
    price: 1480,
    discount: "20% off",
    moq: 10,
    rating: 4.3,
    slug: "high-strength-cement-blocks-4",
  },
];
