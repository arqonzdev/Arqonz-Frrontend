"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthLayout from "@/components/AuthLayout";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {

  const router = useRouter();

  const [mode, setMode] = useState<"mobile" | "email">("mobile");
  const [timer, setTimer] = useState(0);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue
  } = useForm();

  const otp = watch("otp") || "";

  const sendOtp = async () => {

    if (mode==="mobile" && !watch("phone")) return toast.error("Mobile required");
    if (mode==="email" && !watch("email")) return toast.error("Email required");

    setLoading(true);

    setTimeout(()=>{
      setLoading(false);
      setTimer(30);
      toast.success("OTP Sent 🚀");
    },800);
  };

  useEffect(()=>{
    if(!timer) return;
    const id=setTimeout(()=>setTimer(timer-1),1000);
    return ()=>clearTimeout(id);
  },[timer]);

  const handleOtpChange = (index:number,value:string)=>{
    if(!/^\d?$/.test(value)) return;

    const current = otp.padEnd(6," ").split("");
    current[index]=value;
    const newOtp=current.join("").trimEnd();
    setValue("otp",newOtp);

    if(value && index<5){
      const next = document.getElementById(`otp-${index+1}`) as HTMLInputElement;
      next?.focus();
    }
  };

  const submit = () => {

    if((otp||"").length<6) return toast.error("Enter 6 digit OTP");

    setLoading(true);

    setTimeout(()=>{

      if(otp!=="123456"){
        setLoading(false);
        toast.error("Invalid OTP ❌");
        return;
      }

      toast.success("Login Successful 🎉");

      reset();
      router.push("/dashboard");

    },1000);
  };

  return (
    <AuthLayout>
      <Toaster />

      {/* TITLE */}
      <h2 className="text-2xl font-semibold text-center mb-6">
        Sign in
      </h2>

      {/* TAB BUTTONS */}
      <div className="flex justify-center gap-3 mb-6">

        <button
          onClick={()=>setMode("mobile")}
          className={`px-8 py-2 rounded-full text-sm font-medium shadow-sm
          ${mode==="mobile" ? "bg-emerald-800 text-white" : "bg-[#63c0b4]"}`}
        >
          📱 Mobile
        </button>

        <button
          onClick={()=>setMode("email")}
          className={`px-8 py-2 rounded-full text-sm font-medium shadow-sm
          ${mode==="email" ? "bg-emerald-800 text-white" : "bg-[#69d4bb]"}`}
        >
          ✉️ Mail
        </button>

      </div>

      <form onSubmit={handleSubmit(submit)}>

        {/* MOBILE FIELD */}
        {mode==="mobile" && (
          <div className="flex gap-3 items-center mb-4">

            <div className="flex items-center gap-2 border rounded-xl px-3 py-2 w-full shadow-sm">
              <img src="/india-flag.png" width={22} />
              <input
                placeholder="+91"
                className="outline-none text-sm w-full"
                {...register("phone",{required:true})}
              />
            </div>

            <button
              type="button"
              disabled={timer>0||loading}
              onClick={sendOtp}
              className="bg-emerald-900 text-white rounded-xl px-6 py-2 shadow"
            >
              {loading?"Sending...":"Send OTP"}
            </button>

          </div>
        )}

        {/* EMAIL FIELD */}
        {mode==="email" && (
          <input
            placeholder="Email Address"
            className="border rounded-xl w-full px-3 py-3 mb-4 shadow-sm text-sm"
            {...register("email",{required:true})}
          />
        )}

        {/* OTP FIELD */}
        <input
          placeholder="Enter 6- digit code"
          className="border rounded-xl w-full px-3 py-3 shadow-sm text-sm"
          {...register("otp")}
        />

        <div className="flex justify-between text-xs text-gray-600 mt-2">
          <span>Didn’t Receive Code?</span>
          {timer>0 && <span>Resend in {timer}s</span>}
        </div>

        {/* BUTTON */}
        <button
          disabled={loading}
          className="w-full bg-emerald-900 text-white py-3 rounded-xl mt-6 font-medium shadow-x2"
        >
          Verify & Login
        </button>

      </form>

      {/* DIVIDER */}
      <div className="flex items-center gap-4 my-6">
        <div className="flex-1 h-px bg-gray-300" />
        <span className="text-sm text-gray-600">Or Continue with</span>
        <div className="flex-1 h-px bg-gray-300" />
      </div>

      {/* SOCIAL ICONS */}
      <div className="flex justify-center gap-8 text-3xl">

        <a href="#">
          <img src="/google.png" width={34}/>
        </a>

        <a href="#">
          <img src="/facebook.png" width={34}/>
        </a>

        <a href="#">
          <img src="/instagram.png" width={34}/>
        </a>

      </div>

      {/* REGISTER LINK */}
      <p className="text-center text-sm mt-6">
        Don’t have an account?
        <Link href="/register" className="underline ml-1">
          Register
        </Link>
      </p>

    </AuthLayout>
  );
}
