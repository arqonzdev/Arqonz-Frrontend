export default function HeroSection() {
  return (
    <section className="w-full bg-white py-14">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
          <span className="text-teal-500">AI-powered</span>{" "}
          instant quotes for
          <br />
          construction products
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
          Help eliminate travel costs, time delays, middleman expenses, human errors, and 
          repetitive admin work in the construction industry.
        </p>

        {/* Image */}
        <div className="mt-10">
          <img
            src="/banner.png"
            alt="Construction Site"
            className="rounded-3xl w-full object-cover shadow"
          />
        </div>

      </div>

    </section>
  );
}
