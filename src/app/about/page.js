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

const crew = [
  {
    name: "Vivin Thomas",
    role: "Student Lead I",
    classDept: "Class • Department",
    description: "Leading the team, strategy, and student innovation culture.",
    image: "/images/team/vivin.jpg",
    highlight: true,
    coLeads: [
      {
        id: "vivin-co-lead-a",
        name: "Co-Lead A",
        role: "Co-Lead",
        classDept: "Class • Department",
        description: "Supporting student leadership and execution.",
        image: "/images/team/person.jpg",
      },
      {
        id: "vivin-co-lead-b",
        name: "Co-Lead B",
        role: "Co-Lead",
        classDept: "Class • Department",
        description: "Supporting student leadership and execution.",
        image: "/images/team/person.jpg",
      },
    ],
  },
  {
    name: "Cyrus Stephen",
    role: "Student Lead II",
    classDept: "Class • Department",
    description: "Leading the vision, structure, and execution of IEDC SB.",
    image: "/images/team/cyrus.jpg",
    highlight: true,
    coLeads: [
      {
        id: "cyrus-co-lead-c",
        name: "Co-Lead C",
        role: "Co-Lead",
        classDept: "Class • Department",
        description: "Supporting team coordination and execution.",
        image: "/images/team/person.jpg",
      },
      {
        id: "cyrus-co-lead-d",
        name: "Co-Lead D",
        role: "Co-Lead",
        classDept: "Class • Department",
        description: "Supporting team coordination and execution.",
        image: "/images/team/person.jpg",
      },
    ],
  },
  {
    name: "Adithya",
    role: "Quality & Operations Lead",
    classDept: "Class • Department",
    description: "Leading quality, execution standards, and operations.",
    image: "/images/team/adithya.jpg",
    coLeads: [
      {
        id: "adithya-co-lead-e",
        name: "Co-Lead E",
        role: "Quality & Operations Co-Lead",
        classDept: "Class • Department",
        description: "Supporting operations and execution quality.",
        image: "/images/team/person.jpg",
      },
      {
        id: "adithya-co-lead-f",
        name: "Co-Lead F",
        role: "Quality & Operations Co-Lead",
        classDept: "Class • Department",
        description: "Supporting operations and execution quality.",
        image: "/images/team/person.jpg",
      },
    ],
  },
  {
    name: "Zacharias",
    role: "Finance Lead",
    classDept: "Class • Department",
    description: "Managing finance planning, budgeting, and accountability.",
    image: "/images/team/zacharias.jpg",
    coLeads: [
      {
        id: "zacharias-co-lead-g",
        name: "Co-Lead G",
        role: "Finance Co-Lead",
        classDept: "Class • Department",
        description: "Supporting finance tracking and planning.",
        image: "/images/team/person.jpg",
      },
      {
        id: "zacharias-co-lead-h",
        name: "Co-Lead H",
        role: "Finance Co-Lead",
        classDept: "Class • Department",
        description: "Supporting finance tracking and planning.",
        image: "/images/team/person.jpg",
      },
    ],
  },
  {
    name: "Thomas",
    role: "Creative & Innovation Lead",
    classDept: "Class • Department",
    description: "Driving creative thinking, ideas, and innovation culture.",
    image: "/images/team/thomas.jpg",
    coLeads: [
      {
        id: "thomas-co-lead-i",
        name: "Co-Lead I",
        role: "Creative & Innovation Co-Lead",
        classDept: "Class • Department",
        description: "Supporting creative ideas and innovation activities.",
        image: "/images/team/person.jpg",
      },
      {
        id: "thomas-co-lead-j",
        name: "Co-Lead J",
        role: "Creative & Innovation Co-Lead",
        classDept: "Class • Department",
        description: "Supporting creative ideas and innovation activities.",
        image: "/images/team/person.jpg",
      },
    ],
  },
  {
    name: "Liyo Sabu",
    role: "Technology Lead",
    classDept: "Class • Department",
    description: "Leading technology, digital systems, and technical execution.",
    image: "/images/team/liyo.jpg",
    coLeads: [
      {
        id: "liyo-co-lead-k",
        name: "Co-Lead K",
        role: "Technology Co-Lead",
        classDept: "Class • Department",
        description: "Supporting technical systems and digital execution.",
        image: "/images/team/person.jpg",
      },
      {
        id: "liyo-co-lead-l",
        name: "Co-Lead L",
        role: "Technology Co-Lead",
        classDept: "Class • Department",
        description: "Supporting technical systems and digital execution.",
        image: "/images/team/person.jpg",
      },
    ],
  },
  {
    name: "Alen Matthew",
    role: "Branding & Marketing Lead",
    classDept: "Class • Department",
    description: "Building brand identity, campaigns, and communication.",
    image: "/images/team/alen.jpg",
    coLeads: [
      {
        id: "alen-co-lead-m",
        name: "Co-Lead M",
        role: "Branding & Marketing Co-Lead",
        classDept: "Class • Department",
        description: "Supporting campaigns, visuals, and communication.",
        image: "/images/team/person.jpg",
      },
      {
        id: "alen-co-lead-n",
        name: "Co-Lead N",
        role: "Branding & Marketing Co-Lead",
        classDept: "Class • Department",
        description: "Supporting campaigns, visuals, and communication.",
        image: "/images/team/person.jpg",
      },
    ],
  },
  {
    name: "Krishnethu",
    role: "Community Lead",
    classDept: "Class • Department",
    description: "Growing the student community and campus engagement.",
    image: "/images/team/krishnethu.jpg",
    coLeads: [
      {
        id: "krishnethu-co-lead-o",
        name: "Co-Lead O",
        role: "Community Co-Lead",
        classDept: "Class • Department",
        description: "Supporting community engagement and participation.",
        image: "/images/team/person.jpg",
      },
      {
        id: "krishnethu-co-lead-p",
        name: "Co-Lead P",
        role: "Community Co-Lead",
        classDept: "Class • Department",
        description: "Supporting community engagement and participation.",
        image: "/images/team/person.jpg",
      },
    ],
  },
  {
    name: "Jeeva Matthew",
    role: "Women Innovation Lead",
    classDept: "Class • Department",
    description: "Encouraging women-led innovation and participation.",
    image: "/images/team/jeeva.jpg",
    coLeads: [
      {
        id: "jeeva-co-lead-q",
        name: "Co-Lead Q",
        role: "Women Innovation Co-Lead",
        classDept: "Class • Department",
        description: "Supporting women-led innovation initiatives.",
        image: "/images/team/person.jpg",
      },
      {
        id: "jeeva-co-lead-r",
        name: "Co-Lead R",
        role: "Women Innovation Co-Lead",
        classDept: "Class • Department",
        description: "Supporting women-led innovation initiatives.",
        image: "/images/team/person.jpg",
      },
    ],
  },
  {
    name: "Suhail Muhammed",
    role: "IPR & Research Lead",
    classDept: "Class • Department",
    description: "Supporting research, intellectual property, and idea protection.",
    image: "/images/team/suhail.jpg",
    coLeads: [
      {
        id: "suhail-co-lead-s",
        name: "Co-Lead S",
        role: "IPR & Research Co-Lead",
        classDept: "Class • Department",
        description: "Supporting research and IPR-related initiatives.",
        image: "/images/team/person.jpg",
      },
      {
        id: "suhail-co-lead-t",
        name: "Co-Lead T",
        role: "IPR & Research Co-Lead",
        classDept: "Class • Department",
        description: "Supporting research and IPR-related initiatives.",
        image: "/images/team/person.jpg",
      },
    ],
  },
  {
    name: "Elvin",
    role: "Documentation Lead I",
    classDept: "Class • Department",
    description: "Managing records, reports, documentation, and archives.",
    image: "/images/team/elvin.jpg",
    coLeads: [
      {
        id: "elvin-co-lead-u",
        name: "Co-Lead U",
        role: "Documentation Co-Lead",
        classDept: "Class • Department",
        description: "Supporting documentation and reporting.",
        image: "/images/team/person.jpg",
      },
      {
        id: "elvin-co-lead-v",
        name: "Co-Lead V",
        role: "Documentation Co-Lead",
        classDept: "Class • Department",
        description: "Supporting documentation and reporting.",
        image: "/images/team/person.jpg",
      },
    ],
  },
  {
    name: "Lakshmi",
    role: "Documentation Lead II",
    classDept: "Class • Department",
    description: "Supporting documentation, communication, and reporting.",
    image: "/images/team/lakshmi.jpg",
    coLeads: [
      {
        id: "lakshmi-co-lead-w",
        name: "Co-Lead W",
        role: "Documentation Co-Lead",
        classDept: "Class • Department",
        description: "Supporting documentation and reporting.",
        image: "/images/team/person.jpg",
      },
      {
        id: "lakshmi-co-lead-x",
        name: "Co-Lead X",
        role: "Documentation Co-Lead",
        classDept: "Class • Department",
        description: "Supporting documentation and reporting.",
        image: "/images/team/person.jpg",
      },
    ],
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
          IEDC SB is shaped by mentors, crew, and builders working together to
          create opportunities, events, collaborations, and real student-led
          impact.
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
        eyebrow="Crew"
        title="Leads & Builders"
        description="Each lead drives a core vertical with two co-leads supporting execution, coordination, and growth."
        people={crew}
        variant="crew"
      />
    </main>
  );
}

