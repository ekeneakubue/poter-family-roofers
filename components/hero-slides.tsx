"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=2400&q=80",
    alt: "Roofer installing shingles on a residential roof",
  },
  {
    src: "https://images.unsplash.com/photo-1763665814605-a6489a3bf2a0?auto=format&fit=crop&w=2400&q=80",
    alt: "Roofing crew installing shingles on a steep roof",
  },
  {
    src: "https://images.unsplash.com/photo-1635424709961-f3a150459ad4?auto=format&fit=crop&w=2400&q=80",
    alt: "Roofers installing asphalt shingles on a house",
  },
  {
    src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=2400&q=80",
    alt: "Finished shingle roof on a residential home",
  },
] as const;

export function HeroSlides() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(id);
  }, [index]);

  return (
    <>
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <div
          className="flex h-full transition-transform duration-700 ease-in-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slide.src} className="relative h-full w-full shrink-0">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={slideIndex === 0}
                sizes="100vw"
                className="object-cover object-[center_30%]"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show roofing photo ${slideIndex + 1} of ${slides.length}`}
            aria-current={slideIndex === index ? "true" : undefined}
            onClick={() => setIndex(slideIndex)}
            className={`h-2.5 rounded-full transition-all ${
              slideIndex === index ? "w-8 bg-copper" : "w-2.5 bg-white/55 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </>
  );
}
