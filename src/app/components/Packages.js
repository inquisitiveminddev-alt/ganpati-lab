"use client";

import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiShield,
  FiHeart,
  FiActivity,
} from "react-icons/fi";

import {
  FaHeartbeat,
  FaFemale,
  FaTint,
  FaRunning,
} from "react-icons/fa";

import {
  GiHealthNormal,
  GiKidneys,
  GiLiver,
} from "react-icons/gi";

const packages = [
  {
    id: 1,
    badge: "Most Popular",
    title: "Complete Body Checkup",
    tests: "70+ Tests",
    price: "₹2,499",
    icon: GiHealthNormal,
    color: "sky",
    features: [
      "Blood Sugar",
      "Liver Function",
      "Kidney Function",
      "Thyroid Profile",
    ],
  },

  {
    id: 2,
    badge: "Recommended",
    title: "Heart Care Package",
    tests: "45+ Tests",
    price: "₹1,899",
    icon: FaHeartbeat,
    color: "rose",
    features: [
      "Lipid Profile",
      "ECG",
      "Blood Pressure",
      "Heart Risk Markers",
    ],
  },

  {
    id: 3,
    badge: "Women's Health",
    title: "Women's Wellness",
    tests: "55+ Tests",
    price: "₹2,199",
    icon: FaFemale,
    color: "pink",
    features: [
      "Iron Profile",
      "Vitamin D",
      "Hormone Tests",
      "Thyroid",
    ],
  },

  {
    id: 4,
    badge: "Diabetes",
    title: "Diabetes Care",
    tests: "28+ Tests",
    price: "₹999",
    icon: FaTint,
    color: "red",
    features: [
      "HbA1c",
      "Fasting Sugar",
      "Kidney Check",
      "Urine Test",
    ],
  },

  {
    id: 5,
    badge: "Fitness",
    title: "Active Lifestyle",
    tests: "35+ Tests",
    price: "₹1,499",
    icon: FaRunning,
    color: "emerald",
    features: [
      "Protein",
      "Vitamin B12",
      "Vitamin D",
      "Calcium",
    ],
  },

  {
    id: 6,
    badge: "Liver",
    title: "Liver Health",
    tests: "20+ Tests",
    price: "₹1,199",
    icon: GiLiver,
    color: "amber",
    features: [
      "LFT",
      "Bilirubin",
      "Albumin",
      "SGPT",
    ],
  },

  {
    id: 7,
    badge: "Kidney",
    title: "Kidney Care",
    tests: "22+ Tests",
    price: "₹1,299",
    icon: GiKidneys,
    color: "cyan",
    features: [
      "Creatinine",
      "Urea",
      "Electrolytes",
      "Urine Analysis",
    ],
  },

  {
    id: 8,
    badge: "Preventive",
    title: "Executive Health",
    tests: "85+ Tests",
    price: "₹3,499",
    icon: FiShield,
    color: "violet",
    features: [
      "Full Body",
      "Cancer Markers",
      "Heart Profile",
      "Vitamin Profile",
    ],
  },
];

const themes = {
  sky: {
    bg: "from-sky-50 to-cyan-50",
    icon: "bg-sky-100 text-sky-600",
    badge: "bg-sky-100 text-sky-700",
    button: "bg-sky-600 hover:bg-sky-700",
  },

  rose: {
    bg: "from-rose-50 to-pink-50",
    icon: "bg-rose-100 text-rose-600",
    badge: "bg-rose-100 text-rose-700",
    button: "bg-rose-600 hover:bg-rose-700",
  },

  pink: {
    bg: "from-pink-50 to-fuchsia-50",
    icon: "bg-pink-100 text-pink-600",
    badge: "bg-pink-100 text-pink-700",
    button: "bg-pink-600 hover:bg-pink-700",
  },

  red: {
    bg: "from-red-50 to-rose-50",
    icon: "bg-red-100 text-red-600",
    badge: "bg-red-100 text-red-700",
    button: "bg-red-600 hover:bg-red-700",
  },

  emerald: {
    bg: "from-emerald-50 to-green-50",
    icon: "bg-emerald-100 text-emerald-600",
    badge: "bg-emerald-100 text-emerald-700",
    button: "bg-emerald-600 hover:bg-emerald-700",
  },

  amber: {
    bg: "from-amber-50 to-orange-50",
    icon: "bg-amber-100 text-amber-600",
    badge: "bg-amber-100 text-amber-700",
    button: "bg-amber-600 hover:bg-amber-700",
  },

  cyan: {
    bg: "from-cyan-50 to-sky-50",
    icon: "bg-cyan-100 text-cyan-600",
    badge: "bg-cyan-100 text-cyan-700",
    button: "bg-cyan-600 hover:bg-cyan-700",
  },

  violet: {
    bg: "from-violet-50 to-indigo-50",
    icon: "bg-violet-100 text-violet-600",
    badge: "bg-violet-100 text-violet-700",
    button: "bg-violet-600 hover:bg-violet-700",
  },
};

