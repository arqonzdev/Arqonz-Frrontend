"use client";

import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { footerSections } from "@/data/footer";

export default function Footer() {
  return (
    <footer className="bg-[#f6e3d7] text-[#111827]">
      <div className="mx-auto max-w-7xl px-8 py-16">

        <div className="grid md:grid-cols-7 gap-14 items-start">

          {/* BRAND */}
          <div className="md:col-span-2">

            <Link href="/" className="flex items-center gap-3">
              <Image src="/AriQon_logo-web250x50-05 3.png" alt="Arqonz" width={46} height={46} />
              <div>
                <h3 className="text-lg font-semibold tracking-widest">
                  ARQONZ.COM
                </h3>
                <p className="text-xs text-gray-600">
                  Construction Marketplace
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-gray-800">
              Your complete hub for construction products, talent, and services.
            </p>

            {/* SOCIAL */}
            <div className="mt-6 flex items-center gap-5 text-xl">

              <Link href="https://twitter.com" target="_blank">𝕏</Link>

              <Link href="https://linkedin.com" target="_blank" className="font-semibold">
                in
              </Link>

              <Link href="https://instagram.com" target="_blank">
                ◎
              </Link>

              <Link href="https://facebook.com" target="_blank" className="font-bold">
                f
              </Link>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-6 rounded-full bg-[#1f2937] px-6 py-2 text-xs font-medium text-white shadow-md"
            >
              BACK TO TOP
            </button>
          </div>

          {/* FOOTER LINKS */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest">
                {section.title}
              </h4>

              <ul className="space-y-3 text-sm text-gray-800">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* NEWSLETTER */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest">
              Newsletter
            </h4>

            <p className="mb-6 max-w-xs text-sm text-gray-800">
              Subscribe to receive updates and offers.
            </p>

            <Input
              placeholder="Enter your email address*"
              className="h-11 w-full rounded-full border border-gray-700 bg-transparent px-5 text-sm"
            />

            <div className="mt-4 inline-block rounded-full bg-[#2b2b2b] shadow-lg">
                <Link href="/register">
                <Button className="h-10 rounded-full bg-[#3a3a3a] px-8 text-sm text-white hover:bg-[#2f2f2f]">
                Sign Up
                </Button>
                </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 border-t border-gray-600 pt-6 flex items-center justify-between text-sm">
          <p>Copyright © 2025 Arqonz. All rights reserved.</p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:underline"
          >
            Back to Top
          </button>
        </div>

      </div>
    </footer>
  );
}
