// src/components/home/NewsletterSection.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          {/* Heading */}
          <h2 className="text-2xl font-semibold text-gray-900">
            NEWSLETTER
          </h2>
          <p className="mt-4 text-base text-gray-600">
            Subscribe to receive news and product emails and more from our team
          </p>

          {/* Form */}
          <form
            className="mt-8 flex flex-col gap-4 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="email"
              placeholder="Enter your email address*"
              className="flex-1"
            />
            <Button type="submit">Sign Up</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
