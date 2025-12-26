"use client";

import { useRef, useState } from "react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-900 bold">
          What our <span className="text-teal-600">Customers</span> say
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-sm text-gray-800 leading-relaxed">
          Chosen by professionals who value clarity, speed, and reliability.
          Here what customers say after using Arqonz across real construction
          workflows
        </p>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <VideoCard key={item.id} {...item} />
          ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-14">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal-700 hover:underline"
          >
            See all reviews by our customers
            <span className="text-lg">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- VIDEO CARD ---------------- */

function VideoCard({
  name,
  role,
  video,
  poster,
}: {
  name: string;
  role: string;
  video: string;
  poster: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
      {/* Video */}
      <video
        ref={videoRef}
        poster={poster}
        className="h-[420px] w-full object-cover"
      />

      {/* Play / Pause Button */}
      <button
        onClick={toggleVideo}
        className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow"
      >
        {playing ? "❚❚" : "▶"}
      </button>

      {/* Name */}
      <div className="absolute bottom-4 left-4 text-left">
        <p className="text-sm font-semibold text-white">{name}</p>
        <p className="text-xs text-white/80">{role}</p>
      </div>
    </div>
  );
}
