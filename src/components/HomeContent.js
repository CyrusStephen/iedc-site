
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CampusMapSection from "@/components/CampusMapSection";
import { useEffect, useState } from "react";

const sectionAnimation = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.65, ease: "easeOut" },
};

const startups = [
  {
    title: "Startup Name",
    description: "A venture by a 3rd year student, focused on solving [problem].",
    image: "/images/startups/startup-one.jpg",
    href: "/student-startups/startup-one",
  },
  {
    title: "Startup Name",
    description: "A venture by a 3rd year student, focused on solving [problem].",
    image: "/images/startups/startup-two.jpg",
    href: "/student-startups/startup-two",
  },
  {
    title: "Startup Name",
    description: "A venture by a 3rd year student, focused on solving [problem].",
    image: "/images/startups/startup-three.jpg",
    href: "/student-startups/startup-three",
  },
];

const collaborations = [
  {
    label: "Partner",
    title: "College Name",
    image: "/images/collaborations/college-1.jpg",
    description:
      "Joint innovation events, hackathons, and knowledge exchange.",
    href: "#",
    readTime: "Partner",
  },
  {
    label: "Partner",
    title: "College Name",
    image: "/images/collaborations/college-2.jpg",
    description:
      "Building cross-campus startup ecosystem together.",
    href: "#",
    readTime: "Partner",
  },
  {
    label: "Partner",
    title: "College Name",
    image: "/images/collaborations/college-3.jpg",
    description:
      "Knowledge sharing and student innovation initiatives.",
    href: "#",
    readTime: "Partner",
  },
];

const stories = [
  {
    label: "Story",
    title: "Student Story",
    description: "A student journey shaped by ideas, action, and campus innovation.",
    href: "/stories",
    image: "/images/stories/student-story.jpg",
    readTime: "4 min read",
  },
  {
    label: "Founder",
    title: "Founder Journey",
    description: "How student founders move from early thoughts to real execution.",
    href: "/stories",
    image: "/images/stories/founder-journey.jpg",
    readTime: "5 min read",
  },
  {
    label: "Community",
    title: "Campus Builders",
    description: "The people building the innovation culture inside Saint Berchmans.",
    href: "/stories",
    image: "/images/stories/campus-builders.jpg",
    readTime: "3 min read",
  },
  {
  label: "Community",
  title: "Innovation Journey",
  description: "A look into how ideas evolve into projects and startups.",
  href: "/stories",
  image: "/images/stories/innovation-journey.jpg",
  readTime: "4 min read",
},
];

const events = [
  {
    label: "Innovation Meet",
    title: "Grand Circle of Changemakers",
    href: "/events/iedc_events/gcc",
    video: "/videos/iedc_events/gcc/only_gcc_front.mp4",
    description:
      "A flagship gathering of changemakers, builders, and student leaders.",
    readTime: "5 min read",
  },
  {
    label: "IEDC Event",
    title: "IdeaXchange",
    href: "/events/iedc_events/ideaxchange",
    image: "/images/iedc_events/ideaXchange.png",
    description:
      "A campus session built around ideas, conversations, and student innovation.",
    readTime: "4 min read",
  },
  {
    label: "Campus Moment",
    title: "Onam Bazaar",
    href: "/events/iedc_events/onam-bazaar",
    video: "/videos/iedc_events/onam-bazaar/only_onam_bazaar_front.mp4",
    description:
      "A student-led campus marketplace celebrating creativity, culture, and community.",
    readTime: "3 min read",
  },
  {
  label: "Workshop",
  title: "Startup Workshop",
  href: "/events/startup-workshop",
  image: "/images/iedc_events/workshop.jpg",
  description:
    "Hands-on sessions helping students build, validate, and launch ideas.",
  readTime: "4 min read",
},
];

const tvItems = [
  {
    label: "Coming Soon",
    title: "IEDC TV",
    href: "/tv",
    image: "/images/placeholders/tv.jpg",
    description:
      "Conversations, founder stories, student journeys, and innovation from campus.",
    readTime: "Coming Soon",
  },
  {
    label: "Coming Soon",
    title: "Campus Talk",
    href: "/tv",
    image: "/images/placeholders/campus-talk.jpg",
    description:
      "Student discussions, perspectives, and stories from the community.",
    readTime: "Coming Soon",
  },
  {
    label: "Coming Soon",
    title: "Founder Clip",
    href: "/tv",
    image: "/images/placeholders/founder.jpg",
    description:
      "Short interviews and insights from builders, mentors, and founders.",
    readTime: "Coming Soon",
  },
  {
    label: "Coming Soon",
    title: "IEDC Interviews",
    href: "/tv",
    image: "/images/placeholders/interviews.jpg",
    description:
      "Conversations with students, mentors, founders, and campus leaders.",
    readTime: "Coming Soon",
  },
];

