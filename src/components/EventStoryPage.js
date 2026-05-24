"use client";

import Image from "next/image";

export default function EventStoryPage({
  month,
  title,
  intro,
  storyOneTitle,
  storyOneText,
  storyTwoTitle,
  storyTwoText,
  storyThreeTitle,
  storyThreeText,
}) {
  return (
    <main className="min-h-screen bg-[#050505] px-6 pt-32 pb-24 text-white md:px-12">
      <section className="mx-auto max-w-6xl">
        {/* Hero */}
        <p className="mb-5 text-xs uppercase tracking-[0.4em] text-white/45">
          {month}
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
          {title}
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/65">
          {intro}
        </p>

        {/* Hero Banner */}
        <div className="relative mt-16 h-[520px] overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03]">
          {/* Replace later */}
          {/* <Image fill src="/images/events/example.jpg" alt="" className="object-cover" /> */}
        </div>

        {/* Story Block 1 */}
        <section className="mt-28 grid items-center gap-12 md:grid-cols-2">
          <div className="relative h-[380px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]">
            {/* Replace later */}
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/40">
              The Beginning
            </p>

            <h2 className="text-3xl font-semibold leading-tight">
              {storyOneTitle}
            </h2>

            <p className="mt-6 text-lg leading-9 text-white/65">
              {storyOneText}
            </p>
          </div>
        </section>

        {/* Story Block 2 */}
        <section className="mt-28 grid items-center gap-12 md:grid-cols-2">
          <div className="md:order-2 relative h-[380px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]">
            {/* Replace later */}
          </div>

          <div className="md:order-1">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/40">
              The Experience
            </p>

            <h2 className="text-3xl font-semibold leading-tight">
              {storyTwoTitle}
            </h2>

            <p className="mt-6 text-lg leading-9 text-white/65">
              {storyTwoText}
            </p>
          </div>
        </section>

        {/* Story Block 3 */}
        <section className="mt-28 grid items-center gap-12 md:grid-cols-2">
          <div className="relative h-[380px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]">
            {/* Replace later */}
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/40">
              The Outcome
            </p>

            <h2 className="text-3xl font-semibold leading-tight">
              {storyThreeTitle}
            </h2>

            <p className="mt-6 text-lg leading-9 text-white/65">
              {storyThreeText}
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section className="mt-32">
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">
            Gallery
          </p>

          <h2 className="mt-4 text-4xl font-semibold">
            Moments from the event.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="h-72 rounded-[28px] border border-white/10 bg-white/[0.03]" />

            <div className="h-72 rounded-[28px] border border-white/10 bg-white/[0.03]" />

            <div className="h-72 rounded-[28px] border border-white/10 bg-white/[0.03]" />
          </div>
        </section>
      </section>
    </main>
  );
}