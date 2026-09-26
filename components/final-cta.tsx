import Link from "next/link";
import { PhoneIcon } from "@/components/icons";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8 sm:py-24 lg:px-10">
        <p className="font-display text-sm tracking-[0.28em] text-copper uppercase">
          10 — Get Protected
        </p>
        <h2 className="font-display mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-wide uppercase sm:text-5xl">
          Your Roof Protects Everything Under It. Let&apos;s Keep It Strong.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-cream/75">
          Free inspection. Clear estimate. A crew that treats your house like it
          is on their street.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full bg-copper px-7 py-3.5 text-sm font-semibold tracking-[0.12em] text-white uppercase hover:bg-copper-hover"
          >
            Get a Free Estimate
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold tracking-[0.12em] text-white uppercase hover:bg-white/10"
          >
            <PhoneIcon className="h-4 w-4" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
