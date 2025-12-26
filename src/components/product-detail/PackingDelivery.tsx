"use client";

export default function PackingDelivery() {
  return (
    <section className="bg-white rounded-2xl shadow-sm border overflow-hidden">

      {/* HEADER STRIP */}
      <div className="bg-orange-50 border-b px-6 py-4">
        <h3 className="text-xl font-semibold">Packing & Delivery</h3>
      </div>

      {/* CONTENT */}
      <div className="px-6 py-6 text-gray-700 leading-relaxed">

        <ul className="list-disc pl-5 space-y-2">
          <li>Services All Over India</li>
          <li>
            Material Sources: Commonly sourced from natural rock quarries, river beds,
            or by crushing larger stones.
          </li>
          <li>
            Size Range: Typically ranges from 5 mm to 40 mm,
            depending on construction requirements.
          </li>
          <li>
            Key Properties: Strong, durable, angular or rounded in shape,
            and free from clay, silt, and other impurities.
          </li>
          <li>IS 383 Certified, ASTM C33 Compliant</li>
        </ul>

      </div>

    </section>
  );
}
