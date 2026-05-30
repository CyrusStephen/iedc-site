import Image from "next/image";
import EventStoryPage from "@/components/EventDetailPage";

const speakers = [
  {
    name: "Savio Thomas",
    role: "Founder, Flyfox Group",
    image: "/images/iedc_events/ideaxchange/savio-thomas.jpeg",
    description:
      "Shared his entrepreneurial journey, student leadership experience, and lessons from building Flyfox Group.",
  },
  {
    name: "Jelvin Soji",
    role: "Owner, Eduriese Education Consultancy & Spice Bay Cardamom",
    image: "/images/iedc_events/ideaxchange/jelvin-soji.jpeg",
    description:
      "Spoke about student entrepreneurship, managing ventures, and identifying opportunities while still in campus life.",
  },
];

export default function IdeaXchangePage() {
  return (
    <EventStoryPage
      eventContent={
        <>
            <section className="mt-12">
  <p className="text-xs uppercase tracking-[0.35em] text-white/40">
    Gallery
  </p>

  <h2 className="mt-4 text-4xl font-semibold">
    Moments from the event.
  </h2>

  <div className="mt-12 overflow-hidden">
    <div className="gallery-track gap-5">
      {[
        "/images/iedc_events/ideaxchange/ideaxchange-1.jpg",
        "/images/iedc_events/ideaxchange/ideaxchange-2.jpg",
        "/images/iedc_events/ideaxchange/ideaxchange-3.jpg",
        "/images/iedc_events/ideaxchange/ideaxchange-4.jpg",
        "/images/iedc_events/ideaxchange/ideaxchange-5.jpg",
      ].map((image, index) => (
        <div
          key={index}
          className="relative h-[260px] min-w-[360px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
        >
          <Image
            fill
            src={image}
            alt="IdeaXchange gallery"
            className="object-cover transition duration-700 hover:scale-105"
          />
        </div>
      ))}
    </div>
  </div>
</section>
<section className="mt-16">
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/40">
              The Story
            </p>

            <h2 className="max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">
              Creating conversations around campus entrepreneurship.
            </h2>

            <div className="mt-10 space-y-10 text-lg leading-9 text-white/65">
              <p>
                IdeaXchange was introduced as a monthly IEDC initiative to bring
                campus business owners, student entrepreneurs, and innovators
                into open conversation with interested students.
              </p>

              <p>
                The purpose of the session is simple: to create a space where
                students can hear real experiences from people within their own
                campus, ask questions, build connections, and understand the
                opportunities that already exist around them.
                Unlike large-scale events, IdeaXchange is designed to be
                intimate and discussion-driven. Each month, IEDC invites a
                student entrepreneur, business owner, or innovator to the IEDC
                room for a focused session with a small group of students who
                are genuinely interested in learning.
              </p>

              <p>
                Through these sessions, IdeaXchange helps students see
                entrepreneurship as something accessible, practical, and close
                to home — not something distant or reserved only for established
                founders.
              </p>

              <p>
  Recent IdeaXchange sessions featured
  {" "}
<span className="group relative inline-block">
  <a
    href="SAVIO_LINKEDIN"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-[#60a5fa] underline underline-offset-4 decoration-[#60a5fa]/50 transition hover:text-white hover:decoration-white"
  >
    Savio Thomas
  </a>

  <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-[#0a0a0a] px-3 py-2 text-xs text-white opacity-0 transition duration-200 group-hover:opacity-100">
    LinkedIn Profile ↗
  </span>
</span>
  {" "}
  and
  {" "}
<span className="group relative inline-block">
  <a
    href="JELVIN_LINKEDIN"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-[#60a5fa] underline underline-offset-4 decoration-[#60a5fa]/50 transition hover:text-white hover:decoration-white"
  >
    Jelvin Soji
  </a>

  <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-[#0a0a0a] px-3 py-2 text-xs text-white opacity-0 transition duration-200 group-hover:opacity-100">
    LinkedIn Profile ↗
  </span>
</span>
  , who shared their experiences in entrepreneurship, business development, leadership, and identifying opportunities while still pursuing their academic journeys.
</p>
            </div>
          </section>

          <section className="mt-20">
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">
              Guest Speakers
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {speakers.map((speaker, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-1 hover:border-white/25"
                >

                  {speaker.image && (
                    <div className="relative h-[420px] bg-white">
  <Image
    fill
    src={speaker.image}
    alt={speaker.name}
    className="object-contain"
  />
</div>
                  )}

                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{speaker.name}</h3>

                    <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/35">
                      {speaker.role}
                    </p>

                    <p className="mt-5 text-sm leading-7 text-white/60">
                      {speaker.description}
                    </p>
                    
                  </div>
                </div>
                
              ))}
            </div>
            <div className="mt-6 grid gap-10 md:grid-cols-2 md:gap-0">
  <div>
    <div className="md:px-8 md:pr-12">
      <blockquote className="my-10">
  <p className="text-lg leading-9 italic text-white/75">
    “Building while still in college.

Savio Thomas shared his journey of balancing academics, student leadership, and entrepreneurship while building Flyfox Group. He spoke about taking initiative early, learning through experience, and embracing challenges as opportunities for growth.

The session encouraged students to look beyond traditional career paths and explore the possibilities of creating value through innovation, collaboration, and execution. Through practical examples from his own journey, Savio highlighted the importance of consistency, networking, and continuous learning.”
  </p>

  <p className="mt-5 text-right text-base italic text-white/50">
    — Savio Thomas
  </p>
</blockquote>
    </div>
  </div>

  <div>
    <div className="border-white/20 md:border-l md:pl-12">  
      <blockquote className="my-10">
  <p className="text-lg leading-9 italic text-white/75">
    “Creating opportunities through entrepreneurship.

Jelvin Soji spoke about identifying opportunities within everyday problems and transforming ideas into sustainable ventures. Drawing from his experience managing multiple businesses, he discussed the realities of entrepreneurship, decision-making, and adapting to changing market conditions.

Students gained insights into business ownership, personal branding, and the mindset required to build something meaningful while still pursuing their academic goals. The session also opened discussions around risk-taking, resilience, and long-term vision.”
  </p>

  <p className="mt-5 text-right text-base italic text-white/50">
    — Jelvin Soji
  </p>
</blockquote>
    </div>
  </div>
</div>
          </section>
        </>
      }
    />
  );
}