"use client";

import { useState } from "react";
import { Supplier } from "@/types/product";

interface Props {
  supplier?: Supplier;
}

export default function KnowSupplier({ supplier }: Props) {

  const [showChat, setShowChat] = useState(false);

  if (!supplier) return null;

  return (
    <section className="bg-white rounded-2xl p-6 mt-10 shadow-sm">

      {/* Header strip */}
      <div className="bg-orange-50 px-6 py-4 rounded-t-2xl -mx-6 -mt-6 mb-6">
        <h2 className="text-2xl font-semibold">
          Know your Supplier
        </h2>
      </div>


      <div className="flex flex-col md:flex-row justify-between gap-10">

        {/* ============ LEFT CONTENT ============ */}
        <div className="flex-1">

          {/* Avatar + Name */}
          <div className="flex gap-4 items-center">
            <img
              src={supplier.logo || "/placeholder.png"}
              className="w-20 h-20 rounded-full object-cover"
            />

            <div>
              <p className="font-semibold underline">
                {supplier.name}
              </p>

              <p className="text-gray-600 text-sm">
                {supplier.type}
              </p>

              <p className="text-gray-600 text-sm">
                {supplier.location}
              </p>
            </div>
          </div>


          {/* Company Overview */}
<div className="mt-6">
  <p className="font-semibold">
    Company Overview
  </p>

  <p className="text-gray-700 text-sm mt-2 leading-relaxed">
    We are in the Industry Since 2024, A retail shop, also known as a retail
    store, is a physical establishment where businesses sell products directly
    to consumers for personal use. We are in the Industry Since 2024.
  </p>
</div>


          {/* Stats Bar */}
          <div className="flex flex-col md:flex-row mt-6 bg-black text-white rounded-xl">

            <div className="flex-1 px-6 py-4 text-center">
              <p className="text-xl font-semibold">Orders</p>
              <p className="text-sm mt-1 opacity-80">{supplier.stats.ordersDelivered}</p>
            </div>

            <div className="hidden md:block w-px bg-gray-600" />

            <div className="flex-1 px-6 py-4 text-center">
              <p className="text-xl font-semibold">Response Time</p>
              <p className="text-sm mt-1 opacity-80">{supplier.stats.responseTime}</p>
            </div>

            <div className="hidden md:block w-px bg-gray-600" />

            <div className="flex-1 px-6 py-4 text-center">
              <p className="text-xl font-semibold">Products</p>
              <p className="text-sm mt-1 opacity-80">{supplier.stats.productsCount}</p>
            </div>

          </div>

        </div>



        {/* ============ RIGHT BUTTONS ============ */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">

          <button
            className="bg-emerald-900 text-white w-full py-3 rounded-lg font-medium"
            onClick={() => setShowChat(true)}
          >
            Chat with Supplier
          </button>

          <button className="bg-emerald-900 text-white w-full py-3 rounded-lg font-medium">
            Company Profile
          </button>

          <button className="border border-gray-300 w-full py-3 rounded-lg font-medium">
            More Products
          </button>

        </div>

      </div>



      {/* ================= CHAT POPUP ================= */}

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
