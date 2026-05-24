"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const roadmap = [
  {
    month: "June 2026",
    title: "Foundation & Team Building",
    type: "Planning Phase",
    level: "Core",
    description:
      "Major meetings, yearly planning, co-lead interviews, website performance analysis, and clear duty assignment for leads and co-leads.",
    link: "/events/team-building",
  },
  {
    month: "July 2026",
    title: "Idea Exchange",
    type: "Community Event",
    level: "Low Budget",
    description:
      "A student-focused idea sharing event where early thoughts, problems, and startup possibilities are discussed openly.",
    link: "/events/idea-exchange",
  },
  {
    month: "August 2026",
    title: "Onam Bazaar",
    type: "Campus Bazaar",
    level: "Culture",
    description:
      "A seasonal campus bazaar during the Onam period, blending entrepreneurship, student stalls, and Kerala’s festive energy.",
    link: "/events/onam-bazaar",
  },
  {
    month: "September – October 2026",
    title: "Hackathon",
    type: "Innovation Event",
    level: "Mid Budget",
    description:
      "A one-day hackathon designed for creative problem solving, practical thinking, and student collaboration.",
    link: "/events/hackathon",
  },
  {
    month: "November 2026",
    title: "Idea Exchange 2.0",
    type: "Second Cycle",
    level: "Community",
    description:
      "A second idea-focused event with a refreshed name and format, continuing the innovation cycle of the year.",
    link: "/events/idea-exchange-2",
  },
  {
    month: "January 2027",
    title: "GCC & 3MT",
    type: "Flagship Event",
    level: "Major",
    description:
      "One of the biggest IEDC events of the year, planned with stronger hosting, higher budget, and larger campus visibility.",
    link: "/events/gcc-3mt",
    featured: true,
  },
  {
    month: "February – March 2027",
    title: "Women Empowerment Event",
    type: "Flagship Social Impact",
    level: "Major",
    description:
      "A major social-impact event focused on women empowerment, leadership, confidence, and meaningful campus conversations.",
    link: "/events/women-empowerment",
    featured: true,
  },
];

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 pt-32 pb-24 text-white md:px-12">
      <section className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-24 max-w-4xl"
        >

          <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Roadmap 2026 — 2027
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            A year of building, collaboration, experimentation, and execution at
            IEDC Saint Berchmans College.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2" />

          <div className="space-y-16">
            {roadmap.map((item, index) => (
              <RoadmapCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function RoadmapCard({ item, index }) {
  const isRight = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.65 }}
      className={`relative grid gap-8 md:grid-cols-2 ${
        isRight ? "md:text-left" : ""
      }`}
    >
      <div
        className={`relative pl-12 md:pl-0 ${
          isRight ? "md:col-start-2" : "md:pr-14"
        }`}
      >
        <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.45)] md:left-auto md:right-[-7px]" />

        <div
          className={`overflow-hidden rounded-3xl border ${
            item.featured
              ? "border-white/25 bg-white/[0.06]"
              : "border-white/10 bg-white/[0.03]"
          }`}
        >
          <div className="h-56 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent" />

          <div className="p-7">
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/40">
              {item.month}
            </p>

            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {item.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/60">
              {item.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/60">
                {item.type}
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/60">
                {item.level}
              </span>
            </div>
            <Link href={item.link} className="mt-6 inline-flex items-center text-sm text-white/70 transition hover:text-white">
            Explore Event →
            </Link>
            </div>
        </div>
      </div>
    </motion.div>
  );
}
