"use client";

import { motion } from "framer-motion";
import {
  FiUsers,
  FiActivity,
  FiAward,
  FiClock,
} from "react-icons/fi";

const defaultStats = [
  {
    icon: FiUsers,
    value: "50K+",
    label: "Patients Served",
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    icon: FiActivity,
    value: "250+",
    label: "Diagnostic Tests",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: FiAward,
    value: "99.8%",
    label: "Accurate Reports",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: FiClock,
    value: "24 Hrs",
    label: "Digital Reports",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
];

export default function TrustMetrics({
  stats = defaultStats,
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.08,
              duration: 0.45,
            }}
            whileHover={{
              y: -4,
              scale: 1.02,
            }}
            className="group flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-sm backdrop-blur transition-all duration-300 hover:border-sky-200 hover:shadow-lg sm:p-5"
          >
            {/* Icon */}

            {/* <div
              className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${item.bg} sm:h-12 sm:w-12`}
            >
              <Icon
                className={`h-5 w-5 ${item.color} sm:h-6 sm:w-6`}
              />
            </div> */}

            {/* Value */}

            <h3 className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
              {item.value}
            </h3>

            {/* Label */}

            <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
              {item.label}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}