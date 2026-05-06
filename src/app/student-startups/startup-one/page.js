"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const sectionAnimation = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.65, ease: "easeOut" },
};

const gallery = [
  {
    title: "Product Preview",
    src: "/images/startups/startup-one.jpg",
  },
  {
    title: "Behind the Build",
    src: "/images/startups/startup-one.jpg",
  },
  {
    title: "Prototype Moment",
    src: "/images/startups/startup-one.jpg",
  },
  {
    title: "Student Founder",
    src: "/images/startups/startup-one.jpg",
  },
];

export default function StartupOne() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white"
    style={{ paddingTop: "140px" }}>

      {/* HERO */}
<section className="relative px-6 pb-24 md:px-12 md:pb-32">
  <motion.div {...sectionAnimation} className="mx-auto max-w-6xl">
    <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/50">
      Student Startup
    </p>

    <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
      Startup Name
    </h1>

    <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
      A student-led venture focused on solving real problems through execution,
      experimentation, and meaningful innovation.
    </p>
  </motion.div>
</section>

      {/* BUSINESS + GALLERY */}
      <section className="px-6 pb-28 md:px-12 md:pb-36">
        <motion.div
          {...sectionAnimation}
          className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16"
        >
          {/* LEFT CONTENT */}
          <div className="space-y-10">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                Business Details
              </p>

              <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                What we are building
              </h2>

              <p className="max-w-2xl text-base leading-8 text-white/70 md:text-lg">
                This startup focuses on solving [problem]. Explain clearly what
                it does, why it matters, and how it works in a real-world
                context.
              </p>

              <p className="max-w-2xl text-base leading-8 text-white/70 md:text-lg">
                Add more depth here — what makes the approach different, how the
                idea started, and what the long-term vision looks like.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/40">
                  Focus
                </p>
                <p className="text-white/80">Problem Domain / Industry</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/40">
                  Stage
                </p>
                <p className="text-white/80">Early / Growing / Live</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-full border border-white/20 px-5 py-3 text-sm text-white/80 transition hover:-translate-y-[1px] hover:bg-white/10 hover:text-white"
              >
                Website
              </a>

              <a
                href="#"
                className="rounded-full border border-white/20 px-5 py-3 text-sm text-white/80 transition hover:-translate-y-[1px] hover:bg-white/10 hover:text-white"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* RIGHT GALLERY */}
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <div className="grid grid-cols-2 gap-4">
              {gallery.map((item, index) => (
                <div
                  key={item.title}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_30px_90px_rgba(255,255,255,0.06)] ${
                    index === 0 || index === 3
                      ? "h-72"
                      : "h-60 lg:mt-10"
                  }`}
                >
                  <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_40%)]" />

                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 z-20">
                    <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-white/45">
                      Gallery
                    </p>
                    <h3 className="text-lg font-semibold tracking-tight text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* STORY */}
      <section className="px-6 pb-28 md:px-12 md:pb-36">
        <motion.div
          {...sectionAnimation}
          className="mx-auto max-w-6xl border-t border-white/10 pt-16"
        >
          <div className="max-w-3xl space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">
              Founder Story
            </p>

            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              The Story
            </h2>

            <p className="text-base leading-8 text-white/70 md:text-lg">
              Talk about the founder here. What inspired them to start this,
              what challenges they faced, and what keeps them going.
            </p>

            <p className="text-base leading-8 text-white/70 md:text-lg">
              This section should feel personal, reflective, and honest — not
              corporate.
            </p>
          </div>

          <div className="mt-20">
            <Link
              href="/"
              className="text-sm text-white/50 transition hover:text-white"
            >
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}