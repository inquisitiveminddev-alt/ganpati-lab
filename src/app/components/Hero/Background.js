"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-slate-50" />

      {/* Blue Glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 left-1/2 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-sky-300/20 blur-[120px]"
      />

      {/* Cyan Glow */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-300/20 blur-[120px]"
      />

      {/* Left Glow */}
      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-0 top-1/3 h-[320px] w-[320px] rounded-full bg-blue-200/20 blur-[100px]"
      />

      {/* Medical Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#0f172a 1px,transparent 1px),
            linear-gradient(to bottom,#0f172a 1px,transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial Fade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,white_95%)]" />

      {/* Floating Circles */}
      <motion.div
        animate={{
          y: [0, -18, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute left-20 top-32 h-5 w-5 rounded-full bg-sky-300/60"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute right-40 top-48 h-3 w-3 rounded-full bg-cyan-400/60"
      />

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
        }}
        className="absolute bottom-24 left-1/4 h-4 w-4 rounded-full bg-blue-300/50"
      />

      {/* Decorative Ring */}
      <div className="absolute -right-32 top-24 h-72 w-72 rounded-full border border-sky-200/40" />

      <div className="absolute -left-24 bottom-16 h-60 w-60 rounded-full border border-cyan-200/40" />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/90 to-transparent" />
    </div>
  );
}