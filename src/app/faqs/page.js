"use client";

const faqs = [
  {
    question: "How can I join IEDC SB?",
    answer: "Add your answer here.",
  },
  {
    question: "Do I need a startup idea to become a member?",
    answer: "Add your answer here.",
  },
  {
    question: "Can students from any department join?",
    answer: "Add your answer here.",
  },
  {
    question: "How can I pitch an idea to IEDC?",
    answer: "Add your answer here.",
  },
  {
    question: "Can colleges or organizations collaborate with IEDC SB?",
    answer: "Add your answer here.",
  },
  {
    question: "Who should I contact for partnerships or events?",
    answer: "Add your answer here.",
  },
];

export default function FAQsPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 py-24 md:px-8 md:py-32">
        <p
          className="mb-4 text-sm font-medium uppercase tracking-[0.28em]"
          style={{ color: "var(--muted)" }}
        >
          FAQs
        </p>

        <h1
          className="text-4xl font-semibold tracking-tight md:text-6xl"
          style={{ color: "var(--text)" }}
        >
          Frequently asked questions.
        </h1>

        <p
          className="mt-6 max-w-2xl text-lg leading-8"
          style={{ color: "var(--muted)" }}
        >
          Answers to common questions about memberships, startups,
          collaborations, events, and community involvement.
        </p>

        <div
          className="mt-16 rounded-[2rem] border p-6 md:p-8"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          <div
            className="divide-y"
            style={{ borderColor: "var(--border)" }}
          >
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="py-6 first:pt-0 last:pb-0"
              >
                <h2
                  className="text-lg font-medium"
                  style={{ color: "var(--text)" }}
                >
                  {faq.question}
                </h2>

                <p
                  className="mt-3 text-sm leading-7"
                  style={{ color: "var(--muted)" }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}