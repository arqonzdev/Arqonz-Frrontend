"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

function ConfirmPage() {

  const params = useSearchParams();
  const time = params.get("time") || "—";
  const date = params.get("date") || "";

  const router = useRouter();

  const { register, handleSubmit } = useForm();

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

  const submit = () => {
    alert("Booking Confirmed!");
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-muted flex items-center justify-center">
      <div className="bg-card text-card-foreground w-[1100px] rounded-2xl shadow-xl p-10 flex gap-10 border">

        {/* LEFT */}
        <div className="w-[360px]">
          <img src="/AriQon_logo-web250x50-05 3.png" className="h-10 mb-6" />
          <p className="text-sm text-muted-foreground font-medium">QuickCall Demo</p>
          <h2 className="text-2xl font-bold mt-1">Demo Call</h2>
          <div className="flex items-center gap-2 text-muted-foreground mt-2">
            ⏱ <span>10 min</span>
          </div>
          <p className="text-sm text-muted-foreground mt-4 leading-6">
            See our product in action with a live 1-on-1 session.
            In just 10 minutes, well walk you through the key features,
            answer your questions, and show you how it can fit your business.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex-1">

          <button
            onClick={() => router.back()}
            className="text-sm mb-4 text-muted-foreground"
          >
            ← Back
          </button>

          <h3 className="text-lg font-semibold mb-4">
            Confirm Your Booking
          </h3>

          <div className="border rounded-xl p-4 mb-6 bg-muted/60">

            {formattedDate && (
              <div className="font-medium">{formattedDate}</div>
            )}

            <div className="font-semibold mt-1">{time}</div>

            <div className="text-sm text-muted-foreground">
              Time Zone: India/Kolkata
            </div>
          </div>

          <form onSubmit={handleSubmit(submit)} className="space-y-4">

            <input
              placeholder="Name"
              className="w-full border rounded-lg px-4 py-2"
              {...register("name")}
              required
            />

            <input
              placeholder="+91 Mobile Number"
              className="w-full border rounded-lg px-4 py-2"
              {...register("phone")}
              required
            />

            <input
              placeholder="Email"
              className="w-full border rounded-lg px-4 py-2"
              {...register("email")}
              required
            />

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-xl"
            >
              Confirm
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default function PageWrapper() {
  return (
    <Suspense fallback={null}>
      <ConfirmPage />
    </Suspense>
  );
}
