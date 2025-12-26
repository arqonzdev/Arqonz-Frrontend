export default function TechnicalDetails() {

  return (
    <section className="mt-10">

      {/* Section Title */}
      <h2 className="text-xl font-semibold mb-6">
        Product Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT — Technical Details */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Technical Details
          </h3>

          <div className="divide-y border rounded-lg">

            {[
              ["Brand", "Kajaria"],
              ["Material", "Concrete"],
              ["Compatible Material", "Concrete"],
              ["Item Form", "Packet"],
              ["Special Feature", "Strong"],
              ["Colour", "Grey"],
              ["Item Package Quantity", "5"],
              ["Package Information", "Bag"],
              ["Net Quantity", "1000 Grams"],
              ["Manufacturer", "Trimurti Wall Care Products"],
              ["Country of Origin", "India"],
              ["Item Part Number", "GRYCMNT-5kg"],
              ["Product Dimensions", "22 × 17.5 × 1.5 cm"],
              ["ASIN", "B0BFDG1WV3"]
            ].map(([label, value], i) => (
              <div
                key={i}
                className="grid grid-cols-2 p-3 text-sm"
              >
                <span className="text-gray-600">{label}</span>
                <span className="font-medium text-gray-900">{value}</span>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT — Additional Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Additional Information
          </h3>

          <div className="divide-y border rounded-lg">

            {[
              ["Packer", "Trimurti Wall Care Products Pvt. Ltd"],
              ["Weight", "5kg"],
              ["Generic Name", "Grey Cement"],
              ["Certification", "ISO9001"]
            ].map(([label, value], i) => (
              <div
                key={i}
                className="grid grid-cols-2 p-3 text-sm"
              >
                <span className="text-gray-600">{label}</span>
                <span className="font-medium text-gray-900">{value}</span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
