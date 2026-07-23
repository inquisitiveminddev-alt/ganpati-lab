"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiSearch,
  FiArrowRight,
  FiClock,
} from "react-icons/fi";

const popularSearches = [
  "CBC Test",
  "Thyroid Profile",
  "Vitamin D",
  "HbA1c",
];

export default function SearchBar({
  placeholder = "Search tests, packages or symptoms...",
  buttonText = "Search",
  onSearch,
}) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="space-y-4">

      {/* Search */}

      <form
        onSubmit={handleSubmit}
        className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:border-sky-200 hover:shadow-xl"
      >

        <div className="flex flex-col sm:flex-row">

          {/* Input */}

          <div className="flex flex-1 items-center px-4 sm:px-5">

            <FiSearch className="mr-3 h-5 w-5 shrink-0 text-slate-400" />

            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={placeholder}
              className="h-14 w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none sm:h-16 sm:text-base"
            />

          </div>

          {/* Button */}

          <button
            type="submit"
            className="group flex h-14 w-full items-center justify-center gap-2 bg-sky-600 px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-sky-700 sm:h-16 sm:w-auto sm:px-8 sm:text-base"
          >

            {buttonText}

            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />

          </button>

        </div>

      </form>

      {/* Popular Searches */}

      <div className="flex flex-wrap items-center gap-2">

        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 sm:text-sm">

          <FiClock />

          Popular:

        </div>

        {popularSearches.map((item, index) => (

          <motion.button
            key={item}
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.06,
            }}
            onClick={() => setQuery(item)}
            className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition-all duration-300 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 sm:px-4 sm:text-sm"
          >

            {item}

          </motion.button>

        ))}

      </div>

    </div>
  );
}