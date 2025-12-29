import Image from "next/image";
import Link from "next/link";

import { Engineer } from "@/data/engineers";

export default function ProfileHeader({ data }: { data: Engineer }) {
  return (
    <div className="bg-white rounded-2x1 shadow p-6 w-80">

      {/* PROFILE IMAGE */}
      <div className="flex justify-center -mt-16">
        <Image
          src={data.image}
          alt={data.name}
          width={140}
          height={140}
          className="rounded-full border-6 border-white shadow-lg object-cover"
        />
      </div>

      {/* TRENDING */}
      <div className="flex justify-center mt-3">
        <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-sm">
          🔥 Trending
        </span>
      </div>

      {/* NAME */}
      <p className="text-center text-xl font-semibold mt-6">
        {data.name} ✅
      </p>

      {/* ROLE */}
      <p className="text-center text-gray-600 text-sm mt-1">
        Civil Engineer • Project Execution • Quality Control
      </p>

      {/* VERIFIED */}
      <p className="mt-4 text-sm font-semibold">
        A Verified Member of
      </p>

      <ul className="text-sm mt-1">
        <li>🏗 Engineers Club Tamilnadu</li>
        <li>🏢 Credai Member Tiruchirappalli</li>
        <li>📐 Civil Engineering Association of Tiruchirappalli</li>
      </ul>

      {/* CITY */}
      <p className="mt-3">
        📍 {data.city}
      </p>

      {/* FOLLOWERS */}
      <p className="mt-2 font-semibold">1K+ Followers</p>

     {/* BUTTONS */}
<div className="flex gap-3 mt-4">

  {/* SEND ENQUIRY */}
  <Link
    href={'/enquiry/${data.id}'}
    className="bg-amber-900 text-white w-full py-2 rounded-lg text-center"
  >
    Send Enquiry
  </Link>

  {/* CONTACT */}
  <a
    href="mailto:contact@arqonz.com"
    className="bg-gray-200 w-full py-2 rounded-lg text-center"
  >
    Contact
  </a>

</div>


    </div>
  );
}
