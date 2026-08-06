"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiArrowRight,
  FiPhone,
} from "react-icons/fi";

const navLinks = [
  {
    name: "Tests",
    href: "#tests",
  },
  {
    name: "Packages",
    href: "#packages",
  },
  {
    name: "Home Collection",
    href: "#collection",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden bg-sky-600 text-white lg:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6">
          <p className="text-sm font-medium">
            NABL Standard Laboratory • Home Sample Collection Available
          </p>

          <a
            href="tel:+911234567890"
            className="flex items-center gap-2 text-sm"
          >
            <FiPhone className="text-base" />
            +91 98765 43210
          </a>
        </div>
      </div>

      {/* Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl"
            : "border-b border-slate-100 bg-white"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex w-[230px] shrink-0 items-center"
          >
            <div className="relative h-14 w-14 shrink-0">
              <Image
                src="/logo.png"
                alt="Preet Diagnostic Logo"
                fill
                priority
                className="object-contain"
              />
            </div>

            <div className="ml-3">
              <h1 className="text-lg font-bold tracking-tight text-slate-900">
                GANPATI
              </h1>

              <p className="text-xs tracking-[0.15em] uppercase text-slate-500">
               Computerized Lab 
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden flex-1 items-center justify-center gap-10 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative text-[15px] font-medium text-slate-600 transition-colors duration-300 hover:text-sky-600"
              >
                {item.name}

                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-sky-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className="hidden w-[230px] justify-end lg:flex">
            <button className="flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-sky-700 hover:shadow-lg">
              Book Test
              <FiArrowRight />
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl p-2 transition hover:bg-slate-100 lg:hidden"
          >
            {menuOpen ? (
              <FiX size={24} />
            ) : (
              <FiMenu size={24} />
            )}
          </button>

        </div>
                {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: menuOpen ? "auto" : 0,
            opacity: menuOpen ? 1 : 0,
          }}
          transition={{
            duration: 0.25,
          }}
          className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
        >
          <div className="space-y-1 px-6 py-5">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-slate-700 transition hover:bg-sky-50 hover:text-sky-600"
              >
                {item.name}
              </Link>
            ))}

            <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 py-3 font-semibold text-white transition hover:bg-sky-700">
              Book Test
              <FiArrowRight />
            </button>
          </div>
        </motion.div>
      </header>
    </>
  );
}