import { MaterialIcon } from "@/components/icons";
import { materials } from "@/lib/site";

export function Materials() {
  return (
    <section className="section-pad bg-cream">
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-sm tracking-[0.28em] text-copper uppercase">
          08 — Materials & Solutions
        </p>
        <h2 className="font-display mt-3 max-w-xl text-3xl font-semibold tracking-wide text-navy uppercase sm:text-4xl">
          Roofing systems that fit the house and the weather
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((material, index) => (
            <article
              key={material.title}
              className="rounded-2xl border border-line bg-white p-6"
            >
              <MaterialIcon index={index} className="h-7 w-7 text-copper" />
              <h3 className="font-display mt-4 text-xl tracking-wide text-navy uppercase">
                {material.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {material.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