function TeamSection({ eyebrow, title, description, people, variant }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 md:px-8">
      <div className="mb-10">
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

      <div
        className={
          variant === "mentors"
            ? "grid gap-6 md:grid-cols-2"
            : "grid gap-6 lg:grid-cols-2"
        }
      >
        {people.map((person) => (
          <TeamCard key={`${person.name}-${person.role}`} person={person} />
        ))}
      </div>
    </section>
  );
}

function TeamCard({ person }) {
  return (
    <article
      className="group overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "var(--surface)",
        borderColor: person.highlight ? "var(--accent)" : "var(--border)",
      }}
    >
      <div className="grid md:grid-cols-[0.85fr_1.15fr]">
        <div className="aspect-[4/5] md:aspect-auto">
          <img
            src={person.image}
            alt={person.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className="p-5 md:p-6">
          <p
            className="text-xs font-medium uppercase tracking-[0.22em]"
            style={{
              color: person.highlight ? "var(--accent)" : "var(--muted)",
            }}
          >
            {person.role}
          </p>

          <h3
            className="mt-3 text-2xl font-semibold tracking-tight"
            style={{ color: "var(--text)" }}
          >
            {person.name}
          </h3>

          {person.classDept && (
            <p className="mt-2 text-sm" style={{ color: "var(--accent)" }}>
              {person.classDept}
            </p>
          )}

          <p className="mt-4 text-sm leading-6" style={{ color: "var(--muted)" }}>
            {person.description}
          </p>

          {person.coLeads && (
            <div
              className="mt-6 border-t pt-5"
              style={{ borderColor: "var(--border)" }}
            >
              <p
                className="text-[11px] font-medium uppercase tracking-[0.22em]"
                style={{ color: "var(--muted)" }}
              >
                Builders
              </p>

              <div className="mt-4 grid gap-4">
                {person.coLeads.map((coLead) => (
                  <CoLeadCard key={coLead.id} coLead={coLead} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function CoLeadCard({ coLead }) {
  return (
    <div
      className="grid grid-cols-[56px_1fr] gap-4 rounded-2xl border p-3"
      style={{
        borderColor: "var(--border)",
        background: "rgba(255,255,255,0.03)",
      }}
    >
      <div className="h-14 w-14 overflow-hidden rounded-xl">
        <img
          src={coLead.image}
          alt={coLead.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div>
        <p
          className="text-xs font-medium uppercase tracking-[0.18em]"
          style={{ color: "var(--muted)" }}
        >
          {coLead.role}
        </p>

        <h4 className="mt-1 text-sm font-semibold" style={{ color: "var(--text)" }}>
          {coLead.name}
        </h4>

        <p className="mt-1 text-xs" style={{ color: "var(--accent)" }}>
          {coLead.classDept}
        </p>

        <p className="mt-2 text-xs leading-5" style={{ color: "var(--muted)" }}>
          {coLead.description}
        </p>
      </div>
    </div>
  );
}