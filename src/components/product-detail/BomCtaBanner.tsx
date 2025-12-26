"use client";

import Link from "next/link";
import { FaClipboardList } from "react-icons/fa6";

export default function BomCtaBanner() {
  return (
    <div className="bg-orange-50 rounded-2xl px-6 py-5 mt-10 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">

      {/* TEXT */}
      <p className="text-sm md:text-base font-medium text-gray-800 leading-relaxed">
        Still searching for the right construction supplier? 
        Get competitive quotes from verified vendors — 
        <span className="font-semibold">
          {" "}submit your Bill of Materials (BOM)
        </span>{" "}
        now and receive the best price offers.
      </p>

      {/* BUTTON */}
      <Link href="/bom-request">
        <button className="flex items-center gap-2 bg-emerald-900 hover:bg-emerald-800 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 shadow-md hover:scale-[1.03] active:scale-100">

          <FaClipboardList size={18} />

          Request BOM
        </button>
      </Link>

    </div>
  );
}
