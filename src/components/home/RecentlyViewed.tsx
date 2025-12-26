const products = [
  {
    title: "High-Strength Cement Blocks",
    price: "₹1,456",
    rating: "4.3",
    image: "/images/cement.png",
  },
  {
    title: "High-Strength Cement Blocks",
    price: "₹1,456",
    rating: "4.3",
    image: "/images/cement.png",
  },
  {
    title: "High-Strength Cement Blocks",
    price: "₹1,456",
    rating: "4.3",
    image: "/images/cement.png",
  },
  {
    title: "High-Strength Cement Blocks",
    price: "₹1,456",
    rating: "4.3",
    image: "/images/cement.png",
  },
];

export default function RecentlyViewed() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((p, i) => (
        <div
          key={i}
          className="border rounded-xl p-3 text-sm hover:shadow transition"
        >
          <div className="bg-gray-100 h-28 rounded mb-2" />
          <p className="font-medium leading-tight">{p.title}</p>
          <div className="flex justify-between items-center mt-2">
            <span className="font-semibold">{p.price}</span>
            <span className="text-green-600">⭐ {p.rating}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
