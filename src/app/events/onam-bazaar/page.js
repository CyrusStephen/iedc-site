export default function OnamBazaarPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 pt-32 pb-24 text-white md:px-12">
      <section className="mx-auto max-w-6xl">
        <p className="mb-5 text-xs uppercase tracking-[0.4em] text-white/45">
          August 2026
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
          Onam Bazaar
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
          student startup and business showcase event during Onam, where students present their ventures, products, and ideas to the campus community, fostering entrepreneurship and innovation.
        </p>

        <div className="mt-16 h-[420px] rounded-3xl border border-white/10 bg-white/[0.03]" />

        <section className="mt-20 grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">
              About the Event
            </p>
          </div>

          <div className="space-y-6 text-lg leading-9 text-white/65">
            <p>
              Write the full description of Onam Bazaar here. Explain what the
              event is, why it matters, who participates, and how it helps
              students think, build, and present ideas.
            </p>

            <p>
              Later, this page can include photos, videos, speaker details,
              registration links, outcomes, and student highlights.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}