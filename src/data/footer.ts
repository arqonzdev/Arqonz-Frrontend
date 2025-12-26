// src/data/footer.ts

import { FooterSection } from "@/types/footer";

export const footerDescription = {
  title: "Arqonz.com",
  subtitle: "Construction Marketplace",
  description:
    "Your complete hub for construction products, talent, and services. Find the right materials, hire skilled professionals, and access trusted suppliers—all in one platform.",
};

export const footerSections: FooterSection[] = [
  {
    title: "EXPLORE",
    links: [
      { label: "Products Showcase", href: "#" },
      { label: "Hire Professionals", href: "#" },
      { label: "Service Marketplace", href: "#" },
      { label: "Supplier Directory", href: "#" },
      { label: "Categories", href: "#" },
    ],
  },
  {
    title: "FEATURES",
    links: [
      { label: "E-Negotiate", href: "#" },
      { label: "Verified Suppliers", href: "#" },
      { label: "Smart Search (AI)", href: "#" },
      { label: "Saved Lists", href: "#" },
      { label: "Design AI", href: "#" },
    ],
  },
  {
    title: "SERVICES",
    links: [
      { label: "Become a Supplier", href: "#" },
      { label: "Post Your Projects", href: "#" },
      { label: "Sell Your Properties", href: "#" },
      { label: "Channel Partner", href: "#" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About Us", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "FAQ / Help Center", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
];
