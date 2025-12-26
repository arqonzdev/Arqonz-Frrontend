export interface CategoryNode {
  name: string;
  slug: string;
  children?: CategoryNode[];
}

export const categories: CategoryNode[] = [
  {
    name: "Civil Materials",
    slug: "civil-materials",
    children: [
      {
        name: "Cement",
        slug: "cement",
        children: [
          { name: "OPC-53 Grade Cement", slug: "opc-53" },
          { name: "PPC Cement", slug: "ppc-cement" },
        ],
      },

      {
        name: "TMT Steel Bars",
        slug: "tmt-steel-bars",
        children: [
          { name: "Fe-500 Grade TMT Bars", slug: "fe-500" },
          { name: "Fe-550 Grade TMT Bars", slug: "fe-550" },
          { name: "TMT Binding Wire", slug: "binding-wire" },
          { name: "Rebar Couplers", slug: "rebar-couplers" },
        ],
      },

      {
        name: "Bricks & Blocks",
        slug: "bricks-blocks",
        children: [
          { name: "Red Bricks", slug: "red-bricks" },
          { name: "Concrete Solid Blocks", slug: "solid-blocks" },
          { name: "Fly Ash Bricks", slug: "fly-ash-bricks" },
          { name: "AAC Blocks", slug: "aac-blocks" },
        ],
      },

      {
        name: "RMC (Ready Mix Concrete)",
        slug: "rmc",
      },

      {
        name: "Roofing Solutions",
        slug: "roofing",
      },

      {
        name: "Construction Chemicals",
        slug: "construction-chemicals",
        children: [
          { name: "Adhesive", slug: "adhesive" },
          { name: "Dry Mix", slug: "dry-mix" },
          { name: "Solvents", slug: "solvents" },
          { name: "Waterproofing Chemicals", slug: "waterproofing" },
        ],
      },
    ],
  },

  // ------------------------------------------------------------

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
          { name: "Water Tanks", slug: "water-tanks" },
          { name: "Sanitaryware", slug: "sanitaryware" },
        ],
      },

      {
        name: "Electrical",
        slug: "electrical",
        children: [
          { name: "Conduit Pipes & Fittings", slug: "conduit" },
          { name: "Wires & Cables", slug: "cables" },
          { name: "Switches & Sockets", slug: "switches" },
          { name: "Electric Panels", slug: "electric-panels" },
          { name: "Switch Gear", slug: "switch-gear" },
          { name: "Lighting & Fixtures", slug: "lighting" },
        ],
      },
    ],
  },

  // ------------------------------------------------------------

  {
    name: "Doors & Windows",
    slug: "doors-windows",
    children: [
      { name: "UPVC Doors", slug: "upvc-doors" },
      { name: "UPVC Windows", slug: "upvc-windows" },
      { name: "Wooden Doors", slug: "wooden-doors" },
      { name: "Aluminium Doors & Windows", slug: "aluminium-doors" },
      { name: "Steel Doors", slug: "steel-doors" },

      {
        name: "Hardware Fixtures",
        slug: "hardware",
        children: [
          { name: "Luxury Handles", slug: "luxury-handles" },
          { name: "Premium Handles", slug: "premium-handles" },
          { name: "Mortise Locks", slug: "mortise-locks" },
          { name: "Latches & Hinges", slug: "latches" },
          { name: "Cabinet Hardware", slug: "cabinet-hardware" },
        ],
      },
    ],
  },

  // ------------------------------------------------------------

  {
    name: "Kitchen & Wardrobe",
    slug: "kitchen-wardrobe",
    children: [
      {
        name: "Modular Kitchen",
        slug: "modular-kitchen",
        children: [
          { name: "Base Units", slug: "base-units" },
          { name: "Tall Units", slug: "tall-units" },
          { name: "Shutters & Panels", slug: "shutters" },
          { name: "Countertops", slug: "countertops" },
          { name: "Sinks & Faucets", slug: "sinks" },
          { name: "Chimneys & Hobs", slug: "chimneys-hobs" },
        ],
      },

      {
        name: "Wardrobes",
        slug: "wardrobes",
        children: [
          { name: "Sliding", slug: "sliding" },
          { name: "Walk-in", slug: "walk-in" },
        ],
      },
    ],
  },

  // ------------------------------------------------------------

  {
    name: "Home Décor",
    slug: "home-decor",
    children: [
      { name: "Accessories", slug: "decor-accessories" },
      { name: "Wall Art", slug: "wall-art" },
      { name: "Curtains", slug: "curtains" },
      { name: "Rugs & Carpets", slug: "rugs" },
      { name: "Decor Lighting", slug: "decor-lighting" },
      { name: "Planters & Showpieces", slug: "planters" },
    ],
  },

  // ------------------------------------------------------------

  {
    name: "Indoor & Outdoor Furniture",
    slug: "furniture",
    children: [
      { name: "Sofas", slug: "sofas" },
      { name: "Beds", slug: "beds" },
      { name: "Dining Tables", slug: "dining-tables" },
      { name: "Office Furniture", slug: "office-furniture" },
      { name: "Outdoor Furniture", slug: "outdoor-furniture" },
    ],
  },
];
