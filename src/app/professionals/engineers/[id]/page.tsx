"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { engineers } from "@/data/engineers";
import ProfileHeader from "@/components/professionals/ProfileHeader";
import { useRef, useState } from "react";

export default function EngineerDetailsPage() {

  const params = useParams();
  const engineer = engineers.find(e => e.id == Number(params.id));

  if (!engineer) return <div className="p-10">Engineer Not Found</div>;

  // ⭐ NEW LOGIC
const projectsRef = useRef<HTMLDivElement>(null);
const recoRef = useRef<HTMLDivElement>(null);
const reviewRef = useRef<HTMLDivElement>(null);

const [follow, setFollow] = useState(false);

const [tab, setTab] =
  useState<"received" | "given">("received");

const [reviewCount, setReviewCount] = useState(3);

const [tag, setTag] = useState<string | null>(null);



const related = engineers.filter(e =>
  e.city.includes(engineer.city.split(",")[0]) && e.id !== engineer.id
);



  return (
    <div className="pb-24">

      {/* COVER IMAGE */}
      <div className="relative w-full h-72">
        <Image
          src="/images/pro/cover.jpg"
          alt="cover"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto -mt-16 flex gap-8 relative z-10">

        {/* LEFT CARD */}
        <ProfileHeader data={engineer} />


        {/* RIGHT SECTION */}
        <div className="flex-1 bg-white rounded-2xl shadow p-8">

          {/* HEADER */}
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold">
              About {engineer.name}
            </h2>

            <button
              onClick={()=>setFollow(!follow)}
              className="bg-amber-900 text-white px-6 py-2 rounded-lg"
            >
              {follow ? "Following ✓" : "Follow"}
            </button>
          </div>


          {/* TOP DETAILS */}
          <div className="grid grid-cols-5 mt-6 gap-6 text-sm">

            <div>
              <p className="text-gray-500">Designation</p>
              <p className="font-medium">Civil Engineer</p>
            </div>

            <div>
              <p className="text-gray-500">Experience</p>
              <p className="font-medium">{engineer.years} Years</p>
            </div>

            <div>
              <p className="text-gray-500">Projects</p>
              <p className="font-medium">{engineer.projects}</p>
            </div>

            <div>
              <p className="text-gray-500">Currently With</p>
              <p className="font-medium">CLB Architect</p>
            </div>

            <div>
              <p className="text-gray-500">Tools Known</p>
              <p className="font-medium">
                Autocad, Revit, 3ds max, Sketchup
              </p>
            </div>

          </div>


          {/* ================= TABS ================= */}
          <div className="flex gap-3 mt-10">
            <button
              onClick={()=>projectsRef.current?.scrollIntoView({behavior:"smooth"})}
              className="px-4 py-2 rounded-lg bg-gray-200"
            >
              Projects
            </button>

            <button
              onClick={()=>recoRef.current?.scrollIntoView({behavior:"smooth"})}
              className="px-4 py-2 rounded-lg bg-gray-200"
            >
              Recommendations
            </button>

            <button
              onClick={()=>reviewRef.current?.scrollIntoView({behavior:"smooth"})}
              className="px-4 py-2 rounded-lg bg-gray-200"
            >
              Top Reviews
            </button>
          </div>


          {/* ================= PROJECTS ================= */}
          <div ref={projectsRef} className="grid grid-cols-4 gap-6 mt-8">
            {[1,2,3,4,5,6,7,8].map(i => (
              <div key={i} className="rounded-xl overflow-hidden shadow">
                <img src="/images/projects/p1.jpg" alt="project" />
                <div className="p-3 text-sm">
                  <p className="font-medium">BLUBELLE</p>
                  <p className="text-gray-500 text-xs">
                    January 2025 • Chennai
                  </p>
                </div>
              </div>
            ))}
          </div>


          {/* ================= RECOMMENDATIONS ================= */}
          <h3 ref={recoRef} className="text-xl font-semibold mt-12 mb-4">
            Recommendations
          </h3>

          <div className="border-b flex gap-6 mb-6">
            <button
              onClick={()=>setTab("received")}
              className={`pb-2 ${tab==="received" && "border-b-2 border-black"}`}
            >
              Received
            </button>

            <button
              onClick={()=>setTab("given")}
              className={`pb-2 ${tab==="given" && "border-b-2 border-black"}`}
            >
              Given
            </button>
          </div>

          {[1,2,3,4].map(i => (
            <div key={i} className="flex gap-3 items-center py-3">
              <img
                src="/images/users/u1.jpg"
                className="w-10 h-10 rounded-full"
                alt="user"
              />
              <div>
                <p className="font-medium">Alia Taylor</p>
                <p className="text-sm text-gray-500">
                  Civil Engineer • Project Execution • Quality Control • Site Management
                </p>
              </div>
            </div>
          ))}


          {/* ================= TOP REVIEWS ================= */}
          <div ref={reviewRef} className="flex justify-between mt-12">
            <h3 className="text-xl font-semibold">Top Reviews</h3>
            <p className="text-amber-900 font-semibold">
              2.5K Reviews
            </p>
          </div>

          {/* TAG FILTERS */}
          <div className="flex gap-3 mt-3">
            {["SuperStar","Punctual","Starplanner"].map(t=>(
              <button
                key={t}
                onClick={()=>setTag(t)}
                className={`px-3 py-1 rounded-full border
                  ${tag===t && "bg-amber-900 text-white"}
                `}
              >
                #{t}
              </button>
            ))}
          </div>


          {[1,2,3,4,5].slice(0,reviewCount).map(i => (
            <div key={i} className="py-4 border-b">
              <div className="flex items-center gap-2">
                <img
                  src="/images/users/u2.jpg"
                  className="w-10 h-10 rounded-full"
                  alt="user"
                />
                <p className="font-medium">
                  Vinoth ⭐ 8.5/10
                </p>
              </div>

              <p className="mt-2 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          ))}

          {reviewCount < 5 && (
            <button
              onClick={()=>setReviewCount(reviewCount+2)}
              className="mt-4 text-amber-900 font-medium"
            >
              See More Reviews ›
            </button>
          )}

          {/* WRITE REVIEW */}
          <div className="mt-6 border rounded-xl p-4 flex gap-3">
            ✏️
            <input
              placeholder="Write a Review"
              className="flex-1 outline-none"
            />
          </div>  

        </div>

      </div>


     {/* ================= RELATED SEARCH ================= */}
<div className="max-w-7xl mx-auto mt-16">

  <h2 className="text-2xl font-semibold mb-6">
    Related Search
  </h2>

  <div className="grid grid-cols-4 gap-6">

    {related.map(item => (
      <div
        key={item.id}
        className="rounded-2xl shadow overflow-hidden bg-white"
      >
        <img
          src={item.image}
          alt={item.name}
          className="h-44 w-full object-cover"
        />

        <div className="p-4">

          <p className="font-semibold text-lg">
            {item.name}
          </p>

          <p className="text-sm text-gray-500">
            {item.designation || "Professional Specialist"}
          </p>

          <p className="mt-2 font-semibold">
            ₹{item.hourlyFee || 2499}
            <span className="text-sm text-gray-500"> / Hour</span>
          </p>

          <Link
            href={`/enquiry/${item.id}`}
            className="mt-4 block w-full bg-amber-700 
            hover:bg-amber-800 text-white text-sm py-2 
            rounded-xl text-center"
          >
            Send Enquiry
          </Link>

        </div>
      </div>
    ))}

  </div>

</div>



    </div>
  );
}
