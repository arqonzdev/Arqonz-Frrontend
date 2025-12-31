import Image from "next/image";
import Link from "next/link";

export default function RecommendedDeals() {

  const blocks = [
    {
      title: "Free Shipping, Just for you",
      gradient: "from-rose-500 to-red-400",
    },
    {
      title: "50% Price Cut",
      gradient: "from-orange-500 to-amber-400",
    },
    {
      title: "Top imports, Smart Deals",
      gradient: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section className="mt-16">

      <h2 className="text-center text-3xl font-bold mb-15">
          Recommended best deals
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {blocks.map((b, i) => (
          <div
            key={i}
            className={`
              rounded-3xl p-10 text-white shadow-xl
              bg-gradient-to-br ${b.gradient}
            `}
          >

            <h3 className="text-3xl font-semibold text-center leading-snug">
              _{b.title}
            </h3>

            <div className="flex justify-center mt-6">
              <Link
                href="/products"
                className="
                  bg-emerald-900 text-white px-6 py-2
                  rounded-full text-sm shadow
                  hover:bg-emerald-800 transition
                "
              >
                Explore All
              </Link>
            </div>


            {/* PRODUCT GRID */}
            <div
              className={`
                grid grid-cols-2 gap-6
                ${b.title === "50% Price Cut" ? "mt-20" : "mt-10"}
              `}
            >
              {Array.from({ length: 4 }).map((_, idx) => (
                <div
                  key={idx}
                  className="
                    bg-white rounded-2xl p-4 shadow
                    text-gray-800 text-sm
                  "
                >

                  {/* IMAGE HERE */}
                  <div className="w-full h-20 rounded-xl overflow-hidden relative">
                    <Image
                      src="/cement.png"
                      alt="High strength block"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <p className="mt-2 text-xs line-clamp-2">
                    High-Strength Cement Blocks – Durable,
                    Weather-Resistant, and Built for Tough Conditions.
                  </p>

                  <div className="mt-2">
                    <span className="font-semibold text-base">
                      ₹1,456
                    </span>{" "}
                    <span className="text-xs line-through text-gray-400">
                      1,856
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 mt-1">
                    Free Shipping
                  </p>
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
