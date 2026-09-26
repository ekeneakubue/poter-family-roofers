import Image from "next/image";
import Link from "next/link";
import { emergencies } from "@/lib/site";

export function Emergency() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-white">
      <Image
        src="https://images.unsplash.com/photo-1527482797697-8795b05a13fe?auto=format&fit=crop&w=2000&q=80"
        alt="Storm clouds over a neighborhood"
        fill
        sizes="100vw"
        className="object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/92 to-navy/70" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center lg:px-10">
        <div>
          <p className="font-display text-sm tracking-[0.28em] text-copper uppercase">
            05 — Emergency Roofing
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-wide uppercase sm:text-5xl">
            Roof Damage? Don&apos;t Wait Until It Gets Worse.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-cream/80">
            Water moves fast once it is inside. If a storm just hit or a leak
            started this morning, we can tarp, patch, or schedule an urgent
            repair before the ceiling, insulation, and framing take the hit.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex rounded-full bg-copper px-7 py-3.5 text-sm font-semibold tracking-[0.12em] text-white uppercase hover:bg-copper-hover"
          >
            Request Emergency Roof Repair
          </Link>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {emergencies.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-copper" />
              <span className="text-sm font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
