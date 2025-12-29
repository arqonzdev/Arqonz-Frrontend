"use client";

import { useState } from "react";

export default function VideoSection() {

  const videoUrl = "/demo-video.mp4";

  const [activeTab, setActiveTab] = useState<"wholesale" | "customization">("wholesale");
  const [quantity, setQuantity] = useState("");
  const [quality, setQuality] = useState("");
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [showChat, setShowChat] = useState(false);


  const submitEnquiry = () => {

    if (!quantity || Number(quantity) < 5) {
      alert("Minimum order quantity is 5 bags 🙂");
      return;
    }

    if (!quality) {
      alert("Please select product quality 🙂");
      return;
    }

    setShowEnquiryModal(true);
  };


  return (
    <section className="max-w-7xl mx-auto px-6 mt-10">

      <h2 className="text-2xl font-semibold">
        Product Description from Supplier
      </h2>

      <p className="mt-4 text-lg font-medium">
        Video Description
      </p>


      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-8">


        {/* LEFT — VIDEO */}
        <div className="lg:col-span-2">
          <video
            controls
            className="w-full rounded-2xl shadow bg-black aspect-video object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>



        {/* RIGHT — PRICE CARD */}
        <div className="rounded-2xl shadow bg-orange-50 p-6">


          {/* TABS */}
          <div className="flex gap-6 mb-4 font-medium">

            <button
              onClick={() => setActiveTab("wholesale")}
              className={activeTab === "wholesale" ? "border-b-2 border-black pb-1" : "text-gray-500"}
            >
              Wholesale
            </button>

            <button
              onClick={() => setActiveTab("customization")}
              className={activeTab === "customization" ? "border-b-2 border-black pb-1" : "text-gray-500"}
            >
              Customization
            </button>

          </div>


          <p className="text-xs text-gray-600">5 days to dispatch</p>

          <p className="text-2xl font-bold mt-2">
            ₹1,456 
            <span className="text-gray-400 text-sm line-through ml-2">1,856</span>
          </p>

          <p className="text-emerald-600 font-medium text-sm mt-1">
            20% off
          </p>


          <p className="text-sm mt-4 text-gray-700">
            Colors: Grey (variations)
          </p>

          <div className="flex gap-3 mt-2">
            <div className="w-8 h-8 rounded-full bg-gray-700" />
            <div className="w-8 h-8 rounded-full bg-gray-200 border" />
          </div>


          {/* INPUTS */}
          <input
            placeholder="Enter Quantity (Min 5)"
            className="border rounded-lg px-3 py-2 w-full text-sm mt-4"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
          />

          <select
            className="border rounded-lg px-3 py-2 w-full text-sm mt-3"
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
          >
            <option value="">Select Quality</option>
            <option value="A">Grade A</option>
            <option value="B">Grade B</option>
          </select>



          {/* BUTTONS */}
          <button
            className="mt-4 w-full bg-emerald-900 text-white py-3 rounded-xl"
            onClick={submitEnquiry}
          >
            Send Enquiry
          </button>

          <button
            className="mt-3 w-full bg-black text-white py-3 rounded-xl"
            onClick={() => setShowChat(true)}
          >
            Chat Now
          </button>


        </div>
      </div>




      {/* ================= MODALS ================= */}

      {/* Enquiry Modal */}
      {showEnquiryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96">

            <h3 className="text-lg font-semibold">Enquiry Sent ✅</h3>

            <p className="text-sm mt-2">
              Supplier will contact you soon.
            </p>

            <button
              className="mt-4 bg-emerald-900 text-white px-4 py-2 rounded-lg"
              onClick={() => setShowEnquiryModal(false)}
            >
              Close
            </button>

          </div>
        </div>
      )}


      {/* Chat Box */}
      {showChat && (
        <div className="fixed bottom-6 right-6 bg-white shadow-lg rounded-xl p-4 w-80">

          <p className="font-medium">Chat with Supplier</p>

          <p className="text-xs text-gray-500 mt-1">
            (Dummy chat — backend data )
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
