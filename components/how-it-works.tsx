import { steps } from "@/lib/site";

export function HowItWorks() {
  return (
    <section className="section-pad bg-cream">
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-sm tracking-[0.28em] text-copper uppercase">
          06 — How It Works
        </p>
        <h2 className="font-display mt-3 max-w-xl text-3xl font-semibold tracking-wide text-navy uppercase sm:text-4xl">
          Four steps from the first call to a sound roof
        </h2>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className="relative rounded-2xl border border-line bg-white p-6"
            >
              {index < steps.length - 1 ? (
                <span
                  className="absolute top-10 right-[-14px] hidden h-px w-7 bg-copper/40 xl:block"
                  aria-hidden
                />
              ) : null}
              <p className="font-display text-3xl text-copper">{step.number}</p>
              <h3 className="font-display mt-4 text-xl tracking-wide text-navy uppercase">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
