import SupplierCategoryCard from "./SupplierCategoryCard";
import { showcasedSupplierCategories } from "@/data/suppliers/showcasedSupplierCategories";

export default function ShowcasedSuppliers() {

  // -------- BACKEND PLACEHOLDER ----------
  // TODO: connect API later
  // const res = await fetch("/api/suppliers/categories");
  // const showcasedSupplierCategories = await res.json();
  // ---------------------------------------

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 mt-16">

      <h2 className="text-center text-3xl font-bold">
        Showcased <span className="text-amber-700">Suppliers</span>
      </h2>

      <div
        className="
          grid gap-6 mt-10
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
        "
      >
        {showcasedSupplierCategories.map(item => (
          <SupplierCategoryCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
}
