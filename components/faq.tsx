import { faqs } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="section-pad scroll-mt-28 bg-white">
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-sm tracking-[0.28em] text-copper uppercase">
          09 — FAQs
        </p>
        <h2 className="font-display mt-3 max-w-xl text-3xl font-semibold tracking-wide text-navy uppercase sm:text-4xl">
          Questions homeowners ask before they book
        </h2>
        <div className="mt-10 grid gap-3 lg:grid-cols-2">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="faq-item group rounded-2xl border border-line bg-cream px-5 py-2"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3 text-left font-semibold text-navy">
                {faq.question}
                <span className="faq-plus flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-lg leading-none text-copper transition-transform">
                  +
                </span>
              </summary>
              <p className="pb-4 text-sm leading-7 text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
