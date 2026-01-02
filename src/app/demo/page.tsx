"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useRouter } from "next/navigation";

export default function DemoPage() {

  const router = useRouter();

  const [date, setDate] = useState<Date>(new Date());
  const [slot, setSlot] = useState("");

  const slots = [
    "09:00 AM","09:30 AM","10:00 AM","10:30 AM",
    "11:00 AM","11:30 AM","12:00 PM","12:30 PM"
  ];

  const handleContinue = () => {
  if (!slot) return;

  const isoDate = date.toISOString().split("T")[0];

  router.push(`/demo/confirm?date=${isoDate}&time=${slot}`);
};


  return (
    <div className="min-h-screen bg-muted flex items-center justify-center">

      <div className="
        bg-card text-card-foreground
        w-[1050px]
        rounded-2xl
        shadow-2xl
        border
        p-10
        flex
        gap-10
      ">
        {/* LEFT */}
        <div className="w-[360px]">

          <img src="/AriQon_logo-web250x50-05 3.png" className="h-10 mb-6" />

          <p className="text-sm text-muted-foreground font-medium">
            QuickCall Demo
          </p>

          <h2 className="text-2xl font-bold mt-1">
            Demo Call
          </h2>

          <div className="flex items-center gap-2 text-muted-foreground mt-2">
            ⏱ <span>10 min</span>
          </div>

          <p className="text-sm text-muted-foreground mt-4 leading-6">
            See our product in action with a live 1-on-1 session.
            In just 10 minutes, we’ll walk you through the key features,
            answer your questions, and show you how it can fit your business.
          </p>

          {/* CALENDAR */}
          <div className="mt-8 overflow-hidden rounded-xl border">
            <Calendar
              value={date}
              onChange={(value) => setDate(value as Date)}
              prev2Label={null}
              next2Label={null}
            />
          </div>

          {/* TIME ZONE */}
          <div className="mt-6 flex items-center gap-2 text-sm">
            🌐 Time Zone:
            <select className="border rounded-lg px-3 py-1 bg-muted">
              <option>India/Kolkata</option>
            </select>
          </div>

          {/* GOOGLE CALENDAR */}
          <a
            href="https://calendar.google.com/calendar/render"
            target="_blank"
            className="mt-3 flex gap-2 text-sm text-blue-600 underline"
          >
            📅 Add to Google Calendar
          </a>

        </div>

        {/* RIGHT */}
        <div className="flex-1">

          <p className="text-sm font-semibold mb-3">Select Time</p>

          <div className="space-y-3">
            {slots.map(t => (
              <button
                key={t}
                onClick={() => setSlot(t)}
                className={`
                  w-full py-3 rounded-xl border transition
                  ${slot === t
                    ? "bg-emerald-900 text-white"
                    : "bg-card hover:bg-muted"
                  }
                `}
              >
                {t}
              </button>
            ))}
          </div>

          {/* CONTINUE */}
          <button
            disabled={!slot}
            onClick={handleContinue}
            className="
              mt-8
              w-full
              bg-emerald-900
              text-white
              py-3
              rounded-xl
              disabled:bg-gray-300
            "
          >
            Continue
          </button>

        </div>

      </div>

    </div>
  );
}
