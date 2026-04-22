"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  return (
<main className="bg-black text-white min-h-screen relative overflow-hidden">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.03),transparent_60%)]" />

  <div className="relative z-10">

      {/* NAVBAR */}

<nav className="sticky top-0 z-50 backdrop-blur-md bg-black/70 w-full flex justify-between items-center px-6 md:px-8 py-4 border-b border-gray-800">

  <h1 className="text-lg font-semibold">IEDC SB College</h1>
  <div className="flex gap-6 text-sm text-gray-400">
    <Link href="/"className={`hover:text-white transition ${pathname === "/" ? "text-white font-semibold" : "text-gray-400"}`}>Home</Link>
    <Link href="/roadmap"className={`hover:text-white transition ${pathname === "/roadmap" ? "text-white font-semibold" : "text-gray-400"}`}>Roadmap</Link>
    <Link href="/media"className={`hover:text-white transition ${pathname === "/media" ? "text-white font-semibold" : "text-gray-400"}`}>Media</Link>
    <Link href="/about"className={`hover:text-white transition ${pathname === "/about" ? "text-white font-semibold" : "text-gray-400"}`}>About</Link>
    <Link href="/join"className={`hover:text-white transition ${pathname === "/join" ? "text-white font-semibold" : "text-gray-400"}`}>Join</Link>
</div>
</nav>

      {/* HERO */}
      <section id="home" className="flex items-center justify-center min-h-[90vh]">
        <div className="max-w-3xl text-center px-6">

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-widest text-gray-500 mb-4"
          >
            IEDC SB College
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            We are not here to be something.
            <br />
            <span className="text-gray-400">
              We are here to be the right thing.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg text-gray-400 mb-8"
          >
            A community focused on innovation, execution, and real impact.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="flex justify-center gap-4"
          >
            <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
              Join IEDC
            </button>

            <button className="border border-gray-600 px-6 py-3 rounded-lg font-medium hover:border-white transition">
              Explore
            </button>
          </motion.div>

        </div>
      </section>


      {/* TIMELINE */}
<section className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-20 border-t border-gray-900">
  
  <h2 className="text-3xl font-bold mb-12 text-center">
    6 Month Roadmap
  </h2>

  <div className="border-l border-gray-700 space-y-10">

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

<motion.div 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
  className="pl-6 relative"
>
  <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 top-2"></div>
  <h3 className="text-xl font-semibold">July</h3>
  <p className="text-gray-400">
    Internal workshops, idea validation, early innovation sessions.
  </p>
</motion.div>

<motion.div 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  viewport={{ once: true }}
  className="pl-6 relative"
>
  <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 top-2"></div>
  <h3 className="text-xl font-semibold">August</h3>
  <p className="text-gray-400">
    Guest sessions, CEO talks, real-world exposure.
  </p>
</motion.div>

<motion.div 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  viewport={{ once: true }}
  className="pl-6 relative"
>
  <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 top-2"></div>
  <h3 className="text-xl font-semibold">September</h3>
  <p className="text-gray-400">
    Hackathons, ideathons, building real products.
  </p>
</motion.div>

<motion.div 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.5 }}
  viewport={{ once: true }}
  className="pl-6 relative"
>
  <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 top-2"></div>
  <h3 className="text-xl font-semibold">October</h3>
  <p className="text-gray-400">
    Demo days, showcasing projects, connecting with industry.
  </p>
</motion.div>

  </div>

</section>

{/* LEADERSHIP TEAM */}
<section id="team"className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-20 border-t border-gray-900">

  <h2 className="text-3xl font-bold text-center mb-4">
    Leadership Team
  </h2>

  <p className="text-gray-400 text-center mb-12">
    12 core leads driving innovation, execution, and culture.
  </p>

  <div className="grid md:grid-cols-3 gap-8">

    {/* CARD */}
    <motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="border border-gray-800 p-6 rounded-xl 
             hover:border-white hover:-translate-y-2 
             hover:shadow-lg hover:shadow-white/10 
             transition-all duration-300"
>
      <h3 className="text-xl font-semibold">Innovation Lead</h3>
      <p className="text-gray-400 mt-2">Drives ideation and hackathons</p>
    </motion.div>

    <motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="border border-gray-800 p-6 rounded-xl 
             hover:border-white hover:-translate-y-2 
             hover:shadow-lg hover:shadow-white/10 
             transition-all duration-300"
>
      <h3 className="text-xl font-semibold">Media Lead</h3>
      <p className="text-gray-400 mt-2">Handles interviews & content</p>
    </motion.div>

    <motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="border border-gray-800 p-6 rounded-xl 
             hover:border-white hover:-translate-y-2 
             hover:shadow-lg hover:shadow-white/10 
             transition-all duration-300"
>
      <h3 className="text-xl font-semibold">Marketing Lead</h3>
      <p className="text-gray-400 mt-2">Outreach & sponsorships</p>
    </motion.div>

  </div>
</section>

{/* STORIES AND MEDIA */}
<section id="media" className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-20 border-t border-gray-900">
  <h2 className="text-3xl font-bold text-center mb-4">
    Stories & Media
  </h2>

  <p className="text-gray-400 text-center mb-12">
    Conversations, ideas, and moments that define our culture.
  </p>

  <div className="grid md:grid-cols-2 gap-8">

    {/* VIDEO CARD */}
    <div className="border border-gray-800 rounded-xl p-6 hover:border-white transition">
      <h3 className="text-xl font-semibold mb-2">IEDC Intro</h3>
      <p className="text-gray-400 text-sm">
        A short vision video about our mission and roadmap.
      </p>
    </div>

    {/* INTERVIEW CARD */}
    <div className="border border-gray-800 rounded-xl p-6 hover:border-white transition">
      <h3 className="text-xl font-semibold mb-2">Lead Insights</h3>
      <p className="text-gray-400 text-sm">
        Conversations with core team members on innovation.
      </p>
    </div>

  </div>
</section>

<section className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-20 border-t border-gray-900">
  <h2 className="text-3xl font-bold text-center mb-4">
    Partners & Sponsors
  </h2>

  <p className="text-gray-400 text-center mb-12">
    Collaborating with industry leaders to build impactful innovation.
  </p>

  <div className="grid md:grid-cols-3 gap-8 text-center">

    <div className="border border-gray-800 p-8 rounded-xl hover:border-white transition">
      <p className="text-lg font-semibold">Company One</p>
    </div>

    <div className="border border-gray-800 p-8 rounded-xl hover:border-white transition">
      <p className="text-lg font-semibold">Company Two</p>
    </div>

    <div className="border border-gray-800 p-8 rounded-xl hover:border-white transition">
      <p className="text-lg font-semibold">Company Three</p>
    </div>

  </div>
</section>

<section className="text-center py-20 md:py-32 border-t border-gray-900">

  <h2 className="text-4xl font-bold mb-6">
    Ready to build something that matters?
  </h2>

  <p className="text-gray-400 mb-8">
    Join IEDC and be part of a culture driven by innovation and execution.
  </p>

  <button className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-200 transition">
    Join the Movement
  </button>

</section>

</div>
      
    </main>
  );
}