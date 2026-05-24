export default function WomenEmpowerPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 pt-32 pb-24 text-white md:px-12">
      <section className="mx-auto max-w-6xl">
        <p className="mb-5 text-xs uppercase tracking-[0.4em] text-white/45">
          August 2026
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
          Women Empowerment
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
              A flagship event by IEDC focused on empowering women in innovation and entrepreneurship. This event celebrates the achievements of women in the startup ecosystem, provides a platform for networking and mentorship, and inspires the next generation of female innovators. Through keynote speeches, panel discussions, workshops, and networking sessions, Women Empowerment aims to foster an inclusive environment where women can share their stories, learn from industry leaders, and gain the confidence to pursue their entrepreneurial dreams. The event also highlights the importance of diversity in innovation and encourages more women to take on leadership roles in the startup world. 
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
              Write the full description of Women Empowerment here. Explain what the
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