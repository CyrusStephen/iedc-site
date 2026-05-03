"use client";

import { motion } from "framer-motion";

const team = [
  { role: "IEDC Lead", desc: "Leading vision, execution, and growth" },
  { role: "Innovation Lead", desc: "Driving ideation and hackathons" },
  { role: "Media Lead", desc: "Handling content and storytelling" },
  { role: "Marketing Lead", desc: "Sponsorships and outreach" },
  { role: "Women Cell Lead", desc: "Building inclusive innovation space" },
  { role: "Operations Lead", desc: "Managing events and execution" },
];

export default function Team() {
  return (
    <section className="max-w-5xl mx-auto px-4 md:px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-4">
        Leadership Team
      </h2>

      <p className="text-gray-400 text-center mb-12">
        The people building the culture, systems, and execution.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border border-gray-800 p-6 rounded-xl 
                       hover:border-white hover:-translate-y-2 
                       hover:shadow-lg hover:shadow-white/10 
                       transition-all duration-300"
          >
            <h3 className="text-xl font-semibold">{member.role}</h3>
            <p className="text-gray-400 mt-2">{member.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}