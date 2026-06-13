
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const mentors = [
  {
    name: "Nodal Officer 1",
    role: "Nodal Officer",
    description: "Guidance and institutional support for IEDC SB.",
    image: "/images/team/person.jpg",
  },
  {
    name: "Nodal Officer 2",
    role: "Nodal Officer",
    description:
      "Supporting student innovation and entrepreneurship initiatives.",
    image: "/images/team/person.jpg",
  },
];

const studentLeads = [
  {
    leadKey: "vivin",
    name: "Vivin Thomas",
    role: "Student Lead I",
    classDept: "Class • Department",
    description: "Leading the team, strategy, and student innovation culture.",
    image: "/images/team/vivin.jpg",
    highlight: true,
  },
  {
    leadKey: "cyrus",
    name: "Cyrus Stephen",
    role: "Student Lead II",
    classDept: "Class • Department",
    description: "Leading the vision, structure, and execution of IEDC SB.",
    image: "/images/team/cyrus.jpg",
    highlight: true,
  },
];

const crew = [
  {
    leadKey: "adithya",
    name: "Adithya",
    role: "Quality & Operations Lead",
    classDept: "Class • Department",
    description: "Leading quality, execution standards, and operations.",
    image: "/images/team/adithya.jpg",
  },
  {
    leadKey: "zacharias",
    name: "Zacharias",
    role: "Finance Lead",
    classDept: "Class • Department",
    description: "Managing finance planning, budgeting, and accountability.",
    image: "/images/team/zacharias.jpg",
  },
  {
    leadKey: "thomas",
    name: "Thomas",
    role: "Creative & Innovation Lead",
    classDept: "Class • Department",
    description: "Driving creative thinking, ideas, and innovation culture.",
    image: "/images/team/thomas.jpg",
  },
  {
    leadKey: "liyo",
    name: "Liyo Sabu",
    role: "Technology Lead",
    classDept: "Class • Department",
    description: "Leading technology, digital systems, and technical execution.",
    image: "/images/team/liyo.jpg",
  },
  {
    leadKey: "alen",
    name: "Alen Matthew",
    role: "Branding & Marketing Lead",
    classDept: "Class • Department",
    description: "Building brand identity, campaigns, and communication.",
    image: "/images/team/alen.jpg",
  },
  {
    leadKey: "krishnethu",
    name: "Krishnethu",
    role: "Community Lead",
    classDept: "Class • Department",
    description: "Growing the student community and campus engagement.",
    image: "/images/team/krishnethu.jpg",
  },
  {
    leadKey: "jeeva",
    name: "Jeeva Matthew",
    role: "Women Innovation Lead",
    classDept: "Class • Department",
    description: "Encouraging women-led innovation and participation.",
    image: "/images/team/jeeva.jpg",
  },
  {
    leadKey: "suhail",
    name: "Suhail Muhammed",
    role: "IPR & Research Lead",
    classDept: "Class • Department",
    description: "Supporting research, intellectual property, and idea protection.",
    image: "/images/team/suhail.jpg",
  },
  {
    leadKey: "elvin",
    name: "Elvin",
    role: "Documentation Lead I",
    classDept: "Class • Department",
    description: "Managing records, reports, documentation, and archives.",
    image: "/images/team/elvin.jpg",
  },
  {
    leadKey: "lakshmi",
    name: "Lakshmi",
    role: "Documentation Lead II",
    classDept: "Class • Department",
    description: "Supporting documentation, communication, and reporting.",
    image: "/images/team/lakshmi.jpg",
  },
];

