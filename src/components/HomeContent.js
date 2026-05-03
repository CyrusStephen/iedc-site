"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function HomeContent() {
  const [selectedItem, setSelectedItem] = useState(null);
  const sectionAnimation = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.65, ease: "easeOut" },
};
  return (
    
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-20 space-y-20">

    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen px-6 md:px-12">

  <div className="group relative h-96 md:h-[450px] rounded-2xl overflow-hidden border border-gray-800 cursor-pointer hover:border-white/60 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10">

  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-black" />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500" />

  {/* Mute icon */}
  <div className="absolute bottom-4 right-4 z-20">
    
    {/* simple speaker icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="white"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 5.25L6.75 9H3.75v6h3l4.5 3.75V5.25z"
      />
    </svg>

  </div>
</div>

  {/* Text */}
  <div className="relative z-10 h-full p-6 flex flex-col justify-end">
    <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
      Vision Video
    </p>
    <h3 className="text-2xl font-bold">
      What IEDC Saint Berchmans is building this year
    </h3>
  </div>

</div>

      {/* Student Businesses and Startups */}
      <motion.div {...sectionAnimation}>
        <h2
  className="mb-6 text-2xl font-semibold tracking-tight"
  style={{ color: "var(--text)" }}
>
  Student Businesses and Startups
</h2>

        <div className="grid md:grid-cols-3 gap-6">

  <div
onClick={() => window.location.href = "/student-startups/startup-one"}
  className="cursor-pointer rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1"
style={{
  background: "var(--surface)",
  borderColor: "var(--border)",
}}
>
    <h3 className="text-lg font-semibold">Startup Name</h3>
    <p
  className="mt-2 text-sm leading-6"
  style={{ color: "var(--muted)" }}
>
      What they are building in one line.
    </p>
  </div>

  <div
  onClick={() => window.location.href = "/student-startups/startup-two"}
  className="cursor-pointer rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1"
style={{
  background: "var(--surface)",
  borderColor: "var(--border)",
}}
>
    <h3 className="text-lg font-semibold">Startup Name</h3>
    <p
  className="mt-2 text-sm leading-6"
  style={{ color: "var(--muted)" }}
>
      What they are building in one line.
    </p>
  </div>

  <div
  onClick={() => window.location.href = "/student-startups/startup-three"}
  className="cursor-pointer rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1"
style={{
  background: "var(--surface)",
  borderColor: "var(--border)",
}}
>
    <h3 className="text-lg font-semibold">Startup Name</h3>
    <p
  className="mt-2 text-sm leading-6"
  style={{ color: "var(--muted)" }}
>
      What they are building in one line.
    </p>
  </div>

</div>
      </motion.div>

      {/* Collaborations */}
<motion.div {...sectionAnimation}>
  <h2
  className="mb-6 text-2xl font-semibold tracking-tight"
  style={{ color: "var(--text)" }}
>
  Collaborations
</h2>

  <div className="grid md:grid-cols-2 gap-6">
    <div
  onClick={() => alert("Open Collaboration Details")}
  className="cursor-pointer rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1"
style={{
  background: "var(--surface)",
  borderColor: "var(--border)",
}}
>
      <h3 className="text-lg font-semibold">College Name</h3>
      <p
  className="mt-2 text-sm leading-6"
  style={{ color: "var(--muted)" }}
>
        Joint innovation events, hackathons, and knowledge exchange.
      </p>
    </div>

    <div
  onClick={() => alert("Open Collaboration Details")}
  className="cursor-pointer rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1"
style={{
  background: "var(--surface)",
  borderColor: "var(--border)",
}}
>
      <h3 className="text-lg font-semibold">College Name</h3>
      <p
  className="mt-2 text-sm leading-6"
  style={{ color: "var(--muted)" }}
>
        Building cross-campus startup ecosystem together.
      </p>
    </div>
  </div>
</motion.div>


      {/* Stories */}
      <motion.div {...sectionAnimation}>
        <h2
  className="mb-6 text-2xl font-semibold tracking-tight"
  style={{ color: "var(--text)" }}
>
  IEDC Stories
</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div
  onClick={() => alert("Open Story")}
  className="h-40 bg-gray-900 rounded-xl border border-gray-800 hover:border-white transition cursor-pointer"
></div>
          <div
  onClick={() => alert("Open Story")}
  className="h-40 bg-gray-900 rounded-xl border border-gray-800 hover:border-white transition cursor-pointer"
></div>
        </div>
      </motion.div>

      {/* Events */}
<motion.div {...sectionAnimation}>
  <h2
  className="mb-6 text-2xl font-semibold tracking-tight"
  style={{ color: "var(--text)" }}
>
  IEDC Events
</h2>

  <div className="grid md:grid-cols-3 gap-6">
    <div
      onClick={() => alert("Open Event")}
      className="h-48 bg-gray-900 rounded-xl border border-gray-800 hover:border-white transition cursor-pointer"
    ></div>

    <div
      onClick={() => alert("Open Event")}
      className="h-48 bg-gray-900 rounded-xl border border-gray-800 hover:border-white transition cursor-pointer"
    ></div>

    <div
      onClick={() => alert("Open Event")}
      className="h-48 bg-gray-900 rounded-xl border border-gray-800 hover:border-white transition cursor-pointer"
    ></div>
  </div>
</motion.div>

      {/* TV */}
      <motion.div {...sectionAnimation}>
        <h2
  className="mb-6 text-2xl font-semibold tracking-tight"
  style={{ color: "var(--text)" }}
>
  IEDC TV
</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div
  onClick={() => alert("Open Video")}
  className="h-48 bg-gray-900 rounded-xl border border-gray-800 hover:border-white transition cursor-pointer"
></div>
          <div
  onClick={() => alert("Open Video")}
  className="h-48 bg-gray-900 rounded-xl border border-gray-800 hover:border-white transition cursor-pointer"
></div>
          <div
  onClick={() => alert("Open Video")}
  className="h-48 bg-gray-900 rounded-xl border border-gray-800 hover:border-white transition cursor-pointer"
></div>
        </div>
      </motion.div>

      {selectedItem && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
    <div className="max-w-md w-full rounded-2xl border border-gray-800 bg-black p-6">
      <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
        {selectedItem.type}
      </p>

      <h3 className="text-2xl font-bold mb-4">
        {selectedItem.title}
      </h3>

      <p className="text-gray-400 mb-6">
        {selectedItem.description}
      </p>

      <button
        onClick={() => setSelectedItem(null)}
        className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
      >
        Close
      </button>
    </div>
  </div>
)}
    </section>
  );
}