"use client";

import { motion } from "framer-motion";

export default function JoinSection() {
  return (
    <section className="max-w-3xl mx-auto text-center">

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        <h2 className="text-4xl font-bold mb-6">
  This might not be for everyone
  <br />
<span className="block text-xs tracking-widest text-gray-600 uppercase mt-3">
  who are we to judge?
</span>

  <br />

  This might just be for you
</h2>

      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 mb-8 text-lg"
      >
        We are building a culture of execution, innovation, and real impact.
        If you’re serious about building, learning, and pushing limits—
        this is your place.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-200 transition"
      >
        Apply to Join
      </motion.button>

    </section>
  );
}