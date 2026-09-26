import Link from "next/link";
import { ArrowIcon, ServiceIcon } from "@/components/icons";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="section-pad scroll-mt-28 bg-cream">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-display text-sm tracking-[0.28em] text-copper uppercase">
              03 — Roofing Services
            </p>
            <h2 className="font-display mt-3 max-w-xl text-3xl font-semibold tracking-wide text-navy uppercase sm:text-4xl">
              Roof repair and replacement for Richmond homes
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-muted">
            From an active leak to a full tear-off, we handle the work that
            keeps water out and your house protected.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href="/#contact"
              className="group rounded-2xl border border-line bg-white p-6 shadow-[0_10px_30px_rgba(19,32,51,0.04)] transition-all hover:-translate-y-1 hover:border-copper/40 hover:shadow-[0_16px_40px_rgba(19,32,51,0.08)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-copper group-hover:bg-copper group-hover:text-white">
                <ServiceIcon name={service.title} className="h-6 w-6" />
              </span>
              <h3 className="font-display mt-5 text-xl tracking-wide text-navy uppercase">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {service.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-copper uppercase">
                Request this service
                <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
