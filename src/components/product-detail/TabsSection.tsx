"use client";

export default function TabsSection() {

  const tabs = [
    { label: "Product Information", id: "product-info" },
    { label: "Packing & Delivery", id: "packing-delivery" },
    { label: "Reviews", id: "reviews" },
    { label: "Know your supplier", id: "supplier" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="border-b pb-2 flex gap-8 overflow-x-auto">

      {tabs.map(t => (
        <button
          key={t.id}
          onClick={() => scrollToSection(t.id)}
          className="text-gray-600 hover:text-black pb-2 font-medium"
        >
          {t.label}
        </button>
      ))}

    </div>
  );
}
