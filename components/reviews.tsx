"use client";

import { useState } from "react";
import { GoogleIcon, StarIcon } from "@/components/icons";
import { reviews } from "@/lib/site";

const initialCount = 3;

export function Reviews() {
  const [expanded, setExpanded] = useState(false);
  const visibleReviews = expanded ? reviews : reviews.slice(0, initialCount);

  return (
    <section id="reviews" className="section-pad scroll-mt-28 bg-cream">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-display text-sm tracking-[0.28em] text-copper uppercase">
              07 — Customer Reviews
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-wide text-navy uppercase sm:text-4xl">
              Neighbors who already called us
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3">
            <GoogleIcon className="h-7 w-7 text-navy" />
            <div>
              <p className="flex items-center gap-1 text-navy">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} className="h-4 w-4 text-[#f4b400]" />
                ))}
              </p>
              <p className="text-xs font-semibold tracking-wide text-muted uppercase">
                4.9 average · Google reviews
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {visibleReviews.map((review) => (
            <article
              key={review.name}
              className="flex flex-col rounded-2xl border border-line bg-white p-6"
            >
              <div className="flex items-center justify-between">
                <GoogleIcon className="h-5 w-5 text-navy" />
                <span className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} className="h-4 w-4 text-[#f4b400]" />
                  ))}
                </span>
              </div>
              <p className="mt-5 flex-1 text-sm leading-7 text-ink">
                “{review.text}”
              </p>
              <p className="mt-6 text-sm font-semibold text-navy">
                {review.name}
              </p>
              <p className="text-xs tracking-wide text-muted uppercase">
                {review.location}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <button
            type="button"
            aria-expanded={expanded}
            onClick={() => setExpanded((value) => !value)}
            className="inline-flex rounded-full border border-navy px-6 py-3 text-sm font-semibold tracking-[0.12em] text-navy uppercase hover:bg-navy hover:text-white"
          >
            {expanded ? "Show Less Reviews" : "View All Reviews"}
          </button>
        </div>
      </div>
    </section>
  );
}
