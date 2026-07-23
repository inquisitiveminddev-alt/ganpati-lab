"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiStar,
  FiHome,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

export default function HeroImage({
  image = "/hero.png",
  tests = [],
  packages = [],
}) {
  const featuredTest = tests[0] || {
    name: "CBC Test",
    price: "₹399",
  };

  const featuredPackage = packages[0] || {
    name: "Complete Body Checkup",
    tests: "70+ Tests",
    price: "₹2,499",
  };

  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-2xl">

      {/* Glow */}

      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300/20 blur-[90px] sm:h-96 sm:w-96 lg:h-[500px] lg:w-[500px] lg:blur-[120px]" />

      {/* Main Image */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        className="relative overflow-hidden rounded-3xl border border-white/60 bg-white shadow-2xl"
      >
        <Image
          src={image}
          alt="Diagnostic Laboratory"
          width={700}
          height={760}
          priority
          className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[650px]"
        />
      </motion.div>

      {/* Mobile Rating Card */}

      <motion.div
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute bottom-4 left-4 rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-xl backdrop-blur lg:hidden"
      >
        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100">

            <FiStar className="text-yellow-500" />

          </div>

          <div>

            <h4 className="text-sm font-bold text-slate-900">
              4.9 / 5
            </h4>

            <p className="text-xs text-slate-500">
              Trusted Patients
            </p>

          </div>

        </div>
      </motion.div>

      {/* Popular Test */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute -left-6 top-8 hidden w-56 rounded-3xl border border-white/70 bg-white/90 p-5 shadow-xl backdrop-blur lg:block"
      >
        <p className="text-sm text-slate-500">
          Popular Test
        </p>

        <h4 className="mt-2 text-xl font-bold text-slate-900">
          {featuredTest.name}
        </h4>

        <div className="mt-4 flex items-center justify-between">

          <span className="text-2xl font-bold text-sky-600">
            {featuredTest.price}
          </span>

          <button className="rounded-xl bg-sky-600 p-2 text-white">
            <FiArrowRight />
          </button>

        </div>
      </motion.div>

      {/* Package */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute -right-6 top-20 hidden w-64 rounded-3xl border border-white/70 bg-white/90 p-5 shadow-xl backdrop-blur lg:block"
      >
        <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
          MOST POPULAR
        </span>

        <h3 className="mt-4 text-lg font-bold text-slate-900">
          {featuredPackage.name}
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          {featuredPackage.tests}
        </p>

        <div className="mt-5 flex items-center justify-between">

          <span className="text-2xl font-bold text-slate-900">
            {featuredPackage.price}
          </span>

          <FiCheckCircle className="text-emerald-500" />

        </div>
      </motion.div>

      {/* Desktop Rating */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute -bottom-5 left-6 hidden rounded-2xl border border-white/70 bg-white/90 px-6 py-4 shadow-xl backdrop-blur lg:block"
      >
        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100">

            <FiStar className="text-yellow-500" />

          </div>

          <div>

            <h4 className="font-bold text-slate-900">
              4.9 / 5
            </h4>

            <p className="text-sm text-slate-500">
              20,000+ Happy Patients
            </p>

          </div>

        </div>
      </motion.div>

      {/* Home Collection */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5.5,
        }}
        className="absolute bottom-14 -right-6 hidden rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-xl backdrop-blur xl:flex"
      >
        <div className="mr-3 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100">

          <FiHome className="text-emerald-600" />

        </div>

        <div>

          <h4 className="font-semibold text-slate-900">
            Home Collection
          </h4>

          <p className="text-sm text-slate-500">
            Available Today
          </p>

        </div>
      </motion.div>

    </div>
  );
}