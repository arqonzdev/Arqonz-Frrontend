"use client";

import { useState } from "react";

const images = [
  "/cement1.jpg",
  "/cement2.jpg",
  "/cement3.jpg",
  "/cement4.jpg",
];

export default function GallerySection() {
  const [main, setMain] = useState(images[0]);

  return (
    <div className="grid grid-cols-5 gap-4">

      {/* Thumbnails */}
      <div className="flex flex-col gap-4">
        {images.map((img) => (
          <img
            key={img}
            src={img}
            onClick={() => setMain(img)}
            className={`w-20 h-20 object-cover rounded-xl cursor-pointer border 
              ${main === img ? "border-black" : "border-gray-200"}`}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="col-span-4">
        <img
          src={main}
          className="rounded-2xl shadow w-full h-[420px] object-cover"
        />
      </div>
    </div>
  );
}
