"use client";
import { useEffect, useState } from "react";

const socials = [
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "IEDC SB College",
    description:
      "Follow us for updates, opportunities, announcements, and professional community activity.",
    href: "https://www.linkedin.com/company/iedc-sbc/",
  },
  {
    id: "instagram",
    label: "Instagram",
    value: "IEDC SB College",
    description:
      "Explore event moments, student stories, reels, posters, and campus innovation highlights.",
    href: "#",
  },
  {
    id: "facebook",
    label: "Facebook",
    value: "IEDC SB College",
    description:
      "Stay connected with community posts, updates, and public-facing announcements.",
    href: "#",
  },
  {
    id: "email",
    label: "Email",
    value: "sbcciedc@gmail.com",
    description:
      "For collaborations, memberships, partnerships, and for general enquiries reach out to us via email.",
    href: "mailto:sbcciedc@gmail.com",
  },
];

export default function ContactPage() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
  let timeoutId;

  const highlightHashSection = () => {
    const hash = window.location.hash.replace("#", "");

    if (!hash) return;

    requestAnimationFrame(() => {
      setActiveSection(hash);

      timeoutId = setTimeout(() => {
        setActiveSection(null);
      }, 1500);
    });
  };

  highlightHashSection();

  window.addEventListener("hashchange", highlightHashSection);

  return () => {
    window.removeEventListener("hashchange", highlightHashSection);
    clearTimeout(timeoutId);
  };
}, []);

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32">
        <div>
            <p
              className="mb-4 text-sm font-medium uppercase tracking-[0.28em]"
              style={{ color: "var(--muted)" }}
            >
              Contact Us
            </p>

            <h1
              className="text-4xl font-semibold tracking-tight md:text-6xl"
              style={{ color: "var(--text)" }}
            >
              Let’s build something meaningful.
            </h1>
            <p
              className="mt-6 max-w-xl text-lg leading-8"
              style={{ color: "var(--muted)" }}
            >
              Reach out to IEDC Saint Berchmans College for memberships,
              collaborations, events, partnerships, or general enquiries.
            </p>

               <div className="mt-10">
  <p className="text-base leading-8 text-white/60">
    Read our{" "}
    <a href="/faqs" className="group relative inline-block text-white">
      frequently asked questions

      <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
    </a>{" "}
    from students to know if your question has already been answered.
  </p>
</div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {socials.map((item) => (
                <ContactItem
                  key={item.id}
                  {...item}
                  isActive={activeSection === item.id}
                />
              ))}
            </div>
          </div>
      </section>
    </main>
  );
}

function ContactItem({ id, label, value, description, href, isActive }) {
  const content = (
    <div
      id={id}
      className="group scroll-mt-32 rounded-2xl border px-5 py-4 transition-all duration-300 hover:-translate-y-1"
      style={{
        background: isActive
          ? "rgba(245, 158, 11, 0.08)"
          : "var(--surface)",
        borderColor: isActive ? "var(--accent)" : "var(--border)",
      }}
    >
<p
  className="text-[10px] font-medium uppercase tracking-[0.32em]"
  style={{ color: "var(--muted)" }}
>
  {label}
</p>

<p
  className="mt-1.5 text-lg font-medium"
  style={{ color: "var(--text)" }}
>
  <span className="relative">
    {value}
    {href && (
      <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
    )}
  </span>
</p>

<p
  className="mt-2 text-sm leading-[1.6]"
  style={{ color: "var(--muted)" }}
>
  {description}
</p>
    </div>
  );

if (href && href !== "#") {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="block"
    >
      {content}
    </a>
  );
}

  return content;
}