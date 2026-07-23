"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowRight,
  FiPhone,
  FiCalendar,
  FiClock,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";

const benefits = [
  "Free Home Sample Collection",
  "Reports Within 24 Hours",
  "Experienced Pathologists",
  "NABL Standard Laboratory",
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-700 via-cyan-600 to-sky-800" />

      {/* Glow */}
      <div className="absolute -left-24 top-0 h-[32rem] w-[32rem] rounded-full bg-white/10 blur-[150px]" />

      <div className="absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-cyan-300/20 blur-[140px]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">

          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: .6,
            }}
          >

            {/* Badge */}

            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-white backdrop-blur">

              <FiShield />

              Trusted Diagnostic Centre

            </span>

            {/* Heading */}

            <h2 className="mt-8 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">

              Book Your
              <br />

              <span className="text-cyan-200">
                Health Checkup
              </span>

              Today.

            </h2>

            {/* Description */}

            <p className="mt-8 max-w-2xl text-lg leading-8 text-sky-100">

              Prioritize your health with comprehensive diagnostic packages,
              accurate laboratory testing, and convenient home sample
              collection—all backed by experienced healthcare professionals.

            </p>

            {/* Benefits */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {benefits.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur"
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sky-600">

                    <FiCheckCircle />

                  </div>

                  <span className="font-medium text-white">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/book-test"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-sky-700 shadow-xl transition-all duration-300 hover:gap-5"
              >

                Book Appointment

                <FiArrowRight />

              </Link>

              <Link
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >

                <FiPhone />

                Call Now

              </Link>

            </div>

          </motion.div>
                    {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="relative"
          >

            {/* Glow */}
            <div className="absolute inset-0 rounded-[40px] bg-white/10 blur-3xl" />

            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[36px] border border-white/15 bg-white/10 p-8 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,.18)]">

              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5" />

              {/* Header */}
              <div className="relative flex items-center justify-between">

                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-100">
                    <FiCheckCircle />
                    Available Today
                  </span>

                  <h3 className="mt-5 text-3xl font-black text-white">
                    Book in 30 Seconds
                  </h3>

                  <p className="mt-3 max-w-sm leading-7 text-sky-100">
                    Schedule your health checkup online and choose a convenient
                    time for home sample collection.
                  </p>
                </div>

                <div className="hidden lg:flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-lg">
                  <FiCalendar className="text-3xl" />
                </div>

              </div>

              {/* Features */}
              {/* <div className="relative mt-10 space-y-4">

                {[
                  {
                    icon: <FiClock />,
                    title: "Reports in 24 Hours",
                    desc: "Digital reports delivered quickly.",
                  },
                  {
                    icon: <FiShield />,
                    title: "NABL Standard",
                    desc: "Trusted diagnostic quality.",
                  },
                  {
                    icon: <FiCheckCircle />,
                    title: "Home Collection",
                    desc: "Safe & hygienic doorstep service.",
                  },
                ].map((item) => (

                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-sky-600">
                      {item.icon}
                    </div>

                    <div>

                      <h4 className="font-semibold text-white">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm text-sky-100">
                        {item.desc}
                      </p>

                    </div>

                  </div>

                ))}

              </div> */}

              {/* Rating */}
              {/* <div className="relative mt-10 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm uppercase tracking-[0.25em] text-sky-200">
                      Google Rating
                    </p>

                    <h4 className="mt-2 text-3xl font-black text-white">
                      4.9<span className="text-cyan-200">★</span>
                    </h4>

                  </div>

                  <div className="text-right">

                    <p className="text-2xl font-black text-white">
                      50K+
                    </p>

                    <p className="text-sm text-sky-100">
                      Happy Patients
                    </p>

                  </div>

                </div>

              </div> */}

              {/* Floating Badge */}
              <div className="absolute -right-5 top-8 rotate-12 rounded-2xl bg-white px-5 py-3 shadow-xl">

                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Home Visit
                </p>

                <p className="mt-1 text-lg font-black text-sky-700">
                  FREE
                </p>

              </div>

            </div>

          </motion.div>

        </div>
                {/* Bottom Trust Strip */}
        {/* <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-20"
        >

          <div className="grid gap-5 rounded-[36px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4 lg:p-8">

            {[
              {
                value: "50K+",
                label: "Tests Performed",
              },
              {
                value: "4.9★",
                label: "Google Rating",
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
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center transition-all duration-300 hover:bg-white/10"
              >

                <h3 className="text-4xl font-black text-white lg:text-5xl">
                  {item.value}
                </h3>

                <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-cyan-300" />

                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-sky-100">
                  {item.label}
                </p>

              </motion.div>

            ))}

          </div>

        </motion.div> */}

      </div>
    </section>
  );
}