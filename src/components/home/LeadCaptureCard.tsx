"use client";

import Link from "next/link";

export default function LeadCaptureCard() {
  return (
    <div className="overflow-hidden rounded-[28px] bg-[#F7E3D6] shadow-xl">

      {/* Top black strip */}
      <div className="bg-black px-6 py-3 text-sm font-normal text-white">
        Please provide a detailed enquiry so that we can assist your specific needs
      </div>

      {/* Body */}
      <div className="px-7 py-6">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-teal-800">
              Post your requirements
            </h3>
            <p className="text-sm text-gray-600">
              Tell us what you need, and we’ll help you
            </p>
          </div>

          <div className="text-right">
            <div className="font-semibold text-gray-800">ARQONZ.COM</div>
            <div className="text-xs text-gray-500">
              Construction Marketplace
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4">

          {/* Name + Email */}
          <div className="flex gap-4">
            <input
              placeholder="First Name"
              className="w-1/2 rounded-xl border border-gray-400 bg-[#F7E3D6] px-4 py-3 text-sm outline-none placeholder:text-gray-600 focus:border-teal-700"
            />

            <div className="flex w-1/2 gap-3">
              <input
                placeholder="Enter your mail"
                className="flex-1 rounded-xl border border-gray-400 bg-[#F7E3D6] px-4 py-3 text-sm outline-none placeholder:text-gray-600 focus:border-teal-700"
              />
              <button
                type="button"
                className="rounded-xl bg-teal-800 px-6 py-3 text-sm font-medium text-white"
              >
                Verify
              </button>
            </div>
          </div>

          {/* Country + Mobile */}
          <div className="flex gap-4">
            <div className="flex w-[120px] items-center justify-between rounded-xl border border-gray-400 bg-[#F7E3D6] px-3 py-3 text-sm">
              <span className="flex items-center gap-2">
                🇮🇳 <span>+91</span>
              </span>
              <span className="text-gray-600">▼</span>
            </div>

            <div className="flex flex-1 gap-3">
              <input
                placeholder="Enter Mobile Number"
                className="flex-1 rounded-xl border border-gray-400 bg-[#F7E3D6] px-4 py-3 text-sm outline-none placeholder:text-gray-600 focus:border-teal-700"
              />
              <button
                type="button"
                className="rounded-xl bg-teal-800 px-6 py-3 text-sm font-medium text-white"
              >
                Verify
              </button>
            </div>
          </div>

          {/* Label */}
          <p className="text-sm font-medium text-gray-700">
            Please provide your requirement details
          </p>

          {/* Textarea */}
          <textarea
            rows={4}
            defaultValue="I want to connect with an architect"
            className="w-full resize-none rounded-2xl border border-gray-400 bg-[#F7E3D6] px-4 py-4 text-sm outline-none placeholder:text-gray-600 shadow-inner focus:border-teal-700"
          />

          {/* Record */}
          <div className="flex items-center gap-2 text-sm text-pink-600">
            🎤 <span className="cursor-pointer">Tap to Record</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center gap-4">

          {/* Submit Request */}
          <button
            type="button"
            className="flex-1 rounded-2xl bg-teal-700 py-3 text-sm font-semibold text-white"
          >
            Submit Request
          </button>

          {/* Schedule Demo */}
          <Link href="/demo" className="flex-1">
            <button
              type="button"
              className="w-full rounded-2xl bg-teal-900 py-3 text-sm font-semibold text-white"
            >
              Schedule a Demo
            </button>
          </Link>

        </div>

        {/* Phone */}
        <div className="mt-3 flex items-center justify-end gap-2 text-sm text-teal-800">
          📞 <span className="font-medium">+91 99999 99999</span>
        </div>
      </div>
    </div>
  );
}
