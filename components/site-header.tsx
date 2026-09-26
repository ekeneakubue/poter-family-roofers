"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon, PhoneIcon, RoofMark } from "@/components/icons";
import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-navy text-cream">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-2 text-[13px] sm:px-8 lg:px-10">
          <p className="flex items-center gap-2 font-medium tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-copper opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-copper" />
            </span>
            Emergency Roof Repair Available
          </p>
          <div className="flex items-center gap-4">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-copper"
            >
              <PhoneIcon className="h-3.5 w-3.5" />
              {site.phone}
            </a>           
          </div>
        </div>
      </div>

      <div
        className={`border-b bg-cream/95 backdrop-blur-md transition-shadow ${
          scrolled ? "border-line shadow-[0_8px_24px_rgba(19,32,51,0.08)]" : "border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:px-10">
          <Link href="/" className="flex items-center gap-2.5">
            <RoofMark className="h-10 w-10 shrink-0" />
            <span className="whitespace-nowrap">
              <span className="font-display block text-[15px] leading-none font-semibold tracking-[0.12em] text-navy uppercase sm:text-base">
                Porter Family
              </span>
              <span className="mt-1 block text-[11px] tracking-[0.22em] text-muted uppercase">
                Roofers LLC
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-semibold tracking-wide text-navy/80 uppercase transition-colors hover:text-copper"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/#contact"
              className="hidden rounded-full bg-copper px-4 py-2.5 text-[12px] font-semibold tracking-[0.12em] text-white uppercase hover:bg-copper-hover md:inline-flex"
            >
              Get a Free Estimate
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-b border-line bg-cream lg:hidden"
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold tracking-wide text-navy uppercase hover:bg-cream-dark"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-copper px-4 py-3 text-center text-sm font-semibold tracking-wide text-white uppercase"
            >
              Get a Free Estimate
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
