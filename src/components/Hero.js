"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="flex items-center justify-center min-h-[75vh]">
      <div className="max-w-3xl text-center px-6 pt-20 md:pt-24">

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4"
        >
          IEDC • Saint Berchmans College
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6"
          >
          We are not here to be something.
          <br className="hidden md:block" />
          <span className="text-gray-400">
            We are here to be the right thing.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-gray-300/80 max-w-2xl mx-auto mb-8"
        >
          A community focused on innovation, execution, and real impact.
        </motion.p>

        <motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
  className="flex justify-center gap-4"
>

  {/* Primary */}
 <Link
  href="/get-involved"
  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-[15px] font-semibold transition-all duration-300 hover:-translate-y-1 group"
  style={{
    background: "white",
    color: "var(--accent)",
  }}
>
  <span className="relative">
    Join IEDC
    <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full"></span>
  </span>
</Link>

  {/* Secondary */}
  <button
    className="inline-flex items-center justify-center rounded-full px-6 py-3 text-[15px] font-medium transition-all duration-300 hover:-translate-y-1"
    style={{
      color: "var(--text)",
      background: "var(--surface)",
      border: "1px solid var(--border)",
    }}
  >
    Explore
  </button>

</motion.div>

      </div>
    </section>
  );
}