"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CampusMapSection from "@/components/CampusMapSection";

const sectionAnimation = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.65, ease: "easeOut" },
};

const startups = [
  {
    title: "Startup Name",
    description: "A venture by a 3rd year student, focused on solving [problem].",
    image: "/images/startups/startup-one.jpg",
    href: "/student-startups/startup-one",
  },
  {
    title: "Startup Name",
    description: "A venture by a 3rd year student, focused on solving [problem].",
    image: "/images/startups/startup-two.jpg",
    href: "/student-startups/startup-two",
  },
  {
    title: "Startup Name",
    description: "A venture by a 3rd year student, focused on solving [problem].",
    image: "/images/startups/startup-three.jpg",
    href: "/student-startups/startup-three",
  },
];

const collaborations = [
  {
    title: "College Name",
    description: "Joint innovation events, hackathons, and knowledge exchange.",
  },
  {
    title: "College Name",
    description: "Building cross-campus startup ecosystem together.",
  },
];

const stories = [
  { title: "Student Story", href: "/media" },
  { title: "Founder Journey", href: "/media" },
];

const events = [
  { title: "IEDC Event", href: "/media" },
  { title: "Workshop", href: "/media" },
  { title: "Innovation Meet", href: "/media" },
];

const videos = [
  { title: "IEDC TV", href: "/media" },
  { title: "Campus Talk", href: "/media" },
  { title: "Founder Clip", href: "/media" },
];

export default function HomeContent() {
  return (
    <section id="our-mission" 
    className="relative w-full px-6 md:px-12 pt-6 pb-20 space-y-20 scroll-mt-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(180,125,70,0.10),transparent_45%),radial-gradient(circle_at_15%_35%,rgba(120,75,40,0.08),transparent_40%)]" />

      <VisionCard />

      <motion.div
        {...sectionAnimation}
        className="max-w-3xl mx-auto text-center space-y-6"
      >
        <p className="text-xs uppercase tracking-[0.35em] text-white/50">
          Student Innovation
        </p>

        <h2 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
          Built by students.
          <br className="hidden md:block" />
          Scaled through execution.
        </h2>

        <p className="text-base md:text-lg text-white/70 leading-relaxed">
          From early ideas to real startups, IEDC enables students to build,
          experiment, and launch meaningful ventures.
        </p>
      </motion.div>

      <div id="student-startups" className="scroll-mt-32">
  <Section title="Student Businesses and Startups">
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {startups.map((startup, index) => (
        <StartupCard key={index} {...startup} />
      ))}
    </div>
  </Section>
</div>

<div id="collaborations" className="scroll-mt-32">
  <Section title="Collaborations">
    <div className="grid md:grid-cols-2 gap-6">
      {collaborations.map((item, index) => (
        <InfoCard key={index} {...item} />
      ))}
    </div>
  </Section>
</div>

<div id="campus-map" className="scroll-mt-32">
  <CampusMapSection />
</div>

<div id="iedc-stories" className="scroll-mt-32">
  <Section title="IEDC Stories">
    <PlaceholderGrid items={stories} columns="md:grid-cols-2" height="h-40" />
  </Section>
</div>

<div id="iedc-events" className="scroll-mt-32">
  <Section title="IEDC Events">
    <PlaceholderGrid items={events} columns="md:grid-cols-3" height="h-48" />
  </Section>
</div>

<div id="iedc-tv" className="scroll-mt-32">
  <Section title="IEDC TV">
    <PlaceholderGrid items={videos} columns="md:grid-cols-3" height="h-48" />
  </Section>
</div>
    </section>
  );
}

function VisionCard() {
  return (
    <motion.div
      {...sectionAnimation}
      className="relative -mt-12 md:-mt-16 left-1/2 right-1/2 -mx-[50vw] w-screen"
    >
      <div className="group relative h-96 md:h-[450px] rounded-b-[2rem] overflow-hidden border border-white/10 cursor-pointer transition-all duration-500 hover:border-white/30 hover:shadow-[0_30px_90px_rgba(255,255,255,0.08)]">
        <video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 h-full w-full object-cover"
>
  <source src="/videos/vision.mp4" type="video/mp4" />
</video>

        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition duration-500" />

        <div className="relative z-10 h-full flex items-end p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/50 mb-2">
              Our Vision
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              What IEDC Saint Berchmans is building this year
            </h3>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-5 h-5 opacity-80"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 5.25L6.75 9H3.75v6h3l4.5 3.75V5.25z"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

function Section({ title, children }) {
  return (
    <motion.div {...sectionAnimation}>
      <h2
        className="mb-6 text-2xl font-semibold tracking-tight"
        style={{ color: "var(--text)" }}
      >
        {title}
      </h2>

      {children}
    </motion.div>
  );
}

function StartupCard({ title, description, image, href }) {
  return (
    <Link href={href} className="block">
      <div className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-1 hover:border-white/25">
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_40%)]" />

        <div className="relative h-52 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        <div className="p-6">
          <h3 className="text-lg font-semibold tracking-tight text-white">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/60">
            {description}
          </p>

          <p className="mt-4 text-sm font-medium text-white/80 group-hover:text-white transition">
            → View Project
          </p>
        </div>
      </div>
    </Link>
  );
}

function InfoCard({ title, description }) {
  return (
    <div
      className="rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      <h3 className="text-lg font-semibold">{title}</h3>

      <p
        className="mt-2 text-sm leading-6"
        style={{ color: "var(--muted)" }}
      >
        {description}
      </p>
    </div>
  );
}

function PlaceholderGrid({ items, columns, height }) {
  return (
    <div className={`grid ${columns} gap-6`}>
      {items.map((item, index) => (
        <Link key={index} href={item.href} className="block">
          <div
            className={`${height} group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900 transition-all duration-300 hover:-translate-y-1 hover:border-white/40`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.10),transparent_40%)] opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                IEDC SB
              </p>

              <h3 className="mt-2 text-lg font-semibold text-white">
                {item.title}
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}