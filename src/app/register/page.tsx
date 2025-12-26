"use client";

import AuthLayout from "@/components/AuthLayout";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState:{errors,isSubmitting}
  } = useForm();

  const password = watch("password");

  const submit = () => {
    toast.success("Account Created 🎉");
    reset();
  };

  return (
    <AuthLayout>
      <Toaster />

      {/* LOGOS */}
      <div className="flex justify-center gap-10 mb-4">
        <Image src="/usme.png" alt="USME" width={70} height={70}/>
        <Image src="/iitm.png" alt="IITM" width={70} height={70}/>
      </div>

      {/* TITLE */}
      <h2 className="text-2xl font-semibold text-center mb-8">
        Create an Account
      </h2>

      <form
        onSubmit={handleSubmit(submit)}
        className="space-y-4"
      >

        {/* ROW: EMAIL + MOBILE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <input
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border bg-white/95
              shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600
              hover:border-gray-800 transition"
              {...register("email",{required:"Email is required"})}
            />
            {errors.email && (
              <p className="text-red-900 text-xs mt-1">
                {(errors.email as any).message}
              </p>
            )}
          </div>

          <div>
            <input
              placeholder="Mobile number"
              className="w-full px-4 py-3 rounded-xl border bg-white/95
              shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600
              hover:border-gray-500 transition"
              {...register("phone",{required:"Mobile is required"})}
            />
            {errors.phone && (
              <p className="text-red-600 text-xs mt-1">
                {(errors.phone as any).message}
              </p>
            )}
          </div>
        </div>

        {/* NAME */}
        <div>
          <input
            placeholder="User Name"
            className="w-full px-4 py-3 rounded-xl border bg-white/95
            shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600
            hover:border-gray-500 transition"
            {...register("username",{required:"User Name is required"})}
          />
          {errors.username && (
            <p className="text-red-600 text-xs mt-1">
              {(errors.username as any).message}
            </p>
          )}
        </div>

        {/* PASSWORD */}
        <div>
          <input
            placeholder="Create a password"
            type="password"
            className="w-full px-4 py-3 rounded-xl border bg-white/95
            shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600
            hover:border-gray-500 transition"
            {...register("password",{
              required:"Password is required",
              minLength:{value:8,message:"Minimum 8 characters"},
              pattern:{
                value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                message:"Must include upper, lower & number"
              }
            })}
          />
          {errors.password && (
            <p className="text-red-600 text-xs mt-1">
              {(errors.password as any).message}
            </p>
          )}
        </div>

        {/* CONFIRM */}
        <div>
          <input
            placeholder="Confirm Password"
            type="password"
            className="w-full px-4 py-3 rounded-xl border bg-white/95
            shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600
            hover:border-gray-500 transition"
            {...register("confirm",{
              validate:v=>v===password || "Passwords do not match"
            })}
          />
          {errors.confirm && (
            <p className="text-red-600 text-xs mt-1">
              {(errors.confirm as any).message}
            </p>
          )}
        </div>

        {/* AGENT ID */}
        <div>
          <input
            placeholder="Agent ID"
            className="w-full px-4 py-3 rounded-xl border bg-white/95
            shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500
            hover:border-gray-500 transition"
            {...register("agent")}
          />
        </div>

        {/* Coupon code */}
        <div>
          <input
            placeholder="Coupon code"
            className="w-full px-4 py-3 rounded-xl border bg-white/95
            shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600
            hover:border-gray-500 transition"
            {...register("coupon")}
          />
        </div>

        {/* CHECKBOXES */}
        <div className="space-y-2 text-sm">

          <label className="flex gap-2">
            <input type="checkbox" />
            Please send me newsletters. I can revoke this permission anytime.
          </label>

          <label className="flex gap-2">
            <input type="checkbox" />
            Please optimize offers based on my interests and needs.
          </label>
        </div>

        {/* BUTTON */}
        <button
          disabled={isSubmitting}
          className="w-full py-3 rounded-xl 
          bg-emerald-800 text-white font-medium
          shadow-md hover:shadow-x2
          transition transform hover:-translate-y-[2px]    
          disabled:opacity-50"
        >
          {isSubmitting ? "Creating..." : "Create your Account"}
        </button>

      </form>

      {/* BACK LINK */}
      <p className="text-sm mt-6 flex items-center gap-2">
        ← <Link href="/login" className="underline">
          Go back to Sign in
        </Link>
      </p>

    </AuthLayout>
  );
}
