const items = [
  { title: "Wooden Furniture", image: "/images/furniture.jpg" },
  { title: "Cushions", image: "/images/cushions.jpg" },
  { title: "Lights", image: "/images/lights.jpg" },
];

export default function FurnitureEssentials() {
  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="relative h-32 rounded-xl overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gray-200" />
          <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
            <span className="font-semibold bg-white/90 px-3 py-1 rounded-full text-sm">
              {item.title}
            </span>
            <span className="bg-white w-8 h-8 flex items-center justify-center rounded-full">
              →
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
