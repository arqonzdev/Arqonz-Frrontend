// src/data/categories.ts

import { Category } from "@/types/category";

export interface CategoryNode {
  name: string;
  slug: string;
  children?: CategoryNode[];
}

export const categories: CategoryNode[] = [

  // CIVIL MATERIALS --------------------------------------------------
  {
    name: "Civil Materials",
    slug: "civil-materials",
    children: [

      {
        name: "Cement",
        slug: "cement",
        children: [
          { name: "OPC-53 Grade Cement", slug: "opc-53" },
          { name: "PPC Cement", slug: "ppc" },
        ],
      },

      {
        name: "TMT Steel Bars",
        slug: "tmt",
        children: [
          { name: "Fe-500 Grade TMT Bars", slug: "fe500" },
          { name: "Fe-550 Grade TMT Bars", slug: "fe550" },
          { name: "TMT Binding Wire", slug: "binding-wire" },
          { name: "Rebar Couplers", slug: "rebar-couplers" },
        ],
      },

      {
        name: "Bricks & Blocks",
        slug: "bricks",
        children: [
          { name: "Red Bricks", slug: "red" },
          { name: "Concrete Solid Blocks", slug: "solid" },
          { name: "Fly Ash Bricks", slug: "flyash" },
          { name: "AAC Blocks (Autoclaved Aerated Concrete)", slug: "aac" },
        ],
      },

      { name: "RMC (Ready Mix Concrete)", slug: "rmc" },
      { name: "Roofing Solutions", slug: "roofing" },

      {
        name: "Construction Chemicals",
        slug: "chemicals",
        children: [
          { name: "Adhesive", slug: "adhesive" },
          { name: "Dry Mix", slug: "dry-mix" },
          { name: "Solvents", slug: "solvents" },
          { name: "Waterproofing Chemicals", slug: "waterproofing" },
        ],
      },
    ],
  },

  // PLUMBING & ELECTRICAL --------------------------------------------
  {
    name: "Plumbing & Electrical",
    slug: "plumbing-electrical",
    children: [

      {
        name: "Plumbing",
        slug: "plumbing",
        children: [
          { name: "CPVC Pipes & Fittings", slug: "cpvc" },
          { name: "UPVC Pipes & Fittings", slug: "upvc" },
          { name: "SWR Pipes & Fittings", slug: "swr" },
          { name: "SWG Pipes", slug: "swg" },
          { name: "Water Tanks,Pumps", slug: "pumps" },
          { name: "Faucets, Showers, Sanitaryware", slug: "sanitary" },
        ],
      },

      {
        name: "Electrical",
        slug: "electrical",
        children: [
          { name: "Conduit Pipes & Fittings", slug: "conduit" },
          { name: "Wires & Cables", slug: "wires" },
          { name: "Modular Switches & Sockets", slug: "switches" },
          { name: "Electric Panels", slug: "panels" },
          { name: "Switch Gear", slug: "gear" },
          { name: "Lighting & Fixtures", slug: "lighting" },
        ],
      },
    ],
  },

  // DOORS & WINDOWS --------------------------------------------------
  {
    name: "Doors & Windows",
    slug: "doors-windows",
    children: [
      { name: "UPVC Doors", slug: "upvc-doors" },
      { name: "UPVC Windows", slug: "upvc-windows" },
      { name: "Wooden Doors (Teak, Flush, Veneer, Panel)", slug: "wooden" },
      { name: "Aluminium Doors & Windows", slug: "aluminium" },
      { name: "Steel Doors", slug: "steel-doors" },

      {
        name: "Hardware Fixtures",
        slug: "hardware",
        children: [
          { name: "Luxury Handles", slug: "luxury" },
          { name: "Premium Handles", slug: "premium" },
          { name: "Mortise Locks", slug: "locks" },
          { name: "Latches & Hinges", slug: "hinges" },
          { name: "Cabinet Hardware", slug: "cabinet" },
          { name: "Euro Profile Cylinders", slug: "cylinders" },
        ],
      },
    ],
  },

  // KITCHEN ----------------------------------------------------------
  {
    name: "Kitchen & Wardrobe",
    slug: "kitchen",
    children: [
      {
        name: "Modular Kitchen",
        slug: "modular-kitchen",
        children: [
          { name: "Base Units, Tall Units", slug: "base" },
          { name: "Kitchen Shutters & Panels", slug: "shutters" },
          { name: "Kitchen Countertops", slug: "countertops" },
          { name: "Sinks & Faucets", slug: "sinks" },
          { name: "Chimneys, Hobs", slug: "chimneys" },
          { name: "RO System", slug: "ro" },
          { name: "Accessories (Baskets, Organizers)", slug: "accessories" },
        ],
      },

      {
        name: "Wardrobes",
        slug: "wardrobes",
        children: [
          { name: "Sliding, Hinged, Walk-in", slug: "sliding" },
          { name: "Wardrobe Interiors", slug: "interiors" },
          { name: "Accessories", slug: "wardrobe-accessories" },
        ],
      },
    ],
  },

  // HOME DECOR -------------------------------------------------------
  {
    name: "Home Décor",
    slug: "decor",
    children: [
      { name: "Interior & Exterior Accessories", slug: "interior" },
      { name: "Home Accessories", slug: "home-access" },
      { name: "Wall Art, Paintings, Murals", slug: "art" },
      { name: "Writing Boards", slug: "boards" },
      { name: "Curtains, Drapes & Blinds", slug: "curtains" },
      { name: "Rugs, Carpets, Mats", slug: "rugs" },
      { name: "Decorative Lighting", slug: "lighting" },
      { name: "Planters, Showpieces", slug: "planters" },
    ],
  },

  // FURNITURE --------------------------------------------------------
  {
    name: "Indoor & Outdoor Furniture",
    slug: "furniture",
    children: [
      { name: "Sofas, Recliners, Sectionals", slug: "sofas" },
      { name: "Beds (King, Queen, Storage)", slug: "beds" },
      { name: "Dining Tables & Chairs", slug: "dining" },
      { name: "Office Furniture", slug: "office" },
      { name: "Outdoor Furniture", slug: "outdoor" },
    ],
  },

];
