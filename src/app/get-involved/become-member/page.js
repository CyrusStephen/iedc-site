"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BecomeMemberPage() {
  return (
    <main className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <section className="mx-auto max-w-5xl px-6 pt-24 md:px-8 md:pt-32">
          <Link href="/get-involved" className="group inline-block text-sm hover:-translate-y-[2px] transition-all">
            <span className="relative">
              ← Back to Get Involved
              <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-[var(--accent)] group-hover:w-full transition-all" />
            </span>
          </Link>
        </section>

        <div className="mt-10 relative h-[300px] md:h-[420px] w-full">
          <img src="/images/get-involved/member.jpeg" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-end px-6 pb-6 md:px-12 md:pb-10">
            <h1 className="text-3xl md:text-5xl text-white font-semibold">Become a Member</h1>
          </div>
        </div>

        <section className="mx-auto max-w-5xl px-6 pt-16 pb-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr]">
            <div>
              <h1 className="text-4xl md:text-6xl font-semibold">Start your journey with IEDC SB.</h1>
              <p className="mt-6 text-lg text-[var(--muted)]">
                Join a community of students focused on innovation, execution, and real impact.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  "Access to workshops and events",
                  "Work with student founders",
                  "Explore entrepreneurship",
                  "Build real skills",
                ].map((item) => (
                  <div key={item} className="flex gap-4">
                    <span style={{ color: "var(--accent)" }}>✦</span>
                    <p style={{ color: "var(--muted)" }}>{item}</p>
                  </div>
                ))}
              </div>

              <a href="#" className="mt-12 inline-flex px-6 py-3 bg-white text-[var(--accent)] rounded-full">
                Continue to form
              </a>
            </div>

            <aside className="rounded-3xl border p-6">
              <h2 className="text-2xl font-semibold">You don’t need a startup idea.</h2>
              <p className="mt-4 text-sm text-[var(--muted)]">
                You only need curiosity and consistency.
              </p>
            </aside>
          </div>
        </section>
      </motion.div>
    </main>
  );
}