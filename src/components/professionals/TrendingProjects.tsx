"use client";

import Image from "next/image";
import Link from "next/link";
import { trendingProjects } from "@/data/professionals/trendingProjects";

export default function TrendingProjects() {

  // -------- BACKEND PLACEHOLDER ----------
  // TODO enable later
  // const res = await fetch("/api/projects/trending");
  // const trendingProjects = await res.json();
  // ---------------------------------------

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 mt-14">

      {/* TITLE */}
      <h2 className="text-center text-2xl md:text-3xl font-bold">
        Trending <span className="text-amber-700">Projects</span>
      </h2>

      {/* GRID */}
      <div className="
        grid gap-6 mt-10
        grid-cols-2 md:grid-cols-4
      ">
        {trendingProjects.map(project => (
          <Link
            key={project.id}
            href={project.link}
            className="relative group rounded-xl overflow-hidden"
          >
            {/* NUMBER TAG */}
            <span className="
              absolute top-2 left-2 z-10
              text-white font-bold text-xl drop-shadow
            ">
              {project.id}
            </span>

            {/* IMAGE */}
            <div className="relative w-full h-48 md:h-56">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
