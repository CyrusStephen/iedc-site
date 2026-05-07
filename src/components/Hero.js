"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] items-center justify-center overflow-hidden"
    >
      {/* Background video/image layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/backgrounds/hero-fallback.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/images/backgrounds/hero-video.mp4" type="video/mp4" />
        </video>

<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-[#050505]" />
<div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      </div>

      {/* Soft glow */}
      <div className="absolute left-1/2 top-1/2 z-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-soft)] blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-1xl px-6 pt-20 text-center md:pt-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[520px] mx-auto mb-6 text-[10px] md:text-xs uppercase tracking-[0.35em] text-white/80 leading-[1.9] drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]"
        >
          IEDC <br />
INNOVATION ENTREPRENEURSHIP <br />
DEVELOPMENT CELL
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-5xl font-semibold leading-[1.1] tracking-tight md:text-7xl"
        >
          We are not here to be something.
          <br className="hidden md:block" />
          <span className="text-gray-300">
            We are here to be the right thing.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto mb-8 max-w-2xl text-lg text-gray-300/85 md:text-xl"
        >
          A community focused on innovation, execution, and real impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex justify-center gap-4"
        >
          <Link
            href="/get-involved"
            className="group inline-flex items-center justify-center rounded-full px-6 py-3 text-[15px] font-semibold transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "white",
              color: "var(--accent)",
            }}
          >
            <span className="relative">
              Join IEDC
              <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
            </span>
          </Link>

 <Link
  href="/#iedc-stories"
  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-[15px] font-medium transition-all duration-300 hover:-translate-y-1"
  style={{
    color: "var(--text)",
    background: "rgba(15,15,15,0.72)",
    border: "1px solid var(--border)",
    backdropFilter: "blur(14px)",
  }}
>
  Explore
</Link>
        </motion.div>
      </div>
    <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-10 w-full bg-gradient-to-t from-[#050505]/45 via-[#050505]/15 to-transparent" />
    </section>
  );
}