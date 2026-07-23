"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FiArrowRight,
  FiStar,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";

const testimonials = [
  {
    id: "01",
    name: "Rajesh Kumar",
    age: "42 Years",
    city: "Chandigarh",
    package: "Complete Body Checkup",
    image: "/patients/patient-1.jpg",
    rating: 5,
    review:
      "The entire experience was smooth and professional. Booking was simple, the home sample collection arrived on time, and the reports were delivered within 24 hours. Highly recommended.",
  },
  {
    id: "02",
    name: "Priya Sharma",
    age: "34 Years",
    city: "Mohali",
    package: "Women's Wellness Package",
    image: "/patients/patient-2.jpg",
    rating: 5,
    review:
      "Very professional staff and hygienic sample collection. The doctors explained every report clearly, making the entire health checkup process stress-free.",
  },
  {
    id: "03",
    name: "Amit Verma",
    age: "51 Years",
    city: "Panchkula",
    package: "Diabetes Care Package",
    image: "/patients/patient-3.jpg",
    rating: 5,
    review:
      "Affordable pricing, quick report delivery, and excellent customer support. The online report access was extremely convenient for my family.",
  },
  {
    id: "04",
    name: "Neha Gupta",
    age: "29 Years",
    city: "Zirakpur",
    package: "Vitamin Profile",
    image: "/patients/patient-4.jpg",
    rating: 5,
    review:
      "Clean laboratory, courteous staff, and accurate reports. Their preventive health packages offer great value and peace of mind.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(testimonials[0]);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-cyan-50 py-14 sm:py-20 lg:py-28"
    >
      {/* Background */}

      <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-sky-200/30 blur-[120px]" />

      <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-cyan-200/30 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-100 px-3 py-2 text-xs font-semibold text-sky-700 sm:px-4 sm:text-sm">
            <FiShield />
            Trusted By Thousands of Patients
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-6xl">
            Real Experiences.

            <span className="mt-2 block bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
              Real Healthcare.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Every health checkup is backed by experienced professionals,
            advanced diagnostic technology and a commitment to delivering
            accurate reports with exceptional patient care.
          </p>

          {/* Trust Pills */}

          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">

            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <FiCheckCircle className="text-emerald-500" />

              <span className="text-sm font-medium text-slate-700">
                NABL Standards
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <FiStar className="fill-yellow-400 text-yellow-400" />

              <span className="text-sm font-medium text-slate-700">
                4.9 Google Rating
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <FiShield className="text-sky-600" />

              <span className="text-sm font-medium text-slate-700">
                100% Secure Reports
              </span>
            </div>

          </div>

        </motion.div>
                {/* Desktop Layout */}

        <div className="hidden gap-8 xl:gap-12 lg:grid lg:grid-cols-[360px_1fr]">

          {/* Left Panel */}

          <div className="space-y-4">

            {testimonials.map((item) => (

              <motion.button
                key={item.id}
                onMouseEnter={() => setActive(item)}
                whileHover={{ x: 6 }}
                transition={{ duration: .25 }}
                className={`group w-full rounded-2xl border p-4 text-left transition-all duration-300 xl:p-5 ${
                  active.id === item.id
                    ? "border-sky-200 bg-white shadow-xl"
                    : "border-slate-200 bg-white/70 hover:border-sky-100 hover:bg-white hover:shadow-lg"
                }`}
              >

                <div className="flex items-center gap-4">

                  {/* Avatar */}

                  {/* Uncomment when images are available */}

                  {/*
                  <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-sky-100">

                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />

                  </div>
                  */}

                  <div className="flex-1 min-w-0">

                    <div className="flex flex-wrap items-center gap-2">

                      <h3 className="truncate text-base font-bold text-slate-900">
                        {item.name}
                      </h3>

                      <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                        Verified
                      </span>

                    </div>

                    <p className="mt-1 text-sm text-slate-500">
                      {item.age} • {item.city}
                    </p>

                    <p className="mt-2 text-sm font-medium text-sky-600">
                      {item.package}
                    </p>

                    <div className="mt-3 flex gap-1">

                      {[...Array(item.rating)].map((_, i) => (

                        <FiStar
                          key={i}
                          className="fill-yellow-400 text-yellow-400"
                        />

                      ))}

                    </div>

                  </div>

                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all ${
                      active.id === item.id
                        ? "bg-sky-600 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <FiArrowRight />
                  </div>

                </div>

              </motion.button>

            ))}

          </div>

          {/* Right Preview Starts Here */}
          <div className="sticky top-24">
                    <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8 xl:p-10"
          >
            {/* Background */}

            <div className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-sky-100/70 blur-3xl" />

            <div className="absolute left-6 top-4 text-[110px] font-black leading-none text-sky-50 sm:left-8 sm:top-6 sm:text-[140px]">
              "
            </div>

            <div className="relative z-10">

              {/* Rating */}

              <div className="flex gap-1">

                {[...Array(active.rating)].map((_, i) => (

                  <FiStar
                    key={i}
                    className="fill-yellow-400 text-yellow-400"
                  />

                ))}

              </div>

              {/* Review */}

              <p className="mt-6 text-xl font-semibold leading-9 text-slate-900 sm:mt-8 sm:text-2xl sm:leading-10 xl:text-4xl xl:leading-[1.6]">
                {active.review}
              </p>

              {/* Divider */}

              <div className="mt-8 h-1 w-16 rounded-full bg-sky-600 sm:mt-10" />

              {/* Patient */}

              <div className="mt-8 flex items-center gap-4 sm:mt-10 sm:gap-5">

                {/*
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-sky-100">

                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    className="object-cover"
                  />

                </div>
                */}

                <div>

                  <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                    {active.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500 sm:text-base">
                    {active.age} • {active.city}
                  </p>

                  <p className="mt-2 font-medium text-sky-600">
                    {active.package}
                  </p>

                </div>

              </div>

              {/* Footer */}

              <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:mt-12 sm:pt-8">

                <div>

                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Verified Patient
                  </p>

                  <p className="mt-2 text-lg font-semibold text-slate-900">
                    Google Review
                  </p>

                </div>

                <div className="text-5xl font-black text-sky-100 xl:text-6xl">
                  {active.id}
                </div>

              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>

    </div>

    {/* Mobile Testimonials Start Below */}
            {/* Mobile Testimonials */}

        <div className="lg:hidden">

          <div
            className="
              flex gap-4
              overflow-x-auto
              snap-x snap-mandatory
              pb-2
              pr-4
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >

            {testimonials.map((item) => (

              <motion.div
                key={item.id}
                whileTap={{ scale: .98 }}
                className="
                  relative
                  min-w-[92%]
                  snap-center
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-lg
                "
              >

                {/* Background */}

                <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-sky-100 blur-3xl opacity-70" />

                <div className="absolute right-3 top-0 text-[90px] font-black leading-none text-sky-50">
                  "
                </div>

                <div className="relative z-10">

                  {/* Header */}

                  <div className="flex items-start justify-between gap-4">

                    <div className="min-w-0 flex-1">

                      <div className="flex flex-wrap items-center gap-2">

                        <h3 className="truncate text-lg font-bold text-slate-900">
                          {item.name}
                        </h3>

                        <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                          Verified
                        </span>

                      </div>

                      <p className="mt-1 text-sm text-slate-500">
                        {item.age} • {item.city}
                      </p>

                      <p className="mt-2 text-sm font-medium text-sky-600">
                        {item.package}
                      </p>

                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-600 font-bold text-white shadow-md">
                      {item.id}
                    </div>

                  </div>

                  {/* Rating */}

                  <div className="mt-6 flex gap-1">

                    {[...Array(item.rating)].map((_, index) => (

                      <FiStar
                        key={index}
                        className="fill-yellow-400 text-yellow-400"
                      />

                    ))}

                  </div>

                  {/* Review */}

                  <p className="mt-5 text-base leading-7 text-slate-700">
                    {item.review}
                  </p>

                  {/* Divider */}

                  <div className="mt-6 h-px bg-slate-200" />

                  {/* Footer */}

                  <div className="mt-5 flex items-center justify-between">

                    <div>

                      <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
                        Google Review
                      </p>

                      <p className="mt-2 font-semibold text-slate-900">
                        ★ 5.0 Rating
                      </p>

                    </div>

                    <div className="rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
                      Verified Patient
                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

          <p className="mt-6 text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-400">
            Swipe to view more →
          </p>

        </div>

        {/* Trust Statistics */}
                {/* Trust CTA */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mt-14 sm:mt-20 lg:mt-24"
        >
          <div className="overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-600 via-cyan-600 to-sky-700 p-6 text-white shadow-[0_25px_60px_rgba(14,165,233,.25)] sm:p-8 lg:p-12">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-2xl">

                <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-xs font-medium backdrop-blur sm:text-sm">
                  Trusted Diagnostic Centre
                </span>

                <h3 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  Your Health
                  <br />
                  Deserves The Best Care.
                </h3>

                <p className="mt-5 max-w-xl text-base leading-7 text-sky-100 sm:text-lg">
                  Accurate reports, experienced professionals, advanced
                  diagnostic technology and convenient home sample
                  collection—all under one roof.
                </p>

              </div>

              <button className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 font-semibold text-sky-700 shadow-lg transition-all duration-300 hover:gap-4 sm:w-auto">

                Book Your Test

                <FiArrowRight />

              </button>

            </div>

          </div>

          {/* Statistics */}

          <div className="mt-10 grid grid-cols-2 gap-4 lg:mt-12 lg:grid-cols-4">

            {[
              {
                value: "50K+",
                label: "Tests Performed",
              },
              {
                value: "4.9★",
                label: "Patient Rating",
              },
              {
                value: "24 Hrs",
                label: "Fast Reports",
              },
              {
                value: "100%",
                label: "Quality Assured",
              },
            ].map((item, index) => (

              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .08,
                }}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg sm:p-6"
              >

                <h3 className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-3xl font-black text-transparent sm:text-4xl lg:text-5xl">
                  {item.value}
                </h3>

                <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-sky-500" />

                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 sm:text-xs">
                  {item.label}
                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}