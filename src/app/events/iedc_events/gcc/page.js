import Image from "next/image";
import EventStoryPage from "@/components/EventDetailPage";

export default function GCCPage() {
  
  const speakers = [
  {
          name: "Samson Mathew",
          role: "State Executive, Kerala Vyapari Vyavasayi Ekopana Samithi",
          image: "/images/iedc_events/gcc/samson-matthew.jpeg",
          description:
            "Shared perspectives on entrepreneurship, leadership, and the evolving business ecosystem.",
        },
        {
          name: "Tomy C Vadayil",
          role: "Managing Director, Toms Pipes",
          image: "/images/iedc_events/gcc/tomy_vadayil.jpeg",
          description:
            "Brought real-world industrial and business experience into the conversation with students.",
        },
        {
          name: "Mathew Joseph",
          role: "COO & Co-Founder, FreshToHome",
          image: "/images/iedc_events/gcc/mathew-joseph.jpeg",
          description:
            "Spoke about execution, scalability, and modern entrepreneurial thinking from a startup journey.",
        },
];

  return (
    <EventStoryPage
  featuredVideo="/videos/iedc_events/gcc/gcc-hero.mp4"
  eventContent={
    <>
      <section className="mt-16">
  <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/40">
    The Story
  </p>

  <h2 className="max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">
    Building a platform for ideas, entrepreneurship, and change.
  </h2>

<div className="mt-10 space-y-10 text-lg leading-9 text-white/65">

  <p>
    Grand Circle of Changemakers was envisioned as a flagship IEDC
    initiative designed to bring entrepreneurship, innovation, student
    creativity, and real business conversations into one shared platform.
  
    GCC was built as more than a conventional seminar. It brought together
    entrepreneurial talks, ideation, pitching, recognition, and student
    participation into a single experience where ideas could be discussed,
    challenged, and celebrated.
  </p>

  <p>
    A key highlight of the event was the Entrepreneur Talk session, which
    brought together three accomplished business leaders from different
    sectors.
    <br/>
    <a
  href="SAMSON_LINKEDIN"
  target="_blank"
  rel="noopener noreferrer"
  className="group relative font-semibold text-[#60a5fa] underline underline-offset-4 decoration-[#60a5fa]/50 transition hover:text-white hover:decoration-white"
>
  Samson Mathew

  <span className="pointer-events-none absolute left-0 -top-12 whitespace-nowrap rounded-lg border border-white/10 bg-[#0a0a0a] px-3 py-2 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    LinkedIn Profile ↗
  </span>
</a>,
    State Executive of the Kerala Vyapari Vyavasayi Ekopana Samithi,
    shared insights into leadership, business communities, and the
    importance of resilience in entrepreneurship.

    {" "}
    <a
  href="TOMY_LINKEDIN"
  target="_blank"
  rel="noopener noreferrer"
  className="group relative font-semibold text-[#60a5fa] underline underline-offset-4 decoration-[#60a5fa]/50 transition hover:text-white hover:decoration-white"
>
  Tomy C Vadayil

  <span className="pointer-events-none absolute left-0 -top-12 whitespace-nowrap rounded-lg border border-white/10 bg-[#0a0a0a] px-3 py-2 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    LinkedIn Profile ↗
  </span>
</a>,
    Managing Director of Toms Pipes, reflected on building a successful
    manufacturing enterprise from humble beginnings and the value of
    long-term vision, quality, and consistency.
    
    {" "}
    <a
  href="MATHEW_LINKEDIN"
  target="_blank"
  rel="noopener noreferrer"
  className="group relative font-semibold text-[#60a5fa] underline underline-offset-4 decoration-[#60a5fa]/50 transition hover:text-white hover:decoration-white"
>
  Mathew Joseph

  <span className="pointer-events-none absolute left-0 -top-12 whitespace-nowrap rounded-lg border border-white/10 bg-[#0a0a0a] px-3 py-2 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    LinkedIn Profile ↗
  </span>
</a>,
    COO and Co-Founder of FreshToHome, spoke about innovation, scaling
    modern businesses, and the realities of transforming an idea into a
    high-growth venture.
  </p>

  {speakers.length > 0 && (
          <section className="mt-10">
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">
              Voices that shaped the conversation.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {speakers.map((speaker, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-1 hover:border-white/25"
                >
                  {speaker.image && (
                    <div className="relative h-72">
                      <Image
                        fill
                        src={speaker.image}
                        alt={speaker.name}
                        className="object-cover"
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
          </section>
        )}

  <p>
    For many students, GCC was not just an event but an opportunity to
    interact with founders, industry leaders, and changemakers whose
    journeys demonstrated that meaningful businesses are built through
    persistence, adaptability, and a willingness to solve real problems.
  
    The conversations, ideas, and experiences shared throughout the event
    laid the foundation for what GCC aims to become — a larger and more
    impactful annual platform for innovation and entrepreneurship at
    Saint Berchmans College.
  </p>

    As part of GCC, students were challenged to identify problems,
    develop solutions, and pitch their ideas. 
    <p className="text-lg leading-9 text-white/65">
  <span className="font-semibold text-white"> 
  The winning team,
  {" "}
   <a
  href="https://www.linkedin.com/in/-john-j/"
  target="_blank"
  rel="noopener noreferrer"
  className="group relative font-semibold text-[#60a5fa] underline underline-offset-4 decoration-[#60a5fa]/50 transition hover:text-white hover:decoration-white"
>
John Joji

  <span className="pointer-events-none absolute left-0 -top-12 whitespace-nowrap rounded-lg border border-white/10 bg-[#0a0a0a] px-3 py-2 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    LinkedIn Profile ↗
  </span>
</a>
  {" "}and{" "}
  <a
  href="https://www.linkedin.com/in/melvin-thomas-4063053ab/"
  target="_blank"
  rel="noopener noreferrer"
  className="group relative font-semibold text-[#60a5fa] underline underline-offset-4 decoration-[#60a5fa]/50 transition hover:text-white hover:decoration-white"
>
  Melvin Thomas

  <span className="pointer-events-none absolute left-0 -top-12 whitespace-nowrap rounded-lg border border-white/10 bg-[#0a0a0a] px-3 py-2 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    LinkedIn Profile ↗
  </span>
</a>
  , demonstrated strong creativity, execution potential, and
  problem-solving ability, earning recognition and a cash prize of
  ₹25,000.</span>
</p>

  <div className="relative overflow-hidden bg-black">
    <img
      src="/images/iedc_events/gcc/gcc-winners.jpeg"
      alt="Ideathon Winners"
      className="h-[580px] w-full object-cover md:h-[740px]"
    />
  </div>
  </div>
</section>
    </>
  }

      gallery={[
        "/images/iedc_events/gcc/gcc-1.jpg",
        "/images/iedc_events/gcc/gcc-2.jpg",
        "/images/iedc_events/gcc/gcc-3.jpg",
        "/images/iedc_events/gcc/gcc-4.jpg",
      ]}
    />
  );
}