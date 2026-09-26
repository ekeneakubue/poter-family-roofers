import Link from "next/link";
import { PhoneIcon, ShieldIcon } from "@/components/icons";
import { HeroSlides } from "@/components/hero-slides";
import { site } from "@/lib/site";

const badges = ["Licensed", "Bonded", "Insured"] as const;

export function Hero() {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden bg-navy-deep text-white">
      <HeroSlides />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-navy-deep/88 via-navy-deep/55 to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-navy-deep/50 via-transparent to-navy-deep/15" />

      <div className="relative z-20 mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-5 py-20 pb-16 sm:px-8 lg:px-10">
        <p className="font-display mb-5 text-sm tracking-[0.28em] text-copper uppercase">
          Richmond, Virginia · Family-owned roofing
        </p>
        <h1 className="font-display max-w-3xl text-4xl leading-[1.05] font-semibold tracking-wide uppercase sm:text-5xl lg:text-6xl">
          Protect Your Home With Reliable Roofing Services
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-cream/85">
          Same-day and next-day roof repair for leaks, storms, and worn
          shingles. Porter Family Roofers keeps Richmond homes dry with honest
          estimates and work that holds.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full bg-copper px-7 py-3.5 text-sm font-semibold tracking-[0.12em] text-white uppercase hover:bg-copper-hover"
          >
            Get a Free Roof Estimate
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold tracking-[0.12em] text-white uppercase backdrop-blur-sm hover:bg-white/10"
          >
            <PhoneIcon className="h-4 w-4" />
            Call Now
          </a>
        </div>
        <ul className="mt-10 flex flex-wrap items-center gap-3 text-sm font-semibold tracking-wide text-cream/90 uppercase">
          {badges.map((badge, index) => (
            <li key={badge} className="flex items-center gap-3">
              {index > 0 ? (
                <span className="hidden text-copper sm:inline" aria-hidden>
                  •
                </span>
              ) : null}
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5">
                <ShieldIcon className="h-4 w-4 text-copper" />
                {badge}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
