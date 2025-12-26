"use client";

import { useState } from "react";
import Link from "next/link";

interface SupplierProduct {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  minOrder: string;
  image: string;
  slug: string;
}

interface Props {
  products?: SupplierProduct[];
}

export default function SupplierPopularProducts({ products = [] }: Props) {

  const [showChat, setShowChat] = useState(false);

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-4">
        Supplier’s Popular Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {products.map((p) => (
          <div
            key={p.id}
            className="border rounded-xl overflow-hidden bg-white shadow-sm"
          >

            <Link href={`/products/${p.slug}`}>
              <div className="aspect-[4/3] bg-gray-100">
                <img
                  src={p.image}
                  className="w-full h-full object-cover"
                  alt={p.title}
                />
              </div>

              <div className="p-4">
                <p className="text-sm text-gray-700 line-clamp-2 min-h-[40px]">
                  {p.title}
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-lg font-semibold">
                    ₹{p.price.toLocaleString()}
                  </span>

                  {p.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ₹{p.originalPrice}
                    </span>
                  )}
                </div>

                <p className="text-xs text-gray-600 mt-1">
                  Min Order: {p.minOrder}
                </p>

                <p className="text-emerald-700 text-sm font-medium mt-1">
                  20% off
                </p>
              </div>
            </Link>

            <div className="px-4 pb-4">
              <button
                className="bg-emerald-900 text-white w-full py-2 rounded-lg"
                onClick={() => setShowChat(true)}
              >
                Chat Now
              </button>
            </div>

          </div>
        ))}

      </div>



      {/* =============== CHAT POPUP =============== */}
      {showChat && (
        <div className="fixed bottom-6 right-6 bg-white shadow-lg rounded-xl p-4 w-80">

          <p className="font-medium">Chat with Supplier</p>

          <p className="text-xs text-gray-500 mt-1">
            (Dummy chat — backend aane par connect kar denge)
          </p>

          <textarea
            className="w-full border rounded-lg mt-3 p-2 text-sm"
            rows={3}
            placeholder="Type message..."
          />

          <div className="flex justify-end gap-2 mt-2">
            <button
              className="text-gray-500 text-sm"
              onClick={() => setShowChat(false)}
            >
              Close
            </button>

            <button className="bg-emerald-900 text-white px-3 py-1 rounded-lg text-sm">
              Send
            </button>
          </div>

        </div>
      )}

    </section>
  );
}
