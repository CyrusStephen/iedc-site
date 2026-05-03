"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function VolunteerPage() {
  return (
    <main className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <section className="mx-auto max-w-5xl px-6 pt-24 md:px-8 md:pt-32">
          <Link
            href="/get-involved"
            className="group inline-block text-sm transform transition-all duration-300 hover:-translate-y-[2px]"
            style={{ color: "var(--muted)" }}
          >
            <span className="relative inline-block">
              ← Back to Get Involved
              <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
            </span>
          </Link>
        </section>

        <div className="mt-10 relative h-[300px] w-full md:h-[420px]">
          <img
            src="/images/get-involved/volunteer.jpg"
            alt="IEDC volunteers"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-end px-6 pb-6 md:px-12 md:pb-10">
            <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Volunteer
            </h1>
          </div>
        </div>

        <section className="mx-auto max-w-5xl px-6 pb-32 pt-16 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-start">
            <div>
              <p
                className="mb-4 text-sm font-medium uppercase tracking-[0.28em]"
                style={{ color: "var(--muted)" }}
              >
                Volunteer
              </p>

              <h1
                className="text-4xl font-semibold tracking-tight md:text-6xl"
                style={{ color: "var(--text)" }}
              >
                Help shape the IEDC experience.
              </h1>

              <p
                className="mt-6 text-lg leading-8"
                style={{ color: "var(--muted)" }}
              >
                Volunteer with IEDC and contribute to events, design,
                coordination, documentation, media, outreach, and the overall
                student innovation experience.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  "Support events and campus activities",
                  "Help with media, design, content, and documentation",
                  "Work closely with the IEDC team",
                  "Build confidence, responsibility, and execution skills",
                ].map((point) => (
                  <div key={point} className="flex gap-4">
                    <span style={{ color: "var(--accent)" }}>✦</span>
                    <p style={{ color: "var(--muted)" }}>{point}</p>
                  </div>
                ))}
              </div>

              <a
                href="https://forms.gle/YOUR_FORM_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-12 inline-flex items-center justify-center rounded-full px-6 py-3 text-[15px] font-semibold transition-all duration-300 hover:-translate-y-1"
                style={{ background: "white", color: "var(--accent)" }}
              >
                <span className="relative">
                  Continue to form
                  <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            </div>

            <aside
              className="rounded-3xl border p-6"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <p
                className="text-sm font-medium uppercase tracking-[0.25em]"
                style={{ color: "var(--muted)" }}
              >
                Why volunteer
              </p>

              <h2
                className="mt-5 text-2xl font-semibold tracking-tight"
                style={{ color: "var(--text)" }}
              >
                Execution is learned by doing.
              </h2>

              <p
                className="mt-4 text-sm leading-6"
                style={{ color: "var(--muted)" }}
              >
                Volunteering is one of the best ways to learn how teams work,
                how events are built, and how ideas become experiences.
              </p>
            </aside>
          </div>
        </section>
      </motion.div>
    </main>
  );
}