export default function HomeContent() {
  return (
    <section
      id="our-mission"
      className="relative w-full px-6 pt-6 pb-28 md:px-12 space-y-22 scroll-mt-32"
    >
      <VisionCard />

      <motion.div
        {...sectionAnimation}
        className="max-w-3xl mx-auto text-center space-y-6"
      >
        <p className="text-xs uppercase tracking-[0.35em] text-white/50">
          Student Innovation
        </p>

        <h2 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
          Built by students.
          <br className="hidden md:block" />
          Scaled through execution.
        </h2>

        <p className="text-base md:text-lg text-white/70 leading-relaxed">
          From early ideas to real startups, IEDC enables students to build,
          experiment, and launch meaningful ventures.
        </p>
      </motion.div>

      <div id="student-startups" className="scroll-mt-32">
  <Section title="Student Businesses and Startups">
    <HorizontalCardSlider items={startups} hideMeta />
  </Section>
</div>

      <div id="collaborations" className="scroll-mt-32">
        <Section title="Collaborations">
          <div className="grid gap-6 md:grid-cols-3">
            {collaborations.map((item, index) => (
              <InfoCard key={index} {...item} />
            ))}
          </div>
        </Section>
      </div>

      <div id="campus-map" className="scroll-mt-32">
        <CampusMapSection />
      </div>

      <CommunityDivider />

      <div id="iedc-stories" className="scroll-mt-32">
        <Section title="IEDC Stories">
          <HorizontalCardSlider items={stories} />
        </Section>
      </div>

      <div id="iedc-events" className="scroll-mt-32">
        <Section title="IEDC Events">
          <HorizontalCardSlider items={events} />
        </Section>
      </div>

      <div id="iedc-tv" className="scroll-mt-32">
  <Section title="IEDC TV">
    <HorizontalCardSlider items={tvItems} />
  </Section>
</div>
    </section>
  );
}

function VisionCard() {
  return (
    <motion.div
      {...sectionAnimation}
      className="relative -mt-12 md:-mt-16 left-1/2 right-1/2 -mx-[50vw] w-screen"
    >
      <div className="group relative h-96 md:h-[450px] rounded-b-[2rem] overflow-hidden border border-white/10 cursor-pointer transition-all duration-500 hover:border-white/30 hover:shadow-[0_30px_90px_rgba(255,255,255,0.08)]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/vision.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40 transition duration-500 group-hover:bg-black/25" />

        <div className="relative z-10 flex h-full items-end p-6">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.35em] text-white/50">
              Our Vision
            </p>

            <h3 className="text-2xl font-semibold text-white md:text-3xl">
              What IEDC Saint Berchmans is building this year
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CommunityDivider() {
  const images = [
    {
      src: "/images/community/iedc_2025_2026.jpeg",
      style: "object-contain md:object-cover object-center scale-100",
      year: "2025-26",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      {...sectionAnimation}
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden"
    >
      <div className="group relative h-[360px] bg-black md:h-[670px] cursor-pointer overflow-hidden">
        <img
          src={images[currentImage]?.src}
          alt="IEDC Community"
          className={`absolute inset-0 h-full w-full ${images[currentImage]?.style} transition duration-1000 group-hover:scale-105`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/25 to-transparent opacity-70 transition duration-700 group-hover:opacity-90" />
        <div className="absolute inset-0 bg-black/10 opacity-0 transition duration-700 group-hover:opacity-100" />

        <div className="relative z-10 flex h-full items-end px-8 pb-10 opacity-0 translate-y-4 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:translate-y-0 md:px-14 md:pb-14">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/35">
              {images[currentImage]?.year}
            </p>

            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/45">
              Community
            </p>

            <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
              Innovation grows faster
              <br />
              when people build together.
            </h2>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-b from-transparent to-[#050505]" />
      </div>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-500 ${
              currentImage === index ? "w-8 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

function Section({ title, children }) {
  return (
    <motion.div {...sectionAnimation}>
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-white md:text-3xl">
        {title}
      </h2>

      {children}
    </motion.div>
  );
}

function InfoCard({ title, description }) {
  return (
    <div  className="rounded-2xl border p-8 min-h-[150px] transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="mt-2 text-sm leading-6" style={{ color: "var(--muted)" }}>
        {description}
      </p>
    </div>
  );
}

function HorizontalCardSlider({
  items,
  imageHeight,
  hideMeta = false,
}) {
  const scrollAmount = 420;
  const sliderId = `slider-${items[0]?.title
    ?.replace(/\s+/g, "-")
    .toLowerCase()}`;

  const scroll = (direction) => {
    const container = document.getElementById(sliderId);
    if (!container) return;

    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => scroll("prev")}
        className="absolute -left-5 top-1/2 z-20 -translate-y-1/2 rounded-r-xl bg-white/[0.03] px-4 py-6 text-white shadow-xl transition hover:bg-white/10"
        aria-label="Previous cards"
      >
        ‹
      </button>

      <div
        id={sliderId}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="min-w-[86%] sm:min-w-[48%] lg:min-w-[24%]"
          >
            <div className="group overflow-hidden rounded-2xl bg-white/[0.03] text-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
              <div className={`relative ${imageHeight || "h-48"} overflow-hidden bg-black/10`}
>
                {item.video && (
                  <video
                    src={item.video}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="metadata"
                  />
                )}

                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                )}
              </div>

              <div className="flex h-[165px] flex-col p-5 sm:p-6">
                <h3 className="text-lg font-bold leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/60">
                  {item.description}
                </p>

                {!hideMeta && (
                  <div className="mt-auto flex items-center justify-between text-xs font-bold uppercase tracking-wide text-white/55">
                    <span>{item.label}</span>
                    <span className="normal-case font-medium">
                      {item.readTime}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <button
        onClick={() => scroll("next")}
        className="absolute -right-5 top-1/2 z-20 -translate-y-1/2 rounded-l-xl bg-white/[0.03] px-4 py-6 text-white shadow-xl transition hover:bg-white/10"
        aria-label="Next cards"
      >
        ›
      </button>
    </div>
  );
}