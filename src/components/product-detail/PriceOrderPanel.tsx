"use client";

import { useState } from "react";

export default function PriceOrderPanel() {

  const [showChat, setShowChat] = useState(false);

  return (
    <div className="bg-white rounded-3xl shadow p-6">

      <p className="text-sm text-gray-600">
        Minimum order quantity: <span className="font-medium">5 Bags</span>
      </p>

      <p className="text-xs mt-1">5 days to dispatch ⓘ</p>

      <p className="text-3xl font-semibold mt-3">
        ₹1,456 <span className="text-gray-400 line-through text-lg">1,856</span>
      </p>

      <p className="text-rose-600 font-medium mt-1">20% off</p>

      {/* COLOR */}
      <p className="mt-5 text-sm font-medium">Colors: Grey (variations)</p>

      <div className="flex gap-4 mt-2">
        <div className="w-8 h-8 rounded-full bg-gray-700"></div>
        <div className="w-8 h-8 rounded-full bg-gray-200 border"></div>
      </div>

      {/* Quantity */}
      <input
        placeholder="Enter Quantity"
        className="mt-4 w-full border rounded-xl px-4 py-2"
      />

      {/* Buttons */}
      <button className="w-full bg-emerald-900 text-white mt-4 rounded-xl py-2">
        Send Enquiry
      </button>

      <button
        className="w-full bg-gray-900 text-white mt-3 rounded-xl py-2"
        onClick={() => setShowChat(true)}
      >
        Chat Now
      </button>



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

    </div>
  );
}
