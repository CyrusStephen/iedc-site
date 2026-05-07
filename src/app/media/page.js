"use client";

import { motion } from "framer-motion";

const mediaItems = [
  {
    title: "Event Prep Chaos",
    category: "Behind The Scenes",
    type: "wide",
    image: "/images/media/media-1.jpg",
  },
  {
    title: "Trip Moments",
    category: "Trips",
    type: "tall",
    image: "/images/media/media-2.jpg",
  },
  {
    title: "Campus Game Night",
    category: "Campus Life",
    type: "normal",
    image: "/images/media/media-3.jpg",
  },
  {
    title: "Food After Events",
    category: "Memories",
    type: "normal",
    image: "/images/media/media-4.jpg",
  },
  {
    title: "Behind The Stage",
    category: "Events",
    type: "wide",
    image: "/images/media/media-5.jpg",
  },
];

const reels = [
  {
    title: "A day with IEDC",
    image: "/images/media/reel-1.jpg",
  },
  {
    title: "Event BTS",
    image: "/images/media/reel-2.jpg",
  },
  {
    title: "Campus moments",
    image: "/images/media/reel-3.jpg",
  },
];

const categories = ["Trips", "Events", "Behind The Scenes", "Reels", "Campus Life"];

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="mx-auto max-w-7xl px-8 pt-32 pb-24 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/45">
            Media
          </p>

          <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            The moments behind the movement.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Trips, event chaos, late-night planning, candid memories,
            behind-the-scenes moments, and the culture that powers IEDC SB.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-white/65 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>

        <section className="mt-16">
          <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] md:h-[560px]">
            <img
              src="/images/media/featured.jpg"
              alt="Featured IEDC moment"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12">
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/45">
                Featured Moment
              </p>

              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                The real story is usually behind the scenes.
              </h2>
            </div>
          </div>
        </section>

        <section className="mt-24">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/45">
                Gallery
              </p>
              <h2 className="text-3xl font-semibold md:text-5xl">
                Culture, captured.
              </h2>
            </div>
          </div>

          <div className="grid auto-rows-[220px] gap-5 md:grid-cols-4">
            {mediaItems.map((item) => (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] ${
                  item.type === "wide"
                    ? "md:col-span-2"
                    : item.type === "tall"
                    ? "md:row-span-2"
                    : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-white/45">
                    {item.category}
                  </p>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/45">
            Reels
          </p>

          <h2 className="text-3xl font-semibold md:text-5xl">
            Short moments. Big memories.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reels.map((item) => (
              <div
                key={item.title}
                className="group relative aspect-[9/14] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs text-white/75 backdrop-blur-md">
                  Reel
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-28 border-t border-white/10 pt-14">
  <p className="max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
    <span className="text-white/35">
      Moments becomes
    </span>{" "}
    
    <span className="text-white">
      memories
    </span>

    <br />

    <span className="text-white/35">
      when we are living
    </span>{" "}

    <span className="text-white">
      in the moment.
    </span>
  </p>
</section>
      </section>
    </main>
  );
}