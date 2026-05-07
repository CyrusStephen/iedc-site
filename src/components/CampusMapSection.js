"use client";

import Link from "next/link";

const locations = [
  {
    title: "IEDC Office",
    desc: "The innovation and startup workspace of IEDC Saint Berchmans College.",
  },
  {
    title: "Library",
    desc: "A central academic and collaborative study space on campus.",
  },
  {
    title: "Innovation Space",
    desc: "Workshops, meetings, ideation sessions, and student collaborations.",
  },
];

export default function CampusMapSection() {
  return (
    <section className="relative px-8 py-14 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/45">
            Find Us On Campus
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Innovation exists physically too.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/60">
            Discover where IEDC Saint Berchmans College builds startups,
            conducts sessions, collaborates, and creates student impact.
          </p>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38003.79692175822!2d76.53682739719233!3d9.450457635235086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06273d14101e71%3A0xcc1ee7d827c29090!2sIEDC%20SBC!5e1!3m2!1sen!2sin!4v1778135315060!5m2!1sen!2sin"
            width="100%"
            height="520"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="contrast-125"
          />
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {locations.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                Campus Spot
              </p>

              <h3 className="mt-3 text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/60">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-white/70 transition-all duration-300 hover:text-white"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.06]">
              ↗
            </div>

            <span className="relative">
              Open in Google Maps
              <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}