export default function Packages() {
  return (
    <section
      id="packages"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-14 sm:py-20 lg:py-28"
    >
      {/* Background */}

      <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-sky-100/40 blur-[120px]" />

      <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-cyan-100/40 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-2 text-xs font-semibold text-sky-700 sm:px-4 sm:text-sm">
            <FiActivity />
            Preventive Healthcare
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">

            Health Packages Designed

            <span className="mt-2 block bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
              For Every Lifestyle
            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Choose from comprehensive health packages curated by medical
            professionals for early detection, preventive care and complete
            wellness.
          </p>

        </motion.div>

        {/* Packages Grid */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
          {packages.map((pkg, index) => {
  const Icon = pkg.icon;
  const theme = themes[pkg.color];

  return (
    <motion.article
      key={pkg.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
      }}
      whileHover={{ y: -6 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br ${theme.bg} p-5 transition-all duration-300 hover:border-sky-200 hover:shadow-xl sm:p-6 lg:p-7`}
    >
      {/* Decorative Glow */}

      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/50 blur-3xl" />

      {/* Badge */}

      <span
        className={`relative z-10 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${theme.badge}`}
      >
        {pkg.badge}
      </span>

      {/* Icon */}

      <div
        className={`relative z-10 mt-5 flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm transition duration-300 group-hover:scale-105 ${theme.icon} sm:h-16 sm:w-16`}
      >
        <Icon className="text-2xl sm:text-3xl" />
      </div>

      {/* Title */}

      <div className="relative z-10 mt-5">

        <h3 className="text-xl font-bold leading-tight text-slate-900 sm:text-2xl">
          {pkg.title}
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          {pkg.tests} Included
        </p>

      </div>

      {/* Features */}

      <div className="relative z-10 mt-6 space-y-3">

        {pkg.features.map((feature) => (

          <div
            key={feature}
            className="flex items-center gap-3"
          >
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
              <FiCheck className="text-xs text-emerald-600" />
            </div>

            <span className="text-sm text-slate-700">
              {feature}
            </span>

          </div>

        ))}

      </div>

      <div className="flex-1" />

      {/* Bottom */}

      <div className="relative z-10 mt-6 border-t border-slate-200 pt-5">

        <div className="flex items-end justify-between">

          <div>

            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Starting From
            </p>

            <h4 className="mt-1 text-2xl font-black text-slate-900 sm:text-3xl">
              {pkg.price}
            </h4>

          </div>

          <button
            className={`flex h-11 w-11 items-center justify-center rounded-xl text-white transition-all duration-300 group-hover:translate-x-1 ${theme.button}`}
          >
            <FiArrowRight />
          </button>

        </div>

      </div>

    </motion.article>
  );
})}
   </div>
        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="mt-14 sm:mt-20"
        >
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 via-cyan-600 to-sky-700 p-6 text-white shadow-[0_25px_60px_rgba(14,165,233,.25)] sm:p-8 lg:p-12">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              {/* Left */}

              <div className="max-w-2xl">

                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold backdrop-blur sm:text-sm">
                  <FiHeart />
                  Personalized Preventive Care
                </span>

                <h3 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  Not Sure Which
                  <br />
                  Health Package Fits You?
                </h3>

                <p className="mt-5 max-w-xl text-base leading-7 text-sky-100 sm:text-lg">
                  Our healthcare experts can recommend the most suitable
                  diagnostic package based on your age, lifestyle, symptoms,
                  medical history and wellness goals.
                </p>

                {/* Quick Benefits */}

                <div className="mt-6 flex flex-wrap gap-3">

                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                    ✓ Expert Guidance
                  </span>

                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                    ✓ Affordable Packages
                  </span>

                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                    ✓ Home Collection
                  </span>

                </div>

              </div>

              {/* Right */}

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col">

                <button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-sky-700 transition-all duration-300 hover:gap-3 hover:shadow-xl sm:w-auto">

                  Talk to an Expert

                  <FiArrowRight />

                </button>

                <button className="inline-flex w-full items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-7 py-4 font-semibold backdrop-blur transition-all duration-300 hover:bg-white/20 sm:w-auto">

                  View All Packages

                </button>

              </div>

            </div>
            

          </div>
        </motion.div>
 


      </div>

  
    </section>
  );
}