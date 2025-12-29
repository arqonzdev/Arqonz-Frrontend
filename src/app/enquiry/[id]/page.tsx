"use client";

import Image from "next/image";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function EnquiryPage() {

  const params = useParams();
  const professionalName = "Antony Jose";   // TODO replace with API data

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log("Form Submitted:", form);

    // -------- BACKEND PLACEHOLDER ----------
    // await fetch("/api/enquiries", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     professionalId: params.id,
    //     ...form
    //   })
    // });
    // ---------------------------------------
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white rounded-xl shadow">

      {/* BANNER */}
      <div className="relative h-48 rounded-t-xl overflow-hidden">
        <Image
          src="/images/enquiry-banner.jpg"
          alt="Enquiry Banner"
          fill
          className="object-cover"
        />
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="p-6">

        <h2 className="text-center text-xl font-semibold mb-6">
          Enquire with {professionalName}
        </h2>

        {/* FULL NAME */}
        <label className="font-medium">Full Name</label>
        <input
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          className="w-full mt-1 mb-4 rounded-md border p-3 bg-gradient-to-b from-white to-rose-50"
          placeholder="Enter your full name"
        />

        {/* EMAIL */}
        <label className="font-medium">E-mail</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full mt-1 mb-4 rounded-md border p-3 bg-gradient-to-b from-white to-rose-50"
          placeholder="Enter your email"
        />

        {/* PHONE */}
        <label className="font-medium">Phone</label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full mt-1 mb-4 rounded-md border p-3 bg-gradient-to-b from-white to-rose-50"
          placeholder="Enter your phone"
        />

        {/* CITY */}
        <label className="font-medium">City</label>
        <input
          name="city"
          value={form.city}
          onChange={handleChange}
          className="w-full mt-1 mb-4 rounded-md border p-3 bg-gradient-to-b from-white to-rose-50"
          placeholder="Your city"
        />

        {/* MESSAGE */}
        <label className="font-medium">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full mt-1 mb-4 rounded-md border p-3 h-32 bg-gradient-to-b from-white to-rose-50"
          placeholder="Write your message"
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-emerald-900 hover:bg-emerald-950 text-white py-3 rounded-md"
        >
          Submit
        </button>

      </form>
    </div>
  );
}