const coLeads = [
  {
    id: "vivin-co-lead-a",
    leadKey: "vivin",
    name: "Co-Lead",
    classDept: "Class • Department",
    image: "/images/team/person.jpg",
  },
  {
    id: "vivin-co-lead-b",
    leadKey: "vivin",
    name: "Co-Lead",
    role: "Co-Lead",
    classDept: "Class • Department",
    image: "/images/team/person.jpg",
  },
  {
    id: "cyrus-co-lead-c",
    leadKey: "cyrus",
    name: "Co-Lead C",
    classDept: "Class • Department",
    image: "/images/team/person.jpg",
  },
  {
    id: "cyrus-co-lead-d",
    leadKey: "cyrus",
    name: "Co-Lead",
    classDept: "Class • Department",
    image: "/images/team/person.jpg",
  },
  {
    id: "adithya-co-lead-e",
    leadKey: "adithya",
    name: "Co-Lead",
    classDept: "Class • Department",
    image: "/images/team/person.jpg",
  },
  {
    id: "adithya-co-lead-f",
    leadKey: "adithya",
    name: "Co-Lead",
    classDept: "Class • Department",
    image: "/images/team/person.jpg",
  },
  {
    id: "zacharias-co-lead-g",
    leadKey: "zacharias",
    name: "Co-Lead",
    classDept: "Class • Department",
    image: "/images/team/person.jpg",
  },
  {
    id: "zacharias-co-lead-h",
    leadKey: "zacharias",
    name: "Co-Lead",
    role: "Finance Co-Lead",
    classDept: "Class • Department",
    image: "/images/team/person.jpg",
  },
  {
    id: "thomas-co-lead-i",
    leadKey: "thomas",
    name: "Co-Lead",
    classDept: "Class • Department",
    image: "/images/team/person.jpg",
  },
  {
    id: "thomas-co-lead-j",
    leadKey: "thomas",
    name: "Co-Lead",
    role: "Creative & Innovation Co-Lead",
    classDept: "Class • Department",
    image: "/images/team/person.jpg",
  },
  {
    id: "liyo-co-lead-k",
    leadKey: "liyo",
    name: "Co-Lead K",
    role: "Technology Co-Lead",
    classDept: "Class • Department",
    image: "/images/team/person.jpg",
  },
  {
    id: "liyo-co-lead-l",
    leadKey: "liyo",
    name: "Co-Lead L",
    role: "Technology Co-Lead",
    classDept: "Class • Department",
    image: "/images/team/person.jpg",
  },
  {
    id: "alen-co-lead-m",
    leadKey: "alen",
    name: "Co-Lead",
    role: "Branding & Marketing Co-Lead",
    classDept: "Class • Department",
    image: "/images/team/person.jpg",
  },
  {
    id: "alen-co-lead-n",
    leadKey: "alen",
    name: "Co-Lead",
    role: "Branding & Marketing Co-Lead",
    classDept: "Class • Department",
    image: "/images/team/person.jpg",
  },
  {
    id: "krishnethu-co-lead-o",
    leadKey: "krishnethu",
    name: "Co-Lead",
    role: "Community Co-Lead",
    classDept: "Class • Department",
    image: "/images/team/person.jpg",
  },
  {
    id: "krishnethu-co-lead-p",
    leadKey: "krishnethu",
    name: "Co-Lead",
    role: "Community Co-Lead",
    classDept: "Class • Department",
    image: "/images/team/person.jpg",
  },
  {
    id: "jeeva-co-lead-q",
    leadKey: "jeeva",
    name: "Co-Lead",
    role: "Women Innovation Co-Lead",
    classDept: "Class • Department",
    image: "/images/team/person.jpg",
  },
  {
    id: "jeeva-co-lead-r",
    leadKey: "jeeva",
    name: "Co-Lead",
    role: "Women Innovation Co-Lead",
    classDept: "Class • Department",
    image: "/images/team/person.jpg",
  },
  {
    id: "suhail-co-lead-s",
    leadKey: "suhail",
    name: "Co-Lead",
    role: "IPR & Research Co-Lead",
    classDept: "Class • Department",
    image: "/images/team/person.jpg",
  },
  {
    id: "suhail-co-lead-t",
    leadKey: "suhail",
    name: "Co-Lead",
    role: "IPR & Research Co-Lead",
    classDept: "Class • Department",
    image: "/images/team/person.jpg",
  },
  {
    id: "elvin-co-lead-u",
    leadKey: "elvin",
    name: "Co-Lead",
    role: "Documentation Co-Lead",
    classDept: "Class • Department",
    image: "/images/team/person.jpg",
  },
  {
    id: "elvin-co-lead-v",
    leadKey: "elvin",
    name: "Co-Lead",
    role: "Documentation Co-Lead",
    classDept: "Class • Department",
    image: "/images/team/person.jpg",
  },
  {
    id: "lakshmi-co-lead-w",
    leadKey: "lakshmi",
    name: "Co-Lead",
    role: "Documentation Co-Lead",
    classDept: "Class • Department",
    image: "/images/team/person.jpg",
  },
  {
    id: "lakshmi-co-lead-x",
    leadKey: "lakshmi",
    name: "Co-Lead",
    role: "Documentation Co-Lead",
    classDept: "Class • Department",
    image: "/images/team/person.jpg",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <p
          className="mb-4 text-sm font-medium uppercase tracking-[0.28em]"
          style={{ color: "var(--muted)" }}
        >
          About IEDC SB
        </p>

        <h1
          className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl"
          style={{ color: "var(--text)" }}
        >
          The people building the innovation culture at Saint Berchmans College.
        </h1>

        <p
          className="mt-6 max-w-3xl text-lg leading-8"
          style={{ color: "var(--muted)" }}
        >
          IEDC SB is shaped by mentors, student leads, crew leads, and co-leads
          working together to create opportunities, events, collaborations, and
          real student-led impact.
        </p>
      </section>

      <TeamSection
        eyebrow="Mentors"
        title="Guidance & Institutional Support"
        description="The faculty mentors supporting IEDC SB with direction, guidance, and institutional continuity."
        people={mentors}
        variant="mentors"
      />

      <TeamSection
        eyebrow="Student Leadership"
        title="The Team Building IEDC SB"
        description="Student leads, crew leads, and co-leads working together to build events, stories, collaborations, and real student-led impact."
        people={[...studentLeads, ...crew]}
        variant="crew"
        coLeads={coLeads}
        stats={[
          { label: "Student Leads", value: "12" },
          { label: "Co-Leads", value: "24" },
          { label: "Team Members", value: "36" },
        ]}
      />
    </main>
  );
}

