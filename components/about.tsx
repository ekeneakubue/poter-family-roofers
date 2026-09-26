import Image from "next/image";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="section-pad scroll-mt-28 bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80"
            alt="Porter Family Roofers crew working on a residential job"
            width={1400}
            height={1000}
            className="h-[420px] w-full rounded-3xl object-cover"
          />
          <p className="absolute bottom-5 left-5 rounded-full bg-navy px-4 py-2 text-xs font-semibold tracking-[0.16em] text-white uppercase">
            Serving {site.address.city} & nearby
          </p>
        </div>
        <div>
          <p className="font-display text-sm tracking-[0.28em] text-copper uppercase">
            About the company
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-wide text-navy uppercase sm:text-4xl">
            About Porter Family Roofers LLC
          </h2>
          <div className="mt-6 space-y-4 text-base leading-7 text-muted">
            <p>
              We are a Richmond roofing company built around one idea: your roof
              should be handled by people who will still answer the phone after
              the job is done.
            </p>
            <p>
              <strong className="font-semibold text-navy">Our mission</strong>{" "}
              is straightforward — keep Central Virginia homes dry with honest
              recommendations, clean workmanship, and fast help when weather
              does not wait.
            </p>
            <p>
              From {site.addressLine}, we cover about 55 miles of residential
              roofs: repairs, replacements, storm work, and the details that
              stop the next leak.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
