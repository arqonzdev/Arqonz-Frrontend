import { Portfolio } from "@/types/portfolio";

export const featuredPortfolios: Portfolio[] = [
  {
    id: 1,
    studioName: "Anuraga studio",
    ownerName: "Anuraga",
    city: "Chennai",
    featured: true,
    profileImage: "/images/portfolios/u1.jpg",
    gallery: [
      "/images/portfolios/p1a.jpg",
      "/images/portfolios/p1b.jpg",
      "/images/portfolios/p1c.jpg"
    ],
    profileLink: "/portfolios/1"
  },
  {
    id: 2,
    studioName: "Hema",
    ownerName: "Hema",
    city: "Chennai",
    featured: true,
    profileImage: "/images/portfolios/u2.jpg",
    gallery: [
      "/images/portfolios/p2a.jpg",
      "/images/portfolios/p2b.jpg",
      "/images/portfolios/p2c.jpg"
    ],
    profileLink: "/portfolios/2"
  },
  {
    id: 3,
    studioName: "Anurag Kashyap",
    ownerName: "Anurag",
    city: "Chennai",
    featured: true,
    profileImage: "/images/portfolios/u3.jpg",
    gallery: [
      "/images/portfolios/p3a.jpg",
      "/images/portfolios/p3b.jpg",
      "/images/portfolios/p3c.jpg"
    ],
    profileLink: "/portfolios/3"
  }
];