function TeamSection({
  eyebrow,
  title,
  description,
  people,
  variant,
  stats,
  coLeads = [],
}) {
  const [openLeadKey, setOpenLeadKey] = useState(null);
  const isMentors = variant === "mentors";

  const toggleCoLeads = (leadKey) => {
    setOpenLeadKey((current) => (current === leadKey ? null : leadKey));
  };

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 md:px-8">
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p
            className="mb-3 text-sm font-medium uppercase tracking-[0.25em]"
            style={{ color: "var(--accent)" }}
          >
            {eyebrow}
          </p>

          <h2
            className="text-3xl font-semibold tracking-tight md:text-5xl"
            style={{ color: "var(--text)" }}
          >
            {title}
          </h2>

          <p
            className="mt-4 max-w-2xl text-base leading-7"
            style={{ color: "var(--muted)" }}
          >
            {description}
          </p>
        </div>

        {stats && (
          <div className="grid grid-cols-3 gap-3 md:min-w-[360px]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border px-4 py-3 text-center"
                style={{
                  borderColor: "var(--border)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <p
                  className="text-xl font-semibold"
                  style={{ color: "var(--text)" }}
                >
                  {stat.value}
                </p>

                <p
                  className="mt-1 text-[10px] uppercase tracking-[0.18em]"
                  style={{ color: "var(--muted)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div
  className={
    isMentors
      ? "grid gap-6 md:grid-cols-2"
      : "grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
  }
>
        {people.map((person) => {
          const leadCoLeads = coLeads.filter(
            (coLead) => coLead.leadKey === person.leadKey
          );

          return (
            <TeamCard
              key={`${person.name}-${person.role}`}
              person={person}
              isMentor={isMentors}
              coLeads={leadCoLeads}
              isOpen={openLeadKey === person.leadKey}
              onToggle={() => toggleCoLeads(person.leadKey)}
            />
          );
        })}
      </div>
    </section>
  );
}

function TeamCard({ person, isMentor, coLeads, isOpen, onToggle }) {
  const hasCoLeads = coLeads.length > 0;

  return (
  <article className="group">
    <div className="relative min-h-[455px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="lead"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className={
                isMentor
                  ? "relative h-52 overflow-hidden bg-white/[0.04]"
                  : "relative h-48 overflow-hidden bg-black/10"
              }
            >
              <img
                src={person.image}
                alt={person.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div
              className={
                isMentor
                  ? "flex h-[230px] flex-col p-6"
                  : "flex min-h-[230px] flex-col p-5 sm:p-6"
              }
            >
              <p
                className="min-h-[40px] text-xs font-medium uppercase tracking-[0.25em]"
                style={{
                  color: person.highlight
                    ? "var(--accent)"
                    : "var(--muted)",
                }}
              >
                {person.role}
              </p>

              <h3
                className="mt-3 text-xl font-semibold tracking-tight"
                style={{ color: "var(--text)" }}
              >
                {person.name}
              </h3>

              {person.classDept && (
                <p
                  className="mt-2 text-sm"
                  style={{ color: "var(--accent)" }}
                >
                  {person.classDept}
                </p>
              )}

              <p
                className="mt-4 h-[60px] text-sm leading-6"
                style={{ color: "var(--muted)" }}
              >
                {person.description}
              </p>

              {!isMentor && hasCoLeads && (
                <button
                  type="button"
                  onClick={onToggle}
                  className="mt-auto inline-flex items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06]"
                >
                  <span>View Co-Leads</span>
                  <span>+</span>
                </button>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="coleads"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="p-6"
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
                  Co-Leads
                </p>

                <p
  className="mt-2 text-sm font-medium uppercase tracking-[0.18em]"
  style={{ color: "var(--text)" }}
>
  {person.role}
</p>
              </div>

              <button
                type="button"
                onClick={onToggle}
                className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:border-white/30 hover:text-white"
              >
                Back
              </button>
            </div>

            <div className="grid gap-4">
              {coLeads.map((coLead) => (
                <CoLeadMiniCard key={coLead.id} coLead={coLead} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </article>
);
}

function CoLeadMiniCard({ coLead }) {
  return (
    <div
      className="grid min-h-[135px] grid-cols-[95px_1fr] items-center gap-5 rounded-2xl border p-5"
      style={{
        borderColor: "var(--border)",
        background: "rgba(255,255,255,0.03)",
      }}
    >
      <div className="h-[105px] w-[105px] overflow-hidden rounded-2xl bg-white/[0.04]">
        <img
          src={coLead.image}
          alt={coLead.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="min-w-0">
        <p
  className="line-clamp-2 text-[11px] font-semibold uppercase tracking-[0.15em] leading-4"
  style={{ color: "var(--muted)" }}
>
  {coLead.role}
</p>

        <h4
          className="mt-2 text-lg font-semibold leading-tight"
          style={{ color: "var(--text)" }}
        >
          {coLead.name}
        </h4>

        <p className="mt-2 text-sm" style={{ color: "var(--accent)" }}>
          {coLead.classDept}
        </p>
      </div>
    </div>
  );
}