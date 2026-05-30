"use client";

import { useRef, useState } from "react";
import EventStoryPage from "@/components/EventDetailPage";
import {
  HiOutlineSpeakerWave,
  HiOutlineSpeakerXMark,
} from "react-icons/hi2";
export default function OnamBazaarPage() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <EventStoryPage
      eventContent={
        <section className="mt-16 grid gap-12 md:grid-cols-[420px_1fr]">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black">
            <video
              ref={videoRef}
              src="/videos/iedc_events/onam-bazaar/onam_bazaar.MP4"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="h-[720px] w-full object-cover"
            />

            <button
              type="button"
              onClick={toggleMute}
              className="absolute bottom-5 right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white/70 backdrop-blur-sm transition hover:text-white"
            >
              {isMuted ? (
                <HiOutlineSpeakerXMark size={18} />
              ) : (
                <HiOutlineSpeakerWave size={18} />
              )}
            </button>
          </div>

          <div className="pt-6">
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/40">
              The Story
            </p>

            <h2 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Where culture, community, and entrepreneurship came together.
            </h2>

            <div className="mt-10 space-y-8 text-lg leading-9 text-white/65">
              <p>
                Onam Bazaar was created as a campus celebration that brought
                together Kerala’s festive spirit and student-led entrepreneurship.
              </p>

              <p>
                The event gave students a platform to explore business, sales,
                creativity, and teamwork through stalls, products, and campus
                participation.
              </p>

              <p>
                More than a festive marketplace, Onam Bazaar became a space
                where students could experience entrepreneurship in a practical
                and joyful way.
              </p>
            </div>
          </div>
        </section>
      }
      gallery={[
        "/images/iedc_events/onam-bazaar/onam-bazaar-1.jpg",
        "/images/iedc_events/onam-bazaar/onam-bazaar-2.jpg",
        "/images/iedc_events/onam-bazaar/onam-bazaar-3.jpg",
        "/images/iedc_events/onam-bazaar/onam-bazaar-4.jpg",
        "/images/iedc_events/onam-bazaar/onam-bazaar-5.jpg",
        "/images/iedc_events/onam-bazaar/onam-bazaar-6.jpg",
        "/images/iedc_events/onam-bazaar/onam-bazaar-7.jpg",
      ]}
    />
  );
}