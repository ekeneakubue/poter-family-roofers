import { ReasonIcon } from "@/components/icons";
import { reasons } from "@/lib/site";

export function WhyChoose() {
  return (
    <section className="section-pad bg-navy text-cream">
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-sm tracking-[0.28em] text-copper uppercase">
          04 — Why Porter Family
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-wide uppercase sm:text-4xl">
          Why Choose Porter Family Roofers?
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-cream/75">
          A local crew that shows up, explains the work, and leaves the roof
          better than we found it.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <ReasonIcon index={index} className="h-7 w-7 text-copper" />
              <h3 className="font-display mt-4 text-lg tracking-wide uppercase">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-cream/70">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
