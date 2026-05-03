"use client";

import { motion } from "framer-motion";

export default function Roadmap() {
  return (
    <section id="roadmap" className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-20 border-t border-gray-900">
      
      <h2 className="text-3xl font-bold mb-12 text-center">
        6 Month Roadmap
      </h2>

      <div className="border-l border-gray-700 space-y-10">

        {/* June */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="pl-6 relative"
        >
          <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 top-2"></div>
          <h3 className="text-xl font-semibold">June</h3>
          <p className="text-gray-400">
            Team formation, interviews, onboarding core members.
          </p>
        </motion.div>

        {/* Continue same pattern for other months */}

      </div>
    </section>
  );
}