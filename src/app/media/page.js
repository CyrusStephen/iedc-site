"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineSpeakerWave,
  HiOutlineSpeakerXMark,
} from "react-icons/hi2";

const categories = ["Events", "Trips", "Behind The Scenes"];

const mediaItems = [
  {
    title: "Grand Circle of Changemakers",
    category: "Events",
    image: "/images/media/gallery/gcc-1.jpeg",
  },
  {
    title: "Onam Bazaar",
    category: "Events",
    video: "/videos/media/onam-preview.mp4",
  },
  {
    title: "IdeaXchange",
    category: "Events",
    image: "/images/media/gallery/ideaxchange-1.jpeg",
  },
  {
    title: "Team Trip Moments",
    category: "Trips",
    image: "/images/media/gallery/trip-1.jpeg",
  },
  {
    title: "Planning Room",
    category: "Behind The Scenes",
    image: "/images/media/gallery/bts-1.jpeg",
  },
  {
    title: "Event Setup",
    category: "Behind The Scenes",
    video: "/videos/media/bts-preview.mp4",
  },
];

const reels = [
  {
    title: "A day with IEDC",
    image: "/images/media/reels/reel-1.jpeg",
    link: "INSTAGRAM_REEL_LINK_1",
  },
  {
    title: "Event BTS",
    image: "/images/media/reels/reel-2.jpeg",
    link: "INSTAGRAM_REEL_LINK_2",
  },
  {
    title: "Campus Moments",
    image: "/images/media/reels/reel-3.jpeg",
    link: "INSTAGRAM_REEL_LINK_3",
  },
];

export default function MediaPage() {
  const [activeCategory, setActiveCategory] = useState("Events");

  const filteredItems = mediaItems.filter(
    (item) => item.category === activeCategory
  );

  const scrollingItems = [...filteredItems, ...filteredItems];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="mx-auto max-w-7xl px-8 pt-32 pb-24 md:px-16">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/45">
            Media
          </p>

          <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            The moments behind the movement.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Photos, stories, chaos, friendships, execution, and the culture that
            powers IEDC Saint Berchmans College.
          </p>
        </motion.div>

        {/* FEATURED VISUAL */}
        <section className="mt-16">
          <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-black md:h-[560px]">
            <video
              src="/videos/media/media-hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12">
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/45">
                IEDC Culture
              </p>

              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                The real story is usually behind the scenes.
              </h2>
            </div>
          </div>
        </section>

        {/* CATEGORY CARDS */}
        <section className="mt-24">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/45">
            Explore
          </p>

          <div className="grid gap-5 md:grid-cols-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`group rounded-[2rem] border p-8 text-left transition duration-500 hover:-translate-y-1 ${
                  activeCategory === category
                    ? "border-white/30 bg-white/[0.08]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/25"
                }`}
              >
                <p className="mb-8 text-xs uppercase tracking-[0.35em] text-white/40">
                  View
                </p>

                <h3 className="text-3xl font-semibold">{category}</h3>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  {category === "Events"
                    ? "GCC, Onam Bazaar, IdeaXchange, and the moments that shaped our event culture."
                    : category === "Trips"
                    ? "Team journeys, bonding moments, travel memories, and the culture outside the room."
                    : "Planning, setup, late work, mistakes, laughter, and everything people usually never see."}
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* MOVING GALLERY */}
        <section className="mt-24">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/45">
            {activeCategory}
          </p>

          <h2 className="text-3xl font-semibold md:text-5xl">
            Culture in motion.
          </h2>

          <div className="mt-12 overflow-hidden">
            <div className="gallery-track gap-5">
              {scrollingItems.map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="relative h-[280px] min-w-[380px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
                >
                  {item.video ? (
                    <video
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-white/45">
                      {item.category}
                    </p>

                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INSTAGRAM REELS */}
        <section className="mt-28">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/45">
            From Instagram
          </p>

          <h2 className="text-3xl font-semibold md:text-5xl">
            Short moments. Big memories.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
  {reels.map((item) => (
    <ReelCard key={item.title} item={item} />
  ))}
</div>
        </section>

        {/* FINAL QUOTE */}
        <section className="mt-28 border-t border-white/10 pt-14">
          <p className="max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
            <span className="text-white/35">Moments become</span>{" "}
            <span className="text-white">memories</span>
            <br />
            <span className="text-white/35">when we are living</span>{" "}
            <span className="text-white">in the moment.</span>
          </p>
        </section>
      </section>
    </main>
  );
}

function ReelCard({ item }) {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="group relative aspect-[9/14] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
      <video
        src={item.video}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

<button
  type="button"
  onClick={() => setIsMuted(!isMuted)}
  className="absolute bottom-5 right-5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white/70 backdrop-blur-sm transition hover:text-white"
>
  {isMuted ? (
    <HiOutlineSpeakerXMark size={16} />
  ) : (
    <HiOutlineSpeakerWave size={16} />
  )}
</button>

      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-5 top-5 z-20 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white/75 backdrop-blur-md transition hover:text-white"
      >
        Instagram ↗
      </a>

      <div className="absolute bottom-6 left-6 right-6 z-20">
        <h3 className="text-2xl font-semibold">{item.title}</h3>
        <p className="mt-3 text-sm text-white/55">
          Watch here or open on Instagram.
        </p>
      </div>
    </div>
  );
}