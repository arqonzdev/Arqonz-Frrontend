import Link from "next/link";

export default function SmartSpeedBanner() {
  return (
    <div className="relative rounded-2xl overflow-hidden min-h-[420px]">

      {/* Background (solid for now — can be image later) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/viewed/smartb.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 p-6 text-white flex flex-col justify-between h-full">
        <div>
          <h2 className="text-xl font-bold mb-3">
            Smart Speed. Solid Quality.
          </h2>

          <p className="text-sm text-gray-200 leading-relaxed">
            Stop chasing multiple suppliers. Get verified, high-quality
            construction materials in one place—direct from Arqonz.
          </p>
        </div>

        <Link href="/products">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full w-fit">
            Explore Products
          </button>
        </Link>
      </div>
    </div>
  );
}
