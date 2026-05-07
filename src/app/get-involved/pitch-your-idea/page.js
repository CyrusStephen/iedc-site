"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PitchYourIdeaPage() {
  return (
    <main className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <section className="px-8 pt-24 md:px-16 md:pt-32">
<Link
  href="/get-involved"
  className="group inline-flex items-center gap-3 text-sm text-white/65 transition-all duration-300 hover:text-white"
>
  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/8 bg-white/[0.03] transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.06]">
    <span className="transition-transform duration-300 group-hover:-translate-x-[2px] group-hover:-translate-y-[2px]">
      ↖
    </span>
  </div>

  <span className="relative">
    Go Back

    <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
  </span>
</Link>
        </section>

        <div className="relative mt-8 h-[300px] w-full px-8 md:h-[420px] md:px-16">
          <div className="relative h-full overflow-hidden rounded-[28px]">
  <img
    src="/images/get-involved/pitch.jpeg"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-black/40" />

  <div className="absolute inset-0 flex items-end px-6 pb-6 md:px-12 md:pb-10">
    <h1 className="text-3xl font-semibold text-white md:text-5xl">
      Pitch Your Idea
    </h1>
  </div>
</div>
        </div>

        <section className="px-8 pt-12 pb-20 md:px-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.82fr] xl:gap-10">
            <div>
              <h1 className="text-4xl md:text-6xl font-semibold">Turn your idea into something real.</h1>
              <p className="mt-6 text-lg text-[var(--muted)]">
                Share your idea and get feedback, mentorship, and direction.

              </p>

              <div className="mt-10 space-y-5">
                {[
                  "Get feedback",
                  "Find mentorship",
                  "Improve your idea",
                  "Start building and get support",
                ].map((item) => (
                  <div key={item} className="flex gap-4">
                    <span style={{ color: "var(--accent)" }}>✦</span>
                    <p style={{ color: "var(--muted)" }}>{item}</p>
                  </div>
                ))}
              </div>

              <a href="#" className="mt-12 inline-flex px-6 py-3 bg-white text-[var(--accent)] rounded-full">
                Continue to form
              </a>
            </div>

            <aside className="relative min-h-[520px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
  <video
    src="/videos/get-involved/pitch.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-black/35" />
  {/* Placeholder gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-white/[0.02]" />

  {/* Subtle glow */}
  <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-soft)] blur-3xl opacity-40" />

  {/* Future media label */}
  <div className="absolute bottom-6 left-6">
    <p className="text-xs uppercase tracking-[0.3em] text-white/35">
      Future Media
    </p>

    <p className="mt-2 text-sm text-white/55">
      Video / photography section
    </p>
  </div>
</aside>
          </div>
        </section>
      </motion.div>
    </main>
  );
}