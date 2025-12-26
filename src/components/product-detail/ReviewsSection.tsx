export default function ReviewsSection() {

  return (
    <section className="bg-orange-50 p-6 rounded-xl">

      <h2 className="text-xl font-semibold mb-3">
        Reviews
      </h2>

      <p className="text-sm text-gray-500 mb-6">
        (2167 reviews)
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        {Array.from({ length: 2 }).map((_,i)=>(
          <div key={i} className="border rounded-xl p-4 shadow-sm">
            <p className="font-semibold">Samantha</p>
            <p className="text-sm mt-2">
              Excellent quality & delivery
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}
