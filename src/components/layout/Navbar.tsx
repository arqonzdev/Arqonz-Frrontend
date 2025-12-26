"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, User, Heart, Menu } from "lucide-react";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import MegaMenu from "../categories/MegaMenu";

const navLinks = [
  { label: "Home", href:"/" },
  { label: "Products", href: "/products" },
  { label: "Professionals", href: "#" },
  { label: "Properties", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Design IQ", href: "#" },
  { label: "Tools", href: "#" },
  { label: "Deal Desk", href: "#" },
  { label: "Blog", href: "#" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const router = useRouter();
  const [query, setQuery] = useState("");

  const open = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpenMenu(true);
  };

  const close = () => {
    timer.current = setTimeout(() => setOpenMenu(false), 120);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/products/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <header className="relative z-50">
      <div className="bg-gradient-to-r from-[#006a66] to-[#00a89d] py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl px-6 py-4">

            <div className="flex items-center justify-between gap-8">

              {/* LOGO */}
              <Link href="/" className="flex items-center gap-3">
                <Image src="/logo.svg" alt="Logo" width={36} height={36} />
                <div>
                  <p className="text-lg font-semibold tracking-wide">
                    ARQONZ.COM
                  </p>
                  <p className="text-xs text-gray-500">
                    Construction Marketplace
                  </p>
                </div>
              </Link>

              {/* SEARCH BAR */}
              <form onSubmit={handleSearch} className="relative flex-1 max-w-3xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search Bricks, Cements, Engineers, Projects name and Tools"
                  className="w-full rounded-full border border-gray-200 py-3 pl-11 pr-28 text-sm outline-none focus:border-teal-600"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 border border-teal-400 text-teal-700 rounded-full px-4 py-1.5 text-xs font-semibold hover:bg-teal-50"
                >
                  AI – AQIQ
                </button>
              </form>

              {/* ICONS + AUTH */}
              <div className="flex items-center gap-5">
                <User className="text-gray-700" />
                <Heart className="text-gray-700" />

                <Link
                  href="/login"
                  className="bg-gray-900 text-white rounded-full px-5 py-2 text-sm font-medium"
                >
                  Sign in
                </Link>
              </div>
            </div>

            {/* NAV */}
            <div className="mt-4 border-t pt-3 flex items-center justify-between">
              <div className="flex items-center gap-6 text-sm">

                <div
                  className="flex items-center gap-2 font-medium cursor-pointer"
                  onMouseEnter={open}
                  onMouseLeave={close}
                >
                  <Menu className="h-4 w-4" />
                  All Categories
                  <MegaMenu open={openMenu} />
                </div>

                {navLinks.map((link) => (
                  <Link key={link.label} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="text-sm bg-gray-100 px-4 py-1 rounded-full">
                🚚 Quick Delivery
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}
