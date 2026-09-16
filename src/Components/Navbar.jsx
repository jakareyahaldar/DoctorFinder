import React, { useState } from "react";
import {
  Search,
  Menu,
  X,
  MapPin,
  UserRound,
  Stethoscope,
} from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Doctors",
      href: "/doctors",
    },
    {
      name: "Specialties",
      href: "/specialties",
    },
    {
      name: "Hospitals",
      href: "/hospitals",
    },
    {
      name: "Chambers",
      href: "/chambers",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    console.log("Search:", search);

    // You can navigate to:
    // /doctors?search=searchText
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">

      <div className="mx-auto max-w-7xl ">

        {/* ================= Desktop / Main Navbar ================= */}
        <div className="flex h-20 items-center justify-between gap-4">

          {/* ================= Logo ================= */}
          <a
            href="/"
            className="flex shrink-0 items-center gap-2.5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Stethoscope className="h-6 w-6" />
            </div>

            <div className="hidden sm:block">
              <h1 className="text-xl font-bold tracking-tight text-gray-900">
                Khulna City<span className="text-blue-600">Doctors</span>
              </h1>

              <p className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                Find the right doctor
              </p>
            </div>
          </a>

          {/* ================= Search ================= */}
          <form
            onSubmit={handleSearch}
            className="hidden flex-1 md:block md:max-w-md lg:max-w-lg"
          >
            <div className="relative">

              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search doctors, specialties..."
                className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
              />

            </div>
          </form>

          {/* ================= Desktop Navigation ================= */}
          <nav className="hidden items-center gap-1 lg:flex">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}

          </nav>

          {/* ================= Right Actions ================= */}
          <div className="flex items-center gap-2">

            {/* Location */}
            <button
              type="button"
              className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50 md:flex"
            >
              <MapPin className="h-5 w-5 text-blue-600" />

              <span className="hidden xl:block">
                Location
              </span>
            </button>

            {/* Login */}
            <a
              href="/login"
              className="hidden items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 sm:flex"
            >
              <UserRound className="h-4 w-4" />
              Login
            </a>

            {/* Mobile Menu */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition hover:bg-gray-100 lg:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

          </div>
        </div>

        {/* ================= Mobile Search ================= */}
        <div className="pb-4 md:hidden">
          <form onSubmit={handleSearch}>
            <div className="relative">

              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search doctors, specialties..."
                className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
              />

            </div>
          </form>
        </div>

        {/* ================= Mobile Menu ================= */}
        {isMenuOpen && (
          <div className="border-t border-gray-100 py-4 lg:hidden">

            <nav className="flex flex-col gap-1">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  {link.name}
                </a>
              ))}

            </nav>

            {/* Mobile Location */}
            <button
              type="button"
              className="mt-2 flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <MapPin className="h-5 w-5 text-blue-600" />
              Select Location
            </button>

            {/* Mobile Login */}
            <a
              href="/login"
              className="mt-1 flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            >
              <UserRound className="h-5 w-5" />
              Login
            </a>

          </div>
        )}

      </div>
    </header>
  );
}