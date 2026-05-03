"use client";

import { motion } from "framer-motion";

export default function MediaSection() {
  return (
    <section className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="border border-gray-800 p-6 rounded-xl hover:border-white transition"
      >
        <h3 className="text-xl font-semibold mb-2">IEDC Intro</h3>
        <p className="text-gray-400 text-sm">
          A short vision video about our mission.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="border border-gray-800 p-6 rounded-xl hover:border-white transition"
      >
        <h3 className="text-xl font-semibold mb-2">CEO Talks</h3>
        <p className="text-gray-400 text-sm">
          Insights from founders and leaders.
        </p>
      </motion.div>

    </section>
  );
}