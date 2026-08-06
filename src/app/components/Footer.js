"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiChevronRight,
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Health Packages", href: "#packages" },
  { label: "Popular Tests", href: "#tests" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Book Appointment", href: "#book" },
];

const popularTests = [
  "Full Body Checkup",
  "Diabetes Profile",
  "Thyroid Profile",
  "Vitamin D Test",
  "CBC Test",
];

export default function Footer() {
  return (
  <footer className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-b from-white via-slate-50 to-white">

  {/* Background Glow */}

  <div className="absolute -left-20 top-0 h-48 w-48 rounded-full bg-sky-100/50 blur-[100px] sm:h-64 sm:w-64 lg:h-72 lg:w-72" />

  <div className="absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-cyan-100/50 blur-[120px] sm:h-72 sm:w-72 lg:h-80 lg:w-80" />

  {/* Grid Pattern */}

  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage:
        "linear-gradient(to right,#0f172a 1px,transparent 1px),linear-gradient(to bottom,#0f172a 1px,transparent 1px)",
      backgroundSize: "42px 42px",
    }}
  />

  <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_.8fr_.8fr_1fr] lg:gap-12">

      {/* ================= LOGO ================= */}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >

        <Link
          href="/"
          className="inline-flex items-center gap-3"
        >

          <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md sm:h-16 sm:w-16">

            <Image
              src="/logo.png"
              alt="sanjay Lab"
              fill
              className="object-contain p-2"
            />

          </div>

          <div>

            <h2 className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
              GANPATI
            </h2>

            <p className="text-sm text-slate-500">
              Computerized Lab 
            </p>

          </div>

        </Link>

        <p className="mt-6 max-w-md text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
          Delivering accurate diagnostics, preventive healthcare,
          comprehensive pathology testing and convenient home sample
          collection backed by trusted laboratory professionals.
        </p>

        {/* Trust Card */}

        <div className="mt-6 rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 to-cyan-50 p-5 sm:mt-8 sm:rounded-3xl">

          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-600">
            Trusted Laboratory
          </p>

          <h3 className="mt-3 text-lg font-bold text-slate-900 sm:text-xl">
            Accurate Reports.
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Home Collection • Modern Equipment • Expert Pathologists
          </p>

        </div>

      </motion.div>
            {/* ================= QUICK LINKS ================= */}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08 }}
      >
        <h3 className="text-lg font-bold text-slate-900">
          Quick Links
        </h3>

        <div className="mt-6 space-y-2 sm:space-y-3">

          {quickLinks.map((item) => (

            <Link
              key={item.label}
              href={item.href}
              className="group flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 transition-all duration-300 hover:border-sky-100 hover:bg-sky-50"
            >

              <div className="flex items-center gap-3">

                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition group-hover:bg-sky-600 group-hover:text-white">
                  <FiChevronRight />
                </div>

                <span className="text-sm font-medium text-slate-600 transition group-hover:text-sky-700">
                  {item.label}
                </span>

              </div>

              <FiArrowUpRight className="text-slate-400 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-sky-600" />

            </Link>

          ))}

        </div>

      </motion.div>

      {/* ================= POPULAR TESTS ================= */}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
      >

        <div className="flex items-center justify-between">

          <h3 className="text-lg font-bold text-slate-900">
            Popular Tests
          </h3>

          <Link
            href="#tests"
            className="hidden text-sm font-semibold text-sky-600 transition hover:gap-2 sm:inline-flex sm:items-center sm:gap-1"
          >
            View All

            <FiArrowUpRight />
          </Link>

        </div>

        <div className="mt-6 space-y-3">

          {popularTests.map((test) => (

            <Link
              key={test}
              href="#tests"
              className="group flex items-center gap-3 rounded-2xl px-2 py-2 transition-all duration-300 hover:bg-slate-50"
            >

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition group-hover:bg-sky-600 group-hover:text-white">

                <FiChevronRight />

              </div>

              <span className="text-sm font-medium text-slate-700 transition group-hover:text-sky-700">
                {test}
              </span>

            </Link>

          ))}

        </div>

        {/* Mobile Button */}

        <Link
          href="#tests"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-sky-100 bg-sky-50 px-5 py-3 text-sm font-semibold text-sky-700 transition hover:bg-sky-100 sm:hidden"
        >

          View All Tests

          <FiArrowUpRight />

        </Link>

      </motion.div>
            {/* ================= CONTACT ================= */}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.22 }}
      >
        <h3 className="text-lg font-bold text-slate-900">
          Contact Us
        </h3>

        <div className="mt-6 space-y-4">

          {/* Phone */}

          <a
            href="tel:+919876543210"
            className="group flex items-start gap-4 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:border-sky-100 hover:bg-sky-50"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 transition group-hover:bg-sky-600 group-hover:text-white">
              <FiPhone />
            </div>

            <div className="min-w-0">

              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                Call Us
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-900 sm:text-base">
                +91 98765 43210
              </p>

            </div>

          </a>

          {/* Email */}

          <a
            href="mailto:contact@pulseoxylab.com"
            className="group flex items-start gap-4 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:border-cyan-100 hover:bg-cyan-50"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600 transition group-hover:bg-cyan-600 group-hover:text-white">
              <FiMail />
            </div>

            <div className="min-w-0 flex-1">

              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                Email
              </p>

              <p className="mt-1 break-all text-sm font-semibold text-slate-900">
                contact@ganpatilab.com
              </p>

            </div>

          </a>

          {/* Address */}

          <div className="flex items-start gap-4 rounded-2xl p-3">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
              <FiMapPin />
            </div>

            <div>

              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                Location
              </p>

              <p className="mt-1 text-sm font-semibold leading-6 text-slate-900 sm:text-base">
                Rajasthan, India
              </p>

            </div>

          </div>

        </div>

        {/* CTA Card */}

    

      </motion.div>
        </div>
              {/* ================= TRUST STRIP ================= */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 sm:mt-16 lg:mt-20"
        >
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6 lg:p-8">

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

              {[
                {
                  title: "NABL Certified",
                  desc: "Quality Standards",
                },
                {
                  title: "Home Collection",
                  desc: "Doorstep Sample Pickup",
                },
                {
                  title: "Fast Reports",
                  desc: "Digital Delivery",
                },
                {
                  title: "Expert Team",
                  desc: "Experienced Pathologists",
                },
              ].map((item, index) => (

                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="rounded-2xl bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  <h4 className="text-base font-bold text-slate-900">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.desc}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </motion.div>

        {/* ================= BOTTOM FOOTER ================= */}

        <div className="mt-12 border-t border-slate-200 pt-8 sm:mt-14">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            {/* Copyright */}

            <p className="text-center text-sm text-slate-500 lg:text-left">

              © {new Date().getFullYear()}{" "}

              <span className="font-semibold text-slate-900">
                GANPATI Lab
              </span>

              . All rights reserved.

            </p>

            {/* Footer Links */}

            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500 lg:justify-end">

              <Link
                href="/privacy-policy"
                className="transition hover:text-sky-600"
              >
                Privacy Policy
              </Link>

              <span className="hidden h-4 w-px bg-slate-300 sm:block" />

              <Link
                href="/terms-and-conditions"
                className="transition hover:text-sky-600"
              >
                Terms
              </Link>

              <span className="hidden h-4 w-px bg-slate-300 sm:block" />

              <Link
                href="/sitemap.xml"
                className="transition hover:text-sky-600"
              >
                Sitemap
              </Link>

            </div>

          </div>

          {/* Bottom Note */}

          <div className="mt-8 rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 to-cyan-50 p-5">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <p className="text-center text-sm leading-6 text-slate-600 sm:text-left">
                Your health journey starts with accurate diagnostics,
                trusted professionals and timely reports.
              </p>

              <div className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm">

                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />

                Lab Services Available

              </div>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}