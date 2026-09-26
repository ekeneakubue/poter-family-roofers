import Link from "next/link";
import {
  FacebookIcon,
  GoogleIcon,
  InstagramIcon,
  RoofMark,
} from "@/components/icons";
import { serviceAreas, services, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-4 lg:px-10">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5">
            <RoofMark className="h-10 w-10" />
            <span>
              <span className="font-display block text-sm tracking-[0.12em] text-white uppercase">
                Porter Family
              </span>
              <span className="text-[11px] tracking-[0.2em] text-cream/60 uppercase">
                Roofers LLC
              </span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-7">
            Family-owned roofing for Richmond and nearby neighborhoods — repairs,
            replacements, and emergency help when the weather will not wait.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white hover:border-copper hover:text-copper"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white hover:border-copper hover:text-copper"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={site.reviewsLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google reviews"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white hover:border-copper hover:text-copper"
            >
              <GoogleIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="font-display text-sm tracking-[0.2em] text-white uppercase">
            Services
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 8).map((service) => (
              <li key={service.title}>
                <Link href="/#services" className="hover:text-copper">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm tracking-[0.2em] text-white uppercase">
            Service areas
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {serviceAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm tracking-[0.2em] text-white uppercase">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={site.phoneHref} className="hover:text-copper">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="hover:text-copper">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-copper"
              >
                {site.addressLine}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-cream">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-cream">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
