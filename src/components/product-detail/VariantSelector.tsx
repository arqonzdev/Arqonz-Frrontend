"use client";

export default function VariantSelector() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">

      <div className="border rounded-2xl p-4 bg-rose-50">
        <p className="font-medium">Grey</p>
        <p className="text-sm">₹1,456 <span className="line-through text-gray-400 text-xs">1,856</span></p>
        <p className="text-xs text-green-600">20% off</p>
      </div>

      <div className="border rounded-2xl p-4">
        <p className="font-medium">White</p>
        <p className="text-sm">₹1,556 <span className="line-through text-gray-400 text-xs">1,856</span></p>
        <p className="text-xs text-green-600">20% off</p>
      </div>

    </div>
  );
}
