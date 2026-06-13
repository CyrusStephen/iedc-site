"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import MemberRegisterForm from "@/components/MemberRegisterForm";
import PitchRegisterForm from "@/components/PitchRegisterForm";
import PartnerRegisterForm from "@/components/PartnerRegisterForm";
import VolunteerRegisterForm from "@/components/VolunteerRegisterForm";
import StartupShowcaseForm from "@/components/StartupShowcaseForm";

const involvementOptions = [
  {
    title: "Become a Member",
    description: "Join the IEDC community and be part of events, workshops, startup discussions, and innovation-driven activities.",
    action: "Register Now",
    id: "member",
  },
  {
    title: "Pitch Your Idea",
    description: "Have an idea worth building? Share it with us and get support, feedback, mentoring, and opportunities to take it forward.",
    action: "Share Your Idea",
    id: "pitch",
  },
  {
    title: "Partner With Us",
    description: "Collaborate with IEDC SB College for events, hackathons, workshops, startup programs, and ecosystem-building initiatives.",
    action: "Partner Today",
    id: "partner",
  },
  {
    title: "Volunteer",
    description: "Help us organize, design, document, coordinate, and build the IEDC experience for students across campus.",
    action: "Apply to Volunteer",
    id: "volunteer",
  },
];

export default function GetInvolvedPage() {
  const [activeForm, setActiveForm] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const form = params.get("form");
      if (form && ["member", "pitch", "partner", "volunteer", "showcase"].includes(form)) {
        setActiveForm(form);
      }
    }
  }, []);

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <p
              className="mb-4 text-sm font-medium uppercase tracking-[0.28em]"
              style={{ color: "var(--muted)" }}
            >
              Get Involved
            </p>

            <h1
              className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl"
              style={{ color: "var(--text)" }}
            >
              Build, contribute, and grow with IEDC SB.
            </h1>

            <p
              className="mt-6 max-w-2xl text-lg leading-8"
              style={{ color: "var(--muted)" }}
            >
              Whether you want to become a member, pitch an idea, partner with
              us, or volunteer, this is where your journey with IEDC begins.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {involvementOptions.map((item) => (
                <button
                  key={item.title}
                  onClick={() => setActiveForm(item.id)}
                  className="group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer w-full text-left"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                  }}
                >
                  <h2
                    className="text-xl font-semibold tracking-tight text-left"
                    style={{ color: "var(--text)" }}
                  >
                    {item.title}
                  </h2>

                  <p
                    className="mt-3 text-sm leading-6 text-left"
                    style={{ color: "var(--muted)" }}
                  >
                    {item.description}
                  </p>

                  <div
                    className="mt-6 inline-flex text-sm font-medium"
                    style={{ color: "var(--accent)" }}
                  >
                    <span className="relative">
                      {item.action}
                      <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Showcase wide card */}
            <button
              onClick={() => setActiveForm("showcase")}
              className="group mt-5 rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer w-full text-left"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="space-y-2 max-w-xl">
                  <h2
                    className="text-xl font-semibold tracking-tight"
                    style={{ color: "var(--text)" }}
                  >
                    Wanna showcase your startup/business on our platform?
                  </h2>
                  <p
                    className="text-sm leading-6 text-white/60"
                  >
                    Register your venture details with us to get highlighted in our public Student Startups directory and reach our campus community.
                  </p>
                </div>
                <div
                  className="inline-flex text-sm font-medium shrink-0 self-start md:self-center"
                  style={{ color: "var(--accent)" }}
                >
                  <span className="relative">
                    Submit Business Details
                    <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
                  </span>
                </div>
              </div>
            </button>
          </div>

          {/* Right Video Panel */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-28">
            <div
              className="overflow-hidden rounded-[2rem] border p-3 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                
                {/* Replace this block with your video later */}
                <video
  src="/videos/iedc-message.mp4"
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 h-full w-full object-cover"
/>

<div className="absolute inset-0 bg-black/35" />

                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <p
                    className="mb-3 text-sm font-medium uppercase tracking-[0.25em]"
                    style={{ color: "var(--muted)" }}
                  >
                    Why Join Us
                  </p>

                  <h3
                    className="text-3xl font-semibold tracking-tight"
                    style={{ color: "var(--text)" }}
                  >
                    Your idea deserves a place to begin.
                  </h3>

                  <p
                    className="mt-4 text-sm leading-6"
                    style={{ color: "var(--muted)" }}
                  >
                    A message from past IEDC leaders.
                  </p>
                </div>

                <div className="absolute right-5 top-5 rounded-full border px-4 py-2 text-xs font-medium backdrop-blur-md"
                  style={{
                    color: "var(--text)",
                    borderColor: "var(--border)",
                    background: "rgba(255,255,255,0.06)",
                  }}
                >
                  IEDC SB
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeForm === "member" && (
          <MemberRegisterForm onClose={() => setActiveForm(null)} />
        )}
        {activeForm === "pitch" && (
          <PitchRegisterForm onClose={() => setActiveForm(null)} />
        )}
        {activeForm === "partner" && (
          <PartnerRegisterForm onClose={() => setActiveForm(null)} />
        )}
        {activeForm === "volunteer" && (
          <VolunteerRegisterForm onClose={() => setActiveForm(null)} />
        )}
        {activeForm === "showcase" && (
          <StartupShowcaseForm onClose={() => setActiveForm(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}