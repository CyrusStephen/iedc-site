"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import {HiOutlineSpeakerWave, HiOutlineSpeakerXMark,} from "react-icons/hi2";

export default function EventStoryPage({
  heroImage,
  featuredVideo,
  eventContent,
  title,
  gallery = [],
}) {

  const [isMuted, setIsMuted] = useState(true);
const featuredVideoRef = useRef(null);

const toggleMute = () => {
  if (!featuredVideoRef.current) return;

  featuredVideoRef.current.muted =
    !featuredVideoRef.current.muted;

  setIsMuted(featuredVideoRef.current.muted);
};

  return (
    <main className="min-h-screen bg-[#050505] px-6 pt-12 pb-24 text-white md:px-12">
      <section className="mx-auto max-w-8xl">

        {heroImage && (
          <div className="relative mt-16 h-[420px] overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] md:h-[560px]">
            <Image 
            fill src={heroImage} 
            alt="Event banner"
            className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>
        )}

        {featuredVideo && (
          <section className="mt-20">
            <div className="relative overflow-hidden bg-black">
  <video
    ref={featuredVideoRef}
    src={featuredVideo}
    autoPlay
    loop
    playsInline
    muted={isMuted}
    className="h-[620px] w-full object-cover md:h-[605px]"
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
          </section>
        )}
        
{eventContent}

{gallery.length > 0 && (
  <section className="mt-20 ">
    <p className="text-xs uppercase tracking-[0.35em] text-white/40">
      Gallery
    </p>

    <h2 className="mt-4 text-4xl font-semibold">
      Moments from the event.
    </h2>

    <div className="mt-12 overflow-hidden">
  <div className="gallery-track gap-5">
    {[...gallery, ...gallery].map((image, index) => (
      <div
        key={index}
        className="relative h-[260px] min-w-[360px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
      >
        <Image
          fill
          src={image}
          alt={`${title} gallery ${index + 1}`}
          className="object-cover transition duration-700 hover:scale-105"
        />
      </div>
    ))}
  </div>
</div>
  </section>
)}
      </section>
    </main>
  );
}