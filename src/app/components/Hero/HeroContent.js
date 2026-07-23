"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiShield,
  FiClock,
} from "react-icons/fi";

import SearchBar from "./SearchBar";
import TrustMetrics from "./TrustMetrics";

export default function HeroContent({
  badge,
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  stats,
}) {
  return (
    <div className="mx-auto max-w-2xl lg:mx-0">

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/90 px-3 py-2 shadow-sm backdrop-blur sm:px-4"
      >
        <FiCheckCircle className="h-4 w-4 shrink-0 text-sky-600" />

        <span className="text-xs font-medium text-slate-700 sm:text-sm">
          {badge}
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:mt-6 sm:text-5xl lg:text-6xl xl:text-7xl"
      >
        {title}
      </motion.h1>

      {/* Subtitle */}

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8"
      >
        {subtitle}
      </motion.p>

      {/* Highlights */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="mt-6 flex flex-wrap gap-3"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-2 sm:px-4">
          <FiShield className="text-sky-600" />

          <span className="text-xs font-medium text-slate-700 sm:text-sm">
            Certified Laboratory
          </span>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-2 sm:px-4">
          <FiClock className="text-cyan-600" />

          <span className="text-xs font-medium text-slate-700 sm:text-sm">
            Fast Digital Reports
          </span>
        </div>
      </motion.div>

      {/* Search */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        className="mt-8"
      >
        <SearchBar />
      </motion.div>

      {/* CTA */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
        className="mt-8 flex flex-col gap-3 sm:flex-row"
      >
        <Link
          href={primaryButton.href}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-600 px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-sky-700 hover:shadow-lg sm:w-auto"
        >
          {primaryButton.label}

          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        <Link
          href={secondaryButton.href}
          className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 text-base font-semibold text-slate-700 transition-all duration-300 hover:border-sky-200 hover:bg-sky-50 sm:w-auto"
        >
          {secondaryButton.label}
        </Link>
      </motion.div>

      {/* Metrics */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
        className="mt-10 sm:mt-12"
      >
        <TrustMetrics stats={stats} />
      </motion.div>

    </div>
  );
}